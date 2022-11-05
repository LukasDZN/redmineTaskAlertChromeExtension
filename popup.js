"use strict";
// @ts-nocheck
// Imports
// import posthog from 'posthog-js'
// posthog.init('phc_mGe8wZNClkq9sNOqAYPtavjXDvGHjpNt5M2KcrHLXuf', { api_host: 'https://app.posthog.com' })
// posthog.capture('my event', { property: 'value' })
// Guide: https://posthog.com/docs/integrate/browser-extension#installing-posthog-inside-your-plugin
!function () {
    "use strict";
    function e(e, t) { var n = Object.keys(e); if (Object.getOwnPropertySymbols) {
        var r = Object.getOwnPropertySymbols(e);
        t && (r = r.filter((function (t) { return Object.getOwnPropertyDescriptor(e, t).enumerable; }))), n.push.apply(n, r);
    } return n; }
    function t(t) { for (var n = 1; n < arguments.length; n++) {
        var r = null != arguments[n] ? arguments[n] : {};
        n % 2 ? e(Object(r), !0).forEach((function (e) { s(t, e, r[e]); })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(r)) : e(Object(r)).forEach((function (e) { Object.defineProperty(t, e, Object.getOwnPropertyDescriptor(r, e)); }));
    } return t; }
    function n(e) { return n = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (e) { return typeof e; } : function (e) { return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e; }, n(e); }
    function r(e, t) { if (!(e instanceof t))
        throw new TypeError("Cannot call a class as a function"); }
    function i(e, t) { for (var n = 0; n < t.length; n++) {
        var r = t[n];
        r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(e, r.key, r);
    } }
    function o(e, t, n) { return t && i(e.prototype, t), n && i(e, n), Object.defineProperty(e, "prototype", { writable: !1 }), e; }
    function s(e, t, n) { return t in e ? Object.defineProperty(e, t, { value: n, enumerable: !0, configurable: !0, writable: !0 }) : e[t] = n, e; }
    function a(e, t) { if ("function" != typeof t && null !== t)
        throw new TypeError("Super expression must either be null or a function"); e.prototype = Object.create(t && t.prototype, { constructor: { value: e, writable: !0, configurable: !0 } }), Object.defineProperty(e, "prototype", { writable: !1 }), t && u(e, t); }
    function c(e) { return c = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function (e) { return e.__proto__ || Object.getPrototypeOf(e); }, c(e); }
    function u(e, t) { return u = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function (e, t) { return e.__proto__ = t, e; }, u(e, t); }
    function l(e, t) { if (null == e)
        return {}; var n, r, i = function (e, t) { if (null == e)
        return {}; var n, r, i = {}, o = Object.keys(e); for (r = 0; r < o.length; r++)
        n = o[r], t.indexOf(n) >= 0 || (i[n] = e[n]); return i; }(e, t); if (Object.getOwnPropertySymbols) {
        var o = Object.getOwnPropertySymbols(e);
        for (r = 0; r < o.length; r++)
            n = o[r], t.indexOf(n) >= 0 || Object.prototype.propertyIsEnumerable.call(e, n) && (i[n] = e[n]);
    } return i; }
    function d(e, t) { if (t && ("object" == typeof t || "function" == typeof t))
        return t; if (void 0 !== t)
        throw new TypeError("Derived constructors may only return object or undefined"); return function (e) { if (void 0 === e)
        throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); return e; }(e); }
    function p(e) { var t = function () { if ("undefined" == typeof Reflect || !Reflect.construct)
        return !1; if (Reflect.construct.sham)
        return !1; if ("function" == typeof Proxy)
        return !0; try {
        return Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], (function () { }))), !0;
    }
    catch (e) {
        return !1;
    } }(); return function () { var n, r = c(e); if (t) {
        var i = c(this).constructor;
        n = Reflect.construct(r, arguments, i);
    }
    else
        n = r.apply(this, arguments); return d(this, n); }; }
    function f(e, t) { return function (e) { if (Array.isArray(e))
        return e; }(e) || function (e, t) { var n = null == e ? null : "undefined" != typeof Symbol && e[Symbol.iterator] || e["@@iterator"]; if (null == n)
        return; var r, i, o = [], s = !0, a = !1; try {
        for (n = n.call(e); !(s = (r = n.next()).done) && (o.push(r.value), !t || o.length !== t); s = !0)
            ;
    }
    catch (e) {
        a = !0, i = e;
    }
    finally {
        try {
            s || null == n.return || n.return();
        }
        finally {
            if (a)
                throw i;
        }
    } return o; }(e, t) || _(e, t) || function () { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }(); }
    function h(e) { return function (e) { if (Array.isArray(e))
        return g(e); }(e) || function (e) { if ("undefined" != typeof Symbol && null != e[Symbol.iterator] || null != e["@@iterator"])
        return Array.from(e); }(e) || _(e) || function () { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }(); }
    function _(e, t) { if (e) {
        if ("string" == typeof e)
            return g(e, t);
        var n = Object.prototype.toString.call(e).slice(8, -1);
        return "Object" === n && e.constructor && (n = e.constructor.name), "Map" === n || "Set" === n ? Array.from(e) : "Arguments" === n || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n) ? g(e, t) : void 0;
    } }
    function g(e, t) { (null == t || t > e.length) && (t = e.length); for (var n = 0, r = new Array(t); n < t; n++)
        r[n] = e[n]; return r; }
    function v(e, t) { var n = "undefined" != typeof Symbol && e[Symbol.iterator] || e["@@iterator"]; if (!n) {
        if (Array.isArray(e) || (n = _(e)) || t && e && "number" == typeof e.length) {
            n && (e = n);
            var r = 0, i = function () { };
            return { s: i, n: function () { return r >= e.length ? { done: !0 } : { done: !1, value: e[r++] }; }, e: function (e) { throw e; }, f: i };
        }
        throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
    } var o, s = !0, a = !1; return { s: function () { n = n.call(e); }, n: function () { var e = n.next(); return s = e.done, e; }, e: function (e) { a = !0, o = e; }, f: function () { try {
            s || null == n.return || n.return();
        }
        finally {
            if (a)
                throw o;
        } } }; }
    var y = String.fromCharCode, m = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=", b = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+-$", w = {};
    function k(e, t) { if (!w[e]) {
        w[e] = {};
        for (var n = 0; n < e.length; n++)
            w[e][e.charAt(n)] = n;
    } return w[e][t]; }
    var S = { compressToBase64: function (e) { if (null == e)
            return ""; var t = S._compress(e, 6, (function (e) { return m.charAt(e); })); switch (t.length % 4) {
            default:
            case 0: return t;
            case 1: return t + "===";
            case 2: return t + "==";
            case 3: return t + "=";
        } }, decompressFromBase64: function (e) { return null == e ? "" : "" == e ? null : S._decompress(e.length, 32, (function (t) { return k(m, e.charAt(t)); })); }, compressToUTF16: function (e) { return null == e ? "" : S._compress(e, 15, (function (e) { return y(e + 32); })) + " "; }, decompressFromUTF16: function (e) { return null == e ? "" : "" == e ? null : S._decompress(e.length, 16384, (function (t) { return e.charCodeAt(t) - 32; })); }, compressToUint8Array: function (e) { for (var t = S.compress(e), n = new Uint8Array(2 * t.length), r = 0, i = t.length; r < i; r++) {
            var o = t.charCodeAt(r);
            n[2 * r] = o >>> 8, n[2 * r + 1] = o % 256;
        } return n; }, decompressFromUint8Array: function (e) { if (null == e)
            return S.decompress(e); for (var t = new Array(e.length / 2), n = 0, r = t.length; n < r; n++)
            t[n] = 256 * e[2 * n] + e[2 * n + 1]; var i = []; return t.forEach((function (e) { i.push(y(e)); })), S.decompress(i.join("")); }, compressToEncodedURIComponent: function (e) { return null == e ? "" : S._compress(e, 6, (function (e) { return b.charAt(e); })); }, decompressFromEncodedURIComponent: function (e) { return null == e ? "" : "" == e ? null : (e = e.replace(/ /g, "+"), S._decompress(e.length, 32, (function (t) { return k(b, e.charAt(t)); }))); }, compress: function (e) { return S._compress(e, 16, (function (e) { return y(e); })); }, _compress: function (e, t, n) { if (null == e)
            return ""; var r, i, o, s = "", a = "", c = "", u = 2, l = 3, d = 2, p = 0, f = 0, h = {}, _ = {}, g = []; for (o = 0; o < e.length; o += 1)
            if (s = e.charAt(o), Object.prototype.hasOwnProperty.call(h, s) || (h[s] = l++, _[s] = !0), a = c + s, Object.prototype.hasOwnProperty.call(h, a))
                c = a;
            else {
                if (Object.prototype.hasOwnProperty.call(_, c)) {
                    if (c.charCodeAt(0) < 256) {
                        for (r = 0; r < d; r++)
                            p <<= 1, f == t - 1 ? (f = 0, g.push(n(p)), p = 0) : f++;
                        for (i = c.charCodeAt(0), r = 0; r < 8; r++)
                            p = p << 1 | 1 & i, f == t - 1 ? (f = 0, g.push(n(p)), p = 0) : f++, i >>= 1;
                    }
                    else {
                        for (i = 1, r = 0; r < d; r++)
                            p = p << 1 | i, f == t - 1 ? (f = 0, g.push(n(p)), p = 0) : f++, i = 0;
                        for (i = c.charCodeAt(0), r = 0; r < 16; r++)
                            p = p << 1 | 1 & i, f == t - 1 ? (f = 0, g.push(n(p)), p = 0) : f++, i >>= 1;
                    }
                    0 == --u && (u = Math.pow(2, d), d++), delete _[c];
                }
                else
                    for (i = h[c], r = 0; r < d; r++)
                        p = p << 1 | 1 & i, f == t - 1 ? (f = 0, g.push(n(p)), p = 0) : f++, i >>= 1;
                0 == --u && (u = Math.pow(2, d), d++), h[a] = l++, c = String(s);
            } if ("" !== c) {
            if (Object.prototype.hasOwnProperty.call(_, c)) {
                if (c.charCodeAt(0) < 256) {
                    for (r = 0; r < d; r++)
                        p <<= 1, f == t - 1 ? (f = 0, g.push(n(p)), p = 0) : f++;
                    for (i = c.charCodeAt(0), r = 0; r < 8; r++)
                        p = p << 1 | 1 & i, f == t - 1 ? (f = 0, g.push(n(p)), p = 0) : f++, i >>= 1;
                }
                else {
                    for (i = 1, r = 0; r < d; r++)
                        p = p << 1 | i, f == t - 1 ? (f = 0, g.push(n(p)), p = 0) : f++, i = 0;
                    for (i = c.charCodeAt(0), r = 0; r < 16; r++)
                        p = p << 1 | 1 & i, f == t - 1 ? (f = 0, g.push(n(p)), p = 0) : f++, i >>= 1;
                }
                0 == --u && (u = Math.pow(2, d), d++), delete _[c];
            }
            else
                for (i = h[c], r = 0; r < d; r++)
                    p = p << 1 | 1 & i, f == t - 1 ? (f = 0, g.push(n(p)), p = 0) : f++, i >>= 1;
            0 == --u && (u = Math.pow(2, d), d++);
        } for (i = 2, r = 0; r < d; r++)
            p = p << 1 | 1 & i, f == t - 1 ? (f = 0, g.push(n(p)), p = 0) : f++, i >>= 1; for (;;) {
            if (p <<= 1, f == t - 1) {
                g.push(n(p));
                break;
            }
            f++;
        } return g.join(""); }, decompress: function (e) { return null == e ? "" : "" == e ? null : S._decompress(e.length, 32768, (function (t) { return e.charCodeAt(t); })); }, _decompress: function (e, t, n) { var r, i, o, s, a, c, u, l = [], d = [], p = { val: n(0), position: t, index: 1 }, f = 4, h = 4, _ = 3, g = ""; for (r = 0; r < 3; r += 1)
            l[r] = r; for (o = 0, a = Math.pow(2, 2), c = 1; c != a;)
            s = p.val & p.position, p.position >>= 1, 0 == p.position && (p.position = t, p.val = n(p.index++)), o |= (s > 0 ? 1 : 0) * c, c <<= 1; switch (o) {
            case 0:
                for (o = 0, a = Math.pow(2, 8), c = 1; c != a;)
                    s = p.val & p.position, p.position >>= 1, 0 == p.position && (p.position = t, p.val = n(p.index++)), o |= (s > 0 ? 1 : 0) * c, c <<= 1;
                u = y(o);
                break;
            case 1:
                for (o = 0, a = Math.pow(2, 16), c = 1; c != a;)
                    s = p.val & p.position, p.position >>= 1, 0 == p.position && (p.position = t, p.val = n(p.index++)), o |= (s > 0 ? 1 : 0) * c, c <<= 1;
                u = y(o);
                break;
            case 2: return "";
        } for (l[3] = u, i = u, d.push(u);;) {
            if (p.index > e)
                return "";
            for (o = 0, a = Math.pow(2, _), c = 1; c != a;)
                s = p.val & p.position, p.position >>= 1, 0 == p.position && (p.position = t, p.val = n(p.index++)), o |= (s > 0 ? 1 : 0) * c, c <<= 1;
            switch (u = o) {
                case 0:
                    for (o = 0, a = Math.pow(2, 8), c = 1; c != a;)
                        s = p.val & p.position, p.position >>= 1, 0 == p.position && (p.position = t, p.val = n(p.index++)), o |= (s > 0 ? 1 : 0) * c, c <<= 1;
                    l[h++] = y(o), u = h - 1, f--;
                    break;
                case 1:
                    for (o = 0, a = Math.pow(2, 16), c = 1; c != a;)
                        s = p.val & p.position, p.position >>= 1, 0 == p.position && (p.position = t, p.val = n(p.index++)), o |= (s > 0 ? 1 : 0) * c, c <<= 1;
                    l[h++] = y(o), u = h - 1, f--;
                    break;
                case 2: return d.join("");
            }
            if (0 == f && (f = Math.pow(2, _), _++), l[u])
                g = l[u];
            else {
                if (u !== h)
                    return null;
                g = i + i.charAt(0);
            }
            d.push(g), l[h++] = i + g.charAt(0), i = g, 0 == --f && (f = Math.pow(2, _), _++);
        } } }, O = { DEBUG: !1, LIB_VERSION: "1.34.0" }, I = Array.prototype, x = Object.prototype, F = x.toString, P = x.hasOwnProperty, A = "undefined" != typeof window ? window : {}, E = A.navigator || { userAgent: "" }, $ = A.document || {}, T = E.userAgent, C = I.forEach, R = I.indexOf, M = Array.isArray, j = {}, q = function () { if (O.DEBUG && !z(window.console) && window.console) {
        for (var e = ("__rrweb_original__" in window.console.log ? window.console.log.__rrweb_original__ : window.console.log), t = arguments.length, n = new Array(t), r = 0; r < t; r++)
            n[r] = arguments[r];
        try {
            e.apply(window.console, n);
        }
        catch (t) {
            U(n, (function (t) { e(t); }));
        }
    } }, D = function () { if (O.DEBUG && !z(window.console) && window.console) {
        for (var e = arguments.length, t = new Array(e), n = 0; n < e; n++)
            t[n] = arguments[n];
        var r = ["PostHog error:"].concat(t), i = "__rrweb_original__" in window.console.error ? window.console.error.__rrweb_original__ : window.console.error;
        try {
            i.apply(window.console, r);
        }
        catch (e) {
            U(r, (function (e) { i(e); }));
        }
    } }, N = function () { if (!z(window.console) && window.console) {
        for (var e = arguments.length, t = new Array(e), n = 0; n < e; n++)
            t[n] = arguments[n];
        var r = ["PostHog error:"].concat(t), i = "__rrweb_original__" in window.console.error ? window.console.error.__rrweb_original__ : window.console.error;
        try {
            i.apply(window.console, r);
        }
        catch (e) {
            U(r, (function (e) { i(e); }));
        }
    } }, B = function (e) { return e.replace(/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g, ""); };
    function L(e, t, n) { if (null != e)
        if (C && Array.isArray(e) && e.forEach === C)
            e.forEach(t, n);
        else if ("length" in e && e.length === +e.length) {
            for (var r = 0, i = e.length; r < i; r++)
                if (r in e && t.call(n, e[r], r) === j)
                    return;
        }
        else
            for (var o in e)
                if (P.call(e, o) && t.call(n, e[o], o) === j)
                    return; }
    function U(e, t, n) { if (Array.isArray(e))
        if (C && e.forEach === C)
            e.forEach(t, n);
        else if ("length" in e && e.length === +e.length)
            for (var r = 0, i = e.length; r < i; r++)
                if (r in e && t.call(n, e[r], r) === j)
                    return; }
    var H = function (e) { for (var t = arguments.length, n = new Array(t > 1 ? t - 1 : 0), r = 1; r < t; r++)
        n[r - 1] = arguments[r]; return U(n, (function (t) { for (var n in t)
        void 0 !== t[n] && (e[n] = t[n]); })), e; }, W = M || function (e) { return "[object Array]" === F.call(e); }, Q = function (e) { try {
        return /^\s*\bfunction\b/.test(e);
    }
    catch (e) {
        return !1;
    } };
    function G(e, t) { return -1 !== e.indexOf(t); }
    var J = function (e) { return e === Object(e) && !W(e); }, z = function (e) { return void 0 === e; }, V = function (e) { return "[object String]" == F.call(e); }, Z = function e(t) { return L(t, (function (n, r) { !function (e) { return "[object Date]" == F.call(e); }(n) ? J(n) && (t[r] = e(n)) : t[r] = X(n); })), t; }, X = function (e) { function t(e) { return e < 10 ? "0" + e : e; } return e.getUTCFullYear() + "-" + t(e.getUTCMonth() + 1) + "-" + t(e.getUTCDate()) + "T" + t(e.getUTCHours()) + ":" + t(e.getUTCMinutes()) + ":" + t(e.getUTCSeconds()); }, Y = function (e) { return function () { try {
        for (var t = arguments.length, n = new Array(t), r = 0; r < t; r++)
            n[r] = arguments[r];
        return e.apply(this, n);
    }
    catch (e) {
        N("Implementation error. Please turn on debug and contact support@posthog.com."), O.DEBUG && N(e);
    } }; }, K = function (e) { var t = {}; return L(e, (function (e, n) { V(e) && e.length > 0 && (t[n] = e); })), t; }, ee = "undefined" != typeof Symbol ? Symbol("__deepCircularCopyInProgress__") : "__deepCircularCopyInProgress__";
    function te(e, t, n) { return e !== Object(e) ? t ? t(e, n) : e : e[ee] ? void 0 : (e[ee] = !0, W(e) ? (r = [], U(e, (function (e) { r.push(te(e, t)); }))) : (r = {}, L(e, (function (e, n) { n !== ee && (r[n] = te(e, t, n)); }))), delete e[ee], r); var r; }
    var ne = ["$performance_raw"];
    function re(e, t) { return te(e, (function (e, n) { return n && ne.indexOf(n) > -1 ? e : "string" == typeof e && null !== t ? e.slice(0, t) : e; })); }
    function ie(e) { var t, n, r, i, o, s = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=", a = 0, c = 0, u = "", l = []; if (!e)
        return e; e = se(e); do {
        t = (o = e.charCodeAt(a++) << 16 | e.charCodeAt(a++) << 8 | e.charCodeAt(a++)) >> 18 & 63, n = o >> 12 & 63, r = o >> 6 & 63, i = 63 & o, l[c++] = s.charAt(t) + s.charAt(n) + s.charAt(r) + s.charAt(i);
    } while (a < e.length); switch (u = l.join(""), e.length % 3) {
        case 1:
            u = u.slice(0, -2) + "==";
            break;
        case 2: u = u.slice(0, -1) + "=";
    } return u; }
    var oe, se = function (e) { var t, n, r, i, o = ""; for (t = n = 0, r = (e = (e + "").replace(/\r\n/g, "\n").replace(/\r/g, "\n")).length, i = 0; i < r; i++) {
        var s = e.charCodeAt(i), a = null;
        s < 128 ? n++ : a = s > 127 && s < 2048 ? String.fromCharCode(s >> 6 | 192, 63 & s | 128) : String.fromCharCode(s >> 12 | 224, s >> 6 & 63 | 128, 63 & s | 128), null !== a && (n > t && (o += e.substring(t, n)), o += a, t = n = i + 1);
    } return n > t && (o += e.substring(t, e.length)), o; }, ae = (oe = function () { for (var e = (new Date).valueOf(), t = 0; e == (new Date).valueOf();)
        t++; return e.toString(16) + t.toString(16); }, function () { var e = (window.screen.height * window.screen.width).toString(16); return oe() + "-" + Math.random().toString(16).replace(".", "") + "-" + function () { var e, t, n = T, r = 0, i = []; function o(e, t) { var n, r = 0; for (n = 0; n < t.length; n++)
        r |= i[n] << 8 * n; return e ^ r; } for (e = 0; e < n.length; e++)
        t = n.charCodeAt(e), i.unshift(255 & t), i.length >= 4 && (r = o(r, i), i = []); return i.length > 0 && (r = o(r, i)), r.toString(16); }() + "-" + e + "-" + oe(); }), ce = function (e) { return !!/(google web preview|baiduspider|yandexbot|bingbot|googlebot|yahoo! slurp|ahrefsbot|facebookexternalhit|facebookcatalog)/i.test(e); }, ue = function (e, t) { var n = t.replace(/[[]/, "\\[").replace(/[\]]/, "\\]"), r = new RegExp("[\\?&]" + n + "=([^&#]*)").exec(e); if (null === r || r && "string" != typeof r[1] && r[1].length)
        return ""; var i = r[1]; try {
        i = decodeURIComponent(i);
    }
    catch (e) {
        D("Skipping decoding for malformed query param: " + i);
    } return i.replace(/\+/g, " "); }, le = function (e, t) { var n = e.match(new RegExp(t + "=([^&]*)")); return n ? n[1] : null; }, de = function () { function e(t) { return t && (t.preventDefault = e.preventDefault, t.stopPropagation = e.stopPropagation), t; } return e.preventDefault = function () { this.returnValue = !1; }, e.stopPropagation = function () { this.cancelBubble = !0; }, function (t, n, r, i, o) { if (t)
        if (t.addEventListener && !i)
            t.addEventListener(n, r, !!o);
        else {
            var s = "on" + n, a = t[s];
            t[s] = function (t, n, r) { return function (i) { if (i = i || e(window.event)) {
                var o, s = !0;
                Q(r) && (o = r(i));
                var a = n.call(t, i);
                return !1 !== o && !1 !== a || (s = !1), s;
            } }; }(t, r, a);
        }
    else
        D("No valid element provided to register_event"); }; }(), pe = { campaignParams: function () { var e = "utm_source utm_medium utm_campaign utm_content utm_term gclid fbclid msclkid".split(" "), t = {}; return L(e, (function (e) { var n = ue($.URL, e); n.length && (t[e] = n); })), t; }, searchEngine: function (e) { return 0 === e.search("https?://(.*)google.([^/?]*)") ? "google" : 0 === e.search("https?://(.*)bing.com") ? "bing" : 0 === e.search("https?://(.*)yahoo.com") ? "yahoo" : 0 === e.search("https?://(.*)duckduckgo.com") ? "duckduckgo" : null; }, searchInfo: function (e) { var t = pe.searchEngine(e), n = "yahoo" != t ? "q" : "p", r = {}; if (null !== t) {
            r.$search_engine = t;
            var i = ue(e, n);
            i.length && (r.ph_keyword = i);
        } return r; }, browser: function (e, t, n) { return t = t || "", n || G(e, " OPR/") ? G(e, "Mini") ? "Opera Mini" : "Opera" : /(BlackBerry|PlayBook|BB10)/i.test(e) ? "BlackBerry" : G(e, "IEMobile") || G(e, "WPDesktop") ? "Internet Explorer Mobile" : G(e, "SamsungBrowser/") ? "Samsung Internet" : G(e, "Edge") || G(e, "Edg/") ? "Microsoft Edge" : G(e, "FBIOS") ? "Facebook Mobile" : G(e, "Chrome") ? "Chrome" : G(e, "CriOS") ? "Chrome iOS" : G(e, "UCWEB") || G(e, "UCBrowser") ? "UC Browser" : G(e, "FxiOS") ? "Firefox iOS" : G(t, "Apple") ? G(e, "Mobile") ? "Mobile Safari" : "Safari" : G(e, "Android") ? "Android Mobile" : G(e, "Konqueror") ? "Konqueror" : G(e, "Firefox") ? "Firefox" : G(e, "MSIE") || G(e, "Trident/") ? "Internet Explorer" : G(e, "Gecko") ? "Mozilla" : ""; }, browserVersion: function (e, t, n) { var r = { "Internet Explorer Mobile": /rv:(\d+(\.\d+)?)/, "Microsoft Edge": /Edge?\/(\d+(\.\d+)?)/, Chrome: /Chrome\/(\d+(\.\d+)?)/, "Chrome iOS": /CriOS\/(\d+(\.\d+)?)/, "UC Browser": /(UCBrowser|UCWEB)\/(\d+(\.\d+)?)/, Safari: /Version\/(\d+(\.\d+)?)/, "Mobile Safari": /Version\/(\d+(\.\d+)?)/, Opera: /(Opera|OPR)\/(\d+(\.\d+)?)/, Firefox: /Firefox\/(\d+(\.\d+)?)/, "Firefox iOS": /FxiOS\/(\d+(\.\d+)?)/, Konqueror: /Konqueror:(\d+(\.\d+)?)/, BlackBerry: /BlackBerry (\d+(\.\d+)?)/, "Android Mobile": /android\s(\d+(\.\d+)?)/, "Samsung Internet": /SamsungBrowser\/(\d+(\.\d+)?)/, "Internet Explorer": /(rv:|MSIE )(\d+(\.\d+)?)/, Mozilla: /rv:(\d+(\.\d+)?)/ }[pe.browser(e, t, n)]; if (void 0 === r)
            return null; var i = e.match(r); return i ? parseFloat(i[i.length - 2]) : null; }, browserLanguage: function () { return E.language || E.userLanguage; }, os: function () { var e = T; return /Windows/i.test(e) ? /Phone/.test(e) || /WPDesktop/.test(e) ? "Windows Phone" : "Windows" : /(iPhone|iPad|iPod)/.test(e) ? "iOS" : /Android/.test(e) ? "Android" : /(BlackBerry|PlayBook|BB10)/i.test(e) ? "BlackBerry" : /Mac/i.test(e) ? "Mac OS X" : /Linux/.test(e) ? "Linux" : /CrOS/.test(e) ? "Chrome OS" : ""; }, device: function (e) { return /Windows Phone/i.test(e) || /WPDesktop/.test(e) ? "Windows Phone" : /iPad/.test(e) ? "iPad" : /iPod/.test(e) ? "iPod Touch" : /iPhone/.test(e) ? "iPhone" : /(BlackBerry|PlayBook|BB10)/i.test(e) ? "BlackBerry" : /Android/.test(e) && !/Mobile/.test(e) ? "Android Tablet" : /Android/.test(e) ? "Android" : ""; }, deviceType: function (e) { var t = this.device(e); return "iPad" === t || "Android Tablet" === t ? "Tablet" : t ? "Mobile" : "Desktop"; }, referringDomain: function (e) { var t = e.split("/"); return t.length >= 3 ? t[2] : ""; }, properties: function () { return H(K({ $os: pe.os(), $browser: pe.browser(T, E.vendor, window.opera), $device: pe.device(T), $device_type: pe.deviceType(T) }), { $current_url: window.location.href, $host: window.location.host, $pathname: window.location.pathname, $browser_version: pe.browserVersion(T, E.vendor, window.opera), $browser_language: pe.browserLanguage(), $screen_height: window.screen.height, $screen_width: window.screen.width, $viewport_height: window.innerHeight, $viewport_width: window.innerWidth, $lib: "web", $lib_version: O.LIB_VERSION, $insert_id: Math.random().toString(36).substring(2, 10) + Math.random().toString(36).substring(2, 10), $time: (Date.now = Date.now || function () { return +new Date; }, Date.now() / 1e3) }); }, people_properties: function () { return H(K({ $os: pe.os(), $browser: pe.browser(T, E.vendor, window.opera) }), { $browser_version: pe.browserVersion(T, E.vendor, window.opera) }); } };
    function fe(e) { switch (n(e.className)) {
        case "string": return e.className;
        case "object": return ("baseVal" in e.className ? e.className.baseVal : null) || e.getAttribute("class") || "";
        default: return "";
    } }
    function he(e) { var t = ""; return be(e) && !we(e) && e.childNodes && e.childNodes.length && L(e.childNodes, (function (e) { ve(e) && e.textContent && (t += B(e.textContent).split(/(\s+)/).filter(ke).join("").replace(/[\r\n]/g, " ").replace(/[ ]+/g, " ").substring(0, 255)); })), B(t); }
    function _e(e) { return !!e && 1 === e.nodeType; }
    function ge(e, t) { return !!e && !!e.tagName && e.tagName.toLowerCase() === t.toLowerCase(); }
    function ve(e) { return !!e && 3 === e.nodeType; }
    function ye(e) { return !!e && 11 === e.nodeType; }
    var me = ["a", "button", "form", "input", "select", "textarea", "label"];
    function be(e) { for (var t = e; t.parentNode && !ge(t, "body"); t = t.parentNode) {
        var n = fe(t).split(" ");
        if (G(n, "ph-sensitive") || G(n, "ph-no-capture"))
            return !1;
    } if (G(fe(e).split(" "), "ph-include"))
        return !0; var r = e.type || ""; if ("string" == typeof r)
        switch (r.toLowerCase()) {
            case "hidden":
            case "password": return !1;
        } var i = e.name || e.id || ""; if ("string" == typeof i) {
        if (/^cc|cardnum|ccnum|creditcard|csc|cvc|cvv|exp|pass|pwd|routing|seccode|securitycode|securitynum|socialsec|socsec|ssn/i.test(i.replace(/[^a-zA-Z0-9]/g, "")))
            return !1;
    } return !0; }
    function we(e) { return !!(ge(e, "input") && !["button", "checkbox", "submit", "reset"].includes(e.type) || ge(e, "select") || ge(e, "textarea") || "true" === e.getAttribute("contenteditable")); }
    function ke(e) { if (null === e || z(e))
        return !1; if ("string" == typeof e) {
        e = B(e);
        if (/^(?:(4[0-9]{12}(?:[0-9]{3})?)|(5[1-5][0-9]{14})|(6(?:011|5[0-9]{2})[0-9]{12})|(3[47][0-9]{13})|(3(?:0[0-5]|[68][0-9])[0-9]{11})|((?:2131|1800|35[0-9]{3})[0-9]{11}))$/.test((e || "").replace(/[- ]/g, "")))
            return !1;
        if (/(^\d{3}-?\d{2}-?\d{4}$)/.test(e))
            return !1;
    } return !0; }
    function Se(e, t) { var n = document.createElement("script"); n.type = "text/javascript", n.src = e, n.onload = t; var r, i = document.getElementsByTagName("script"); i.length > 0 ? null === (r = i[0].parentNode) || void 0 === r || r.insertBefore(n, i[0]) : document.body.appendChild(n); }
    var Oe = function () { function e(t) { var n = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : t.get_config("rageclick"); r(this, e), this.clicks = [], this.instance = t, this.enabled = n; } return o(e, [{ key: "click", value: function (e, t, n) { if (this.enabled) {
                var r = this.clicks[this.clicks.length - 1];
                r && Math.abs(e - r.x) + Math.abs(t - r.y) < 30 && n - r.timestamp < 1e3 ? (this.clicks.push({ x: e, y: t, timestamp: n }), 3 === this.clicks.length && this.instance.capture("$rageclick")) : this.clicks = [{ x: e, y: t, timestamp: n }];
            } } }]), e; }(), Ie = { _initializedTokens: [], _previousElementSibling: function (e) { if (e.previousElementSibling)
            return e.previousElementSibling; var t = e; do {
            t = t.previousSibling;
        } while (t && !_e(t)); return t; }, _getPropertiesFromElement: function (e, t, n) { var r = e.tagName.toLowerCase(), i = { tag_name: r }; me.indexOf(r) > -1 && !n && (i.$el_text = he(e)); var o = fe(e); o.length > 0 && (i.classes = o.split(" ").filter((function (e) { return "" !== e; }))), L(e.attributes, (function (n) { var r; we(e) && -1 === ["name", "id", "class"].indexOf(n.name) || !t && ke(n.value) && ("string" != typeof (r = n.name) || "_ngcontent" !== r.substring(0, 10) && "_nghost" !== r.substring(0, 7)) && (i["attr__" + n.name] = n.value); })); for (var s = 1, a = 1, c = e; c = this._previousElementSibling(c);)
            s++, c.tagName === e.tagName && a++; return i.nth_child = s, i.nth_of_type = a, i; }, _getDefaultProperties: function (e) { return { $event_type: e, $ce_version: 1 }; }, _extractCustomPropertyValue: function (e) { var t = []; return L(document.querySelectorAll(e.css_selector), (function (e) { var n; ["input", "select"].indexOf(e.tagName.toLowerCase()) > -1 ? n = e.value : e.textContent && (n = e.textContent), ke(n) && t.push(n); })), t.join(", "); }, _getCustomProperties: function (e) { var t = this, n = {}; return L(this._customProperties, (function (r) { L(r.event_selectors, (function (i) { L(document.querySelectorAll(i), (function (i) { G(e, i) && be(i) && (n[r.name] = t._extractCustomPropertyValue(r)); })); })); })), n; }, _getEventTarget: function (e) { return void 0 === e.target ? e.srcElement || null : null !== (t = e.target) && void 0 !== t && t.shadowRoot ? e.composedPath()[0] || null : e.target || null; var t; }, _captureEvent: function (e, t) { var n, r = this, i = this._getEventTarget(e); (ve(i) && (i = i.parentNode || null), "click" === e.type && e instanceof MouseEvent) && (null === (n = this.rageclicks) || void 0 === n || n.click(e.clientX, e.clientY, (new Date).getTime())); if (i && function (e, t) { if (!e || ge(e, "html") || !_e(e))
            return !1; for (var n = !1, r = [e], i = !0, o = e; o.parentNode && !ge(o, "body");)
            if (ye(o.parentNode))
                r.push(o.parentNode.host), o = o.parentNode.host;
            else {
                if (!(i = o.parentNode || !1))
                    break;
                if (me.indexOf(i.tagName.toLowerCase()) > -1)
                    n = !0;
                else {
                    var s = window.getComputedStyle(i);
                    s && "pointer" === s.getPropertyValue("cursor") && (n = !0);
                }
                r.push(i), o = i;
            } var a = window.getComputedStyle(e); if (a && "pointer" === a.getPropertyValue("cursor") && "click" === t.type)
            return !0; var c = e.tagName.toLowerCase(); switch (c) {
            case "html": return !1;
            case "form": return "submit" === t.type;
            case "input":
            case "select":
            case "textarea": return "change" === t.type || "click" === t.type;
            default: return n ? "click" === t.type : "click" === t.type && (me.indexOf(c) > -1 || "true" === e.getAttribute("contenteditable"));
        } }(i, e)) {
            for (var o = [i], s = i; s.parentNode && !ge(s, "body");)
                ye(s.parentNode) ? (o.push(s.parentNode.host), s = s.parentNode.host) : (o.push(s.parentNode), s = s.parentNode);
            var a, c = [], u = !1;
            if (L(o, (function (e) { var n = be(e); "a" === e.tagName.toLowerCase() && (a = e.getAttribute("href"), a = n && ke(a) && a), G(fe(e).split(" "), "ph-no-capture") && (u = !0), c.push(r._getPropertiesFromElement(e, t.get_config("mask_all_element_attributes"), t.get_config("mask_all_text"))); })), t.get_config("mask_all_text") || (c[0].$el_text = he(i)), a && (c[0].attr__href = a), u)
                return !1;
            var l = H(this._getDefaultProperties(e.type), { $elements: c }, this._getCustomProperties(o));
            return t.capture("$autocapture", l), !0;
        } }, _navigate: function (e) { window.location.href = e; }, _addDomEventHandlers: function (e) { var t = this, n = function (n) { n = n || window.event, t._captureEvent(n, e); }; de(document, "submit", n, !1, !0), de(document, "change", n, !1, !0), de(document, "click", n, !1, !0); }, _customProperties: [], rageclicks: null, init: function (e) { this.rageclicks = new Oe(e); }, afterDecideResponse: function (e, t) { var n = t.get_config("token"); this._initializedTokens.indexOf(n) > -1 ? q('autocapture already initialized for token "' + n + '"') : (this._initializedTokens.push(n), e && e.config && e.config.enable_collect_everything && t.get_config("autocapture") ? (e.custom_properties && (this._customProperties = e.custom_properties), this._addDomEventHandlers(t)) : t.__autocapture_enabled = !1); }, enabledForProject: function (e, t, n) { if (!e)
            return !0; t = z(t) ? 10 : t, n = z(n) ? 10 : n; for (var r = 0, i = 0; i < e.length; i++)
            r += e.charCodeAt(i); return r % t < n; }, isBrowserSupported: function () { return Q(document.querySelectorAll); } };
    !function (e) { for (var t in e)
        "function" == typeof e[t] && (e[t] = e[t].bind(e)); }(Ie), function (e) { for (var t in e)
        "function" == typeof e[t] && (e[t] = Y(e[t])); }(Ie);
    var xe = /[a-z0-9][a-z0-9-]+\.[a-z.]{2,6}$/i, Fe = { is_supported: function () { return !0; }, error: function (e) { D("cookieStore error: " + e); }, get: function (e) { try {
            for (var t = e + "=", n = document.cookie.split(";"), r = 0; r < n.length; r++) {
                for (var i = n[r]; " " == i.charAt(0);)
                    i = i.substring(1, i.length);
                if (0 === i.indexOf(t))
                    return decodeURIComponent(i.substring(t.length, i.length));
            }
        }
        catch (e) { } return null; }, parse: function (e) { var t; try {
            t = JSON.parse(Fe.get(e)) || {};
        }
        catch (e) { } return t; }, set: function (e, t, n, r, i) { try {
            var o = "", s = "", a = "";
            if (r) {
                var c = document.location.hostname.match(xe), u = c ? c[0] : "";
                o = u ? "; domain=." + u : "";
            }
            if (n) {
                var l = new Date;
                l.setTime(l.getTime() + 24 * n * 60 * 60 * 1e3), s = "; expires=" + l.toUTCString();
            }
            i && (a = "; secure");
            var d = e + "=" + encodeURIComponent(JSON.stringify(t)) + s + "; path=/" + o + a;
            return document.cookie = d, d;
        }
        catch (e) {
            return;
        } }, remove: function (e, t) { try {
            Fe.set(e, "", -1, t);
        }
        catch (e) {
            return;
        } } }, Pe = null, Ae = { is_supported: function () { if (null !== Pe)
            return Pe; var e = !0; if (window)
            try {
                var t = "__mplssupport__";
                Ae.set(t, "xyz"), '"xyz"' !== Ae.get(t) && (e = !1), Ae.remove(t);
            }
            catch (t) {
                e = !1;
            }
        else
            e = !1; return e || D("localStorage unsupported; falling back to cookie store"), Pe = e, e; }, error: function (e) { D("localStorage error: " + e); }, get: function (e) { try {
            return window.localStorage.getItem(e);
        }
        catch (e) {
            Ae.error(e);
        } return null; }, parse: function (e) { try {
            return JSON.parse(Ae.get(e)) || {};
        }
        catch (e) { } return null; }, set: function (e, t) { try {
            window.localStorage.setItem(e, JSON.stringify(t));
        }
        catch (e) {
            Ae.error(e);
        } }, remove: function (e) { try {
            window.localStorage.removeItem(e);
        }
        catch (e) {
            Ae.error(e);
        } } }, Ee = t(t({}, Ae), {}, { parse: function (e) { try {
            var t = {};
            try {
                (t = Fe.parse(e) || {}).distinct_id && Fe.set(e, { distinct_id: t.distinct_id });
            }
            catch (e) { }
            var n = H(t, JSON.parse(Ae.get(e) || "{}"));
            return Ae.set(e, n), n;
        }
        catch (e) { } return null; }, set: function (e, t, n, r, i) { try {
            Ae.set(e, t), t.distinct_id && Fe.set(e, { distinct_id: t.distinct_id }, n, r, i);
        }
        catch (e) {
            Ae.error(e);
        } }, remove: function (e, t) { try {
            window.localStorage.removeItem(e), Fe.remove(e, t);
        }
        catch (e) {
            Ae.error(e);
        } } }), $e = {}, Te = { is_supported: function () { return !0; }, error: function (e) { D("memoryStorage error: " + e); }, get: function (e) { return $e[e] || null; }, parse: function (e) { return $e[e] || null; }, set: function (e, t) { $e[e] = t; }, remove: function (e) { delete $e[e]; } }, Ce = null, Re = { is_supported: function () { if (null !== Ce)
            return Ce; if (Ce = !0, window)
            try {
                var e = "__support__";
                Re.set(e, "xyz"), '"xyz"' !== Re.get(e) && (Ce = !1), Re.remove(e);
            }
            catch (e) {
                Ce = !1;
            }
        else
            Ce = !1; return Ce; }, error: function (e) { O.DEBUG && D("sessionStorage error: ", e); }, get: function (e) { try {
            return window.sessionStorage.getItem(e);
        }
        catch (e) {
            Re.error(e);
        } return null; }, parse: function (e) { try {
            return JSON.parse(Re.get(e)) || null;
        }
        catch (e) { } return null; }, set: function (e, t) { try {
            window.sessionStorage.setItem(e, JSON.stringify(t));
        }
        catch (e) {
            Re.error(e);
        } }, remove: function (e) { try {
            window.sessionStorage.removeItem(e);
        }
        catch (e) {
            Re.error(e);
        } } };
    function Me(e, t) { He(!0, e, t); }
    function je(e, t) { He(!1, e, t); }
    function qe(e, t) { return "1" === Ue(e, t); }
    function De(e, t) { return !!function (e) { if (e && e.respectDnt) {
        var t = e && e.window || A, n = t.navigator || {}, r = !1;
        return L([n.doNotTrack, n.msDoNotTrack, t.doNotTrack], (function (e) { G([!0, 1, "1", "yes"], e) && (r = !0); })), r;
    } return !1; }(t) || "0" === Ue(e, t); }
    function Ne(e, t) { Be(t = t || {}).remove(Le(e, t), !!t.crossSubdomainCookie); }
    function Be(e) { return "localStorage" === (e = e || {}).persistenceType ? Ae : "localStorage+cookie" === e.persistenceType ? Ee : Fe; }
    function Le(e, t) { return ((t = t || {}).persistencePrefix || "__ph_opt_in_out_") + e; }
    function Ue(e, t) { return Be(t).get(Le(e, t)); }
    function He(e, t, n) { var r; V(t) && t.length ? (Be(n = n || {}).set(Le(t, n), e ? 1 : 0, (r = n.cookieExpiration, "[object Number]" == F.call(r) ? n.cookieExpiration : null), n.crossSubdomainCookie, n.secureCookie), n.capture && e && n.capture(n.captureEventName || "$opt_in", n.captureProperties || {}, { send_instantly: !0 })) : console.error("gdpr." + (e ? "optIn" : "optOut") + " called with an invalid token"); }
    function We(e, t) { var n = !1; try {
        var r = e.get_config("token"), i = e.get_config("respect_dnt"), o = e.get_config("opt_out_capturing_persistence_type"), s = e.get_config("opt_out_capturing_cookie_prefix") || void 0, a = e.get_config("window");
        r && (n = De(r, { respectDnt: i, persistenceType: o, persistencePrefix: s, window: a }));
    }
    catch (e) {
        t || console.error("Unexpected error when checking capturing opt-out status: " + e);
    } return n; }
    function Qe(e, t, n) { return function () { for (var r = We(e, n), i = arguments.length, o = new Array(i), s = 0; s < i; s++)
        o[s] = arguments[s]; if (!r)
        return t.apply(this, o); var a = o[o.length - 1]; "function" == typeof a && a(0); }; }
    var Ge = "$set", Je = function () { function e(t) { var n = this; r(this, e), this._posthog = t, this.set = Qe(t, (function (e, t, r) { var i = n.set_action(e, t); return J(e) && (r = t), n._get_config("save_referrer") && n._posthog.persistence.update_referrer_info(document.referrer), i.$set = H({}, pe.people_properties(), n._posthog.persistence.get_referrer_info(), i.$set), n._send_request(i, r); })), this.set_once = Qe(t, (function (e, t, r) { var i = n.set_once_action(e, t); return J(e) && (r = t), n._send_request(i, r); })); } return o(e, [{ key: "toString", value: function () { return this._posthog.toString() + ".people"; } }, { key: "_send_request", value: function (e, t) { e.$token = this._get_config("token"), e.$distinct_id = this._posthog.get_distinct_id(); var n = this._posthog.get_property("$device_id"), r = this._posthog.get_property("$user_id"), i = this._posthog.get_property("$had_persisted_distinct_id"); n && (e.$device_id = n), r && (e.$user_id = r), i && (e.$had_persisted_distinct_id = i); var o = Z(e), s = re(o, this._get_config("properties_string_max_length")), a = ie(JSON.stringify(o)); return this._posthog._send_request(this._get_config("api_host") + "/engage/", { data: a }, {}, this._posthog._prepare_callback(t, s)), s; } }, { key: "_get_config", value: function (e) { return this._posthog.get_config(e); } }, { key: "_is_reserved_property", value: function (e) { return "$distinct_id" === e || "$token" === e || "$device_id" === e || "$user_id" === e || "$had_persisted_distinct_id" === e; } }, { key: "set_action", value: function (e, t) { return this.apiActionParser(Ge, e, t); } }, { key: "set_once_action", value: function (e, t) { return this.apiActionParser("$set_once", e, t); } }, { key: "apiActionParser", value: function (e, t, n) { var r = this, i = {}, o = {}; return J(t) ? L(t, (function (e, t) { r._is_reserved_property(t) || (o[t] = e); })) : o[t] = n, i[e] = o, i; } }]), e; }(), ze = function () { function e(t) { r(this, e), this.instance = t, this._override_warning = !1, this.flagCallReported = {}, this.featureFlagEventHandlers = [], this.reloadFeatureFlagsQueued = !1, this.reloadFeatureFlagsInAction = !1; } return o(e, [{ key: "getFlags", value: function () { return Object.keys(this.getFlagVariants()); } }, { key: "getFlagVariants", value: function () { var e = this.instance.get_property("$enabled_feature_flags"), t = this.instance.get_property("$override_feature_flags"); if (!t)
                return e || {}; for (var n = H({}, e), r = Object.keys(t), i = 0; i < r.length; i++)
                !1 === t[r[i]] ? delete n[r[i]] : n[r[i]] = t[r[i]]; return this._override_warning || (console.warn("[PostHog] Overriding feature flags!", { enabledFlags: e, overriddenFlags: t, finalFlags: n }), this._override_warning = !0), n; } }, { key: "reloadFeatureFlags", value: function () { this.reloadFeatureFlagsQueued || (this.reloadFeatureFlagsQueued = !0, this._startReloadTimer()); } }, { key: "setAnonymousDistinctId", value: function (e) { this.$anon_distinct_id = e; } }, { key: "setReloadingPaused", value: function (e) { this.reloadFeatureFlagsInAction = e; } }, { key: "resetRequestQueue", value: function () { this.reloadFeatureFlagsQueued = !1; } }, { key: "_startReloadTimer", value: function () { var e = this; this.reloadFeatureFlagsQueued && !this.reloadFeatureFlagsInAction && setTimeout((function () { !e.reloadFeatureFlagsInAction && e.reloadFeatureFlagsQueued && (e.reloadFeatureFlagsQueued = !1, e._reloadFeatureFlagsRequest()); }), 5); } }, { key: "_reloadFeatureFlagsRequest", value: function () { var e = this; this.setReloadingPaused(!0); var t = this.instance.get_config("token"), n = ie(JSON.stringify({ token: t, distinct_id: this.instance.get_distinct_id(), groups: this.instance.getGroups(), $anon_distinct_id: this.$anon_distinct_id })); this.instance._send_request(this.instance.get_config("api_host") + "/decide/?v=2", { data: n }, { method: "POST" }, this.instance._prepare_callback((function (t) { e.$anon_distinct_id = void 0, e.receivedFeatureFlags(t), e.setReloadingPaused(!1), e._startReloadTimer(); }))); } }, { key: "getFeatureFlag", value: function (e) { var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {}; if (!this.getFlags())
                return console.warn('getFeatureFlag for key "' + e + "\" failed. Feature flags didn't load in time."), !1; var n = this.getFlagVariants()[e]; return !t.send_event && "send_event" in t || this.flagCallReported[e] || (this.flagCallReported[e] = !0, this.instance.capture("$feature_flag_called", { $feature_flag: e, $feature_flag_response: n })), n; } }, { key: "isFeatureEnabled", value: function (e) { var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {}; return this.getFlags() ? !!this.getFeatureFlag(e, t) : (console.warn('isFeatureEnabled for key "' + e + "\" failed. Feature flags didn't load in time."), !1); } }, { key: "addFeatureFlagsHandler", value: function (e) { this.featureFlagEventHandlers.push(e); } }, { key: "receivedFeatureFlags", value: function (e) { this.instance.decideEndpointWasHit = !0, function (e, t) { var n = e.featureFlags; if (n)
                if (Array.isArray(n)) {
                    var r = {};
                    if (n)
                        for (var i = 0; i < n.length; i++)
                            r[n[i]] = !0;
                    t && t.register({ $active_feature_flags: n, $enabled_feature_flags: r });
                }
                else
                    t && t.register({ $active_feature_flags: Object.keys(n || {}), $enabled_feature_flags: n || {} });
            else
                t && (t.unregister("$active_feature_flags"), t.unregister("$enabled_feature_flags")); }(e, this.instance.persistence); var t = this.getFlags(), n = this.getFlagVariants(); this.featureFlagEventHandlers.forEach((function (e) { return e(t, n); })); } }, { key: "override", value: function (e) { if (this._override_warning = !1, !1 === e)
                this.instance.persistence.unregister("$override_feature_flags");
            else if (Array.isArray(e)) {
                for (var t = {}, n = 0; n < e.length; n++)
                    t[e[n]] = !0;
                this.instance.persistence.register({ $override_feature_flags: t });
            }
            else
                this.instance.persistence.register({ $override_feature_flags: e }); } }, { key: "onFeatureFlags", value: function (e) { (this.addFeatureFlagsHandler(e), this.instance.decideEndpointWasHit) && e(this.getFlags(), this.getFlagVariants()); } }]), e; }(), Ve = "$people_distinct_id", Ze = "__alias", Xe = "__timers", Ye = "$session_recording_enabled_server_side", Ke = "$console_log_recording_enabled_server_side", et = "$sesid", tt = "$enabled_feature_flags", nt = ["__mps", "__mpso", "__mpus", "__mpa", "__mpap", "__mpr", "__mpu", Ve, Ze, "__cmpns", Xe, Ye, et, tt], rt = function () { function e(t) { r(this, e); var n = ""; t.token && (n = t.token.replace(/\+/g, "PL").replace(/\//g, "SL").replace(/=/g, "EQ")), this.props = {}, this.campaign_params_saved = !1, t.persistence_name ? this.name = "ph_" + t.persistence_name : this.name = "ph_" + n + "_posthog"; var i = t.persistence.toLowerCase(); "cookie" !== i && -1 === i.indexOf("localstorage") && "memory" !== i && (N("Unknown persistence type " + i + "; falling back to cookie"), i = t.persistence = "cookie"), "localstorage" === i && Ae.is_supported() ? this.storage = Ae : "localstorage+cookie" === i && Ee.is_supported() ? this.storage = Ee : this.storage = "memory" === i ? Te : Fe, this.load(), this.update_config(t), this.save(); } return o(e, [{ key: "properties", value: function () { var e = {}; return L(this.props, (function (t, r) { if (r === tt && "object" === n(t))
                for (var i = Object.keys(t), o = 0; o < i.length; o++)
                    e["$feature/".concat(i[o])] = t[i[o]];
            else
                a = r, c = !1, (null === (s = nt) ? c : R && s.indexOf === R ? -1 != s.indexOf(a) : (L(s, (function (e) { if (c || (c = e === a))
                    return j; })), c)) || (e[r] = t); var s, a, c; })), e; } }, { key: "load", value: function () { if (!this.disabled) {
                var e = this.storage.parse(this.name);
                e && (this.props = H({}, e));
            } } }, { key: "save", value: function () { this.disabled || this.storage.set(this.name, this.props, this.expire_days, this.cross_subdomain, this.secure); } }, { key: "remove", value: function () { this.storage.remove(this.name, !1), this.storage.remove(this.name, !0); } }, { key: "clear", value: function () { this.remove(), this.props = {}; } }, { key: "register_once", value: function (e, t, n) { var r = this; return !!J(e) && (void 0 === t && (t = "None"), this.expire_days = void 0 === n ? this.default_expiry : n, L(e, (function (e, n) { r.props.hasOwnProperty(n) && r.props[n] !== t || (r.props[n] = e); })), this.save(), !0); } }, { key: "register", value: function (e, t) { return !!J(e) && (this.expire_days = void 0 === t ? this.default_expiry : t, H(this.props, e), this.save(), !0); } }, { key: "unregister", value: function (e) { e in this.props && (delete this.props[e], this.save()); } }, { key: "update_campaign_params", value: function () { this.campaign_params_saved || (this.register(pe.campaignParams()), this.campaign_params_saved = !0); } }, { key: "update_search_keyword", value: function (e) { this.register(pe.searchInfo(e)); } }, { key: "update_referrer_info", value: function (e) { this.register({ $referrer: e || this.props.$referrer || "$direct", $referring_domain: pe.referringDomain(e) || this.props.$referring_domain || "$direct" }); } }, { key: "get_referrer_info", value: function () { return K({ $referrer: this.props.$referrer, $referring_domain: this.props.$referring_domain }); } }, { key: "safe_merge", value: function (e) { return L(this.props, (function (t, n) { n in e || (e[n] = t); })), e; } }, { key: "update_config", value: function (e) { this.default_expiry = this.expire_days = e.cookie_expiration, this.set_disabled(e.disable_persistence), this.set_cross_subdomain(e.cross_subdomain_cookie), this.set_secure(e.secure_cookie); } }, { key: "set_disabled", value: function (e) { this.disabled = e, this.disabled ? this.remove() : this.save(); } }, { key: "set_cross_subdomain", value: function (e) { e !== this.cross_subdomain && (this.cross_subdomain = e, this.remove(), this.save()); } }, { key: "get_cross_subdomain", value: function () { return !!this.cross_subdomain; } }, { key: "set_secure", value: function (e) { e !== this.secure && (this.secure = e, this.remove(), this.save()); } }, { key: "set_event_timer", value: function (e, t) { var n = this.props.__timers || {}; n[e] = t, this.props.__timers = n, this.save(); } }, { key: "remove_event_timer", value: function (e) { var t = (this.props.__timers || {})[e]; return z(t) || (delete this.props.__timers[e], this.save()), t; } }]), e; }();
    var it = 2, ot = 4, st = 6, at = function () { function e(t) { r(this, e), this.instance = t, this.captureStarted = !1, this.snapshots = [], this.emit = !1, this.endpoint = "/e/", this.stopRrweb = void 0, this.windowId = null, this.sessionId = null, this.receivedDecide = !1; } return o(e, [{ key: "startRecordingIfEnabled", value: function () { this.isRecordingEnabled() ? this.startCaptureAndTrySendingQueuedSnapshots() : this.stopRecording(); } }, { key: "started", value: function () { return this.captureStarted; } }, { key: "stopRecording", value: function () { this.captureStarted && this.stopRrweb && (this.stopRrweb(), this.stopRrweb = void 0, this.captureStarted = !1); } }, { key: "isRecordingEnabled", value: function () { var e = !!this.instance.get_property(Ye), t = !this.instance.get_config("disable_session_recording"); return e && t; } }, { key: "isConsoleLogCaptureEnabled", value: function () { var e = !!this.instance.get_property(Ke), t = this.instance.get_config("enable_recording_console_log"); return null != t ? t : e; } }, { key: "afterDecideResponse", value: function (e) { var t, n, r, i; (this.receivedDecide = !0, this.instance.persistence) && this.instance.persistence.register((s(r = {}, Ye, !!e.sessionRecording), s(r, Ke, null === (n = e.sessionRecording) || void 0 === n ? void 0 : n.consoleLogRecordingEnabled), r)); null !== (t = e.sessionRecording) && void 0 !== t && t.endpoint && (this.endpoint = null === (i = e.sessionRecording) || void 0 === i ? void 0 : i.endpoint); this.startRecordingIfEnabled(); } }, { key: "startCaptureAndTrySendingQueuedSnapshots", value: function () { var e = this; this.receivedDecide && (this.emit = !0, this.snapshots.forEach((function (t) { return e._captureSnapshot(t); }))), this._startCapture(); } }, { key: "_startCapture", value: function () { void 0 !== Object.assign && (this.captureStarted || this.instance.get_config("disable_session_recording") || (this.captureStarted = !0, Se(this.instance.get_config("api_host") + "/static/recorder.js?v=" + O.LIB_VERSION, this._onScriptLoaded.bind(this)))); } }, { key: "_updateWindowAndSessionIds", value: function (e) { var t, n, r = 3 === e.type && 0 === (null === (t = e.data) || void 0 === t ? void 0 : t.source), i = this.instance.sessionManager.checkAndGetSessionAndWindowId(r, e.timestamp), o = i.windowId, s = i.sessionId; this.windowId === o && this.sessionId === s || -1 !== [it, ot].indexOf(e.type) || (null === (n = this.rrwebRecord) || void 0 === n || n.takeFullSnapshot()); this.windowId = o, this.sessionId = s; } }, { key: "_onScriptLoaded", value: function () { var e, r = this, i = { blockClass: "ph-no-capture", blockSelector: void 0, ignoreClass: "ph-ignore-input", maskAllInputs: !0, maskInputOptions: {}, maskInputFn: void 0, slimDOMOptions: {}, collectFonts: !1, inlineStylesheet: !0 }; this.rrwebRecord = window.rrweb ? window.rrweb.record : window.rrwebRecord; for (var o = this.instance.get_config("session_recording"), s = 0, a = Object.entries(o || {}); s < a.length; s++) {
                var c = f(a[s], 2), u = c[0], l = c[1];
                u in i && (i[u] = l);
            } this.stopRrweb = null === (e = this.rrwebRecord) || void 0 === e ? void 0 : e.call(this, t({ emit: function (e) { e = function (e) { if (e && "object" === n(e) && e.type === st && "object" === n(e.data) && "rrweb/console@1" === e.data.plugin) {
                    e.data.payload.payload.length > 10 && (e.data.payload.payload = e.data.payload.payload.slice(0, 10), e.data.payload.payload.push("...[truncated]"));
                    for (var t = [], r = 0; r < e.data.payload.payload.length; r++)
                        e.data.payload.payload[r] && e.data.payload.payload[r].length > 2e3 ? t.push(e.data.payload.payload[r].slice(0, 2e3) + "...[truncated]") : t.push(e.data.payload.payload[r]);
                    return e.data.payload.payload = t, e;
                } return e; }(function (e) { if (e && "object" === n(e)) {
                    var t = JSON.stringify(e);
                    if (t.length > 5e6) {
                        var r, i = v(t.matchAll(/data:([\w\/\-\.]+);(\w+),([^)"]*)/gim));
                        try {
                            for (i.s(); !(r = i.n()).done;) {
                                var o = r.value;
                                t = "image/" === o[1].toLocaleLowerCase().slice(0, 6) ? t.replace(o[0], "data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTYiIGhlaWdodD0iMTYiIHZpZXdCb3g9IjAgMCAxNiAxNiIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPHJlY3Qgd2lkdGg9IjE2IiBoZWlnaHQ9IjE2IiBmaWxsPSJibGFjayIvPgo8cGF0aCBkPSJNOCAwSDE2TDAgMTZWOEw4IDBaIiBmaWxsPSIjMkQyRDJEIi8+CjxwYXRoIGQ9Ik0xNiA4VjE2SDhMMTYgOFoiIGZpbGw9IiMyRDJEMkQiLz4KPC9zdmc+Cg==") : t.replace(o[0], "");
                            }
                        }
                        catch (e) {
                            i.e(e);
                        }
                        finally {
                            i.f();
                        }
                    }
                    return JSON.parse(t);
                } return e; }(e)), r._updateWindowAndSessionIds(e); var t = { $snapshot_data: e, $session_id: r.sessionId, $window_id: r.windowId }; r.instance._captureMetrics.incr("rrweb-record"), r.instance._captureMetrics.incr("rrweb-record-".concat(e.type)), r.emit ? r._captureSnapshot(t) : r.snapshots.push(t); }, plugins: window.rrwebConsoleRecord && this.isConsoleLogCaptureEnabled() ? [window.rrwebConsoleRecord.getRecordConsolePlugin()] : [] }, i)), this.instance._addCaptureHook((function (e) { var t; "$pageview" === e && (null === (t = r.rrwebRecord) || void 0 === t || t.addCustomEvent("$pageview", { href: window.location.href })); })); } }, { key: "_captureSnapshot", value: function (e) { this.instance.capture("$snapshot", e, { transport: "XHR", method: "POST", endpoint: this.endpoint, _noTruncate: !0, _batchKey: "sessionRecording", _metrics: { rrweb_full_snapshot: e.$snapshot_data.type === it } }); } }]), e; }(), ct = function () { function e(t) { r(this, e), this.instance = t, this.instance.decideEndpointWasHit = this.instance._hasBootstrappedFeatureFlags(); } return o(e, [{ key: "call", value: function () { var e = this, t = ie(JSON.stringify({ token: this.instance.get_config("token"), distinct_id: this.instance.get_distinct_id(), groups: this.instance.getGroups() })); this.instance._send_request("".concat(this.instance.get_config("api_host"), "/decide/?v=2"), { data: t, verbose: !0 }, { method: "POST" }, (function (t) { return e.parseDecideResponse(t); })); } }, { key: "parseDecideResponse", value: function (e) { var t, n = this; if (0 !== (null == e ? void 0 : e.status)) {
                if (this.instance.decideEndpointWasHit = !0, !document || !document.body)
                    return console.log("document not ready yet, trying again in 500 milliseconds..."), void setTimeout((function () { n.parseDecideResponse(e); }), 500);
                if (this.instance.toolbar.afterDecideResponse(e), null === (t = this.instance.sessionRecording) || void 0 === t || t.afterDecideResponse(e), Ie.afterDecideResponse(e, this.instance), this.instance.featureFlags.receivedFeatureFlags(e), e.supportedCompression) {
                    var r, i = {}, o = v(e.supportedCompression);
                    try {
                        for (o.s(); !(r = o.n()).done;) {
                            i[r.value] = !0;
                        }
                    }
                    catch (e) {
                        o.e(e);
                    }
                    finally {
                        o.f();
                    }
                    this.instance.compression = i;
                }
                else
                    this.instance.compression = {};
                if (e.siteApps)
                    if (this.instance.get_config("opt_in_site_apps")) {
                        var s, a = this.instance.get_config("api_host"), c = v(e.siteApps);
                        try {
                            var u = function () { var e = s.value, t = e.id, r = e.url, i = document.createElement("script"); i.src = [a, "/" === a[a.length - 1] && "/" === r[0] ? r.substring(1) : r].join(""), i.onerror = function (e) { console.error("Error while initializing PostHog app with config id ".concat(t), e); }, window["__$$ph_site_app_".concat(t)] = n.instance, document.body.appendChild(i); };
                            for (c.s(); !(s = c.n()).done;)
                                u();
                        }
                        catch (e) {
                            c.e(e);
                        }
                        finally {
                            c.f();
                        }
                    }
                    else
                        e.siteApps.length > 0 && console.error('PostHog site apps are disabled. Enable the "opt_in_site_apps" config to proceed.');
            }
            else
                console.error("Failed to fetch feature flags from PostHog."); } }]), e; }(), ut = ["https://app.posthog.com", "https://eu.posthog.com"], lt = ["source"], dt = function () { function e(t) { r(this, e), this.instance = t; } return o(e, [{ key: "afterDecideResponse", value: function (e) { var n = e.toolbarParams || e.editorParams || (e.toolbarVersion ? { toolbarVersion: e.toolbarVersion } : {}); e.isAuthenticated && n.toolbarVersion && 0 === n.toolbarVersion.indexOf("toolbar") && this.loadToolbar(t(t({}, n), {}, { apiURL: this.instance.get_config("api_host") })); } }, { key: "maybeLoadToolbar", value: function () { var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : window.location, t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : void 0, n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : window.history; try {
                if (!t) {
                    try {
                        window.localStorage.setItem("test", "test"), window.localStorage.removeItem("test");
                    }
                    catch (e) {
                        return !1;
                    }
                    t = window.localStorage;
                }
                var r, i = le(e.hash, "__posthog") || le(e.hash, "state"), o = i ? JSON.parse(decodeURIComponent(i)) : null, s = o && "ph_authorize" === o.action;
                return s ? ((r = o).source = "url", r && Object.keys(r).length > 0 && (o.desiredHash ? e.hash = o.desiredHash : n ? n.replaceState("", document.title, e.pathname + e.search) : e.hash = "")) : ((r = JSON.parse(t.getItem("_postHogToolbarParams") || "{}")).source = "localstorage", delete r.userIntent), r.apiURL || (r.apiURL = this.instance.get_config("api_host")), !(!r.token || this.instance.get_config("token") !== r.token) && (this.loadToolbar(r), !0);
            }
            catch (e) {
                return !1;
            } } }, { key: "loadToolbar", value: function (e) { var n = this; if (window._postHogToolbarLoaded)
                return !1; window._postHogToolbarLoaded = !0; var r = (null == e ? void 0 : e.jsURL) || (null == e ? void 0 : e.apiURL) || this.instance.get_config("api_host"), i = "".concat(r).concat(r.endsWith("/") ? "" : "/", "static/toolbar.js?_ts=").concat((new Date).getTime()), o = !ut.includes(this.instance.get_config("api_host")) && this.instance.get_config("advanced_disable_toolbar_metrics"), s = t(t({ apiURL: r, jsURL: r, token: this.instance.get_config("token") }, e), o ? { instrument: !1 } : {}); s.source; var a = l(s, lt); return window.localStorage.setItem("_postHogToolbarParams", JSON.stringify(a)), Se(i, (function () { (window.ph_load_toolbar || window.ph_load_editor)(s, n.instance); })), de(window, "turbolinks:load", (function () { window._postHogToolbarLoaded = !1, n.loadToolbar(s); })), !0; } }, { key: "_loadEditor", value: function (e) { return this.loadToolbar(e); } }, { key: "maybeLoadEditor", value: function () { var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : window.location, t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : void 0, n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : window.history; return this.maybeLoadToolbar(e, t, n); } }]), e; }(), pt = function () { function e() { var t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 3e3; r(this, e), this.isPolling = !0, this._event_queue = [], this._empty_queue_count = 0, this._poller = void 0, this._pollInterval = t; } return o(e, [{ key: "setPollInterval", value: function (e) { this._pollInterval = e, this.isPolling && this.poll(); } }, { key: "poll", value: function () { } }, { key: "unload", value: function () { } }, { key: "getTime", value: function () { return (new Date).getTime(); } }]), e; }(), ft = function (e) { a(i, e); var n = p(i); function i(e, t) { var o, s = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 3e3; return r(this, i), (o = n.call(this, s)).handlePollRequest = t, o.captureMetrics = e, o; } return o(i, [{ key: "enqueue", value: function (e, t, n) { this.captureMetrics.incr("batch-enqueue"), this._event_queue.push({ url: e, data: t, options: n }), this.isPolling || (this.isPolling = !0, this.poll()); } }, { key: "poll", value: function () { var e = this; clearTimeout(this._poller), this._poller = setTimeout((function () { if (e._event_queue.length > 0) {
                var t = e.formatQueue(), n = function (n) { var r = t[n], i = r.url, o = r.data, s = r.options; L(o, (function (t, n) { o[n].offset = Math.abs(o[n].timestamp - e.getTime()), delete o[n].timestamp; })), e.handlePollRequest(i, o, s), e.captureMetrics.incr("batch-requests"), e.captureMetrics.incr("batch-requests-".concat(i.slice(i.length - 2))), e.captureMetrics.incr("batch-handle", o.length), e.captureMetrics.incr("batch-handle-".concat(i.slice(i.length - 2)), o.length); };
                for (var r in t)
                    n(r);
                e._event_queue.length = 0, e._empty_queue_count = 0;
            }
            else
                e._empty_queue_count++; e._empty_queue_count > 4 && (e.isPolling = !1, e._empty_queue_count = 0), e.isPolling && e.poll(); }), this._pollInterval); } }, { key: "updateUnloadMetrics", value: function () { var e = this.formatQueue(); for (var t in e) {
                var n = e[t], r = n.url, i = n.data;
                this.captureMetrics.incr("batch-unload-requests"), this.captureMetrics.incr("batch-unload-requests-".concat(r.slice(r.length - 2))), this.captureMetrics.incr("batch-unload", i.length), this.captureMetrics.incr("batch-unload-".concat(r.slice(r.length - 2)), i.length);
            } } }, { key: "unload", value: function () { var e = this; clearTimeout(this._poller); var n = this._event_queue.length > 0 ? this.formatQueue() : {}; this._event_queue.length = 0; var r = Object.values(n); [].concat(h(r.filter((function (e) { return 0 === e.url.indexOf("/e"); }))), h(r.filter((function (e) { return 0 !== e.url.indexOf("/e"); })))).map((function (n) { var r = n.url, i = n.data, o = n.options; e.handlePollRequest(r, i, t(t({}, o), {}, { transport: "sendBeacon" })); })); } }, { key: "formatQueue", value: function () { var e = {}; return L(this._event_queue, (function (t) { var n = t.url, r = t.data, i = t.options, o = (i ? i._batchKey : null) || n; void 0 === e[o] && (e[o] = { data: [], url: n, options: i }), i && e[o].options && e[o].options._metrics && !e[o].options._metrics.rrweb_full_snapshot && (e[o].options._metrics.rrweb_full_snapshot = i._metrics.rrweb_full_snapshot), e[o].data.push(r); })), e; } }]), i; }(pt), ht = function () { function e(t) { r(this, e), this.enabled = t, this.metrics = {}; } return o(e, [{ key: "incr", value: function (e) { var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 1; this.enabled && (e = "phjs-".concat(e), this.metrics[e] = (this.metrics[e] || 0) + t); } }, { key: "decr", value: function (e) { this.enabled && (e = "phjs-".concat(e), this.metrics[e] = (this.metrics[e] || 0) - 1); } }]), e; }(), _t = Uint8Array, gt = Uint16Array, vt = Uint32Array, yt = new _t([0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 2, 2, 2, 2, 3, 3, 3, 3, 4, 4, 4, 4, 5, 5, 5, 5, 0, 0, 0, 0]), mt = new _t([0, 0, 0, 0, 1, 1, 2, 2, 3, 3, 4, 4, 5, 5, 6, 6, 7, 7, 8, 8, 9, 9, 10, 10, 11, 11, 12, 12, 13, 13, 0, 0]), bt = new _t([16, 17, 18, 0, 8, 7, 9, 6, 10, 5, 11, 4, 12, 3, 13, 2, 14, 1, 15]), wt = function (e, t) { for (var n = new gt(31), r = 0; r < 31; ++r)
        n[r] = t += 1 << e[r - 1]; var i = new vt(n[30]); for (r = 1; r < 30; ++r)
        for (var o = n[r]; o < n[r + 1]; ++o)
            i[o] = o - n[r] << 5 | r; return [n, i]; }, kt = wt(yt, 2), St = kt[0], Ot = kt[1];
    St[28] = 258, Ot[258] = 28;
    for (var It = wt(mt, 0)[1], xt = new gt(32768), Ft = 0; Ft < 32768; ++Ft) {
        var Pt = (43690 & Ft) >>> 1 | (21845 & Ft) << 1;
        Pt = (61680 & (Pt = (52428 & Pt) >>> 2 | (13107 & Pt) << 2)) >>> 4 | (3855 & Pt) << 4, xt[Ft] = ((65280 & Pt) >>> 8 | (255 & Pt) << 8) >>> 1;
    }
    var At = function (e, t, n) { for (var r = e.length, i = 0, o = new gt(t); i < r; ++i)
        ++o[e[i] - 1]; var s, a = new gt(t); for (i = 0; i < t; ++i)
        a[i] = a[i - 1] + o[i - 1] << 1; if (n) {
        s = new gt(1 << t);
        var c = 15 - t;
        for (i = 0; i < r; ++i)
            if (e[i])
                for (var u = i << 4 | e[i], l = t - e[i], d = a[e[i] - 1]++ << l, p = d | (1 << l) - 1; d <= p; ++d)
                    s[xt[d] >>> c] = u;
    }
    else
        for (s = new gt(r), i = 0; i < r; ++i)
            s[i] = xt[a[e[i] - 1]++] >>> 15 - e[i]; return s; }, Et = new _t(288);
    for (Ft = 0; Ft < 144; ++Ft)
        Et[Ft] = 8;
    for (Ft = 144; Ft < 256; ++Ft)
        Et[Ft] = 9;
    for (Ft = 256; Ft < 280; ++Ft)
        Et[Ft] = 7;
    for (Ft = 280; Ft < 288; ++Ft)
        Et[Ft] = 8;
    var $t = new _t(32);
    for (Ft = 0; Ft < 32; ++Ft)
        $t[Ft] = 5;
    var Tt, Ct = At(Et, 9, 0), Rt = At($t, 5, 0), Mt = function (e) { return (e / 8 >> 0) + (7 & e && 1); }, jt = function (e, t, n) { (null == t || t < 0) && (t = 0), (null == n || n > e.length) && (n = e.length); var r = new (e instanceof gt ? gt : e instanceof vt ? vt : _t)(n - t); return r.set(e.subarray(t, n)), r; }, qt = function (e, t, n) { n <<= 7 & t; var r = t / 8 >> 0; e[r] |= n, e[r + 1] |= n >>> 8; }, Dt = function (e, t, n) { n <<= 7 & t; var r = t / 8 >> 0; e[r] |= n, e[r + 1] |= n >>> 8, e[r + 2] |= n >>> 16; }, Nt = function (e, t) { for (var n = [], r = 0; r < e.length; ++r)
        e[r] && n.push({ s: r, f: e[r] }); var i = n.length, o = n.slice(); if (!i)
        return [new _t(0), 0]; if (1 == i) {
        var s = new _t(n[0].s + 1);
        return s[n[0].s] = 1, [s, 1];
    } n.sort((function (e, t) { return e.f - t.f; })), n.push({ s: -1, f: 25001 }); var a = n[0], c = n[1], u = 0, l = 1, d = 2; for (n[0] = { s: -1, f: a.f + c.f, l: a, r: c }; l != i - 1;)
        a = n[n[u].f < n[d].f ? u++ : d++], c = n[u != l && n[u].f < n[d].f ? u++ : d++], n[l++] = { s: -1, f: a.f + c.f, l: a, r: c }; var p = o[0].s; for (r = 1; r < i; ++r)
        o[r].s > p && (p = o[r].s); var f = new gt(p + 1), h = Bt(n[l - 1], f, 0); if (h > t) {
        r = 0;
        var _ = 0, g = h - t, v = 1 << g;
        for (o.sort((function (e, t) { return f[t.s] - f[e.s] || e.f - t.f; })); r < i; ++r) {
            var y = o[r].s;
            if (!(f[y] > t))
                break;
            _ += v - (1 << h - f[y]), f[y] = t;
        }
        for (_ >>>= g; _ > 0;) {
            var m = o[r].s;
            f[m] < t ? _ -= 1 << t - f[m]++ - 1 : ++r;
        }
        for (; r >= 0 && _; --r) {
            var b = o[r].s;
            f[b] == t && (--f[b], ++_);
        }
        h = t;
    } return [new _t(f), h]; }, Bt = function e(t, n, r) { return -1 == t.s ? Math.max(e(t.l, n, r + 1), e(t.r, n, r + 1)) : n[t.s] = r; }, Lt = function (e) { for (var t = e.length; t && !e[--t];)
        ; for (var n = new gt(++t), r = 0, i = e[0], o = 1, s = function (e) { n[r++] = e; }, a = 1; a <= t; ++a)
        if (e[a] == i && a != t)
            ++o;
        else {
            if (!i && o > 2) {
                for (; o > 138; o -= 138)
                    s(32754);
                o > 2 && (s(o > 10 ? o - 11 << 5 | 28690 : o - 3 << 5 | 12305), o = 0);
            }
            else if (o > 3) {
                for (s(i), --o; o > 6; o -= 6)
                    s(8304);
                o > 2 && (s(o - 3 << 5 | 8208), o = 0);
            }
            for (; o--;)
                s(i);
            o = 1, i = e[a];
        } return [n.subarray(0, r), t]; }, Ut = function (e, t) { for (var n = 0, r = 0; r < t.length; ++r)
        n += e[r] * t[r]; return n; }, Ht = function (e, t, n) { var r = n.length, i = Mt(t + 2); e[i] = 255 & r, e[i + 1] = r >>> 8, e[i + 2] = 255 ^ e[i], e[i + 3] = 255 ^ e[i + 1]; for (var o = 0; o < r; ++o)
        e[i + o + 4] = n[o]; return 8 * (i + 4 + r); }, Wt = function (e, t, n, r, i, o, s, a, c, u, l) { qt(t, l++, n), ++i[256]; for (var d = Nt(i, 15), p = d[0], f = d[1], h = Nt(o, 15), _ = h[0], g = h[1], v = Lt(p), y = v[0], m = v[1], b = Lt(_), w = b[0], k = b[1], S = new gt(19), O = 0; O < y.length; ++O)
        S[31 & y[O]]++; for (O = 0; O < w.length; ++O)
        S[31 & w[O]]++; for (var I = Nt(S, 7), x = I[0], F = I[1], P = 19; P > 4 && !x[bt[P - 1]]; --P)
        ; var A, E, $, T, C = u + 5 << 3, R = Ut(i, Et) + Ut(o, $t) + s, M = Ut(i, p) + Ut(o, _) + s + 14 + 3 * P + Ut(S, x) + (2 * S[16] + 3 * S[17] + 7 * S[18]); if (C <= R && C <= M)
        return Ht(t, l, e.subarray(c, c + u)); if (qt(t, l, 1 + (M < R)), l += 2, M < R) {
        A = At(p, f, 0), E = p, $ = At(_, g, 0), T = _;
        var j = At(x, F, 0);
        qt(t, l, m - 257), qt(t, l + 5, k - 1), qt(t, l + 10, P - 4), l += 14;
        for (O = 0; O < P; ++O)
            qt(t, l + 3 * O, x[bt[O]]);
        l += 3 * P;
        for (var q = [y, w], D = 0; D < 2; ++D) {
            var N = q[D];
            for (O = 0; O < N.length; ++O) {
                var B = 31 & N[O];
                qt(t, l, j[B]), l += x[B], B > 15 && (qt(t, l, N[O] >>> 5 & 127), l += N[O] >>> 12);
            }
        }
    }
    else
        A = Ct, E = Et, $ = Rt, T = $t; for (O = 0; O < a; ++O)
        if (r[O] > 255) {
            B = r[O] >>> 18 & 31;
            Dt(t, l, A[B + 257]), l += E[B + 257], B > 7 && (qt(t, l, r[O] >>> 23 & 31), l += yt[B]);
            var L = 31 & r[O];
            Dt(t, l, $[L]), l += T[L], L > 3 && (Dt(t, l, r[O] >>> 5 & 8191), l += mt[L]);
        }
        else
            Dt(t, l, A[r[O]]), l += E[r[O]]; return Dt(t, l, A[256]), l + E[256]; }, Qt = new vt([65540, 131080, 131088, 131104, 262176, 1048704, 1048832, 2114560, 2117632]), Gt = new _t(0), Jt = function () { for (var e = new vt(256), t = 0; t < 256; ++t) {
        for (var n = t, r = 9; --r;)
            n = (1 & n && 3988292384) ^ n >>> 1;
        e[t] = n;
    } return e; }(), zt = function (e, t, n, r, i) { return function (e, t, n, r, i, o) { var s = e.length, a = new _t(r + s + 5 * (1 + Math.floor(s / 7e3)) + i), c = a.subarray(r, a.length - i), u = 0; if (!t || s < 8)
        for (var l = 0; l <= s; l += 65535) {
            var d = l + 65535;
            d < s ? u = Ht(c, u, e.subarray(l, d)) : (c[l] = o, u = Ht(c, u, e.subarray(l, s)));
        }
    else {
        for (var p = Qt[t - 1], f = p >>> 13, h = 8191 & p, _ = (1 << n) - 1, g = new gt(32768), v = new gt(_ + 1), y = Math.ceil(n / 3), m = 2 * y, b = function (t) { return (e[t] ^ e[t + 1] << y ^ e[t + 2] << m) & _; }, w = new vt(25e3), k = new gt(288), S = new gt(32), O = 0, I = 0, x = (l = 0, 0), F = 0, P = 0; l < s; ++l) {
            var A = b(l), E = 32767 & l, $ = v[A];
            if (g[E] = $, v[A] = E, F <= l) {
                var T = s - l;
                if ((O > 7e3 || x > 24576) && T > 423) {
                    u = Wt(e, c, 0, w, k, S, I, x, P, l - P, u), x = O = I = 0, P = l;
                    for (var C = 0; C < 286; ++C)
                        k[C] = 0;
                    for (C = 0; C < 30; ++C)
                        S[C] = 0;
                }
                var R = 2, M = 0, j = h, q = E - $ & 32767;
                if (T > 2 && A == b(l - q))
                    for (var D = Math.min(f, T) - 1, N = Math.min(32767, l), B = Math.min(258, T); q <= N && --j && E != $;) {
                        if (e[l + R] == e[l + R - q]) {
                            for (var L = 0; L < B && e[l + L] == e[l + L - q]; ++L)
                                ;
                            if (L > R) {
                                if (R = L, M = q, L > D)
                                    break;
                                var U = Math.min(q, L - 2), H = 0;
                                for (C = 0; C < U; ++C) {
                                    var W = l - q + C + 32768 & 32767, Q = W - g[W] + 32768 & 32767;
                                    Q > H && (H = Q, $ = W);
                                }
                            }
                        }
                        q += (E = $) - ($ = g[E]) + 32768 & 32767;
                    }
                if (M) {
                    w[x++] = 268435456 | Ot[R] << 18 | It[M];
                    var G = 31 & Ot[R], J = 31 & It[M];
                    I += yt[G] + mt[J], ++k[257 + G], ++S[J], F = l + R, ++O;
                }
                else
                    w[x++] = e[l], ++k[e[l]];
            }
        }
        u = Wt(e, c, o, w, k, S, I, x, P, l - P, u), o || (u = Ht(c, u, Gt));
    } return jt(a, 0, r + Mt(u) + i); }(e, null == t.level ? 6 : t.level, null == t.mem ? Math.ceil(1.5 * Math.max(8, Math.min(13, Math.log(e.length)))) : 12 + t.mem, n, r, !i); }, Vt = function (e, t, n) { for (; n; ++t)
        e[t] = n, n >>>= 8; };
    function Zt(e, t) { void 0 === t && (t = {}); var n = function () { var e = 4294967295; return { p: function (t) { for (var n = e, r = 0; r < t.length; ++r)
            n = Jt[255 & n ^ t[r]] ^ n >>> 8; e = n; }, d: function () { return 4294967295 ^ e; } }; }(), r = e.length; n.p(e); var i, o = zt(e, t, 10 + ((i = t).filename && i.filename.length + 1 || 0), 8), s = o.length; return function (e, t) { var n = t.filename; if (e[0] = 31, e[1] = 139, e[2] = 8, e[8] = t.level < 2 ? 4 : 9 == t.level ? 2 : 0, e[9] = 3, 0 != t.mtime && Vt(e, 4, Math.floor(new Date(t.mtime || Date.now()) / 1e3)), n) {
        e[3] = 8;
        for (var r = 0; r <= n.length; ++r)
            e[r + 10] = n.charCodeAt(r);
    } }(o, t), Vt(o, s - 8, n.d()), Vt(o, s - 4, r), o; }
    function Xt(e, t) { var n = e.length; if (!t && "undefined" != typeof TextEncoder)
        return (new TextEncoder).encode(e); for (var r = new _t(e.length + (e.length >>> 1)), i = 0, o = function (e) { r[i++] = e; }, s = 0; s < n; ++s) {
        if (i + 5 > r.length) {
            var a = new _t(i + 8 + (n - s << 1));
            a.set(r), r = a;
        }
        var c = e.charCodeAt(s);
        c < 128 || t ? o(c) : c < 2048 ? (o(192 | c >>> 6), o(128 | 63 & c)) : c > 55295 && c < 57344 ? (o(240 | (c = 65536 + (1047552 & c) | 1023 & e.charCodeAt(++s)) >>> 18), o(128 | c >>> 12 & 63), o(128 | c >>> 6 & 63), o(128 | 63 & c)) : (o(224 | c >>> 12), o(128 | c >>> 6 & 63), o(128 | 63 & c));
    } return jt(r, 0, i); }
    !function (e) { e.GZipJS = "gzip-js", e.LZ64 = "lz64", e.Base64 = "base64"; }(Tt || (Tt = {}));
    var Yt = function (e, t, n) { var r = t || {}; r.ip = n.ip ? 1 : 0, r._ = (new Date).getTime().toString(), r.ver = O.LIB_VERSION; var i = e.split("?"); if (i.length > 1) {
        var o, s = v(i[1].split("&"));
        try {
            for (s.s(); !(o = s.n()).done;) {
                var a = o.value.split("=")[0];
                r[a] && delete r[a];
            }
        }
        catch (e) {
            s.e(e);
        }
        finally {
            s.f();
        }
    } var c = e.indexOf("?") > -1 ? "&" : "?"; return e + c + function (e) { var t, n, r = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : "&", i = []; return L(e, (function (e, r) { t = encodeURIComponent(e.toString()), n = encodeURIComponent(r), i[i.length] = n + "=" + t; })), i.join(r); }(r); }, Kt = function e(t, n) { if (n.blob && t.buffer)
        return new Blob([t.buffer], { type: "text/plain" }); if (n.sendBeacon || n.blob) {
        var r = e(t, { method: "POST" });
        return new Blob([r], { type: "application/x-www-form-urlencoded" });
    } if ("POST" !== n.method)
        return null; var i, o; return i = Array.isArray(t) || (o = t, "[object Uint8Array]" === Object.prototype.toString.call(o)) ? "data=" + encodeURIComponent(t) : "data=" + encodeURIComponent(t.data), "compression" in t && t.compression && (i += "&compression=" + t.compression), i; }, en = function (e) { var t = e.url, n = e.data, r = e.headers, i = e.options, o = e.captureMetrics, s = e.callback, a = e.retriesPerformedSoFar, c = e.retryQueue, u = e.onXHRError, l = new XMLHttpRequest; l.open(i.method || "GET", t, !0); var d = Kt(n, i); o.incr("_send_request"), o.incr("_send_request_inflight"), L(r, (function (e, t) { l.setRequestHeader(t, e); })), "POST" !== i.method || i.blob || l.setRequestHeader("Content-Type", "application/x-www-form-urlencoded"), l.withCredentials = !0, l.onreadystatechange = function () { if (4 === l.readyState)
        if (o.incr("xhr-response"), o.incr("xhr-response-".concat(l.status)), o.decr("_send_request_inflight"), 200 === l.status) {
            if (s) {
                var e;
                try {
                    e = JSON.parse(l.responseText);
                }
                catch (e) {
                    return void D(e);
                }
                s(e);
            }
        }
        else
            "function" == typeof u && u(l), [401, 403, 404, 500].indexOf(l.status) < 0 && c.enqueue({ url: t, data: n, options: i, headers: r, retriesPerformedSoFar: (a || 0) + 1, callback: s }), s && s({ status: 0 }); }, l.send(d); }, tn = function (e) { a(i, e); var n = p(i); function i(e, t) { var o; return r(this, i), (o = n.call(this)).captureMetrics = e, o.isPolling = !1, o.queue = [], o.areWeOnline = !0, o.onXHRError = t, "onLine" in window.navigator && (o.areWeOnline = window.navigator.onLine, window.addEventListener("online", (function () { o._handleWeAreNowOnline(); })), window.addEventListener("offline", (function () { o.areWeOnline = !1; }))), o; } return o(i, [{ key: "enqueue", value: function (e) { var t = e.retriesPerformedSoFar || 0; if (!(t >= 10)) {
                var n = 3e3 * Math.pow(2, t), r = new Date(Date.now() + n);
                console.warn("Enqueued failed request for retry in ".concat(n)), this.queue.push({ retryAt: r, requestData: e }), this.isPolling || (this.isPolling = !0, this.poll());
            } } }, { key: "poll", value: function () { var e = this; this._poller && clearTimeout(this._poller), this._poller = setTimeout((function () { e.areWeOnline && e.queue.length > 0 && e.flush(), e.poll(); }), this._pollInterval); } }, { key: "flush", value: function () { var e = new Date(Date.now()), t = this.queue.filter((function (t) { return t.retryAt < e; })); if (t.length > 0) {
                this.queue = this.queue.filter((function (t) { return t.retryAt >= e; }));
                var n, r = v(t);
                try {
                    for (r.s(); !(n = r.n()).done;) {
                        var i = n.value.requestData;
                        this._executeXhrRequest(i);
                    }
                }
                catch (e) {
                    r.e(e);
                }
                finally {
                    r.f();
                }
            } } }, { key: "unload", value: function () { this._poller && (clearTimeout(this._poller), this._poller = void 0); var e, n = v(this.queue); try {
                for (n.s(); !(e = n.n()).done;) {
                    var r = e.value.requestData, i = r.url, o = r.data, s = r.options;
                    try {
                        window.navigator.sendBeacon(i, Kt(o, t(t({}, s), {}, { sendBeacon: !0 })));
                    }
                    catch (e) {
                        O.DEBUG && console.error(e);
                    }
                }
            }
            catch (e) {
                n.e(e);
            }
            finally {
                n.f();
            } this.queue = []; } }, { key: "_executeXhrRequest", value: function (e) { var t = e.url, n = e.data, r = e.options, i = e.headers, o = e.callback, s = e.retriesPerformedSoFar; en({ url: t, data: n || {}, options: r || {}, headers: i || {}, retriesPerformedSoFar: s || 0, callback: o, captureMetrics: this.captureMetrics, retryQueue: this, onXHRError: this.onXHRError }); } }, { key: "_handleWeAreNowOnline", value: function () { this.areWeOnline = !0, this.flush(); } }]), i; }(pt), nn = 18e5, rn = 864e5, on = function () { function e(t, n) { r(this, e), this.persistence = n, this._windowId = void 0, this._sessionId = void 0, this._sessionStartTimestamp = null, this._sessionActivityTimestamp = null; var i = t.persistence_name || t.token; if (this.window_id_storage_key = "ph_" + i + "_window_id", this.primary_window_exists_storage_key = "ph_" + i + "_primary_window_exists", !this.persistence.disabled && Re.is_supported()) {
        var o = Re.parse(this.window_id_storage_key), s = Re.parse(this.primary_window_exists_storage_key);
        o && !s ? this._windowId = o : Re.remove(this.window_id_storage_key), Re.set(this.primary_window_exists_storage_key, !0);
    } this._listenToReloadWindow(); } return o(e, [{ key: "_setWindowId", value: function (e) { e !== this._windowId && (this._windowId = e, !this.persistence.disabled && Re.is_supported() && Re.set(this.window_id_storage_key, e)); } }, { key: "_getWindowId", value: function () { return this._windowId ? this._windowId : !this.persistence.disabled && Re.is_supported() ? Re.parse(this.window_id_storage_key) : null; } }, { key: "_setSessionId", value: function (e, t, n) { e === this._sessionId && t === this._sessionActivityTimestamp && n === this._sessionStartTimestamp || (this._sessionStartTimestamp = n, this._sessionActivityTimestamp = t, this._sessionId = e, this.persistence.register(s({}, et, [t, e, n]))); } }, { key: "_getSessionId", value: function () { if (this._sessionId && this._sessionActivityTimestamp && this._sessionStartTimestamp)
                return [this._sessionActivityTimestamp, this._sessionId, this._sessionStartTimestamp]; var e = this.persistence.props.$sesid; return Array.isArray(e) && 2 === e.length && e.push(e[0]), e || [0, null, 0]; } }, { key: "resetSessionId", value: function () { this._setSessionId(null, null, null); } }, { key: "_listenToReloadWindow", value: function () { var e = this; window.addEventListener("beforeunload", (function () { !e.persistence.disabled && Re.is_supported() && Re.remove(e.primary_window_exists_storage_key); })); } }, { key: "checkAndGetSessionAndWindowId", value: function () { var e = arguments.length > 0 && void 0 !== arguments[0] && arguments[0], t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null, n = t || (new Date).getTime(), r = this._getSessionId(), i = f(r, 3), o = i[0], s = i[1], a = i[2], c = this._getWindowId(), u = a && a > 0 && Math.abs(n - a) > rn; !s || !e && Math.abs(n - o) > nn || u ? (s = ae(), c = ae(), a = n) : c || (c = ae()); var l = 0 === o || !e || u ? n : o, d = 0 === a ? (new Date).getTime() : a; return this._setWindowId(c), this._setSessionId(s, l, d), { sessionId: s, windowId: c }; } }]), e; }();
    function sn(e) { return e.forEach((function (t, n) { for (var r in t) {
        var i = r;
        o = t[i], Number(o) === o && o % 1 != 0 && t[i].toString().match(/^\d+\.\d{4,}$/) && (e[n][i] = Number(t[i].toFixed(3))), "serverTiming" === i && 0 === t[i].length && delete e[n][i], "entryType" === i && "resource" === t[i] && delete e[n][i], "nextHopProtocol" === i && delete e[n][i], 0 === t[i] && delete e[n][i];
    } var o; })), function (e) { if (0 === e.length)
        return []; var t = Object.keys(e[0]); return [t, e.map((function (e) { return t.map((function (t) { return e[t]; })); }))]; }(e); }
    function an(e) { try {
        return sn(JSON.parse(JSON.stringify(A.performance.getEntriesByType(e))));
    }
    catch (t) {
        return O.DEBUG && console.warn("not able to capture performance data (" + e + ") - " + t), [];
    } }
    var cn, un, ln, dn = o((function e(t, n, i, o) { r(this, e), this.name = "posthog-js", this.setupOnce = function (e) { e((function (e) { var r, s, a; if ("error" !== e.level || !t.__loaded)
        return e; e.tags || (e.tags = {}), e.tags["PostHog Person URL"] = t.config.api_host + "/person/" + t.get_distinct_id(), t.sessionRecordingStarted() && (e.tags["PostHog Recording URL"] = t.config.api_host + "/recordings/#sessionRecordingId=" + t.sessionManager.checkAndGetSessionAndWindowId(!0).sessionId); var c = (null === (r = e.exception) || void 0 === r ? void 0 : r.values) || [], u = { $sentry_event_id: e.event_id, $sentry_exception: e.exception, $sentry_exception_message: null === (s = c[0]) || void 0 === s ? void 0 : s.value, $sentry_exception_type: null === (a = c[0]) || void 0 === a ? void 0 : a.type, $sentry_tags: e.tags }; return n && i && (u.$sentry_url = (o || "https://sentry.io/organizations/") + n + "/issues/?project=" + i + "&query=" + e.event_id), t.capture("$exception", u), e; })); }; }));
    !function (e) { e[e.INIT_MODULE = 0] = "INIT_MODULE", e[e.INIT_SNIPPET = 1] = "INIT_SNIPPET"; }(cn || (cn = {}));
    var pn = function () { }, fn = {}, hn = "posthog", _n = A.XMLHttpRequest && "withCredentials" in new XMLHttpRequest, gn = !_n && -1 === T.indexOf("MSIE") && -1 === T.indexOf("Mozilla"), vn = function () { var e, t, n; return { api_host: "https://app.posthog.com", api_method: "POST", api_transport: "XHR", token: "", autocapture: !0, rageclick: !1, cross_subdomain_cookie: -1 === (null == $ || null === (e = $.location) || void 0 === e || null === (t = e.hostname) || void 0 === t ? void 0 : t.indexOf("herokuapp.com")), persistence: "cookie", persistence_name: "", cookie_name: "", loaded: pn, store_google: !0, save_referrer: !0, test: !1, verbose: !1, img: !1, capture_pageview: !0, debug: !1, cookie_expiration: 365, upgrade: !1, disable_session_recording: !1, disable_persistence: !1, disable_cookie: !1, enable_recording_console_log: void 0, secure_cookie: "https:" === (null == A || null === (n = A.location) || void 0 === n ? void 0 : n.protocol), ip: !0, opt_out_capturing_by_default: !1, opt_out_persistence_by_default: !1, opt_out_capturing_persistence_type: "localStorage", opt_out_capturing_cookie_prefix: null, opt_in_site_apps: !1, property_blacklist: [], respect_dnt: !1, sanitize_properties: null, xhr_headers: {}, inapp_protocol: "//", inapp_link_new_window: !1, request_batching: !0, properties_string_max_length: 65535, session_recording: { blockClass: "ph-no-capture", blockSelector: null, ignoreClass: "ph-ignore-input", maskAllInputs: !0, maskInputOptions: {}, maskInputFn: null, slimDOMOptions: {}, collectFonts: !1, inlineStylesheet: !0 }, mask_all_element_attributes: !1, mask_all_text: !1, advanced_disable_decide: !1, advanced_disable_toolbar_metrics: !1, on_xhr_error: function (e) { var t = "Bad HTTP status: " + e.status + " " + e.statusText; console.error(t); }, get_device_id: function (e) { return e; }, _onCapture: pn, _capture_metrics: !1, _capture_performance: !1, name: "posthog", callback_fn: "posthog._jsc", bootstrap: {} }; }, yn = function (e, t, n) { var r, i = n !== hn && ln ? n ? ln[n] : void 0 : ln; if (i && un === cn.INIT_MODULE)
        r = i;
    else {
        if (i && !W(i))
            return void console.error("You have already initialized " + n);
        r = new mn;
    } if (r._init(e, t, n), r.toolbar.maybeLoadToolbar(), r.sessionRecording = new at(r), r.sessionRecording.startRecordingIfEnabled(), r.__autocapture_enabled = r.get_config("autocapture"), r.get_config("autocapture")) {
        Ie.enabledForProject(r.get_config("token"), 100, 100) ? Ie.isBrowserSupported() ? Ie.init(r) : (r.__autocapture_enabled = !1, q("Disabling Automatic Event Collection because this browser is not supported")) : (r.__autocapture_enabled = !1, q("Not in active bucket: disabling Automatic Event Collection."));
    } return O.DEBUG = O.DEBUG || r.get_config("debug"), void 0 !== i && W(i) && (r._execute_array.call(r.people, i.people), r._execute_array(i)), r; }, mn = function () { function e() { r(this, e), this.config = vn(), this.compression = {}, this.decideEndpointWasHit = !1, this.SentryIntegration = dn, this.__captureHooks = [], this.__request_queue = [], this.__loaded = !1, this.__autocapture_enabled = void 0, this._jsc = function () { }, this.people = new Je(this), this.featureFlags = new ze(this), this.feature_flags = this.featureFlags, this.toolbar = new dt(this), this._captureMetrics = void 0, this._requestQueue = void 0, this._retryQueue = void 0, this.persistence = void 0, this.sessionManager = void 0; } return o(e, [{ key: "init", value: function (e, t, n) { if (z(n))
                console.error("You must name your new library: init(token, config, name)");
            else {
                if (n !== hn) {
                    var r = yn(e, t, n);
                    return ln[n] = r, r._loaded(), r;
                }
                console.error("You must initialize the main posthog object right after you include the PostHog js snippet");
            } } }, { key: "_init", value: function (e) { var t, n = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {}, r = arguments.length > 2 ? arguments[2] : void 0; if (this.__loaded = !0, this.config = {}, this._triggered_notifs = [], this.set_config(H({}, vn(), n, { name: r, token: e, callback_fn: (r === hn ? r : "posthog." + r) + "._jsc" })), this._jsc = function () { }, this._captureMetrics = new ht(this.get_config("_capture_metrics")), this._requestQueue = new ft(this._captureMetrics, this._handle_queued_event.bind(this)), this._retryQueue = new tn(this._captureMetrics, this.get_config("on_xhr_error")), this.__captureHooks = [], this.__request_queue = [], this.persistence = new rt(this.config), this.sessionManager = new on(this.config, this.persistence), this._gdpr_init(), void 0 !== (null === (t = n.bootstrap) || void 0 === t ? void 0 : t.distinctID)) {
                var i, o = this.get_config("get_device_id")(ae()), s = null !== (i = n.bootstrap) && void 0 !== i && i.isIdentifiedID ? o : n.bootstrap.distinctID;
                this.register({ distinct_id: n.bootstrap.distinctID, $device_id: s });
            } if (this._hasBootstrappedFeatureFlags()) {
                var a, c = Object.keys((null === (a = n.bootstrap) || void 0 === a ? void 0 : a.featureFlags) || {}).filter((function (e) { var t, r; return !(null === (t = n.bootstrap) || void 0 === t || null === (r = t.featureFlags) || void 0 === r || !r[e]); })).reduce((function (e, t) { var r, i; return e[t] = (null === (r = n.bootstrap) || void 0 === r || null === (i = r.featureFlags) || void 0 === i ? void 0 : i[t]) || !1, e; }), {});
                this.featureFlags.receivedFeatureFlags({ featureFlags: c });
            } if (!this.get_distinct_id()) {
                var u = this.get_config("get_device_id")(ae());
                this.register_once({ distinct_id: u, $device_id: u }, "");
            } A.addEventListener && A.addEventListener("onpagehide" in self ? "pagehide" : "unload", this._handle_unload.bind(this)); } }, { key: "_loaded", value: function () { this.featureFlags.setReloadingPaused(!0); try {
                this.get_config("loaded")(this);
            }
            catch (e) {
                console.error("`loaded` function failed", e);
            } this._start_queue_if_opted_in(), this.get_config("capture_pageview") && this.capture("$pageview", {}, { send_instantly: !0 }), this.get_config("advanced_disable_decide") || new ct(this).call(), this.featureFlags.resetRequestQueue(), this.featureFlags.setReloadingPaused(!1); } }, { key: "_start_queue_if_opted_in", value: function () { this.has_opted_out_capturing() || this.get_config("request_batching") && this._requestQueue.poll(); } }, { key: "_dom_loaded", value: function () { var e = this; this.has_opted_out_capturing() || U(this.__request_queue, (function (t) { e._send_request.apply(e, h(t)); })), this.__request_queue = [], this._start_queue_if_opted_in(); } }, { key: "_prepare_callback", value: function (e, t) { if (z(e))
                return null; if (_n)
                return function (n) { e(n, t); }; var n = this._jsc, r = "" + Math.floor(1e8 * Math.random()), i = this.get_config("callback_fn") + "[" + r + "]"; return n[r] = function (i) { delete n[r], e(i, t); }, i; } }, { key: "_handle_unload", value: function () { this.get_config("request_batching") ? (this.get_config("capture_pageview") && this.capture("$pageleave"), this.get_config("_capture_metrics") && (this._requestQueue.updateUnloadMetrics(), this.capture("$capture_metrics", this._captureMetrics.metrics)), this._requestQueue.unload(), this._retryQueue.unload()) : this.get_config("capture_pageview") && this.capture("$pageleave", null, { transport: "sendBeacon" }); } }, { key: "_handle_queued_event", value: function (e, t, n) { var r = JSON.stringify(t); this.__compress_and_send_json_request(e, r, n || fn, pn); } }, { key: "__compress_and_send_json_request", value: function (e, n, r, i) { var o, s = function (e, n, r) { return e === Tt.LZ64 ? [{ data: S.compressToBase64(n), compression: Tt.LZ64 }, r] : e === Tt.GZipJS ? [Zt(Xt(n), { mtime: 0 }), t(t({}, r), {}, { blob: !0, urlQueryArgs: { compression: Tt.GZipJS } })] : [{ data: ie(n) }, r]; }((o = this.compression)[Tt.GZipJS] ? Tt.GZipJS : o[Tt.LZ64] ? Tt.LZ64 : Tt.Base64, n, r), a = f(s, 2), c = a[0], u = a[1]; this._send_request(e, c, u, i); } }, { key: "_send_request", value: function (e, n, r, i) { if (gn)
                this.__request_queue.push([e, n, r, i]);
            else {
                var o = { method: this.get_config("api_method"), transport: this.get_config("api_transport"), verbose: this.get_config("verbose") };
                r = H(o, r || {}), _n || (r.method = "GET");
                var s = "sendBeacon" in A.navigator && "sendBeacon" === r.transport;
                if (e = Yt(e, r.urlQueryArgs || {}, { ip: this.get_config("ip") }), J(n) && this.get_config("img")) {
                    var a = $.createElement("img");
                    a.src = e, $.body.appendChild(a);
                }
                else if (s)
                    try {
                        A.navigator.sendBeacon(e, Kt(n, t(t({}, r), {}, { sendBeacon: !0 })));
                    }
                    catch (e) {
                        this.get_config("debug") && console.error(e);
                    }
                else if (_n)
                    try {
                        en({ url: e, data: n, headers: this.get_config("xhr_headers"), options: r, captureMetrics: this._captureMetrics, callback: i, retriesPerformedSoFar: 0, retryQueue: this._retryQueue, onXHRError: this.get_config("on_xhr_error") });
                    }
                    catch (e) {
                        console.error(e);
                    }
                else {
                    var c, u = $.createElement("script");
                    u.type = "text/javascript", u.async = !0, u.defer = !0, u.src = e;
                    var l = $.getElementsByTagName("script")[0];
                    null === (c = l.parentNode) || void 0 === c || c.insertBefore(u, l);
                }
            } } }, { key: "_execute_array", value: function (e) { var t, n = this, r = [], i = [], o = []; U(e, (function (e) { e && (t = e[0], W(t) ? o.push(e) : "function" == typeof e ? e.call(n) : W(e) && "alias" === t ? r.push(e) : W(e) && -1 !== t.indexOf("capture") && "function" == typeof n[t] ? o.push(e) : i.push(e)); })); var s = function (e, t) { U(e, (function (e) { if (W(e[0])) {
                var n = t;
                L(e, (function (e) { n = n[e[0]].apply(n, e.slice(1)); }));
            }
            else
                this[e[0]].apply(this, e.slice(1)); }), t); }; s(r, this), s(i, this), s(o, this); } }, { key: "_hasBootstrappedFeatureFlags", value: function () { var e, t; return (null === (e = this.config.bootstrap) || void 0 === e ? void 0 : e.featureFlags) && Object.keys(null === (t = this.config.bootstrap) || void 0 === t ? void 0 : t.featureFlags).length > 0 || !1; } }, { key: "push", value: function (e) { this._execute_array([e]); } }, { key: "capture", value: function (e, t) { var n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : fn; if (this.__loaded && !We(this, !1)) {
                this._captureMetrics.incr("capture"), "$snapshot" === e && this._captureMetrics.incr("snapshot");
                var r = (n = n || fn).transport;
                if (r && (n.transport = r), z(e) || "string" != typeof e)
                    console.error("No event name provided to posthog.capture");
                else if (!ce(T)) {
                    var i = this.persistence.remove_event_timer(e);
                    this.persistence.update_search_keyword($.referrer), this.get_config("store_google") && this.persistence.update_campaign_params(), this.get_config("save_referrer") && this.persistence.update_referrer_info($.referrer);
                    var o = { event: e, properties: this._calculate_event_properties(e, t || {}, i) };
                    "$identify" === e && n.$set && (o.$set = n.$set), (o = re(o, n._noTruncate ? null : this.get_config("properties_string_max_length"))).timestamp = n.timestamp || new Date, this.get_config("debug") && q("PostHog.js send", o);
                    var s = JSON.stringify(o), a = this.get_config("api_host") + (n.endpoint || "/e/"), c = n !== fn;
                    return !this.get_config("request_batching") || c && !n._batchKey || n.send_instantly ? this.__compress_and_send_json_request(a, s, n) : this._requestQueue.enqueue(a, o, n), this._invokeCaptureHooks(e, o), o;
                }
            } } }, { key: "_addCaptureHook", value: function (e) { this.__captureHooks.push(e); } }, { key: "_invokeCaptureHooks", value: function (e, t) { this.config._onCapture(e, t), L(this.__captureHooks, (function (t) { return t(e); })); } }, { key: "_calculate_event_properties", value: function (e, r, i) { var o = t({}, r); if (o.token = this.get_config("token"), "$snapshot" === e) {
                var s = this.persistence.properties();
                return o.distinct_id = s.distinct_id, o;
            } if (void 0 !== i) {
                var a = (new Date).getTime() - i;
                o.$duration = parseFloat((a / 1e3).toFixed(3));
            } if (this.sessionManager) {
                var c = this.sessionManager.checkAndGetSessionAndWindowId(), u = c.sessionId, l = c.windowId;
                o.$session_id = u, o.$window_id = l;
            } o = H({}, pe.properties(), this.persistence.properties(), o), "$pageview" === e && this.get_config("_capture_performance") && (o = H(o, function () { var e = { navigation: an("navigation"), paint: an("paint"), resource: an("resource") }; void 0 !== n(A) && A.performance && A.performance.clearResourceTimings && A.performance.clearResourceTimings(); var t = {}, r = function (e) { var t = e.navigation && e.navigation[0], n = e.navigation && e.navigation[1] && e.navigation[1][0], r = t && t.indexOf("duration"); if (r > -1)
                return n[r]; var i = t && t.indexOf("loadEventEnd"), o = t && t.indexOf("startTime"); return i > -1 ? (n && n[i]) - (n && n[o] || 0) : void 0; }(e); return r && (t.$performance_page_loaded = r), t.$performance_raw = JSON.stringify(e), t; }())); var d = this.get_config("property_blacklist"); W(d) ? L(d, (function (e) { delete o[e]; })) : console.error("Invalid value for property_blacklist config: " + d); var p = this.get_config("sanitize_properties"); return p && (o = p(o, e)), o; } }, { key: "register", value: function (e, t) { this.persistence.register(e, t); } }, { key: "register_once", value: function (e, t, n) { this.persistence.register_once(e, t, n); } }, { key: "unregister", value: function (e) { this.persistence.unregister(e); } }, { key: "_register_single", value: function (e, t) { this.register(s({}, e, t)); } }, { key: "getFeatureFlag", value: function (e, t) { return this.featureFlags.getFeatureFlag(e, t); } }, { key: "isFeatureEnabled", value: function (e, t) { return this.featureFlags.isFeatureEnabled(e, t); } }, { key: "reloadFeatureFlags", value: function () { this.featureFlags.reloadFeatureFlags(); } }, { key: "onFeatureFlags", value: function (e) { return this.featureFlags.onFeatureFlags(e); } }, { key: "identify", value: function (e, t, n) { if (e) {
                this._captureMetrics.incr("identify");
                var r = this.get_distinct_id();
                if (this.register({ $user_id: e }), !this.get_property("$device_id")) {
                    var i = r;
                    this.register_once({ $had_persisted_distinct_id: !0, $device_id: i }, "");
                }
                e !== r && e !== this.get_property(Ze) && (this.unregister(Ze), this.register({ distinct_id: e })), e === r || this.get_property("$device_id") && r !== this.get_property("$device_id") ? (t && this.people.set(t), n && this.people.set_once(n)) : (this.capture("$identify", { distinct_id: e, $anon_distinct_id: r }, { $set: t || {}, $set_once: n || {} }), this.featureFlags.setAnonymousDistinctId(r)), e !== r && this.reloadFeatureFlags();
            }
            else
                console.error("Unique user id has not been set in posthog.identify"); } }, { key: "group", value: function (e, n, r) { if (e && n) {
                this._captureMetrics.incr("group");
                var i = this.getGroups();
                this.register({ $groups: t(t({}, i), {}, s({}, e, n)) }), r && this.capture("$groupidentify", { $group_type: e, $group_key: n, $group_set: r }), i[e] !== n && this.reloadFeatureFlags();
            }
            else
                console.error("posthog.group requires a group type and group key"); } }, { key: "reset", value: function (e) { var t = this.get_property("$device_id"); this.persistence.clear(), this.sessionManager.resetSessionId(); var n = this.get_config("get_device_id")(ae()); this.register_once({ distinct_id: n, $device_id: e ? n : t }, ""); } }, { key: "get_distinct_id", value: function () { return this.get_property("distinct_id"); } }, { key: "getGroups", value: function () { return this.get_property("$groups") || {}; } }, { key: "alias", value: function (e, t) { return e === this.get_property(Ve) ? (N("Attempting to create alias for existing People user - aborting."), -2) : (z(t) && (t = this.get_distinct_id()), e !== t ? (this._register_single(Ze, e), this.capture("$create_alias", { alias: e, distinct_id: t })) : (console.error("alias matches current distinct_id - skipping api call."), this.identify(e), -1)); } }, { key: "set_config", value: function (e) { var n = t({}, this.config); J(e) && (H(this.config, e), this.get_config("persistence_name") || (this.config.persistence_name = this.config.cookie_name), this.get_config("disable_persistence") || (this.config.disable_persistence = this.config.disable_cookie), this.persistence && this.persistence.update_config(this.config), Ae.is_supported() && "true" === Ae.get("ph_debug") && (this.config.debug = !0), this.get_config("debug") && (O.DEBUG = !0), this.sessionRecording && void 0 !== e.disable_session_recording && n.disable_session_recording !== e.disable_session_recording && (e.disable_session_recording ? this.sessionRecording.stopRecording() : this.sessionRecording.startRecordingIfEnabled())); } }, { key: "startSessionRecording", value: function () { this.set_config({ disable_session_recording: !1 }); } }, { key: "stopSessionRecording", value: function () { this.set_config({ disable_session_recording: !0 }); } }, { key: "sessionRecordingStarted", value: function () { var e; return !(null === (e = this.sessionRecording) || void 0 === e || !e.started()); } }, { key: "loadToolbar", value: function (e) { return this.toolbar.loadToolbar(e); } }, { key: "get_config", value: function (e) { var t; return null === (t = this.config) || void 0 === t ? void 0 : t[e]; } }, { key: "get_property", value: function (e) { return this.persistence.props[e]; } }, { key: "toString", value: function () { var e, t = null !== (e = this.get_config("name")) && void 0 !== e ? e : hn; return t !== hn && (t = "posthog." + t), t; } }, { key: "_gdpr_init", value: function () { "localStorage" === this.get_config("opt_out_capturing_persistence_type") && Ae.is_supported() && (!this.has_opted_in_capturing() && this.has_opted_in_capturing({ persistence_type: "cookie" }) && this.opt_in_capturing({ enable_persistence: !1 }), !this.has_opted_out_capturing() && this.has_opted_out_capturing({ persistence_type: "cookie" }) && this.opt_out_capturing({ clear_persistence: !1 }), this.clear_opt_in_out_capturing({ persistence_type: "cookie", enable_persistence: !1 })), this.has_opted_out_capturing() ? this._gdpr_update_persistence({ clear_persistence: !0 }) : this.has_opted_in_capturing() || !this.get_config("opt_out_capturing_by_default") && !Fe.get("ph_optout") || (Fe.remove("ph_optout"), this.opt_out_capturing({ clear_persistence: this.get_config("opt_out_persistence_by_default") })); } }, { key: "_gdpr_update_persistence", value: function (e) { var t; if (e && e.clear_persistence)
                t = !0;
            else {
                if (!e || !e.enable_persistence)
                    return;
                t = !1;
            } this.get_config("disable_persistence") || this.persistence.disabled === t || this.persistence.set_disabled(t); } }, { key: "_gdpr_call_func", value: function (e, t) { return t = H({ capture: this.capture.bind(this), persistence_type: this.get_config("opt_out_capturing_persistence_type"), cookie_prefix: this.get_config("opt_out_capturing_cookie_prefix"), cookie_expiration: this.get_config("cookie_expiration"), cross_subdomain_cookie: this.get_config("cross_subdomain_cookie"), secure_cookie: this.get_config("secure_cookie") }, t || {}), Ae.is_supported() || "localStorage" !== t.persistence_type || (t.persistence_type = "cookie"), e(this.get_config("token"), { capture: t.capture, captureEventName: t.capture_event_name, captureProperties: t.capture_properties, persistenceType: t.persistence_type, persistencePrefix: t.cookie_prefix, cookieExpiration: t.cookie_expiration, crossSubdomainCookie: t.cross_subdomain_cookie, secureCookie: t.secure_cookie }); } }, { key: "opt_in_capturing", value: function (e) { e = H({ enable_persistence: !0 }, e || {}), this._gdpr_call_func(Me, e), this._gdpr_update_persistence(e); } }, { key: "opt_out_capturing", value: function (e) { var t = H({ clear_persistence: !0 }, e || {}); this._gdpr_call_func(je, t), this._gdpr_update_persistence(t); } }, { key: "has_opted_in_capturing", value: function (e) { return this._gdpr_call_func(qe, e); } }, { key: "has_opted_out_capturing", value: function (e) { return this._gdpr_call_func(De, e); } }, { key: "clear_opt_in_out_capturing", value: function (e) { var t = H({ enable_persistence: !0 }, null != e ? e : {}); this._gdpr_call_func(Ne, t), this._gdpr_update_persistence(t); } }, { key: "debug", value: function (e) { !1 === e ? (A.console.log("You've disabled debug mode."), localStorage && localStorage.removeItem("ph_debug"), this.set_config({ debug: !1 })) : (A.console.log("You're now in debug mode. All calls to PostHog will be logged in your console.\nYou can disable this with `posthog.debug(false)`."), localStorage && localStorage.setItem("ph_debug", "true"), this.set_config({ debug: !0 })); } }, { key: "decodeLZ64", value: function (e) { return S.decompressFromBase64(e || null); } }]), e; }();
    !function (e, t) { for (var n = 0; n < t.length; n++)
        e.prototype[t[n]] = Y(e.prototype[t[n]]); }(mn, ["identify"]);
    var bn = {}, wn = function () { ln.init = function (e, t, n) { if (n)
        return ln[n] || (ln[n] = bn[n] = yn(e || "", t || {}, n), ln[n]._loaded()), ln[n]; var r = ln; return bn.posthog ? r = bn.posthog : e && ((r = yn(e, t || {}, hn))._loaded(), bn.posthog = r), ln = r, un === cn.INIT_SNIPPET && (A.posthog = ln), L(bn, (function (e, t) { t !== hn && (ln[t] = e); })), r; }; };
    un = cn.INIT_SNIPPET, z(A.posthog) && (A.posthog = []), (ln = A.posthog).__loaded || ln.config && ln.persistence ? console.error("PostHog library has already been downloaded at least once.") : (L(ln._i, (function (e) { e && W(e) && (bn[e[2]] = yn.apply(void 0, h(e))); })), wn(), ln.init(), L(bn, (function (e) { e._loaded(); })), function () { function e() { e.done || (e.done = !0, gn = !1, L(bn, (function (e) { e._dom_loaded(); }))); } $.addEventListener && ("complete" === $.readyState ? e() : $.addEventListener("DOMContentLoaded", e, !1)), de(A, "load", e, !0); }());
}();
//# sourceMappingURL=array.js.map
posthog.init('phc_mGe8wZNClkq9sNOqAYPtavjXDvGHjpNt5M2KcrHLXuf', { api_host: 'https://app.posthog.com' });
// Should this be used?
// posthog.capture('my event', { property: 'value' }) 
// Make the dropdowns searchable (must be initiated after data is added)
// Source: https://bluzky.github.io/nice-select2/
// Library code
!(function (e, t) {
    'object' == typeof exports && 'object' == typeof module
        ? (module.exports = t())
        : 'function' == typeof define && define.amd
            ? define([], t)
            : 'object' == typeof exports
                ? (exports.NiceSelect = t())
                : (e.NiceSelect = t());
})(self, function () {
    return (() => {
        'use strict';
        var e = {
            d: (t, i) => {
                for (var s in i)
                    e.o(i, s) && !e.o(t, s) && Object.defineProperty(t, s, { enumerable: !0, get: i[s] });
            },
            o: (e, t) => Object.prototype.hasOwnProperty.call(e, t),
            r: (e) => {
                'undefined' != typeof Symbol &&
                    Symbol.toStringTag &&
                    Object.defineProperty(e, Symbol.toStringTag, { value: 'Module' }),
                    Object.defineProperty(e, '__esModule', { value: !0 });
            }
        }, t = {};
        function i(e) {
            var t = document.createEvent('MouseEvents');
            t.initEvent('click', !0, !1), e.dispatchEvent(t);
        }
        function s(e) {
            var t = document.createEvent('HTMLEvents');
            t.initEvent('change', !0, !1), e.dispatchEvent(t);
        }
        function o(e) {
            var t = document.createEvent('FocusEvent');
            t.initEvent('focusin', !0, !1), e.dispatchEvent(t);
        }
        function n(e) {
            var t = document.createEvent('FocusEvent');
            t.initEvent('focusout', !0, !1), e.dispatchEvent(t);
        }
        function d(e, t) {
            return e.getAttribute(t);
        }
        function r(e, t) {
            return !!e && e.classList.contains(t);
        }
        function l(e, t) {
            if (e)
                return e.classList.add(t);
        }
        function a(e, t) {
            if (e)
                return e.classList.remove(t);
        }
        e.r(t), e.d(t, { default: () => p, bind: () => u });
        var c = { data: null, searchable: !1 };
        function p(e, t) {
            (this.el = e),
                (this.config = Object.assign({}, c, t || {})),
                (this.data = this.config.data),
                (this.selectedOptions = []),
                (this.placeholder = d(this.el, 'placeholder') || this.config.placeholder || 'Select an option'),
                (this.dropdown = null),
                (this.multiple = d(this.el, 'multiple')),
                (this.disabled = d(this.el, 'disabled')),
                this.create();
        }
        function u(e, t) {
            return new p(e, t);
        }
        return ((p.prototype.create = function () {
            (this.el.style.display = 'none'),
                this.data ? this.processData(this.data) : this.extractData(),
                this.renderDropdown(),
                this.bindEvent();
        }),
            (p.prototype.processData = function (e) {
                var t = [];
                e.forEach((e) => {
                    t.push({
                        data: e,
                        attributes: { selected: !1, disabled: !1, optgroup: 'optgroup' == e.value }
                    });
                }),
                    (this.options = t);
            }),
            (p.prototype.extractData = function () {
                var e = this.el.querySelectorAll('option,optgroup'), t = [], i = [], s = [];
                e.forEach((e) => {
                    if ('OPTGROUP' == e.tagName)
                        var s = { text: e.label, value: 'optgroup' };
                    else
                        s = { text: e.innerText, value: e.value };
                    var o = {
                        selected: null != e.getAttribute('selected'),
                        disabled: null != e.getAttribute('disabled'),
                        optgroup: 'OPTGROUP' == e.tagName
                    };
                    t.push(s), i.push({ data: s, attributes: o });
                }),
                    (this.data = t),
                    (this.options = i),
                    this.options.forEach(function (e) {
                        e.attributes.selected && s.push(e);
                    }),
                    (this.selectedOptions = s);
            }),
            (p.prototype.renderDropdown = function () {
                var e = `<div class="${[
                    'nice-select',
                    d(this.el, 'class') || '',
                    this.disabled ? 'disabled' : '',
                    this.multiple ? 'has-multiple' : ''
                ].join(' ')}" tabindex="${this.disabled ? null : 0}">\n  <span class="${this.multiple ? 'multiple-options' : 'current'}"></span>\n  <div class="nice-select-dropdown">\n  ${this.config.searchable
                    ? '<div class="nice-select-search-box">\n<input type="text" class="nice-select-search" placeholder="Search..."/>\n</div>'
                    : ''}\n  <ul class="list"></ul>\n  </div></div>\n`;
                this.el.insertAdjacentHTML('afterend', e),
                    (this.dropdown = this.el.nextElementSibling),
                    this._renderSelectedItems(),
                    this._renderItems();
            }),
            (p.prototype._renderSelectedItems = function () {
                if (this.multiple) {
                    var e = '';
                    'auto' == window.getComputedStyle(this.dropdown).width || this.selectedOptions.length < 2
                        ? (this.selectedOptions.forEach(function (t) {
                            e += `<span class="current">${t.data.text}</span>`;
                        }),
                            (e = '' == e ? this.placeholder : e))
                        : (e = this.selectedOptions.length + ' selected'),
                        (this.dropdown.querySelector('.multiple-options').innerHTML = e);
                }
                else {
                    var t = this.selectedOptions.length > 0 ? this.selectedOptions[0].data.text : this.placeholder;
                    this.dropdown.querySelector('.current').innerHTML = t;
                }
            }),
            (p.prototype._renderItems = function () {
                var e = this.dropdown.querySelector('ul');
                this.options.forEach((t) => {
                    e.appendChild(this._renderItem(t));
                });
            }),
            (p.prototype._renderItem = function (e) {
                var t = document.createElement('li');
                if (((t.innerHTML = e.data.text), e.attributes.optgroup))
                    t.classList.add('optgroup');
                else {
                    t.setAttribute('data-value', e.data.value);
                    var i = ['option', e.attributes.selected ? 'selected' : null, e.attributes.disabled ? 'disabled' : null];
                    t.addEventListener('click', this._onItemClicked.bind(this, e)), t.classList.add(...i);
                }
                return (e.element = t), t;
            }),
            (p.prototype.update = function () {
                if ((this.extractData(), this.dropdown)) {
                    var e = r(this.dropdown, 'open');
                    this.dropdown.parentNode.removeChild(this.dropdown), this.create(), e && i(this.dropdown);
                }
            }),
            (p.prototype.disable = function () {
                this.disabled || ((this.disabled = !0), l(this.dropdown, 'disabled'));
            }),
            (p.prototype.enable = function () {
                this.disabled && ((this.disabled = !1), a(this.dropdown, 'disabled'));
            }),
            (p.prototype.clear = function () {
                (this.selectedOptions = []), this._renderSelectedItems(), this.updateSelectValue(), s(this.el);
            }),
            (p.prototype.destroy = function () {
                this.dropdown && (this.dropdown.parentNode.removeChild(this.dropdown), (this.el.style.display = ''));
            }),
            (p.prototype.bindEvent = function () {
                this.dropdown.addEventListener('click', this._onClicked.bind(this)),
                    this.dropdown.addEventListener('keydown', this._onKeyPressed.bind(this)),
                    this.dropdown.addEventListener('focusin', o.bind(this, this.el)),
                    this.dropdown.addEventListener('focusout', n.bind(this, this.el)),
                    window.addEventListener('click', this._onClickedOutside.bind(this)),
                    this.config.searchable && this._bindSearchEvent();
            }),
            (p.prototype._bindSearchEvent = function () {
                var e = this.dropdown.querySelector('.nice-select-search');
                e &&
                    e.addEventListener('click', function (e) {
                        return e.stopPropagation(), !1;
                    }),
                    e.addEventListener('input', this._onSearchChanged.bind(this));
            }),
            (p.prototype._onClicked = function (e) {
                if ((this.multiple ? this.dropdown.classList.add('open') : this.dropdown.classList.toggle('open'),
                    this.dropdown.classList.contains('open'))) {
                    var t = this.dropdown.querySelector('.nice-select-search');
                    t && ((t.value = ''), t.focus());
                    var i = this.dropdown.querySelector('.focus');
                    a(i, 'focus'),
                        l((i = this.dropdown.querySelector('.selected')), 'focus'),
                        this.dropdown.querySelectorAll('ul li').forEach(function (e) {
                            e.style.display = '';
                        });
                }
                else
                    this.dropdown.focus();
            }),
            (p.prototype._onItemClicked = function (e, t) {
                var i = t.target;
                r(i, 'disabled') ||
                    (this.multiple
                        ? r(i, 'selected')
                            ? (a(i, 'selected'),
                                this.selectedOptions.splice(this.selectedOptions.indexOf(e), 1),
                                (this.el.querySelector('option[value="' + i.dataset.value + '"]').selected = !1))
                            : (l(i, 'selected'), this.selectedOptions.push(e))
                        : (this.selectedOptions.forEach(function (e) {
                            a(e.element, 'selected');
                        }),
                            l(i, 'selected'),
                            (this.selectedOptions = [e])),
                        this._renderSelectedItems(),
                        this.updateSelectValue());
            }),
            (p.prototype.updateSelectValue = function () {
                if (this.multiple) {
                    var e = this.el;
                    this.selectedOptions.forEach(function (t) {
                        var i = e.querySelector('option[value="' + t.data.value + '"]');
                        i && i.setAttribute('selected', !0);
                    });
                }
                else
                    this.selectedOptions.length > 0 && (this.el.value = this.selectedOptions[0].data.value);
                s(this.el);
            }),
            (p.prototype._onClickedOutside = function (e) {
                this.dropdown.contains(e.target) || this.dropdown.classList.remove('open');
            }),
            (p.prototype._onKeyPressed = function (e) {
                var t = this.dropdown.querySelector('.focus'), s = this.dropdown.classList.contains('open');
                if (32 == e.keyCode || 13 == e.keyCode)
                    i(s ? t : this.dropdown);
                else if (40 == e.keyCode) {
                    if (s) {
                        var o = this._findNext(t);
                        o && (a(this.dropdown.querySelector('.focus'), 'focus'), l(o, 'focus'));
                    }
                    else
                        i(this.dropdown);
                    e.preventDefault();
                }
                else if (38 == e.keyCode) {
                    if (s) {
                        var n = this._findPrev(t);
                        n && (a(this.dropdown.querySelector('.focus'), 'focus'), l(n, 'focus'));
                    }
                    else
                        i(this.dropdown);
                    e.preventDefault();
                }
                else
                    27 == e.keyCode && s && i(this.dropdown);
                return !1;
            }),
            (p.prototype._findNext = function (e) {
                for (e = e ? e.nextElementSibling : this.dropdown.querySelector('.list .option'); e;) {
                    if (!r(e, 'disabled') && 'none' != e.style.display)
                        return e;
                    e = e.nextElementSibling;
                }
                return null;
            }),
            (p.prototype._findPrev = function (e) {
                for (e = e ? e.previousElementSibling : this.dropdown.querySelector('.list .option:last-child'); e;) {
                    if (!r(e, 'disabled') && 'none' != e.style.display)
                        return e;
                    e = e.previousElementSibling;
                }
                return null;
            }),
            (p.prototype._onSearchChanged = function (e) {
                var t = this.dropdown.classList.contains('open'), i = e.target.value;
                if ('' == (i = i.toLowerCase()))
                    this.options.forEach(function (e) {
                        e.element.style.display = '';
                    });
                else if (t) {
                    var s = new RegExp(i);
                    this.options.forEach(function (e) {
                        var t = e.data.text.toLowerCase(), i = s.test(t);
                        e.element.style.display = i ? '' : 'none';
                    });
                }
                this.dropdown.querySelectorAll('.focus').forEach(function (e) {
                    a(e, 'focus');
                }),
                    l(this._findNext(null), 'focus');
            }),
            t);
    })();
});
// Set options
var options = { searchable: true };
// Google form for user analytics and error logging (also in background.ts)
const googleFormUrl = 'https://docs.google.com/forms/u/0/d/e/1FAIpQLSeCG85Vno3ZbydBiJjwP6P-nYj-1ZElDBEznt7n4LK5cfJFag/formResponse';
// Get HTML elements from the popup.html DOM
var redmineTaskNumberDiv = document.getElementById('task_id_input');
var fieldDiv = document.getElementById('field'); // Casting — or more properly, type assertion
var valueDiv = document.getElementById('addValue');
var createAlertDiv = document.getElementById('createAlert');
var activeAlertsListTbody = document.getElementById('activeAlertsListTbody');
var triggeredAlertsListTbody = document.getElementById('triggeredAlertsListTbody');
var addButton = document.getElementById('addButton');
var clearButton = document.getElementById('clearButton');
var version = document.getElementById('version');
// Warnings
var refreshPageWarning = document.getElementById('refreshPageWarning');
var createAlertWarning = document.getElementById('createAlertWarning');
var valueDivInstance; // prettifier object for value dropdown
// Settings module
var openSettingsIcon = document.getElementById('openSettingsIcon');
var settingsModal = document.getElementById('settingsModalId');
var closeSettingsSpan = document.getElementById('closeSettingsModuleIcon');
var extensionContent = document.getElementById('extensionContent');
// Settings sliders
var newTabEnabledSwitch = document.getElementById('newTabEnabledSwitch');
var browserAlertEnabledSwitch = document.getElementById('browserAlertEnabledSwitch');
var iconBadgeEnabledSwitch = document.getElementById('iconBadgeEnabledSwitch');
// var osNotificationEnabledSwitch = document.getElementById('osNotificationEnabledSwitch') as HTMLButtonElement;
// Settings text input
var settingsRefreshIntervalInMinutes = document.getElementById('refreshIntervalInMinutes');
var settingsDomainName = document.getElementById('domainName');
// Settings save button
var saveSettingsButton = document.getElementById('saveSettingsButton');
function removeCreateAlertAndAddWarningWhenUserNotInRedmineTaskPage(callback1, callback2) {
    chrome.tabs.query({ active: true, currentWindow: true }, async (tabs) => {
        const storageLocalObjects = await asyncGetStorageLocal(null);
        const settings = storageLocalObjects.redmineTaskNotificationsExtensionSettings;
        const domainName = settings.domainName;
        const regExp = new RegExp(`${domainName}/issues/.+`);
        const isCurrentTabARedminePage = regExp.test(tabs[0].url);
        if (!isCurrentTabARedminePage) {
            createAlertDiv.classList.add('displayNone');
            createAlertWarning.classList.remove('displayNone');
        }
        else if (isCurrentTabARedminePage) {
            if (callback1) {
                callback1(redmineTaskNumberDiv);
            }
            if (callback2) {
                callback2(true, setRedmineTaskDropdownValues);
            }
        }
    });
}
async function getAndSetActiveTabRedmineTaskNumber(htmlElement) {
    if (htmlElement) {
        chrome.tabs.query({ active: true, currentWindow: true }, function (tabs) {
            const fullUrlString = tabs[0].url;
            const regexForIssueId = /issues\/(.+?)($|\/)/gm;
            const issueId = regexForIssueId.exec(fullUrlString);
            htmlElement.value = !!issueId ? issueId[1] : 'error';
        });
    }
}
// Regex validators
// function redmineTaskNumberValidationAndStyling() {
//   if (redmineTaskNumberDiv.value) {
//     if (/[0-9]{5}/.test(redmineTaskNumberDiv.value) === true) {
//       addButton.disabled = false;
//       redmineTaskNumberDiv.classList.remove('validationFailedRedBorder');
//     } else {
//       addButton.disabled = true;
//       redmineTaskNumberDiv.classList.add('validationFailedRedBorder');
//     }
//   }
// }
const validatorIntegerMoreThanOne = (input) => {
    return /^[1-9]{1,}/.test(input) && /^[0-9]+$/.test(input);
};
const validatorNotEmpty = (input) => {
    return input !== '';
};
const textFieldValidator = (textInputElement, validator, buttonElement = null) => {
    if (textInputElement.value !== undefined) {
        if (validator(textInputElement.value) === true) {
            textInputElement.classList.remove('validationFailedRedBorder');
            if (buttonElement !== null) {
                buttonElement.disabled = false;
            }
        }
        else {
            textInputElement.classList.add('validationFailedRedBorder');
            if (buttonElement !== null) {
                buttonElement.disabled = true;
            }
        }
    }
};
const setRedmineTaskDropdownFields = async (initialElementCreation = false, callback = null) => {
    try {
        chrome.tabs.query({ active: true, currentWindow: true }, function (tabs) {
            chrome.tabs.sendMessage(tabs[0].id, new Object({ action: 'parseRedmineTaskDropdownFieldsToArrayOfObjects' }), function (response) {
                if (!response) {
                    createAlertDiv.classList.add('displayNone');
                    refreshPageWarning.classList.remove('displayNone');
                    return;
                }
                response.data.forEach((fieldObject, index) => {
                    fieldDiv?.insertAdjacentHTML('beforeend', `<option value="${fieldObject.id}" ${index === 0 ? 'selected' : ''}>${fieldObject.label}</option>`);
                });
                if (callback) {
                    callback(initialElementCreation);
                }
                if (initialElementCreation === true) {
                    NiceSelect.bind(fieldDiv, options);
                }
            });
        });
    }
    catch (e) {
        // console.log(e)
    }
};
async function setRedmineTaskDropdownValues(initialElementCreation = false) {
    const selectedFieldId = fieldDiv.value;
    chrome.tabs.query({ active: true, currentWindow: true }, function (tabs) {
        chrome.tabs.sendMessage(tabs[0].id, new Object({ action: 'parseRedmineTaskDropdownFieldsToArrayOfObjects' }), function (response) {
            response.data.forEach((fieldObject) => {
                //@todo add "non empty" if index is 0
                if (fieldObject.id === selectedFieldId) {
                    fieldObject.value.options.forEach((option, index) => {
                        if (index === 0) {
                            valueDiv?.insertAdjacentHTML('beforeend', `<option value="notEmpty"><< Not empty >></option>`);
                        }
                        valueDiv?.insertAdjacentHTML('beforeend', `<option value="${option.optionValue}" ${option.isSelected === true ? 'selected' : ''}>${option.optionText}</option>`);
                    });
                }
            });
            if (initialElementCreation === true) {
                valueDivInstance = NiceSelect.bind(valueDiv, options);
            }
            else {
                valueDivInstance.update();
            }
        });
    });
}
function clearAllDropdownOptions(dropdownElement) {
    let L = dropdownElement.options.length - 1;
    for (let i = L; i >= 0; i--) {
        dropdownElement.remove(i);
    }
}
function initializeStorageLocalObject(callback = null) {
    chrome.storage.sync.get(null, function (data) {
        if (data.redmineTaskNotificationsExtension === undefined) {
            chrome.storage.sync.set({ redmineTaskNotificationsExtension: [] }, function () {
                console.log('chrome.storage.sync initial value was set...');
                if (callback) {
                    callback();
                }
            });
        }
    });
}
const cyrb53 = (str, seed = 0) => {
    /*
     * Hash function
     */
    if (!str) {
        return 'Error';
    }
    if (str.length === 0) {
        return 'Anonymous';
    }
    let h1 = 0xdeadbeef ^ seed, h2 = 0x41c6ce57 ^ seed;
    for (let i = 0, ch; i < str.length; i++) {
        ch = str.charCodeAt(i);
        h1 = Math.imul(h1 ^ ch, 2654435761);
        h2 = Math.imul(h2 ^ ch, 1597334677);
    }
    h1 = Math.imul(h1 ^ (h1 >>> 16), 2246822507) ^ Math.imul(h2 ^ (h2 >>> 13), 3266489909);
    h2 = Math.imul(h2 ^ (h2 >>> 16), 2246822507) ^ Math.imul(h1 ^ (h1 >>> 13), 3266489909);
    return 4294967296 * (2097151 & h2) + (h1 >>> 0);
};
const chromeTabsQueryAsync = (isActive = true, isCurrentWindow = true) => {
    return new Promise((resolve) => {
        chrome.tabs.query({ active: isActive, currentWindow: isCurrentWindow }, resolve);
    });
};
const chromeTabsSendMessageAsync = (tabs, action) => {
    return new Promise((resolve) => {
        chrome.tabs.sendMessage(tabs[0].id, new Object({ action: action }), resolve);
    });
};
const sendMessageToContentScript = async (action) => {
    const tabs = await chromeTabsQueryAsync();
    const contentScriptResponse = await chromeTabsSendMessageAsync(tabs, action);
    // console.log(contentScriptResponse);
    return contentScriptResponse;
};
const saveAlertToStorageLocal = async () => {
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
    let activeRedminePageTaskTitle = '';
    try {
        activeRedminePageTaskTitle = await sendMessageToContentScript('getActiveRedminePageTaskTitle');
    }
    catch (e) {
        // console.log(e)
    }
    let alertObject = new Object({
        uniqueTimestampId: new Date().getTime(),
        redmineTaskId: redmineTaskNumberDiv.value,
        redmineTaskTitle: activeRedminePageTaskTitle,
        itemAddedOnReadableDate: newDateFormatted,
        fieldToCheckLabel: fieldDiv.options[fieldDiv.selectedIndex].text,
        fieldToCheckValue: fieldDiv.value,
        valueToCheckLabel: valueDiv.options[valueDiv.selectedIndex].text,
        valueToCheckValue: valueDiv.value,
        triggeredInThePast: false,
        triggeredAtTimestamp: '',
        triggeredAtReadableDate: ''
    });
    chrome.storage.sync.get(null, async (data) => {
        if (data.redmineTaskNotificationsExtension) {
            let alertObjectArray = data.redmineTaskNotificationsExtension;
            alertObjectArray.push(alertObject);
            chrome.storage.sync.set({ redmineTaskNotificationsExtension: alertObjectArray }, async () => {
                // console.log('chrome.storage.sync new alert was created...');
                clearAndDisplayAlerts();
            });
            const settings = data.redmineTaskNotificationsExtensionSettings;
            // try {
            //   const userName = await sendMessageToContentScript('getUserInitials');
            //   const newUserHash = cyrb53(userName);
            //   posthog.capture('savedAlertEvent', { userHash: newUserHash, settingsObject: settings })
            // } catch (e) {
            //   //
            // }
            // Set user hash
            try {
                const userHash = settings.userHash;
                if (userHash !== 'Anonymous') {
                    // console.log(`userHash !== 'Anonymous'`)
                    return;
                }
                const userName = await sendMessageToContentScript('getUserInitials');
                const newUserHash = cyrb53(userName);
                settings.userHash = newUserHash;
                await asyncSetStorageLocal('redmineTaskNotificationsExtensionSettings', settings);
            }
            catch (e) {
                // console.log(e)
            }
        }
    });
};
// User analytics
// const sendUserAnalyticsData = async () => {
//   try {
//     const storageLocalObjects = await asyncGetStorageLocal(null)
//     const settings = storageLocalObjects.redmineTaskNotificationsExtensionSettings
//     chrome.tabs.query({active: true, currentWindow: true}, function(tabs){
//       chrome.tabs.sendMessage(tabs[0].id, new Object({'action': "getUserInitials"}), function(response) {
//         response.data
//         fetch(googleFormUrl, {
//           method: 'POST',
//           headers: {
//             'Content-Type': 'application/x-www-form-urlencoded'
//           },
//           body: new URLSearchParams({
//             "entry.1257070925": newDateFormatted,  // timestamp
//             "entry.1232033723": cyrb53(response.data),  // hashed user name
//             "entry.1273942264": 'NA', // redmineTaskNumberDiv.value,  // task id
//             "entry.1822505748": 'NA', // fieldDiv.options[fieldDiv.selectedIndex].text,  // field name
//             "entry.1949912164": 'NA', // valueDiv.options[valueDiv.selectedIndex].text,  // field value
//             "entry.879864049": JSON.stringify(settings),  // settings object
//           })
//         });
//       });
//     })
//   } catch (e) {
//     // console.log(e)
//   }
// }
// sendUserAnalyticsData();
// Rewrite into async func
// const asyncQueryContentScript = (action) => {
//   return new Promise((chrome.tabs.query({active: true, currentWindow: true}, function(tabs){
//     chrome.tabs.sendMessage(tabs[0].id, new Object({'action': action, 'data': requestData}), function(response) {
//         if (response) {
//             console.log('background.js worker received a response from content.js...')
//         }
//     })
//   ))
//   return new Promise((resolve) => {
//     chrome.storage.sync.get(key, resolve);
//   });
// })
// }
function clearChromeStorageSync() {
    if (confirm('Are you sure you want to delete all alerts and settings?')) {
        chrome.storage.sync.clear(function () {
            initializeStorageLocalSettingsObject();
            initializeStorageLocalObject(clearAndDisplayAlerts);
            // console.log('chrome.storage.sync was cleared...');
        });
    }
}
const clearAndDisplayAlerts = async () => {
    const storageLocalObjects = await asyncGetStorageLocal(null);
    const settings = storageLocalObjects.redmineTaskNotificationsExtensionSettings;
    const domainName = settings.domainName;
    if (storageLocalObjects.redmineTaskNotificationsExtension) {
        activeAlertsListTbody.innerHTML = '';
        triggeredAlertsListTbody.innerHTML = '';
        storageLocalObjects.redmineTaskNotificationsExtension.forEach((object) => {
            if (object.triggeredInThePast === false) {
                activeAlertsListTbody?.insertAdjacentHTML('beforeend', `
              <tr id="trId${object.uniqueTimestampId}">
                <td class="tooltip" title="${object.redmineTaskTitle}"><a target="_blank" href="${domainName}/issues/${object.redmineTaskId}">${object.redmineTaskId}</a></td>
                <td>${object.fieldToCheckLabel}</td>
                <td>${object.valueToCheckLabel}</td>
                <td style="display: flex; justify-content: space-between; width: calc(100% - 2rem);">
                  <div>${object.itemAddedOnReadableDate}</div>
                  <div>
                    <button class="genericButton activeAlertDelete" id="activeAlertDelete${object.uniqueTimestampId}">Delete</button>
                  </div>
                </td>
              </tr>
            `);
                let deleteButton = document.getElementById(`activeAlertDelete${object.uniqueTimestampId}`);
                let deleteTr = document.getElementById(`trId${object.uniqueTimestampId}`);
                deleteButton.addEventListener('click', function () {
                    deleteTr.classList.add('opacityZero');
                    deleteTr.addEventListener('transitionend', () => {
                        deleteSingleAlertFromStorageLocal(object.uniqueTimestampId);
                    });
                });
            }
            else if (object.triggeredInThePast === true) {
                triggeredAlertsListTbody?.insertAdjacentHTML('beforeend', `
              <tr>
                <td class="tooltip" title="${object.redmineTaskTitle}"><a target="_blank" href="${domainName}/issues/${object.redmineTaskId}">${object.redmineTaskId}</a></td>
                <td>${object.fieldToCheckLabel}</td>
                <td>${object.valueToCheckLabel}</td>
                <td class="tooltip" title="Created at: ${object.itemAddedOnReadableDate}">${object.triggeredAtReadableDate}</td>
              </tr>
            `);
            }
        });
    }
};
function deleteSingleAlertFromStorageLocal(uniqueTimestampId) {
    chrome.storage.sync.get(null, function (data) {
        if (data.redmineTaskNotificationsExtension) {
            let alertObjectArray = data.redmineTaskNotificationsExtension;
            alertObjectArray.forEach(function (object, index) {
                if (object.uniqueTimestampId === uniqueTimestampId) {
                    alertObjectArray.splice(index, 1);
                    chrome.storage.sync.set({ redmineTaskNotificationsExtension: alertObjectArray }, function () {
                        // console.log('chrome.storage.sync active alert was deleted...');
                        clearAndDisplayAlerts();
                    });
                }
            });
        }
    });
}
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
const initializeStorageLocalSettingsObject = async () => {
    const storageLocalObjects = await asyncGetStorageLocal(null);
    const settings = storageLocalObjects.redmineTaskNotificationsExtensionSettings;
    if (settings === undefined) {
        // default settings
        await asyncSetStorageLocal('redmineTaskNotificationsExtensionSettings', new Object({
            newTabEnabled: true,
            browserAlertEnabled: true,
            iconBadgeEnabled: true,
            osNotificationEnabled: false,
            newWindowEnabled: false,
            playASoundEnabled: false,
            refreshIntervalInMinutes: 5,
            domainName: '',
            lastAnalyticsDataSendTimestamp: new Date().getTime(),
            userHash: 'Anonymous'
        }));
        // console.log('chrome.storage.sync initial settings value was set...');
        demandToSetDomainSetting();
    }
};
const closeActions = () => {
    settingsModal.style.display = 'none';
    openSettingsIcon.style.display = 'block';
    closeSettingsSpan.style.display = 'none';
    extensionContent.classList.remove('blackOpaque', 'hideScrollbar');
};
const openActions = () => {
    clearAndDisplaySettings();
    settingsModal.style.display = 'block';
    openSettingsIcon.style.display = 'none';
    closeSettingsSpan.style.display = 'block';
    extensionContent.classList.add('blackOpaque', 'hideScrollbar');
};
const settingModalDisplay = async () => {
    // When the user clicks the button, open the settingModal
    openSettingsIcon?.addEventListener('click', function () {
        openActions();
    });
    // When the user clicks on <span> (x), close the settingModal
    closeSettingsSpan?.addEventListener('click', function () {
        closeActions();
    });
    // When the user clicks anywhere outside of the settingModal, close it
    // Note: for this to work, there needs to be a background div
    // window?.addEventListener('click', function (event) {
    //   if (event.target !== settingsModal) {
    //     closeActions()
    //   }
    // });
};
const clearAndDisplaySettings = async () => {
    const storageLocalObjects = await asyncGetStorageLocal(null);
    let settingsObject = storageLocalObjects.redmineTaskNotificationsExtensionSettings;
    if (settingsObject) {
        // Set settings values
        // Sliders
        const ifValueTrueThenCheckboxChecked = (value, checkboxElement) => {
            if (value && checkboxElement) {
                if (value === true) {
                    checkboxElement.checked = true;
                }
            }
        };
        ifValueTrueThenCheckboxChecked(settingsObject.newTabEnabled, newTabEnabledSwitch);
        ifValueTrueThenCheckboxChecked(settingsObject.browserAlertEnabled, browserAlertEnabledSwitch);
        ifValueTrueThenCheckboxChecked(settingsObject.iconBadgeEnabled, iconBadgeEnabledSwitch);
        // ifValueTrueThenCheckboxChecked(settingsObject.osNotificationEnabled, osNotificationEnabledSwitch)
        // Input fields
        const setInputFieldValue = (value, inputFieldElement) => {
            if (value && inputFieldElement) {
                inputFieldElement.value = value;
            }
        };
        setInputFieldValue(settingsObject.refreshIntervalInMinutes, settingsRefreshIntervalInMinutes);
        setInputFieldValue(settingsObject.domainName, settingsDomainName);
        // re-run validations since opening the module last time
        settingsRefreshIntervalInMinutesValidation();
        settingsDomainNameValidation();
    }
};
const settingsRefreshIntervalInMinutesValidation = () => {
    textFieldValidator(settingsRefreshIntervalInMinutes, validatorIntegerMoreThanOne, saveSettingsButton);
};
const settingsDomainNameValidation = () => {
    textFieldValidator(settingsDomainName, validatorNotEmpty, saveSettingsButton);
};
function addMultipleEventListener(element, events, handler) {
    events.forEach((e) => element.addEventListener(e, handler));
}
const saveSettingsFromUiToStorageLocal = async () => {
    // Get values from storageLocal
    const storageLocalObjects = await asyncGetStorageLocal(null);
    const settings = storageLocalObjects.redmineTaskNotificationsExtensionSettings;
    let domainName = settingsDomainName.value.trim();
    if (domainName.endsWith('/')) {
        domainName = domainName.slice(0, -1);
    }
    // Get values from UI and build a new settings object
    let updatedSettingsObject = new Object({
        browserAlertEnabled: browserAlertEnabledSwitch.checked ? true : false,
        newTabEnabled: newTabEnabledSwitch.checked ? true : false,
        iconBadgeEnabled: iconBadgeEnabledSwitch.checked ? true : false,
        newWindowEnabled: false,
        // osNotificationEnabled: osNotificationEnabledSwitch.checked ? true : false,
        playASoundEnabled: false,
        refreshIntervalInMinutes: settingsRefreshIntervalInMinutes.value,
        domainName: domainName,
        lastAnalyticsDataSendTimestamp: settings === undefined ? new Date().getTime() : settings.lastAnalyticsDataSendTimestamp
    });
    asyncSetStorageLocal('redmineTaskNotificationsExtensionSettings', updatedSettingsObject);
};
const hideIntroductionText = () => {
    if (localStorage.getItem('hideIntro')) {
        document.querySelector('#introductionText').style.display = 'none';
        return;
    }
    document.querySelector('#hideIntro')?.addEventListener('click', () => {
        document.querySelector('#introductionText').style.display = 'none';
    });
    localStorage.setItem('hideIntro', true);
};
const demandToSetDomainSetting = async () => {
    // Check if domain name is configured -> if configured, return
    const storageLocalObjects = await asyncGetStorageLocal(null);
    const settingsObject = storageLocalObjects.redmineTaskNotificationsExtensionSettings;
    if (!settingsObject) {
        return;
    }
    if (settingsObject.domainName !== '') {
        return;
    }
    // If not configured, send request to redmine.tribepayments
    try {
        const redmineResponse = await fetch(`https://redmine.tribepayments.com`, {
            method: 'GET',
            headers: {},
            body: null
        });
        if (redmineResponse.status === 200) {
            settingsObject.domainName = 'https://redmine.tribepayments.com';
            await asyncSetStorageLocal('redmineTaskNotificationsExtensionSettings', settingsObject);
            return;
        }
        else {
            // If not available - open settings and highlight domain field
            openActions();
        }
    }
    catch (e) {
        // console.log(e)
    }
    // Note:
    // Add a URL example
};
const main = (async () => {
    // Remove chrome extension notification badge
    chrome.action.setBadgeText({ text: '' });
    // Check if user is on a Redmine page, if yes, prefill extension fields
    removeCreateAlertAndAddWarningWhenUserNotInRedmineTaskPage(getAndSetActiveTabRedmineTaskNumber, setRedmineTaskDropdownFields);
    fieldDiv.addEventListener('change', function () {
        clearAllDropdownOptions(valueDiv);
        setRedmineTaskDropdownValues();
    });
    // Validation disabled because task number is entered automatically
    // redmineTaskNumberDiv.addEventListener('input', function () {
    //   redmineTaskNumberValidationAndStyling();
    // });
    // Initialize values for new users (or after clearing storage.local)
    initializeStorageLocalObject();
    await initializeStorageLocalSettingsObject();
    demandToSetDomainSetting();
    // Display alerts
    clearAndDisplayAlerts();
    // Save alerts
    addButton.addEventListener('click', function () {
        saveAlertToStorageLocal();
    });
    // Settings
    settingModalDisplay();
    hideIntroductionText();
    // Settings - Validators
    addMultipleEventListener(settingsRefreshIntervalInMinutes, ['input'], settingsRefreshIntervalInMinutesValidation); // change is unneeded: ['input', 'change']
    settingsDomainName.addEventListener('input', () => settingsDomainNameValidation());
    // Save settings
    saveSettingsButton?.addEventListener('click', async () => {
        await saveSettingsFromUiToStorageLocal();
        // refresh the background.js alert check frequency interval
        chrome.runtime.sendMessage('refreshAlarms');
        // close module on save
        closeActions();
    });
    // Other
    version.addEventListener('click', function () {
        clearChromeStorageSync();
    });
})();
