// Event listener initialisation for all browsers
function addEvent(obj, event, callback) {
    if (obj.addEventListener)
        obj.addEventListener(event, callback, false);
    else if (obj.attachEvent)
        obj.addEventListener("on" + event, callback);
}

// Ensure the DOM has loaded
function domReady(callback) {
    (document.readyState === "interactive" || document.readyState === "complete") ? callback(): this.addEvent(document, "DOMContentLoaded", callback);
}