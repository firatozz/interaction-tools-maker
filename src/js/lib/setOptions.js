import './configurations.js'

// Set user defined options for the notification box
function setOptions(opts) {
    //General Tab Define
    config.generalImageUrl = (typeof opts.generalImageUrl === 'undefined') ? config.generalImageUrl : opts.generalImageUrl;
    config.generalTargetUrl = (typeof opts.generalTargetUrl === 'undefined') ? config.generalTargetUrl : opts.generalTargetUrl;
    config.generalTargetOpenNewTab = (typeof opts.generalTargetOpenNewTab === 'undefined') ? config.generalTargetOpenNewTab : opts.generalTargetOpenNewTab;
    config.generalCopyCouponCode = (typeof opts.generalCopyCouponCode == 'undefined') ? config.generalCopyCouponCode : opts.generalCopyCouponCode;
    config.generalAutoClose = (typeof opts.generalAutoClose === 'undefined') ? config.generalAutoClose : opts.generalAutoClose;
    config.generalAutoCloseDelay = (typeof opts.generalAutoCloseDelay === 'undefined') ? config.generalAutoCloseDelay : opts.generalAutoCloseDelay;
    config.generalAllowPopupDismissal = (typeof opts.generalAllowPopupDismissal === 'undefined') ? config.generalAllowPopupDismissal : opts.generalAllowPopupDismissal;
    config.generalDismissOnEsc = (typeof opts.generalDismissOnEsc === 'undefined') ? config.generalDismissOnEsc : opts.generalDismissOnEsc;
    config.generalDismissOnOverlayClick = (typeof opts.generalDismissOnOverlayClick === 'undefined') ? config.generalDismissOnOverlayClick : opts.generalDismissOnOverlayClick;
    config.generalDismissOncontentClick = (typeof opts.generalDismissOncontentClick === 'undefined') ? config.generalDismissOncontentClick : opts.generalDismissOncontentClick;

    // Desing Tab Define
    config.desingOverlayVisible = (typeof opts.desingOverlayVisible === 'undefined') ? config.desingOverlayVisible : opts.desingOverlayVisible;
    config.desingOverlayColor = (typeof opts.desingOverlayColor === 'undefined') ? config.desingOverlayColor : opts.desingOverlayColor;
}