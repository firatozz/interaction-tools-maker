 import './all-configurations.js'
 import './event-listener.js'

 var width = config.sizingWidth;
 var height = config.sizingHeight;
 var opacity = config.desingOverlayOpacity;
 var overlayColor = config.desingOverlayColor;
 var borderStyle = config.desingBorderStyle;
 var borderRadius = config.desingBorderRadius;
 var borderColor = config.desingBorderColor;
 var borderSize = config.desingBorderSize;
 var desingShadowSpread = config.desingShadowSpread;
 var desingShadowBlur = config.desingShadowBlur;
 var desingShadowColor = config.desingShadowColor;


 // Design > Overlay
 function designOverlay() {
     var picker = new CP(document.querySelector('#overlayColor'));
     picker.on("drag", function (color) {
         document.querySelector('#overlayColor').value = '#' + color;
         overlayColor = '#' + color;
     });

     addEvent(document.getElementById("overlayOpacity"), "input", function () {
         document.getElementById("overlayOpacityValue").innerHTML = document.getElementById("overlayOpacity").value;
         opacity = document.getElementById("overlayOpacity").value;
     }, false);

 }
 designOverlay();

 // Design > Border
 function designBorder() {
     addEvent(document.querySelector("#borderStyle"), "input", function () {
         borderStyle = document.querySelector("#borderStyle").value;
     });

     addEvent(document.querySelector("#borderRadius"), "input", function () {
         borderRadius = document.querySelector("#borderRadius").value;
     });

     var picker = new CP(document.querySelector('#borderColor'));
     picker.on("drag", function (color) {
         document.querySelector('#borderColor').value = '#' + color;
         borderColor = '#' + color;
     });

     addEvent(document.querySelector("#borderSize"), "blur", function () {
         borderSize = document.querySelector("#borderSize").value;
     });

     addEvent(document.querySelector("#borderSize"), "focus", function () {
         borderSize = document.querySelector("#borderSize").value;
         console.log(width + " " + height);
     });

 }
 designBorder();

 // Design > CloseButton
 function designCloseButton() {}

 // Design > Shadow
 function designShadow() {
     addEvent(document.querySelector("#shadowSpread"), "input", function () {
         desingShadowSpread = document.querySelector("#shadowSpread").value;
     });

     addEvent(document.querySelector("#shadowBlur"), "input", function () {
         desingShadowBlur = document.querySelector("#shadowBlur").value;
     });

     var picker = new CP(document.querySelector('#shadowColor'));
     alpha = document.createElement('input');

     function change() {
         var v = CP._HSV2RGB(picker.set());
         v = this.value == 1 ? 'rgb(' + v.join(', ') + ')' : 'rgba(' + v.join(', ') + ', ' + this.value.replace(/^0\./, '.') + ')';
         desingShadowColor = v;
     }
     alpha.type = 'range';
     alpha.min = 0;
     alpha.max = 1;
     alpha.step = .01;
     alpha.value = .5; // opaque
     alpha.onchange = change;
     alpha.oninput = change;
     picker.self.appendChild(alpha);
     picker.on("drag", function (color) {
         var v = CP.HEX2RGB(color);
         v = alpha.value == 1 ? 'rgb(' + v.join(', ') + ')' : 'rgba(' + v.join(', ') + ', ' + alpha.value.replace(/^0\./, '.') + ')';
         document.querySelector('#shadowColor').value = v;
         desingShadowColor = v;
     });
 }
 designShadow();


 // Position > Fixed
 function positionFixed() {}

 // Position > Custom
 function positionCustom() {}

 function addCSS() {

     var css = document.createTextNode(
         ".bgEl{display: none; position: fixed; top: 0; left: 0; width: 100%; height: 100%; background-color: " + overlayColor + "; opacity:" + opacity + "; z-index: 10001;}" +
         ".popupEl{display: block; position: fixed; width: " + width + "px; height: " + height + "px; z-index: 10002;box-sizing:content-box; border: " + borderSize + "px " + borderStyle + " " + borderColor + "; border-radius:" + borderRadius + "px; " +
         constAnimation[preAnimation][0][0] +
         "transition:.5s ease-in-out;visibility: hidden;transform: translateX(calc(50% - " + width / 2 + "px)) translateY(calc(50% - " + height / 2 + "px)); left:calc(50% - " + width / 2 + "px); top:calc(50% - " + height / 2 + "px);box-shadow: 0px 0px " + desingShadowBlur + "px " + desingShadowSpread + "px " + desingShadowColor + "; z-index: 10002;}" +
         ".popupEl.active{" + constAnimation[preAnimation][1][0] + "; visibility: visible;}" +
         ".popupElImg{width:" + width + "px; height: " + height + "px; border-radius:" + borderRadius + "px; }" +
         ".closeBtnEl{position: absolute;display:inline-block;width: " + height / 50 + "%;height:" + width / 50 + "%; top: 2%;right: 4%;cursor: pointer; border-radius: 50%;}"
     );

     // Create the style element
     var style = document.createElement("style");
     style.id = "itmStyles";
     style.type = "text/css";
     style.appendChild(css);
     // Insert it before other existing style
     // elements so user CSS isn't overwritten
     document.head.insertBefore(style, document.getElementsByTagName("style")[0]);
 }


 function setAnimation() {
     //Defined Constant Animations
     constAnimation = {
         noneEffect: {
             0: [],
             1: []
         },
         slideLeftEffect: {
             0: [],
             1: []
         },
         slideRightEffect: {
             0: [],
             1: []
         },
         popEffect: {
             0: [],
             1: []
         },
         fadeEffect: {
             0: ["opacity: 0;"],
             1: ["opacity: 1;"]
         },
         flipEffect: {
             0: [],
             1: []
         },
         turnEffect: {
             0: [],
             1: []
         },
         flowEffect: {
             0: [],
             1: []
         },
         slideUpEffect: {
             0: [],
             1: []
         },
         slideDownEffect: {
             0: [],
             1: []
         },
         bubble: {
             0: ["transform:scale(0) !important;"],
             1: ["transform:scale(1) !important;"]
         },
         blur: {
             0: ["filter: blur(100vh);"],
             1: ["filter: blur(0);"]
         }
     }
     for (var i = 0; i < Object.keys(constAnimation).length; i++) {
         if (Object.keys(constAnimation)[i] === config.effectsOpeningAnimation) {
             preAnimation = (Object.keys(constAnimation)[i]);
         }
     }
 }
 setAnimation();