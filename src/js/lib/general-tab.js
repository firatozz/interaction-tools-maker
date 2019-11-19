// import './all-configurations.js'
// import './event-listener'

// var config = allConfig();
// var event = addEvent();
// var bgEl = config.itmBgEl;
// var closeEl = config.itmCloseBtnEl;
// var popupEl = config.itmPopupEl;
// var autoClose = config.generalAutoClose;
// var autoCloseDelay = config.generalAutoCloseDelay;


// function hidePopUp() {

//     bgEl.style.display = "none";
//     popupEl.className = "itmPopupEl";

//     // Set body overflow back to default to show scrollbars
//     document.body.style.overflow = "auto";
// }


// //For Dismiss func
// function clearBody() {
//     bgEl.remove();
//     popupEl.remove();
// }


// function dismissOnOverlayClick() {
//     // Handle the popup click overlay
//     event(bgEl, "click", () => {
//         hidePopUp(); /* ATTENTION */
//         setTimeout(() => {
//             clearBody() /* ATTENTION */
//         }, 1000);
//     });
// }

// function dismissOnContentClick() {
//     // If targetOpenNewTab have worked, the box will close
//     event(closeEl, "click", () => {
//         clearBody(); /* ATTENTION */
//         document.body.style.overflow = "visible";
//     });
// }

// function dismissOnCloseBtnClick() {
//     // Handle the popup close button
//     event(this.closeBtnEl, "click", () => {
//         hidePopUp(); /* ATTENTION */
//         setTimeout(() => {
//             clearBody() /* ATTENTION */
//         }, 1000);
//     });
// }

// function dismissAutoClose() {
//     event(bgEl, "mousemove", () => {
//         if (autoClose) {
//             setTimeout(() => {
//                 hidePopUp(); /* ATTENTION */
//                 setTimeout(() => {
//                     clearBody() /* ATTENTION */
//                 }, 800);
//             }, autoCloseDelay * 1000);
//         }
//     });
// }