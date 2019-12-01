import './all-configurations.js'
import "./event-listener.js"

var width = config.sizingWidth;
var height = config.sizingHeight;


var transformDefault = config.transformDefault;
var popupEl = config.popupEl;

function popUpAutoSize() {
    addEvent(document.querySelector("#imageWidth"), "input", function () {
        width = document.querySelector("#imageWidth").value;
    });
    addEvent(document.querySelector("#imageHeight"), "input", function () {
        height = document.querySelector("#imageHeight").value;
    });
}
popUpAutoSize();


// Handle scaling the popup
function scalePopUp() {
    var margins = {
        width: 40,
        height: 40
    };
    var popupSize = {
        width: popupEl.offsetWidth,
        height: popupEl.offsetHeight
    };
    var windowSize = {
        width: window.innerWidth,
        height: window.innerHeight
    };
    var newSize = {
        width: 0,
        height: 0
    };
    var aspectRatio = popupSize.width / popupSize.height;

    // First go by width, if the popup is larger than the window, scale it
    if (popupSize.width > (windowSize.width - margins.width)) {
        newSize.width = windowSize.width - margins.width;
        newSize.height = newSize.width / aspectRatio;

        // If the height is still too big, scale again
        if (newSize.height > (windowSize.height - margins.height)) {
            newSize.height = windowSize.height - margins.height;
            newSize.width = newSize.height * aspectRatio;
        }
    }

    // If width is fine, check for height
    if (newSize.height === 0) {
        if (popupSize.height > (windowSize.height - margins.height)) {
            newSize.height = windowSize.height - margins.height;
            newSize.width = newSize.height * aspectRatio;
        }
    }

    // Set the scale amount
    var scaleTo = newSize.width / popupSize.width;

    // If the scale ratio is 0 or is going to enlarge (over 1) set it to 1
    if (scaleTo <= 0 || scaleTo > 1) scaleTo = 1;

    // Save current transform style
    if (transformDefault === "")
        transformDefault = window.getComputedStyle(popupEl, null).getPropertyValue("transform");

    // Apply the scale transformation
    popupEl.style.transform = transformDefault + " scale(" + scaleTo + ")";
}

function unScalePopUp() {
    transformDefault = "";
}

//  ????
// addEvent(document.querySelector("#sizingAutoScalable"), "click", function () {
//     if (document.querySelector("#sizingAutoScalable").checked) {
//         console.log("True");
//         addEvent(window, "resize", () => {
//             scalePopUp();
//         });
//     } else {
//         console.log("False");
//         unScalePopUp();
//     }  
//});