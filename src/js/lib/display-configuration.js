import './all-configurations.js'

var displayShowAfterXPagesVisit = config.displayShowAfterXPagesVisit;
var displayShowAfterXPagesVisitCount = config.displayShowAfterXPagesVisitCount;
var canScroll = config.displayCanScroll;


function afterXPagesVisit() {
    if (displayShowAfterXPagesVisit) {
        if (displayShowAfterXPagesVisitCount > 0)
            canScroll = true;

        if (displayShowAfterXPagesVisitCount <= 0)
            return true;

        var isSessionCount = sessionStorage.getItem('isSessionCount');
        if (isSessionCount === null) {
            isSessionCount = 0;
        }
        isSessionCount++;
        sessionStorage.setItem('isSessionCount', isSessionCount)
        if (isSessionCount > displayShowAfterXPagesVisitCount)
            return true;

        return false;
    }
}
if (canScroll) {
    function canScrollFunc() {
        document.body.style.overflow = "auto"; //True. If wanna false   "hidden"
    }
    canScrollFunc();
}

//Display Configuration > Devices

//Display Configuration > Show Rules

//Display Configuration > Geo Targeting

//Display Configuration > Scheduled Popup

//Display Configuration > After X Pages Visit
function showAfterXPagesVisit() {
    if (!(config.displayShowAfterXPagesVisit)) {
        if (delay > 1) {
            //...
        }
    }
}


//Display Configuration > Referal Detection

//Display Configuration > Spoken Language
function spokenLanguage() {}

//Display Configuration > Popup by Days of Week

//Display Configuration > Popup by Custom Cookie