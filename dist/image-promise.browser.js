(function(e){"use strict";var n="data:image/gif;base64,R0lGODlhAQABAAD/ACwAAAAAAQABAAACADs=";var t={};function i(e){if(!t[e]){(function(){var n=new Image;t[e]=new Promise(function(t,i){n.addEventListener("load",function(){t(n)});n.addEventListener("error",i);n.src=e;if(n.complete){setTimeout(t,0,n)}});t[e].image=n})()}return t[e]}function o(e){if(t[e]){return t[e].then(function(i){i.src=n;delete t[e]})}}if(typeof module!=="undefined"){module.exports=i}e["default"]=i;e.unload=o})(this.loadImage=this.loadImage||{});
