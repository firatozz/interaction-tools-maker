import "./all-configurations"
import "./event-listener"

var config = allConfig();
var event = addEvent();

function autoScalable() {
    // Handle window resizing
    event(window, "resize", () => {
        this.scalePopUp(); /* ATTENTION */
    });
}