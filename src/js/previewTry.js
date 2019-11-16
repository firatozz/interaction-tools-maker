import "./lib/all-configurations";
import "./lib/all-css";
import "./lib/event-listener";
import "./lib/cookie-management";

var config = allConfig();


/** Loading... */
function showPopUp() {
    if (config.itmShown) return;

    if (config.displayShowAfterXPagesVisit) {
        if (this.delay > 1) {
            this.canScroll = true;
        }

        setTimeout(() => {
            this.bgEl.style.display = "block";
            this.popupEl.className = "swFunctionalPopup active";
            this.shown = true;
        }, this.delay * 1000);
    }

    // Handle scaling
    scalePopUp();

    // Save body overflow value and hide scrollbars
    if (!this.canScroll) {
        document.body.style.overflow = "hidden";
    }

}

/** set Options  Loading...*/

function setOptions(options) {
    for (var i = 0; i < Object.keys(options).length; i++) {
        this[Object.keys(options)[i]] = options[Object.keys(options)[i]];
    }
    setAnimation();


    this.addCSS();
    domReady(() => {
        if (checkCookie()) return;
        this.createPopUp();
        this.loadEvents();
    });
}