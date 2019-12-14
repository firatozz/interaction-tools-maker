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
    config.desingOverlayOpacity = (typeof opts.desingOverlayOpacity === 'undefined') ? config.desingOverlayOpacity : opts.desingOverlayOpacity;
    config.desingBorderStyle = (typeof opts.desingBorderStyle === 'undefined') ? config.desingBorderStyle : opts.desingBorderStyle;
    config.desingBorderColor = (typeof opts.desingBorderColor === 'undefined') ? config.desingBorderColor : opts.desingBorderColor;
    config.desingBorderRadius = (typeof opts.desingBorderRadius === 'undefined') ? config.desingBorderRadius : opts.desingBorderRadius;
    config.desingBorderSize = (typeof opts.desingBorderSize === 'undefined') ? config.desingBorderSize : opts.desingBorderSize;
    config.desingShowCloseBtn = (typeof opts.desingShowCloseBtn === 'undefined') ? config.desingShowCloseBtn : opts.desingShowCloseBtn;
    config.desingShowCloseBtnAfterXSeconds = (typeof opts.desingShowCloseBtnAfterXSeconds === 'undefined') ? config.desingShowCloseBtnAfterXSeconds : opts.desingShowCloseBtnAfterXSeconds;
    config.desingCloseBtnImage = (typeof opts.desingCloseBtnImage === 'undefined') ? config.desingCloseBtnImage : opts.desingCloseBtnImage;
    config.desingCloseBtnPosition = (typeof opts.desingCloseBtnPosition === 'undefined') ? config.desingCloseBtnPosition : opts.desingCloseBtnPosition;
    config.desingCloseBtnPositionTop = (typeof opts.desingCloseBtnPositionTop === 'undefined') ? config.desingCloseBtnPositionTop : opts.desingCloseBtnPositionTop;
    config.desingCloseBtnPositionRight = (typeof opts.desingCloseBtnPositionRight === 'undefined') ? config.desingCloseBtnPositionRight : opts.desingCloseBtnPositionRight;
    config.desingCloseBtnWidth = (typeof opts.desingCloseBtnWidth === 'undefined') ? config.desingCloseBtnWidth : opts.desingCloseBtnWidth;
    config.desingCloseBtnHeight = (typeof opts.desingCloseBtnHeight === 'undefined') ? config.desingCloseBtnHeight : opts.desingCloseBtnHeight;
    config.desingShadowSpread = (typeof opts.desingShadowSpread === 'undefined') ? config.desingShadowSpread : opts.desingShadowSpread;
    config.desingShadowBlur = (typeof opts.desingShadowBlur === 'undefined') ? config.desingShadowBlur : opts.desingShadowBlur;
    config.desingShadowColor = (typeof opts.desingShadowColor === 'undefined') ? config.desingShadowColor : opts.desingShadowColor;

    //Trigger Configuration Tab Define
}