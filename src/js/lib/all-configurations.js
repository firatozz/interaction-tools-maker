var config = {
    /* General Tab Config Variables*/
    generalImageUrl = "https://raw.githubusercontent.com/firatozz/firatozz.github.io/master/assets/img/javascript.png",
    generalTargetUrl = "www.google.com.tr",
    generalTargetOpenNewTab = true,
    generalCopyCouponCode = "",
    generalAutoClose = true,
    generalAutoCloseDelay = 0,
    generalAllowPopupDismissal = false,
    generalDismissOnEsc = false,
    generalDismissOnOverlayClick = true,
    generalDismissOncontentClick = true,

    /* Desing Tab Config Variables*/
    desingOverlayVisible = true,
    desingOverlayColor = "#000",
    desingOverlayOpacity = 0.3,
    desingBorderStyle = "solid",
    desingBorderColor = "#000",
    desingBorderRadius = 10,
    desingBorderSize = 1,
    desingShowCloseBtn = true,
    desingShowCloseBtnAfterXSeconds = 0,
    desingCloseBtnImage = "closebtnimg.png",
    desingCloseBtnPosition = "topRight",
    desingCloseBtnPositionTop = "",
    desingCloseBtnPositionRight = "",
    desingCloseBtnWidth = 50,
    desingCloseBtnHeight = 50,
    desingShadowSpread = 1,
    desingShadowBlur = 12,
    desingShadowColor = "#000",

    /* Trigger Configuration Tab Config Variables*/
    triggerOnLoad = true,
    triggerOnLoadOpeningDelay = 0,
    triggerOnLoadRepetitive = false,
    triggerOnScroll = false,
    triggerOnScrollMoveAfterXPixel = 50,
    triggerOnScrollOpeningDelay = 0,
    triggerOnClick = false,
    triggerOnClickSelectors = "",
    triggerOnHover = false,
    triggerOnHoverSelectors = "",
    triggerExitIntent = false,
    triggerExitIntentOpeningDelay = 0,
    triggerExitIntentMobile = false,
    triggerInactivity = false,
    triggerInactivityExecuteAfterXSeconds = 15,

    /* Position Tab Config Variables*/
    positionFixed = true,
    positionFixedShowPosition = "center",
    positionCustom = false,
    positionTop = 0,
    positionLeft = 0,
    positionRight = 0,
    positionBottom = 0,

    /* Effects Tab Config Variables*/
    effectsOpeningAnimation = "fadeEffect",
    effectsOpeningAnimationDuration = 800,
    effectsCloseAnimation = "fadeEffect",
    effectsCloseAnimationDuration = 800,

    /* Sizing Tab Config Variables*/
    sizingWidth = 400,
    sizingHeight = 300,
    sizingAutoScalable = true,
    sizingAutoSizing = true,
    sizingMinWidth = 100,
    sizingMaxWidth = 400,
    sizingMinHeight = 75,
    sizingMaxHeight = 300,

    /* Display Configuration Tab Config Variables*/
    displayShowOnDesktop = true,
    displayShowOnMobile = true,
    displayShowOnTablet = true,
    displayCanScroll = false,
    displayShowOncePerSession = false,
    displayShowOnlyOnce = false,

    displayGeoTargeting = false,
    displayGeoTargetingInclude = "",
    displayGeoTargetingExclude = "",

    displayScheduledPopup = false,
    displayScheduledPopupBeginDate = "",
    displayScheduledPopupEndDate = "",

    displayShowAfterXPagesVisit = false,
    displayShowAfterXPagesVisitCount = 3,
    //...Other Options

    /* Cookie Management Tab Config Variables*/
    cookieUseCookie = false,
    cookieCookieExpiredDayCount = 7,
    cookieCookieName = "intToolMaker",

    //Global Variables
    bgEl,
    popupEl,
    closeBtnEl,
    shown = false,
    transformDefault = ""

}

// function allConfig(options) {
//     /* General Tab Config Variables*/
//     generalImageUrl = "https://raw.githubusercontent.com/firatozz/firatozz.github.io/master/assets/img/javascript.png";
//     generalTargetUrl = "www.google.com.tr";
//     generalTargetOpenNewTab = true;
//     generalCopyCouponCode = "";
//     generalAutoClose = false;
//     generalAutoCloseDelay = 0;
//     generalAllowPopupDismissal = false;
//     generalDismissOnEsc = false;
//     generalDismissOnOverlayClick = true;
//     generalDismissOncontentClick = true;

//     /* Desing Tab Config Variables*/
//     desingOverlayVisible = true;
//     desingOverlayColor = "#000";
//     desingOverlayOpacity = 0.3;
//     desingBorderStyle = "solid";
//     desingBorderColor = "#000";
//     desingBorderRadius = 10;
//     desingBorderSize = 1;
//     desingShowCloseBtn = true;
//     desingShowCloseBtnAfterXSeconds = 0;
//     desingCloseBtnImage = "closebtnimg.png";
//     desingCloseBtnPosition = "topRight";
//     desingCloseBtnPositionTop = "";
//     desingCloseBtnPositionRight = "";
//     desingCloseBtnWidth = 50;
//     desingCloseBtnHeight = 50;
//     desingShadowSpread = 1;
//     desingShadowBlur = 12;
//     desingShadowColor = "#000";

//     /* Trigger Configuration Tab Config Variables*/
//     triggerOnLoad = true;
//     triggerOnLoadOpeningDelay = 0;
//     triggerOnLoadRepetitive = false;
//     triggerOnScroll = false;
//     triggerOnScrollMoveAfterXPixel = 50;
//     triggerOnScrollOpeningDelay = 0;
//     triggerOnClick = false;
//     triggerOnClickSelectors = "";
//     triggerOnHover = false;
//     triggerOnHoverSelectors = "";
//     triggerExitIntent = false;
//     triggerExitIntentOpeningDelay = 0;
//     triggerExitIntentMobile = false;
//     triggerInactivity = false;
//     triggerInactivityExecuteAfterXSeconds = 15;

//     /* Position Tab Config Variables*/
//     positionFixed = true;
//     positionFixedShowPosition = "center";
//     positionCustom = false;
//     positionTop = 0;
//     positionLeft = 0;
//     positionRight = 0;
//     positionBottom = 0;

//     /* Effects Tab Config Variables*/
//     effectsOpeningAnimation = "fade";
//     effectsOpeningAnimationDuration = 800;
//     effectsCloseAnimation = "fade";
//     effectsCloseAnimationDuration = 800;

//     /* Sizing Tab Config Variables*/
//     sizingWidth = 400;
//     sizingHeight = 300;
//     sizingAutoScalable = true;
//     sizingAutoSizing = true;
//     sizingMinWidth = 100;
//     sizingMaxWidth = 400;
//     sizingMinHeight = 75;
//     sizingMaxHeight = 300;

//     /* Display Configuration Tab Config Variables*/
//     displayShowOnDesktop = true;
//     displayShowOnMobile = true;
//     displayShowOnTablet = true;
//     displayCanScroll = false;
//     displayShowOncePerSession = false;
//     displayShowOnlyOnce = false;

//     displayGeoTargeting = false;
//     displayGeoTargetingInclude = "";
//     displayGeoTargetingExclude = "";

//     displayScheduledPopup = false;
//     displayScheduledPopupBeginDate = "";
//     displayScheduledPopupEndDate = "";

//     displayShowAfterXPagesVisit = false;
//     displayShowAfterXPagesVisitCount = 3;
//     //...Other Options

//     /* Cookie Management Tab Config Variables*/
//     cookieUseCookie = false;
//     cookieCookieExpiredDayCount = 7;
//     cookieCookieName = "intToolMaker";


//     //Global Variables
//     bgEl;
//     popupEl;
//     closeBtnEl;
//     shown = false;
//     transformDefault = "";
// }