var event=addEvent();function triggerOnLoad(){}function triggerOnScroll(){}function triggerOnClick(){}function triggerOnHover(){}function triggerExitIntent(){event(document,"mouseout",t=>{if("input"!=(t=t||window.event).target.tagName.toLowerCase()){var n=Math.max(document.documentElement.clientWidth,window.innerWidth||0);if(!(t.clientX>=n-50))if(!(t.clientY>=50))t.relatedTarget||t.toElement||showPopUp()}})}function triggerInActivity(){}