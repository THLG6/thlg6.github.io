// build time:Thu Oct 26 2023 13:07:07 GMT+0800 (China Standard Time)
$(document).ready(function(){var rpath=window.location.href.replace(window.location.origin,"");var timeout;$(window).on("scroll",function(){clearTimeout(timeout);timeout=setTimeout(function(){Cookies.set("scroll-cookie",$(window).scrollTop()+"|"+rpath,{expires:365,path:""})},250)});if(Cookies.get("scroll-cookie")!==undefined){var cvalues=Cookies.get("scroll-cookie").split("|");if(cvalues[1]==rpath){$(window).scrollTop(cvalues[0])}}});
//rebuild by neat 