import "./lib/all-css";
import "./lib/event-listener"

/** Loading... */
function showPopUp() {
    if (this.shown) return;

    if (this.pageviewsCount()) {
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
    this.scalePopUp();

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
    this.setAnimation();
    this.addCSS();
    this.domReady(() => {
        if (this.checkCookie()) return;
        this.createPopUp();
        this.loadEvents();
    });
}