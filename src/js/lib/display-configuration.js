import './all-configurations.js'

var config = allConfig();
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
}