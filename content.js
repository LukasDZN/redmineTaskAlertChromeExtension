"use strict";
// @ts-nocheck
function parseRedmineTaskDropdownFieldsToArrayOfObjects() {
    let arrayOfDropdownObjects = [];
    document.querySelectorAll('#all_attributes select').forEach(function (taskFieldHtmlElement) {
        if (taskFieldHtmlElement.previousElementSibling) {
            const id = taskFieldHtmlElement.id;
            let label = taskFieldHtmlElement.previousElementSibling.textContent;
            if (label) {
                label = label?.replace(" *", "");
            }
            const selectedOptionValue = taskFieldHtmlElement.value;
            const possibleOptionsValues = [...taskFieldHtmlElement].map(el => new Object({
                optionValue: el.value,
                optionText: el.text,
                isSelected: selectedOptionValue === el.value ? true : false
            }));
            const optionObject = {
                id: id,
                label: label,
                value: {
                    type: "dropdown",
                    options: possibleOptionsValues,
                }
            };
            arrayOfDropdownObjects.push(optionObject);
        }
    });
    return arrayOfDropdownObjects;
}
chrome.runtime.onMessage.addListener((message, sender, sendResponse) => {
    if (message.action === 'parseRedmineTaskDropdownFieldsToArrayOfObjects') {
        sendResponse({
            data: parseRedmineTaskDropdownFieldsToArrayOfObjects()
        });
    }
    else if (message.action === 'raiseAlert') {
        console.log('content.js received a message for raiseAlert...');
        alert(`${message.data.text}`);
        sendResponse({
            data: ''
        });
    }
    else if (message.action === 'getUserInitials') {
        // Extracted from Redmine task page: "<div id="loggedas">Logged in as <a class="user active" href="/users/186">ld</a></div>""
        const redmineUserInitials = document.querySelector("#loggedas > a.user.active").textContent;
        sendResponse({
            data: redmineUserInitials
        });
    }
    else if (message.action === 'getActiveRedminePageTaskTitle') {
        const redmineTaskTitle = document.querySelector("head > title").textContent;
        sendResponse(redmineTaskTitle);
    }
    return true; // include 'true' otherwise it might close too early.
});
