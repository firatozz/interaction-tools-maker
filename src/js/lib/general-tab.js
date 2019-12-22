import './configurations.js'
import './event-listener.js'

var bgEl = config.bgEl;
var closeBtnEl = config.closeBtnEl;
var popupEl = config.popupEl;

function hidePopUp() {
    bgEl.style.display = "none";
    popupEl.className = "popupEl";
    // Set body overflow back to default to show scrollbars
    document.body.style.overflow = "auto";
}

//For Dismiss func
function clearBody() {
    bgEl.remove();
    popupEl.remove();
    document.querySelector("#itmStyles").remove();
}


function dismissOnContentClick() {
    // If targetOpenNewTab have worked, the box will close
    addEvent(popupEl, "click", () => {
        hidePopUp();
        setTimeout(() => {
            clearBody()
        }, 1000);
    });
}


function dismissOnOverlayClick() {
    // Handle the popup click overlay
    addEvent(bgEl, "click", () => {
        hidePopUp();
        setTimeout(() => {
            clearBody()
        }, 1000);
    });
}



function dismissOnCloseBtnClick() {
    // Handle the popup close button
    addEvent(closeBtnEl, "click", () => {
        hidePopUp();
        setTimeout(() => {
            clearBody()

        }, 1000);
    });
}


function dismissAutoClose() {
    addEvent(bgEl, "mousemove", () => {
        setTimeout(() => {
            hidePopUp();
            setTimeout(() => {
                clearBody()
            }, 800);
        }, (config.generalAutoCloseDelay) * 1000);
    });
}

function dismissOnEscClick() {
    addEvent(document.querySelector("body"), "keydown", (e) => {
        if (e.key === "Escape") {
            hidePopUp();
            setTimeout(() => {
                clearBody()
            }, 1000);
        }
    });
}


addEvent(document.querySelector("#dismissOnOverlayClick"), "click", function () {
    if (document.querySelector("#dismissOnOverlayClick").checked) {
        console.log("Test");
        dismissOnOverlayClick();
    }
});


addEvent(document.querySelector("#dismissOnEsc"), "click", function () {
    if (document.querySelector("#dismissOnEsc").checked) {
        dismissOnEscClick();
    }
});

addEvent(document.querySelector("#autoCloseGeneral"), "click", function () {
    if (document.querySelector("#autoCloseGeneral").checked) {
        dismissAutoClose();
    }
});

addEvent(document.querySelector("#dismissOnContentClick"), "click", function () {
    if (document.querySelector("#dismissOnContentClick").checked) {
        dismissOnContentClick();
    }
});