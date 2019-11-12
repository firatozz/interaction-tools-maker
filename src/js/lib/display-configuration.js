import "./all-configurations"
import "./event-listener"

var config = allConfig();
var displayShowAfterXPagesVisit = config.displayShowAfterXPagesVisit;
var displayShowAfterXPagesVisitCount = config.displayShowAfterXPagesVisitCount;


function afterXPagesVisit() {
    if (displayShowAfterXPagesVisit) {
        if (this.displayShowAfterXPagesVisitCount > 0)
            this.canScroll = true;

        if (this.displayShowAfterXPagesVisitCount <= 0)
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