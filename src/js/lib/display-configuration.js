import './configurations.js'

var displayShowAfterXPagesVisit = config.displayShowAfterXPagesVisit;
var displayShowAfterXPagesVisitCount = config.displayShowAfterXPagesVisitCount;


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
// if (config.displayPageScrolling) {
//     function canScrollFunc() {
//         document.body.style.overflow = "auto"; //True. If wanna false   "hidden"
//     }
//     canScrollFunc();
// }

//Display Configuration > Devices

//Display Configuration > Show Rules


// function pageScrollingFunc() {
//     addEvent(document.querySelector("#pageScrolling"), "onclick", function () {
//         console.log(document.querySelector("#pageScrolling").checked);
//         config.displayPageScrolling = document.querySelector("#pageScrolling").checked;
//     });
//     if (document.querySelector("#pageScrolling").checked) {
//         document.body.style.overflow = "auto";
//     } else {
//         document.body.style.overflow = "hidden";
//     }
// }
// pageScrollingFunc();



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