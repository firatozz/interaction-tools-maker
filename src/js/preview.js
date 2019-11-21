import './lib/element-constructor.js'
import './lib/all-configurations.js'
import './lib/cookie-management.js'
import './lib/event-listener.js'
import './lib/general-tab.js'
import './lib/sizing-tab.js'
import './lib/all-css.js'

addCSS();

// Configuration
var delay;
if (config.generalAutoClose) {
    delay = config.generalAutoCloseDelay;
    console.log(generalAutoCloseDelay);
}



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

            //config.shown = true;
        }, delay * 1000);
        elementConstructor();

        //loadEvents();
    });

    dismissOnCloseBtnClick();

    scalePopUp(); // ??

    if (config.generalDismissOnOverlayClick) {
        dismissOnOverlayClick();
        console.log("dismissOnOverlayClick worked.");
    }
}