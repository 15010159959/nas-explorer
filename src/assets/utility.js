
export {
    ajax,
    ajaxSplitAction,
    getUniqueInt,
    millisecondsToMinutesAndSeconds,
    parseQueryString,
    q,
    randomInt,
    shuffle,
    ua,
    yyyymmdd
};

////////////////////////////////////////////////////////////
//
// 函数

// ajax.all, 重试
function ajax(action, args, done, fail) {
    var a = ajaxSplitAction(action), i,
        authorization,
        method = a[0], url = a[1],
        xhr = new XMLHttpRequest();

    if (args.authorization) {
        authorization = args.authorization;
        args.authorization = undefined;
    }

    if (method == "get") {
        url += url.indexOf("?") == -1 ? "?" : "&";
        for (i in args) args[i] === undefined || (url += encodeURIComponent(i) + "=" + encodeURIComponent(args[i]) + "&");
        url = url.slice(0, -1);
        args = null;
    }

    xhr.open(method, url);
    authorization && xhr.setRequestHeader("authorization", authorization);

    xhr.onload = function (e) {
        if (this.status < 300)
            typeof done == "function" && done(this.response, e);
        else
            typeof fail == "function" && fail(e);
    };
    xhr.onabort = xhr.onerror = xhr.ontimeout = fail;

    if (args)
        xhr.setRequestHeader("content-type", "application/json; charset=utf-8");
    else
        args = undefined; // 把 null 之类的统一成 undefined, JSON.stringify(undefined) 不产生字符串

    xhr.send(JSON.stringify(args));
    return xhr;
}

function ajaxSplitAction(s) {
    var i = s.indexOf(" "), method, url;

    if (i == -1) {
        method = "get";
        url = s;
    } else {
        method = s.slice(0, i).toLowerCase();
        url = s.slice(i + 1);
    }

    return [method, url];
}

function getUniqueInt() {
    var i = Number.MIN_SAFE_INTEGER;

    return function () {
        if (i == Number.MAX_SAFE_INTEGER) {
            console.log("uniqueInt 警告 - 重置");
            i = Number.MIN_SAFE_INTEGER;
        }
        return ++i;
    };
}

function millisecondsToMinutesAndSeconds(ms) {
    var seconds = Math.round(ms / 1000),
        min = ("00" + Math.floor(seconds / 60)).slice(-2),
        sec = ("00" + seconds % 60).slice(-2);

    return min + "'" + sec + '"';
}

// https://stackoverflow.com/questions/901115/how-can-i-get-query-string-values-in-javascript
// Andy E
function parseQueryString(s) {
    var ret = {}, match, search = /([^&=]+)=?([^&]*)/g;

    while (match = search.exec(s))
        ret[decode(match[1])] = decode(match[2]);

    return ret;
    function decode(s) {
        var pl = /\+/g; // Regex for replacing addition symbol with a space
        return decodeURIComponent(s.replace(pl, " "));
    }
}

function q(elementOrSelector, selectorOrAll, all) {
    if (typeof elementOrSelector == "string")
        return selectorOrAll ? document.querySelectorAll(elementOrSelector) : document.querySelector(elementOrSelector);
    else
        return all ? elementOrSelector.querySelectorAll(selectorOrAll) : elementOrSelector.querySelector(selectorOrAll);
}

// http://stackoverflow.com/questions/1527803/generating-random-numbers-in-javascript-in-a-specific-range
// 修改使结果不包含 max
function randomInt(min, max) {
    return Math.floor(Math.random() * (max - min)) + min;
}

// https://stackoverflow.com/questions/2450954/how-to-randomize-shuffle-a-javascript-array
function shuffle(array) {
    var currentIndex = array.length, temporaryValue, randomIndex;

    // While there remain elements to shuffle...
    while (currentIndex) {

        // Pick a remaining element...
        randomIndex = Math.floor(Math.random() * currentIndex);
        currentIndex -= 1;

        // And swap it with the current element.
        temporaryValue = array[currentIndex];
        array[currentIndex] = array[randomIndex];
        array[randomIndex] = temporaryValue;
    }

    return array;
}

// https://stackoverflow.com/questions/9847580/how-to-detect-safari-chrome-ie-firefox-and-opera-browser
function ua() {
    // Opera 8.0+
    var isOpera = (!!window.opr && !!opr.addons) || !!window.opera || navigator.userAgent.indexOf(' OPR/') >= 0;

    // Firefox 1.0+
    var isFirefox = typeof InstallTrigger !== 'undefined';

    // Safari 3.0+ "[object HTMLElementConstructor]" 
    var isSafari = /constructor/i.test(window.HTMLElement) || (function (p) { return p.toString() === "[object SafariRemoteNotification]"; })(!window['safari'] || (typeof safari !== 'undefined' && safari.pushNotification));

    // Internet Explorer 6-11
    var isIE = /*@cc_on!@*/false || !!document.documentMode;

    // Edge 20+
    var isEdge = !isIE && !!window.StyleMedia;

    // Chrome 1+
    var isChrome = !!window.chrome && !!window.chrome.webstore;

    // Blink engine detection
    var isBlink = (isChrome || isOpera) && !!window.CSS;

    return {
        isBlink: isBlink,
        isChrome: isChrome,
        isEdge: isEdge,
        isFirefox: isFirefox,
        isIE: isIE,
        isOpera: isOpera,
        isSafari: isSafari
    };
}

// https://stackoverflow.com/questions/3066586/get-string-in-yyyymmdd-format-from-js-date-object
// D-Money, Hero Qu
function yyyymmdd(dateNow) {
    var d = new Date(dateNow);
    return 10000 * d.getFullYear() + 100 * d.getMonth() + 100 + d.getDate();
}
