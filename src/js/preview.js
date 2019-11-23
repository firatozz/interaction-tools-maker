import './lib/element-constructor.js'
import './lib/all-configurations.js'
import './lib/cookie-management.js'
import './lib/event-listener.js'
import './lib/general-tab.js'
import './lib/sizing-tab.js'
import './lib/all-css.js'

addCSS();

// Configuration

//loadEvents();

/** set Options  Loading...*/

function setOptions() {
    // for (var i = 0; i < Object.keys(options).length; i++) {
    //     this[Object.keys(options)[i]] = options[Object.keys(options)[i]];
    // }
    setAnimation();
    domReady(() => {
        if (checkCookie()) return;

        if (config.shown) return;

        setTimeout(() => {
            document.querySelector(".bgEl").style.display = "block";
            document.querySelector(".popupEl").className = "popupEl active";
            // Save body overflow value and hide scrollbars
            if (!(config.displayCanScroll)) {
                document.body.style.overflow = "hidden";
            }
            (config.shown) = true;
        }, 0);

        //loadEvents();
    });

    elementConstructor();
    scalePopUp(); // ??
    dismissOnCloseBtnClick();

    //General Tab  Configuration Setup
    if (config.generalAllowPopupDismissal) {
        dismissOnOverlayClick();
        dismissOnContentClick();
        dismissOnEscClick();
        dismissAutoClose();
    }

    if (config.generalDismissOnOverlayClick) {
        dismissOnOverlayClick();
    }

    if (config.generalDismissOncontentClick) {
        dismissOnContentClick();
    }

    if (config.generalAutoClose) {
        dismissAutoClose();
    }

    if (config.generalDismissOnEsc) {
        dismissOnEscClick();
    }
}