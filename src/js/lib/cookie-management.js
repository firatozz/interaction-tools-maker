import "./all-configurations"

var config = allConfig();
var cookie_name = config.cookieCookieName;
var cookieExp = config.cookieCookieExpiredDayCount;
var showOncePerSession = config.displayShowOncePerSession;



// Create a cookie func
function createCookie(name, value, days, sessionOnly) {
    var expires = "";
    if (sessionOnly)
        expires = "; expires=0"
    else if (days) {
        var date = new Date();
        date.setTime(date.getTime() + (days * 24 * 60 * 60 * 1000));
        expires = "; expires=" + date.toGMTString();
    }

    document.cookie = name + "=" + value + expires + "; path=/";
}

// Get the value of a cookie
function getCookie(name) {
    var nameEQ = name + "=";
    var ca = document.cookie.split(";");
    for (var i = 0; i < ca.length; i++) {
        var c = ca[i];
        while (c.charAt(0) == " ") c = c.substring(1, c.length);
        if (c.indexOf(nameEQ) === 0) return c.substring(nameEQ.length, c.length);
    }

    return null;
}

// Delete a cookie
function eraseCookie(name) {
    createCookie(name, "", -1);
}

// Handle the swFunctionalPopup_shown cookie
// If present and true, return true
// If not present or false, create and return false
function checkCookie() {
    // Handle cookie reset
    if (cookieExp <= 0) {
        // Handle showing notification box once per browser session.
        if (showOncePerSession && getCookie(cookie_name + "_session") == "true")
            return true;

        eraseCookie(cookie_name);
        return false;
    }
    // If showOncePerSession is set to false
    if (!showOncePerSession) {
        eraseCookie(cookie_name);
        return false;
    }

    // If cookie is set to true
    if (getCookie(cookie_name) == "true")
        return true;

    return false;
}


// These will use showing popup

createCookie(cookie_name, showOncePerSession, cookieExp, false);
createCookie(cookie_name + "_session", "true", 0, true);