var cookie_name=config.cookieCookieName,cookieExp=config.cookieCookieExpiredDayCount,showOncePerSession=config.displayShowOncePerSession;function createCookie(e,o,i,n){var c="";if(n)c="; expires=0";else if(i){var r=new Date;r.setTime(r.getTime()+24*i*60*60*1e3),c="; expires="+r.toGMTString()}document.cookie=e+"="+o+c+"; path=/"}function getCookie(e){for(var o=e+"=",i=document.cookie.split(";"),n=0;n<i.length;n++){for(var c=i[n];" "==c.charAt(0);)c=c.substring(1,c.length);if(0===c.indexOf(o))return c.substring(o.length,c.length)}return null}function eraseCookie(e){createCookie(e,"",-1)}function checkCookie(){return cookieExp<=0?!(!showOncePerSession||"true"!=getCookie(cookie_name+"_session"))||(eraseCookie(cookie_name),!1):showOncePerSession?"true"==getCookie(cookie_name):(eraseCookie(cookie_name),!1)}createCookie(cookie_name,showOncePerSession,cookieExp,!1),createCookie(cookie_name+"_session","true",0,!0);