var event=addEvent();function triggerExitIntent(){event(document,"mouseout",t=>{if("input"!=(t=t||window.event).target.tagName.toLowerCase()){var e=Math.max(document.documentElement.clientWidth,window.innerWidth||0);if(!(t.clientX>=e-50))if(!(t.clientY>=50))t.relatedTarget||t.toElement||showPopUp()}})}