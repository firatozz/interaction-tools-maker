var config={generalImageUrl:generalImageUrl="https://raw.githubusercontent.com/firatozz/firatozz.github.io/master/assets/img/javascript.png",generalTargetUrl:generalTargetUrl="www.google.com.tr",generalTargetOpenNewTab:generalTargetOpenNewTab=!0,generalCopyCouponCode:generalCopyCouponCode="",generalAutoClose:generalAutoClose=!1,generalAutoCloseDelay:generalAutoCloseDelay=0,generalAllowPopupDismissal:generalAllowPopupDismissal=!1,generalDismissOnEsc:generalDismissOnEsc=!1,generalDismissOnOverlayClick:generalDismissOnOverlayClick=!0,generalDismissOncontentClick:generalDismissOncontentClick=!0,desingOverlayVisible:desingOverlayVisible=!0,desingOverlayColor:desingOverlayColor="#000",desingOverlayOpacity:desingOverlayOpacity=.3,desingBorderStyle:desingBorderStyle="solid",desingBorderColor:desingBorderColor="#000",desingBorderRadius:desingBorderRadius=10,desingBorderSize:desingBorderSize=1,desingShowCloseBtn:desingShowCloseBtn=!0,desingShowCloseBtnAfterXSeconds:desingShowCloseBtnAfterXSeconds=0,desingCloseBtnImage:desingCloseBtnImage="closebtnimg.png",desingCloseBtnPosition:desingCloseBtnPosition="topRight",desingCloseBtnPositionTop:desingCloseBtnPositionTop="",desingCloseBtnPositionRight:desingCloseBtnPositionRight="",desingCloseBtnWidth:desingCloseBtnWidth=50,desingCloseBtnHeight:desingCloseBtnHeight=50,desingShadowSpread:desingShadowSpread=1,desingShadowBlur:desingShadowBlur=12,desingShadowColor:desingShadowColor="#000",triggerOnLoad:triggerOnLoad=!0,triggerOnLoadOpeningDelay:triggerOnLoadOpeningDelay=0,triggerOnLoadRepetitive:triggerOnLoadRepetitive=!1,triggerOnScroll:triggerOnScroll=!1,triggerOnScrollMoveAfterXPixel:triggerOnScrollMoveAfterXPixel=50,triggerOnScrollOpeningDelay:triggerOnScrollOpeningDelay=0,triggerOnClick:triggerOnClick=!1,triggerOnClickSelectors:triggerOnClickSelectors="",triggerOnHover:triggerOnHover=!1,triggerOnHoverSelectors:triggerOnHoverSelectors="",triggerExitIntent:triggerExitIntent=!1,triggerExitIntentOpeningDelay:triggerExitIntentOpeningDelay=0,triggerExitIntentMobile:triggerExitIntentMobile=!1,triggerInactivity:triggerInactivity=!1,triggerInactivityExecuteAfterXSeconds:triggerInactivityExecuteAfterXSeconds=15,positionFixed:positionFixed=!0,positionFixedShowPosition:positionFixedShowPosition="center",positionCustom:positionCustom=!1,positionTop:positionTop=0,positionLeft:positionLeft=0,positionRight:positionRight=0,positionBottom:positionBottom=0,effectsOpeningAnimation:effectsOpeningAnimation="fade",effectsOpeningAnimationDuration:effectsOpeningAnimationDuration=800,effectsCloseAnimation:effectsCloseAnimation="fade",effectsCloseAnimationDuration:effectsCloseAnimationDuration=800,sizingWidth:sizingWidth=400,sizingHeight:sizingHeight=300,sizingAutoScalable:sizingAutoScalable=!0,sizingAutoSizing:sizingAutoSizing=!0,sizingMinWidth:sizingMinWidth=100,sizingMaxWidth:sizingMaxWidth=400,sizingMinHeight:sizingMinHeight=75,sizingMaxHeight:sizingMaxHeight=300,displayShowOnDesktop:displayShowOnDesktop=!0,displayShowOnMobile:displayShowOnMobile=!0,displayShowOnTablet:displayShowOnTablet=!0,displayCanScroll:displayCanScroll=!1,displayShowOncePerSession:displayShowOncePerSession=!1,displayShowOnlyOnce:displayShowOnlyOnce=!1,displayGeoTargeting:displayGeoTargeting=!1,displayGeoTargetingInclude:displayGeoTargetingInclude="",displayGeoTargetingExclude:displayGeoTargetingExclude="",displayScheduledPopup:displayScheduledPopup=!1,displayScheduledPopupBeginDate:displayScheduledPopupBeginDate="",displayScheduledPopupEndDate:displayScheduledPopupEndDate="",displayShowAfterXPagesVisit:displayShowAfterXPagesVisit=!1,displayShowAfterXPagesVisitCount:displayShowAfterXPagesVisitCount=3,cookieUseCookie:cookieUseCookie=!1,cookieCookieExpiredDayCount:cookieCookieExpiredDayCount=7,cookieCookieName:cookieCookieName="intToolMaker",bgEl:bgEl,popupEl:popupEl,closeBtnEl:closeBtnEl,shown:shown=!1,transformDefault:transformDefault=""},width=config.sizingWidth,height=config.sizingHeight;function addCSS(){var e=document.createTextNode(".bgEl{display: none; position: fixed; top: 0; left: 0; width: 100%; height: 100%; background-color: #000; opacity: 0.4; z-index: 10001;}.popupEl{display: block; position: fixed; width: "+width+"px; height: "+height+"px; z-index: 10002;"+constAnimation[preAnimation][0][0]+"transition:.5s ease-in-out;visibility: hidden;transform: translateX(calc(50% - "+width/2+"px)) translateY(calc(50% - "+height/2+"px)); left:calc(50% - "+width/2+"px); top:calc(50% - "+height/2+"px);box-shadow: 0px 0px 5px 0 rgba(0,0,0,0.5); z-index: 10002;}.popupEl.active{"+constAnimation[preAnimation][1][0]+"; visibility: visible;}.itmImage{width:"+width+"px; height: "+height+"px;}.closeBtnEl{position: absolute;display:inline-block;width: "+height/50+"%;height:"+width/50+"%; top: 2%;right: 4%;cursor: pointer; border-radius: 50%;}"),i=document.createElement("style");i.type="text/css",i.appendChild(e),document.head.insertBefore(i,document.getElementsByTagName("style")[0])}function setAnimation(){constAnimation={noneEffect:{0:[],1:[]},slideLeftEffect:{0:[],1:[]},slideRightEffect:{0:[],1:[]},popEffect:{0:[],1:[]},fade:{0:["opacity: 0;"],1:["opacity: 1;"]},flipEffect:{0:[],1:[]},turnEffect:{0:[],1:[]},flowEffect:{0:[],1:[]},slideUpEffect:{0:[],1:[]},slideDownEffect:{0:[],1:[]},bubble:{0:["transform:scale(0) !important;"],1:["transform:scale(1) !important;"]},blur:{0:["filter: blur(100vh);"],1:["filter: blur(0);"]}};for(var e=0;e<Object.keys(constAnimation).length;e++)Object.keys(constAnimation)[e]===config.effectsOpeningAnimation&&(preAnimation=Object.keys(constAnimation)[e])}setAnimation();