var config={generalImageUrl:generalImageUrl="https://raw.githubusercontent.com/firatozz/firatozz.github.io/master/assets/img/javascript.png",generalTargetUrl:generalTargetUrl="www.google.com.tr",generalTargetOpenNewTab:generalTargetOpenNewTab=!0,generalCopyCouponCode:generalCopyCouponCode="",generalAutoClose:generalAutoClose=!1,generalAutoCloseDelay:generalAutoCloseDelay=5,generalAllowPopupDismissal:generalAllowPopupDismissal=!1,generalDismissOnEsc:generalDismissOnEsc=!1,generalDismissOnOverlayClick:generalDismissOnOverlayClick=!0,generalDismissOncontentClick:generalDismissOncontentClick=!0,desingOverlayVisible:desingOverlayVisible=!0,desingOverlayColor:desingOverlayColor="#000",desingOverlayOpacity:desingOverlayOpacity=.3,desingBorderStyle:desingBorderStyle="solid",desingBorderColor:desingBorderColor="#000",desingBorderRadius:desingBorderRadius=0,desingBorderSize:desingBorderSize=1,desingShowCloseBtn:desingShowCloseBtn=!0,desingShowCloseBtnAfterXSeconds:desingShowCloseBtnAfterXSeconds=0,desingCloseBtnImage:desingCloseBtnImage="closebtnimg.png",desingCloseBtnPosition:desingCloseBtnPosition="topRight",desingCloseBtnPositionTop:desingCloseBtnPositionTop="",desingCloseBtnPositionRight:desingCloseBtnPositionRight="",desingCloseBtnWidth:desingCloseBtnWidth=50,desingCloseBtnHeight:desingCloseBtnHeight=50,desingShadowSpread:desingShadowSpread=5,desingShadowBlur:desingShadowBlur=5,desingShadowColor:desingShadowColor="rgba(0, 0, 0, .2)",triggerOnLoad:triggerOnLoad=!0,triggerOnLoadOpeningDelay:triggerOnLoadOpeningDelay=0,triggerOnLoadRepetitive:triggerOnLoadRepetitive=!1,triggerOnScroll:triggerOnScroll=!0,triggerOnScrollMoveAfterXPixel:triggerOnScrollMoveAfterXPixel=500,triggerOnScrollOpeningDelay:triggerOnScrollOpeningDelay=0,triggerOnClick:triggerOnClick=!1,triggerOnClickSelectors:triggerOnClickSelectors="",triggerOnHover:triggerOnHover=!1,triggerOnHoverSelectors:triggerOnHoverSelectors="",triggerExitIntent:triggerExitIntent=!1,triggerExitIntentOpeningDelay:triggerExitIntentOpeningDelay=0,triggerExitIntentMobile:triggerExitIntentMobile=!1,triggerInactivity:triggerInactivity=!1,triggerInactivityExecuteAfterXSeconds:triggerInactivityExecuteAfterXSeconds=15,positionFixed:positionFixed=!0,positionFixedShowPosition:positionFixedShowPosition="center",positionCustom:positionCustom=!1,positionTop:positionTop=0,positionLeft:positionLeft=0,positionRight:positionRight=0,positionBottom:positionBottom=0,effectsOpeningAnimation:effectsOpeningAnimation="noneEffect",effectsOpeningAnimationDuration:effectsOpeningAnimationDuration=800,effectsCloseAnimation:effectsCloseAnimation="noneEffect",effectsCloseAnimationDuration:effectsCloseAnimationDuration=800,sizingWidth:sizingWidth=400,sizingHeight:sizingHeight=300,sizingAutoScalable:sizingAutoScalable=!0,sizingAutoSizing:sizingAutoSizing=!0,sizingMinWidth:sizingMinWidth=100,sizingMaxWidth:sizingMaxWidth=400,sizingMinHeight:sizingMinHeight=75,sizingMaxHeight:sizingMaxHeight=300,displayShowOnDesktop:displayShowOnDesktop=!0,displayShowOnMobile:displayShowOnMobile=!0,displayShowOnTablet:displayShowOnTablet=!0,displayPageScrolling:displayPageScrolling=!1,displayShowOncePerSession:displayShowOncePerSession=!1,displayShowOnlyOnce:displayShowOnlyOnce=!1,displayGeoTargeting:displayGeoTargeting=!1,displayGeoTargetingInclude:displayGeoTargetingInclude="",displayGeoTargetingExclude:displayGeoTargetingExclude="",displayScheduledPopup:displayScheduledPopup=!1,displayScheduledPopupBeginDate:displayScheduledPopupBeginDate="",displayScheduledPopupEndDate:displayScheduledPopupEndDate="",displayShowAfterXPagesVisit:displayShowAfterXPagesVisit=!1,displayShowAfterXPagesVisitCount:displayShowAfterXPagesVisitCount=3,cookieUseCookie:cookieUseCookie=!1,cookieCookieExpiredDayCount:cookieCookieExpiredDayCount=7,cookieCookieName:cookieCookieName="intToolMaker",bgEl:bgEl,popupEl:popupEl,closeBtnEl:closeBtnEl,shown:shown=!1,transformDefault:transformDefault=""};function addEvent(e,o,i){e.addEventListener?e.addEventListener(o,i,!1):e.attachEvent&&e.addEventListener("on"+o,i)}function domReady(e){"interactive"===document.readyState||"complete"===document.readyState?e():addEvent(document,"DOMContentLoaded",e)}var width=(config={generalImageUrl:generalImageUrl="https://raw.githubusercontent.com/firatozz/firatozz.github.io/master/assets/img/javascript.png",generalTargetUrl:generalTargetUrl="www.google.com.tr",generalTargetOpenNewTab:generalTargetOpenNewTab=!0,generalCopyCouponCode:generalCopyCouponCode="",generalAutoClose:generalAutoClose=!1,generalAutoCloseDelay:generalAutoCloseDelay=5,generalAllowPopupDismissal:generalAllowPopupDismissal=!1,generalDismissOnEsc:generalDismissOnEsc=!1,generalDismissOnOverlayClick:generalDismissOnOverlayClick=!0,generalDismissOncontentClick:generalDismissOncontentClick=!0,desingOverlayVisible:desingOverlayVisible=!0,desingOverlayColor:desingOverlayColor="#000",desingOverlayOpacity:desingOverlayOpacity=.3,desingBorderStyle:desingBorderStyle="solid",desingBorderColor:desingBorderColor="#000",desingBorderRadius:desingBorderRadius=0,desingBorderSize:desingBorderSize=1,desingShowCloseBtn:desingShowCloseBtn=!0,desingShowCloseBtnAfterXSeconds:desingShowCloseBtnAfterXSeconds=0,desingCloseBtnImage:desingCloseBtnImage="closebtnimg.png",desingCloseBtnPosition:desingCloseBtnPosition="topRight",desingCloseBtnPositionTop:desingCloseBtnPositionTop="",desingCloseBtnPositionRight:desingCloseBtnPositionRight="",desingCloseBtnWidth:desingCloseBtnWidth=50,desingCloseBtnHeight:desingCloseBtnHeight=50,desingShadowSpread:desingShadowSpread=5,desingShadowBlur:desingShadowBlur=5,desingShadowColor:desingShadowColor="rgba(0, 0, 0, .2)",triggerOnLoad:triggerOnLoad=!0,triggerOnLoadOpeningDelay:triggerOnLoadOpeningDelay=0,triggerOnLoadRepetitive:triggerOnLoadRepetitive=!1,triggerOnScroll:triggerOnScroll=!0,triggerOnScrollMoveAfterXPixel:triggerOnScrollMoveAfterXPixel=500,triggerOnScrollOpeningDelay:triggerOnScrollOpeningDelay=0,triggerOnClick:triggerOnClick=!1,triggerOnClickSelectors:triggerOnClickSelectors="",triggerOnHover:triggerOnHover=!1,triggerOnHoverSelectors:triggerOnHoverSelectors="",triggerExitIntent:triggerExitIntent=!1,triggerExitIntentOpeningDelay:triggerExitIntentOpeningDelay=0,triggerExitIntentMobile:triggerExitIntentMobile=!1,triggerInactivity:triggerInactivity=!1,triggerInactivityExecuteAfterXSeconds:triggerInactivityExecuteAfterXSeconds=15,positionFixed:positionFixed=!0,positionFixedShowPosition:positionFixedShowPosition="center",positionCustom:positionCustom=!1,positionTop:positionTop=0,positionLeft:positionLeft=0,positionRight:positionRight=0,positionBottom:positionBottom=0,effectsOpeningAnimation:effectsOpeningAnimation="noneEffect",effectsOpeningAnimationDuration:effectsOpeningAnimationDuration=800,effectsCloseAnimation:effectsCloseAnimation="noneEffect",effectsCloseAnimationDuration:effectsCloseAnimationDuration=800,sizingWidth:sizingWidth=400,sizingHeight:sizingHeight=300,sizingAutoScalable:sizingAutoScalable=!0,sizingAutoSizing:sizingAutoSizing=!0,sizingMinWidth:sizingMinWidth=100,sizingMaxWidth:sizingMaxWidth=400,sizingMinHeight:sizingMinHeight=75,sizingMaxHeight:sizingMaxHeight=300,displayShowOnDesktop:displayShowOnDesktop=!0,displayShowOnMobile:displayShowOnMobile=!0,displayShowOnTablet:displayShowOnTablet=!0,displayPageScrolling:displayPageScrolling=!1,displayShowOncePerSession:displayShowOncePerSession=!1,displayShowOnlyOnce:displayShowOnlyOnce=!1,displayGeoTargeting:displayGeoTargeting=!1,displayGeoTargetingInclude:displayGeoTargetingInclude="",displayGeoTargetingExclude:displayGeoTargetingExclude="",displayScheduledPopup:displayScheduledPopup=!1,displayScheduledPopupBeginDate:displayScheduledPopupBeginDate="",displayScheduledPopupEndDate:displayScheduledPopupEndDate="",displayShowAfterXPagesVisit:displayShowAfterXPagesVisit=!1,displayShowAfterXPagesVisitCount:displayShowAfterXPagesVisitCount=3,cookieUseCookie:cookieUseCookie=!1,cookieCookieExpiredDayCount:cookieCookieExpiredDayCount=7,cookieCookieName:cookieCookieName="intToolMaker",bgEl:bgEl,popupEl:popupEl,closeBtnEl:closeBtnEl,shown:shown=!1,transformDefault:transformDefault=""}).sizingWidth,height=config.sizingHeight,transformDefault=config.transformDefault,popupEl=config.popupEl;function popUpAutoSize(){addEvent(document.querySelector("#imageWidth"),"input",function(){width=document.querySelector("#imageWidth").value}),addEvent(document.querySelector("#imageHeight"),"input",function(){height=document.querySelector("#imageHeight").value})}function scalePopUp(){var e=40,o=40,i=popupEl.offsetWidth,t=popupEl.offsetHeight,n=window.innerWidth,s=window.innerHeight,r={width:0,height:0},l=i/t;i>n-e&&(r.width=n-e,r.height=r.width/l,r.height>s-o&&(r.height=s-o,r.width=r.height*l)),0===r.height&&t>s-o&&(r.height=s-o,r.width=r.height*l);var d=r.width/i;(d<=0||d>1)&&(d=1),""===transformDefault&&(transformDefault=window.getComputedStyle(popupEl,null).getPropertyValue("transform")),popupEl.style.transform=transformDefault+" scale("+d+")"}function unScalePopUp(){transformDefault=""}function addEvent(e,o,i){e.addEventListener?e.addEventListener(o,i,!1):e.attachEvent&&e.addEventListener("on"+o,i)}function domReady(e){"interactive"===document.readyState||"complete"===document.readyState?e():addEvent(document,"DOMContentLoaded",e)}popUpAutoSize();width=config.sizingWidth,height=config.sizingHeight;var opacity=config.desingOverlayOpacity,overlayColor=config.desingOverlayColor,borderStyle=config.desingBorderStyle,borderRadius=config.desingBorderRadius,borderColor=config.desingBorderColor,borderSize=config.desingBorderSize,shadowSpread=config.desingShadowSpread,shadowBlur=config.desingShadowBlur,shadowColor=config.desingShadowColor,closeBtnPosition=config.desingCloseBtnPosition,clsBtnPosTop=config.desingCloseBtnPositionTop,clsBtnPosRight=config.desingCloseBtnPositionRight,clsBtnWidth=config.desingCloseBtnWidth,clsBtnHeight=config.desingCloseBtnHeight,showCloseBtnAfterXSeconds=config.desingShowCloseBtnAfterXSeconds,posLocLeft="calc(50% - "+width/2+"px)",posLocTop="calc(50% - "+width/2+"px)";function designOverlay(){new CP(document.querySelector("#overlayColor")).on("drag",function(e){document.querySelector("#overlayColor").value="#"+e,overlayColor="#"+e}),addEvent(document.getElementById("overlayOpacity"),"input",function(){document.getElementById("overlayOpacityValue").innerHTML=document.getElementById("overlayOpacity").value,opacity=document.getElementById("overlayOpacity").value},!1)}function designBorder(){addEvent(document.querySelector("#borderStyle"),"input",function(){borderStyle=document.querySelector("#borderStyle").value}),addEvent(document.querySelector("#borderRadius"),"input",function(){borderRadius=document.querySelector("#borderRadius").value}),new CP(document.querySelector("#borderColor")).on("drag",function(e){document.querySelector("#borderColor").value="#"+e,borderColor="#"+e}),addEvent(document.querySelector("#borderSize"),"blur",function(){borderSize=document.querySelector("#borderSize").value}),addEvent(document.querySelector("#borderSize"),"focus",function(){borderSize=document.querySelector("#borderSize").value,console.log(width+" "+height)})}function designShadow(){addEvent(document.querySelector("#shadowSpread"),"input",function(){shadowSpread=document.querySelector("#shadowSpread").value}),addEvent(document.querySelector("#shadowBlur"),"input",function(){shadowBlur=document.querySelector("#shadowBlur").value});var e=new CP(document.querySelector("#shadowColor"));function o(){var o=CP._HSV2RGB(e.set());o=1==this.value?"rgb("+o.join(", ")+")":"rgba("+o.join(", ")+", "+this.value.replace(/^0\./,".")+")",shadowColor=o}alpha=document.createElement("input"),alpha.type="range",alpha.min=0,alpha.max=1,alpha.step=.01,alpha.value=.5,alpha.onchange=o,alpha.oninput=o,e.self.appendChild(alpha),e.on("drag",function(e){var o=CP.HEX2RGB(e);o=1==alpha.value?"rgb("+o.join(", ")+")":"rgba("+o.join(", ")+", "+alpha.value.replace(/^0\./,".")+")",document.querySelector("#shadowColor").value=o,shadowColor=o})}function designCloseButton(){closeBtnPosition="top:5px; right:5px;",clsBtnWidth=height/50+"%",clsBtnHeight=width/50+"%",clsVisibility="visible",addEvent(document.querySelector("#clsBtnPosition"),"input",function(){clsBtnPosTop="",clsBtnPosRight="",closeBtnPosition=document.querySelector("#clsBtnPosition").value}),addEvent(document.querySelector("#clsBtnPosTop"),"input",function(){clsBtnPosTop=document.querySelector("#clsBtnPosTop").value+"px",closeBtnPosition=""}),addEvent(document.querySelector("#clsBtnPosRight"),"input",function(){clsBtnPosRight=document.querySelector("#clsBtnPosRight").value+"px; left:unset;",closeBtnPosition=""}),addEvent(document.querySelector("#clsBtnWidth"),"input",function(){clsBtnWidth=document.querySelector("#clsBtnWidth").value+"px;",console.log(clsBtnWidth)}),addEvent(document.querySelector("#clsBtnHeight"),"input",function(){clsBtnHeight=document.querySelector("#clsBtnHeight").value+"px;",console.log(clsBtnHeight)}),addEvent(document.querySelector("#showCloseBtnAfterXSeconds"),"input",function(){clsVisibility="hidden",showCloseBtnAfterXSeconds=document.querySelector("#showCloseBtnAfterXSeconds").value,console.log(showCloseBtnAfterXSeconds)})}function positionFixedFunc(){addEvent(document.querySelector("#fixedPositionTopLeft"),"click",function(){posLocLeft="1%",posLocTop="1%"}),addEvent(document.querySelector("#fixedPositionTopCenter"),"click",function(){posLocLeft="calc(50% - "+width/2+"px)",posLocTop="1%"}),addEvent(document.querySelector("#fixedPositionTopRight"),"click",function(){posLocLeft="calc(99% - "+width+"px)",posLocTop="1%"}),addEvent(document.querySelector("#fixedPositionMiddleLeft"),"click",function(){posLocLeft="1%",posLocTop="calc(50% - "+width/2+"px)"}),addEvent(document.querySelector("#fixedPositionCenter"),"click",function(){posLocLeft="calc(50% - "+width/2+"px)",posLocTop="calc(50% - "+width/2+"px)"}),addEvent(document.querySelector("#fixedPositionMiddleRight"),"click",function(){posLocLeft="calc(99% - "+width+"px)",posLocTop="calc(50% - "+width/2+"px)"}),addEvent(document.querySelector("#fixedPositionBottomLeft"),"click",function(){posLocLeft="1%",posLocTop="calc(99% - "+width+"px)"}),addEvent(document.querySelector("#fixedPositionBottomCenter"),"click",function(){posLocLeft="calc(50% - "+width/2+"px)",posLocTop="calc(99% - "+width+"px)"}),addEvent(document.querySelector("#fixedPositionBottomRight"),"click",function(){posLocLeft="calc(99% - "+width+"px)",posLocTop="calc(99% - "+width+"px)"}),addEvent(document.querySelector("#posCustomTop"),"input",function(){posLocTop=document.querySelector("#posCustomTop").value+"px;"}),addEvent(document.querySelector("#posCustomLeft"),"input",function(){posLocLeft=document.querySelector("#posCustomLeft").value+"px;"})}function positionCustom(){}function addCSS(){var e=document.createTextNode("body{overflow: hidden;}.bgEl{display: none; position: fixed; top: 0; left: 0; width: 100%; height: 100%; background-color: "+overlayColor+"; opacity:"+opacity+"; z-index: 10001;}.popupEl{display: block; position: fixed; width: "+width+"px; height: "+height+"px; z-index: 10002;box-sizing:content-box; border: "+borderSize+"px "+borderStyle+" "+borderColor+"; border-radius:"+borderRadius+"px; "+constAnimation[preAnimation][0][0]+"transition:.5s ease-in-out;visibility: hidden;transform: translateX(calc(50% - "+width/2+"px)) translateY(calc(50% - "+height/2+"px)); left:"+posLocLeft+"; top:"+posLocTop+";box-shadow: 0px 0px "+shadowBlur+"px "+shadowSpread+"px "+shadowColor+"; z-index: 10002;}.popupEl.active{"+constAnimation[preAnimation][1][0]+"; visibility: visible;}.popupElImg{width:"+width+"px; height: "+height+"px; border-radius:"+borderRadius+"px; }.closeBtnEl{position: absolute;display:inline-block;visibility:"+clsVisibility+"; width: "+clsBtnWidth+";height:"+clsBtnHeight+"; cursor: pointer; top:"+clsBtnPosTop+"; right:"+clsBtnPosRight+"; border-radius: 50%;"+closeBtnPosition+"}"),o=document.createElement("style");o.id="itmStyles",o.type="text/css",o.appendChild(e),document.head.insertBefore(o,document.getElementsByTagName("style")[0])}function setAnimation(){constAnimation={noneEffect:{0:[],1:[]},slideLeftEffect:{0:[],1:[]},slideRightEffect:{0:[],1:[]},popEffect:{0:["transform:scale(0) !important;"],1:["transform:scale(1) !important;"]},fadeEffect:{0:["opacity: 0;"],1:["opacity: 1;"]},flipEffect:{0:[],1:[]},turnEffect:{0:[],1:[]},flowEffect:{0:[],1:[]},slideUpEffect:{0:[],1:[]},slideDownEffect:{0:[],1:[]},bubble:{0:["transform:scale(0) !important;"],1:["transform:scale(1) !important;"]},blur:{0:["filter: blur(100vh);"],1:["filter: blur(0);"]}};for(var e=0;e<Object.keys(constAnimation).length;e++)Object.keys(constAnimation)[e]===config.effectsOpeningAnimation&&(preAnimation=Object.keys(constAnimation)[e],console.log(constAnimation[preAnimation][0][0]))}designOverlay(),designBorder(),designShadow(),designCloseButton(),positionFixedFunc(),setAnimation();