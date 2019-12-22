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
    config.triggerOnLoad = (typeof opts.triggerOnLoad === 'undefined') ? config.triggerOnLoad : opts.triggerOnLoad;
    config.triggerOnLoadOpeningDelay = (typeof opts.triggerOnLoadOpeningDelay === 'undefined') ? config.triggerOnLoadOpeningDelay : opts.triggerOnLoadOpeningDelay;
    config.triggerOnLoadRepetitive = (typeof opts.triggerOnLoadRepetitive === 'undefined') ? config.triggerOnLoadRepetitive : opts.triggerOnLoadRepetitive;
    config.triggerOnScroll = (typeof opts.triggerOnScroll === 'undefined') ? config.triggerOnScroll : opts.triggerOnScroll;
    config.triggerOnScrollMoveAfterXPixel = (typeof opts.triggerOnScrollMoveAfterXPixel === 'undefined') ? config.triggerOnScrollMoveAfterXPixel : opts.triggerOnScrollMoveAfterXPixel;
    config.triggerOnScrollOpeningDelay = (typeof opts.triggerOnScrollOpeningDelay === 'undefined') ? config.triggerOnScrollOpeningDelay : opts.triggerOnScrollOpeningDelay;
    config.triggerOnClick = (typeof opts.triggerOnClick === 'undefined') ? config.triggerOnClick : opts.triggerOnClick;
    config.triggerOnClickSelectors = (typeof opts.triggerOnClickSelectors === 'undefined') ? config.triggerOnClickSelectors : opts.triggerOnClickSelectors;
    config.triggerOnHover = (typeof opts.triggerOnHover === 'undefined') ? config.triggerOnHover : opts.triggerOnHover;
    config.triggerOnHoverSelectors = (typeof opts.triggerOnHoverSelectors === 'undefined') ? config.triggerOnHoverSelectors : opts.triggerOnHoverSelectors;
    config.triggerExitIntent = (typeof opts.triggerExitIntent === 'undefined') ? config.triggerExitIntent : opts.triggerExitIntent;
    config.triggerExitIntentOpeningDelay = (typeof opts.triggerExitIntentOpeningDelay === 'undefined') ? config.triggerExitIntentOpeningDelay : opts.triggerExitIntentOpeningDelay;
    config.triggerExitIntentMobile = (typeof opts.triggerExitIntentMobile === 'undefined') ? config.triggerExitIntentMobile : opts.triggerExitIntentMobile;
    config.triggerInactivity = (typeof opts.triggerInactivity === 'undefined') ? config.triggerInactivity : opts.triggerInactivity;
    config.triggerInactivityExecuteAfterXSeconds = (typeof opts.triggerInactivityExecuteAfterXSeconds === 'undefined') ? config.triggerInactivityExecuteAfterXSeconds : opts.triggerInactivityExecuteAfterXSeconds;

    //Position Configuration Tab Define
    config.positionFixed = (typeof opts.positionFixed === 'undefined') ? config.positionFixed : opts.positionFixed;
    config.positionFixedShowPosition = (typeof opts.positionFixedShowPosition === 'undefined') ? config.positionFixedShowPosition : opts.positionFixedShowPosition;
    config.positionCustom = (typeof opts.positionCustom === 'undefined') ? config.positionCustom : opts.positionCustom;
    config.positionTop = (typeof opts.positionTop === 'undefined') ? config.positionTop : opts.positionTop;
    config.positionLeft = (typeof opts.positionLeft === 'undefined') ? config.positionLeft : opts.positionLeft;

    //Effect Configuration Tab Define
    config.effectsOpeningAnimation = (typeof opts.effectsOpeningAnimation === 'undefined') ? config.effectsOpeningAnimation : opts.effectsOpeningAnimation;
    config.effectsOpeningAnimationDuration = (typeof opts.effectsOpeningAnimationDuration === 'undefined') ? config.effectsOpeningAnimationDuration : opts.effectsOpeningAnimationDuration;
    config.effectsCloseAnimation = (typeof opts.effectsCloseAnimation === 'undefined') ? config.effectsCloseAnimation : opts.effectsCloseAnimation;
    config.effectsCloseAnimationDuration = (typeof opts.effectsCloseAnimationDuration === 'undefined') ? config.effectsCloseAnimationDuration : opts.effectsCloseAnimationDuration;

    //Sizing Configuration Tab Define
    config.sizingWidth = (typeof opts.sizingWidth === 'undefined') ? config.sizingWidth : opts.sizingWidth;
    config.sizingHeight = (typeof opts.sizingHeight === 'undefined') ? config.sizingHeight : opts.sizingHeight;
    config.sizingAutoScalable = (typeof opts.sizingAutoScalable === 'undefined') ? config.sizingAutoScalable : opts.sizingAutoScalable;

    //Display Configuration Tab Define
    config.displayShowOnDesktop = (typeof opts.displayShowOnDesktop === 'undefined') ? config.displayShowOnDesktop : opts.displayShowOnDesktop;
    config.displayShowOnMobile = (typeof opts.displayShowOnMobile === 'undefined') ? config.displayShowOnMobile : opts.displayShowOnMobile;
    config.displayShowOnTablet = (typeof opts.displayShowOnTablet === 'undefined') ? config.displayShowOnTablet : opts.displayShowOnTablet;
    config.displayPageScrolling = (typeof opts.displayPageScrolling === 'undefined') ? config.displayPageScrolling : opts.displayPageScrolling;
    config.displayShowOncePerSession = (typeof opts.displayShowOncePerSession === 'undefined') ? config.displayShowOncePerSession : opts.displayShowOncePerSession;
    config.displayShowOnlyOnce = (typeof opts.displayShowOnlyOnce === 'undefined') ? config.displayShowOnlyOnce : opts.displayShowOnlyOnce;

    config.displayGeoTargeting = (typeof opts.displayGeoTargeting === 'undefined') ? config.displayGeoTargeting : opts.displayGeoTargeting;
    config.displayGeoTargetingInclude = (typeof opts.displayGeoTargetingInclude === 'undefined') ? config.displayGeoTargetingInclude : opts.displayGeoTargetingInclude;
    config.displayGeoTargetingExclude = (typeof opts.displayGeoTargetingExclude === 'undefined') ? config.displayGeoTargetingExclude : opts.displayGeoTargetingExclude;

    config.displayScheduledPopup = (typeof opts.displayScheduledPopup === 'undefined') ? config.displayScheduledPopup : opts.displayScheduledPopup;
    config.displayScheduledPopupBeginDate = (typeof opts.displayScheduledPopupBeginDate === 'undefined') ? config.displayScheduledPopupBeginDate : opts.displayScheduledPopupBeginDate;
    config.displayScheduledPopupEndDate = (typeof opts.displayScheduledPopupEndDate === 'undefined') ? config.displayScheduledPopupEndDate : opts.displayScheduledPopupEndDate;

    config.displayShowAfterXPagesVisit = (typeof opts.displayShowAfterXPagesVisit === 'undefined') ? config.displayShowAfterXPagesVisit : opts.displayShowAfterXPagesVisit;
    config.displayShowAfterXPagesVisitCount = (typeof opts.displayShowAfterXPagesVisitCount === 'undefined') ? config.displayShowAfterXPagesVisitCount : opts.displayShowAfterXPagesVisitCount;
    //... Other Options

    //Cookie Configuration Tab Define
    config.cookieUseCookie = (typeof opts.cookieUseCookie === 'undefined') ? config.cookieUseCookie : opts.cookieUseCookie;
    config.cookieCookieExpiredDayCount = (typeof opts.cookieCookieExpiredDayCount === 'undefined') ? config.cookieCookieExpiredDayCount : opts.cookieCookieExpiredDayCount;
    config.cookieCookieName = (typeof opts.cookieCookieName === 'undefined') ? config.cookieCookieName : opts.cookieCookieName;
}