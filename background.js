"use strict";
// @ts-nocheck
// https://stackoverflow.com/questions/47075437/cannot-find-namespace-name-chrome
// These make sure that our function is run every time the browser is opened.
chrome.runtime.onInstalled.addListener(function () {
    // called when you manually reload the extension within chrome://extensions, or when the extension calls chrome.runtime.reload()
    initializeAlarm();
});
chrome.runtime.onStartup.addListener(function () {
    // only called when Chrome starts, not when the extension starts.
    initializeAlarm();
});
// To test in the future if background.js doesn't wake up when needed:
// initializeAlarm();
function clearAllAlarmsAsync() {
    return new Promise((resolve) => {
        chrome.alarms.clearAll(resolve);
    });
}
chrome.runtime.onMessage.addListener((request) => {
    (async () => {
        if (request === 'refreshAlarms') {
            await clearAllAlarmsAsync();
            initializeAlarm();
        }
    })();
});
async function initializeAlarm() {
    const storageLocalObjects = await asyncGetStorageLocal(null);
    const settingsObject = storageLocalObjects.redmineTaskNotificationsExtensionSettings;
    let alertCheckFrequencyInMinutes = 5;
    if (settingsObject) {
        alertCheckFrequencyInMinutes = settingsObject.refreshIntervalInMinutes;
    }
    //   console.log(`Alarm set with a refresh interval of ${alertCheckFrequencyInMinutes}`);
    // https://developer.chrome.com/docs/extensions/reference/alarms/#type-Alarm
    // "Chrome limits alarms to at most once every 1 minute"
    // To help you debug your app or extension, when you've loaded it unpacked, there's no limit to how often the alarm can fire.
    chrome.alarms.create('mainFunction', {
        periodInMinutes: parseInt(alertCheckFrequencyInMinutes)
    });
}
// A listener should only be added once
chrome.alarms.onAlarm.addListener(() => {
    main();
});
// Dev mode:
// function initializeAlarm() {
//     chrome.alarms.get('mainFunction', alarm => {
//         if (!alarm) {
//             chrome.alarms.create('mainFunction', { periodInMinutes: 0.2 });
//         }
//     })
// }
const main = async () => {
    try {
        const storageLocalObjects = await asyncGetStorageLocal(null);
        let wasArrayUpdated = false;
        let d = new Date();
        let newDateFormatted = ('0' + d.getDate()).slice(-2) +
            '-' +
            ('0' + (d.getMonth() + 1)).slice(-2) +
            '-' +
            d.getFullYear() +
            ' ' +
            ('0' + d.getHours()).slice(-2) +
            ':' +
            ('0' + d.getMinutes()).slice(-2);
        let alertObjectArray = storageLocalObjects.redmineTaskNotificationsExtension;
        const extensionSettingsObject = storageLocalObjects.redmineTaskNotificationsExtensionSettings;
        let domainName = extensionSettingsObject.domainName.trim();
        if (domainName.endsWith('/')) {
            domainName = domainName.slice(0, -1);
        }
        const redmineIssueUrl = `${domainName}/issues/`;
        if (!!alertObjectArray.length) {
            let editedObjectsOfAlertObjectArray = [];
            for (const alertObject of alertObjectArray) {
                if (alertObject.triggeredInThePast === false) {
                    // console.log('found an active alert')
                    let redmineTaskTextDom = await sendRequestAndGetTextDom(alertObject.redmineTaskId);
                    // console.log('value to check: ' + alertObject.valueToCheckValue)
                    // console.log('value parsed from text dom: ' + getValueFromTextDom(redmineTaskTextDom, alertObject.fieldToCheckValue))
                    const parsedValue = getValueFromTextDom(redmineTaskTextDom, alertObject.fieldToCheckValue);
                    if (parsedValue === alertObject.valueToCheckValue ||
                        (parsedValue !== '' && alertObject.valueToCheckValue === 'notEmpty')) {
                        if (wasArrayUpdated === false) {
                            wasArrayUpdated = true;
                        }
                        // Create an updated alert object
                        alertObject.triggeredInThePast = true;
                        alertObject.triggeredAtTimestamp = new Date().getTime();
                        alertObject.triggeredAtReadableDate = newDateFormatted;
                        editedObjectsOfAlertObjectArray.push(alertObject);
                        if (extensionSettingsObject) {
                            // Raise a browser alert in the currently active tab (either newly created or present one depending on user preference)
                            if (extensionSettingsObject.newTabEnabled === true) {
                                chrome.tabs.create({
                                    url: redmineIssueUrl + alertObject.redmineTaskId
                                });
                            }
                            const sendMessageToActiveTabContentScript = (action, requestData) => {
                                chrome.tabs.query({ active: true, currentWindow: true }, function (tabs) {
                                    chrome.tabs.sendMessage(tabs[0].id, new Object({
                                        action: action,
                                        data: requestData
                                    }), function (response) {
                                        if (response) {
                                            console.log('background.js worker received a response from content.js...');
                                        }
                                    });
                                });
                            };
                            // Create and focus on a new Redmine tab with the triggered task page
                            if (extensionSettingsObject.browserAlertEnabled === true) {
                                await sleep(2 * 1000);
                                sendMessageToActiveTabContentScript('raiseAlert', new Object({
                                    text: `#${alertObject.redmineTaskId} triggered an alert because "${alertObject.fieldToCheckLabel}" value has changed to "${alertObject.valueToCheckLabel}" (at ${alertObject.triggeredAtReadableDate}).`
                                }));
                            }
                            if (extensionSettingsObject.iconBadgeEnabled === true) {
                                chrome.action.setBadgeText({ text: ' ' });
                                chrome.action.setBadgeBackgroundColor({ color: '#FF3C3C' }, () => {
                                    /* ... */
                                });
                            }
                        }
                    }
                }
            }
            if (wasArrayUpdated === true) {
                const updatedAlertObjectArray = replaceObjectsInOriginalArrayWithOtherArrayObjects(alertObjectArray, editedObjectsOfAlertObjectArray, 'uniqueTimestampId');
                asyncSetStorageLocal('redmineTaskNotificationsExtension', updatedAlertObjectArray);
                console.log('At least one alert was triggered during main() check...');
            }
            else if (wasArrayUpdated === false) {
                console.log('No alerts were triggered during main() check...');
            }
            await sleep(1 * 1000);
        }
        else {
            console.log('No active alerts were found, therefore none were checked...');
        }
    }
    catch (e) {
        // sendErrorLog('Error in background.ts: ' + e);
    }
};
// Google form for user analytics and error logging (also in popup.ts)
const googleFormUrl = 'https://docs.google.com/forms/u/0/d/e/1FAIpQLSeCG85Vno3ZbydBiJjwP6P-nYj-1ZElDBEznt7n4LK5cfJFag/formResponse';
const sendErrorLog = async (errorMessage) => {
    fetch(googleFormUrl, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/x-www-form-urlencoded'
        },
        body: new URLSearchParams({
            'entry.1257070925': 'NA',
            'entry.1232033723': 'NA',
            'entry.1273942264': 'NA',
            'entry.1822505748': 'NA',
            'entry.1949912164': 'NA',
            'entry.879864049': errorMessage
        })
    });
};
const sendRequestAndGetTextDom = async (taskId) => {
    try {
        const redmineResponse = await fetch(`https://redmine.tribepayments.com/issues/${taskId}`, {
            method: 'GET',
            headers: {},
            body: null
        });
        let htmlString = await redmineResponse.text();
        return htmlString;
    }
    catch (error) {
        console.log('ERROR in sendRequestAndGetTextDom func' + error);
        return 'error';
    }
};
const getValueFromTextDom = (string, fieldId) => {
    let regex = new RegExp(`id="${fieldId}"(.|\\n)+?selected="selected"\\svalue="(.*)"`);
    let match = regex.exec(string);
    if (match) {
        if (match[2]) {
            return match[2]; // [1] is the 1st group that's found
        }
        else {
            return '';
        }
    }
    else {
        return '';
    }
};
function asyncGetStorageLocal(key) {
    return new Promise((resolve) => {
        chrome.storage.sync.get(key, resolve);
    });
}
function asyncSetStorageLocal(key, newValue) {
    return new Promise((resolve) => {
        chrome.storage.sync.set({ [key]: newValue }, resolve);
    });
}
const replaceObjectsInOriginalArrayWithOtherArrayObjects = (initialArray, replacementValueArray, key) => {
    return initialArray.map((obj) => replacementValueArray.find((o) => o[key] === obj[key]) || obj);
};
const sleep = (ms) => {
    return new Promise((resolve) => {
        setTimeout(resolve, ms);
    });
};
// Alternative
// chrome.tabs.query({active: true, currentWindow: true}, function(tabs){
//     chrome.scripting.executeScript({
//         target: {tabId: tabs[0].id},
//         files: ['myscript.js'],
//     });
// }
// // Raise an alert via Desktop notification
// // @feature - can add text with changes what happened to the ticket
// function raiseAlert(taskId: string | number) {
//   // Source for notification standard: https://notifications.spec.whatwg.org/#using-events
//   console.log("raiseAlert was run...");
//   // // Let's check if the browser supports notifications
//   // if (!("Notification" in window)) {
//   //   alert("This browser does not support desktop notifications.");
//   // }
//   // // Let's check whether notification permissions have already been granted
//   // else if (Notification.permission === "granted") {
//   //   // If it's okay let's create a notification
//   //   var notification = new Notification(`
//   //       Task ID: ${taskId} has triggered an alert.
//   //     `);
//   //   window
//   //     .open(`https://redmine.tribepayments.com/issues/${taskId}`, "_blank")
//   //     ?.focus();
//   // }
//   // let statusName = "Status";
//   // let triggerStatus = "New";
//   // let currentStatus = "In progress";
//   // setTimeout(() => {
//   //   alert(
//   //     `🌠 Redmine task notification: ${statusName} has just changed from ${triggerStatus} to ${currentStatus}!`
//   //   );
//   // }, 3000);
//   // Otherwise, we need to ask the user for permission
//   // else if (Notification.permission !== "denied") {
//   //   Notification.requestPermission().then(function (permission) {
//   //     // If the user accepts, let's create a notification
//   //     if (permission === "granted") {
//   //       // var notification = new Notification("Hi there!");
//   //     }
//   //   });
//   // }
//   // At last, if the user has denied notifications, and you
//   // want to be respectful there is no need to bother them any more.
//   // // Plan B:
//   // // Open Window on pop-up:
//   // window.open(`https://redmine.tribepayments.com/issues/${taskId}`, '_blank')?.focus();
//   // // Do not allow to close window without confirming:
//   // window.addEventListener('beforeunload', function (e) {
//   //   // Cancel the event
//   //   e.preventDefault(); // If you prevent default behavior in Mozilla Firefox prompt will always be shown
//   //   // Chrome requires returnValue to be set
//   //   e.returnValue = '';
//   // });
// }
