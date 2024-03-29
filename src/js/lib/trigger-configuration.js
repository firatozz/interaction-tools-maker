import './configurations.js'
import './event-listener.js'


// Trigger Cofiguration > OnLoad
function triggerOnLoad() {}

// Trigger Cofiguration > OnScroll
function triggerOnScrollFunc() {
    addEvent(document.querySelector("#openingAfterXScroll"), "input", function () {
        window.onscroll = function (e) {
            if (window.scrollY > document.querySelector("#openingAfterXScroll").value) {
                console.log(window.scrollY);
            }
        };
    });
}

// Trigger Cofiguration > OnClick
function triggerOnClick() {

}

// Trigger Cofiguration > OnHover
function triggerOnHover() {

}

// Trigger Cofiguration > Exit Intent 
function triggerExitIntent() {
    addEvent(document, "mouseout", (e) => {
        e = e ? e : window.event;

        // If this is an autocomplete element.
        if (e.target.tagName.toLowerCase() == "input")
            return;

        // Get the current viewport width.
        var vpWidth = Math.max(document.documentElement.clientWidth, window.innerWidth || 0);

        // If the current mouse X position is within 50px of the right edge
        // of the viewport, return.
        if (e.clientX >= (vpWidth - 50))
            return;

        // If the current mouse Y position is not within 50px of the top
        // edge of the viewport, return.
        if (e.clientY >= 50)
            return;

        // Reliable, works on mouse exiting window and
        // user switching active program
        var from = e.relatedTarget || e.toElement;
        if (!from)
            showPopUp(); /* ATTENTION */
    });
}

// Trigger Cofiguration > Mobile Exit Intent

// Trigger Cofiguration > InActivity
function triggerInActivity() {}