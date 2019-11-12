import "./all-configurations"
import "./event-listener"

var config = allConfig();
var event = addEvent();
var bgEl = config.itmBgEl;
var closeEl = config.itmCloseBtnEl;
var autoClose = config.generalAutoClose;
var autoCloseDelay = config.generalAutoCloseDelay;

function dismissOnOverlayClick() {
    // Handle the popup click overlay
    event(bgEl, "click", () => {

        this.hidePopUp(); /* ATTENTION */
        setTimeout(() => {
            this.clearBody() /* ATTENTION */
        }, 1000);
    });
}

function dismissOnContentClick() {
    // If targetOpenNewTab have worked, the box will close
    event(closeEl, "click", () => {
        this.clearBody(); /* ATTENTION */
        document.body.style.overflow = "visible";
    });
}

function dismissOnCloseBtnClick() {
    // Handle the popup close button
    event(this.closeBtnEl, "click", () => {
        this.hidePopUp(); /* ATTENTION */
        setTimeout(() => {
            this.clearBody() /* ATTENTION */
        }, 1000);
    });
}

function dismissAutoClose() {
    event(bgEl, "mousemove", () => {
        if (autoClose) {
            setTimeout(() => {
                this.hidePopUp(); /* ATTENTION */
                setTimeout(() => {
                    this.clearBody() /* ATTENTION */
                }, 800);
            }, autoCloseDelay * 1000);
        }
    });
}