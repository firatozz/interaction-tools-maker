 import "./all-configurations"

 var config = allConfig();
 var width = config.sizingWidth;
 var height = config.sizingHeight;

 function addCSS() {

     var css = document.createTextNode(
         ".itmBgEl{display: none; position: fixed; top: 0; left: 0; width: 100%; height: 100%; background-color: #000; opacity: 0.4; z-index: 10001;}" +
         ".itmPopupEl{display: block; position: fixed; width: " + width + "px; height: " + height + "px; z-index: 10002;" +
         constAnimation[preAnimation][0][0] +
         "transition:.5s ease-in-out;visibility: hidden;transform: translateX(calc(50% - " + width / 2 + "px)) translateY(calc(50% - " + height / 2 + "px)); left:calc(50% - " + width / 2 + "px); top:calc(50% - " + height / 2 + "px);box-shadow: 0px 0px 5px 0 rgba(0,0,0,0.5); z-index: 10002;}" +
         ".itmPopupEl.active{" + constAnimation[preAnimation][1][0] + "; visibility: visible;}" +
         ".itmImage{width:" + width + "px; height: " + height + "px;}" +
         ".itmCloseEl{position: absolute;display:inline-block;width: " + height / 50 + "%;height:" + width / 50 + "%; top: 2%;right: 4%;cursor: pointer; border-radius: 50%;}" +
         this.css
     );


     // Create the style element
     var style = document.createElement("style");
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
         if (Object.keys(constAnimation)[i] === this.animation) {
             preAnimation = (Object.keys(constAnimation)[i]);
         }
     }
 }
 setAnimation();