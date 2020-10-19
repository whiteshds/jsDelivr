(function(document,window,$){"use strict";if(!$.escapeSelector){$.escapeSelector=function(sel){var rcssescape=/([\0-\x1f\x7f]|^-?\d)|^-$|[^\x80-\uFFFF\w-]/g;var fcssescape=function(ch,asCodePoint){if(asCodePoint){if(ch==="\0"){return "\uFFFD";}
return ch.slice(0,-1)+"\\"+ch.charCodeAt(ch.length-1).toString(16)+" ";}
return "\\"+ch;};return(sel+"").replace(rcssescape,fcssescape);};}
function parseUrl(){var hash=window.location.hash.substr(1),rez=hash.split("-"),index=rez.length>1&&/^\+?\d+$/.test(rez[rez.length-1])?parseInt(rez.pop(-1),10)||1:1,gallery=rez.join("-");return{hash:hash,index:index<1?1:index,gallery:gallery};}
function triggerFromUrl(url){var $el;if(url.gallery!==""){$el=$("[data-fancybox='"+$.escapeSelector(url.gallery)+"']").eq(url.index-1).trigger("click.fb-start");}}
function getGalleryID(instance){var opts,ret;if(!instance){return false;}
opts=instance.current?instance.current.opts:instance.opts;ret=opts.hash||(opts.$orig?opts.$orig.data("fancybox"):"");return ret===""?false:ret;}
$(function(){if($.fancybox.defaults.hash===false){return;}
$(document).on({"onInit.fb":function(e,instance){var url,gallery;if(instance.group[instance.currIndex].opts.hash===false){return;}
url=parseUrl();gallery=getGalleryID(instance);if(gallery&&url.gallery&&gallery==url.gallery){instance.currIndex=url.index-1;}},"beforeShow.fb":function(e,instance,current,firstRun){var gallery;if(!current||current.opts.hash===false){return;}
gallery=getGalleryID(instance);if(!gallery){return;}
instance.currentHash=gallery+(instance.group.length>1?"-"+(current.index+1):"");if(window.location.hash==="#"+instance.currentHash){return;}
if(!instance.origHash){instance.origHash=window.location.hash;}
if(instance.hashTimer){clearTimeout(instance.hashTimer);}
instance.hashTimer=setTimeout(function(){if("replaceState"in window.history){window.history[firstRun?"pushState":"replaceState"]({},document.title,window.location.pathname+window.location.search+"#"+instance.currentHash);if(firstRun){instance.hasCreatedHistory=true;}}else{window.location.hash=instance.currentHash;}
instance.hashTimer=null;},300);},"beforeClose.fb":function(e,instance,current){var gallery;if(current.opts.hash===false){return;}
gallery=getGalleryID(instance);if(instance.currentHash&&instance.hasCreatedHistory){window.history.back();}else if(instance.currentHash){if("replaceState"in window.history){window.history.replaceState({},document.title,window.location.pathname+window.location.search+(instance.origHash||""));}else{window.location.hash=instance.origHash;}}
instance.currentHash=null;clearTimeout(instance.hashTimer);}});$(window).on("hashchange.fb",function(){var url=parseUrl(),fb;$.each($(".fancybox-container").get().reverse(),function(index,value){var tmp=$(value).data("FancyBox");if(tmp.currentHash){fb=tmp;return false;}});if(fb){if(fb.currentHash&&fb.currentHash!==url.gallery+"-"+url.index&&!(url.index===1&&fb.currentHash==url.gallery)){fb.currentHash=null;fb.close();}}else if(url.gallery!==""){triggerFromUrl(url);}});setTimeout(function(){if(!$.fancybox.getInstance()){triggerFromUrl(parseUrl());}},50);});})(document,window,window.jQuery||jQuery);