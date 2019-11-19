import './all-configurations.js'

var config = allConfig();
var bgEl = config.bgEl;
var popupEl = config.popupEl;
var targetOpenNewTab = config.generalTargetOpenNewTab;
var targetUrl = config.generalTargetUrl;
var imageUrl = config.generalImageUrl;
var closeBtnEl = config.closeBtnEl;

// Add the popup to the pag
function elementConstructor() {

    // Add the background div

    bgEl = document.createElement("div");
    bgEl.className = "bgEl";
    document.body.appendChild(bgEl);

    //Add the popup

    if (document.querySelector(".popupEl")) {
        popupEl = document.querySelector(".popupEl");
    } else if (this.customHTML) {
        popupEl = document.createElement("div");
        popupEl.className = "popupEl";
        popupEl.innerHTML = this.customHTML;
        document.body.appendChild(this.popupEl);
    } else {
        popupEl = document.createElement("div");
        popupEl.className = "popupEl";
        var x = targetOpenNewTab ? targetOpenNewTab = '_blank' : '_self';
        popupEl.innerHTML = "<a href=//" + targetUrl + " target='" + x + "'><img class='itmImage' src='" + imageUrl + "'></a>";
        document.body.appendChild(popupEl);
    }

    //Add close button
    if (document.querySelector(".closeBtnEl")) {
        closeBtnEl = document.querySelector(".closeBtnEl");
    } else {
        closeBtnEl = document.createElement("img");
        closeBtnEl.className = "closeBtnEl";
        closeBtnEl.src = ("data:image/png;base64,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");
        popupEl.insertBefore(closeBtnEl, popupEl.firstChild);
    }
}