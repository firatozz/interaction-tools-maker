var config=allConfig(),event=addEvent(),transformDefault=config.itmTransformDefault,popupEl=config.itmPopupEl;function scalePopUp(){var t=40,e=40,i=this.popupEl.offsetWidth,o=this.popupEl.offsetHeight,h=window.innerWidth,n=window.innerHeight,a={width:0,height:0},l=i/o;i>h-t&&(a.width=h-t,a.height=a.width/l,a.height>n-e&&(a.height=n-e,a.width=a.height*l)),0===a.height&&o>n-e&&(a.height=n-e,a.width=a.height*l);var p=a.width/i;(p<=0||p>1)&&(p=1),""===transformDefault&&(transformDefault=window.getComputedStyle(popupEl,null).getPropertyValue("transform")),popupEl.style.transform=transformDefault+" scale("+p+")"}function autoScalable(){event(window,"resize",()=>{scalePopUp()})}