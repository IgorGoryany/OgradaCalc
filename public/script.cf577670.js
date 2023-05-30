parcelRequire=function(e,r,t,n){var i,o="function"==typeof parcelRequire&&parcelRequire,u="function"==typeof require&&require;function f(t,n){if(!r[t]){if(!e[t]){var i="function"==typeof parcelRequire&&parcelRequire;if(!n&&i)return i(t,!0);if(o)return o(t,!0);if(u&&"string"==typeof t)return u(t);var c=new Error("Cannot find module '"+t+"'");throw c.code="MODULE_NOT_FOUND",c}p.resolve=function(r){return e[t][1][r]||r},p.cache={};var l=r[t]=new f.Module(t);e[t][0].call(l.exports,p,l,l.exports,this)}return r[t].exports;function p(e){return f(p.resolve(e))}}f.isParcelRequire=!0,f.Module=function(e){this.id=e,this.bundle=f,this.exports={}},f.modules=e,f.cache=r,f.parent=o,f.register=function(r,t){e[r]=[function(e,r){r.exports=t},{}]};for(var c=0;c<t.length;c++)try{f(t[c])}catch(e){i||(i=e)}if(t.length){var l=f(t[t.length-1]);"object"==typeof exports&&"undefined"!=typeof module?module.exports=l:"function"==typeof define&&define.amd?define(function(){return l}):n&&(this[n]=l)}if(parcelRequire=f,i)throw i;return f}({"MqFi":[function(require,module,exports) {
"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),exports.totalCalc=exports.total=exports.sideYInput=exports.sideXInput=exports.select=exports.result=exports.calc=void 0;var e=document.getElementById("width");exports.sideXInput=e;var t=document.getElementById("height");exports.sideYInput=t;var o=document.getElementById("calc");exports.calc=o;var r=document.getElementById("select");exports.select=r;var s=document.getElementById("result");exports.result=s;var l=document.getElementById("total");exports.total=l;var c=document.getElementById("total-calc");exports.totalCalc=c;
},{}],"SJZh":[function(require,module,exports) {
"use strict";function e(e,t,r,n,o){var s=(e-t*r-15*n)/o;return s%10>0&&s%10<=5?5-s%10+s:s%10>5?10-s%10+s:s}Object.defineProperty(exports,"__esModule",{value:!0}),exports.lengthCalc=e;
},{}],"ZD2s":[function(require,module,exports) {
"use strict";function t(t,e){return{lockCountX:t?2:1,divCountX:t?2:1,pilarCountX:t?3:2,lockCountY:e?2:1,divCountY:e?2:1,pilarCountY:e?3:2}}Object.defineProperty(exports,"__esModule",{value:!0}),exports.fenceElementsCount=t;
},{}],"i3aS":[function(require,module,exports) {
"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),exports.calcLogicTo35Fence=i;var e=require("../support/lengthCalc"),t=require("../support/fenceElementsCount"),n=require("../variables/variables");function i(i,u,o,r,s){var a=+n.sideXInput.value,l=+n.sideYInput.value,c=(0,t.fenceElementsCount)(r,s),d=c.lockCountX,p=c.divCountX,C=c.pilarCountX,v=c.lockCountY,X=c.divCountY,Y=c.pilarCountY,g=(0,e.lengthCalc)(a,i,C,d,p),b=(0,e.lengthCalc)(l,i,Y,v,X);return{sideX:g,sideY:b,gate1:a>=3400?g:a-3*i-510,gate2:a>=3400&&a-4*i-525-g,insideSideX:g-920-u,insideSideY:b-920-u,insideGate1:a>=3400?g-920-u:a-3*i-460-510,insideGate2:a>=3400&&a-4*i-460-525-g,tube:u,tubeInside:o,countX:r?2:1,countY:s?2:1}}
},{"../support/lengthCalc":"SJZh","../support/fenceElementsCount":"ZD2s","../variables/variables":"MqFi"}],"LXv9":[function(require,module,exports) {
"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),exports.calcLogicToFrameFence=n;var e=require("../support/lengthCalc"),t=require("../support/fenceElementsCount"),u=require("../variables/variables");function n(n,r,o,l){var a=+u.sideXInput.value,i=+u.sideYInput.value,c=(0,t.fenceElementsCount)(o,l),s=c.lockCountX,p=c.divCountX,C=c.pilarCountX,v=c.lockCountY,d=c.divCountY,g=c.pilarCountY,X=(0,e.lengthCalc)(a,n,C,s,p);return{sideX:X,sideY:(0,e.lengthCalc)(i,n,g,v,d),gate1:a>=3400?X:a-3*n-510,gate2:a>=3400&&a-4*n-525-X,tube:r,countX:o?2:1,countY:l?2:1}}
},{"../support/lengthCalc":"SJZh","../support/fenceElementsCount":"ZD2s","../variables/variables":"MqFi"}],"BYQO":[function(require,module,exports) {
"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),exports.calcLogicToSimpleFence=n;var e=require("../support/lengthCalc"),t=require("../support/fenceElementsCount"),i=require("../variables/variables");function n(n,u,o,r,l){var s=+i.sideXInput.value,a=+i.sideYInput.value,c=(0,t.fenceElementsCount)(r,l),d=c.lockCountX,p=c.divCountX,C=c.pilarCountX,v=c.lockCountY,X=c.divCountY,Y=c.pilarCountY,g=(0,e.lengthCalc)(s,n,C,d,p),b=(0,e.lengthCalc)(a,n,Y,v,X);return{sideX:g,sideY:b,gate1:s>=3400?g:s-3*n-510,gate2:s>=3400&&s-4*n-525-g,insideSideX:g-u,insideSideY:b-u,insideGate1:s>=3400?g-u:s-3*n-510,insideGate2:s>=3400&&s-4*n-525-g,tube:u,tubeInside:o,countX:r?2:1,countY:l?2:1}}
},{"../support/lengthCalc":"SJZh","../support/fenceElementsCount":"ZD2s","../variables/variables":"MqFi"}],"sS6G":[function(require,module,exports) {
"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),exports.calcLogicTo15And25Fence=c;var e=require("../support/lengthCalc"),t=require("../support/fenceElementsCount"),r=require("../variables/variables");function n(e,t){return i(e)||l(e,t)||o(e,t)||a()}function a(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}function o(e,t){if(e){if("string"==typeof e)return u(e,t);var r=Object.prototype.toString.call(e).slice(8,-1);return"Object"===r&&e.constructor&&(r=e.constructor.name),"Map"===r||"Set"===r?Array.from(e):"Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)?u(e,t):void 0}}function u(e,t){(null==t||t>e.length)&&(t=e.length);for(var r=0,n=new Array(t);r<t;r++)n[r]=e[r];return n}function l(e,t){var r=null==e?null:"undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null!=r){var n,a,o,u,l=[],i=!0,c=!1;try{if(o=(r=r.call(e)).next,0===t){if(Object(r)!==r)return;i=!1}else for(;!(i=(n=o.call(r)).done)&&(l.push(n.value),l.length!==t);i=!0);}catch(s){c=!0,a=s}finally{try{if(!i&&null!=r.return&&(u=r.return(),Object(u)!==u))return}finally{if(c)throw a}}return l}}function i(e){if(Array.isArray(e))return e}function c(a,o,u,l,i,c){var f=+r.sideXInput.value,d=+r.sideYInput.value,g=(0,t.fenceElementsCount)(i,c),h=g.lockCountX,v=g.divCountX,p=g.pilarCountX,b=g.lockCountY,y=g.divCountY,C=g.pilarCountY,m=f>=3400?1:0,M=(0,e.lengthCalc)(f,a,p,h,v),X=(0,e.lengthCalc)(d,a,C,b,y),Y=n(s(M,o,l),4),I=Y[0],A=Y[1],S=Y[2],j=Y[3],G=n(s(X,o,l),4),O=G[0],w=G[1],R=G[2],q=S-1;1===S&&f-510>=1600&&(q=1),1===S&&f>3e3&&!m&&(q=2);var x={sideX:M,sideY:X,gate1:!m&&f-3*a-510,gate2:!!m&&f-4*a-525-M,sideXRectangle:I,halfXRectangle:j,sideXJumper:A,sideYRectangle:O,halfYRectangle:G[3],sideYJumper:w,rectangleSectionGate1:!m&&f-3*a-510-I*q-A*(q+1),rectangleInsideGate1:!m&&500-2*o-A,rectangleSectionGate2:!!m&&f-4*a-525-M-I*S-A*(q+1),rectangleInsideGate2:!!m&&500-2*o-A,tube:o,tubeInside:u,rectangleCountX:S,rectangleCountY:R,countX:i?2:1,countY:c?2:1,gateCount:m,rectangleGateCount:q};return console.log(x),x}function s(e,t,r){var n,a=[520,530,540,550,560,570,580,590,600,610,620,630,640,650,660,670,680,690,700,710,720,730,740,750,760,770,780,790,800,810,820,830,840,850,860,870,880,890,900],o=1/0,u=2;if(e<1665){var l=f(e,t,r,a);return console.log(l),l}e>=2800&&(u=3);for(var i=0;i<a.length;i++){var c=(e-t-a[i]*u)/(u+1);if(Math.abs(c-r)<=Math.abs(o-r)&&c>=0&&(o=c,n=a[i]),c===r)return[n,Math.round(o),u]}return[n,Math.round(o),u]}function f(e,t,r,n){for(var a,o=1/0,u=0;u<n.length;u++){var l=(e-t-1.5*n[u])/2;if(Math.abs(l-r)<=Math.abs(o-r)&&l>=0&&(o=l,a=n[u]),l===r)return[a,Math.round(o),1,a/2]}return[a,Math.round(o),1,a/2]}
},{"../support/lengthCalc":"SJZh","../support/fenceElementsCount":"ZD2s","../variables/variables":"MqFi"}],"rYPN":[function(require,module,exports) {
"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),Object.defineProperty(exports,"calcLogicTo15And25Fence",{enumerable:!0,get:function(){return o.calcLogicTo15And25Fence}}),Object.defineProperty(exports,"calcLogicTo35Fence",{enumerable:!0,get:function(){return e.calcLogicTo35Fence}}),Object.defineProperty(exports,"calcLogicToFrameFence",{enumerable:!0,get:function(){return c.calcLogicToFrameFence}}),Object.defineProperty(exports,"calcLogicToSimpleFence",{enumerable:!0,get:function(){return r.calcLogicToSimpleFence}});var e=require("./calcLogicTo35Fence"),c=require("./calcLogicToFrameFence"),r=require("./calcLogicToSimpleFence"),o=require("./calcLogicTo15And25Fence");
},{"./calcLogicTo35Fence":"i3aS","./calcLogicToFrameFence":"LXv9","./calcLogicToSimpleFence":"BYQO","./calcLogicTo15And25Fence":"sS6G"}],"l5Jk":[function(require,module,exports) {
module.exports="/2000X3000.afc3f6d0.svg";
},{}],"rlf4":[function(require,module,exports) {
module.exports="/2000X4000.bfd23afb.svg";
},{}],"hW6l":[function(require,module,exports) {
module.exports="/2500X2000.17b26d24.svg";
},{}],"jxs9":[function(require,module,exports) {
module.exports="/3000X3000.92f18eaa.svg";
},{}],"Ti85":[function(require,module,exports) {
module.exports="/3300X2000.f15deece.svg";
},{}],"WQ2O":[function(require,module,exports) {
module.exports="/3300X3000.c2cd6146.svg";
},{}],"xdav":[function(require,module,exports) {
module.exports="/3300X4000.11168728.svg";
},{}],"tmqY":[function(require,module,exports) {
module.exports="/4000X2000.2396b11e.svg";
},{}],"IVUR":[function(require,module,exports) {
module.exports="/4000X3000.2a907af2.svg";
},{}],"kJV9":[function(require,module,exports) {
module.exports="/4000X4000.486f11f4.svg";
},{}],"Eesp":[function(require,module,exports) {
"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),exports.choosingImage=g;var e=require("../variables/variables"),u=p(require("../../img/2000X3000.svg")),i=p(require("../../img/2000X4000.svg")),t=p(require("../../img/2500X2000.svg")),s=p(require("../../img/3000X3000.svg")),a=p(require("../../img/3300X2000.svg")),l=p(require("../../img/3300X3000.svg")),d=p(require("../../img/3300X4000.svg")),v=p(require("../../img/4000X2000.svg")),r=p(require("../../img/4000X3000.svg")),n=p(require("../../img/4000X4000.svg"));function p(e){return e&&e.__esModule?e:{default:e}}function g(){return+e.sideXInput.value>=3400&&+e.sideYInput.value>3e3?n.default:3e3==+e.sideXInput.value&&3e3==+e.sideYInput.value?s.default:+e.sideXInput.value<=3e3&&+e.sideYInput.value>3e3?i.default:+e.sideXInput.value>3e3&&+e.sideXInput.value<3400&&+e.sideYInput.value>3e3?d.default:+e.sideXInput.value>3e3&&+e.sideXInput.value<3400&&+e.sideYInput.value<3e3?a.default:+e.sideXInput.value>3e3&&+e.sideXInput.value<3400&&3e3==+e.sideYInput.value?l.default:+e.sideXInput.value>=3400&&+e.sideYInput.value<3e3?v.default:+e.sideXInput.value>=3400&&3e3==+e.sideYInput.value?r.default:+e.sideXInput.value<3e3&&3e3==+e.sideYInput.value?u.default:t.default}
},{"../variables/variables":"MqFi","../../img/2000X3000.svg":"l5Jk","../../img/2000X4000.svg":"rlf4","../../img/2500X2000.svg":"hW6l","../../img/3000X3000.svg":"jxs9","../../img/3300X2000.svg":"Ti85","../../img/3300X3000.svg":"WQ2O","../../img/3300X4000.svg":"xdav","../../img/4000X2000.svg":"tmqY","../../img/4000X3000.svg":"IVUR","../../img/4000X4000.svg":"kJV9"}],"KNcs":[function(require,module,exports) {
"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),exports.handleCloseResult=t;var e=require("../variables/variables");function t(){this.removeEventListener("click",t),this.closest(".result").nextElementSibling.remove(),this.closest(".result").remove(),s(),result.children.length||(e.total.classList.remove("active"),e.totalCalc.classList.remove("active"),e.totalCalc.innerText="Список деталей"),e.total.classList.contains("active")&&handleCalcTotalDetailsList()}function s(){for(var e=document.getElementsByClassName("number"),t=0;t<e.length;t++)e[t].innerText="".concat(e.length-t,".")}
},{"../variables/variables":"MqFi"}],"HkQl":[function(require,module,exports) {
"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),exports.printTotalDetailsList=n;var t=require("../variables/variables");function n(n,a,s,i,c){t.total.innerHTML='\n\t<div class="total">\n\t\t\t\t<div class="karkas">\n\t\t\t\t\t<h3>КАРКАС</h3>\n\t\t\t\t\t<div class="total__frame">\n\t\t\t\t\t\t<div class="total__box">\n\t\t\t\t\t\t\t<h2 class="total__title">25&nbsp;X&nbsp;25</h2>\n\t\t\t\t\t\t\t'.concat(n.map(function(t){return"<div>".concat(t[0],"&nbsp;X&nbsp;").concat(t[1],"</div>")}).join(" "),'\n\t\t\t\t\t\t</div>\n\t\t\t\t\t\t<div class="total__box">\n\t\t\t\t\t\t\t<h2 class="total__title">20&nbsp;X&nbsp;20</h2>\n\t\t\t\t\t\t\t').concat(a.map(function(t){return"<div>".concat(t[0],"&nbsp;X&nbsp").concat(t[1],"</div>")}).join(" "),'\n\t\t\t\t\t\t</div>\n\t\t\t\t\t</div>\n\t\t\t\t</div>\n\t\t\t\t<div class="pattern">\n\t\t\t\t\t<h3>РИСУНОК</h3>\n\t\t\t\t\t<div class="total__pattern">\n\t\t\t\t\t\t<div class="total__box">\n\t\t\t\t\t\t\t<h2 class="total__title">25&nbsp;X&nbsp;25</h2>\n\t\t\t\t\t\t\t').concat(s.map(function(t){return"<div>".concat(t[0],"&nbsp;X&nbsp").concat(t[1],"</div>")}).join(" "),'\n\t\t\t\t\t\t</div>\n\t\t\t\t\t\t<div class="total__box">\n\t\t\t\t\t\t\t<h2 class="total__title">20&nbsp;X&nbsp;20</h2>\n\t\t\t\t\t\t\t').concat(i.map(function(t){return"<div>".concat(t[0],"&nbsp;X&nbsp").concat(t[1],"</div>")}).join(" "),'\n\t\t\t\t\t\t</div>\n\t\t\t\t\t\t<div class="total__box">\n\t\t\t\t\t\t\t<h2 class="total__title">15&nbsp;X&nbsp;15</h2>\n\t\t\t\t\t\t\t').concat(c.map(function(t){return"<div>".concat(t[0],"&nbsp;X&nbsp").concat(t[1],"</div>")}).join(" "),"\n\t\t\t\t\t\t</div>\n\t\t\t\t\t</div>\n\t\t\t\t</div>\n\t\t\t</div>")}
},{"../variables/variables":"MqFi"}],"J6Av":[function(require,module,exports) {
"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),exports.handleCalcTotalDetailsList=t;var e=require("../print/printTotalDetailsList");function t(){for(var t=document.getElementsByClassName("frame25"),n=document.getElementsByClassName("frame20"),s=document.getElementsByClassName("pattern25"),r=document.getElementsByClassName("pattern20"),a=document.getElementsByClassName("pattern15"),i=[],l=[],p=[],u=[],f=[],d=[],o=[],m=[],x=[],h=[],v=0;v<t.length;v++){var O=t[v].innerText.split(" X ");-1===i.indexOf(+O[0])?(i.push(+O[0]),l.push([+O[0],+O[1]])):l[i.indexOf(+O[0])][1]+=+O[1]}for(var g=0;g<n.length;g++){var c=n[g].innerText.split(" X ");-1===p.indexOf(+c[0])?(p.push(+c[0]),u.push([+c[0],+c[1]])):u[p.indexOf(+c[0])][1]+=+c[1]}for(var T=0;T<s.length;T++){var y=s[T].innerText.split(" X ");-1===f.indexOf(+y[0])?(f.push(+y[0]),d.push([+y[0],+y[1]])):d[f.indexOf(+y[0])][1]+=+y[1]}for(var C=0;C<r.length;C++){var B=r[C].innerText.split(" X ");-1===o.indexOf(+B[0])?(o.push(+B[0]),m.push([+B[0],+B[1]])):m[o.indexOf(+B[0])][1]+=+B[1]}for(var E=0;E<a.length;E++){var N=a[E].innerText.split(" X ");-1===x.indexOf(+N[0])?(x.push(+N[0]),h.push([+N[0],+N[1]])):h[x.indexOf(+N[0])][1]+=+N[1]}(0,e.printTotalDetailsList)(l,u,d,m,h)}
},{"../print/printTotalDetailsList":"HkQl"}],"cQ8X":[function(require,module,exports) {
"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),exports.sizesSupp=a;var e=require("../variables/variables"),s=t(require("../../img/2000X4000.svg"));function t(e){return e&&e.__esModule?e:{default:e}}function a(t){var a='<span class="top">'.concat(e.sideXInput.value,'</span>\n\t\t\t\t\t <span class="left">').concat(e.sideYInput.value,"</span>"),n=!1;return t===s.default&&(a='<span class="top">'.concat(e.sideYInput.value,'</span>\n\t\t\t\t\t<span class="left">').concat(e.sideXInput.value,"</span>"),n=!0),{sizes:a,isReverse:n}}
},{"../variables/variables":"MqFi","../../img/2000X4000.svg":"rlf4"}],"SQiA":[function(require,module,exports) {
"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),exports.print35Fence=s;var t=require("../support/choosingImage"),n=require("../support/handleCloseResult"),c=require("../variables/variables"),a=require("../calc/handleCalcTotalDetailsList"),e=require("../support/sizesSupp");function s(s){var i=s.sideX,o=s.sideY,l=s.gate1,d=s.gate2,r=s.insideSideX,v=s.insideSideY,u=s.insideGate1,p=s.insideGate2,m=s.tube,X=s.tubeInside,h=s.countX,g=s.countY,b=document.getElementsByClassName("result")?document.getElementsByClassName("result").length+1:1,f=(0,t.choosingImage)(),C=(0,e.sizesSupp)(f),q=1;+c.sideXInput.value>=3400&&(q=3),c.result.insertAdjacentHTML("afterbegin",'\n\t<div class="result">\n\t\t<span class="number">'.concat(b,'.</span>\n\t\t<span class="close"></span>\n\t\t<div class="scheme">\n\t\t\t').concat(C,'\n\t\t\t<img alt="Ограда" src="').concat(f,'" />\n\t\t\t<span class="model">№&nbsp;').concat(c.select.value,'</span>\n\t\t</div>\n\t\n\t\t<div class="values">\n\t\t\t<div class="outside">\n\t\t\t\t<h2>').concat(m," X ").concat(m,'</h2>\n\t\t\t\t<div class="frame').concat(m,'">').concat(o," X ").concat(4*g,'</div>\n\t\t\t\t<div class="frame').concat(m,'">').concat(i," X ").concat(2*h,'</div>\n\t\t\t\t<div class="frame').concat(m,'">').concat(l," X 2</div>\n\t\t\t\t").concat(d?'<div class="frame'.concat(m,'"> ').concat(d," X 2</div>"):"",'\n\t\t\t</div>\n\n\t\t\t<div class="inside">\n\t\t\t\t<h2>').concat(X," X ").concat(X,'</h2>\n\t\t\t\t<div class="pattern').concat(X,'">').concat(v," X ").concat(4*g,'</div>\n\t\t\t\t<div class="pattern').concat(X,'">').concat(r," X ").concat(2*h,'</div>\n\t\t\t\t<div class="pattern').concat(X,'">').concat(u,' X 2</div>\n\t\t\t\t<div class="pattern').concat(X,'">460 X ').concat(2*h+4*g+q,"</div>\n\t\t\t\t").concat(p?'<div class="pattern'.concat(X,'">').concat(p," X 2</div>"):"","\n\t\t\t\t</div>\n\t\t</div>\n\t\t\n\t</div>\n\t<hr />\n\t")),document.getElementsByClassName("close")[0].addEventListener("click",n.handleCloseResult),c.total.classList.contains("active")&&(0,a.handleCalcTotalDetailsList)()}
},{"../support/choosingImage":"Eesp","../support/handleCloseResult":"KNcs","../variables/variables":"MqFi","../calc/handleCalcTotalDetailsList":"J6Av","../support/sizesSupp":"cQ8X"}],"JELR":[function(require,module,exports) {
"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),exports.print5Fence=c;var t=require("../support/choosingImage"),e=require("../support/handleCloseResult"),s=require("../variables/variables"),n=require("../calc/handleCalcTotalDetailsList"),a=require("../support/sizesSupp");function c(c){var i=c.insideSideX,l=c.insideSideY,o=c.insideGate1,d=c.insideGate2,r=c.tubeInside,u=c.countX,v=c.countY,p=document.getElementsByClassName("result")?document.getElementsByClassName("result").length+1:1,m=(0,t.choosingImage)(),h=(0,a.sizesSupp)(m);s.result.insertAdjacentHTML("afterbegin",'\n\t<div class="result">\n\t\t<span class="number">'.concat(p,'.</span>\n\t\t<span class="close"></span>\n\t\t<div class="scheme">\n\t\t\t').concat(h,'\n\t\t\t<img alt="Ограда" src="').concat(m,'" />\n\t\t\t<span class="model">№&nbsp').concat(s.select.value,'</span>\n\t\t</div>\n\t\n\t\t<div class="values">\n\t\t\t\n\t\t\t<div class="inside">\n\t\t\t\t<h2>').concat(r," X ").concat(r,'</h2>\n\t\t\t\t<div class="frame').concat(r,'">').concat(l," X ").concat(4*v,'</div>\n\t\t\t\t<div class="frame').concat(r,'">').concat(i," X ").concat(2*u,'</div>\n\t\t\t\t<div class="frame').concat(r,'">').concat(o," X 2</div>\n\t\t\t\t").concat(d?'<div class="pattern'.concat(r,'">').concat(d," X 2</div>"):"","\n\t\t\t\t</div>\n\t\t</div>\n\t\t\n\t</div>\n\t<hr />\n\t")),document.getElementsByClassName("close")[0].addEventListener("click",e.handleCloseResult),s.total.classList.contains("active")&&(0,n.handleCalcTotalDetailsList)()}
},{"../support/choosingImage":"Eesp","../support/handleCloseResult":"KNcs","../variables/variables":"MqFi","../calc/handleCalcTotalDetailsList":"J6Av","../support/sizesSupp":"cQ8X"}],"nk0U":[function(require,module,exports) {
"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),exports.printFrameFence=c;var t=require("../support/choosingImage"),e=require("../support/handleCloseResult"),s=require("../variables/variables"),a=require("../calc/handleCalcTotalDetailsList"),n=require("../support/sizesSupp");function c(c){var l=c.sideX,i=c.sideY,o=c.gate1,r=c.gate2,d=c.tube,u=c.countX,v=c.countY,m=document.getElementsByClassName("result")?document.getElementsByClassName("result").length+1:1,p=(0,t.choosingImage)(),g=(0,n.sizesSupp)(p);s.result.insertAdjacentHTML("afterbegin",'\n\t<div class="result">\n\t\t<span class="number">'.concat(m,'.</span>\n\t\t<span class="close"></span>\n\t\t<div class="scheme">\n\t\t\t').concat(g,'\n\t\t\t<img alt="Ограда" src="').concat(p,'" />\n\t\t\t<span class="model">№&nbsp;').concat(s.select.value,'</span>\n\t\t</div>\n\t\n\t\t<div class="values">\n\t\t\t<div class="inside">\n\t\t\t\t<h2>').concat(d," X ").concat(d,'</h2>\n\t\t\t\t<div class="frame').concat(d,'">').concat(i," X ").concat(4*v,'</div>\n\t\t\t\t<div class="frame').concat(d,'">').concat(l," X ").concat(2*u,'</div>\n\t\t\t\t<div class="frame').concat(d,'">').concat(o," X 2</div>\n\t\t\t\t").concat(r?'<div class="frame'.concat(d,'"> ').concat(r," X 2</div>"):"","\n\t\t\t</div>\n\t\t</div>\n\t</div>\n\t<hr />\n\t"));var h=document.getElementsByClassName("close");console.log(document.getElementsByClassName("result")[0]),h[0].addEventListener("click",e.handleCloseResult),s.total.classList.contains("active")&&(0,a.handleCalcTotalDetailsList)()}
},{"../support/choosingImage":"Eesp","../support/handleCloseResult":"KNcs","../variables/variables":"MqFi","../calc/handleCalcTotalDetailsList":"J6Av","../support/sizesSupp":"cQ8X"}],"vQHQ":[function(require,module,exports) {
"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),exports.printSimpleFence=s;var t=require("../support/choosingImage"),n=require("../support/handleCloseResult"),c=require("../variables/variables"),e=require("../calc/handleCalcTotalDetailsList"),a=require("../support/sizesSupp");function s(s){var i=s.sideX,l=s.sideY,o=s.gate1,d=s.gate2,r=s.insideSideX,v=s.insideSideY,u=s.insideGate1,p=s.insideGate2,m=s.tube,h=s.tubeInside,X=s.countX,g=s.countY,b=document.getElementsByClassName("result")?document.getElementsByClassName("result").length+1:1,f=(0,t.choosingImage)(),C=(0,a.sizesSupp)(f);c.result.insertAdjacentHTML("afterbegin",'\n\t<div class="result">\n\t\t<span class="number">'.concat(b,'.</span>\n\t\t<span class="close"></span>\n\t\t<div class="scheme">\n\t\t\t').concat(C,'\n\t\t\t<img alt="Ограда" src="').concat(f,'" />\n\t\t\t<span class="model">№&nbsp;').concat(c.select.value,'</span>\n\t\t</div>\n\t\n\t\t<div class="values">\n\t\t\t<div class="outside">\n\t\t\t\t<h2>').concat(m," X ").concat(m,'</h2>\n\t\t\t\t<div class="frame').concat(m,'">').concat(l," X ").concat(4*g,'</div>\n\t\t\t\t<div class="frame').concat(m,'">').concat(i," X ").concat(2*X,'</div>\n\t\t\t\t<div class="frame').concat(m,'">').concat(o," X 2</div>\n\t\t\t\t").concat(d?'<div class="frame'.concat(m,'"> ').concat(d," X 2</div>"):"",'\n\t\t\t</div>\n\n\t\t\t<div class="inside">\n\t\t\t\t<h2>').concat(h," X ").concat(h,'</h2>\n\t\t\t\t<div class="pattern').concat(h,'">').concat(v," X ").concat(2*g,'</div>\n\t\t\t\t<div class="pattern').concat(h,'">').concat(r," X ").concat(X,'</div>\n\t\t\t\t<div class="pattern').concat(h,'">').concat(u," X 1</div>\n\t\t\t\t").concat(p?'<div class="pattern'.concat(h,'">').concat(p," X 2</div>"):"","\n\t\t\t</div>\n\t\t</div>\n\t\t\n\t</div>\n\t<hr />\n\t")),document.getElementsByClassName("close")[0].addEventListener("click",n.handleCloseResult),c.total.classList.contains("active")&&(0,e.handleCalcTotalDetailsList)()}
},{"../support/choosingImage":"Eesp","../support/handleCloseResult":"KNcs","../variables/variables":"MqFi","../calc/handleCalcTotalDetailsList":"J6Av","../support/sizesSupp":"cQ8X"}],"kGR4":[function(require,module,exports) {
"use strict";function e(){return console.log(document.getElementById("leftFence").children[0].classList.contains("active")),document.getElementById("leftFence").children[0].classList.contains("active")}Object.defineProperty(exports,"__esModule",{value:!0}),exports.fenceSideChoose=e;
},{}],"nPZC":[function(require,module,exports) {
"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),exports.print15And25Fence=i;var t=require("../support/choosingImage"),e=require("../support/handleCloseResult"),n=require("../variables/variables"),c=require("../calc/handleCalcTotalDetailsList"),a=require("../support/sizesSupp"),s=require("../support/fenceSideChoose");function i(i){var l=i.sideX,o=i.sideY,d=i.gate1,r=i.gate2,v=i.sideXRectangle,u=i.halfXRectangle,p=i.sideXJumper,g=i.sideYRectangle,X=i.halfYRectangle,m=i.sideYJumper,h=i.tube,C=i.tubeInside,f=i.countX,b=i.countY,R=i.gateCount,q=i.rectangleCountX,S=i.rectangleCountY,Y=i.rectangleSectionGate1,G=i.rectangleInsideGate1,I=i.rectangleSectionGate2,L=i.rectangleInsideGate2,y=i.rectangleGateCount,E=document.getElementsByClassName("result")?document.getElementsByClassName("result").length+1:1,z=(0,t.choosingImage)(),B=(0,a.sizesSupp)(z),N=B.sizes,T=B.isReverse;n.result.insertAdjacentHTML("afterbegin",'\n\t<div class="result">\n\t\t<span class="number">'.concat(E,'.</span>\n\t\t<span class="close"></span>\n\t\t<div class="scheme">\n\t\t\t').concat(N,'\n\t\t\t<img alt="Ограда" src="').concat(z,'" \n\t\t\tclass="').concat((0,s.fenceSideChoose)()?T?"reverseX":"reverse":"",'" \n\t\t\t/>\n\t\t\t<span class="model">№&nbsp;').concat(n.select.value,'</span>\n\t\t</div>\n\t\t<div class="values">\n\t\t\t<div class="outside">\n\t\t\t\t<h2>').concat(h," X ").concat(h,'</h2>\n\t\t\t\t<div class="frame').concat(h,'">').concat(o," X ").concat(4*b,'</div>\n\t\t\t\t<div class="frame').concat(h,'">').concat(l," X ").concat(2*(f+R),"</div>\n\t\t\t").concat(d?'<div class="frame'.concat(h,'"> ').concat(d," X 2</div>"):"","\n\t\t\t\t").concat(r?'<div class="frame'.concat(h,'"> ').concat(r," X 2</div>"):"",'\n\t\t\t</div>\n\t\t\t<div class="inside">\n\t\t\t\t<h2>').concat(C," X ").concat(C,'</h2>\n\t\t\t\t\n\t\t\t\t<div class="pattern25">').concat(g," X ").concat(4*S*b,"</div>\n\t\t\t\t\n\t\t\t\t").concat(X?'<div class="pattern25 lol">'.concat(X," X 8</div>"):"",'\n\t\t\t\t\n\t\t\t\t<div class="pattern25">').concat(m," X ").concat((S+1)*b*2,'</div>\n\t\t\t\t<br>\n\t\t\t\t<div class="pattern25">').concat(v," X ").concat(2*q*(f+R)+2*y,"</div>\n\t\t\t\t\n\t\t\t\t").concat(u?'<div class="pattern25 lol">'.concat(u," X ").concat(4*q*(2*R),"</div>"):"",' \n\t\t\t\t\n\t\t\t\t<div class="pattern25">').concat(p," X ").concat((q+1)*(f+R)+y+2,"</div> \n\t\t\t\t<br>\n\t\t\t\t").concat(Y?'<div class="gateRectangle">'.concat(Y," X 2</div>\n\t\t\t\t<div>").concat(G," X 2</div>"):'<div class="gateRectangle">'.concat(I," X 2</div>\n\t\t\t\t<div>").concat(L," X 2</div>"),"\n\t\t\t</div>\n\t\t</div>\n\t</div>\n\t<hr>\n\t")),document.getElementsByClassName("close")[0].addEventListener("click",e.handleCloseResult),n.total.classList.contains("active")&&(0,c.handleCalcTotalDetailsList)()}
},{"../support/choosingImage":"Eesp","../support/handleCloseResult":"KNcs","../variables/variables":"MqFi","../calc/handleCalcTotalDetailsList":"J6Av","../support/sizesSupp":"cQ8X","../support/fenceSideChoose":"kGR4"}],"XK47":[function(require,module,exports) {
"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),Object.defineProperty(exports,"print15And25Fence",{enumerable:!0,get:function(){return i.print15And25Fence}}),Object.defineProperty(exports,"print35Fence",{enumerable:!0,get:function(){return e.print35Fence}}),Object.defineProperty(exports,"print5Fence",{enumerable:!0,get:function(){return r.print5Fence}}),Object.defineProperty(exports,"printFrameFence",{enumerable:!0,get:function(){return n.printFrameFence}}),Object.defineProperty(exports,"printSimpleFence",{enumerable:!0,get:function(){return t.printSimpleFence}});var e=require("./print35Fence"),r=require("./print5Fence"),n=require("./printFrameFence"),t=require("./printSimpleFence"),i=require("./print15And25Fence");
},{"./print35Fence":"SQiA","./print5Fence":"JELR","./printFrameFence":"nk0U","./printSimpleFence":"vQHQ","./print15And25Fence":"nPZC"}],"h4Dy":[function(require,module,exports) {
"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),exports.distributionCalcFence=n;var e=require("../calc/entryCalcLogic"),c=require("../print/entryPrint");function n(n,i,r){n>=1&&n<=4&&3!==n?(0,c.printSimpleFence)((0,e.calcLogicToSimpleFence)(50,25,25,i,r)):3!==n?5!==n?6!==n&&10!==n?14!==n?11!==n?15!==n?21!==n&&22!==n?20!==n&&23!==n&&24!==n?25!==n?32!==n&&34!==n?35!==n?n>=30&&n<=40&&(0,c.printFrameFence)((0,e.calcLogicToSimpleFence)(25,20,15,i,r)):(0,c.print35Fence)((0,e.calcLogicTo35Fence)(25,20,15,i,r)):(0,c.printSimpleFence)((0,e.calcLogicToSimpleFence)(25,20,15,i,r)):(0,c.print15And25Fence)((0,e.calcLogicTo15And25Fence)(30,20,20,240,i,r)):(0,c.printFrameFence)((0,e.calcLogicToFrameFence)(30,20,i,r)):(0,c.printSimpleFence)((0,e.calcLogicToSimpleFence)(30,20,15,i,r)):(0,c.print15And25Fence)((0,e.calcLogicTo15And25Fence)(40,25,25,240,i,r)):(0,c.printSimpleFence)((0,e.calcLogicToSimpleFence)(40,25,20,i,r)):(0,c.printSimpleFence)((0,e.calcLogicToSimpleFence)(40,25,25,i,r)):(0,c.printFrameFence)((0,e.calcLogicToFrameFence)(40,25,i,r)):(0,c.print5Fence)((0,e.calcLogicToSimpleFence)(40,20,20,i,r)):(0,c.printFrameFence)((0,e.calcLogicToFrameFence)(50,25,i,r))}
},{"../calc/entryCalcLogic":"rYPN","../print/entryPrint":"XK47"}],"LuOj":[function(require,module,exports) {
"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),exports.distributionLogic=t;var e=require("./distributionCalcFence"),i=require("../variables/variables");function t(t,c){t>3e3&&c>3e3?(0,e.distributionCalcFence)(+i.select.value,!0,!0):t>3e3?(0,e.distributionCalcFence)(+i.select.value,!0):c>3e3?(0,e.distributionCalcFence)(+i.select.value,!1,!0):(0,e.distributionCalcFence)(+i.select.value)}
},{"./distributionCalcFence":"h4Dy","../variables/variables":"MqFi"}],"L4bL":[function(require,module,exports) {
"use strict";var e=require("./variables/variables"),t=require("./distribution/distributionLogic"),i=require("./calc/handleCalcTotalDetailsList");!function(){function a(t){(isNaN(t.target.value+t.key)||t.target.value+t.key>1e4)&&t.preventDefault(),"Enter"===t.key&&e.sideXInput.value&&e.sideYInput.value&&n()}function n(){if(!e.select.value)return alert("Выбери модель");+e.sideXInput.value&&+e.sideYInput.value?(+e.sideXInput.value<10&&(e.sideXInput.value*=1e3),+e.sideYInput.value<10&&(e.sideYInput.value*=1e3),(0,t.distributionLogic)(+e.sideXInput.value,+e.sideYInput.value)):alert("Ты не все ввел!")}e.sideXInput.value=3500,e.sideYInput.value=2e3,document.getElementById("date").innerText=String((new Date).getFullYear()),e.calc.addEventListener("click",n),e.sideXInput.addEventListener("keypress",a),e.sideYInput.addEventListener("keypress",a),e.totalCalc.addEventListener("click",function(t){t.target.classList.toggle("active"),e.total.classList.toggle("active"),t.target.classList.contains("active")?t.target.innerText="Свернуть":t.target.innerText="Список деталей";e.total.classList.contains("active")&&(0,i.handleCalcTotalDetailsList)()}),document.getElementById("leftFence").addEventListener("click",function(e){e.target.children[0].classList.toggle("active")})}();
},{"./variables/variables":"MqFi","./distribution/distributionLogic":"LuOj","./calc/handleCalcTotalDetailsList":"J6Av"}]},{},["L4bL"], null)
//# sourceMappingURL=/script.cf577670.js.map