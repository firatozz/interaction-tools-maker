function allConfig(options) {
    /* General Tab Config Variables*/
    this.generalImageUrl = 'https://raw.githubusercontent.com/firatozz/firatozz.github.io/master/assets/img/javascript.png';
    this.generalTargetUrl = "www.google.com.tr";
    this.generalTargetOpenNewTab = true;
    this.generalCopyCouponCode = "";
    this.generalAutoClose = false;
    this.generalAutoCloseDelay = 0;
    this.generalAllowPopupDismissal = false;
    this.generalDismissOnEsc = false;
    this.generalDismissOnOverlayClick = true;
    this.generalDismissOncontentClick = true;

    /* Desing Tab Config Variables*/
    this.desingOverlayVisible = true;
    this.desingOverlayColor = "#000";
    this.desingOverlayOpacity = 0.3;
    this.desingBorderStyle = "solid";
    this.desingBorderColor = "#000";
    this.desingBorderRadius = 10;
    this.desingBorderSize = 1;
    this.desingShowCloseBtn = true;
    this.desingShowCloseBtnAfterXSeconds = 0;
    this.desingCloseBtnImage = "closebtnimg.png";
    this.desingCloseBtnPosition = "topRight";
    this.desingCloseBtnPositionTop = "";
    this.desingCloseBtnPositionRight = "";
    this.desingCloseBtnWidth = 50;
    this.desingCloseBtnHeight = 50;
    this.desingShadowSpread = 1;
    this.desingShadowBlur = 12;
    this.desingShadowColor = "#000";

    /* Trigger Configuration Tab Config Variables*/
    this.triggerOnLoad = true;
    this.triggerOnLoadOpeningDelay = 0;
    this.triggerOnLoadRepetitive = false;
    this.triggerOnScroll = false;
    this.triggerOnScrollMoveAfterXPixel = 50;
    this.triggerOnScrollOpeningDelay = 0;
    this.triggerOnClick = false;
    this.triggerOnClickSelectors = "";
    this.triggerOnHover = false;
    this.triggerOnHoverSelectors = "";
    this.triggerExitIntent = false;
    this.triggerExitIntentOpeningDelay = 0;
    this.triggerExitIntentMobile = false;
    this.triggerInactivity = false;
    this.triggerInactivityExecuteAfterXSeconds = 15;

    /* Position Tab Config Variables*/
    this.positionFixed = true;
    this.positionFixedShowPosition = "center";
    this.positionCustom = false;
    this.positionTop = 0;
    this.positionLeft = 0;
    this.positionRight = 0;
    this.positionBottom = 0;

    /* Effects Tab Config Variables*/
    this.effectsOpeningAnimation = "fade";
    this.effectsOpeningAnimationDuration = 800;
    this.effectsCloseAnimation = "fade";
    this.effectsCloseAnimationDuration = 800;

    /* Sizing Tab Config Variables*/
    this.sizingWidth = 400;
    this.sizingHeight = 300;
    this.sizingAutoScalable = true;
    this.sizingAutoSizing = true;
    this.sizingMinWidth = 100;
    this.sizingMaxWidth = 400;
    this.sizingMinHeight = 75;
    this.sizingMaxHeight = 300;

    /* Display Configuration Tab Config Variables*/
    this.displayShowOnDesktop = true;
    this.displayShowOnMobile = true;
    this.displayShowOnTablet = true;
    this.displayCanScroll = false;
    this.displayShowOncePerSession = false;
    this.displayShowOnlyOnce = false;

    this.displayGeoTargeting = false;
    this.displayGeoTargetingInclude = "";
    this.displayGeoTargetingExclude = "";

    this.displayScheduledPopup = false;
    this.displayScheduledPopupBeginDate = "";
    this.displayScheduledPopupEndDate = "";

    this.displayShowAfterXPagesVisit = false;
    this.displayShowAfterXPagesVisitCount = 3;
    //...Other Options

    /* Cookie Management Tab Config Variables*/
    this.cookieUseCookie = false;
    this.cookieCookieExpiredDayCount = 7;
    this.cookieCookieName = "intToolMaker";


    //Global Variables
    this.bgEl;
    this.popupEl;
    this.closeBtnEl;
    this.shown = false;
    this.transformDefault = "";
}