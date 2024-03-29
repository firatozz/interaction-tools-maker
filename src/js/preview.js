import './lib/css-configuration.js'
import './lib/sizing-tab.js'
import './lib/general-tab.js'
import './lib/event-listener.js'
import './lib/cookie-management.js'
import './lib/configurations.js'
import './lib/element-constructor.js'
import './lib/trigger-configuration.js'

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
    addCSS();
    elementConstructor();

    dismissOnCloseBtnClick();

    function closeBtnShowingTimer() {
        setTimeout(function () {
            document.querySelector(".closeBtnEl").setAttribute("style", "visibility:visible");
        }, showCloseBtnAfterXSeconds * 1000);
    };
    closeBtnShowingTimer();

    //General Tab  Configuration Setup
    // if (config.generalAllowPopupDismissal) {
    //     dismissOnOverlayClick();
    //     dismissOnContentClick();
    //     dismissOnEscClick();
    //     dismissAutoClose();
    // }




}