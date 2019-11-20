import './lib/element-constructor.js'
import './lib/all-configurations.js'
import './lib/cookie-management.js'
import './lib/sizing-tab.js'
import './lib/all-css.js'

/** Loading... */
function showPopUp() {
    if (config.shown) return;

    if (!(config.displayShowAfterXPagesVisit)) {
        if (this.delay > 1) {
            this.canScroll = true;
        }
        console.log("Geçti");
        setTimeout(() => {
            config.bgEl.style.display = "block";
            config.popupEl.className = "popupEl active";
            config.shown = true;
        }, 1 * 1000);
    }

    // Handle scaling
    //scalePopUp();

    // Save body overflow value and hide scrollbars
    if (!config.displayCanScroll) {
        document.body.style.overflow = "hidden";
    }
}

//loadEvents();

/** set Options  Loading...*/

function setOptions() {
    // for (var i = 0; i < Object.keys(options).length; i++) {
    //     this[Object.keys(options)[i]] = options[Object.keys(options)[i]];
    // }
    setAnimation();

    addCSS();
    domReady(() => {
        if (checkCookie()) return;
        addCSS();
        elementConstructor();
        //loadEvents();
    });
}


// function showPopUp() {

//     setAnimation();
//     addCSS();
//     elementConstructor();
// }