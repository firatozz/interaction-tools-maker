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
    this.createCookie(name, "", -1);
}

// Handle the swFunctionalPopup_shown cookie
// If present and true, return true
// If not present or false, create and return false
function checkCookie() {
    // Handle cookie reset
    if (this.cookieExp <= 0) {
        // Handle showing notification box once per browser session.
        if (this.showOncePerSession && getCookie("swFunctionalPopup_shown_session") == "true")
            return true;

        this.eraseCookie("swFunctionalPopup_shown");
        return false;
    }
    // If showOncePerSession is set to false
    if (!this.showOncePerSession) {
        this.eraseCookie("swFunctionalPopup_shown");
        return false;
    }

    // If cookie is set to true
    if (this.getCookie("swFunctionalPopup_shown") == "true")
        return true;

    return false;
}


// These will use showing popup

this.createCookie("cookie_name", this.showOncePerSession, this.cookieExp, false);
this.createCookie("cookie_name_session", "true", 0, true);