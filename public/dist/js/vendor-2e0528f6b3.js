/*!
 * Materialize v0.96.1 (http://materializecss.com)
 * Copyright 2014-2015 Materialize
 * MIT License (https://raw.githubusercontent.com/Dogfalo/materialize/master/LICENSE)
 */
/*
 * jQuery Easing v1.3 - http://gsgd.co.uk/sandbox/jquery/easing/
 *
 * Uses the built in easing capabilities added In jQuery 1.1
 * to offer multiple easing options
 *
 * TERMS OF USE - jQuery Easing
 *
 * Open source under the BSD License.
 *
 * Copyright © 2008 George McGinley Smith
 * All rights reserved.
 *
 * Redistribution and use in source and binary forms, with or without modification,
 * are permitted provided that the following conditions are met:
 *
 * Redistributions of source code must retain the above copyright notice, this list of
 * conditions and the following disclaimer.
 * Redistributions in binary form must reproduce the above copyright notice, this list
 * of conditions and the following disclaimer in the documentation and/or other materials
 * provided with the distribution.
 *
 * Neither the name of the author nor the names of contributors may be used to endorse
 * or promote products derived from this software without specific prior written permission.
 *
 * THIS SOFTWARE IS PROVIDED BY THE COPYRIGHT HOLDERS AND CONTRIBUTORS "AS IS" AND ANY
 * EXPRESS OR IMPLIED WARRANTIES, INCLUDING, BUT NOT LIMITED TO, THE IMPLIED WARRANTIES OF
 * MERCHANTABILITY AND FITNESS FOR A PARTICULAR PURPOSE ARE DISCLAIMED. IN NO EVENT SHALL THE
 *  COPYRIGHT OWNER OR CONTRIBUTORS BE LIABLE FOR ANY DIRECT, INDIRECT, INCIDENTAL, SPECIAL,
 *  EXEMPLARY, OR CONSEQUENTIAL DAMAGES (INCLUDING, BUT NOT LIMITED TO, PROCUREMENT OF SUBSTITUTE
 *  GOODS OR SERVICES; LOSS OF USE, DATA, OR PROFITS; OR BUSINESS INTERRUPTION) HOWEVER CAUSED
 * AND ON ANY THEORY OF LIABILITY, WHETHER IN CONTRACT, STRICT LIABILITY, OR TORT (INCLUDING
 *  NEGLIGENCE OR OTHERWISE) ARISING IN ANY WAY OUT OF THE USE OF THIS SOFTWARE, EVEN IF ADVISED
 * OF THE POSSIBILITY OF SUCH DAMAGE.
 *
*/

// t: current time, b: begInnIng value, c: change In value, d: duration
jQuery.easing['jswing'] = jQuery.easing['swing'];

jQuery.extend( jQuery.easing,
{
	def: 'easeOutQuad',
	swing: function (x, t, b, c, d) {
		//alert(jQuery.easing.default);
		return jQuery.easing[jQuery.easing.def](x, t, b, c, d);
	},
	easeInQuad: function (x, t, b, c, d) {
		return c*(t/=d)*t + b;
	},
	easeOutQuad: function (x, t, b, c, d) {
		return -c *(t/=d)*(t-2) + b;
	},
	easeInOutQuad: function (x, t, b, c, d) {
		if ((t/=d/2) < 1) return c/2*t*t + b;
		return -c/2 * ((--t)*(t-2) - 1) + b;
	},
	easeInCubic: function (x, t, b, c, d) {
		return c*(t/=d)*t*t + b;
	},
	easeOutCubic: function (x, t, b, c, d) {
		return c*((t=t/d-1)*t*t + 1) + b;
	},
	easeInOutCubic: function (x, t, b, c, d) {
		if ((t/=d/2) < 1) return c/2*t*t*t + b;
		return c/2*((t-=2)*t*t + 2) + b;
	},
	easeInQuart: function (x, t, b, c, d) {
		return c*(t/=d)*t*t*t + b;
	},
	easeOutQuart: function (x, t, b, c, d) {
		return -c * ((t=t/d-1)*t*t*t - 1) + b;
	},
	easeInOutQuart: function (x, t, b, c, d) {
		if ((t/=d/2) < 1) return c/2*t*t*t*t + b;
		return -c/2 * ((t-=2)*t*t*t - 2) + b;
	},
	easeInQuint: function (x, t, b, c, d) {
		return c*(t/=d)*t*t*t*t + b;
	},
	easeOutQuint: function (x, t, b, c, d) {
		return c*((t=t/d-1)*t*t*t*t + 1) + b;
	},
	easeInOutQuint: function (x, t, b, c, d) {
		if ((t/=d/2) < 1) return c/2*t*t*t*t*t + b;
		return c/2*((t-=2)*t*t*t*t + 2) + b;
	},
	easeInSine: function (x, t, b, c, d) {
		return -c * Math.cos(t/d * (Math.PI/2)) + c + b;
	},
	easeOutSine: function (x, t, b, c, d) {
		return c * Math.sin(t/d * (Math.PI/2)) + b;
	},
	easeInOutSine: function (x, t, b, c, d) {
		return -c/2 * (Math.cos(Math.PI*t/d) - 1) + b;
	},
	easeInExpo: function (x, t, b, c, d) {
		return (t==0) ? b : c * Math.pow(2, 10 * (t/d - 1)) + b;
	},
	easeOutExpo: function (x, t, b, c, d) {
		return (t==d) ? b+c : c * (-Math.pow(2, -10 * t/d) + 1) + b;
	},
	easeInOutExpo: function (x, t, b, c, d) {
		if (t==0) return b;
		if (t==d) return b+c;
		if ((t/=d/2) < 1) return c/2 * Math.pow(2, 10 * (t - 1)) + b;
		return c/2 * (-Math.pow(2, -10 * --t) + 2) + b;
	},
	easeInCirc: function (x, t, b, c, d) {
		return -c * (Math.sqrt(1 - (t/=d)*t) - 1) + b;
	},
	easeOutCirc: function (x, t, b, c, d) {
		return c * Math.sqrt(1 - (t=t/d-1)*t) + b;
	},
	easeInOutCirc: function (x, t, b, c, d) {
		if ((t/=d/2) < 1) return -c/2 * (Math.sqrt(1 - t*t) - 1) + b;
		return c/2 * (Math.sqrt(1 - (t-=2)*t) + 1) + b;
	},
	easeInElastic: function (x, t, b, c, d) {
		var s=1.70158;var p=0;var a=c;
		if (t==0) return b;  if ((t/=d)==1) return b+c;  if (!p) p=d*.3;
		if (a < Math.abs(c)) { a=c; var s=p/4; }
		else var s = p/(2*Math.PI) * Math.asin (c/a);
		return -(a*Math.pow(2,10*(t-=1)) * Math.sin( (t*d-s)*(2*Math.PI)/p )) + b;
	},
	easeOutElastic: function (x, t, b, c, d) {
		var s=1.70158;var p=0;var a=c;
		if (t==0) return b;  if ((t/=d)==1) return b+c;  if (!p) p=d*.3;
		if (a < Math.abs(c)) { a=c; var s=p/4; }
		else var s = p/(2*Math.PI) * Math.asin (c/a);
		return a*Math.pow(2,-10*t) * Math.sin( (t*d-s)*(2*Math.PI)/p ) + c + b;
	},
	easeInOutElastic: function (x, t, b, c, d) {
		var s=1.70158;var p=0;var a=c;
		if (t==0) return b;  if ((t/=d/2)==2) return b+c;  if (!p) p=d*(.3*1.5);
		if (a < Math.abs(c)) { a=c; var s=p/4; }
		else var s = p/(2*Math.PI) * Math.asin (c/a);
		if (t < 1) return -.5*(a*Math.pow(2,10*(t-=1)) * Math.sin( (t*d-s)*(2*Math.PI)/p )) + b;
		return a*Math.pow(2,-10*(t-=1)) * Math.sin( (t*d-s)*(2*Math.PI)/p )*.5 + c + b;
	},
	easeInBack: function (x, t, b, c, d, s) {
		if (s == undefined) s = 1.70158;
		return c*(t/=d)*t*((s+1)*t - s) + b;
	},
	easeOutBack: function (x, t, b, c, d, s) {
		if (s == undefined) s = 1.70158;
		return c*((t=t/d-1)*t*((s+1)*t + s) + 1) + b;
	},
	easeInOutBack: function (x, t, b, c, d, s) {
		if (s == undefined) s = 1.70158;
		if ((t/=d/2) < 1) return c/2*(t*t*(((s*=(1.525))+1)*t - s)) + b;
		return c/2*((t-=2)*t*(((s*=(1.525))+1)*t + s) + 2) + b;
	},
	easeInBounce: function (x, t, b, c, d) {
		return c - jQuery.easing.easeOutBounce (x, d-t, 0, c, d) + b;
	},
	easeOutBounce: function (x, t, b, c, d) {
		if ((t/=d) < (1/2.75)) {
			return c*(7.5625*t*t) + b;
		} else if (t < (2/2.75)) {
			return c*(7.5625*(t-=(1.5/2.75))*t + .75) + b;
		} else if (t < (2.5/2.75)) {
			return c*(7.5625*(t-=(2.25/2.75))*t + .9375) + b;
		} else {
			return c*(7.5625*(t-=(2.625/2.75))*t + .984375) + b;
		}
	},
	easeInOutBounce: function (x, t, b, c, d) {
		if (t < d/2) return jQuery.easing.easeInBounce (x, t*2, 0, c, d) * .5 + b;
		return jQuery.easing.easeOutBounce (x, t*2-d, 0, c, d) * .5 + c*.5 + b;
	}
});

/*
 *
 * TERMS OF USE - EASING EQUATIONS
 *
 * Open source under the BSD License.
 *
 * Copyright © 2001 Robert Penner
 * All rights reserved.
 *
 * Redistribution and use in source and binary forms, with or without modification,
 * are permitted provided that the following conditions are met:
 *
 * Redistributions of source code must retain the above copyright notice, this list of
 * conditions and the following disclaimer.
 * Redistributions in binary form must reproduce the above copyright notice, this list
 * of conditions and the following disclaimer in the documentation and/or other materials
 * provided with the distribution.
 *
 * Neither the name of the author nor the names of contributors may be used to endorse
 * or promote products derived from this software without specific prior written permission.
 *
 * THIS SOFTWARE IS PROVIDED BY THE COPYRIGHT HOLDERS AND CONTRIBUTORS "AS IS" AND ANY
 * EXPRESS OR IMPLIED WARRANTIES, INCLUDING, BUT NOT LIMITED TO, THE IMPLIED WARRANTIES OF
 * MERCHANTABILITY AND FITNESS FOR A PARTICULAR PURPOSE ARE DISCLAIMED. IN NO EVENT SHALL THE
 *  COPYRIGHT OWNER OR CONTRIBUTORS BE LIABLE FOR ANY DIRECT, INDIRECT, INCIDENTAL, SPECIAL,
 *  EXEMPLARY, OR CONSEQUENTIAL DAMAGES (INCLUDING, BUT NOT LIMITED TO, PROCUREMENT OF SUBSTITUTE
 *  GOODS OR SERVICES; LOSS OF USE, DATA, OR PROFITS; OR BUSINESS INTERRUPTION) HOWEVER CAUSED
 * AND ON ANY THEORY OF LIABILITY, WHETHER IN CONTRACT, STRICT LIABILITY, OR TORT (INCLUDING
 *  NEGLIGENCE OR OTHERWISE) ARISING IN ANY WAY OUT OF THE USE OF THIS SOFTWARE, EVEN IF ADVISED
 * OF THE POSSIBILITY OF SUCH DAMAGE.
 *
 */;    // Custom Easing
    jQuery.extend( jQuery.easing,
    {
      easeInOutMaterial: function (x, t, b, c, d) {
        if ((t/=d/2) < 1) return c/2*t*t + b;
        return c/4*((t-=2)*t*t + 2) + b;
      }
    });

;/*! VelocityJS.org (1.2.2). (C) 2014 Julian Shapiro. MIT @license: en.wikipedia.org/wiki/MIT_License */
/*! VelocityJS.org jQuery Shim (1.0.1). (C) 2014 The jQuery Foundation. MIT @license: en.wikipedia.org/wiki/MIT_License. */
!function(e){function t(e){var t=e.length,r=$.type(e);return"function"===r||$.isWindow(e)?!1:1===e.nodeType&&t?!0:"array"===r||0===t||"number"==typeof t&&t>0&&t-1 in e}if(!e.jQuery){var $=function(e,t){return new $.fn.init(e,t)};$.isWindow=function(e){return null!=e&&e==e.window},$.type=function(e){return null==e?e+"":"object"==typeof e||"function"==typeof e?a[o.call(e)]||"object":typeof e},$.isArray=Array.isArray||function(e){return"array"===$.type(e)},$.isPlainObject=function(e){var t;if(!e||"object"!==$.type(e)||e.nodeType||$.isWindow(e))return!1;try{if(e.constructor&&!n.call(e,"constructor")&&!n.call(e.constructor.prototype,"isPrototypeOf"))return!1}catch(r){return!1}for(t in e);return void 0===t||n.call(e,t)},$.each=function(e,r,a){var n,o=0,i=e.length,s=t(e);if(a){if(s)for(;i>o&&(n=r.apply(e[o],a),n!==!1);o++);else for(o in e)if(n=r.apply(e[o],a),n===!1)break}else if(s)for(;i>o&&(n=r.call(e[o],o,e[o]),n!==!1);o++);else for(o in e)if(n=r.call(e[o],o,e[o]),n===!1)break;return e},$.data=function(e,t,a){if(void 0===a){var n=e[$.expando],o=n&&r[n];if(void 0===t)return o;if(o&&t in o)return o[t]}else if(void 0!==t){var n=e[$.expando]||(e[$.expando]=++$.uuid);return r[n]=r[n]||{},r[n][t]=a,a}},$.removeData=function(e,t){var a=e[$.expando],n=a&&r[a];n&&$.each(t,function(e,t){delete n[t]})},$.extend=function(){var e,t,r,a,n,o,i=arguments[0]||{},s=1,l=arguments.length,u=!1;for("boolean"==typeof i&&(u=i,i=arguments[s]||{},s++),"object"!=typeof i&&"function"!==$.type(i)&&(i={}),s===l&&(i=this,s--);l>s;s++)if(null!=(n=arguments[s]))for(a in n)e=i[a],r=n[a],i!==r&&(u&&r&&($.isPlainObject(r)||(t=$.isArray(r)))?(t?(t=!1,o=e&&$.isArray(e)?e:[]):o=e&&$.isPlainObject(e)?e:{},i[a]=$.extend(u,o,r)):void 0!==r&&(i[a]=r));return i},$.queue=function(e,r,a){function n(e,r){var a=r||[];return null!=e&&(t(Object(e))?!function(e,t){for(var r=+t.length,a=0,n=e.length;r>a;)e[n++]=t[a++];if(r!==r)for(;void 0!==t[a];)e[n++]=t[a++];return e.length=n,e}(a,"string"==typeof e?[e]:e):[].push.call(a,e)),a}if(e){r=(r||"fx")+"queue";var o=$.data(e,r);return a?(!o||$.isArray(a)?o=$.data(e,r,n(a)):o.push(a),o):o||[]}},$.dequeue=function(e,t){$.each(e.nodeType?[e]:e,function(e,r){t=t||"fx";var a=$.queue(r,t),n=a.shift();"inprogress"===n&&(n=a.shift()),n&&("fx"===t&&a.unshift("inprogress"),n.call(r,function(){$.dequeue(r,t)}))})},$.fn=$.prototype={init:function(e){if(e.nodeType)return this[0]=e,this;throw new Error("Not a DOM node.")},offset:function(){var t=this[0].getBoundingClientRect?this[0].getBoundingClientRect():{top:0,left:0};return{top:t.top+(e.pageYOffset||document.scrollTop||0)-(document.clientTop||0),left:t.left+(e.pageXOffset||document.scrollLeft||0)-(document.clientLeft||0)}},position:function(){function e(){for(var e=this.offsetParent||document;e&&"html"===!e.nodeType.toLowerCase&&"static"===e.style.position;)e=e.offsetParent;return e||document}var t=this[0],e=e.apply(t),r=this.offset(),a=/^(?:body|html)$/i.test(e.nodeName)?{top:0,left:0}:$(e).offset();return r.top-=parseFloat(t.style.marginTop)||0,r.left-=parseFloat(t.style.marginLeft)||0,e.style&&(a.top+=parseFloat(e.style.borderTopWidth)||0,a.left+=parseFloat(e.style.borderLeftWidth)||0),{top:r.top-a.top,left:r.left-a.left}}};var r={};$.expando="velocity"+(new Date).getTime(),$.uuid=0;for(var a={},n=a.hasOwnProperty,o=a.toString,i="Boolean Number String Function Array Date RegExp Object Error".split(" "),s=0;s<i.length;s++)a["[object "+i[s]+"]"]=i[s].toLowerCase();$.fn.init.prototype=$.fn,e.Velocity={Utilities:$}}}(window),function(e){"object"==typeof module&&"object"==typeof module.exports?module.exports=e():"function"==typeof define&&define.amd?define(e):e()}(function(){return function(e,t,r,a){function n(e){for(var t=-1,r=e?e.length:0,a=[];++t<r;){var n=e[t];n&&a.push(n)}return a}function o(e){return g.isWrapped(e)?e=[].slice.call(e):g.isNode(e)&&(e=[e]),e}function i(e){var t=$.data(e,"velocity");return null===t?a:t}function s(e){return function(t){return Math.round(t*e)*(1/e)}}function l(e,r,a,n){function o(e,t){return 1-3*t+3*e}function i(e,t){return 3*t-6*e}function s(e){return 3*e}function l(e,t,r){return((o(t,r)*e+i(t,r))*e+s(t))*e}function u(e,t,r){return 3*o(t,r)*e*e+2*i(t,r)*e+s(t)}function c(t,r){for(var n=0;m>n;++n){var o=u(r,e,a);if(0===o)return r;var i=l(r,e,a)-t;r-=i/o}return r}function p(){for(var t=0;b>t;++t)w[t]=l(t*x,e,a)}function f(t,r,n){var o,i,s=0;do i=r+(n-r)/2,o=l(i,e,a)-t,o>0?n=i:r=i;while(Math.abs(o)>h&&++s<v);return i}function d(t){for(var r=0,n=1,o=b-1;n!=o&&w[n]<=t;++n)r+=x;--n;var i=(t-w[n])/(w[n+1]-w[n]),s=r+i*x,l=u(s,e,a);return l>=y?c(t,s):0==l?s:f(t,r,r+x)}function g(){V=!0,(e!=r||a!=n)&&p()}var m=4,y=.001,h=1e-7,v=10,b=11,x=1/(b-1),S="Float32Array"in t;if(4!==arguments.length)return!1;for(var P=0;4>P;++P)if("number"!=typeof arguments[P]||isNaN(arguments[P])||!isFinite(arguments[P]))return!1;e=Math.min(e,1),a=Math.min(a,1),e=Math.max(e,0),a=Math.max(a,0);var w=S?new Float32Array(b):new Array(b),V=!1,C=function(t){return V||g(),e===r&&a===n?t:0===t?0:1===t?1:l(d(t),r,n)};C.getControlPoints=function(){return[{x:e,y:r},{x:a,y:n}]};var T="generateBezier("+[e,r,a,n]+")";return C.toString=function(){return T},C}function u(e,t){var r=e;return g.isString(e)?v.Easings[e]||(r=!1):r=g.isArray(e)&&1===e.length?s.apply(null,e):g.isArray(e)&&2===e.length?b.apply(null,e.concat([t])):g.isArray(e)&&4===e.length?l.apply(null,e):!1,r===!1&&(r=v.Easings[v.defaults.easing]?v.defaults.easing:h),r}function c(e){if(e){var t=(new Date).getTime(),r=v.State.calls.length;r>1e4&&(v.State.calls=n(v.State.calls));for(var o=0;r>o;o++)if(v.State.calls[o]){var s=v.State.calls[o],l=s[0],u=s[2],f=s[3],d=!!f,m=null;f||(f=v.State.calls[o][3]=t-16);for(var y=Math.min((t-f)/u.duration,1),h=0,b=l.length;b>h;h++){var S=l[h],w=S.element;if(i(w)){var V=!1;if(u.display!==a&&null!==u.display&&"none"!==u.display){if("flex"===u.display){var C=["-webkit-box","-moz-box","-ms-flexbox","-webkit-flex"];$.each(C,function(e,t){x.setPropertyValue(w,"display",t)})}x.setPropertyValue(w,"display",u.display)}u.visibility!==a&&"hidden"!==u.visibility&&x.setPropertyValue(w,"visibility",u.visibility);for(var T in S)if("element"!==T){var k=S[T],A,F=g.isString(k.easing)?v.Easings[k.easing]:k.easing;if(1===y)A=k.endValue;else{var E=k.endValue-k.startValue;if(A=k.startValue+E*F(y,u,E),!d&&A===k.currentValue)continue}if(k.currentValue=A,"tween"===T)m=A;else{if(x.Hooks.registered[T]){var j=x.Hooks.getRoot(T),H=i(w).rootPropertyValueCache[j];H&&(k.rootPropertyValue=H)}var N=x.setPropertyValue(w,T,k.currentValue+(0===parseFloat(A)?"":k.unitType),k.rootPropertyValue,k.scrollData);x.Hooks.registered[T]&&(i(w).rootPropertyValueCache[j]=x.Normalizations.registered[j]?x.Normalizations.registered[j]("extract",null,N[1]):N[1]),"transform"===N[0]&&(V=!0)}}u.mobileHA&&i(w).transformCache.translate3d===a&&(i(w).transformCache.translate3d="(0px, 0px, 0px)",V=!0),V&&x.flushTransformCache(w)}}u.display!==a&&"none"!==u.display&&(v.State.calls[o][2].display=!1),u.visibility!==a&&"hidden"!==u.visibility&&(v.State.calls[o][2].visibility=!1),u.progress&&u.progress.call(s[1],s[1],y,Math.max(0,f+u.duration-t),f,m),1===y&&p(o)}}v.State.isTicking&&P(c)}function p(e,t){if(!v.State.calls[e])return!1;for(var r=v.State.calls[e][0],n=v.State.calls[e][1],o=v.State.calls[e][2],s=v.State.calls[e][4],l=!1,u=0,c=r.length;c>u;u++){var p=r[u].element;if(t||o.loop||("none"===o.display&&x.setPropertyValue(p,"display",o.display),"hidden"===o.visibility&&x.setPropertyValue(p,"visibility",o.visibility)),o.loop!==!0&&($.queue(p)[1]===a||!/\.velocityQueueEntryFlag/i.test($.queue(p)[1]))&&i(p)){i(p).isAnimating=!1,i(p).rootPropertyValueCache={};var f=!1;$.each(x.Lists.transforms3D,function(e,t){var r=/^scale/.test(t)?1:0,n=i(p).transformCache[t];i(p).transformCache[t]!==a&&new RegExp("^\\("+r+"[^.]").test(n)&&(f=!0,delete i(p).transformCache[t])}),o.mobileHA&&(f=!0,delete i(p).transformCache.translate3d),f&&x.flushTransformCache(p),x.Values.removeClass(p,"velocity-animating")}if(!t&&o.complete&&!o.loop&&u===c-1)try{o.complete.call(n,n)}catch(d){setTimeout(function(){throw d},1)}s&&o.loop!==!0&&s(n),i(p)&&o.loop===!0&&!t&&($.each(i(p).tweensContainer,function(e,t){/^rotate/.test(e)&&360===parseFloat(t.endValue)&&(t.endValue=0,t.startValue=360),/^backgroundPosition/.test(e)&&100===parseFloat(t.endValue)&&"%"===t.unitType&&(t.endValue=0,t.startValue=100)}),v(p,"reverse",{loop:!0,delay:o.delay})),o.queue!==!1&&$.dequeue(p,o.queue)}v.State.calls[e]=!1;for(var g=0,m=v.State.calls.length;m>g;g++)if(v.State.calls[g]!==!1){l=!0;break}l===!1&&(v.State.isTicking=!1,delete v.State.calls,v.State.calls=[])}var f=function(){if(r.documentMode)return r.documentMode;for(var e=7;e>4;e--){var t=r.createElement("div");if(t.innerHTML="<!--[if IE "+e+"]><span></span><![endif]-->",t.getElementsByTagName("span").length)return t=null,e}return a}(),d=function(){var e=0;return t.webkitRequestAnimationFrame||t.mozRequestAnimationFrame||function(t){var r=(new Date).getTime(),a;return a=Math.max(0,16-(r-e)),e=r+a,setTimeout(function(){t(r+a)},a)}}(),g={isString:function(e){return"string"==typeof e},isArray:Array.isArray||function(e){return"[object Array]"===Object.prototype.toString.call(e)},isFunction:function(e){return"[object Function]"===Object.prototype.toString.call(e)},isNode:function(e){return e&&e.nodeType},isNodeList:function(e){return"object"==typeof e&&/^\[object (HTMLCollection|NodeList|Object)\]$/.test(Object.prototype.toString.call(e))&&e.length!==a&&(0===e.length||"object"==typeof e[0]&&e[0].nodeType>0)},isWrapped:function(e){return e&&(e.jquery||t.Zepto&&t.Zepto.zepto.isZ(e))},isSVG:function(e){return t.SVGElement&&e instanceof t.SVGElement},isEmptyObject:function(e){for(var t in e)return!1;return!0}},$,m=!1;if(e.fn&&e.fn.jquery?($=e,m=!0):$=t.Velocity.Utilities,8>=f&&!m)throw new Error("Velocity: IE8 and below require jQuery to be loaded before Velocity.");if(7>=f)return void(jQuery.fn.velocity=jQuery.fn.animate);var y=400,h="swing",v={State:{isMobile:/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent),isAndroid:/Android/i.test(navigator.userAgent),isGingerbread:/Android 2\.3\.[3-7]/i.test(navigator.userAgent),isChrome:t.chrome,isFirefox:/Firefox/i.test(navigator.userAgent),prefixElement:r.createElement("div"),prefixMatches:{},scrollAnchor:null,scrollPropertyLeft:null,scrollPropertyTop:null,isTicking:!1,calls:[]},CSS:{},Utilities:$,Redirects:{},Easings:{},Promise:t.Promise,defaults:{queue:"",duration:y,easing:h,begin:a,complete:a,progress:a,display:a,visibility:a,loop:!1,delay:!1,mobileHA:!0,_cacheValues:!0},init:function(e){$.data(e,"velocity",{isSVG:g.isSVG(e),isAnimating:!1,computedStyle:null,tweensContainer:null,rootPropertyValueCache:{},transformCache:{}})},hook:null,mock:!1,version:{major:1,minor:2,patch:2},debug:!1};t.pageYOffset!==a?(v.State.scrollAnchor=t,v.State.scrollPropertyLeft="pageXOffset",v.State.scrollPropertyTop="pageYOffset"):(v.State.scrollAnchor=r.documentElement||r.body.parentNode||r.body,v.State.scrollPropertyLeft="scrollLeft",v.State.scrollPropertyTop="scrollTop");var b=function(){function e(e){return-e.tension*e.x-e.friction*e.v}function t(t,r,a){var n={x:t.x+a.dx*r,v:t.v+a.dv*r,tension:t.tension,friction:t.friction};return{dx:n.v,dv:e(n)}}function r(r,a){var n={dx:r.v,dv:e(r)},o=t(r,.5*a,n),i=t(r,.5*a,o),s=t(r,a,i),l=1/6*(n.dx+2*(o.dx+i.dx)+s.dx),u=1/6*(n.dv+2*(o.dv+i.dv)+s.dv);return r.x=r.x+l*a,r.v=r.v+u*a,r}return function a(e,t,n){var o={x:-1,v:0,tension:null,friction:null},i=[0],s=0,l=1e-4,u=.016,c,p,f;for(e=parseFloat(e)||500,t=parseFloat(t)||20,n=n||null,o.tension=e,o.friction=t,c=null!==n,c?(s=a(e,t),p=s/n*u):p=u;;)if(f=r(f||o,p),i.push(1+f.x),s+=16,!(Math.abs(f.x)>l&&Math.abs(f.v)>l))break;return c?function(e){return i[e*(i.length-1)|0]}:s}}();v.Easings={linear:function(e){return e},swing:function(e){return.5-Math.cos(e*Math.PI)/2},spring:function(e){return 1-Math.cos(4.5*e*Math.PI)*Math.exp(6*-e)}},$.each([["ease",[.25,.1,.25,1]],["ease-in",[.42,0,1,1]],["ease-out",[0,0,.58,1]],["ease-in-out",[.42,0,.58,1]],["easeInSine",[.47,0,.745,.715]],["easeOutSine",[.39,.575,.565,1]],["easeInOutSine",[.445,.05,.55,.95]],["easeInQuad",[.55,.085,.68,.53]],["easeOutQuad",[.25,.46,.45,.94]],["easeInOutQuad",[.455,.03,.515,.955]],["easeInCubic",[.55,.055,.675,.19]],["easeOutCubic",[.215,.61,.355,1]],["easeInOutCubic",[.645,.045,.355,1]],["easeInQuart",[.895,.03,.685,.22]],["easeOutQuart",[.165,.84,.44,1]],["easeInOutQuart",[.77,0,.175,1]],["easeInQuint",[.755,.05,.855,.06]],["easeOutQuint",[.23,1,.32,1]],["easeInOutQuint",[.86,0,.07,1]],["easeInExpo",[.95,.05,.795,.035]],["easeOutExpo",[.19,1,.22,1]],["easeInOutExpo",[1,0,0,1]],["easeInCirc",[.6,.04,.98,.335]],["easeOutCirc",[.075,.82,.165,1]],["easeInOutCirc",[.785,.135,.15,.86]]],function(e,t){v.Easings[t[0]]=l.apply(null,t[1])});var x=v.CSS={RegEx:{isHex:/^#([A-f\d]{3}){1,2}$/i,valueUnwrap:/^[A-z]+\((.*)\)$/i,wrappedValueAlreadyExtracted:/[0-9.]+ [0-9.]+ [0-9.]+( [0-9.]+)?/,valueSplit:/([A-z]+\(.+\))|(([A-z0-9#-.]+?)(?=\s|$))/gi},Lists:{colors:["fill","stroke","stopColor","color","backgroundColor","borderColor","borderTopColor","borderRightColor","borderBottomColor","borderLeftColor","outlineColor"],transformsBase:["translateX","translateY","scale","scaleX","scaleY","skewX","skewY","rotateZ"],transforms3D:["transformPerspective","translateZ","scaleZ","rotateX","rotateY"]},Hooks:{templates:{textShadow:["Color X Y Blur","black 0px 0px 0px"],boxShadow:["Color X Y Blur Spread","black 0px 0px 0px 0px"],clip:["Top Right Bottom Left","0px 0px 0px 0px"],backgroundPosition:["X Y","0% 0%"],transformOrigin:["X Y Z","50% 50% 0px"],perspectiveOrigin:["X Y","50% 50%"]},registered:{},register:function(){for(var e=0;e<x.Lists.colors.length;e++){var t="color"===x.Lists.colors[e]?"0 0 0 1":"255 255 255 1";x.Hooks.templates[x.Lists.colors[e]]=["Red Green Blue Alpha",t]}var r,a,n;if(f)for(r in x.Hooks.templates){a=x.Hooks.templates[r],n=a[0].split(" ");var o=a[1].match(x.RegEx.valueSplit);"Color"===n[0]&&(n.push(n.shift()),o.push(o.shift()),x.Hooks.templates[r]=[n.join(" "),o.join(" ")])}for(r in x.Hooks.templates){a=x.Hooks.templates[r],n=a[0].split(" ");for(var e in n){var i=r+n[e],s=e;x.Hooks.registered[i]=[r,s]}}},getRoot:function(e){var t=x.Hooks.registered[e];return t?t[0]:e},cleanRootPropertyValue:function(e,t){return x.RegEx.valueUnwrap.test(t)&&(t=t.match(x.RegEx.valueUnwrap)[1]),x.Values.isCSSNullValue(t)&&(t=x.Hooks.templates[e][1]),t},extractValue:function(e,t){var r=x.Hooks.registered[e];if(r){var a=r[0],n=r[1];return t=x.Hooks.cleanRootPropertyValue(a,t),t.toString().match(x.RegEx.valueSplit)[n]}return t},injectValue:function(e,t,r){var a=x.Hooks.registered[e];if(a){var n=a[0],o=a[1],i,s;return r=x.Hooks.cleanRootPropertyValue(n,r),i=r.toString().match(x.RegEx.valueSplit),i[o]=t,s=i.join(" ")}return r}},Normalizations:{registered:{clip:function(e,t,r){switch(e){case"name":return"clip";case"extract":var a;return x.RegEx.wrappedValueAlreadyExtracted.test(r)?a=r:(a=r.toString().match(x.RegEx.valueUnwrap),a=a?a[1].replace(/,(\s+)?/g," "):r),a;case"inject":return"rect("+r+")"}},blur:function(e,t,r){switch(e){case"name":return v.State.isFirefox?"filter":"-webkit-filter";case"extract":var a=parseFloat(r);if(!a&&0!==a){var n=r.toString().match(/blur\(([0-9]+[A-z]+)\)/i);a=n?n[1]:0}return a;case"inject":return parseFloat(r)?"blur("+r+")":"none"}},opacity:function(e,t,r){if(8>=f)switch(e){case"name":return"filter";case"extract":var a=r.toString().match(/alpha\(opacity=(.*)\)/i);return r=a?a[1]/100:1;case"inject":return t.style.zoom=1,parseFloat(r)>=1?"":"alpha(opacity="+parseInt(100*parseFloat(r),10)+")"}else switch(e){case"name":return"opacity";case"extract":return r;case"inject":return r}}},register:function(){9>=f||v.State.isGingerbread||(x.Lists.transformsBase=x.Lists.transformsBase.concat(x.Lists.transforms3D));for(var e=0;e<x.Lists.transformsBase.length;e++)!function(){var t=x.Lists.transformsBase[e];x.Normalizations.registered[t]=function(e,r,n){switch(e){case"name":return"transform";case"extract":return i(r)===a||i(r).transformCache[t]===a?/^scale/i.test(t)?1:0:i(r).transformCache[t].replace(/[()]/g,"");case"inject":var o=!1;switch(t.substr(0,t.length-1)){case"translate":o=!/(%|px|em|rem|vw|vh|\d)$/i.test(n);break;case"scal":case"scale":v.State.isAndroid&&i(r).transformCache[t]===a&&1>n&&(n=1),o=!/(\d)$/i.test(n);break;case"skew":o=!/(deg|\d)$/i.test(n);break;case"rotate":o=!/(deg|\d)$/i.test(n)}return o||(i(r).transformCache[t]="("+n+")"),i(r).transformCache[t]}}}();for(var e=0;e<x.Lists.colors.length;e++)!function(){var t=x.Lists.colors[e];x.Normalizations.registered[t]=function(e,r,n){switch(e){case"name":return t;case"extract":var o;if(x.RegEx.wrappedValueAlreadyExtracted.test(n))o=n;else{var i,s={black:"rgb(0, 0, 0)",blue:"rgb(0, 0, 255)",gray:"rgb(128, 128, 128)",green:"rgb(0, 128, 0)",red:"rgb(255, 0, 0)",white:"rgb(255, 255, 255)"};/^[A-z]+$/i.test(n)?i=s[n]!==a?s[n]:s.black:x.RegEx.isHex.test(n)?i="rgb("+x.Values.hexToRgb(n).join(" ")+")":/^rgba?\(/i.test(n)||(i=s.black),o=(i||n).toString().match(x.RegEx.valueUnwrap)[1].replace(/,(\s+)?/g," ")}return 8>=f||3!==o.split(" ").length||(o+=" 1"),o;case"inject":return 8>=f?4===n.split(" ").length&&(n=n.split(/\s+/).slice(0,3).join(" ")):3===n.split(" ").length&&(n+=" 1"),(8>=f?"rgb":"rgba")+"("+n.replace(/\s+/g,",").replace(/\.(\d)+(?=,)/g,"")+")"}}}()}},Names:{camelCase:function(e){return e.replace(/-(\w)/g,function(e,t){return t.toUpperCase()})},SVGAttribute:function(e){var t="width|height|x|y|cx|cy|r|rx|ry|x1|x2|y1|y2";return(f||v.State.isAndroid&&!v.State.isChrome)&&(t+="|transform"),new RegExp("^("+t+")$","i").test(e)},prefixCheck:function(e){if(v.State.prefixMatches[e])return[v.State.prefixMatches[e],!0];for(var t=["","Webkit","Moz","ms","O"],r=0,a=t.length;a>r;r++){var n;if(n=0===r?e:t[r]+e.replace(/^\w/,function(e){return e.toUpperCase()}),g.isString(v.State.prefixElement.style[n]))return v.State.prefixMatches[e]=n,[n,!0]}return[e,!1]}},Values:{hexToRgb:function(e){var t=/^#?([a-f\d])([a-f\d])([a-f\d])$/i,r=/^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i,a;return e=e.replace(t,function(e,t,r,a){return t+t+r+r+a+a}),a=r.exec(e),a?[parseInt(a[1],16),parseInt(a[2],16),parseInt(a[3],16)]:[0,0,0]},isCSSNullValue:function(e){return 0==e||/^(none|auto|transparent|(rgba\(0, ?0, ?0, ?0\)))$/i.test(e)},getUnitType:function(e){return/^(rotate|skew)/i.test(e)?"deg":/(^(scale|scaleX|scaleY|scaleZ|alpha|flexGrow|flexHeight|zIndex|fontWeight)$)|((opacity|red|green|blue|alpha)$)/i.test(e)?"":"px"},getDisplayType:function(e){var t=e&&e.tagName.toString().toLowerCase();return/^(b|big|i|small|tt|abbr|acronym|cite|code|dfn|em|kbd|strong|samp|var|a|bdo|br|img|map|object|q|script|span|sub|sup|button|input|label|select|textarea)$/i.test(t)?"inline":/^(li)$/i.test(t)?"list-item":/^(tr)$/i.test(t)?"table-row":/^(table)$/i.test(t)?"table":/^(tbody)$/i.test(t)?"table-row-group":"block"},addClass:function(e,t){e.classList?e.classList.add(t):e.className+=(e.className.length?" ":"")+t},removeClass:function(e,t){e.classList?e.classList.remove(t):e.className=e.className.toString().replace(new RegExp("(^|\\s)"+t.split(" ").join("|")+"(\\s|$)","gi")," ")}},getPropertyValue:function(e,r,n,o){function s(e,r){function n(){u&&x.setPropertyValue(e,"display","none")}var l=0;if(8>=f)l=$.css(e,r);else{var u=!1;if(/^(width|height)$/.test(r)&&0===x.getPropertyValue(e,"display")&&(u=!0,x.setPropertyValue(e,"display",x.Values.getDisplayType(e))),!o){if("height"===r&&"border-box"!==x.getPropertyValue(e,"boxSizing").toString().toLowerCase()){var c=e.offsetHeight-(parseFloat(x.getPropertyValue(e,"borderTopWidth"))||0)-(parseFloat(x.getPropertyValue(e,"borderBottomWidth"))||0)-(parseFloat(x.getPropertyValue(e,"paddingTop"))||0)-(parseFloat(x.getPropertyValue(e,"paddingBottom"))||0);return n(),c}if("width"===r&&"border-box"!==x.getPropertyValue(e,"boxSizing").toString().toLowerCase()){var p=e.offsetWidth-(parseFloat(x.getPropertyValue(e,"borderLeftWidth"))||0)-(parseFloat(x.getPropertyValue(e,"borderRightWidth"))||0)-(parseFloat(x.getPropertyValue(e,"paddingLeft"))||0)-(parseFloat(x.getPropertyValue(e,"paddingRight"))||0);return n(),p}}var d;d=i(e)===a?t.getComputedStyle(e,null):i(e).computedStyle?i(e).computedStyle:i(e).computedStyle=t.getComputedStyle(e,null),"borderColor"===r&&(r="borderTopColor"),l=9===f&&"filter"===r?d.getPropertyValue(r):d[r],(""===l||null===l)&&(l=e.style[r]),n()}if("auto"===l&&/^(top|right|bottom|left)$/i.test(r)){var g=s(e,"position");("fixed"===g||"absolute"===g&&/top|left/i.test(r))&&(l=$(e).position()[r]+"px")}return l}var l;if(x.Hooks.registered[r]){var u=r,c=x.Hooks.getRoot(u);n===a&&(n=x.getPropertyValue(e,x.Names.prefixCheck(c)[0])),x.Normalizations.registered[c]&&(n=x.Normalizations.registered[c]("extract",e,n)),l=x.Hooks.extractValue(u,n)}else if(x.Normalizations.registered[r]){var p,d;p=x.Normalizations.registered[r]("name",e),"transform"!==p&&(d=s(e,x.Names.prefixCheck(p)[0]),x.Values.isCSSNullValue(d)&&x.Hooks.templates[r]&&(d=x.Hooks.templates[r][1])),l=x.Normalizations.registered[r]("extract",e,d)}if(!/^[\d-]/.test(l))if(i(e)&&i(e).isSVG&&x.Names.SVGAttribute(r))if(/^(height|width)$/i.test(r))try{l=e.getBBox()[r]}catch(g){l=0}else l=e.getAttribute(r);else l=s(e,x.Names.prefixCheck(r)[0]);return x.Values.isCSSNullValue(l)&&(l=0),v.debug>=2&&console.log("Get "+r+": "+l),l},setPropertyValue:function(e,r,a,n,o){var s=r;if("scroll"===r)o.container?o.container["scroll"+o.direction]=a:"Left"===o.direction?t.scrollTo(a,o.alternateValue):t.scrollTo(o.alternateValue,a);else if(x.Normalizations.registered[r]&&"transform"===x.Normalizations.registered[r]("name",e))x.Normalizations.registered[r]("inject",e,a),s="transform",a=i(e).transformCache[r];else{if(x.Hooks.registered[r]){var l=r,u=x.Hooks.getRoot(r);n=n||x.getPropertyValue(e,u),a=x.Hooks.injectValue(l,a,n),r=u}if(x.Normalizations.registered[r]&&(a=x.Normalizations.registered[r]("inject",e,a),r=x.Normalizations.registered[r]("name",e)),s=x.Names.prefixCheck(r)[0],8>=f)try{e.style[s]=a}catch(c){v.debug&&console.log("Browser does not support ["+a+"] for ["+s+"]")}else i(e)&&i(e).isSVG&&x.Names.SVGAttribute(r)?e.setAttribute(r,a):e.style[s]=a;v.debug>=2&&console.log("Set "+r+" ("+s+"): "+a)}return[s,a]},flushTransformCache:function(e){function t(t){return parseFloat(x.getPropertyValue(e,t))}var r="";if((f||v.State.isAndroid&&!v.State.isChrome)&&i(e).isSVG){var a={translate:[t("translateX"),t("translateY")],skewX:[t("skewX")],skewY:[t("skewY")],scale:1!==t("scale")?[t("scale"),t("scale")]:[t("scaleX"),t("scaleY")],rotate:[t("rotateZ"),0,0]};$.each(i(e).transformCache,function(e){/^translate/i.test(e)?e="translate":/^scale/i.test(e)?e="scale":/^rotate/i.test(e)&&(e="rotate"),a[e]&&(r+=e+"("+a[e].join(" ")+") ",delete a[e])})}else{var n,o;$.each(i(e).transformCache,function(t){return n=i(e).transformCache[t],"transformPerspective"===t?(o=n,!0):(9===f&&"rotateZ"===t&&(t="rotate"),void(r+=t+n+" "))}),o&&(r="perspective"+o+" "+r)}x.setPropertyValue(e,"transform",r)}};x.Hooks.register(),x.Normalizations.register(),v.hook=function(e,t,r){var n=a;return e=o(e),$.each(e,function(e,o){if(i(o)===a&&v.init(o),r===a)n===a&&(n=v.CSS.getPropertyValue(o,t));else{var s=v.CSS.setPropertyValue(o,t,r);"transform"===s[0]&&v.CSS.flushTransformCache(o),n=s}}),n};var S=function(){function e(){return l?T.promise||null:f}function n(){function e(e){function p(e,t){var r=a,i=a,s=a;return g.isArray(e)?(r=e[0],!g.isArray(e[1])&&/^[\d-]/.test(e[1])||g.isFunction(e[1])||x.RegEx.isHex.test(e[1])?s=e[1]:(g.isString(e[1])&&!x.RegEx.isHex.test(e[1])||g.isArray(e[1]))&&(i=t?e[1]:u(e[1],o.duration),e[2]!==a&&(s=e[2]))):r=e,t||(i=i||o.easing),g.isFunction(r)&&(r=r.call(n,w,P)),g.isFunction(s)&&(s=s.call(n,w,P)),[r||0,i,s]}function f(e,t){var r,a;return a=(t||"0").toString().toLowerCase().replace(/[%A-z]+$/,function(e){return r=e,""}),r||(r=x.Values.getUnitType(e)),[a,r]}function d(){var e={myParent:n.parentNode||r.body,position:x.getPropertyValue(n,"position"),fontSize:x.getPropertyValue(n,"fontSize")},a=e.position===N.lastPosition&&e.myParent===N.lastParent,o=e.fontSize===N.lastFontSize;N.lastParent=e.myParent,N.lastPosition=e.position,N.lastFontSize=e.fontSize;var s=100,l={};if(o&&a)l.emToPx=N.lastEmToPx,l.percentToPxWidth=N.lastPercentToPxWidth,l.percentToPxHeight=N.lastPercentToPxHeight;else{var u=i(n).isSVG?r.createElementNS("http://www.w3.org/2000/svg","rect"):r.createElement("div");v.init(u),e.myParent.appendChild(u),$.each(["overflow","overflowX","overflowY"],function(e,t){v.CSS.setPropertyValue(u,t,"hidden")}),v.CSS.setPropertyValue(u,"position",e.position),v.CSS.setPropertyValue(u,"fontSize",e.fontSize),v.CSS.setPropertyValue(u,"boxSizing","content-box"),$.each(["minWidth","maxWidth","width","minHeight","maxHeight","height"],function(e,t){v.CSS.setPropertyValue(u,t,s+"%")}),v.CSS.setPropertyValue(u,"paddingLeft",s+"em"),l.percentToPxWidth=N.lastPercentToPxWidth=(parseFloat(x.getPropertyValue(u,"width",null,!0))||1)/s,l.percentToPxHeight=N.lastPercentToPxHeight=(parseFloat(x.getPropertyValue(u,"height",null,!0))||1)/s,l.emToPx=N.lastEmToPx=(parseFloat(x.getPropertyValue(u,"paddingLeft"))||1)/s,e.myParent.removeChild(u)}return null===N.remToPx&&(N.remToPx=parseFloat(x.getPropertyValue(r.body,"fontSize"))||16),null===N.vwToPx&&(N.vwToPx=parseFloat(t.innerWidth)/100,N.vhToPx=parseFloat(t.innerHeight)/100),l.remToPx=N.remToPx,l.vwToPx=N.vwToPx,l.vhToPx=N.vhToPx,v.debug>=1&&console.log("Unit ratios: "+JSON.stringify(l),n),l}if(o.begin&&0===w)try{o.begin.call(m,m)}catch(y){setTimeout(function(){throw y},1)}if("scroll"===k){var S=/^x$/i.test(o.axis)?"Left":"Top",V=parseFloat(o.offset)||0,C,A,F;o.container?g.isWrapped(o.container)||g.isNode(o.container)?(o.container=o.container[0]||o.container,C=o.container["scroll"+S],F=C+$(n).position()[S.toLowerCase()]+V):o.container=null:(C=v.State.scrollAnchor[v.State["scrollProperty"+S]],A=v.State.scrollAnchor[v.State["scrollProperty"+("Left"===S?"Top":"Left")]],F=$(n).offset()[S.toLowerCase()]+V),s={scroll:{rootPropertyValue:!1,startValue:C,currentValue:C,endValue:F,unitType:"",easing:o.easing,scrollData:{container:o.container,direction:S,alternateValue:A}},element:n},v.debug&&console.log("tweensContainer (scroll): ",s.scroll,n)}else if("reverse"===k){if(!i(n).tweensContainer)return void $.dequeue(n,o.queue);"none"===i(n).opts.display&&(i(n).opts.display="auto"),"hidden"===i(n).opts.visibility&&(i(n).opts.visibility="visible"),i(n).opts.loop=!1,i(n).opts.begin=null,i(n).opts.complete=null,b.easing||delete o.easing,b.duration||delete o.duration,o=$.extend({},i(n).opts,o);var E=$.extend(!0,{},i(n).tweensContainer);for(var j in E)if("element"!==j){var H=E[j].startValue;E[j].startValue=E[j].currentValue=E[j].endValue,E[j].endValue=H,g.isEmptyObject(b)||(E[j].easing=o.easing),v.debug&&console.log("reverse tweensContainer ("+j+"): "+JSON.stringify(E[j]),n)}s=E}else if("start"===k){var E;i(n).tweensContainer&&i(n).isAnimating===!0&&(E=i(n).tweensContainer),$.each(h,function(e,t){if(RegExp("^"+x.Lists.colors.join("$|^")+"$").test(e)){var r=p(t,!0),n=r[0],o=r[1],i=r[2];if(x.RegEx.isHex.test(n)){for(var s=["Red","Green","Blue"],l=x.Values.hexToRgb(n),u=i?x.Values.hexToRgb(i):a,c=0;c<s.length;c++){var f=[l[c]];o&&f.push(o),u!==a&&f.push(u[c]),h[e+s[c]]=f}delete h[e]}}});for(var R in h){var O=p(h[R]),z=O[0],q=O[1],M=O[2];R=x.Names.camelCase(R);var I=x.Hooks.getRoot(R),B=!1;if(i(n).isSVG||"tween"===I||x.Names.prefixCheck(I)[1]!==!1||x.Normalizations.registered[I]!==a){(o.display!==a&&null!==o.display&&"none"!==o.display||o.visibility!==a&&"hidden"!==o.visibility)&&/opacity|filter/.test(R)&&!M&&0!==z&&(M=0),o._cacheValues&&E&&E[R]?(M===a&&(M=E[R].endValue+E[R].unitType),B=i(n).rootPropertyValueCache[I]):x.Hooks.registered[R]?M===a?(B=x.getPropertyValue(n,I),M=x.getPropertyValue(n,R,B)):B=x.Hooks.templates[I][1]:M===a&&(M=x.getPropertyValue(n,R));var W,G,D,X=!1;if(W=f(R,M),M=W[0],D=W[1],W=f(R,z),z=W[0].replace(/^([+-\/*])=/,function(e,t){return X=t,""}),G=W[1],M=parseFloat(M)||0,z=parseFloat(z)||0,"%"===G&&(/^(fontSize|lineHeight)$/.test(R)?(z/=100,G="em"):/^scale/.test(R)?(z/=100,G=""):/(Red|Green|Blue)$/i.test(R)&&(z=z/100*255,G="")),/[\/*]/.test(X))G=D;else if(D!==G&&0!==M)if(0===z)G=D;else{l=l||d();var Y=/margin|padding|left|right|width|text|word|letter/i.test(R)||/X$/.test(R)||"x"===R?"x":"y";switch(D){case"%":M*="x"===Y?l.percentToPxWidth:l.percentToPxHeight;break;case"px":break;default:M*=l[D+"ToPx"]}switch(G){case"%":M*=1/("x"===Y?l.percentToPxWidth:l.percentToPxHeight);break;case"px":break;default:M*=1/l[G+"ToPx"]}}switch(X){case"+":z=M+z;break;case"-":z=M-z;break;case"*":z=M*z;break;case"/":z=M/z}s[R]={rootPropertyValue:B,startValue:M,currentValue:M,endValue:z,unitType:G,easing:q},v.debug&&console.log("tweensContainer ("+R+"): "+JSON.stringify(s[R]),n)}else v.debug&&console.log("Skipping ["+I+"] due to a lack of browser support.")}s.element=n}s.element&&(x.Values.addClass(n,"velocity-animating"),L.push(s),""===o.queue&&(i(n).tweensContainer=s,i(n).opts=o),i(n).isAnimating=!0,w===P-1?(v.State.calls.push([L,m,o,null,T.resolver]),v.State.isTicking===!1&&(v.State.isTicking=!0,c())):w++)}var n=this,o=$.extend({},v.defaults,b),s={},l;switch(i(n)===a&&v.init(n),parseFloat(o.delay)&&o.queue!==!1&&$.queue(n,o.queue,function(e){v.velocityQueueEntryFlag=!0,i(n).delayTimer={setTimeout:setTimeout(e,parseFloat(o.delay)),next:e}}),o.duration.toString().toLowerCase()){case"fast":o.duration=200;break;case"normal":o.duration=y;break;case"slow":o.duration=600;break;default:o.duration=parseFloat(o.duration)||1}v.mock!==!1&&(v.mock===!0?o.duration=o.delay=1:(o.duration*=parseFloat(v.mock)||1,o.delay*=parseFloat(v.mock)||1)),o.easing=u(o.easing,o.duration),o.begin&&!g.isFunction(o.begin)&&(o.begin=null),o.progress&&!g.isFunction(o.progress)&&(o.progress=null),o.complete&&!g.isFunction(o.complete)&&(o.complete=null),o.display!==a&&null!==o.display&&(o.display=o.display.toString().toLowerCase(),"auto"===o.display&&(o.display=v.CSS.Values.getDisplayType(n))),o.visibility!==a&&null!==o.visibility&&(o.visibility=o.visibility.toString().toLowerCase()),o.mobileHA=o.mobileHA&&v.State.isMobile&&!v.State.isGingerbread,o.queue===!1?o.delay?setTimeout(e,o.delay):e():$.queue(n,o.queue,function(t,r){return r===!0?(T.promise&&T.resolver(m),!0):(v.velocityQueueEntryFlag=!0,void e(t))}),""!==o.queue&&"fx"!==o.queue||"inprogress"===$.queue(n)[0]||$.dequeue(n)}var s=arguments[0]&&(arguments[0].p||$.isPlainObject(arguments[0].properties)&&!arguments[0].properties.names||g.isString(arguments[0].properties)),l,f,d,m,h,b;if(g.isWrapped(this)?(l=!1,d=0,m=this,f=this):(l=!0,d=1,m=s?arguments[0].elements||arguments[0].e:arguments[0]),m=o(m)){s?(h=arguments[0].properties||arguments[0].p,b=arguments[0].options||arguments[0].o):(h=arguments[d],b=arguments[d+1]);var P=m.length,w=0;if(!/^(stop|finish)$/i.test(h)&&!$.isPlainObject(b)){var V=d+1;b={};for(var C=V;C<arguments.length;C++)g.isArray(arguments[C])||!/^(fast|normal|slow)$/i.test(arguments[C])&&!/^\d/.test(arguments[C])?g.isString(arguments[C])||g.isArray(arguments[C])?b.easing=arguments[C]:g.isFunction(arguments[C])&&(b.complete=arguments[C]):b.duration=arguments[C]}var T={promise:null,resolver:null,rejecter:null};l&&v.Promise&&(T.promise=new v.Promise(function(e,t){T.resolver=e,T.rejecter=t}));var k;switch(h){case"scroll":k="scroll";break;case"reverse":k="reverse";break;case"finish":case"stop":$.each(m,function(e,t){i(t)&&i(t).delayTimer&&(clearTimeout(i(t).delayTimer.setTimeout),i(t).delayTimer.next&&i(t).delayTimer.next(),delete i(t).delayTimer)});var A=[];return $.each(v.State.calls,function(e,t){t&&$.each(t[1],function(r,n){var o=b===a?"":b;return o===!0||t[2].queue===o||b===a&&t[2].queue===!1?void $.each(m,function(r,a){a===n&&((b===!0||g.isString(b))&&($.each($.queue(a,g.isString(b)?b:""),function(e,t){g.isFunction(t)&&t(null,!0)}),$.queue(a,g.isString(b)?b:"",[])),"stop"===h?(i(a)&&i(a).tweensContainer&&o!==!1&&$.each(i(a).tweensContainer,function(e,t){t.endValue=t.currentValue
}),A.push(e)):"finish"===h&&(t[2].duration=1))}):!0})}),"stop"===h&&($.each(A,function(e,t){p(t,!0)}),T.promise&&T.resolver(m)),e();default:if(!$.isPlainObject(h)||g.isEmptyObject(h)){if(g.isString(h)&&v.Redirects[h]){var F=$.extend({},b),E=F.duration,j=F.delay||0;return F.backwards===!0&&(m=$.extend(!0,[],m).reverse()),$.each(m,function(e,t){parseFloat(F.stagger)?F.delay=j+parseFloat(F.stagger)*e:g.isFunction(F.stagger)&&(F.delay=j+F.stagger.call(t,e,P)),F.drag&&(F.duration=parseFloat(E)||(/^(callout|transition)/.test(h)?1e3:y),F.duration=Math.max(F.duration*(F.backwards?1-e/P:(e+1)/P),.75*F.duration,200)),v.Redirects[h].call(t,t,F||{},e,P,m,T.promise?T:a)}),e()}var H="Velocity: First argument ("+h+") was not a property map, a known action, or a registered redirect. Aborting.";return T.promise?T.rejecter(new Error(H)):console.log(H),e()}k="start"}var N={lastParent:null,lastPosition:null,lastFontSize:null,lastPercentToPxWidth:null,lastPercentToPxHeight:null,lastEmToPx:null,remToPx:null,vwToPx:null,vhToPx:null},L=[];$.each(m,function(e,t){g.isNode(t)&&n.call(t)});var F=$.extend({},v.defaults,b),R;if(F.loop=parseInt(F.loop),R=2*F.loop-1,F.loop)for(var O=0;R>O;O++){var z={delay:F.delay,progress:F.progress};O===R-1&&(z.display=F.display,z.visibility=F.visibility,z.complete=F.complete),S(m,"reverse",z)}return e()}};v=$.extend(S,v),v.animate=S;var P=t.requestAnimationFrame||d;return v.State.isMobile||r.hidden===a||r.addEventListener("visibilitychange",function(){r.hidden?(P=function(e){return setTimeout(function(){e(!0)},16)},c()):P=t.requestAnimationFrame||d}),e.Velocity=v,e!==t&&(e.fn.velocity=S,e.fn.velocity.defaults=v.defaults),$.each(["Down","Up"],function(e,t){v.Redirects["slide"+t]=function(e,r,n,o,i,s){var l=$.extend({},r),u=l.begin,c=l.complete,p={height:"",marginTop:"",marginBottom:"",paddingTop:"",paddingBottom:""},f={};l.display===a&&(l.display="Down"===t?"inline"===v.CSS.Values.getDisplayType(e)?"inline-block":"block":"none"),l.begin=function(){u&&u.call(i,i);for(var r in p){f[r]=e.style[r];var a=v.CSS.getPropertyValue(e,r);p[r]="Down"===t?[a,0]:[0,a]}f.overflow=e.style.overflow,e.style.overflow="hidden"},l.complete=function(){for(var t in f)e.style[t]=f[t];c&&c.call(i,i),s&&s.resolver(i)},v(e,p,l)}}),$.each(["In","Out"],function(e,t){v.Redirects["fade"+t]=function(e,r,n,o,i,s){var l=$.extend({},r),u={opacity:"In"===t?1:0},c=l.complete;l.complete=n!==o-1?l.begin=null:function(){c&&c.call(i,i),s&&s.resolver(i)},l.display===a&&(l.display="In"===t?"auto":"none"),v(this,u,l)}}),v}(window.jQuery||window.Zepto||window,window,document)});;!function(a,b,c,d){"use strict";function k(a,b,c){return setTimeout(q(a,c),b)}function l(a,b,c){return Array.isArray(a)?(m(a,c[b],c),!0):!1}function m(a,b,c){var e;if(a)if(a.forEach)a.forEach(b,c);else if(a.length!==d)for(e=0;e<a.length;)b.call(c,a[e],e,a),e++;else for(e in a)a.hasOwnProperty(e)&&b.call(c,a[e],e,a)}function n(a,b,c){for(var e=Object.keys(b),f=0;f<e.length;)(!c||c&&a[e[f]]===d)&&(a[e[f]]=b[e[f]]),f++;return a}function o(a,b){return n(a,b,!0)}function p(a,b,c){var e,d=b.prototype;e=a.prototype=Object.create(d),e.constructor=a,e._super=d,c&&n(e,c)}function q(a,b){return function(){return a.apply(b,arguments)}}function r(a,b){return typeof a==g?a.apply(b?b[0]||d:d,b):a}function s(a,b){return a===d?b:a}function t(a,b,c){m(x(b),function(b){a.addEventListener(b,c,!1)})}function u(a,b,c){m(x(b),function(b){a.removeEventListener(b,c,!1)})}function v(a,b){for(;a;){if(a==b)return!0;a=a.parentNode}return!1}function w(a,b){return a.indexOf(b)>-1}function x(a){return a.trim().split(/\s+/g)}function y(a,b,c){if(a.indexOf&&!c)return a.indexOf(b);for(var d=0;d<a.length;){if(c&&a[d][c]==b||!c&&a[d]===b)return d;d++}return-1}function z(a){return Array.prototype.slice.call(a,0)}function A(a,b,c){for(var d=[],e=[],f=0;f<a.length;){var g=b?a[f][b]:a[f];y(e,g)<0&&d.push(a[f]),e[f]=g,f++}return c&&(d=b?d.sort(function(a,c){return a[b]>c[b]}):d.sort()),d}function B(a,b){for(var c,f,g=b[0].toUpperCase()+b.slice(1),h=0;h<e.length;){if(c=e[h],f=c?c+g:b,f in a)return f;h++}return d}function D(){return C++}function E(a){var b=a.ownerDocument;return b.defaultView||b.parentWindow}function ab(a,b){var c=this;this.manager=a,this.callback=b,this.element=a.element,this.target=a.options.inputTarget,this.domHandler=function(b){r(a.options.enable,[a])&&c.handler(b)},this.init()}function bb(a){var b,c=a.options.inputClass;return b=c?c:H?wb:I?Eb:G?Gb:rb,new b(a,cb)}function cb(a,b,c){var d=c.pointers.length,e=c.changedPointers.length,f=b&O&&0===d-e,g=b&(Q|R)&&0===d-e;c.isFirst=!!f,c.isFinal=!!g,f&&(a.session={}),c.eventType=b,db(a,c),a.emit("hammer.input",c),a.recognize(c),a.session.prevInput=c}function db(a,b){var c=a.session,d=b.pointers,e=d.length;c.firstInput||(c.firstInput=gb(b)),e>1&&!c.firstMultiple?c.firstMultiple=gb(b):1===e&&(c.firstMultiple=!1);var f=c.firstInput,g=c.firstMultiple,h=g?g.center:f.center,i=b.center=hb(d);b.timeStamp=j(),b.deltaTime=b.timeStamp-f.timeStamp,b.angle=lb(h,i),b.distance=kb(h,i),eb(c,b),b.offsetDirection=jb(b.deltaX,b.deltaY),b.scale=g?nb(g.pointers,d):1,b.rotation=g?mb(g.pointers,d):0,fb(c,b);var k=a.element;v(b.srcEvent.target,k)&&(k=b.srcEvent.target),b.target=k}function eb(a,b){var c=b.center,d=a.offsetDelta||{},e=a.prevDelta||{},f=a.prevInput||{};(b.eventType===O||f.eventType===Q)&&(e=a.prevDelta={x:f.deltaX||0,y:f.deltaY||0},d=a.offsetDelta={x:c.x,y:c.y}),b.deltaX=e.x+(c.x-d.x),b.deltaY=e.y+(c.y-d.y)}function fb(a,b){var f,g,h,j,c=a.lastInterval||b,e=b.timeStamp-c.timeStamp;if(b.eventType!=R&&(e>N||c.velocity===d)){var k=c.deltaX-b.deltaX,l=c.deltaY-b.deltaY,m=ib(e,k,l);g=m.x,h=m.y,f=i(m.x)>i(m.y)?m.x:m.y,j=jb(k,l),a.lastInterval=b}else f=c.velocity,g=c.velocityX,h=c.velocityY,j=c.direction;b.velocity=f,b.velocityX=g,b.velocityY=h,b.direction=j}function gb(a){for(var b=[],c=0;c<a.pointers.length;)b[c]={clientX:h(a.pointers[c].clientX),clientY:h(a.pointers[c].clientY)},c++;return{timeStamp:j(),pointers:b,center:hb(b),deltaX:a.deltaX,deltaY:a.deltaY}}function hb(a){var b=a.length;if(1===b)return{x:h(a[0].clientX),y:h(a[0].clientY)};for(var c=0,d=0,e=0;b>e;)c+=a[e].clientX,d+=a[e].clientY,e++;return{x:h(c/b),y:h(d/b)}}function ib(a,b,c){return{x:b/a||0,y:c/a||0}}function jb(a,b){return a===b?S:i(a)>=i(b)?a>0?T:U:b>0?V:W}function kb(a,b,c){c||(c=$);var d=b[c[0]]-a[c[0]],e=b[c[1]]-a[c[1]];return Math.sqrt(d*d+e*e)}function lb(a,b,c){c||(c=$);var d=b[c[0]]-a[c[0]],e=b[c[1]]-a[c[1]];return 180*Math.atan2(e,d)/Math.PI}function mb(a,b){return lb(b[1],b[0],_)-lb(a[1],a[0],_)}function nb(a,b){return kb(b[0],b[1],_)/kb(a[0],a[1],_)}function rb(){this.evEl=pb,this.evWin=qb,this.allow=!0,this.pressed=!1,ab.apply(this,arguments)}function wb(){this.evEl=ub,this.evWin=vb,ab.apply(this,arguments),this.store=this.manager.session.pointerEvents=[]}function Ab(){this.evTarget=yb,this.evWin=zb,this.started=!1,ab.apply(this,arguments)}function Bb(a,b){var c=z(a.touches),d=z(a.changedTouches);return b&(Q|R)&&(c=A(c.concat(d),"identifier",!0)),[c,d]}function Eb(){this.evTarget=Db,this.targetIds={},ab.apply(this,arguments)}function Fb(a,b){var c=z(a.touches),d=this.targetIds;if(b&(O|P)&&1===c.length)return d[c[0].identifier]=!0,[c,c];var e,f,g=z(a.changedTouches),h=[],i=this.target;if(f=c.filter(function(a){return v(a.target,i)}),b===O)for(e=0;e<f.length;)d[f[e].identifier]=!0,e++;for(e=0;e<g.length;)d[g[e].identifier]&&h.push(g[e]),b&(Q|R)&&delete d[g[e].identifier],e++;return h.length?[A(f.concat(h),"identifier",!0),h]:void 0}function Gb(){ab.apply(this,arguments);var a=q(this.handler,this);this.touch=new Eb(this.manager,a),this.mouse=new rb(this.manager,a)}function Pb(a,b){this.manager=a,this.set(b)}function Qb(a){if(w(a,Mb))return Mb;var b=w(a,Nb),c=w(a,Ob);return b&&c?Nb+" "+Ob:b||c?b?Nb:Ob:w(a,Lb)?Lb:Kb}function Yb(a){this.id=D(),this.manager=null,this.options=o(a||{},this.defaults),this.options.enable=s(this.options.enable,!0),this.state=Rb,this.simultaneous={},this.requireFail=[]}function Zb(a){return a&Wb?"cancel":a&Ub?"end":a&Tb?"move":a&Sb?"start":""}function $b(a){return a==W?"down":a==V?"up":a==T?"left":a==U?"right":""}function _b(a,b){var c=b.manager;return c?c.get(a):a}function ac(){Yb.apply(this,arguments)}function bc(){ac.apply(this,arguments),this.pX=null,this.pY=null}function cc(){ac.apply(this,arguments)}function dc(){Yb.apply(this,arguments),this._timer=null,this._input=null}function ec(){ac.apply(this,arguments)}function fc(){ac.apply(this,arguments)}function gc(){Yb.apply(this,arguments),this.pTime=!1,this.pCenter=!1,this._timer=null,this._input=null,this.count=0}function hc(a,b){return b=b||{},b.recognizers=s(b.recognizers,hc.defaults.preset),new kc(a,b)}function kc(a,b){b=b||{},this.options=o(b,hc.defaults),this.options.inputTarget=this.options.inputTarget||a,this.handlers={},this.session={},this.recognizers=[],this.element=a,this.input=bb(this),this.touchAction=new Pb(this,this.options.touchAction),lc(this,!0),m(b.recognizers,function(a){var b=this.add(new a[0](a[1]));a[2]&&b.recognizeWith(a[2]),a[3]&&b.requireFailure(a[3])},this)}function lc(a,b){var c=a.element;m(a.options.cssProps,function(a,d){c.style[B(c.style,d)]=b?a:""})}function mc(a,c){var d=b.createEvent("Event");d.initEvent(a,!0,!0),d.gesture=c,c.target.dispatchEvent(d)}var e=["","webkit","moz","MS","ms","o"],f=b.createElement("div"),g="function",h=Math.round,i=Math.abs,j=Date.now,C=1,F=/mobile|tablet|ip(ad|hone|od)|android/i,G="ontouchstart"in a,H=B(a,"PointerEvent")!==d,I=G&&F.test(navigator.userAgent),J="touch",K="pen",L="mouse",M="kinect",N=25,O=1,P=2,Q=4,R=8,S=1,T=2,U=4,V=8,W=16,X=T|U,Y=V|W,Z=X|Y,$=["x","y"],_=["clientX","clientY"];ab.prototype={handler:function(){},init:function(){this.evEl&&t(this.element,this.evEl,this.domHandler),this.evTarget&&t(this.target,this.evTarget,this.domHandler),this.evWin&&t(E(this.element),this.evWin,this.domHandler)},destroy:function(){this.evEl&&u(this.element,this.evEl,this.domHandler),this.evTarget&&u(this.target,this.evTarget,this.domHandler),this.evWin&&u(E(this.element),this.evWin,this.domHandler)}};var ob={mousedown:O,mousemove:P,mouseup:Q},pb="mousedown",qb="mousemove mouseup";p(rb,ab,{handler:function(a){var b=ob[a.type];b&O&&0===a.button&&(this.pressed=!0),b&P&&1!==a.which&&(b=Q),this.pressed&&this.allow&&(b&Q&&(this.pressed=!1),this.callback(this.manager,b,{pointers:[a],changedPointers:[a],pointerType:L,srcEvent:a}))}});var sb={pointerdown:O,pointermove:P,pointerup:Q,pointercancel:R,pointerout:R},tb={2:J,3:K,4:L,5:M},ub="pointerdown",vb="pointermove pointerup pointercancel";a.MSPointerEvent&&(ub="MSPointerDown",vb="MSPointerMove MSPointerUp MSPointerCancel"),p(wb,ab,{handler:function(a){var b=this.store,c=!1,d=a.type.toLowerCase().replace("ms",""),e=sb[d],f=tb[a.pointerType]||a.pointerType,g=f==J,h=y(b,a.pointerId,"pointerId");e&O&&(0===a.button||g)?0>h&&(b.push(a),h=b.length-1):e&(Q|R)&&(c=!0),0>h||(b[h]=a,this.callback(this.manager,e,{pointers:b,changedPointers:[a],pointerType:f,srcEvent:a}),c&&b.splice(h,1))}});var xb={touchstart:O,touchmove:P,touchend:Q,touchcancel:R},yb="touchstart",zb="touchstart touchmove touchend touchcancel";p(Ab,ab,{handler:function(a){var b=xb[a.type];if(b===O&&(this.started=!0),this.started){var c=Bb.call(this,a,b);b&(Q|R)&&0===c[0].length-c[1].length&&(this.started=!1),this.callback(this.manager,b,{pointers:c[0],changedPointers:c[1],pointerType:J,srcEvent:a})}}});var Cb={touchstart:O,touchmove:P,touchend:Q,touchcancel:R},Db="touchstart touchmove touchend touchcancel";p(Eb,ab,{handler:function(a){var b=Cb[a.type],c=Fb.call(this,a,b);c&&this.callback(this.manager,b,{pointers:c[0],changedPointers:c[1],pointerType:J,srcEvent:a})}}),p(Gb,ab,{handler:function(a,b,c){var d=c.pointerType==J,e=c.pointerType==L;if(d)this.mouse.allow=!1;else if(e&&!this.mouse.allow)return;b&(Q|R)&&(this.mouse.allow=!0),this.callback(a,b,c)},destroy:function(){this.touch.destroy(),this.mouse.destroy()}});var Hb=B(f.style,"touchAction"),Ib=Hb!==d,Jb="compute",Kb="auto",Lb="manipulation",Mb="none",Nb="pan-x",Ob="pan-y";Pb.prototype={set:function(a){a==Jb&&(a=this.compute()),Ib&&(this.manager.element.style[Hb]=a),this.actions=a.toLowerCase().trim()},update:function(){this.set(this.manager.options.touchAction)},compute:function(){var a=[];return m(this.manager.recognizers,function(b){r(b.options.enable,[b])&&(a=a.concat(b.getTouchAction()))}),Qb(a.join(" "))},preventDefaults:function(a){if(!Ib){var b=a.srcEvent,c=a.offsetDirection;if(this.manager.session.prevented)return b.preventDefault(),void 0;var d=this.actions,e=w(d,Mb),f=w(d,Ob),g=w(d,Nb);return e||f&&c&X||g&&c&Y?this.preventSrc(b):void 0}},preventSrc:function(a){this.manager.session.prevented=!0,a.preventDefault()}};var Rb=1,Sb=2,Tb=4,Ub=8,Vb=Ub,Wb=16,Xb=32;Yb.prototype={defaults:{},set:function(a){return n(this.options,a),this.manager&&this.manager.touchAction.update(),this},recognizeWith:function(a){if(l(a,"recognizeWith",this))return this;var b=this.simultaneous;return a=_b(a,this),b[a.id]||(b[a.id]=a,a.recognizeWith(this)),this},dropRecognizeWith:function(a){return l(a,"dropRecognizeWith",this)?this:(a=_b(a,this),delete this.simultaneous[a.id],this)},requireFailure:function(a){if(l(a,"requireFailure",this))return this;var b=this.requireFail;return a=_b(a,this),-1===y(b,a)&&(b.push(a),a.requireFailure(this)),this},dropRequireFailure:function(a){if(l(a,"dropRequireFailure",this))return this;a=_b(a,this);var b=y(this.requireFail,a);return b>-1&&this.requireFail.splice(b,1),this},hasRequireFailures:function(){return this.requireFail.length>0},canRecognizeWith:function(a){return!!this.simultaneous[a.id]},emit:function(a){function d(d){b.manager.emit(b.options.event+(d?Zb(c):""),a)}var b=this,c=this.state;Ub>c&&d(!0),d(),c>=Ub&&d(!0)},tryEmit:function(a){return this.canEmit()?this.emit(a):(this.state=Xb,void 0)},canEmit:function(){for(var a=0;a<this.requireFail.length;){if(!(this.requireFail[a].state&(Xb|Rb)))return!1;a++}return!0},recognize:function(a){var b=n({},a);return r(this.options.enable,[this,b])?(this.state&(Vb|Wb|Xb)&&(this.state=Rb),this.state=this.process(b),this.state&(Sb|Tb|Ub|Wb)&&this.tryEmit(b),void 0):(this.reset(),this.state=Xb,void 0)},process:function(){},getTouchAction:function(){},reset:function(){}},p(ac,Yb,{defaults:{pointers:1},attrTest:function(a){var b=this.options.pointers;return 0===b||a.pointers.length===b},process:function(a){var b=this.state,c=a.eventType,d=b&(Sb|Tb),e=this.attrTest(a);return d&&(c&R||!e)?b|Wb:d||e?c&Q?b|Ub:b&Sb?b|Tb:Sb:Xb}}),p(bc,ac,{defaults:{event:"pan",threshold:10,pointers:1,direction:Z},getTouchAction:function(){var a=this.options.direction,b=[];return a&X&&b.push(Ob),a&Y&&b.push(Nb),b},directionTest:function(a){var b=this.options,c=!0,d=a.distance,e=a.direction,f=a.deltaX,g=a.deltaY;return e&b.direction||(b.direction&X?(e=0===f?S:0>f?T:U,c=f!=this.pX,d=Math.abs(a.deltaX)):(e=0===g?S:0>g?V:W,c=g!=this.pY,d=Math.abs(a.deltaY))),a.direction=e,c&&d>b.threshold&&e&b.direction},attrTest:function(a){return ac.prototype.attrTest.call(this,a)&&(this.state&Sb||!(this.state&Sb)&&this.directionTest(a))},emit:function(a){this.pX=a.deltaX,this.pY=a.deltaY;var b=$b(a.direction);b&&this.manager.emit(this.options.event+b,a),this._super.emit.call(this,a)}}),p(cc,ac,{defaults:{event:"pinch",threshold:0,pointers:2},getTouchAction:function(){return[Mb]},attrTest:function(a){return this._super.attrTest.call(this,a)&&(Math.abs(a.scale-1)>this.options.threshold||this.state&Sb)},emit:function(a){if(this._super.emit.call(this,a),1!==a.scale){var b=a.scale<1?"in":"out";this.manager.emit(this.options.event+b,a)}}}),p(dc,Yb,{defaults:{event:"press",pointers:1,time:500,threshold:5},getTouchAction:function(){return[Kb]},process:function(a){var b=this.options,c=a.pointers.length===b.pointers,d=a.distance<b.threshold,e=a.deltaTime>b.time;if(this._input=a,!d||!c||a.eventType&(Q|R)&&!e)this.reset();else if(a.eventType&O)this.reset(),this._timer=k(function(){this.state=Vb,this.tryEmit()},b.time,this);else if(a.eventType&Q)return Vb;return Xb},reset:function(){clearTimeout(this._timer)},emit:function(a){this.state===Vb&&(a&&a.eventType&Q?this.manager.emit(this.options.event+"up",a):(this._input.timeStamp=j(),this.manager.emit(this.options.event,this._input)))}}),p(ec,ac,{defaults:{event:"rotate",threshold:0,pointers:2},getTouchAction:function(){return[Mb]},attrTest:function(a){return this._super.attrTest.call(this,a)&&(Math.abs(a.rotation)>this.options.threshold||this.state&Sb)}}),p(fc,ac,{defaults:{event:"swipe",threshold:10,velocity:.65,direction:X|Y,pointers:1},getTouchAction:function(){return bc.prototype.getTouchAction.call(this)},attrTest:function(a){var c,b=this.options.direction;return b&(X|Y)?c=a.velocity:b&X?c=a.velocityX:b&Y&&(c=a.velocityY),this._super.attrTest.call(this,a)&&b&a.direction&&a.distance>this.options.threshold&&i(c)>this.options.velocity&&a.eventType&Q},emit:function(a){var b=$b(a.direction);b&&this.manager.emit(this.options.event+b,a),this.manager.emit(this.options.event,a)}}),p(gc,Yb,{defaults:{event:"tap",pointers:1,taps:1,interval:300,time:250,threshold:2,posThreshold:10},getTouchAction:function(){return[Lb]},process:function(a){var b=this.options,c=a.pointers.length===b.pointers,d=a.distance<b.threshold,e=a.deltaTime<b.time;if(this.reset(),a.eventType&O&&0===this.count)return this.failTimeout();if(d&&e&&c){if(a.eventType!=Q)return this.failTimeout();var f=this.pTime?a.timeStamp-this.pTime<b.interval:!0,g=!this.pCenter||kb(this.pCenter,a.center)<b.posThreshold;this.pTime=a.timeStamp,this.pCenter=a.center,g&&f?this.count+=1:this.count=1,this._input=a;var h=this.count%b.taps;if(0===h)return this.hasRequireFailures()?(this._timer=k(function(){this.state=Vb,this.tryEmit()},b.interval,this),Sb):Vb}return Xb},failTimeout:function(){return this._timer=k(function(){this.state=Xb},this.options.interval,this),Xb},reset:function(){clearTimeout(this._timer)},emit:function(){this.state==Vb&&(this._input.tapCount=this.count,this.manager.emit(this.options.event,this._input))}}),hc.VERSION="2.0.4",hc.defaults={domEvents:!1,touchAction:Jb,enable:!0,inputTarget:null,inputClass:null,preset:[[ec,{enable:!1}],[cc,{enable:!1},["rotate"]],[fc,{direction:X}],[bc,{direction:X},["swipe"]],[gc],[gc,{event:"doubletap",taps:2},["tap"]],[dc]],cssProps:{userSelect:"default",touchSelect:"none",touchCallout:"none",contentZooming:"none",userDrag:"none",tapHighlightColor:"rgba(0,0,0,0)"}};var ic=1,jc=2;kc.prototype={set:function(a){return n(this.options,a),a.touchAction&&this.touchAction.update(),a.inputTarget&&(this.input.destroy(),this.input.target=a.inputTarget,this.input.init()),this},stop:function(a){this.session.stopped=a?jc:ic},recognize:function(a){var b=this.session;if(!b.stopped){this.touchAction.preventDefaults(a);var c,d=this.recognizers,e=b.curRecognizer;(!e||e&&e.state&Vb)&&(e=b.curRecognizer=null);for(var f=0;f<d.length;)c=d[f],b.stopped===jc||e&&c!=e&&!c.canRecognizeWith(e)?c.reset():c.recognize(a),!e&&c.state&(Sb|Tb|Ub)&&(e=b.curRecognizer=c),f++}},get:function(a){if(a instanceof Yb)return a;for(var b=this.recognizers,c=0;c<b.length;c++)if(b[c].options.event==a)return b[c];return null},add:function(a){if(l(a,"add",this))return this;var b=this.get(a.options.event);return b&&this.remove(b),this.recognizers.push(a),a.manager=this,this.touchAction.update(),a},remove:function(a){if(l(a,"remove",this))return this;var b=this.recognizers;return a=this.get(a),b.splice(y(b,a),1),this.touchAction.update(),this},on:function(a,b){var c=this.handlers;return m(x(a),function(a){c[a]=c[a]||[],c[a].push(b)}),this},off:function(a,b){var c=this.handlers;return m(x(a),function(a){b?c[a].splice(y(c[a],b),1):delete c[a]}),this},emit:function(a,b){this.options.domEvents&&mc(a,b);var c=this.handlers[a]&&this.handlers[a].slice();if(c&&c.length){b.type=a,b.preventDefault=function(){b.srcEvent.preventDefault()};for(var d=0;d<c.length;)c[d](b),d++}},destroy:function(){this.element&&lc(this,!1),this.handlers={},this.session={},this.input.destroy(),this.element=null}},n(hc,{INPUT_START:O,INPUT_MOVE:P,INPUT_END:Q,INPUT_CANCEL:R,STATE_POSSIBLE:Rb,STATE_BEGAN:Sb,STATE_CHANGED:Tb,STATE_ENDED:Ub,STATE_RECOGNIZED:Vb,STATE_CANCELLED:Wb,STATE_FAILED:Xb,DIRECTION_NONE:S,DIRECTION_LEFT:T,DIRECTION_RIGHT:U,DIRECTION_UP:V,DIRECTION_DOWN:W,DIRECTION_HORIZONTAL:X,DIRECTION_VERTICAL:Y,DIRECTION_ALL:Z,Manager:kc,Input:ab,TouchAction:Pb,TouchInput:Eb,MouseInput:rb,PointerEventInput:wb,TouchMouseInput:Gb,SingleTouchInput:Ab,Recognizer:Yb,AttrRecognizer:ac,Tap:gc,Pan:bc,Swipe:fc,Pinch:cc,Rotate:ec,Press:dc,on:t,off:u,each:m,merge:o,extend:n,inherit:p,bindFn:q,prefixed:B}),typeof define==g&&define.amd?define(function(){return hc}):"undefined"!=typeof module&&module.exports?module.exports=hc:a[c]=hc}(window,document,"Hammer");;(function(factory) {
    if (typeof define === 'function' && define.amd) {
        define(['jquery', 'hammerjs'], factory);
    } else if (typeof exports === 'object') {
        factory(require('jquery'), require('hammerjs'));
    } else {
        factory(jQuery, Hammer);
    }
}(function($, Hammer) {
    function hammerify(el, options) {
        var $el = $(el);
        if(!$el.data("hammer")) {
            $el.data("hammer", new Hammer($el[0], options));
        }
    }

    $.fn.hammer = function(options) {
        return this.each(function() {
            hammerify(this, options);
        });
    };

    // extend the emit method to also trigger jQuery events
    Hammer.Manager.prototype.emit = (function(originalEmit) {
        return function(type, data) {
            originalEmit.call(this, type, data);
            $(this.element).trigger({
                type: type,
                gesture: data
            });
        };
    })(Hammer.Manager.prototype.emit);
}));
;Materialize = {};

// Unique ID
Materialize.guid = (function() {
  function s4() {
    return Math.floor((1 + Math.random()) * 0x10000)
      .toString(16)
      .substring(1);
  }
  return function() {
    return s4() + s4() + '-' + s4() + '-' + s4() + '-' +
           s4() + '-' + s4() + s4() + s4();
  };
})();

Materialize.elementOrParentIsFixed = function(element) {
    var $element = $(element);
    var $checkElements = $element.add($element.parents());
    var isFixed = false;
    $checkElements.each(function(){
        if ($(this).css("position") === "fixed") {
            isFixed = true;
            return false;
        }
    });
    return isFixed;
}

// Velocity has conflicts when loaded with jQuery, this will check for it
var Vel;
if ($) { Vel = $.Velocity } else { Vel = Velocity};
;(function ($) {
  $.fn.collapsible = function(options) {
    var defaults = {
        accordion: undefined
    };

    options = $.extend(defaults, options);


    return this.each(function() {

      var $this = $(this);

      var $panel_headers = $(this).find('> li > .collapsible-header');

      var collapsible_type = $this.data("collapsible");

      // Turn off any existing event handlers
       $this.off('click.collapse', '.collapsible-header');
       $panel_headers.off('click.collapse');


       /****************
       Helper Functions
       ****************/

      // Accordion Open
      function accordionOpen(object) {
        $panel_headers = $this.find('> li > .collapsible-header');
        if (object.hasClass('active')) {
            object.parent().addClass('active');
        }
        else {
            object.parent().removeClass('active');
        }
        if (object.parent().hasClass('active')){
          object.siblings('.collapsible-body').stop(true,false).slideDown({ duration: 350, easing: "easeOutQuart", queue: false, complete: function() {$(this).css('height', '')}});
        }
        else{
          object.siblings('.collapsible-body').stop(true,false).slideUp({ duration: 350, easing: "easeOutQuart", queue: false, complete: function() {$(this).css('height', '')}});
        }

        $panel_headers.not(object).removeClass('active').parent().removeClass('active');
        $panel_headers.not(object).parent().children('.collapsible-body').stop(true,false).slideUp(
          {
            duration: 350,
            easing: "easeOutQuart",
            queue: false,
            complete:
              function() {
                $(this).css('height', '')
              }
          });
      }

      // Expandable Open
      function expandableOpen(object) {
        if (object.hasClass('active')) {
            object.parent().addClass('active');
        }
        else {
            object.parent().removeClass('active');
        }
        if (object.parent().hasClass('active')){
          object.siblings('.collapsible-body').stop(true,false).slideDown({ duration: 350, easing: "easeOutQuart", queue: false, complete: function() {$(this).css('height', '')}});
        }
        else{
          object.siblings('.collapsible-body').stop(true,false).slideUp({ duration: 350, easing: "easeOutQuart", queue: false, complete: function() {$(this).css('height', '')}});
        }
      }

      /**
       * Check if object is children of panel header
       * @param  {Object}  object Jquery object
       * @return {Boolean} true if it is children
       */
      function isChildrenOfPanelHeader(object) {

        var panelHeader = getPanelHeader(object);

        return panelHeader.length > 0;
      }

      /**
       * Get panel header from a children element
       * @param  {Object} object Jquery object
       * @return {Object} panel header object
       */
      function getPanelHeader(object) {

        return object.closest('li > .collapsible-header');
      }

      /*****  End Helper Functions  *****/



      if (options.accordion || collapsible_type == "accordion" || collapsible_type == undefined) { // Handle Accordion
        // Add click handler to only direct collapsible header children
        $panel_headers = $this.find('> li > .collapsible-header');
        $panel_headers.on('click.collapse', function (e) {
          var element = $(e.target);

          if (isChildrenOfPanelHeader(element)) {
            element = getPanelHeader(element);
          }

          element.toggleClass('active');
          accordionOpen(element);
        });
        // Open first active
        accordionOpen($panel_headers.filter('.active').first());
      }
      else { // Handle Expandables
        $panel_headers.each(function () {
          // Add click handler to only direct collapsible header children
          $(this).on('click.collapse', function (e) {
            var element = $(e.target);
            if (isChildrenOfPanelHeader(element)) {
              element = getPanelHeader(element);
            }
            element.toggleClass('active');
            expandableOpen(element);
          });
          // Open any bodies that have the active class
          if ($(this).hasClass('active')) {
            expandableOpen($(this));
          }

        });
      }

    });
  };

  $(document).ready(function(){
    $('.collapsible').collapsible();
  });
}( jQuery ));;(function ($) {

  // Add posibility to scroll to selected option
  // usefull for select for example
  $.fn.scrollTo = function(elem) {
    $(this).scrollTop($(this).scrollTop() - $(this).offset().top + $(elem).offset().top);
    return this;
  };

  $.fn.dropdown = function (option) {
    var defaults = {
      inDuration: 300,
      outDuration: 225,
      constrain_width: true, // Constrains width of dropdown to the activator
      hover: false,
      gutter: 0, // Spacing from edge
      belowOrigin: false
    }

    this.each(function(){
    var origin = $(this);
    var options = $.extend({}, defaults, option);

    // Dropdown menu
    var activates = $("#"+ origin.attr('data-activates'));

    function updateOptions() {
      if (origin.data('induration') != undefined)
        options.inDuration = origin.data('inDuration');
      if (origin.data('outduration') != undefined)
        options.outDuration = origin.data('outDuration');
      if (origin.data('constrainwidth') != undefined)
        options.constrain_width = origin.data('constrainwidth');
      if (origin.data('hover') != undefined)
        options.hover = origin.data('hover');
      if (origin.data('gutter') != undefined)
        options.gutter = origin.data('gutter');
      if (origin.data('beloworigin') != undefined)
        options.belowOrigin = origin.data('beloworigin');
    }

    updateOptions();

    // Attach dropdown to its activator
    origin.after(activates);

    /*
      Helper function to position and resize dropdown.
      Used in hover and click handler.
    */
    function placeDropdown() {
      // Check html data attributes
      updateOptions();

      // Set Dropdown state
      activates.addClass('active');

      // Constrain width
      if (options.constrain_width == true) {
        activates.css('width', origin.outerWidth());
      }
      var offset = 0;
      if (options.belowOrigin == true) {
        offset = origin.height();
      }

      // Handle edge alignment
      var offsetLeft = origin.offset().left;
      var width_difference = 0;
      var gutter_spacing = options.gutter;


      if (offsetLeft + activates.innerWidth() > $(window).width()) {
        width_difference = origin.innerWidth() - activates.innerWidth();
        gutter_spacing = gutter_spacing * -1;
      }

      // Position dropdown
      activates.css({
        position: 'absolute',
        top: origin.position().top + offset,
        left: origin.position().left + width_difference + gutter_spacing
      });



      // Show dropdown
      activates.stop(true, true).css('opacity', 0)
        .slideDown({
        queue: false,
        duration: options.inDuration,
        easing: 'easeOutCubic',
        complete: function() {
          $(this).css('height', '');
        }
      })
        .animate( {opacity: 1}, {queue: false, duration: options.inDuration, easing: 'easeOutSine'});
    }

    function hideDropdown() {
      activates.fadeOut(options.outDuration);
      activates.removeClass('active');
    }

    // Hover
    if (options.hover) {
      var open = false;
      origin.unbind('click.' + origin.attr('id'));
      // Hover handler to show dropdown
      origin.on('mouseenter', function(e){ // Mouse over
        if (open === false) {
          placeDropdown();
          open = true
        }
      });
      origin.on('mouseleave', function(e){
        // If hover on origin then to something other than dropdown content, then close
        if(!$(e.toElement).closest('.dropdown-content').is(activates)) {
          activates.stop(true, true);
          hideDropdown();
          open = false;
        }
      });

      activates.on('mouseleave', function(e){ // Mouse out
        if(!$(e.toElement).closest('.dropdown-button').is(origin)) {
          activates.stop(true, true);
          hideDropdown();
          open = false;
        }
      });

    // Click
    } else {

      // Click handler to show dropdown
      origin.unbind('click.' + origin.attr('id'));
      origin.bind('click.'+origin.attr('id'), function(e){

        if ( origin[0] == e.currentTarget && ($(e.target).closest('.dropdown-content').length === 0) ) {
          e.preventDefault(); // Prevents button click from moving window
          placeDropdown();

        }
        // If origin is clicked and menu is open, close menu
        else {
          if (origin.hasClass('active')) {
            hideDropdown();
            $(document).unbind('click.' + activates.attr('id'));
          }
        }
        // If menu open, add click close handler to document
        if (activates.hasClass('active')) {
          $(document).bind('click.'+ activates.attr('id'), function (e) {
            if (!activates.is(e.target) && !origin.is(e.target) && (!origin.find(e.target).length > 0) ) {
              hideDropdown();
              $(document).unbind('click.' + activates.attr('id'));
            }
          });
        }
      });

    } // End else

    // Listen to open and close event - useful for select component
    origin.on('open', placeDropdown);
    origin.on('close', hideDropdown);


   });
  }; // End dropdown plugin

  $(document).ready(function(){
    $('.dropdown-button').dropdown();
  });
}( jQuery ));
;(function($) {
  $.fn.extend({
    openModal: function(options) {
      var modal = this;
      var overlay = $('<div id="lean-overlay"></div>');
      $("body").append(overlay);

      var defaults = {
        opacity: 0.5,
        in_duration: 350,
        out_duration: 250,
        ready: undefined,
        complete: undefined,
        dismissible: true
      }

      // Override defaults
      options = $.extend(defaults, options);

      if (options.dismissible) {
        $("#lean-overlay").click(function() {
          $(modal).closeModal(options);
        });
        // Return on ESC
        $(document).on('keyup.leanModal', function(e) {
          if (e.keyCode === 27) {   // ESC key
            $(modal).closeModal(options);
          }
        });
      }

      $(modal).find(".modal-close").click(function(e) {
        $(modal).closeModal(options);
      });

      $("#lean-overlay").css({ display : "block", opacity : 0 });

      $(modal).css({
        display : "block",
        opacity: 0
      });

      $("#lean-overlay").velocity({opacity: options.opacity}, {duration: options.in_duration, queue: false, ease: "easeOutCubic"});


      // Define Bottom Sheet animation
      if ($(modal).hasClass('bottom-sheet')) {
        $(modal).velocity({bottom: "0", opacity: 1}, {
          duration: options.in_duration,
          queue: false,
          ease: "easeOutCubic",
          // Handle modal ready callback
          complete: function() {
            if (typeof(options.ready) === "function") {
              options.ready();
            }
          }
        });
      }
      else {
        $(modal).css({ top: "4%" });
        $(modal).velocity({top: "10%", opacity: 1}, {
          duration: options.in_duration,
          queue: false,
          ease: "easeOutCubic",
          // Handle modal ready callback
          complete: function() {
            if (typeof(options.ready) === "function") {
              options.ready();
            }
          }
        });
      }


    }
  });

  $.fn.extend({
    closeModal: function(options) {
      var defaults = {
        out_duration: 250,
        complete: undefined
      }
      var options = $.extend(defaults, options);

      $('.modal-close').off();
      $(document).off('keyup.leanModal');

      $("#lean-overlay").velocity( { opacity: 0}, {duration: options.out_duration, queue: false, ease: "easeOutQuart"});


      // Define Bottom Sheet animation
      if ($(this).hasClass('bottom-sheet')) {
        $(this).velocity({bottom: "-100%", opacity: 0}, {
          duration: options.out_duration,
          queue: false,
          ease: "easeOutCubic",
          // Handle modal ready callback
          complete: function() {
            $("#lean-overlay").css({display:"none"});

            // Call complete callback
            if (typeof(options.complete) === "function") {
              options.complete();
            }
            $('#lean-overlay').remove();
          }
        });
      }
      else {
        $(this).fadeOut(options.out_duration, function() {
          $(this).css({ top: 0});
          $("#lean-overlay").css({display:"none"});

          // Call complete callback
          if (typeof(options.complete) === "function") {
            options.complete();
          }
          $('#lean-overlay').remove();
        });
      }

    }
  })

  $.fn.extend({
    leanModal: function(options) {
      return this.each(function() {
        // Close Handlers
        $(this).click(function(e) {
          var modal_id = $(this).attr("href") || '#' + $(this).data('target');
          $(modal_id).openModal(options);
          e.preventDefault();
        }); // done set on click
      }); // done return
    }
  });
})(jQuery);
;(function ($) {

  $.fn.materialbox = function () {

    return this.each(function() {

      if ($(this).hasClass('intialized')) {
        return;
      }

      $(this).addClass('intialized');

      var overlayActive = false;
      var doneAnimating = true;
      var inDuration = 275;
      var outDuration = 200;
      var origin = $(this);
      var placeholder = $('<div></div>').addClass('material-placeholder');
      var originalWidth = 0;
      var originalHeight = 0;
      origin.wrap(placeholder);
      
      
      origin.on('click', function(){
        var placeholder = origin.parent('.material-placeholder');
        var windowWidth = window.innerWidth;
        var windowHeight = window.innerHeight;
        var originalWidth = origin.width();
        var originalHeight = origin.height();
        

        // If already modal, return to original
        if (doneAnimating === false) {
          returnToOriginal();
          return false;
        }
        else if (overlayActive && doneAnimating===true) {
          returnToOriginal();
          return false;
        }
        

        // Set states
        doneAnimating = false;
        origin.addClass('active');
        overlayActive = true;

        // Set positioning for placeholder

        placeholder.css({
          width: placeholder[0].getBoundingClientRect().width,
          height: placeholder[0].getBoundingClientRect().height,
          position: 'relative',
          top: 0,
          left: 0
        });
        
        

        // Set css on origin
        origin.css({position: 'absolute', 'z-index': 1000})
        .data('width', originalWidth)
        .data('height', originalHeight);

        // Add overlay
        var overlay = $('<div id="materialbox-overlay"></div>')
          .css({
            opacity: 0
          })
          .click(function(){
            if (doneAnimating === true)
            returnToOriginal();
          });
          // Animate Overlay
          $('body').append(overlay);
          overlay.velocity({opacity: 1}, {duration: inDuration, queue: false, easing: 'easeOutQuad'}
            );


        // Add and animate caption if it exists
        if (origin.data('caption') !== "") {
          var $photo_caption = $('<div class="materialbox-caption"></div>');
          $photo_caption.text(origin.data('caption'));
          $('body').append($photo_caption);
          $photo_caption.css({ "display": "inline" });
          $photo_caption.velocity({opacity: 1}, {duration: inDuration, queue: false, easing: 'easeOutQuad'})
        }



        // Resize Image
        var ratio = 0;
        var widthPercent = originalWidth / windowWidth;
        var heightPercent = originalHeight / windowHeight;
        var newWidth = 0;
        var newHeight = 0;

        if (widthPercent > heightPercent) {
          ratio = originalHeight / originalWidth;
          newWidth = windowWidth * 0.9;
          newHeight = windowWidth * 0.9 * ratio;
        }
        else {
          ratio = originalWidth / originalHeight;
          newWidth = (windowHeight * 0.9) * ratio;
          newHeight = windowHeight * 0.9;
        }

        // Animate image + set z-index
        if(origin.hasClass('responsive-img')) {
          origin.velocity({'max-width': newWidth, 'width': originalWidth}, {duration: 0, queue: false,
            complete: function(){
              origin.css({left: 0, top: 0})
              .velocity(
                {
                  height: newHeight,
                  width: newWidth,
                  left: $(document).scrollLeft() + windowWidth/2 - origin.parent('.material-placeholder').offset().left - newWidth/2,
                  top: $(document).scrollTop() + windowHeight/2 - origin.parent('.material-placeholder').offset().top - newHeight/ 2
                },
                {
                  duration: inDuration,
                  queue: false,
                  easing: 'easeOutQuad',
                  complete: function(){doneAnimating = true;}
                }
              );
            } // End Complete
          }); // End Velocity
        }
        else {
          origin.css('left', 0)
          .css('top', 0)
          .velocity(
            {
              height: newHeight,
              width: newWidth,
              left: $(document).scrollLeft() + windowWidth/2 - origin.parent('.material-placeholder').offset().left - newWidth/2,
              top: $(document).scrollTop() + windowHeight/2 - origin.parent('.material-placeholder').offset().top - newHeight/ 2
            },
            {
              duration: inDuration,
              queue: false,
              easing: 'easeOutQuad',
              complete: function(){doneAnimating = true;}
            }
            ); // End Velocity
        }

    }); // End origin on click


      // Return on scroll
      $(window).scroll(function() {
        if (overlayActive ) {
          returnToOriginal();
        }
      });

      // Return on ESC
      $(document).keyup(function(e) {

        if (e.keyCode === 27 && doneAnimating === true) {   // ESC key
          if (overlayActive) {
            returnToOriginal();
          }
        }
      });


      // This function returns the modaled image to the original spot
      function returnToOriginal() {

          doneAnimating = false;

          var placeholder = origin.parent('.material-placeholder');
          var windowWidth = window.innerWidth;
          var windowHeight = window.innerHeight;
          var originalWidth = origin.data('width');
          var originalHeight = origin.data('height');
       
          origin.velocity("stop", true);
          $('#materialbox-overlay').velocity("stop", true);
          $('.materialbox-caption').velocity("stop", true);


          $('#materialbox-overlay').velocity({opacity: 0}, {
            duration: outDuration, // Delay prevents animation overlapping
            queue: false, easing: 'easeOutQuad',
            complete: function(){
              // Remove Overlay
              overlayActive = false;
              $(this).remove();
            }
          });

          // Resize Image
          origin.velocity(
            {
              width: originalWidth,
              height: originalHeight,
              left: 0,
              top: 0
            },
            {
              duration: outDuration,
              queue: false, easing: 'easeOutQuad'
            }
          );

          // Remove Caption + reset css settings on image
          $('.materialbox-caption').velocity({opacity: 0}, {
            duration: outDuration, // Delay prevents animation overlapping
            queue: false, easing: 'easeOutQuad',
            complete: function(){
              placeholder.css({
                height: '',
                width: '',
                position: '',
                top: '',
                left: ''
              });

              origin.css({
                height: '',
                top: '',
                left: '',
                width: '',
                'max-width': '',
                position: '',
                'z-index': ''
              });

              // Remove class
              origin.removeClass('active');
              doneAnimating = true;
              $(this).remove();
            }
          });

        }
        });
};

$(document).ready(function(){
  $('.materialboxed').materialbox();
});

}( jQuery ));
;(function ($) {

    $.fn.parallax = function () {
      var window_width = $(window).width();
      // Parallax Scripts
      return this.each(function(i) {
        var $this = $(this);
        $this.addClass('parallax');

        function updateParallax(initial) {
          var container_height;
          if (window_width < 601) {
            container_height = ($this.height() > 0) ? $this.height() : $this.children("img").height();
          }
          else {
            container_height = ($this.height() > 0) ? $this.height() : 500;
          }
          var $img = $this.children("img").first();
          var img_height = $img.height();
          var parallax_dist = img_height - container_height;
          var bottom = $this.offset().top + container_height;
          var top = $this.offset().top;
          var scrollTop = $(window).scrollTop();
          var windowHeight = window.innerHeight;
          var windowBottom = scrollTop + windowHeight;
          var percentScrolled = (windowBottom - top) / (container_height + windowHeight);
          var parallax = Math.round((parallax_dist * percentScrolled));

          if (initial) {
            $img.css('display', 'block');
          }
          if ((bottom > scrollTop) && (top < (scrollTop + windowHeight))) {
            $img.css('transform', "translate3D(-50%," + parallax + "px, 0)");
          }

        }

        // Wait for image load
        $this.children("img").one("load", function() {
          updateParallax(true);
        }).each(function() {
          if(this.complete) $(this).load();
        });

        $(window).scroll(function() {
          window_width = $(window).width();
          updateParallax(false);
        });

        $(window).resize(function() {
          window_width = $(window).width();
          updateParallax(false);
        });

      });

    };
}( jQuery ));;(function ($) {

  var methods = {
    init : function() {
      return this.each(function() {

      // For each set of tabs, we want to keep track of
      // which tab is active and its associated content
      var $this = $(this),
          window_width = $(window).width();

      $this.width('100%');
      // Set Tab Width for each tab
      var $num_tabs = $(this).children('li').length;
      $this.children('li').each(function() {
        $(this).width((100/$num_tabs)+'%');
      });
      var $active, $content, $links = $this.find('li.tab a'),
          $tabs_width = $this.width(),
          $tab_width = $this.find('li').first().outerWidth(),
          $index = 0;

      // If the location.hash matches one of the links, use that as the active tab.
      $active = $($links.filter('[href="'+location.hash+'"]'));

      // If no match is found, use the first link or any with class 'active' as the initial active tab.
      if ($active.length === 0) {
          $active = $(this).find('li.tab a.active').first();
      }
      if ($active.length === 0) {
        $active = $(this).find('li.tab a').first();
      }

      $active.addClass('active');
      $index = $links.index($active);
      if ($index < 0) {
        $index = 0;
      }

      $content = $($active[0].hash);

      // append indicator then set indicator width to tab width
      $this.append('<div class="indicator"></div>');
      var $indicator = $this.find('.indicator');
      if ($this.is(":visible")) {
        $indicator.css({"right": $tabs_width - (($index + 1) * $tab_width)});
        $indicator.css({"left": $index * $tab_width});
      }
      $(window).resize(function () {
        $tabs_width = $this.width();
        $tab_width = $this.find('li').first().outerWidth();
        if ($index < 0) {
          $index = 0;
        }
        if ($tab_width !== 0 && $tabs_width !== 0) {
          $indicator.css({"right": $tabs_width - (($index + 1) * $tab_width)});
          $indicator.css({"left": $index * $tab_width});
        }
      });

      // Hide the remaining content
      $links.not($active).each(function () {
        $(this.hash).hide();
      });


      // Bind the click event handler
      $this.on('click', 'a', function(e){
        $tabs_width = $this.width();
        $tab_width = $this.find('li').first().outerWidth();

        // Make the old tab inactive.
        $active.removeClass('active');
        $content.hide();

        // Update the variables with the new link and content
        $active = $(this);
        $content = $(this.hash);
        $links = $this.find('li.tab a');

        // Make the tab active.
        $active.addClass('active');
        var $prev_index = $index;
        $index = $links.index($(this));
        if ($index < 0) {
          $index = 0;
        }
        // Change url to current tab
        // window.location.hash = $active.attr('href');

        $content.show();

        // Update indicator
        if (($index - $prev_index) >= 0) {
          $indicator.velocity({"right": $tabs_width - (($index + 1) * $tab_width)}, { duration: 300, queue: false, easing: 'easeOutQuad'});
          $indicator.velocity({"left": $index * $tab_width}, {duration: 300, queue: false, easing: 'easeOutQuad', delay: 90});

        }
        else {
          $indicator.velocity({"left": $index * $tab_width}, { duration: 300, queue: false, easing: 'easeOutQuad'});
          $indicator.velocity({"right": $tabs_width - (($index + 1) * $tab_width)}, {duration: 300, queue: false, easing: 'easeOutQuad', delay: 90});
        }

        // Prevent the anchor's default click action
        e.preventDefault();
      });
    });

    },
    select_tab : function( id ) {
      this.find('a[href="#' + id + '"]').trigger('click');
    }
  };

  $.fn.tabs = function(methodOrOptions) {
    if ( methods[methodOrOptions] ) {
      return methods[ methodOrOptions ].apply( this, Array.prototype.slice.call( arguments, 1 ));
    } else if ( typeof methodOrOptions === 'object' || ! methodOrOptions ) {
      // Default to "init"
      return methods.init.apply( this, arguments );
    } else {
      $.error( 'Method ' +  methodOrOptions + ' does not exist on jQuery.tooltip' );
    }
  };

  $(document).ready(function(){
    $('ul.tabs').tabs();
  });
}( jQuery ));
;(function ($) {
    $.fn.tooltip = function (options) {
        var timeout = null,
    		counter = null,
    		started = false,
    		counterInterval = null,
    		margin = 5;

      // Defaults
      var defaults = {
        delay: 350
      };
      options = $.extend(defaults, options);

      //Remove previously created html
      $('.material-tooltip').remove();

      return this.each(function(){
        var origin = $(this);

      // Create Text span
      var tooltip_text = $('<span></span>').text(origin.attr('data-tooltip'));

      // Create tooltip
      var newTooltip = $('<div></div>');
      newTooltip.addClass('material-tooltip').append(tooltip_text);
      newTooltip.appendTo($('body'));

      var backdrop = $('<div></div>').addClass('backdrop');
      backdrop.appendTo(newTooltip);
      backdrop.css({ top: 0, left:0 });


     //Destroy previously binded events
    $(this).off('mouseenter mouseleave');
      // Mouse In
    $(this).on({
      mouseenter: function(e) {
        var tooltip_delay = origin.data("delay");
        tooltip_delay = (tooltip_delay == undefined || tooltip_delay == "") ? options.delay : tooltip_delay;
        counter = 0;
        counterInterval = setInterval(function(){
          counter += 10;
          if (counter >= tooltip_delay && started == false) {
            started = true
            newTooltip.css({ display: 'block', left: '0px', top: '0px' });

            // Set Tooltip text
            newTooltip.children('span').text(origin.attr('data-tooltip'));

            // Tooltip positioning
            var originWidth = origin.outerWidth();
            var originHeight = origin.outerHeight();
            var tooltipPosition =  origin.attr('data-position');
            var tooltipHeight = newTooltip.outerHeight();
            var tooltipWidth = newTooltip.outerWidth();
            var tooltipVerticalMovement = '0px';
            var tooltipHorizontalMovement = '0px';
            var scale_factor = 8;

            if (tooltipPosition === "top") {
            // Top Position
            newTooltip.css({
              top: origin.offset().top - tooltipHeight - margin,
              left: origin.offset().left + originWidth/2 - tooltipWidth/2
            });
            tooltipVerticalMovement = '-10px';
            backdrop.css({
              borderRadius: '14px 14px 0 0',
              transformOrigin: '50% 90%',
              marginTop: tooltipHeight,
              marginLeft: (tooltipWidth/2) - (backdrop.width()/2)

            });
            }
            // Left Position
            else if (tooltipPosition === "left") {
              newTooltip.css({
                top: origin.offset().top + originHeight/2 - tooltipHeight/2,
                left: origin.offset().left - tooltipWidth - margin
              });
              tooltipHorizontalMovement = '-10px';
              backdrop.css({
                width: '14px',
                height: '14px',
                borderRadius: '14px 0 0 14px',
                transformOrigin: '95% 50%',
                marginTop: tooltipHeight/2,
                marginLeft: tooltipWidth
              });
            }
            // Right Position
            else if (tooltipPosition === "right") {
              newTooltip.css({
                top: origin.offset().top + originHeight/2 - tooltipHeight/2,
                left: origin.offset().left + originWidth + margin
              });
              tooltipHorizontalMovement = '+10px';
              backdrop.css({
                width: '14px',
                height: '14px',
                borderRadius: '0 14px 14px 0',
                transformOrigin: '5% 50%',
                marginTop: tooltipHeight/2,
                marginLeft: '0px'
              });
            }
            else {
              // Bottom Position
              newTooltip.css({
                top: origin.offset().top + origin.outerHeight() + margin,
                left: origin.offset().left + originWidth/2 - tooltipWidth/2
              });
              tooltipVerticalMovement = '+10px';
              backdrop.css({
                marginLeft: (tooltipWidth/2) - (backdrop.width()/2)
              });
            }

            // Calculate Scale to fill
            scale_factor = tooltipWidth / 8;
            if (scale_factor < 8) {
              scale_factor = 8;
            }
            if (tooltipPosition === "right" || tooltipPosition === "left") {
              scale_factor = tooltipWidth / 10;
              if (scale_factor < 6)
                scale_factor = 6;
            }

            newTooltip.velocity({ opacity: 1, marginTop: tooltipVerticalMovement, marginLeft: tooltipHorizontalMovement}, { duration: 350, queue: false });
            backdrop.css({ display: 'block' })
            .velocity({opacity:1},{duration: 55, delay: 0, queue: false})
            .velocity({scale: scale_factor}, {duration: 300, delay: 0, queue: false, easing: 'easeInOutQuad'});

          }
        }, 10); // End Interval

      // Mouse Out
      },
      mouseleave: function(){
        // Reset State
        clearInterval(counterInterval);
        counter = 0;

        // Animate back
        newTooltip.velocity({
          opacity: 0, marginTop: 0, marginLeft: 0}, { duration: 225, queue: false, delay: 275 }
        );
        backdrop.velocity({opacity: 0, scale: 1}, {
          duration:225,
          delay: 275, queue: false,
          complete: function(){
            backdrop.css('display', 'none');
            newTooltip.css('display', 'none');
            started = false;}
        });
      }
      });
    });
  };

  $(document).ready(function(){
     $('.tooltipped').tooltip();
   });
}( jQuery ));
;/*!
 * Waves v0.6.4
 * http://fian.my.id/Waves
 *
 * Copyright 2014 Alfiana E. Sibuea and other contributors
 * Released under the MIT license
 * https://github.com/fians/Waves/blob/master/LICENSE
 */

;(function(window) {
    'use strict';

    var Waves = Waves || {};
    var $$ = document.querySelectorAll.bind(document);

    // Find exact position of element
    function isWindow(obj) {
        return obj !== null && obj === obj.window;
    }

    function getWindow(elem) {
        return isWindow(elem) ? elem : elem.nodeType === 9 && elem.defaultView;
    }

    function offset(elem) {
        var docElem, win,
            box = {top: 0, left: 0},
            doc = elem && elem.ownerDocument;

        docElem = doc.documentElement;

        if (typeof elem.getBoundingClientRect !== typeof undefined) {
            box = elem.getBoundingClientRect();
        }
        win = getWindow(doc);
        return {
            top: box.top + win.pageYOffset - docElem.clientTop,
            left: box.left + win.pageXOffset - docElem.clientLeft
        };
    }

    function convertStyle(obj) {
        var style = '';

        for (var a in obj) {
            if (obj.hasOwnProperty(a)) {
                style += (a + ':' + obj[a] + ';');
            }
        }

        return style;
    }

    var Effect = {

        // Effect delay
        duration: 750,

        show: function(e, element) {

            // Disable right click
            if (e.button === 2) {
                return false;
            }

            var el = element || this;

            // Create ripple
            var ripple = document.createElement('div');
            ripple.className = 'waves-ripple';
            el.appendChild(ripple);

            // Get click coordinate and element witdh
            var pos         = offset(el);
            var relativeY   = (e.pageY - pos.top);
            var relativeX   = (e.pageX - pos.left);
            var scale       = 'scale('+((el.clientWidth / 100) * 10)+')';

            // Support for touch devices
            if ('touches' in e) {
              relativeY   = (e.touches[0].pageY - pos.top);
              relativeX   = (e.touches[0].pageX - pos.left);
            }

            // Attach data to element
            ripple.setAttribute('data-hold', Date.now());
            ripple.setAttribute('data-scale', scale);
            ripple.setAttribute('data-x', relativeX);
            ripple.setAttribute('data-y', relativeY);

            // Set ripple position
            var rippleStyle = {
                'top': relativeY+'px',
                'left': relativeX+'px'
            };

            ripple.className = ripple.className + ' waves-notransition';
            ripple.setAttribute('style', convertStyle(rippleStyle));
            ripple.className = ripple.className.replace('waves-notransition', '');

            // Scale the ripple
            rippleStyle['-webkit-transform'] = scale;
            rippleStyle['-moz-transform'] = scale;
            rippleStyle['-ms-transform'] = scale;
            rippleStyle['-o-transform'] = scale;
            rippleStyle.transform = scale;
            rippleStyle.opacity   = '1';

            rippleStyle['-webkit-transition-duration'] = Effect.duration + 'ms';
            rippleStyle['-moz-transition-duration']    = Effect.duration + 'ms';
            rippleStyle['-o-transition-duration']      = Effect.duration + 'ms';
            rippleStyle['transition-duration']         = Effect.duration + 'ms';

            rippleStyle['-webkit-transition-timing-function'] = 'cubic-bezier(0.250, 0.460, 0.450, 0.940)';
            rippleStyle['-moz-transition-timing-function']    = 'cubic-bezier(0.250, 0.460, 0.450, 0.940)';
            rippleStyle['-o-transition-timing-function']      = 'cubic-bezier(0.250, 0.460, 0.450, 0.940)';
            rippleStyle['transition-timing-function']         = 'cubic-bezier(0.250, 0.460, 0.450, 0.940)';

            ripple.setAttribute('style', convertStyle(rippleStyle));
        },

        hide: function(e) {
            TouchHandler.touchup(e);

            var el = this;
            var width = el.clientWidth * 1.4;

            // Get first ripple
            var ripple = null;
            var ripples = el.getElementsByClassName('waves-ripple');
            if (ripples.length > 0) {
                ripple = ripples[ripples.length - 1];
            } else {
                return false;
            }

            var relativeX   = ripple.getAttribute('data-x');
            var relativeY   = ripple.getAttribute('data-y');
            var scale       = ripple.getAttribute('data-scale');

            // Get delay beetween mousedown and mouse leave
            var diff = Date.now() - Number(ripple.getAttribute('data-hold'));
            var delay = 350 - diff;

            if (delay < 0) {
                delay = 0;
            }

            // Fade out ripple after delay
            setTimeout(function() {
                var style = {
                    'top': relativeY+'px',
                    'left': relativeX+'px',
                    'opacity': '0',

                    // Duration
                    '-webkit-transition-duration': Effect.duration + 'ms',
                    '-moz-transition-duration': Effect.duration + 'ms',
                    '-o-transition-duration': Effect.duration + 'ms',
                    'transition-duration': Effect.duration + 'ms',
                    '-webkit-transform': scale,
                    '-moz-transform': scale,
                    '-ms-transform': scale,
                    '-o-transform': scale,
                    'transform': scale,
                };

                ripple.setAttribute('style', convertStyle(style));

                setTimeout(function() {
                    try {
                        el.removeChild(ripple);
                    } catch(e) {
                        return false;
                    }
                }, Effect.duration);
            }, delay);
        },

        // Little hack to make <input> can perform waves effect
        wrapInput: function(elements) {
            for (var a = 0; a < elements.length; a++) {
                var el = elements[a];

                if (el.tagName.toLowerCase() === 'input') {
                    var parent = el.parentNode;

                    // If input already have parent just pass through
                    if (parent.tagName.toLowerCase() === 'i' && parent.className.indexOf('waves-effect') !== -1) {
                        continue;
                    }

                    // Put element class and style to the specified parent
                    var wrapper = document.createElement('i');
                    wrapper.className = el.className + ' waves-input-wrapper';

                    var elementStyle = el.getAttribute('style');

                    if (!elementStyle) {
                        elementStyle = '';
                    }

                    wrapper.setAttribute('style', elementStyle);

                    el.className = 'waves-button-input';
                    el.removeAttribute('style');

                    // Put element as child
                    parent.replaceChild(wrapper, el);
                    wrapper.appendChild(el);
                }
            }
        }
    };


    /**
     * Disable mousedown event for 500ms during and after touch
     */
    var TouchHandler = {
        /* uses an integer rather than bool so there's no issues with
         * needing to clear timeouts if another touch event occurred
         * within the 500ms. Cannot mouseup between touchstart and
         * touchend, nor in the 500ms after touchend. */
        touches: 0,
        allowEvent: function(e) {
            var allow = true;

            if (e.type === 'touchstart') {
                TouchHandler.touches += 1; //push
            } else if (e.type === 'touchend' || e.type === 'touchcancel') {
                setTimeout(function() {
                    if (TouchHandler.touches > 0) {
                        TouchHandler.touches -= 1; //pop after 500ms
                    }
                }, 500);
            } else if (e.type === 'mousedown' && TouchHandler.touches > 0) {
                allow = false;
            }

            return allow;
        },
        touchup: function(e) {
            TouchHandler.allowEvent(e);
        }
    };


    /**
     * Delegated click handler for .waves-effect element.
     * returns null when .waves-effect element not in "click tree"
     */
    function getWavesEffectElement(e) {
        if (TouchHandler.allowEvent(e) === false) {
            return null;
        }

        var element = null;
        var target = e.target || e.srcElement;

        while (target.parentElement !== null) {
            if (!(target instanceof SVGElement) && target.className.indexOf('waves-effect') !== -1) {
                element = target;
                break;
            } else if (target.classList.contains('waves-effect')) {
                element = target;
                break;
            }
            target = target.parentElement;
        }

        return element;
    }

    /**
     * Bubble the click and show effect if .waves-effect elem was found
     */
    function showEffect(e) {
        var element = getWavesEffectElement(e);

        if (element !== null) {
            Effect.show(e, element);

            if ('ontouchstart' in window) {
                element.addEventListener('touchend', Effect.hide, false);
                element.addEventListener('touchcancel', Effect.hide, false);
            }

            element.addEventListener('mouseup', Effect.hide, false);
            element.addEventListener('mouseleave', Effect.hide, false);
        }
    }

    Waves.displayEffect = function(options) {
        options = options || {};

        if ('duration' in options) {
            Effect.duration = options.duration;
        }

        //Wrap input inside <i> tag
        Effect.wrapInput($$('.waves-effect'));

        if ('ontouchstart' in window) {
            document.body.addEventListener('touchstart', showEffect, false);
        }

        document.body.addEventListener('mousedown', showEffect, false);
    };

    /**
     * Attach Waves to an input element (or any element which doesn't
     * bubble mouseup/mousedown events).
     *   Intended to be used with dynamically loaded forms/inputs, or
     * where the user doesn't want a delegated click handler.
     */
    Waves.attach = function(element) {
        //FUTURE: automatically add waves classes and allow users
        // to specify them with an options param? Eg. light/classic/button
        if (element.tagName.toLowerCase() === 'input') {
            Effect.wrapInput([element]);
            element = element.parentElement;
        }

        if ('ontouchstart' in window) {
            element.addEventListener('touchstart', showEffect, false);
        }

        element.addEventListener('mousedown', showEffect, false);
    };

    window.Waves = Waves;

    document.addEventListener('DOMContentLoaded', function() {
        Waves.displayEffect();
    }, false);

})(window);
;Materialize.toast = function (message, displayLength, className, completeCallback) {
    className = className || "";

    var container = document.getElementById('toast-container');

    // Create toast container if it does not exist
    if (container === null) {
        // create notification container
        var container = document.createElement('div');
        container.id = 'toast-container';
        document.body.appendChild(container);
    }

    // Select and append toast
    var newToast = createToast(message);
    container.appendChild(newToast);

    newToast.style.top = '35px';
    newToast.style.opacity = 0;

    // Animate toast in
    Vel(newToast, { "top" : "0px", opacity: 1 }, {duration: 300,
      easing: 'easeOutCubic',
      queue: false});

    // Allows timer to be pause while being panned
    var timeLeft = displayLength;
    var counterInterval = setInterval (function(){


      if (newToast.parentNode === null)
        window.clearInterval(counterInterval);

      // If toast is not being dragged, decrease its time remaining
      if (!newToast.classList.contains('panning')) {
        timeLeft -= 20;
      }

      if (timeLeft <= 0) {
        // Animate toast out
        Vel(newToast, {"opacity": 0, marginTop: '-40px'}, { duration: 375,
            easing: 'easeOutExpo',
            queue: false,
            complete: function(){
              // Call the optional callback
              if(typeof(completeCallback) === "function")
                completeCallback();
              // Remove toast after it times out
              this[0].parentNode.removeChild(this[0]);
            }
          });
        window.clearInterval(counterInterval);
      }
    }, 20);



    function createToast(html) {

        // Create toast
        var toast = document.createElement('div');
        toast.classList.add('toast');
        if (className) {
            var classes = className.split(' ');

            for (var i = 0, count = classes.length; i < count; i++) {
                toast.classList.add(classes[i]);
            }
        }
        toast.innerHTML = html;

        // Bind hammer
        var hammerHandler = new Hammer(toast, {prevent_default: false});
        hammerHandler.on('pan', function(e) {
          var deltaX = e.deltaX;
          var activationDistance = 80;

          // Change toast state
          if (!toast.classList.contains('panning')){
            toast.classList.add('panning');
          }

          var opacityPercent = 1-Math.abs(deltaX / activationDistance);
          if (opacityPercent < 0)
            opacityPercent = 0;

          Vel(toast, {left: deltaX, opacity: opacityPercent }, {duration: 50, queue: false, easing: 'easeOutQuad'});

        });

        hammerHandler.on('panend', function(e) {
          var deltaX = e.deltaX;
          var activationDistance = 80;

          // If toast dragged past activation point
          if (Math.abs(deltaX) > activationDistance) {
            Vel(toast, {marginTop: '-40px'}, { duration: 375,
                easing: 'easeOutExpo',
                queue: false,
                complete: function(){
                  if(typeof(completeCallback) === "function") {
                    completeCallback();
                  }
                  toast.parentNode.removeChild(toast);
                }
            });

          } else {
            toast.classList.remove('panning');
            // Put toast back into original position
            Vel(toast, { left: 0, opacity: 1 }, { duration: 300,
              easing: 'easeOutExpo',
              queue: false
            });

          }
        });

        return toast;
    }
}
;(function ($) {
    // left: 37, up: 38, right: 39, down: 40,
    // spacebar: 32, pageup: 33, pagedown: 34, end: 35, home: 36
    // var keys = [32, 33, 34, 35, 36, 37, 38, 39, 40];

    // function preventDefault(e) {
    //   e = e || window.event;
    //   if (e.preventDefault)
    //     e.preventDefault();
    //   e.returnValue = false;
    // }

    // function keydown(e) {
    //   for (var i = keys.length; i--;) {
    //     if (e.keyCode === keys[i]) {
    //       preventDefault(e);
    //       return;
    //     }
    //   }
    // }

    // function wheel(e) {
    //   preventDefault(e);
    // }

    // function disable_scroll() {
    //   if (window.addEventListener) {
    //     window.addEventListener('DOMMouseScroll', wheel, false);
    //   }
    //   window.onmousewheel = document.onmousewheel = wheel;
    //   document.onkeydown = keydown;
    //   $('body').css({'overflow-y' : 'hidden'});
    // }

    // function enable_scroll() {
    //   if (window.removeEventListener) {
    //     window.removeEventListener('DOMMouseScroll', wheel, false);
    //   }
    //   window.onmousewheel = document.onmousewheel = document.onkeydown = null;
    //   $('body').css({'overflow-y' : ''});

    // }

  var methods = {
    init : function(options) {
      var defaults = {
        menuWidth: 240,
        edge: 'left',
        closeOnClick: false
      }
      options = $.extend(defaults, options);

      $(this).each(function(){
        var $this = $(this);
        var menu_id = $("#"+ $this.attr('data-activates'));

        // Set to width
        if (options.menuWidth != 240) {
          menu_id.css('width', options.menuWidth);
        }

        // Add Touch Area
        $('body').append($('<div class="drag-target"></div>'));

        if (options.edge == 'left') {
          menu_id.css('left', -1 * (options.menuWidth + 10));
          $('.drag-target').css({'left': 0}); // Add Touch Area
        }
        else {
          menu_id.addClass('right-aligned') // Change text-alignment to right
            .css('right', -1 * (options.menuWidth + 10))
            .css('left', '');
          $('.drag-target').css({'right': 0}); // Add Touch Area
        }

        // If fixed sidenav, bring menu out
        if (menu_id.hasClass('fixed')) {
            if ($(window).width() > 992) {
              menu_id.css('left', 0);
            }
          }

        // Window resize to reset on large screens fixed
        if (menu_id.hasClass('fixed')) {
          $(window).resize( function() {
            if (window.innerWidth > 992) {
              // Close menu if window is resized bigger than 992 and user has fixed sidenav
              if ($('#sidenav-overlay').css('opacity') != 0 && menuOut) {
                removeMenu(true);
              }
              else {
                menu_id.removeAttr('style');
                menu_id.css('width', options.menuWidth);
              }
            }
            else if (menuOut === false){
              if (options.edge === 'left')
                menu_id.css('left', -1 * (options.menuWidth + 10));
              else
                menu_id.css('right', -1 * (options.menuWidth + 10));
            }

          });
        }

        // if closeOnClick, then add close event for all a tags in side sideNav
        if (options.closeOnClick == true) {
          menu_id.on("click.itemclick", "a:not(.collapsible-header)", function(){
            removeMenu();
          });
        }

        function removeMenu(restoreNav) {
          panning = false;
          menuOut = false;
          $('#sidenav-overlay').velocity({opacity: 0}, {duration: 200, queue: false, easing: 'easeOutQuad',
            complete: function() {
              $(this).remove();
            } });
          if (options.edge === 'left') {
            // Reset phantom div
            $('.drag-target').css({width: '', right: '', left: '0'});
            menu_id.velocity(
              {left: -1 * (options.menuWidth + 10)},
              { duration: 200,
                queue: false,
                easing: 'easeOutCubic',
                complete: function() {
                  if (restoreNav == true) {
                    // Restore Fixed sidenav
                    menu_id.removeAttr('style');
                    menu_id.css('width', options.menuWidth);
                  }
                }

            });
          }
          else {
            // Reset phantom div
            $('.drag-target').css({width: '', right: '0', left: ''});
            menu_id.velocity(
              {right: -1 * (options.menuWidth + 10)},
              { duration: 200,
                queue: false,
                easing: 'easeOutCubic',
                complete: function() {
                  if (restoreNav == true) {
                    // Restore Fixed sidenav
                    menu_id.removeAttr('style');
                    menu_id.css('width', options.menuWidth);
                  }
                }
              });
          }
        }



        // Touch Event
        var panning = false;
        var menuOut = false;

        $('.drag-target').on('click', function(){
          removeMenu();
        })

        $('.drag-target').hammer({
          prevent_default: false
        }).bind('pan', function(e) {

          if (e.gesture.pointerType == "touch") {

            var direction = e.gesture.direction;
            var x = e.gesture.center.x;
            var y = e.gesture.center.y;
            var velocityX = e.gesture.velocityX;

            // If overlay does not exist, create one and if it is clicked, close menu
            if ($('#sidenav-overlay').length === 0) {
              var overlay = $('<div id="sidenav-overlay"></div>');
              overlay.css('opacity', 0).click( function(){
                removeMenu();
              });
              $('body').append(overlay);
            }

            // Keep within boundaries
            if (options.edge === 'left') {
              if (x > options.menuWidth) { x = options.menuWidth; }
              else if (x < 0) { x = 0; }
            }

            if (options.edge === 'left') {
              // Left Direction
              if (x < (options.menuWidth / 2)) { menuOut = false; }
              // Right Direction
              else if (x >= (options.menuWidth / 2)) { menuOut = true; }

              menu_id.css('left', (x - options.menuWidth));
            }
            else {
              // Left Direction
              if (x < ($(window).width() - options.menuWidth / 2)) {
                menuOut = true;
              }
              // Right Direction
              else if (x >= ($(window).width() - options.menuWidth / 2)) {
               menuOut = false;
             }
              var rightPos = -1 *(x - options.menuWidth / 2);
              if (rightPos > 0) {
                rightPos = 0;
              }

              menu_id.css('right', rightPos);
            }




            // Percentage overlay
            if (options.edge === 'left') {
              var overlayPerc = x / options.menuWidth;
              $('#sidenav-overlay').velocity({opacity: overlayPerc }, {duration: 50, queue: false, easing: 'easeOutQuad'});
            }
            else {
              var overlayPerc = Math.abs((x - $(window).width()) / options.menuWidth);
              $('#sidenav-overlay').velocity({opacity: overlayPerc }, {duration: 50, queue: false, easing: 'easeOutQuad'});
            }
          }

        }).bind('panend', function(e) {
          if (e.gesture.pointerType == "touch") {
            var velocityX = e.gesture.velocityX;
            panning = false;
            if (options.edge === 'left') {
              // If velocityX <= 0.3 then the user is flinging the menu closed so ignore menuOut
              if ((menuOut && velocityX <= 0.3) || velocityX < -0.5) {
                menu_id.velocity({left: 0}, {duration: 300, queue: false, easing: 'easeOutQuad'});
                $('#sidenav-overlay').velocity({opacity: 1 }, {duration: 50, queue: false, easing: 'easeOutQuad'});
                $('.drag-target').css({width: '50%', right: 0, left: ''});
              }
              else if (!menuOut || velocityX > 0.3) {
                menu_id.velocity({left: -1 * (options.menuWidth + 10)}, {duration: 200, queue: false, easing: 'easeOutQuad'});
                $('#sidenav-overlay').velocity({opacity: 0 }, {duration: 200, queue: false, easing: 'easeOutQuad',
                  complete: function () {
                    $(this).remove();
                  }});
                $('.drag-target').css({width: '10px', right: '', left: 0});
              }
            }
            else {
              if ((menuOut && velocityX >= -0.3) || velocityX > 0.5) {
                menu_id.velocity({right: 0}, {duration: 300, queue: false, easing: 'easeOutQuad'});
                $('#sidenav-overlay').velocity({opacity: 1 }, {duration: 50, queue: false, easing: 'easeOutQuad'});
                $('.drag-target').css({width: '50%', right: '', left: 0});
              }
              else if (!menuOut || velocityX < -0.3) {
                menu_id.velocity({right: -1 * (options.menuWidth + 10)}, {duration: 200, queue: false, easing: 'easeOutQuad'});
                $('#sidenav-overlay').velocity({opacity: 0 }, {duration: 200, queue: false, easing: 'easeOutQuad',
                  complete: function () {
                    $(this).remove();
                  }});
                $('.drag-target').css({width: '10px', right: 0, left: ''});
              }
            }

          }
        });

          $this.click(function() {
            if (menuOut == true) {
              menuOut = false;
              panning = false;
              removeMenu();
            }
            else {

              if (options.edge === 'left') {
                $('.drag-target').css({width: '50%', right: 0, left: ''});
                menu_id.velocity({left: 0}, {duration: 300, queue: false, easing: 'easeOutQuad'});
              }
              else {
                $('.drag-target').css({width: '50%', right: '', left: 0});
                menu_id.velocity({right: 0}, {duration: 300, queue: false, easing: 'easeOutQuad'});
                menu_id.css('left','');
              }

              var overlay = $('<div id="sidenav-overlay"></div>');
              overlay.css('opacity', 0)
              .click(function(){
                menuOut = false;
                panning = false;
                removeMenu();
                overlay.velocity({opacity: 0}, {duration: 300, queue: false, easing: 'easeOutQuad',
                  complete: function() {
                    $(this).remove();
                  } });

              });
              $('body').append(overlay);
              overlay.velocity({opacity: 1}, {duration: 300, queue: false, easing: 'easeOutQuad',
                complete: function () {
                  menuOut = true;
                  panning = false;
                }
              });
            }

            return false;
          });
      });


    },
    show : function() {
      this.trigger('click');
    },
    hide : function() {
      $('#sidenav-overlay').trigger('click');
    }
  };


    $.fn.sideNav = function(methodOrOptions) {
      if ( methods[methodOrOptions] ) {
        return methods[ methodOrOptions ].apply( this, Array.prototype.slice.call( arguments, 1 ));
      } else if ( typeof methodOrOptions === 'object' || ! methodOrOptions ) {
        // Default to "init"
        return methods.init.apply( this, arguments );
      } else {
        $.error( 'Method ' +  methodOrOptions + ' does not exist on jQuery.tooltip' );
      }
    }; // PLugin end
}( jQuery ));
;/**
 * Extend jquery with a scrollspy plugin.
 * This watches the window scroll and fires events when elements are scrolled into viewport.
 *
 * throttle() and getTime() taken from Underscore.js
 * https://github.com/jashkenas/underscore
 *
 * @author Copyright 2013 John Smart
 * @license https://raw.github.com/thesmart/jquery-scrollspy/master/LICENSE
 * @see https://github.com/thesmart
 * @version 0.1.2
 */
(function($) {

	var jWindow = $(window);
	var elements = [];
	var elementsInView = [];
	var isSpying = false;
	var ticks = 0;
	var unique_id = 1;
	var offset = {
		top : 0,
		right : 0,
		bottom : 0,
		left : 0,
	}

	/**
	 * Find elements that are within the boundary
	 * @param {number} top
	 * @param {number} right
	 * @param {number} bottom
	 * @param {number} left
	 * @return {jQuery}		A collection of elements
	 */
	function findElements(top, right, bottom, left) {
		var hits = $();
		$.each(elements, function(i, element) {
			if (element.height() > 0) {
				var elTop = element.offset().top,
					elLeft = element.offset().left,
					elRight = elLeft + element.width(),
					elBottom = elTop + element.height();

				var isIntersect = !(elLeft > right ||
					elRight < left ||
					elTop > bottom ||
					elBottom < top);

				if (isIntersect) {
					hits.push(element);
				}
			}
		});

		return hits;
	}


	/**
	 * Called when the user scrolls the window
	 */
	function onScroll() {
		// unique tick id
		++ticks;

		// viewport rectangle
		var top = jWindow.scrollTop(),
			left = jWindow.scrollLeft(),
			right = left + jWindow.width(),
			bottom = top + jWindow.height();

		// determine which elements are in view
//        + 60 accounts for fixed nav
		var intersections = findElements(top+offset.top + 200, right+offset.right, bottom+offset.bottom, left+offset.left);
		$.each(intersections, function(i, element) {

			var lastTick = element.data('scrollSpy:ticks');
			if (typeof lastTick != 'number') {
				// entered into view
				element.triggerHandler('scrollSpy:enter');
			}

			// update tick id
			element.data('scrollSpy:ticks', ticks);
		});

		// determine which elements are no longer in view
		$.each(elementsInView, function(i, element) {
			var lastTick = element.data('scrollSpy:ticks');
			if (typeof lastTick == 'number' && lastTick !== ticks) {
				// exited from view
				element.triggerHandler('scrollSpy:exit');
				element.data('scrollSpy:ticks', null);
			}
		});

		// remember elements in view for next tick
		elementsInView = intersections;
	}

	/**
	 * Called when window is resized
	*/
	function onWinSize() {
		jWindow.trigger('scrollSpy:winSize');
	}

	/**
	 * Get time in ms
   * @license https://raw.github.com/jashkenas/underscore/master/LICENSE
	 * @type {function}
	 * @return {number}
	 */
	var getTime = (Date.now || function () {
		return new Date().getTime();
	});

	/**
	 * Returns a function, that, when invoked, will only be triggered at most once
	 * during a given window of time. Normally, the throttled function will run
	 * as much as it can, without ever going more than once per `wait` duration;
	 * but if you'd like to disable the execution on the leading edge, pass
	 * `{leading: false}`. To disable execution on the trailing edge, ditto.
	 * @license https://raw.github.com/jashkenas/underscore/master/LICENSE
	 * @param {function} func
	 * @param {number} wait
	 * @param {Object=} options
	 * @returns {Function}
	 */
	function throttle(func, wait, options) {
		var context, args, result;
		var timeout = null;
		var previous = 0;
		options || (options = {});
		var later = function () {
			previous = options.leading === false ? 0 : getTime();
			timeout = null;
			result = func.apply(context, args);
			context = args = null;
		};
		return function () {
			var now = getTime();
			if (!previous && options.leading === false) previous = now;
			var remaining = wait - (now - previous);
			context = this;
			args = arguments;
			if (remaining <= 0) {
				clearTimeout(timeout);
				timeout = null;
				previous = now;
				result = func.apply(context, args);
				context = args = null;
			} else if (!timeout && options.trailing !== false) {
				timeout = setTimeout(later, remaining);
			}
			return result;
		};
	};

	/**
	 * Enables ScrollSpy using a selector
	 * @param {jQuery|string} selector  The elements collection, or a selector
	 * @param {Object=} options	Optional.
        throttle : number -> scrollspy throttling. Default: 100 ms
        offsetTop : number -> offset from top. Default: 0
        offsetRight : number -> offset from right. Default: 0
        offsetBottom : number -> offset from bottom. Default: 0
        offsetLeft : number -> offset from left. Default: 0
	 * @returns {jQuery}
	 */
	$.scrollSpy = function(selector, options) {
		var visible = [];
		selector = $(selector);
		selector.each(function(i, element) {
			elements.push($(element));
			$(element).data("scrollSpy:id", i);
			// Smooth scroll to section
		  $('a[href=#' + $(element).attr('id') + ']').click(function(e) {
		    e.preventDefault();
		    var offset = $(this.hash).offset().top + 1;

//          offset - 200 allows elements near bottom of page to scroll
			
	    	$('html, body').animate({ scrollTop: offset - 200 }, {duration: 400, queue: false, easing: 'easeOutCubic'});
			
		  });
		});
		options = options || {
			throttle: 100
		};

		offset.top = options.offsetTop || 0;
		offset.right = options.offsetRight || 0;
		offset.bottom = options.offsetBottom || 0;
		offset.left = options.offsetLeft || 0;

		var throttledScroll = throttle(onScroll, options.throttle || 100);
		var readyScroll = function(){
			$(document).ready(throttledScroll);
		};

		if (!isSpying) {
			jWindow.on('scroll', readyScroll);
			jWindow.on('resize', readyScroll);
			isSpying = true;
		}

		// perform a scan once, after current execution context, and after dom is ready
		setTimeout(readyScroll, 0);


		selector.on('scrollSpy:enter', function() {
			visible = $.grep(visible, function(value) {
	      return value.height() != 0;
	    });

			var $this = $(this);

			if (visible[0]) {
				$('a[href=#' + visible[0].attr('id') + ']').removeClass('active');
				if ($this.data('scrollSpy:id') < visible[0].data('scrollSpy:id')) {
					visible.unshift($(this));
				}
				else {
					visible.push($(this));
				}
			}
			else {
				visible.push($(this));
			}


			$('a[href=#' + visible[0].attr('id') + ']').addClass('active');
		});
		selector.on('scrollSpy:exit', function() {
			visible = $.grep(visible, function(value) {
	      return value.height() != 0;
	    });

			if (visible[0]) {
				$('a[href=#' + visible[0].attr('id') + ']').removeClass('active');
				var $this = $(this);
				visible = $.grep(visible, function(value) {
	        return value.attr('id') != $this.attr('id');
	      });
	      if (visible[0]) { // Check if empty
					$('a[href=#' + visible[0].attr('id') + ']').addClass('active');
	      }
			}
		});

		return selector;
	};

	/**
	 * Listen for window resize events
	 * @param {Object=} options						Optional. Set { throttle: number } to change throttling. Default: 100 ms
	 * @returns {jQuery}		$(window)
	 */
	$.winSizeSpy = function(options) {
		$.winSizeSpy = function() { return jWindow; }; // lock from multiple calls
		options = options || {
			throttle: 100
		};
		return jWindow.on('resize', throttle(onWinSize, options.throttle || 100));
	};

	/**
	 * Enables ScrollSpy on a collection of elements
	 * e.g. $('.scrollSpy').scrollSpy()
	 * @param {Object=} options	Optional.
											throttle : number -> scrollspy throttling. Default: 100 ms
											offsetTop : number -> offset from top. Default: 0
											offsetRight : number -> offset from right. Default: 0
											offsetBottom : number -> offset from bottom. Default: 0
											offsetLeft : number -> offset from left. Default: 0
	 * @returns {jQuery}
	 */
	$.fn.scrollSpy = function(options) {
		return $.scrollSpy($(this), options);
	};

})(jQuery);;(function ($) {
  $(document).ready(function() {

    // Function to update labels of text fields
    Materialize.updateTextFields = function() {
      var input_selector = 'input[type=text], input[type=password], input[type=email], input[type=url], input[type=tel], input[type=number], input[type=search], textarea';
      $(input_selector).each(function(index, element) {
        if ($(element).val().length > 0 || $(this).attr('placeholder') !== undefined) {
          $(this).siblings('label, i').addClass('active');
        }
        else {
          $(this).siblings('label, i').removeClass('active');
        }
      });
    }

    // Text based inputs
    var input_selector = 'input[type=text], input[type=password], input[type=email], input[type=url], input[type=tel], input[type=number], input[type=search], textarea';

    // Handle HTML5 autofocus
    $('input[autofocus]').siblings('label, i').addClass('active');

    // Add active if form auto complete
    $(document).on('change', input_selector, function () {
      if($(this).val().length !== 0 || $(this).attr('placeholder') !== undefined) {
        $(this).siblings('label, i').addClass('active');
      }
      validate_field($(this));
    });

    // Add active if input element has been pre-populated on document ready
    $(document).ready(function() {
      Materialize.updateTextFields();
    });

    // HTML DOM FORM RESET handling
    $(document).on('reset', function(e) {
      if ($(e.target).is('form')) {
        $(this).find(input_selector).removeClass('valid').removeClass('invalid');
        $(this).find(input_selector).siblings('label, i').removeClass('active');

        // Reset select
        $(this).find('select.initialized').each(function () {
          var reset_text = $(this).find('option[selected]').text();
          $(this).siblings('input.select-dropdown').val(reset_text);
        });
      }
    });

    // Add active when element has focus
    $(document).on('focus', input_selector, function () {
      $(this).siblings('label, i').addClass('active');
    });

    $(document).on('blur', input_selector, function () {
      if ($(this).val().length === 0 && $(this).attr('placeholder') === undefined) {
        $(this).siblings('label, i').removeClass('active');
      }
      validate_field($(this));
    });

    validate_field = function(object) {
      if (object.val().length === 0) {
        if (object.hasClass('validate')) {
          object.removeClass('valid');
          object.removeClass('invalid');
        }
      }
      else {
        if (object.hasClass('validate')) {
          if (object.is(':valid')) {
            object.removeClass('invalid');
            object.addClass('valid');
          }
          else {
            object.removeClass('valid');
            object.addClass('invalid');
          }
        }
      }
    }


    // Textarea Auto Resize
    var hiddenDiv = $('.hiddendiv').first();
    if (!hiddenDiv.length) {
      hiddenDiv = $('<div class="hiddendiv common"></div>');
      $('body').append(hiddenDiv);
    }
    var text_area_selector = '.materialize-textarea';

    function textareaAutoResize($textarea) {
      hiddenDiv.text($textarea.val() + '\n');
      var content = hiddenDiv.html().replace(/\n/g, '<br>');
      hiddenDiv.html(content);

      // When textarea is hidden, width goes crazy.
      // Approximate with half of window size

      if ($textarea.is(':visible')) {
        hiddenDiv.css('width', $textarea.width());
      }
      else {
        hiddenDiv.css('width', $(window).width()/2);
      }

      $textarea.css('height', hiddenDiv.height());
    }

    $(text_area_selector).each(function () {
      var $textarea = $(this);
      if ($textarea.val().length) {
        textareaAutoResize($textarea);
      }
    });

    $('body').on('keyup keydown', text_area_selector, function () {
      textareaAutoResize($(this));
    });


    // File Input Path
    $('.file-field').each(function() {
      var path_input = $(this).find('input.file-path');
      $(this).find('input[type="file"]').change(function () {
        path_input.val($(this)[0].files[0].name);
        path_input.trigger('change');
      });
    });


    // Range Input
    var range_type = 'input[type=range]';
    var range_mousedown = false;

    $(range_type).each(function () {
      var thumb = $('<span class="thumb"><span class="value"></span></span>');
      $(this).after(thumb);
    });

    var range_wrapper = '.range-field';

      $(document).on("mousedown", range_wrapper, function(e) {
        var thumb = $(this).children('.thumb');
        if (thumb.length <= 0) {
          thumb = $('<span class="thumb"><span class="value"></span></span>');
          $(this).append(thumb);
        }

      range_mousedown = true;
      $(this).addClass('active');

      if (!thumb.hasClass('active')) {
        thumb.velocity({ height: "30px", width: "30px", top: "-20px", marginLeft: "-15px"}, { duration: 300, easing: 'easeOutExpo' });
      }
      var left = e.pageX - $(this).offset().left;
      var width = $(this).outerWidth();

      if (left < 0) {
        left = 0;
      }
      else if (left > width) {
        left = width;
      }
      thumb.addClass('active').css('left', left);
      thumb.find('.value').html($(this).children('input[type=range]').val());

    });
    $(document).on("mouseup", range_wrapper, function() {
      range_mousedown = false;
      $(this).removeClass('active');
    });

    $(document).on("mousemove", range_wrapper, function(e) {

      var thumb = $(this).children('.thumb');
      if (range_mousedown) {
        if (!thumb.hasClass('active')) {
          thumb.velocity({ height: "30px", width: "30px", top: "-20px", marginLeft: "-15px"}, { duration: 300, easing: 'easeOutExpo' });
        }
        var left = e.pageX - $(this).offset().left;
        var width = $(this).outerWidth();

        if (left < 0) {
          left = 0;
        }
        else if (left > width) {
          left = width;
        }
        thumb.addClass('active').css('left', left);
        thumb.find('.value').html($(this).children('input[type=range]').val());
      }

    });
    $(document).on("mouseout", range_wrapper, function() {
      if (!range_mousedown) {

        var thumb = $(this).children('.thumb');

        if (thumb.hasClass('active')) {
          thumb.velocity({ height: "0", width: "0", top: "10px", marginLeft: "-6px"}, { duration: 100 });
        }
        thumb.removeClass('active');
      }
    });

  }); // End of $(document).ready




  // Select Plugin
  $.fn.material_select = function (callback) {
    $(this).each(function(){
      $select = $(this);

      if ( $select.hasClass('browser-default')) {
        return; // Continue to next (return false breaks out of entire loop)
      }

      // Tear down structure if Select needs to be rebuilt
      var lastID = $select.data('select-id');
      if (lastID) {
        $select.parent().find('i').remove();
        $select.parent().find('input').remove();

        $select.unwrap();
        $('ul#select-options-'+lastID).remove();
      }

      // If destroying the select, remove the selelct-id and reset it to it's uninitialized state.
      if(callback === 'destroy') {
          $select.data('select-id', null).removeClass('initialized');
          return;
      }

      var uniqueID = Materialize.guid();
      $select.data('select-id', uniqueID);
      var wrapper = $('<div class="select-wrapper"></div>');
      wrapper.addClass($select.attr('class'));
      var options = $('<ul id="select-options-' + uniqueID+'" class="dropdown-content select-dropdown"></ul>');
      var selectOptions = $select.children('option');
      if ($select.find('option:selected') !== undefined) {
        var label = $select.find('option:selected');
      }
      else {
        var label = options.first();
      }


      // Create Dropdown structure
      selectOptions.each(function () {
        // Add disabled attr if disabled
        options.append($('<li class="' + (($(this).is(':disabled')) ? 'disabled' : '') + '"><span>' + $(this).html() + '</span></li>'));
      });


      options.find('li').each(function (i) {
        var $curr_select = $select;
        $(this).click(function () {
          // Check if option element is disabled
          if (!$(this).hasClass('disabled')) {
            $curr_select.find('option').eq(i).prop('selected', true);
            // Trigger onchange() event
            $curr_select.trigger('change');
            $curr_select.siblings('input.select-dropdown').val($(this).text());
            if (typeof callback !== 'undefined') callback();
          }
        });

      });

      // Wrap Elements
      $select.wrap(wrapper);
      // Add Select Display Element
      var dropdownIcon = $('<i class="mdi-navigation-arrow-drop-down"></i>');
      if ( $select.is(':disabled') )
        dropdownIcon.addClass('disabled');

      var $newSelect = $('<input type="text" class="select-dropdown" readonly="true" ' + (($select.is(':disabled')) ? 'disabled' : '')
                       + ' data-activates="select-options-' + uniqueID +'" value="'+ label.html() +'"/>');
      $select.before($newSelect);
      $newSelect.before(dropdownIcon);

      $('body').append(options);
      // Check if section element is disabled
      if (!$select.is(':disabled')) {
        $newSelect.dropdown({"hover": false});
      }

      // Copy tabindex
      if ($select.attr('tabindex')) {
        $($newSelect[0]).attr('tabindex', $select.attr('tabindex'));
      }

      $select.addClass('initialized');

      $newSelect.on('focus', function(){
        $(this).trigger('open');
        label = $(this).val();
        selectedOption = options.find('li').filter(function() {
          return $(this).text().toLowerCase() === label.toLowerCase();
        })[0];
        activateOption(options, selectedOption);
      });

      $newSelect.on('blur', function(){
        $(this).trigger('close');
      });

      // Make option as selected and scroll to selected position
      activateOption = function(collection, newOption) {
        collection.find('li.active').removeClass('active');
        $(newOption).addClass('active');
        collection.scrollTo(newOption);
      }

      // Allow user to search by typing
      // this array is cleared after 1 second
      filterQuery = []

      onKeyDown = function(event){
        // TAB - switch to another input
        if(event.which == 9){
          $newSelect.trigger('close');
          return
        }

        // ARROW DOWN WHEN SELECT IS CLOSED - open select options
        if(event.which == 40 && !options.is(":visible")){
          $newSelect.trigger('open');
          return
        }

        // ENTER WHEN SELECT IS CLOSED - submit form
        if(event.which == 13 && !options.is(":visible")){
          return
        }

        event.preventDefault();

        // CASE WHEN USER TYPE LETTERS
        letter = String.fromCharCode(event.which).toLowerCase();

        if (letter){
          filterQuery.push(letter);

          string = filterQuery.join("");

          newOption = options.find('li').filter(function() {
            return $(this).text().toLowerCase().indexOf(string) === 0;
          })[0];

          if(newOption){
            activateOption(options, newOption);
          }
        }

        // ENTER - select option and close when select options are opened
        if(event.which == 13){
          activeOption = options.find('li.active:not(.disabled)')[0];
          if(activeOption){
            $(activeOption).trigger('click');
            $newSelect.trigger('close');
          }
        }

        // ARROW DOWN - move to next not disabled option
        if(event.which == 40){
          newOption = options.find('li.active').next('li:not(.disabled)')[0];
          if(newOption){
            activateOption(options, newOption);
          }
        }

        // ESC - close options
        if(event.which == 27){
          $newSelect.trigger('close');
        }

        // ARROW UP - move to previous not disabled option
        if(event.which == 38){
          newOption = options.find('li.active').prev('li:not(.disabled)')[0];
          if(newOption){
            activateOption(options, newOption);
          }
        }

        // Automaticaly clean filter query so user can search again by starting letters
        setTimeout(function(){filterQuery = []}, 1000)
      }

      $newSelect.on('keydown', onKeyDown);
    });
  }

}( jQuery ));
;(function ($) {

  $.fn.slider = function (options) {
    var defaults = {
      indicators: true,
      height: 400,
      transition: 500,
      interval: 6000
    }
    options = $.extend(defaults, options);

    return this.each(function() {

      // For each slider, we want to keep track of
      // which slide is active and its associated content
      var $this = $(this);
      var $slider = $this.find('ul.slides').first();
      var $slides = $slider.find('li');
      var $active_index = $slider.find('.active').index();
      var $active;
      if ($active_index != -1) { $active = $slides.eq($active_index); }

      // Transitions the caption depending on alignment
      function captionTransition(caption, duration) {
        if (caption.hasClass("center-align")) {
          caption.velocity({opacity: 0, translateY: -100}, {duration: duration, queue: false});
        }
        else if (caption.hasClass("right-align")) {
          caption.velocity({opacity: 0, translateX: 100}, {duration: duration, queue: false});
        }
        else if (caption.hasClass("left-align")) {
          caption.velocity({opacity: 0, translateX: -100}, {duration: duration, queue: false});
        }
      }

      // This function will transition the slide to any index of the next slide
      function moveToSlide(index) {
        if (index >= $slides.length) index = 0;
        else if (index < 0) index = $slides.length -1;

        $active_index = $slider.find('.active').index();

        // Only do if index changes
        if ($active_index != index) {
          $active = $slides.eq($active_index);
          $caption = $active.find('.caption');

          $active.removeClass('active');
          $active.velocity({opacity: 0}, {duration: options.transition, queue: false, easing: 'easeOutQuad',
                            complete: function() {
                              $slides.not('.active').velocity({opacity: 0, translateX: 0, translateY: 0}, {duration: 0, queue: false});
                            } });
          captionTransition($caption, options.transition);


          // Update indicators
          if (options.indicators) {
            $indicators.eq($active_index).removeClass('active');
          }

          $slides.eq(index).velocity({opacity: 1}, {duration: options.transition, queue: false, easing: 'easeOutQuad'});
          $slides.eq(index).find('.caption').velocity({opacity: 1, translateX: 0, translateY: 0}, {duration: options.transition, delay: options.transition, queue: false, easing: 'easeOutQuad'});
          $slides.eq(index).addClass('active');


          // Update indicators
          if (options.indicators) {
            $indicators.eq(index).addClass('active');
          }
        }
      }

      // Set height of slider
      if (options.height != 400) {
        $this.height(options.height + 40);
        $slider.height(options.height);
      }

      // Set initial positions of captions
      $slides.find('.caption').each(function () {
        captionTransition($(this), 0);
      });

      // Set initial dimensions of images
      // $slides.find('img').each(function () {
      //   $(this).load(function () {
      //     if ($(this).width() < $(this).parent().width()) {
      //       $(this).css({width: '100%', height: 'auto'});
      //     }
      //   });
      // });

      // Move img src into background-image
      $slides.find('img').each(function () {
        $(this).css('background-image', 'url(' + $(this).attr('src') + ')' );
        $(this).attr('src', 'data:image/gif;base64,R0lGODlhAQABAIABAP///wAAACH5BAEKAAEALAAAAAABAAEAAAICTAEAOw==');
      });

      // dynamically add indicators
      if (options.indicators) {
        var $indicators = $('<ul class="indicators"></ul>');
        $slides.each(function( index ) {
          var $indicator = $('<li class="indicator-item"></li>');

          // Handle clicks on indicators
          $indicator.click(function () {
            var $parent = $slider.parent();
            var curr_index = $parent.find($(this)).index();
            moveToSlide(curr_index);

            // reset interval
            clearInterval($interval);
            $interval = setInterval(
              function(){
                $active_index = $slider.find('.active').index();
                if ($slides.length == $active_index + 1) $active_index = 0; // loop to start
                else $active_index += 1;

                moveToSlide($active_index);

              }, options.transition + options.interval
            );
          });
          $indicators.append($indicator);
        });
        $this.append($indicators);
        $indicators = $this.find('ul.indicators').find('li.indicator-item');
      }

      if ($active) {
        $active.show();
      }
      else {
        $slides.first().addClass('active').velocity({opacity: 1}, {duration: options.transition, queue: false, easing: 'easeOutQuad'});

        $active_index = 0;
        $active = $slides.eq($active_index);

        // Update indicators
        if (options.indicators) {
          $indicators.eq($active_index).addClass('active');
        }
      }

      // Adjust height to current slide
      $active.find('img').each(function() {
        $active.find('.caption').velocity({opacity: 1, translateX: 0, translateY: 0}, {duration: options.transition, queue: false, easing: 'easeOutQuad'});
      });

      // auto scroll
      $interval = setInterval(
        function(){
          $active_index = $slider.find('.active').index();
          moveToSlide($active_index + 1);

        }, options.transition + options.interval
      );


      // HammerJS, Swipe navigation

      // Touch Event
      var panning = false;
      var swipeLeft = false;
      var swipeRight = false;

      $this.hammer({
          prevent_default: false
      }).bind('pan', function(e) {
        if (e.gesture.pointerType === "touch") {

          // reset interval
          clearInterval($interval);

          var direction = e.gesture.direction;
          var x = e.gesture.deltaX;
          var velocityX = e.gesture.velocityX;

          $curr_slide = $slider.find('.active');
          $curr_slide.velocity({ translateX: x
              }, {duration: 50, queue: false, easing: 'easeOutQuad'});

          // Swipe Left
          if (direction === 4 && (x > ($this.innerWidth() / 2) || velocityX < -0.65)) {
            swipeRight = true;
          }
          // Swipe Right
          else if (direction === 2 && (x < (-1 * $this.innerWidth() / 2) || velocityX > 0.65)) {
            swipeLeft = true;
          }

          // Make Slide Behind active slide visible
          var next_slide;
          if (swipeLeft) {
            next_slide = $curr_slide.next();
            if (next_slide.length === 0) {
              next_slide = $slides.first();
            }
            next_slide.velocity({ opacity: 1
                }, {duration: 300, queue: false, easing: 'easeOutQuad'});
          }
          if (swipeRight) {
            next_slide = $curr_slide.prev();
            if (next_slide.length === 0) {
              next_slide = $slides.last();
            }
            next_slide.velocity({ opacity: 1
                }, {duration: 300, queue: false, easing: 'easeOutQuad'});
          }


        }

      }).bind('panend', function(e) {
        if (e.gesture.pointerType === "touch") {

          $curr_slide = $slider.find('.active');
          panning = false;
          curr_index = $slider.find('.active').index();

          if (!swipeRight && !swipeLeft) {
            // Return to original spot
            $curr_slide.velocity({ translateX: 0
                }, {duration: 300, queue: false, easing: 'easeOutQuad'});
          }
          else if (swipeLeft) {
            moveToSlide(curr_index + 1);
            $curr_slide.velocity({translateX: -1 * $this.innerWidth() }, {duration: 300, queue: false, easing: 'easeOutQuad',
                                  complete: function() {
                                    $curr_slide.velocity({opacity: 0, translateX: 0}, {duration: 0, queue: false});
                                  } });
          }
          else if (swipeRight) {
            moveToSlide(curr_index - 1);
            $curr_slide.velocity({translateX: $this.innerWidth() }, {duration: 300, queue: false, easing: 'easeOutQuad',
                                  complete: function() {
                                    $curr_slide.velocity({opacity: 0, translateX: 0}, {duration: 0, queue: false});
                                  } });
          }
          swipeLeft = false;
          swipeRight = false;

          // Restart interval
          clearInterval($interval);
          $interval = setInterval(
            function(){
              $active_index = $slider.find('.active').index();
              if ($slides.length == $active_index + 1) $active_index = 0; // loop to start
              else $active_index += 1;

              moveToSlide($active_index);

            }, options.transition + options.interval
          );
        }
      });

    });



  };
}( jQuery ));
;(function ($) {
  $(document).ready(function() {

    $(document).on('click.card', '.card', function (e) {
      if ($(this).find('.card-reveal').length) {
        if ($(e.target).is($('.card-reveal .card-title')) || $(e.target).is($('.card-reveal .card-title i'))) {
          // Make Reveal animate down and display none
          $(this).find('.card-reveal').velocity(
            {translateY: 0}, {
              duration: 225,
              queue: false,
              easing: 'easeInOutQuad',
              complete: function() { $(this).css({ display: 'none'}) }
            }
          );
        }
        else if ($(e.target).is($('.card .activator')) ||
                 $(e.target).is($('.card .activator i')) ) {
          $(this).find('.card-reveal').css({ display: 'block'}).velocity("stop", false).velocity({translateY: '-100%'}, {duration: 300, queue: false, easing: 'easeInOutQuad'});
        }
      }


    });

  });
}( jQuery ));;(function ($) {
  $(document).ready(function() {

    $.fn.pushpin = function (options) {

      var defaults = {
        top: 0,
        bottom: Infinity,
        offset: 0
      }
      options = $.extend(defaults, options);

      $index = 0;
      return this.each(function() {
        var $uniqueId = Materialize.guid(),
            $this = $(this),
            $original_offset = $(this).offset().top;

        function removePinClasses(object) {
          object.removeClass('pin-top');
          object.removeClass('pinned');
          object.removeClass('pin-bottom');
        }

        function updateElements(objects, scrolled) {
          objects.each(function () {
            // Add position fixed (because its between top and bottom)
            if (options.top <= scrolled && options.bottom >= scrolled && !$(this).hasClass('pinned')) {
              removePinClasses($(this));
              $(this).css('top', options.offset);
              $(this).addClass('pinned');
            }

            // Add pin-top (when scrolled position is above top)
            if (scrolled < options.top && !$(this).hasClass('pin-top')) {
              removePinClasses($(this));
              $(this).css('top', 0);
              $(this).addClass('pin-top');
            }

            // Add pin-bottom (when scrolled position is below bottom)
            if (scrolled > options.bottom && !$(this).hasClass('pin-bottom')) {
              removePinClasses($(this));
              $(this).addClass('pin-bottom');
              $(this).css('top', options.bottom - $original_offset);
            }
          });
        }

        updateElements($this, $(window).scrollTop());
        $(window).on('scroll.' + $uniqueId, function () {
          var $scrolled = $(window).scrollTop() + options.offset;
          updateElements($this, $scrolled);
        });

      });

    };


  });
}( jQuery ));;(function ($) {
  $(document).ready(function() {

    // jQuery reverse
    $.fn.reverse = [].reverse;

    $(document).on('mouseenter.fixedActionBtn', '.fixed-action-btn', function(e) {
      var $this = $(this);

      $this.find('ul .btn-floating').velocity(
        { scaleY: ".4", scaleX: ".4", translateY: "40px"},
        { duration: 0 });

      var time = 0;
      $this.find('ul .btn-floating').reverse().each(function () {
        $(this).velocity(
          { opacity: "1", scaleX: "1", scaleY: "1", translateY: "0"},
          { duration: 80, delay: time });
        time += 40;
      });

    });

    $(document).on('mouseleave.fixedActionBtn', '.fixed-action-btn', function(e) {
      var $this = $(this);

      var time = 0;
      $this.find('ul .btn-floating').velocity("stop", true);
      $this.find('ul .btn-floating').velocity(
        { opacity: "0", scaleX: ".4", scaleY: ".4", translateY: "40px"},
        { duration: 80 });
    });

  });
}( jQuery ));
;(function ($) {
  // Image transition function
  Materialize.fadeInImage =  function(selector){
    var element = $(selector);
    element.css({opacity: 0});
    $(element).velocity({opacity: 1}, {
        duration: 650,
        queue: false,
        easing: 'easeOutSine'
      });
    $(element).velocity({opacity: 1}, {
          duration: 1300,
          queue: false,
          easing: 'swing',
          step: function(now, fx) {
              fx.start = 100;
              var grayscale_setting = now/100;
              var brightness_setting = 150 - (100 - now)/1.75;

              if (brightness_setting < 100) {
                brightness_setting = 100;
              }
              if (now >= 0) {
                $(this).css({
                    "-webkit-filter": "grayscale("+grayscale_setting+")" + "brightness("+brightness_setting+"%)",
                    "filter": "grayscale("+grayscale_setting+")" + "brightness("+brightness_setting+"%)"
                });
              }
          }
      });
  };

  // Horizontal staggered list
  Materialize.showStaggeredList = function(selector) {
    var time = 0;
    $(selector).find('li').velocity(
        { translateX: "-100px"},
        { duration: 0 });

    $(selector).find('li').each(function() {
      $(this).velocity(
        { opacity: "1", translateX: "0"},
        { duration: 800, delay: time, easing: [60, 10] });
      time += 120;
    });
  };


  $(document).ready(function() {
    // Hardcoded .staggered-list scrollFire
    // var staggeredListOptions = [];
    // $('ul.staggered-list').each(function (i) {

    //   var label = 'scrollFire-' + i;
    //   $(this).addClass(label);
    //   staggeredListOptions.push(
    //     {selector: 'ul.staggered-list.' + label,
    //      offset: 200,
    //      callback: 'showStaggeredList("ul.staggered-list.' + label + '")'});
    // });
    // scrollFire(staggeredListOptions);

    // HammerJS, Swipe navigation

    // Touch Event
    var swipeLeft = false;
    var swipeRight = false;

    $('.dismissable').each(function() {
      $(this).hammer({
        prevent_default: false
      }).bind('pan', function(e) {
        if (e.gesture.pointerType === "touch") {
          var $this = $(this);
          var direction = e.gesture.direction;
          var x = e.gesture.deltaX;
          var velocityX = e.gesture.velocityX;

          $this.velocity({ translateX: x
              }, {duration: 50, queue: false, easing: 'easeOutQuad'});

          // Swipe Left
          if (direction === 4 && (x > ($this.innerWidth() / 2) || velocityX < -0.75)) {
            swipeLeft = true;
          }
          // Swipe Right
          else if (direction === 2 && (x < (-1 * $this.innerWidth() / 2) || velocityX > 0.75)) {
            swipeRight = true;
          }
        }
      }).bind('panend', function(e) {
        if (e.gesture.pointerType === "touch") {
          var $this = $(this);
          if (swipeLeft || swipeRight) {
            var fullWidth;
            if (swipeLeft) { fullWidth = $this.innerWidth() }
            else { fullWidth = -1 * $this.innerWidth() }

            $this.velocity({ translateX: fullWidth,
              }, {duration: 100, queue: false, easing: 'easeOutQuad', complete:
              function() {
                $this.css('border', 'none');
                $this.velocity({ height: 0, padding: 0,
                  }, {duration: 200, queue: false, easing: 'easeOutQuad', complete:
                    function() { $this.remove(); }
                  });
              }
            });
          }
          else {
            $this.velocity({ translateX: 0,
              }, {duration: 100, queue: false, easing: 'easeOutQuad'});
          }
          swipeLeft = false;
          swipeRight = false;
        }
      });

    });


    // time = 0
    // // Vertical Staggered list
    // $('ul.staggered-list.vertical li').velocity(
    //     { translateY: "100px"},
    //     { duration: 0 });

    // $('ul.staggered-list.vertical li').each(function() {
    //   $(this).velocity(
    //     { opacity: "1", translateY: "0"},
    //     { duration: 800, delay: time, easing: [60, 25] });
    //   time += 120;
    // });

    // // Fade in and Scale
    // $('.fade-in.scale').velocity(
    //     { scaleX: .4, scaleY: .4, translateX: -600},
    //     { duration: 0});
    // $('.fade-in').each(function() {
    //   $(this).velocity(
    //     { opacity: "1", scaleX: 1, scaleY: 1, translateX: 0},
    //     { duration: 800, easing: [60, 10] });
    // });
  });
}( jQuery ));
;(function($) {

  // Input: Array of JSON objects {selector, offset, callback}

  Materialize.scrollFire = function(options) {

    var didScroll = false;

    window.addEventListener("scroll", function() {
      didScroll = true;
    });

    // Rate limit to 100ms
    setInterval(function() {
      if(didScroll) {
          didScroll = false;

          var windowScroll = window.pageYOffset + window.innerHeight;

          for (var i = 0 ; i < options.length; i++) {
            // Get options from each line
            var value = options[i];
            var selector = value.selector,
                offset = value.offset,
                callback = value.callback;

            var currentElement = document.querySelector(selector);
            if ( currentElement !== null) {
              var elementOffset = currentElement.getBoundingClientRect().top + document.body.scrollTop;

              if (windowScroll > (elementOffset + offset)) {
                if (value.done != true) {
                  var callbackFunc = new Function(callback);
                  callbackFunc();
                  value.done = true;
                }
              }
            }
          };
      }
    }, 100);


    // $(window).scroll(function () {
    //   var windowScroll = $(window).scrollTop() + $(window).height();

    //   $.each( options, function( i, value ){
    //     var selector = value.selector,
    //         offset = value.offset,
    //         callback = value.callback;

    //     if ($(selector).length != 0) {
    //       var elementOffset = $(selector).offset().top;

    //       if (windowScroll > (elementOffset + offset)) {
    //         if (value.done != true) {
    //           var callbackFunc = new Function(callback);
    //           callbackFunc();
    //           value.done = true;
    //         }
    //       }
    //     }

    //   });
    // });

  }

})(jQuery);;/*!
 * pickadate.js v3.5.0, 2014/04/13
 * By Amsul, http://amsul.ca
 * Hosted on http://amsul.github.io/pickadate.js
 * Licensed under MIT
 */

(function ( factory ) {

    // AMD.
    if ( typeof define == 'function' && define.amd )
        define( 'picker', ['jquery'], factory )

    // Node.js/browserify.
    else if ( typeof exports == 'object' )
        module.exports = factory( require('jquery') )

    // Browser globals.
    else this.Picker = factory( jQuery )

}(function( $ ) {

var $window = $( window )
var $document = $( document )
var $html = $( document.documentElement )


/**
 * The picker constructor that creates a blank picker.
 */
function PickerConstructor( ELEMENT, NAME, COMPONENT, OPTIONS ) {

    // If there’s no element, return the picker constructor.
    if ( !ELEMENT ) return PickerConstructor


    var
        IS_DEFAULT_THEME = false,


        // The state of the picker.
        STATE = {
            id: ELEMENT.id || 'P' + Math.abs( ~~(Math.random() * new Date()) )
        },


        // Merge the defaults and options passed.
        SETTINGS = COMPONENT ? $.extend( true, {}, COMPONENT.defaults, OPTIONS ) : OPTIONS || {},


        // Merge the default classes with the settings classes.
        CLASSES = $.extend( {}, PickerConstructor.klasses(), SETTINGS.klass ),


        // The element node wrapper into a jQuery object.
        $ELEMENT = $( ELEMENT ),


        // Pseudo picker constructor.
        PickerInstance = function() {
            return this.start()
        },


        // The picker prototype.
        P = PickerInstance.prototype = {

            constructor: PickerInstance,

            $node: $ELEMENT,


            /**
             * Initialize everything
             */
            start: function() {

                // If it’s already started, do nothing.
                if ( STATE && STATE.start ) return P


                // Update the picker states.
                STATE.methods = {}
                STATE.start = true
                STATE.open = false
                STATE.type = ELEMENT.type


                // Confirm focus state, convert into text input to remove UA stylings,
                // and set as readonly to prevent keyboard popup.
                ELEMENT.autofocus = ELEMENT == getActiveElement()
                ELEMENT.readOnly = !SETTINGS.editable
                ELEMENT.id = ELEMENT.id || STATE.id
                if ( ELEMENT.type != 'text' ) {
                    ELEMENT.type = 'text'
                }


                // Create a new picker component with the settings.
                P.component = new COMPONENT(P, SETTINGS)


                // Create the picker root with a holder and then prepare it.
                P.$root = $( PickerConstructor._.node('div', createWrappedComponent(), CLASSES.picker, 'id="' + ELEMENT.id + '_root" tabindex="0"') )
                prepareElementRoot()


                // If there’s a format for the hidden input element, create the element.
                if ( SETTINGS.formatSubmit ) {
                    prepareElementHidden()
                }


                // Prepare the input element.
                prepareElement()


                // Insert the root as specified in the settings.
                if ( SETTINGS.container ) $( SETTINGS.container ).append( P.$root )
                else $ELEMENT.after( P.$root )


                // Bind the default component and settings events.
                P.on({
                    start: P.component.onStart,
                    render: P.component.onRender,
                    stop: P.component.onStop,
                    open: P.component.onOpen,
                    close: P.component.onClose,
                    set: P.component.onSet
                }).on({
                    start: SETTINGS.onStart,
                    render: SETTINGS.onRender,
                    stop: SETTINGS.onStop,
                    open: SETTINGS.onOpen,
                    close: SETTINGS.onClose,
                    set: SETTINGS.onSet
                })


                // Once we’re all set, check the theme in use.
                IS_DEFAULT_THEME = isUsingDefaultTheme( P.$root.children()[ 0 ] )


                // If the element has autofocus, open the picker.
                if ( ELEMENT.autofocus ) {
                    P.open()
                }


                // Trigger queued the “start” and “render” events.
                return P.trigger( 'start' ).trigger( 'render' )
            }, //start


            /**
             * Render a new picker
             */
            render: function( entireComponent ) {

                // Insert a new component holder in the root or box.
                if ( entireComponent ) P.$root.html( createWrappedComponent() )
                else P.$root.find( '.' + CLASSES.box ).html( P.component.nodes( STATE.open ) )

                // Trigger the queued “render” events.
                return P.trigger( 'render' )
            }, //render


            /**
             * Destroy everything
             */
            stop: function() {

                // If it’s already stopped, do nothing.
                if ( !STATE.start ) return P

                // Then close the picker.
                P.close()

                // Remove the hidden field.
                if ( P._hidden ) {
                    P._hidden.parentNode.removeChild( P._hidden )
                }

                // Remove the root.
                P.$root.remove()

                // Remove the input class, remove the stored data, and unbind
                // the events (after a tick for IE - see `P.close`).
                $ELEMENT.removeClass( CLASSES.input ).removeData( NAME )
                setTimeout( function() {
                    $ELEMENT.off( '.' + STATE.id )
                }, 0)

                // Restore the element state
                ELEMENT.type = STATE.type
                ELEMENT.readOnly = false

                // Trigger the queued “stop” events.
                P.trigger( 'stop' )

                // Reset the picker states.
                STATE.methods = {}
                STATE.start = false

                return P
            }, //stop


            /**
             * Open up the picker
             */
            open: function( dontGiveFocus ) {

                // If it’s already open, do nothing.
                if ( STATE.open ) return P

                // Add the “active” class.
                $ELEMENT.addClass( CLASSES.active )
                aria( ELEMENT, 'expanded', true )

                // * A Firefox bug, when `html` has `overflow:hidden`, results in
                //   killing transitions :(. So add the “opened” state on the next tick.
                //   Bug: https://bugzilla.mozilla.org/show_bug.cgi?id=625289
                setTimeout( function() {

                    // Add the “opened” class to the picker root.
                    P.$root.addClass( CLASSES.opened )
                    aria( P.$root[0], 'hidden', false )

                }, 0 )

                // If we have to give focus, bind the element and doc events.
                if ( dontGiveFocus !== false ) {

                    // Set it as open.
                    STATE.open = true

                    // Prevent the page from scrolling.
                    if ( IS_DEFAULT_THEME ) {
                        $html.
                            css( 'overflow', 'hidden' ).
                            css( 'padding-right', '+=' + getScrollbarWidth() )
                    }

                    // Pass focus to the root element’s jQuery object.
                    // * Workaround for iOS8 to bring the picker’s root into view.
                    P.$root[0].focus()

                    // Bind the document events.
                    $document.on( 'click.' + STATE.id + ' focusin.' + STATE.id, function( event ) {

                        var target = event.target

                        // If the target of the event is not the element, close the picker picker.
                        // * Don’t worry about clicks or focusins on the root because those don’t bubble up.
                        //   Also, for Firefox, a click on an `option` element bubbles up directly
                        //   to the doc. So make sure the target wasn't the doc.
                        // * In Firefox stopPropagation() doesn’t prevent right-click events from bubbling,
                        //   which causes the picker to unexpectedly close when right-clicking it. So make
                        //   sure the event wasn’t a right-click.
                        if ( target != ELEMENT && target != document && event.which != 3 ) {

                            // If the target was the holder that covers the screen,
                            // keep the element focused to maintain tabindex.
                            P.close( target === P.$root.children()[0] )
                        }

                    }).on( 'keydown.' + STATE.id, function( event ) {

                        var
                            // Get the keycode.
                            keycode = event.keyCode,

                            // Translate that to a selection change.
                            keycodeToMove = P.component.key[ keycode ],

                            // Grab the target.
                            target = event.target


                        // On escape, close the picker and give focus.
                        if ( keycode == 27 ) {
                            P.close( true )
                        }


                        // Check if there is a key movement or “enter” keypress on the element.
                        else if ( target == P.$root[0] && ( keycodeToMove || keycode == 13 ) ) {

                            // Prevent the default action to stop page movement.
                            event.preventDefault()

                            // Trigger the key movement action.
                            if ( keycodeToMove ) {
                                PickerConstructor._.trigger( P.component.key.go, P, [ PickerConstructor._.trigger( keycodeToMove ) ] )
                            }

                            // On “enter”, if the highlighted item isn’t disabled, set the value and close.
                            else if ( !P.$root.find( '.' + CLASSES.highlighted ).hasClass( CLASSES.disabled ) ) {
                                P.set( 'select', P.component.item.highlight ).close()
                            }
                        }


                        // If the target is within the root and “enter” is pressed,
                        // prevent the default action and trigger a click on the target instead.
                        else if ( $.contains( P.$root[0], target ) && keycode == 13 ) {
                            event.preventDefault()
                            target.click()
                        }
                    })
                }

                // Trigger the queued “open” events.
                return P.trigger( 'open' )
            }, //open


            /**
             * Close the picker
             */
            close: function( giveFocus ) {

                // If we need to give focus, do it before changing states.
                if ( giveFocus ) {
                    // ....ah yes! It would’ve been incomplete without a crazy workaround for IE :|
                    // The focus is triggered *after* the close has completed - causing it
                    // to open again. So unbind and rebind the event at the next tick.
                    P.$root.off( 'focus.toOpen' )[0].focus()
                    setTimeout( function() {
                        P.$root.on( 'focus.toOpen', handleFocusToOpenEvent )
                    }, 0 )
                }

                // Remove the “active” class.
                $ELEMENT.removeClass( CLASSES.active )
                aria( ELEMENT, 'expanded', false )

                // * A Firefox bug, when `html` has `overflow:hidden`, results in
                //   killing transitions :(. So remove the “opened” state on the next tick.
                //   Bug: https://bugzilla.mozilla.org/show_bug.cgi?id=625289
                setTimeout( function() {

                    // Remove the “opened” and “focused” class from the picker root.
                    P.$root.removeClass( CLASSES.opened + ' ' + CLASSES.focused )
                    aria( P.$root[0], 'hidden', true )

                }, 0 )

                // If it’s already closed, do nothing more.
                if ( !STATE.open ) return P

                // Set it as closed.
                STATE.open = false

                // Allow the page to scroll.
                if ( IS_DEFAULT_THEME ) {
                    $html.
                        css( 'overflow', '' ).
                        css( 'padding-right', '-=' + getScrollbarWidth() )
                }

                // Unbind the document events.
                $document.off( '.' + STATE.id )

                // Trigger the queued “close” events.
                return P.trigger( 'close' )
            }, //close


            /**
             * Clear the values
             */
            clear: function( options ) {
                return P.set( 'clear', null, options )
            }, //clear


            /**
             * Set something
             */
            set: function( thing, value, options ) {

                var thingItem, thingValue,
                    thingIsObject = $.isPlainObject( thing ),
                    thingObject = thingIsObject ? thing : {}

                // Make sure we have usable options.
                options = thingIsObject && $.isPlainObject( value ) ? value : options || {}

                if ( thing ) {

                    // If the thing isn’t an object, make it one.
                    if ( !thingIsObject ) {
                        thingObject[ thing ] = value
                    }

                    // Go through the things of items to set.
                    for ( thingItem in thingObject ) {

                        // Grab the value of the thing.
                        thingValue = thingObject[ thingItem ]

                        // First, if the item exists and there’s a value, set it.
                        if ( thingItem in P.component.item ) {
                            if ( thingValue === undefined ) thingValue = null
                            P.component.set( thingItem, thingValue, options )
                        }

                        // Then, check to update the element value and broadcast a change.
                        if ( thingItem == 'select' || thingItem == 'clear' ) {
                            $ELEMENT.
                                val( thingItem == 'clear' ? '' : P.get( thingItem, SETTINGS.format ) ).
                                trigger( 'change' )
                        }
                    }

                    // Render a new picker.
                    P.render()
                }

                // When the method isn’t muted, trigger queued “set” events and pass the `thingObject`.
                return options.muted ? P : P.trigger( 'set', thingObject )
            }, //set


            /**
             * Get something
             */
            get: function( thing, format ) {

                // Make sure there’s something to get.
                thing = thing || 'value'

                // If a picker state exists, return that.
                if ( STATE[ thing ] != null ) {
                    return STATE[ thing ]
                }

                // Return the submission value, if that.
                if ( thing == 'valueSubmit' ) {
                    if ( P._hidden ) {
                        return P._hidden.value
                    }
                    thing = 'value'
                }

                // Return the value, if that.
                if ( thing == 'value' ) {
                    return ELEMENT.value
                }

                // Check if a component item exists, return that.
                if ( thing in P.component.item ) {
                    if ( typeof format == 'string' ) {
                        var thingValue = P.component.get( thing )
                        return thingValue ?
                            PickerConstructor._.trigger(
                                P.component.formats.toString,
                                P.component,
                                [ format, thingValue ]
                            ) : ''
                    }
                    return P.component.get( thing )
                }
            }, //get



            /**
             * Bind events on the things.
             */
            on: function( thing, method, internal ) {

                var thingName, thingMethod,
                    thingIsObject = $.isPlainObject( thing ),
                    thingObject = thingIsObject ? thing : {}

                if ( thing ) {

                    // If the thing isn’t an object, make it one.
                    if ( !thingIsObject ) {
                        thingObject[ thing ] = method
                    }

                    // Go through the things to bind to.
                    for ( thingName in thingObject ) {

                        // Grab the method of the thing.
                        thingMethod = thingObject[ thingName ]

                        // If it was an internal binding, prefix it.
                        if ( internal ) {
                            thingName = '_' + thingName
                        }

                        // Make sure the thing methods collection exists.
                        STATE.methods[ thingName ] = STATE.methods[ thingName ] || []

                        // Add the method to the relative method collection.
                        STATE.methods[ thingName ].push( thingMethod )
                    }
                }

                return P
            }, //on



            /**
             * Unbind events on the things.
             */
            off: function() {
                var i, thingName,
                    names = arguments;
                for ( i = 0, namesCount = names.length; i < namesCount; i += 1 ) {
                    thingName = names[i]
                    if ( thingName in STATE.methods ) {
                        delete STATE.methods[thingName]
                    }
                }
                return P
            },


            /**
             * Fire off method events.
             */
            trigger: function( name, data ) {
                var _trigger = function( name ) {
                    var methodList = STATE.methods[ name ]
                    if ( methodList ) {
                        methodList.map( function( method ) {
                            PickerConstructor._.trigger( method, P, [ data ] )
                        })
                    }
                }
                _trigger( '_' + name )
                _trigger( name )
                return P
            } //trigger
        } //PickerInstance.prototype


    /**
     * Wrap the picker holder components together.
     */
    function createWrappedComponent() {

        // Create a picker wrapper holder
        return PickerConstructor._.node( 'div',

            // Create a picker wrapper node
            PickerConstructor._.node( 'div',

                // Create a picker frame
                PickerConstructor._.node( 'div',

                    // Create a picker box node
                    PickerConstructor._.node( 'div',

                        // Create the components nodes.
                        P.component.nodes( STATE.open ),

                        // The picker box class
                        CLASSES.box
                    ),

                    // Picker wrap class
                    CLASSES.wrap
                ),

                // Picker frame class
                CLASSES.frame
            ),

            // Picker holder class
            CLASSES.holder
        ) //endreturn
    } //createWrappedComponent



    /**
     * Prepare the input element with all bindings.
     */
    function prepareElement() {

        $ELEMENT.

            // Store the picker data by component name.
            data(NAME, P).

            // Add the “input” class name.
            addClass(CLASSES.input).

            // Remove the tabindex.
            attr('tabindex', -1).

            // If there’s a `data-value`, update the value of the element.
            val( $ELEMENT.data('value') ?
                P.get('select', SETTINGS.format) :
                ELEMENT.value
            )


        // Only bind keydown events if the element isn’t editable.
        if ( !SETTINGS.editable ) {

            $ELEMENT.

                // On focus/click, focus onto the root to open it up.
                on( 'focus.' + STATE.id + ' click.' + STATE.id, function( event ) {
                    event.preventDefault()
                    P.$root[0].focus()
                }).

                // Handle keyboard event based on the picker being opened or not.
                on( 'keydown.' + STATE.id, handleKeydownEvent )
        }


        // Update the aria attributes.
        aria(ELEMENT, {
            haspopup: true,
            expanded: false,
            readonly: false,
            owns: ELEMENT.id + '_root'
        })
    }


    /**
     * Prepare the root picker element with all bindings.
     */
    function prepareElementRoot() {

        P.$root.

            on({

                // For iOS8.
                keydown: handleKeydownEvent,

                // When something within the root is focused, stop from bubbling
                // to the doc and remove the “focused” state from the root.
                focusin: function( event ) {
                    P.$root.removeClass( CLASSES.focused )
                    event.stopPropagation()
                },

                // When something within the root holder is clicked, stop it
                // from bubbling to the doc.
                'mousedown click': function( event ) {

                    var target = event.target

                    // Make sure the target isn’t the root holder so it can bubble up.
                    if ( target != P.$root.children()[ 0 ] ) {

                        event.stopPropagation()

                        // * For mousedown events, cancel the default action in order to
                        //   prevent cases where focus is shifted onto external elements
                        //   when using things like jQuery mobile or MagnificPopup (ref: #249 & #120).
                        //   Also, for Firefox, don’t prevent action on the `option` element.
                        if ( event.type == 'mousedown' && !$( target ).is( 'input, select, textarea, button, option' )) {

                            event.preventDefault()

                            // Re-focus onto the root so that users can click away
                            // from elements focused within the picker.
                            P.$root[0].focus()
                        }
                    }
                }
            }).

            // Add/remove the “target” class on focus and blur.
            on({
                focus: function() {
                    $ELEMENT.addClass( CLASSES.target )
                },
                blur: function() {
                    $ELEMENT.removeClass( CLASSES.target )
                }
            }).

            // Open the picker and adjust the root “focused” state
            on( 'focus.toOpen', handleFocusToOpenEvent ).

            // If there’s a click on an actionable element, carry out the actions.
            on( 'click', '[data-pick], [data-nav], [data-clear], [data-close]', function() {

                var $target = $( this ),
                    targetData = $target.data(),
                    targetDisabled = $target.hasClass( CLASSES.navDisabled ) || $target.hasClass( CLASSES.disabled ),

                    // * For IE, non-focusable elements can be active elements as well
                    //   (http://stackoverflow.com/a/2684561).
                    activeElement = getActiveElement()
                    activeElement = activeElement && ( activeElement.type || activeElement.href )

                // If it’s disabled or nothing inside is actively focused, re-focus the element.
                if ( targetDisabled || activeElement && !$.contains( P.$root[0], activeElement ) ) {
                    P.$root[0].focus()
                }

                // If something is superficially changed, update the `highlight` based on the `nav`.
                if ( !targetDisabled && targetData.nav ) {
                    P.set( 'highlight', P.component.item.highlight, { nav: targetData.nav } )
                }

                // If something is picked, set `select` then close with focus.
                else if ( !targetDisabled && 'pick' in targetData ) {
                    P.set( 'select', targetData.pick )
                }

                // If a “clear” button is pressed, empty the values and close with focus.
                else if ( targetData.clear ) {
                    P.clear().close( true )
                }

                else if ( targetData.close ) {
                    P.close( true )
                }

            }) //P.$root

        aria( P.$root[0], 'hidden', true )
    }


     /**
      * Prepare the hidden input element along with all bindings.
      */
    function prepareElementHidden() {

        var name

        if ( SETTINGS.hiddenName === true ) {
            name = ELEMENT.name
            ELEMENT.name = ''
        }
        else {
            name = [
                typeof SETTINGS.hiddenPrefix == 'string' ? SETTINGS.hiddenPrefix : '',
                typeof SETTINGS.hiddenSuffix == 'string' ? SETTINGS.hiddenSuffix : '_submit'
            ]
            name = name[0] + ELEMENT.name + name[1]
        }

        P._hidden = $(
            '<input ' +
            'type=hidden ' +

            // Create the name using the original input’s with a prefix and suffix.
            'name="' + name + '"' +

            // If the element has a value, set the hidden value as well.
            (
                $ELEMENT.data('value') || ELEMENT.value ?
                    ' value="' + P.get('select', SETTINGS.formatSubmit) + '"' :
                    ''
            ) +
            '>'
        )[0]

        $ELEMENT.

            // If the value changes, update the hidden input with the correct format.
            on('change.' + STATE.id, function() {
                P._hidden.value = ELEMENT.value ?
                    P.get('select', SETTINGS.formatSubmit) :
                    ''
            })


        // Insert the hidden input as specified in the settings.
        if ( SETTINGS.container ) $( SETTINGS.container ).append( P._hidden )
        else $ELEMENT.after( P._hidden )
    }


    // For iOS8.
    function handleKeydownEvent( event ) {

        var keycode = event.keyCode,

            // Check if one of the delete keys was pressed.
            isKeycodeDelete = /^(8|46)$/.test(keycode)

        // For some reason IE clears the input value on “escape”.
        if ( keycode == 27 ) {
            P.close()
            return false
        }

        // Check if `space` or `delete` was pressed or the picker is closed with a key movement.
        if ( keycode == 32 || isKeycodeDelete || !STATE.open && P.component.key[keycode] ) {

            // Prevent it from moving the page and bubbling to doc.
            event.preventDefault()
            event.stopPropagation()

            // If `delete` was pressed, clear the values and close the picker.
            // Otherwise open the picker.
            if ( isKeycodeDelete ) { P.clear().close() }
            else { P.open() }
        }
    }


    // Separated for IE
    function handleFocusToOpenEvent( event ) {

        // Stop the event from propagating to the doc.
        event.stopPropagation()

        // If it’s a focus event, add the “focused” class to the root.
        if ( event.type == 'focus' ) {
            P.$root.addClass( CLASSES.focused )
        }

        // And then finally open the picker.
        P.open()
    }


    // Return a new picker instance.
    return new PickerInstance()
} //PickerConstructor



/**
 * The default classes and prefix to use for the HTML classes.
 */
PickerConstructor.klasses = function( prefix ) {
    prefix = prefix || 'picker'
    return {

        picker: prefix,
        opened: prefix + '--opened',
        focused: prefix + '--focused',

        input: prefix + '__input',
        active: prefix + '__input--active',
        target: prefix + '__input--target',

        holder: prefix + '__holder',

        frame: prefix + '__frame',
        wrap: prefix + '__wrap',

        box: prefix + '__box'
    }
} //PickerConstructor.klasses



/**
 * Check if the default theme is being used.
 */
function isUsingDefaultTheme( element ) {

    var theme,
        prop = 'position'

    // For IE.
    if ( element.currentStyle ) {
        theme = element.currentStyle[prop]
    }

    // For normal browsers.
    else if ( window.getComputedStyle ) {
        theme = getComputedStyle( element )[prop]
    }

    return theme == 'fixed'
}



/**
 * Get the width of the browser’s scrollbar.
 * Taken from: https://github.com/VodkaBears/Remodal/blob/master/src/jquery.remodal.js
 */
function getScrollbarWidth() {

    if ( $html.height() <= $window.height() ) {
        return 0
    }

    var $outer = $( '<div style="visibility:hidden;width:100px" />' ).
        appendTo( 'body' )

    // Get the width without scrollbars.
    var widthWithoutScroll = $outer[0].offsetWidth

    // Force adding scrollbars.
    $outer.css( 'overflow', 'scroll' )

    // Add the inner div.
    var $inner = $( '<div style="width:100%" />' ).appendTo( $outer )

    // Get the width with scrollbars.
    var widthWithScroll = $inner[0].offsetWidth

    // Remove the divs.
    $outer.remove()

    // Return the difference between the widths.
    return widthWithoutScroll - widthWithScroll
}



/**
 * PickerConstructor helper methods.
 */
PickerConstructor._ = {

    /**
     * Create a group of nodes. Expects:
     * `
        {
            min:    {Integer},
            max:    {Integer},
            i:      {Integer},
            node:   {String},
            item:   {Function}
        }
     * `
     */
    group: function( groupObject ) {

        var
            // Scope for the looped object
            loopObjectScope,

            // Create the nodes list
            nodesList = '',

            // The counter starts from the `min`
            counter = PickerConstructor._.trigger( groupObject.min, groupObject )


        // Loop from the `min` to `max`, incrementing by `i`
        for ( ; counter <= PickerConstructor._.trigger( groupObject.max, groupObject, [ counter ] ); counter += groupObject.i ) {

            // Trigger the `item` function within scope of the object
            loopObjectScope = PickerConstructor._.trigger( groupObject.item, groupObject, [ counter ] )

            // Splice the subgroup and create nodes out of the sub nodes
            nodesList += PickerConstructor._.node(
                groupObject.node,
                loopObjectScope[ 0 ],   // the node
                loopObjectScope[ 1 ],   // the classes
                loopObjectScope[ 2 ]    // the attributes
            )
        }

        // Return the list of nodes
        return nodesList
    }, //group


    /**
     * Create a dom node string
     */
    node: function( wrapper, item, klass, attribute ) {

        // If the item is false-y, just return an empty string
        if ( !item ) return ''

        // If the item is an array, do a join
        item = $.isArray( item ) ? item.join( '' ) : item

        // Check for the class
        klass = klass ? ' class="' + klass + '"' : ''

        // Check for any attributes
        attribute = attribute ? ' ' + attribute : ''

        // Return the wrapped item
        return '<' + wrapper + klass + attribute + '>' + item + '</' + wrapper + '>'
    }, //node


    /**
     * Lead numbers below 10 with a zero.
     */
    lead: function( number ) {
        return ( number < 10 ? '0': '' ) + number
    },


    /**
     * Trigger a function otherwise return the value.
     */
    trigger: function( callback, scope, args ) {
        return typeof callback == 'function' ? callback.apply( scope, args || [] ) : callback
    },


    /**
     * If the second character is a digit, length is 2 otherwise 1.
     */
    digits: function( string ) {
        return ( /\d/ ).test( string[ 1 ] ) ? 2 : 1
    },


    /**
     * Tell if something is a date object.
     */
    isDate: function( value ) {
        return {}.toString.call( value ).indexOf( 'Date' ) > -1 && this.isInteger( value.getDate() )
    },


    /**
     * Tell if something is an integer.
     */
    isInteger: function( value ) {
        return {}.toString.call( value ).indexOf( 'Number' ) > -1 && value % 1 === 0
    },


    /**
     * Create ARIA attribute strings.
     */
    ariaAttr: ariaAttr
} //PickerConstructor._



/**
 * Extend the picker with a component and defaults.
 */
PickerConstructor.extend = function( name, Component ) {

    // Extend jQuery.
    $.fn[ name ] = function( options, action ) {

        // Grab the component data.
        var componentData = this.data( name )

        // If the picker is requested, return the data object.
        if ( options == 'picker' ) {
            return componentData
        }

        // If the component data exists and `options` is a string, carry out the action.
        if ( componentData && typeof options == 'string' ) {
            return PickerConstructor._.trigger( componentData[ options ], componentData, [ action ] )
        }

        // Otherwise go through each matched element and if the component
        // doesn’t exist, create a new picker using `this` element
        // and merging the defaults and options with a deep copy.
        return this.each( function() {
            var $this = $( this )
            if ( !$this.data( name ) ) {
                new PickerConstructor( this, name, Component, options )
            }
        })
    }

    // Set the defaults.
    $.fn[ name ].defaults = Component.defaults
} //PickerConstructor.extend



function aria(element, attribute, value) {
    if ( $.isPlainObject(attribute) ) {
        for ( var key in attribute ) {
            ariaSet(element, key, attribute[key])
        }
    }
    else {
        ariaSet(element, attribute, value)
    }
}
function ariaSet(element, attribute, value) {
    element.setAttribute(
        (attribute == 'role' ? '' : 'aria-') + attribute,
        value
    )
}
function ariaAttr(attribute, data) {
    if ( !$.isPlainObject(attribute) ) {
        attribute = { attribute: data }
    }
    data = ''
    for ( var key in attribute ) {
        var attr = (key == 'role' ? '' : 'aria-') + key,
            attrVal = attribute[key]
        data += attrVal == null ? '' : attr + '="' + attribute[key] + '"'
    }
    return data
}

// IE8 bug throws an error for activeElements within iframes.
function getActiveElement() {
    try {
        return document.activeElement
    } catch ( err ) { }
}



// Expose the picker constructor.
return PickerConstructor


}));


;/*!
 * Date picker for pickadate.js v3.5.0
 * http://amsul.github.io/pickadate.js/date.htm
 */

(function ( factory ) {

    // AMD.
    if ( typeof define == 'function' && define.amd )
        define( ['picker', 'jquery'], factory )

    // Node.js/browserify.
    else if ( typeof exports == 'object' )
        module.exports = factory( require('./picker.js'), require('jquery') )

    // Browser globals.
    else factory( Picker, jQuery )

}(function( Picker, $ ) {


/**
 * Globals and constants
 */
var DAYS_IN_WEEK = 7,
    WEEKS_IN_CALENDAR = 6,
    _ = Picker._



/**
 * The date picker constructor
 */
function DatePicker( picker, settings ) {

    var calendar = this,
        element = picker.$node[ 0 ],
        elementValue = element.value,
        elementDataValue = picker.$node.data( 'value' ),
        valueString = elementDataValue || elementValue,
        formatString = elementDataValue ? settings.formatSubmit : settings.format,
        isRTL = function() {

            return element.currentStyle ?

                // For IE.
                element.currentStyle.direction == 'rtl' :

                // For normal browsers.
                getComputedStyle( picker.$root[0] ).direction == 'rtl'
        }

    calendar.settings = settings
    calendar.$node = picker.$node

    // The queue of methods that will be used to build item objects.
    calendar.queue = {
        min: 'measure create',
        max: 'measure create',
        now: 'now create',
        select: 'parse create validate',
        highlight: 'parse navigate create validate',
        view: 'parse create validate viewset',
        disable: 'deactivate',
        enable: 'activate'
    }

    // The component's item object.
    calendar.item = {}

    calendar.item.clear = null
    calendar.item.disable = ( settings.disable || [] ).slice( 0 )
    calendar.item.enable = -(function( collectionDisabled ) {
        return collectionDisabled[ 0 ] === true ? collectionDisabled.shift() : -1
    })( calendar.item.disable )

    calendar.
        set( 'min', settings.min ).
        set( 'max', settings.max ).
        set( 'now' )

    // When there’s a value, set the `select`, which in turn
    // also sets the `highlight` and `view`.
    if ( valueString ) {
        calendar.set( 'select', valueString, { format: formatString })
    }

    // If there’s no value, default to highlighting “today”.
    else {
        calendar.
            set( 'select', null ).
            set( 'highlight', calendar.item.now )
    }


    // The keycode to movement mapping.
    calendar.key = {
        40: 7, // Down
        38: -7, // Up
        39: function() { return isRTL() ? -1 : 1 }, // Right
        37: function() { return isRTL() ? 1 : -1 }, // Left
        go: function( timeChange ) {
            var highlightedObject = calendar.item.highlight,
                targetDate = new Date( highlightedObject.year, highlightedObject.month, highlightedObject.date + timeChange )
            calendar.set(
                'highlight',
                targetDate,
                { interval: timeChange }
            )
            this.render()
        }
    }


    // Bind some picker events.
    picker.
        on( 'render', function() {
            picker.$root.find( '.' + settings.klass.selectMonth ).on( 'change', function() {
                var value = this.value
                if ( value ) {
                    picker.set( 'highlight', [ picker.get( 'view' ).year, value, picker.get( 'highlight' ).date ] )
                    picker.$root.find( '.' + settings.klass.selectMonth ).trigger( 'focus' )
                }
            })
            picker.$root.find( '.' + settings.klass.selectYear ).on( 'change', function() {
                var value = this.value
                if ( value ) {
                    picker.set( 'highlight', [ value, picker.get( 'view' ).month, picker.get( 'highlight' ).date ] )
                    picker.$root.find( '.' + settings.klass.selectYear ).trigger( 'focus' )
                }
            })
        }, 1 ).
        on( 'open', function() {
            var includeToday = ''
            if ( calendar.disabled( calendar.get('now') ) ) {
                includeToday = ':not(.' + settings.klass.buttonToday + ')'
            }
            picker.$root.find( 'button' + includeToday + ', select' ).attr( 'disabled', false )
        }, 1 ).
        on( 'close', function() {
            picker.$root.find( 'button, select' ).attr( 'disabled', true )
        }, 1 )

} //DatePicker


/**
 * Set a datepicker item object.
 */
DatePicker.prototype.set = function( type, value, options ) {

    var calendar = this,
        calendarItem = calendar.item

    // If the value is `null` just set it immediately.
    if ( value === null ) {
        if ( type == 'clear' ) type = 'select'
        calendarItem[ type ] = value
        return calendar
    }

    // Otherwise go through the queue of methods, and invoke the functions.
    // Update this as the time unit, and set the final value as this item.
    // * In the case of `enable`, keep the queue but set `disable` instead.
    //   And in the case of `flip`, keep the queue but set `enable` instead.
    calendarItem[ ( type == 'enable' ? 'disable' : type == 'flip' ? 'enable' : type ) ] = calendar.queue[ type ].split( ' ' ).map( function( method ) {
        value = calendar[ method ]( type, value, options )
        return value
    }).pop()

    // Check if we need to cascade through more updates.
    if ( type == 'select' ) {
        calendar.set( 'highlight', calendarItem.select, options )
    }
    else if ( type == 'highlight' ) {
        calendar.set( 'view', calendarItem.highlight, options )
    }
    else if ( type.match( /^(flip|min|max|disable|enable)$/ ) ) {
        if ( calendarItem.select && calendar.disabled( calendarItem.select ) ) {
            calendar.set( 'select', calendarItem.select, options )
        }
        if ( calendarItem.highlight && calendar.disabled( calendarItem.highlight ) ) {
            calendar.set( 'highlight', calendarItem.highlight, options )
        }
    }

    return calendar
} //DatePicker.prototype.set


/**
 * Get a datepicker item object.
 */
DatePicker.prototype.get = function( type ) {
    return this.item[ type ]
} //DatePicker.prototype.get


/**
 * Create a picker date object.
 */
DatePicker.prototype.create = function( type, value, options ) {

    var isInfiniteValue,
        calendar = this

    // If there’s no value, use the type as the value.
    value = value === undefined ? type : value


    // If it’s infinity, update the value.
    if ( value == -Infinity || value == Infinity ) {
        isInfiniteValue = value
    }

    // If it’s an object, use the native date object.
    else if ( $.isPlainObject( value ) && _.isInteger( value.pick ) ) {
        value = value.obj
    }

    // If it’s an array, convert it into a date and make sure
    // that it’s a valid date – otherwise default to today.
    else if ( $.isArray( value ) ) {
        value = new Date( value[ 0 ], value[ 1 ], value[ 2 ] )
        value = _.isDate( value ) ? value : calendar.create().obj
    }

    // If it’s a number or date object, make a normalized date.
    else if ( _.isInteger( value ) || _.isDate( value ) ) {
        value = calendar.normalize( new Date( value ), options )
    }

    // If it’s a literal true or any other case, set it to now.
    else /*if ( value === true )*/ {
        value = calendar.now( type, value, options )
    }

    // Return the compiled object.
    return {
        year: isInfiniteValue || value.getFullYear(),
        month: isInfiniteValue || value.getMonth(),
        date: isInfiniteValue || value.getDate(),
        day: isInfiniteValue || value.getDay(),
        obj: isInfiniteValue || value,
        pick: isInfiniteValue || value.getTime()
    }
} //DatePicker.prototype.create


/**
 * Create a range limit object using an array, date object,
 * literal “true”, or integer relative to another time.
 */
DatePicker.prototype.createRange = function( from, to ) {

    var calendar = this,
        createDate = function( date ) {
            if ( date === true || $.isArray( date ) || _.isDate( date ) ) {
                return calendar.create( date )
            }
            return date
        }

    // Create objects if possible.
    if ( !_.isInteger( from ) ) {
        from = createDate( from )
    }
    if ( !_.isInteger( to ) ) {
        to = createDate( to )
    }

    // Create relative dates.
    if ( _.isInteger( from ) && $.isPlainObject( to ) ) {
        from = [ to.year, to.month, to.date + from ];
    }
    else if ( _.isInteger( to ) && $.isPlainObject( from ) ) {
        to = [ from.year, from.month, from.date + to ];
    }

    return {
        from: createDate( from ),
        to: createDate( to )
    }
} //DatePicker.prototype.createRange


/**
 * Check if a date unit falls within a date range object.
 */
DatePicker.prototype.withinRange = function( range, dateUnit ) {
    range = this.createRange(range.from, range.to)
    return dateUnit.pick >= range.from.pick && dateUnit.pick <= range.to.pick
}


/**
 * Check if two date range objects overlap.
 */
DatePicker.prototype.overlapRanges = function( one, two ) {

    var calendar = this

    // Convert the ranges into comparable dates.
    one = calendar.createRange( one.from, one.to )
    two = calendar.createRange( two.from, two.to )

    return calendar.withinRange( one, two.from ) || calendar.withinRange( one, two.to ) ||
        calendar.withinRange( two, one.from ) || calendar.withinRange( two, one.to )
}


/**
 * Get the date today.
 */
DatePicker.prototype.now = function( type, value, options ) {
    value = new Date()
    if ( options && options.rel ) {
        value.setDate( value.getDate() + options.rel )
    }
    return this.normalize( value, options )
}


/**
 * Navigate to next/prev month.
 */
DatePicker.prototype.navigate = function( type, value, options ) {

    var targetDateObject,
        targetYear,
        targetMonth,
        targetDate,
        isTargetArray = $.isArray( value ),
        isTargetObject = $.isPlainObject( value ),
        viewsetObject = this.item.view/*,
        safety = 100*/


    if ( isTargetArray || isTargetObject ) {

        if ( isTargetObject ) {
            targetYear = value.year
            targetMonth = value.month
            targetDate = value.date
        }
        else {
            targetYear = +value[0]
            targetMonth = +value[1]
            targetDate = +value[2]
        }

        // If we’re navigating months but the view is in a different
        // month, navigate to the view’s year and month.
        if ( options && options.nav && viewsetObject && viewsetObject.month !== targetMonth ) {
            targetYear = viewsetObject.year
            targetMonth = viewsetObject.month
        }

        // Figure out the expected target year and month.
        targetDateObject = new Date( targetYear, targetMonth + ( options && options.nav ? options.nav : 0 ), 1 )
        targetYear = targetDateObject.getFullYear()
        targetMonth = targetDateObject.getMonth()

        // If the month we’re going to doesn’t have enough days,
        // keep decreasing the date until we reach the month’s last date.
        while ( /*safety &&*/ new Date( targetYear, targetMonth, targetDate ).getMonth() !== targetMonth ) {
            targetDate -= 1
            /*safety -= 1
            if ( !safety ) {
                throw 'Fell into an infinite loop while navigating to ' + new Date( targetYear, targetMonth, targetDate ) + '.'
            }*/
        }

        value = [ targetYear, targetMonth, targetDate ]
    }

    return value
} //DatePicker.prototype.navigate


/**
 * Normalize a date by setting the hours to midnight.
 */
DatePicker.prototype.normalize = function( value/*, options*/ ) {
    value.setHours( 0, 0, 0, 0 )
    return value
}


/**
 * Measure the range of dates.
 */
DatePicker.prototype.measure = function( type, value/*, options*/ ) {

    var calendar = this

    // If it’s anything false-y, remove the limits.
    if ( !value ) {
        value = type == 'min' ? -Infinity : Infinity
    }

    // If it’s a string, parse it.
    else if ( typeof value == 'string' ) {
        value = calendar.parse( type, value )
    }

    // If it's an integer, get a date relative to today.
    else if ( _.isInteger( value ) ) {
        value = calendar.now( type, value, { rel: value } )
    }

    return value
} ///DatePicker.prototype.measure


/**
 * Create a viewset object based on navigation.
 */
DatePicker.prototype.viewset = function( type, dateObject/*, options*/ ) {
    return this.create([ dateObject.year, dateObject.month, 1 ])
}


/**
 * Validate a date as enabled and shift if needed.
 */
DatePicker.prototype.validate = function( type, dateObject, options ) {

    var calendar = this,

        // Keep a reference to the original date.
        originalDateObject = dateObject,

        // Make sure we have an interval.
        interval = options && options.interval ? options.interval : 1,

        // Check if the calendar enabled dates are inverted.
        isFlippedBase = calendar.item.enable === -1,

        // Check if we have any enabled dates after/before now.
        hasEnabledBeforeTarget, hasEnabledAfterTarget,

        // The min & max limits.
        minLimitObject = calendar.item.min,
        maxLimitObject = calendar.item.max,

        // Check if we’ve reached the limit during shifting.
        reachedMin, reachedMax,

        // Check if the calendar is inverted and at least one weekday is enabled.
        hasEnabledWeekdays = isFlippedBase && calendar.item.disable.filter( function( value ) {

            // If there’s a date, check where it is relative to the target.
            if ( $.isArray( value ) ) {
                var dateTime = calendar.create( value ).pick
                if ( dateTime < dateObject.pick ) hasEnabledBeforeTarget = true
                else if ( dateTime > dateObject.pick ) hasEnabledAfterTarget = true
            }

            // Return only integers for enabled weekdays.
            return _.isInteger( value )
        }).length/*,

        safety = 100*/



    // Cases to validate for:
    // [1] Not inverted and date disabled.
    // [2] Inverted and some dates enabled.
    // [3] Not inverted and out of range.
    //
    // Cases to **not** validate for:
    // • Navigating months.
    // • Not inverted and date enabled.
    // • Inverted and all dates disabled.
    // • ..and anything else.
    if ( !options || !options.nav ) if (
        /* 1 */ ( !isFlippedBase && calendar.disabled( dateObject ) ) ||
        /* 2 */ ( isFlippedBase && calendar.disabled( dateObject ) && ( hasEnabledWeekdays || hasEnabledBeforeTarget || hasEnabledAfterTarget ) ) ||
        /* 3 */ ( !isFlippedBase && (dateObject.pick <= minLimitObject.pick || dateObject.pick >= maxLimitObject.pick) )
    ) {


        // When inverted, flip the direction if there aren’t any enabled weekdays
        // and there are no enabled dates in the direction of the interval.
        if ( isFlippedBase && !hasEnabledWeekdays && ( ( !hasEnabledAfterTarget && interval > 0 ) || ( !hasEnabledBeforeTarget && interval < 0 ) ) ) {
            interval *= -1
        }


        // Keep looping until we reach an enabled date.
        while ( /*safety &&*/ calendar.disabled( dateObject ) ) {

            /*safety -= 1
            if ( !safety ) {
                throw 'Fell into an infinite loop while validating ' + dateObject.obj + '.'
            }*/


            // If we’ve looped into the next/prev month with a large interval, return to the original date and flatten the interval.
            if ( Math.abs( interval ) > 1 && ( dateObject.month < originalDateObject.month || dateObject.month > originalDateObject.month ) ) {
                dateObject = originalDateObject
                interval = interval > 0 ? 1 : -1
            }


            // If we’ve reached the min/max limit, reverse the direction, flatten the interval and set it to the limit.
            if ( dateObject.pick <= minLimitObject.pick ) {
                reachedMin = true
                interval = 1
                dateObject = calendar.create([
                    minLimitObject.year,
                    minLimitObject.month,
                    minLimitObject.date + (dateObject.pick === minLimitObject.pick ? 0 : -1)
                ])
            }
            else if ( dateObject.pick >= maxLimitObject.pick ) {
                reachedMax = true
                interval = -1
                dateObject = calendar.create([
                    maxLimitObject.year,
                    maxLimitObject.month,
                    maxLimitObject.date + (dateObject.pick === maxLimitObject.pick ? 0 : 1)
                ])
            }


            // If we’ve reached both limits, just break out of the loop.
            if ( reachedMin && reachedMax ) {
                break
            }


            // Finally, create the shifted date using the interval and keep looping.
            dateObject = calendar.create([ dateObject.year, dateObject.month, dateObject.date + interval ])
        }

    } //endif


    // Return the date object settled on.
    return dateObject
} //DatePicker.prototype.validate


/**
 * Check if a date is disabled.
 */
DatePicker.prototype.disabled = function( dateToVerify ) {

    var
        calendar = this,

        // Filter through the disabled dates to check if this is one.
        isDisabledMatch = calendar.item.disable.filter( function( dateToDisable ) {

            // If the date is a number, match the weekday with 0index and `firstDay` check.
            if ( _.isInteger( dateToDisable ) ) {
                return dateToVerify.day === ( calendar.settings.firstDay ? dateToDisable : dateToDisable - 1 ) % 7
            }

            // If it’s an array or a native JS date, create and match the exact date.
            if ( $.isArray( dateToDisable ) || _.isDate( dateToDisable ) ) {
                return dateToVerify.pick === calendar.create( dateToDisable ).pick
            }

            // If it’s an object, match a date within the “from” and “to” range.
            if ( $.isPlainObject( dateToDisable ) ) {
                return calendar.withinRange( dateToDisable, dateToVerify )
            }
        })

    // If this date matches a disabled date, confirm it’s not inverted.
    isDisabledMatch = isDisabledMatch.length && !isDisabledMatch.filter(function( dateToDisable ) {
        return $.isArray( dateToDisable ) && dateToDisable[3] == 'inverted' ||
            $.isPlainObject( dateToDisable ) && dateToDisable.inverted
    }).length

    // Check the calendar “enabled” flag and respectively flip the
    // disabled state. Then also check if it’s beyond the min/max limits.
    return calendar.item.enable === -1 ? !isDisabledMatch : isDisabledMatch ||
        dateToVerify.pick < calendar.item.min.pick ||
        dateToVerify.pick > calendar.item.max.pick

} //DatePicker.prototype.disabled


/**
 * Parse a string into a usable type.
 */
DatePicker.prototype.parse = function( type, value, options ) {

    var calendar = this,
        parsingObject = {}

    // If it’s already parsed, we’re good.
    if ( !value || typeof value != 'string' ) {
        return value
    }

    // We need a `.format` to parse the value with.
    if ( !( options && options.format ) ) {
        options = options || {}
        options.format = calendar.settings.format
    }

    // Convert the format into an array and then map through it.
    calendar.formats.toArray( options.format ).map( function( label ) {

        var
            // Grab the formatting label.
            formattingLabel = calendar.formats[ label ],

            // The format length is from the formatting label function or the
            // label length without the escaping exclamation (!) mark.
            formatLength = formattingLabel ? _.trigger( formattingLabel, calendar, [ value, parsingObject ] ) : label.replace( /^!/, '' ).length

        // If there's a format label, split the value up to the format length.
        // Then add it to the parsing object with appropriate label.
        if ( formattingLabel ) {
            parsingObject[ label ] = value.substr( 0, formatLength )
        }

        // Update the value as the substring from format length to end.
        value = value.substr( formatLength )
    })

    // Compensate for month 0index.
    return [
        parsingObject.yyyy || parsingObject.yy,
        +( parsingObject.mm || parsingObject.m ) - 1,
        parsingObject.dd || parsingObject.d
    ]
} //DatePicker.prototype.parse


/**
 * Various formats to display the object in.
 */
DatePicker.prototype.formats = (function() {

    // Return the length of the first word in a collection.
    function getWordLengthFromCollection( string, collection, dateObject ) {

        // Grab the first word from the string.
        var word = string.match( /\w+/ )[ 0 ]

        // If there's no month index, add it to the date object
        if ( !dateObject.mm && !dateObject.m ) {
            dateObject.m = collection.indexOf( word ) + 1
        }

        // Return the length of the word.
        return word.length
    }

    // Get the length of the first word in a string.
    function getFirstWordLength( string ) {
        return string.match( /\w+/ )[ 0 ].length
    }

    return {

        d: function( string, dateObject ) {

            // If there's string, then get the digits length.
            // Otherwise return the selected date.
            return string ? _.digits( string ) : dateObject.date
        },
        dd: function( string, dateObject ) {

            // If there's a string, then the length is always 2.
            // Otherwise return the selected date with a leading zero.
            return string ? 2 : _.lead( dateObject.date )
        },
        ddd: function( string, dateObject ) {

            // If there's a string, then get the length of the first word.
            // Otherwise return the short selected weekday.
            return string ? getFirstWordLength( string ) : this.settings.weekdaysShort[ dateObject.day ]
        },
        dddd: function( string, dateObject ) {

            // If there's a string, then get the length of the first word.
            // Otherwise return the full selected weekday.
            return string ? getFirstWordLength( string ) : this.settings.weekdaysFull[ dateObject.day ]
        },
        m: function( string, dateObject ) {

            // If there's a string, then get the length of the digits
            // Otherwise return the selected month with 0index compensation.
            return string ? _.digits( string ) : dateObject.month + 1
        },
        mm: function( string, dateObject ) {

            // If there's a string, then the length is always 2.
            // Otherwise return the selected month with 0index and leading zero.
            return string ? 2 : _.lead( dateObject.month + 1 )
        },
        mmm: function( string, dateObject ) {

            var collection = this.settings.monthsShort

            // If there's a string, get length of the relevant month from the short
            // months collection. Otherwise return the selected month from that collection.
            return string ? getWordLengthFromCollection( string, collection, dateObject ) : collection[ dateObject.month ]
        },
        mmmm: function( string, dateObject ) {

            var collection = this.settings.monthsFull

            // If there's a string, get length of the relevant month from the full
            // months collection. Otherwise return the selected month from that collection.
            return string ? getWordLengthFromCollection( string, collection, dateObject ) : collection[ dateObject.month ]
        },
        yy: function( string, dateObject ) {

            // If there's a string, then the length is always 2.
            // Otherwise return the selected year by slicing out the first 2 digits.
            return string ? 2 : ( '' + dateObject.year ).slice( 2 )
        },
        yyyy: function( string, dateObject ) {

            // If there's a string, then the length is always 4.
            // Otherwise return the selected year.
            return string ? 4 : dateObject.year
        },

        // Create an array by splitting the formatting string passed.
        toArray: function( formatString ) { return formatString.split( /(d{1,4}|m{1,4}|y{4}|yy|!.)/g ) },

        // Format an object into a string using the formatting options.
        toString: function ( formatString, itemObject ) {
            var calendar = this
            return calendar.formats.toArray( formatString ).map( function( label ) {
                return _.trigger( calendar.formats[ label ], calendar, [ 0, itemObject ] ) || label.replace( /^!/, '' )
            }).join( '' )
        }
    }
})() //DatePicker.prototype.formats




/**
 * Check if two date units are the exact.
 */
DatePicker.prototype.isDateExact = function( one, two ) {

    var calendar = this

    // When we’re working with weekdays, do a direct comparison.
    if (
        ( _.isInteger( one ) && _.isInteger( two ) ) ||
        ( typeof one == 'boolean' && typeof two == 'boolean' )
     ) {
        return one === two
    }

    // When we’re working with date representations, compare the “pick” value.
    if (
        ( _.isDate( one ) || $.isArray( one ) ) &&
        ( _.isDate( two ) || $.isArray( two ) )
    ) {
        return calendar.create( one ).pick === calendar.create( two ).pick
    }

    // When we’re working with range objects, compare the “from” and “to”.
    if ( $.isPlainObject( one ) && $.isPlainObject( two ) ) {
        return calendar.isDateExact( one.from, two.from ) && calendar.isDateExact( one.to, two.to )
    }

    return false
}


/**
 * Check if two date units overlap.
 */
DatePicker.prototype.isDateOverlap = function( one, two ) {

    var calendar = this,
        firstDay = calendar.settings.firstDay ? 1 : 0

    // When we’re working with a weekday index, compare the days.
    if ( _.isInteger( one ) && ( _.isDate( two ) || $.isArray( two ) ) ) {
        one = one % 7 + firstDay
        return one === calendar.create( two ).day + 1
    }
    if ( _.isInteger( two ) && ( _.isDate( one ) || $.isArray( one ) ) ) {
        two = two % 7 + firstDay
        return two === calendar.create( one ).day + 1
    }

    // When we’re working with range objects, check if the ranges overlap.
    if ( $.isPlainObject( one ) && $.isPlainObject( two ) ) {
        return calendar.overlapRanges( one, two )
    }

    return false
}


/**
 * Flip the “enabled” state.
 */
DatePicker.prototype.flipEnable = function(val) {
    var itemObject = this.item
    itemObject.enable = val || (itemObject.enable == -1 ? 1 : -1)
}


/**
 * Mark a collection of dates as “disabled”.
 */
DatePicker.prototype.deactivate = function( type, datesToDisable ) {

    var calendar = this,
        disabledItems = calendar.item.disable.slice(0)


    // If we’re flipping, that’s all we need to do.
    if ( datesToDisable == 'flip' ) {
        calendar.flipEnable()
    }

    else if ( datesToDisable === false ) {
        calendar.flipEnable(1)
        disabledItems = []
    }

    else if ( datesToDisable === true ) {
        calendar.flipEnable(-1)
        disabledItems = []
    }

    // Otherwise go through the dates to disable.
    else {

        datesToDisable.map(function( unitToDisable ) {

            var matchFound

            // When we have disabled items, check for matches.
            // If something is matched, immediately break out.
            for ( var index = 0; index < disabledItems.length; index += 1 ) {
                if ( calendar.isDateExact( unitToDisable, disabledItems[index] ) ) {
                    matchFound = true
                    break
                }
            }

            // If nothing was found, add the validated unit to the collection.
            if ( !matchFound ) {
                if (
                    _.isInteger( unitToDisable ) ||
                    _.isDate( unitToDisable ) ||
                    $.isArray( unitToDisable ) ||
                    ( $.isPlainObject( unitToDisable ) && unitToDisable.from && unitToDisable.to )
                ) {
                    disabledItems.push( unitToDisable )
                }
            }
        })
    }

    // Return the updated collection.
    return disabledItems
} //DatePicker.prototype.deactivate


/**
 * Mark a collection of dates as “enabled”.
 */
DatePicker.prototype.activate = function( type, datesToEnable ) {

    var calendar = this,
        disabledItems = calendar.item.disable,
        disabledItemsCount = disabledItems.length

    // If we’re flipping, that’s all we need to do.
    if ( datesToEnable == 'flip' ) {
        calendar.flipEnable()
    }

    else if ( datesToEnable === true ) {
        calendar.flipEnable(1)
        disabledItems = []
    }

    else if ( datesToEnable === false ) {
        calendar.flipEnable(-1)
        disabledItems = []
    }

    // Otherwise go through the disabled dates.
    else {

        datesToEnable.map(function( unitToEnable ) {

            var matchFound,
                disabledUnit,
                index,
                isExactRange

            // Go through the disabled items and try to find a match.
            for ( index = 0; index < disabledItemsCount; index += 1 ) {

                disabledUnit = disabledItems[index]

                // When an exact match is found, remove it from the collection.
                if ( calendar.isDateExact( disabledUnit, unitToEnable ) ) {
                    matchFound = disabledItems[index] = null
                    isExactRange = true
                    break
                }

                // When an overlapped match is found, add the “inverted” state to it.
                else if ( calendar.isDateOverlap( disabledUnit, unitToEnable ) ) {
                    if ( $.isPlainObject( unitToEnable ) ) {
                        unitToEnable.inverted = true
                        matchFound = unitToEnable
                    }
                    else if ( $.isArray( unitToEnable ) ) {
                        matchFound = unitToEnable
                        if ( !matchFound[3] ) matchFound.push( 'inverted' )
                    }
                    else if ( _.isDate( unitToEnable ) ) {
                        matchFound = [ unitToEnable.getFullYear(), unitToEnable.getMonth(), unitToEnable.getDate(), 'inverted' ]
                    }
                    break
                }
            }

            // If a match was found, remove a previous duplicate entry.
            if ( matchFound ) for ( index = 0; index < disabledItemsCount; index += 1 ) {
                if ( calendar.isDateExact( disabledItems[index], unitToEnable ) ) {
                    disabledItems[index] = null
                    break
                }
            }

            // In the event that we’re dealing with an exact range of dates,
            // make sure there are no “inverted” dates because of it.
            if ( isExactRange ) for ( index = 0; index < disabledItemsCount; index += 1 ) {
                if ( calendar.isDateOverlap( disabledItems[index], unitToEnable ) ) {
                    disabledItems[index] = null
                    break
                }
            }

            // If something is still matched, add it into the collection.
            if ( matchFound ) {
                disabledItems.push( matchFound )
            }
        })
    }

    // Return the updated collection.
    return disabledItems.filter(function( val ) { return val != null })
} //DatePicker.prototype.activate


/**
 * Create a string for the nodes in the picker.
 */
DatePicker.prototype.nodes = function( isOpen ) {

    var
        calendar = this,
        settings = calendar.settings,
        calendarItem = calendar.item,
        nowObject = calendarItem.now,
        selectedObject = calendarItem.select,
        highlightedObject = calendarItem.highlight,
        viewsetObject = calendarItem.view,
        disabledCollection = calendarItem.disable,
        minLimitObject = calendarItem.min,
        maxLimitObject = calendarItem.max,


        // Create the calendar table head using a copy of weekday labels collection.
        // * We do a copy so we don't mutate the original array.
        tableHead = (function( collection, fullCollection ) {

            // If the first day should be Monday, move Sunday to the end.
            if ( settings.firstDay ) {
                collection.push( collection.shift() )
                fullCollection.push( fullCollection.shift() )
            }

            // Create and return the table head group.
            return _.node(
                'thead',
                _.node(
                    'tr',
                    _.group({
                        min: 0,
                        max: DAYS_IN_WEEK - 1,
                        i: 1,
                        node: 'th',
                        item: function( counter ) {
                            return [
                                collection[ counter ],
                                settings.klass.weekdays,
                                'scope=col title="' + fullCollection[ counter ] + '"'
                            ]
                        }
                    })
                )
            ) //endreturn

        // Materialize modified
        })( ( settings.showWeekdaysFull ? settings.weekdaysFull : settings.weekdaysLetter ).slice( 0 ), settings.weekdaysFull.slice( 0 ) ), //tableHead


        // Create the nav for next/prev month.
        createMonthNav = function( next ) {

            // Otherwise, return the created month tag.
            return _.node(
                'div',
                ' ',
                settings.klass[ 'nav' + ( next ? 'Next' : 'Prev' ) ] + (

                    // If the focused month is outside the range, disabled the button.
                    ( next && viewsetObject.year >= maxLimitObject.year && viewsetObject.month >= maxLimitObject.month ) ||
                    ( !next && viewsetObject.year <= minLimitObject.year && viewsetObject.month <= minLimitObject.month ) ?
                    ' ' + settings.klass.navDisabled : ''
                ),
                'data-nav=' + ( next || -1 ) + ' ' +
                _.ariaAttr({
                    role: 'button',
                    controls: calendar.$node[0].id + '_table'
                }) + ' ' +
                'title="' + (next ? settings.labelMonthNext : settings.labelMonthPrev ) + '"'
            ) //endreturn
        }, //createMonthNav


        // Create the month label.
        //Materialize modified
        createMonthLabel = function(override) {

            var monthsCollection = settings.showMonthsShort ? settings.monthsShort : settings.monthsFull

             // Materialize modified
            if (override == "short_months") {
              monthsCollection = settings.monthsShort;
            }

            // If there are months to select, add a dropdown menu.
            if ( settings.selectMonths  && override == undefined) {

                return _.node( 'select',
                    _.group({
                        min: 0,
                        max: 11,
                        i: 1,
                        node: 'option',
                        item: function( loopedMonth ) {

                            return [

                                // The looped month and no classes.
                                monthsCollection[ loopedMonth ], 0,

                                // Set the value and selected index.
                                'value=' + loopedMonth +
                                ( viewsetObject.month == loopedMonth ? ' selected' : '' ) +
                                (
                                    (
                                        ( viewsetObject.year == minLimitObject.year && loopedMonth < minLimitObject.month ) ||
                                        ( viewsetObject.year == maxLimitObject.year && loopedMonth > maxLimitObject.month )
                                    ) ?
                                    ' disabled' : ''
                                )
                            ]
                        }
                    }),
                    settings.klass.selectMonth + ' browser-default',
                    ( isOpen ? '' : 'disabled' ) + ' ' +
                    _.ariaAttr({ controls: calendar.$node[0].id + '_table' }) + ' ' +
                    'title="' + settings.labelMonthSelect + '"'
                )
            }

            // Materialize modified
            if (override == "short_months")
                if (selectedObject != null)
                return _.node( 'div', monthsCollection[ selectedObject.month ] );
                else return _.node( 'div', monthsCollection[ viewsetObject.month ] );

            // If there's a need for a month selector
            return _.node( 'div', monthsCollection[ viewsetObject.month ], settings.klass.month )
        }, //createMonthLabel


        // Create the year label.
        // Materialize modified
        createYearLabel = function(override) {

            var focusedYear = viewsetObject.year,

            // If years selector is set to a literal "true", set it to 5. Otherwise
            // divide in half to get half before and half after focused year.
            numberYears = settings.selectYears === true ? 5 : ~~( settings.selectYears / 2 )

            // If there are years to select, add a dropdown menu.
            if ( numberYears ) {

                var
                    minYear = minLimitObject.year,
                    maxYear = maxLimitObject.year,
                    lowestYear = focusedYear - numberYears,
                    highestYear = focusedYear + numberYears

                // If the min year is greater than the lowest year, increase the highest year
                // by the difference and set the lowest year to the min year.
                if ( minYear > lowestYear ) {
                    highestYear += minYear - lowestYear
                    lowestYear = minYear
                }

                // If the max year is less than the highest year, decrease the lowest year
                // by the lower of the two: available and needed years. Then set the
                // highest year to the max year.
                if ( maxYear < highestYear ) {

                    var availableYears = lowestYear - minYear,
                        neededYears = highestYear - maxYear

                    lowestYear -= availableYears > neededYears ? neededYears : availableYears
                    highestYear = maxYear
                }

                if ( settings.selectYears  && override == undefined ) {
                    return _.node( 'select',
                        _.group({
                            min: lowestYear,
                            max: highestYear,
                            i: 1,
                            node: 'option',
                            item: function( loopedYear ) {
                                return [

                                    // The looped year and no classes.
                                    loopedYear, 0,

                                    // Set the value and selected index.
                                    'value=' + loopedYear + ( focusedYear == loopedYear ? ' selected' : '' )
                                ]
                            }
                        }),
                        settings.klass.selectYear + ' browser-default',
                        ( isOpen ? '' : 'disabled' ) + ' ' + _.ariaAttr({ controls: calendar.$node[0].id + '_table' }) + ' ' +
                        'title="' + settings.labelYearSelect + '"'
                    )
                }
            }

            // Materialize modified
            if (override == "raw")
                return _.node( 'div', focusedYear )

            // Otherwise just return the year focused
            return _.node( 'div', focusedYear, settings.klass.year )
        } //createYearLabel


        // Materialize modified
        createDayLabel = function() {
                if (selectedObject != null)
                    return _.node( 'div', selectedObject.date)
                else return _.node( 'div', nowObject.date)
            }
        createWeekdayLabel = function() {
            var display_day;

            if (selectedObject != null)
                display_day = selectedObject.day;
            else
                display_day = nowObject.day;
            var weekday = settings.weekdaysFull[ display_day ]
            return weekday
        }


    // Create and return the entire calendar.
return _.node(
        // Date presentation View
        'div',
            _.node(
                'div',
                createWeekdayLabel(),
                "picker__weekday-display"
            )+
            _.node(
                // Div for short Month
                'div',
                createMonthLabel("short_months"),
                settings.klass.month_display
            )+
            _.node(
                // Div for Day
                'div',
                createDayLabel() ,
                settings.klass.day_display
            )+
            _.node(
                // Div for Year
                'div',
                createYearLabel("raw") ,
                settings.klass.year_display
            ),
        settings.klass.date_display
    )+
    // Calendar container
    _.node('div',
        _.node('div',
        ( settings.selectYears ?  createMonthLabel() + createYearLabel() : createMonthLabel() + createYearLabel() ) +
        createMonthNav() + createMonthNav( 1 ),
        settings.klass.header
    ) + _.node(
        'table',
        tableHead +
        _.node(
            'tbody',
            _.group({
                min: 0,
                max: WEEKS_IN_CALENDAR - 1,
                i: 1,
                node: 'tr',
                item: function( rowCounter ) {

                    // If Monday is the first day and the month starts on Sunday, shift the date back a week.
                    var shiftDateBy = settings.firstDay && calendar.create([ viewsetObject.year, viewsetObject.month, 1 ]).day === 0 ? -7 : 0

                    return [
                        _.group({
                            min: DAYS_IN_WEEK * rowCounter - viewsetObject.day + shiftDateBy + 1, // Add 1 for weekday 0index
                            max: function() {
                                return this.min + DAYS_IN_WEEK - 1
                            },
                            i: 1,
                            node: 'td',
                            item: function( targetDate ) {

                                // Convert the time date from a relative date to a target date.
                                targetDate = calendar.create([ viewsetObject.year, viewsetObject.month, targetDate + ( settings.firstDay ? 1 : 0 ) ])

                                var isSelected = selectedObject && selectedObject.pick == targetDate.pick,
                                    isHighlighted = highlightedObject && highlightedObject.pick == targetDate.pick,
                                    isDisabled = disabledCollection && calendar.disabled( targetDate ) || targetDate.pick < minLimitObject.pick || targetDate.pick > maxLimitObject.pick,
                                    formattedDate = _.trigger( calendar.formats.toString, calendar, [ settings.format, targetDate ] )

                                return [
                                    _.node(
                                        'div',
                                        targetDate.date,
                                        (function( klasses ) {

                                            // Add the `infocus` or `outfocus` classes based on month in view.
                                            klasses.push( viewsetObject.month == targetDate.month ? settings.klass.infocus : settings.klass.outfocus )

                                            // Add the `today` class if needed.
                                            if ( nowObject.pick == targetDate.pick ) {
                                                klasses.push( settings.klass.now )
                                            }

                                            // Add the `selected` class if something's selected and the time matches.
                                            if ( isSelected ) {
                                                klasses.push( settings.klass.selected )
                                            }

                                            // Add the `highlighted` class if something's highlighted and the time matches.
                                            if ( isHighlighted ) {
                                                klasses.push( settings.klass.highlighted )
                                            }

                                            // Add the `disabled` class if something's disabled and the object matches.
                                            if ( isDisabled ) {
                                                klasses.push( settings.klass.disabled )
                                            }

                                            return klasses.join( ' ' )
                                        })([ settings.klass.day ]),
                                        'data-pick=' + targetDate.pick + ' ' + _.ariaAttr({
                                            role: 'gridcell',
                                            label: formattedDate,
                                            selected: isSelected && calendar.$node.val() === formattedDate ? true : null,
                                            activedescendant: isHighlighted ? true : null,
                                            disabled: isDisabled ? true : null
                                        })
                                    ),
                                    '',
                                    _.ariaAttr({ role: 'presentation' })
                                ] //endreturn
                            }
                        })
                    ] //endreturn
                }
            })
        ),
        settings.klass.table,
        'id="' + calendar.$node[0].id + '_table' + '" ' + _.ariaAttr({
            role: 'grid',
            controls: calendar.$node[0].id,
            readonly: true
        })
    )
    , settings.klass.calendar_container) // end calendar

     +

    // * For Firefox forms to submit, make sure to set the buttons’ `type` attributes as “button”.
    _.node(
        'div',
        _.node( 'button', settings.today, "btn-flat picker__today",
            'type=button data-pick=' + nowObject.pick +
            ( isOpen && !calendar.disabled(nowObject) ? '' : ' disabled' ) + ' ' +
            _.ariaAttr({ controls: calendar.$node[0].id }) ) +
        _.node( 'button', settings.clear, "btn-flat picker__clear",
            'type=button data-clear=1' +
            ( isOpen ? '' : ' disabled' ) + ' ' +
            _.ariaAttr({ controls: calendar.$node[0].id }) ) +
        _.node('button', settings.close, "btn-flat picker__close",
            'type=button data-close=true ' +
            ( isOpen ? '' : ' disabled' ) + ' ' +
            _.ariaAttr({ controls: calendar.$node[0].id }) ),
        settings.klass.footer
    ) //endreturn
} //DatePicker.prototype.nodes




/**
 * The date picker defaults.
 */
DatePicker.defaults = (function( prefix ) {

    return {

        // The title label to use for the month nav buttons
        labelMonthNext: 'Next month',
        labelMonthPrev: 'Previous month',

        // The title label to use for the dropdown selectors
        labelMonthSelect: 'Select a month',
        labelYearSelect: 'Select a year',

        // Months and weekdays
        monthsFull: [ 'January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December' ],
        monthsShort: [ 'Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec' ],
        weekdaysFull: [ 'Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday' ],
        weekdaysShort: [ 'Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat' ],

        // Materialize modified
        weekdaysLetter: [ 'S', 'M', 'T', 'W', 'T', 'F', 'S' ],

        // Today and clear
        today: 'Today',
        clear: 'Clear',
        close: 'Close',

        // The format to show on the `input` element
        format: 'd mmmm, yyyy',

        // Classes
        klass: {

            table: prefix + 'table',

            header: prefix + 'header',


            // Materialize Added klasses
            date_display: prefix + 'date-display',
            day_display: prefix + 'day-display',
            month_display: prefix + 'month-display',
            year_display: prefix + 'year-display',
            calendar_container: prefix + 'calendar-container',
            // end



            navPrev: prefix + 'nav--prev',
            navNext: prefix + 'nav--next',
            navDisabled: prefix + 'nav--disabled',

            month: prefix + 'month',
            year: prefix + 'year',

            selectMonth: prefix + 'select--month',
            selectYear: prefix + 'select--year',

            weekdays: prefix + 'weekday',

            day: prefix + 'day',
            disabled: prefix + 'day--disabled',
            selected: prefix + 'day--selected',
            highlighted: prefix + 'day--highlighted',
            now: prefix + 'day--today',
            infocus: prefix + 'day--infocus',
            outfocus: prefix + 'day--outfocus',

            footer: prefix + 'footer',

            buttonClear: prefix + 'button--clear',
            buttonToday: prefix + 'button--today',
            buttonClose: prefix + 'button--close'
        }
    }
})( Picker.klasses().picker + '__' )





/**
 * Extend the picker to add the date picker.
 */
Picker.extend( 'pickadate', DatePicker )


}));


;(function ($) {

  $.fn.characterCounter = function(){
    return this.each(function(){

      itHasLengthAttribute = $(this).attr('length') != undefined;

      if(itHasLengthAttribute){
        $(this).on('input', updateCounter);
        $(this).on('focus', updateCounter);
        $(this).on('blur', removeCounterElement);

        addCounterElement($(this));
      }

    });
  };

  function updateCounter(){
    var maxLength     = +$(this).attr('length'),
    actualLength      = +$(this).val().length,
    isValidLength     = actualLength <= maxLength;

    $(this).parent().find('span[class="character-counter"]')
                    .html( actualLength + '/' + maxLength);

    addInputStyle(isValidLength, $(this));
  }

  function addCounterElement($input){
    $counterElement = $('<span/>')
                        .addClass('character-counter')
                        .css('float','right')
                        .css('font-size','12px')
                        .css('height', 1);

    $input.parent().append($counterElement);
  }

  function removeCounterElement(){
    $(this).parent().find('span[class="character-counter"]').html('');
  }

  function addInputStyle(isValidLength, $input){
    inputHasInvalidClass = $input.hasClass('invalid');
    if (isValidLength && inputHasInvalidClass) {
      $input.removeClass('invalid');
    }
    else if(!isValidLength && !inputHasInvalidClass){
      $input.removeClass('valid');
      $input.addClass('invalid');
    }
  }

  $(document).ready(function(){
    $('input, textarea').characterCounter();
  });

}( jQuery ));

(function ($) {
  $.fn.collapsible = function(options) {
    var defaults = {
        accordion: undefined
    };

    options = $.extend(defaults, options);


    return this.each(function() {

      var $this = $(this);

      var $panel_headers = $(this).find('> li > .collapsible-header');

      var collapsible_type = $this.data("collapsible");

      // Turn off any existing event handlers
       $this.off('click.collapse', '.collapsible-header');
       $panel_headers.off('click.collapse');


       /****************
       Helper Functions
       ****************/

      // Accordion Open
      function accordionOpen(object) {
        $panel_headers = $this.find('> li > .collapsible-header');
        if (object.hasClass('active')) {
            object.parent().addClass('active');
        }
        else {
            object.parent().removeClass('active');
        }
        if (object.parent().hasClass('active')){
          object.siblings('.collapsible-body').stop(true,false).slideDown({ duration: 350, easing: "easeOutQuart", queue: false, complete: function() {$(this).css('height', '')}});
        }
        else{
          object.siblings('.collapsible-body').stop(true,false).slideUp({ duration: 350, easing: "easeOutQuart", queue: false, complete: function() {$(this).css('height', '')}});
        }

        $panel_headers.not(object).removeClass('active').parent().removeClass('active');
        $panel_headers.not(object).parent().children('.collapsible-body').stop(true,false).slideUp(
          {
            duration: 350,
            easing: "easeOutQuart",
            queue: false,
            complete:
              function() {
                $(this).css('height', '')
              }
          });
      }

      // Expandable Open
      function expandableOpen(object) {
        if (object.hasClass('active')) {
            object.parent().addClass('active');
        }
        else {
            object.parent().removeClass('active');
        }
        if (object.parent().hasClass('active')){
          object.siblings('.collapsible-body').stop(true,false).slideDown({ duration: 350, easing: "easeOutQuart", queue: false, complete: function() {$(this).css('height', '')}});
        }
        else{
          object.siblings('.collapsible-body').stop(true,false).slideUp({ duration: 350, easing: "easeOutQuart", queue: false, complete: function() {$(this).css('height', '')}});
        }
      }

      /**
       * Check if object is children of panel header
       * @param  {Object}  object Jquery object
       * @return {Boolean} true if it is children
       */
      function isChildrenOfPanelHeader(object) {

        var panelHeader = getPanelHeader(object);

        return panelHeader.length > 0;
      }

      /**
       * Get panel header from a children element
       * @param  {Object} object Jquery object
       * @return {Object} panel header object
       */
      function getPanelHeader(object) {

        return object.closest('li > .collapsible-header');
      }

      /*****  End Helper Functions  *****/



      if (options.accordion || collapsible_type == "accordion" || collapsible_type == undefined) { // Handle Accordion
        // Add click handler to only direct collapsible header children
        $panel_headers = $this.find('> li > .collapsible-header');
        $panel_headers.on('click.collapse', function (e) {
          var element = $(e.target);

          if (isChildrenOfPanelHeader(element)) {
            element = getPanelHeader(element);
          }

          element.toggleClass('active');
          accordionOpen(element);
        });
        // Open first active
        accordionOpen($panel_headers.filter('.active').first());
      }
      else { // Handle Expandables
        $panel_headers.each(function () {
          // Add click handler to only direct collapsible header children
          $(this).on('click.collapse', function (e) {
            var element = $(e.target);
            if (isChildrenOfPanelHeader(element)) {
              element = getPanelHeader(element);
            }
            element.toggleClass('active');
            expandableOpen(element);
          });
          // Open any bodies that have the active class
          if ($(this).hasClass('active')) {
            expandableOpen($(this));
          }

        });
      }

    });
  };

  $(document).ready(function(){
    $('.collapsible').collapsible();
  });
}( jQuery ));
(function ($) {
    // left: 37, up: 38, right: 39, down: 40,
    // spacebar: 32, pageup: 33, pagedown: 34, end: 35, home: 36
    // var keys = [32, 33, 34, 35, 36, 37, 38, 39, 40];

    // function preventDefault(e) {
    //   e = e || window.event;
    //   if (e.preventDefault)
    //     e.preventDefault();
    //   e.returnValue = false;
    // }

    // function keydown(e) {
    //   for (var i = keys.length; i--;) {
    //     if (e.keyCode === keys[i]) {
    //       preventDefault(e);
    //       return;
    //     }
    //   }
    // }

    // function wheel(e) {
    //   preventDefault(e);
    // }

    // function disable_scroll() {
    //   if (window.addEventListener) {
    //     window.addEventListener('DOMMouseScroll', wheel, false);
    //   }
    //   window.onmousewheel = document.onmousewheel = wheel;
    //   document.onkeydown = keydown;
    //   $('body').css({'overflow-y' : 'hidden'});
    // }

    // function enable_scroll() {
    //   if (window.removeEventListener) {
    //     window.removeEventListener('DOMMouseScroll', wheel, false);
    //   }
    //   window.onmousewheel = document.onmousewheel = document.onkeydown = null;
    //   $('body').css({'overflow-y' : ''});

    // }

  var methods = {
    init : function(options) {
      var defaults = {
        menuWidth: 240,
        edge: 'left',
        closeOnClick: false
      }
      options = $.extend(defaults, options);

      $(this).each(function(){
        var $this = $(this);
        var menu_id = $("#"+ $this.attr('data-activates'));

        // Set to width
        if (options.menuWidth != 240) {
          menu_id.css('width', options.menuWidth);
        }

        // Add Touch Area
        $('body').append($('<div class="drag-target"></div>'));

        if (options.edge == 'left') {
          menu_id.css('left', -1 * (options.menuWidth + 10));
          $('.drag-target').css({'left': 0}); // Add Touch Area
        }
        else {
          menu_id.addClass('right-aligned') // Change text-alignment to right
            .css('right', -1 * (options.menuWidth + 10))
            .css('left', '');
          $('.drag-target').css({'right': 0}); // Add Touch Area
        }

        // If fixed sidenav, bring menu out
        if (menu_id.hasClass('fixed')) {
            if ($(window).width() > 992) {
              menu_id.css('left', 0);
            }
          }

        // Window resize to reset on large screens fixed
        if (menu_id.hasClass('fixed')) {
          $(window).resize( function() {
            if (window.innerWidth > 992) {
              // Close menu if window is resized bigger than 992 and user has fixed sidenav
              if ($('#sidenav-overlay').css('opacity') != 0 && menuOut) {
                removeMenu(true);
              }
              else {
                menu_id.removeAttr('style');
                menu_id.css('width', options.menuWidth);
              }
            }
            else if (menuOut === false){
              if (options.edge === 'left')
                menu_id.css('left', -1 * (options.menuWidth + 10));
              else
                menu_id.css('right', -1 * (options.menuWidth + 10));
            }

          });
        }

        // if closeOnClick, then add close event for all a tags in side sideNav
        if (options.closeOnClick == true) {
          menu_id.on("click.itemclick", "a:not(.collapsible-header)", function(){
            removeMenu();
          });
        }

        function removeMenu(restoreNav) {
          panning = false;
          menuOut = false;
          $('#sidenav-overlay').velocity({opacity: 0}, {duration: 200, queue: false, easing: 'easeOutQuad',
            complete: function() {
              $(this).remove();
            } });
          if (options.edge === 'left') {
            // Reset phantom div
            $('.drag-target').css({width: '', right: '', left: '0'});
            menu_id.velocity(
              {left: -1 * (options.menuWidth + 10)},
              { duration: 200,
                queue: false,
                easing: 'easeOutCubic',
                complete: function() {
                  if (restoreNav == true) {
                    // Restore Fixed sidenav
                    menu_id.removeAttr('style');
                    menu_id.css('width', options.menuWidth);
                  }
                }

            });
          }
          else {
            // Reset phantom div
            $('.drag-target').css({width: '', right: '0', left: ''});
            menu_id.velocity(
              {right: -1 * (options.menuWidth + 10)},
              { duration: 200,
                queue: false,
                easing: 'easeOutCubic',
                complete: function() {
                  if (restoreNav == true) {
                    // Restore Fixed sidenav
                    menu_id.removeAttr('style');
                    menu_id.css('width', options.menuWidth);
                  }
                }
              });
          }
        }



        // Touch Event
        var panning = false;
        var menuOut = false;

        $('.drag-target').on('click', function(){
          removeMenu();
        })

        $('.drag-target').hammer({
          prevent_default: false
        }).bind('pan', function(e) {

          if (e.gesture.pointerType == "touch") {

            var direction = e.gesture.direction;
            var x = e.gesture.center.x;
            var y = e.gesture.center.y;
            var velocityX = e.gesture.velocityX;

            // If overlay does not exist, create one and if it is clicked, close menu
            if ($('#sidenav-overlay').length === 0) {
              var overlay = $('<div id="sidenav-overlay"></div>');
              overlay.css('opacity', 0).click( function(){
                removeMenu();
              });
              $('body').append(overlay);
            }

            // Keep within boundaries
            if (options.edge === 'left') {
              if (x > options.menuWidth) { x = options.menuWidth; }
              else if (x < 0) { x = 0; }
            }

            if (options.edge === 'left') {
              // Left Direction
              if (x < (options.menuWidth / 2)) { menuOut = false; }
              // Right Direction
              else if (x >= (options.menuWidth / 2)) { menuOut = true; }

              menu_id.css('left', (x - options.menuWidth));
            }
            else {
              // Left Direction
              if (x < ($(window).width() - options.menuWidth / 2)) {
                menuOut = true;
              }
              // Right Direction
              else if (x >= ($(window).width() - options.menuWidth / 2)) {
               menuOut = false;
             }
              var rightPos = -1 *(x - options.menuWidth / 2);
              if (rightPos > 0) {
                rightPos = 0;
              }

              menu_id.css('right', rightPos);
            }




            // Percentage overlay
            if (options.edge === 'left') {
              var overlayPerc = x / options.menuWidth;
              $('#sidenav-overlay').velocity({opacity: overlayPerc }, {duration: 50, queue: false, easing: 'easeOutQuad'});
            }
            else {
              var overlayPerc = Math.abs((x - $(window).width()) / options.menuWidth);
              $('#sidenav-overlay').velocity({opacity: overlayPerc }, {duration: 50, queue: false, easing: 'easeOutQuad'});
            }
          }

        }).bind('panend', function(e) {
          if (e.gesture.pointerType == "touch") {
            var velocityX = e.gesture.velocityX;
            panning = false;
            if (options.edge === 'left') {
              // If velocityX <= 0.3 then the user is flinging the menu closed so ignore menuOut
              if ((menuOut && velocityX <= 0.3) || velocityX < -0.5) {
                menu_id.velocity({left: 0}, {duration: 300, queue: false, easing: 'easeOutQuad'});
                $('#sidenav-overlay').velocity({opacity: 1 }, {duration: 50, queue: false, easing: 'easeOutQuad'});
                $('.drag-target').css({width: '50%', right: 0, left: ''});
              }
              else if (!menuOut || velocityX > 0.3) {
                menu_id.velocity({left: -1 * (options.menuWidth + 10)}, {duration: 200, queue: false, easing: 'easeOutQuad'});
                $('#sidenav-overlay').velocity({opacity: 0 }, {duration: 200, queue: false, easing: 'easeOutQuad',
                  complete: function () {
                    $(this).remove();
                  }});
                $('.drag-target').css({width: '10px', right: '', left: 0});
              }
            }
            else {
              if ((menuOut && velocityX >= -0.3) || velocityX > 0.5) {
                menu_id.velocity({right: 0}, {duration: 300, queue: false, easing: 'easeOutQuad'});
                $('#sidenav-overlay').velocity({opacity: 1 }, {duration: 50, queue: false, easing: 'easeOutQuad'});
                $('.drag-target').css({width: '50%', right: '', left: 0});
              }
              else if (!menuOut || velocityX < -0.3) {
                menu_id.velocity({right: -1 * (options.menuWidth + 10)}, {duration: 200, queue: false, easing: 'easeOutQuad'});
                $('#sidenav-overlay').velocity({opacity: 0 }, {duration: 200, queue: false, easing: 'easeOutQuad',
                  complete: function () {
                    $(this).remove();
                  }});
                $('.drag-target').css({width: '10px', right: 0, left: ''});
              }
            }

          }
        });

          $this.click(function() {
            if (menuOut == true) {
              menuOut = false;
              panning = false;
              removeMenu();
            }
            else {

              if (options.edge === 'left') {
                $('.drag-target').css({width: '50%', right: 0, left: ''});
                menu_id.velocity({left: 0}, {duration: 300, queue: false, easing: 'easeOutQuad'});
              }
              else {
                $('.drag-target').css({width: '50%', right: '', left: 0});
                menu_id.velocity({right: 0}, {duration: 300, queue: false, easing: 'easeOutQuad'});
                menu_id.css('left','');
              }

              var overlay = $('<div id="sidenav-overlay"></div>');
              overlay.css('opacity', 0)
              .click(function(){
                menuOut = false;
                panning = false;
                removeMenu();
                overlay.velocity({opacity: 0}, {duration: 300, queue: false, easing: 'easeOutQuad',
                  complete: function() {
                    $(this).remove();
                  } });

              });
              $('body').append(overlay);
              overlay.velocity({opacity: 1}, {duration: 300, queue: false, easing: 'easeOutQuad',
                complete: function () {
                  menuOut = true;
                  panning = false;
                }
              });
            }

            return false;
          });
      });


    },
    show : function() {
      this.trigger('click');
    },
    hide : function() {
      $('#sidenav-overlay').trigger('click');
    }
  };


    $.fn.sideNav = function(methodOrOptions) {
      if ( methods[methodOrOptions] ) {
        return methods[ methodOrOptions ].apply( this, Array.prototype.slice.call( arguments, 1 ));
      } else if ( typeof methodOrOptions === 'object' || ! methodOrOptions ) {
        // Default to "init"
        return methods.init.apply( this, arguments );
      } else {
        $.error( 'Method ' +  methodOrOptions + ' does not exist on jQuery.tooltip' );
      }
    }; // PLugin end
}( jQuery ));

(function ($) {
  $(function(){
    $('.button-collapse').sideNav();
  });
})(jQuery);
/*
 AngularJS v1.3.15
 (c) 2010-2014 Google, Inc. http://angularjs.org
 License: MIT
*/
(function(Q,W,t){'use strict';function R(b){return function(){var a=arguments[0],c;c="["+(b?b+":":"")+a+"] http://errors.angularjs.org/1.3.15/"+(b?b+"/":"")+a;for(a=1;a<arguments.length;a++){c=c+(1==a?"?":"&")+"p"+(a-1)+"=";var d=encodeURIComponent,e;e=arguments[a];e="function"==typeof e?e.toString().replace(/ \{[\s\S]*$/,""):"undefined"==typeof e?"undefined":"string"!=typeof e?JSON.stringify(e):e;c+=d(e)}return Error(c)}}function Sa(b){if(null==b||Ta(b))return!1;var a=b.length;return b.nodeType===
qa&&a?!0:C(b)||H(b)||0===a||"number"===typeof a&&0<a&&a-1 in b}function r(b,a,c){var d,e;if(b)if(G(b))for(d in b)"prototype"==d||"length"==d||"name"==d||b.hasOwnProperty&&!b.hasOwnProperty(d)||a.call(c,b[d],d,b);else if(H(b)||Sa(b)){var f="object"!==typeof b;d=0;for(e=b.length;d<e;d++)(f||d in b)&&a.call(c,b[d],d,b)}else if(b.forEach&&b.forEach!==r)b.forEach(a,c,b);else for(d in b)b.hasOwnProperty(d)&&a.call(c,b[d],d,b);return b}function Ed(b,a,c){for(var d=Object.keys(b).sort(),e=0;e<d.length;e++)a.call(c,
b[d[e]],d[e]);return d}function mc(b){return function(a,c){b(c,a)}}function Fd(){return++ob}function nc(b,a){a?b.$$hashKey=a:delete b.$$hashKey}function w(b){for(var a=b.$$hashKey,c=1,d=arguments.length;c<d;c++){var e=arguments[c];if(e)for(var f=Object.keys(e),g=0,h=f.length;g<h;g++){var l=f[g];b[l]=e[l]}}nc(b,a);return b}function aa(b){return parseInt(b,10)}function Ob(b,a){return w(Object.create(b),a)}function E(){}function ra(b){return b}function ea(b){return function(){return b}}function x(b){return"undefined"===
typeof b}function y(b){return"undefined"!==typeof b}function J(b){return null!==b&&"object"===typeof b}function C(b){return"string"===typeof b}function Y(b){return"number"===typeof b}function ga(b){return"[object Date]"===Ca.call(b)}function G(b){return"function"===typeof b}function Ua(b){return"[object RegExp]"===Ca.call(b)}function Ta(b){return b&&b.window===b}function Va(b){return b&&b.$evalAsync&&b.$watch}function Wa(b){return"boolean"===typeof b}function oc(b){return!(!b||!(b.nodeName||b.prop&&
b.attr&&b.find))}function Gd(b){var a={};b=b.split(",");var c;for(c=0;c<b.length;c++)a[b[c]]=!0;return a}function va(b){return z(b.nodeName||b[0]&&b[0].nodeName)}function Xa(b,a){var c=b.indexOf(a);0<=c&&b.splice(c,1);return a}function Da(b,a,c,d){if(Ta(b)||Va(b))throw Ja("cpws");if(a){if(b===a)throw Ja("cpi");c=c||[];d=d||[];if(J(b)){var e=c.indexOf(b);if(-1!==e)return d[e];c.push(b);d.push(a)}if(H(b))for(var f=a.length=0;f<b.length;f++)e=Da(b[f],null,c,d),J(b[f])&&(c.push(b[f]),d.push(e)),a.push(e);
else{var g=a.$$hashKey;H(a)?a.length=0:r(a,function(b,c){delete a[c]});for(f in b)b.hasOwnProperty(f)&&(e=Da(b[f],null,c,d),J(b[f])&&(c.push(b[f]),d.push(e)),a[f]=e);nc(a,g)}}else if(a=b)H(b)?a=Da(b,[],c,d):ga(b)?a=new Date(b.getTime()):Ua(b)?(a=new RegExp(b.source,b.toString().match(/[^\/]*$/)[0]),a.lastIndex=b.lastIndex):J(b)&&(e=Object.create(Object.getPrototypeOf(b)),a=Da(b,e,c,d));return a}function sa(b,a){if(H(b)){a=a||[];for(var c=0,d=b.length;c<d;c++)a[c]=b[c]}else if(J(b))for(c in a=a||{},
b)if("$"!==c.charAt(0)||"$"!==c.charAt(1))a[c]=b[c];return a||b}function ha(b,a){if(b===a)return!0;if(null===b||null===a)return!1;if(b!==b&&a!==a)return!0;var c=typeof b,d;if(c==typeof a&&"object"==c)if(H(b)){if(!H(a))return!1;if((c=b.length)==a.length){for(d=0;d<c;d++)if(!ha(b[d],a[d]))return!1;return!0}}else{if(ga(b))return ga(a)?ha(b.getTime(),a.getTime()):!1;if(Ua(b))return Ua(a)?b.toString()==a.toString():!1;if(Va(b)||Va(a)||Ta(b)||Ta(a)||H(a)||ga(a)||Ua(a))return!1;c={};for(d in b)if("$"!==
d.charAt(0)&&!G(b[d])){if(!ha(b[d],a[d]))return!1;c[d]=!0}for(d in a)if(!c.hasOwnProperty(d)&&"$"!==d.charAt(0)&&a[d]!==t&&!G(a[d]))return!1;return!0}return!1}function Ya(b,a,c){return b.concat(Za.call(a,c))}function pc(b,a){var c=2<arguments.length?Za.call(arguments,2):[];return!G(a)||a instanceof RegExp?a:c.length?function(){return arguments.length?a.apply(b,Ya(c,arguments,0)):a.apply(b,c)}:function(){return arguments.length?a.apply(b,arguments):a.call(b)}}function Hd(b,a){var c=a;"string"===typeof b&&
"$"===b.charAt(0)&&"$"===b.charAt(1)?c=t:Ta(a)?c="$WINDOW":a&&W===a?c="$DOCUMENT":Va(a)&&(c="$SCOPE");return c}function $a(b,a){if("undefined"===typeof b)return t;Y(a)||(a=a?2:null);return JSON.stringify(b,Hd,a)}function qc(b){return C(b)?JSON.parse(b):b}function wa(b){b=A(b).clone();try{b.empty()}catch(a){}var c=A("<div>").append(b).html();try{return b[0].nodeType===pb?z(c):c.match(/^(<[^>]+>)/)[1].replace(/^<([\w\-]+)/,function(a,b){return"<"+z(b)})}catch(d){return z(c)}}function rc(b){try{return decodeURIComponent(b)}catch(a){}}
function sc(b){var a={},c,d;r((b||"").split("&"),function(b){b&&(c=b.replace(/\+/g,"%20").split("="),d=rc(c[0]),y(d)&&(b=y(c[1])?rc(c[1]):!0,tc.call(a,d)?H(a[d])?a[d].push(b):a[d]=[a[d],b]:a[d]=b))});return a}function Pb(b){var a=[];r(b,function(b,d){H(b)?r(b,function(b){a.push(Ea(d,!0)+(!0===b?"":"="+Ea(b,!0)))}):a.push(Ea(d,!0)+(!0===b?"":"="+Ea(b,!0)))});return a.length?a.join("&"):""}function qb(b){return Ea(b,!0).replace(/%26/gi,"&").replace(/%3D/gi,"=").replace(/%2B/gi,"+")}function Ea(b,a){return encodeURIComponent(b).replace(/%40/gi,
"@").replace(/%3A/gi,":").replace(/%24/g,"$").replace(/%2C/gi,",").replace(/%3B/gi,";").replace(/%20/g,a?"%20":"+")}function Id(b,a){var c,d,e=rb.length;b=A(b);for(d=0;d<e;++d)if(c=rb[d]+a,C(c=b.attr(c)))return c;return null}function Jd(b,a){var c,d,e={};r(rb,function(a){a+="app";!c&&b.hasAttribute&&b.hasAttribute(a)&&(c=b,d=b.getAttribute(a))});r(rb,function(a){a+="app";var e;!c&&(e=b.querySelector("["+a.replace(":","\\:")+"]"))&&(c=e,d=e.getAttribute(a))});c&&(e.strictDi=null!==Id(c,"strict-di"),
a(c,d?[d]:[],e))}function uc(b,a,c){J(c)||(c={});c=w({strictDi:!1},c);var d=function(){b=A(b);if(b.injector()){var d=b[0]===W?"document":wa(b);throw Ja("btstrpd",d.replace(/</,"&lt;").replace(/>/,"&gt;"));}a=a||[];a.unshift(["$provide",function(a){a.value("$rootElement",b)}]);c.debugInfoEnabled&&a.push(["$compileProvider",function(a){a.debugInfoEnabled(!0)}]);a.unshift("ng");d=ab(a,c.strictDi);d.invoke(["$rootScope","$rootElement","$compile","$injector",function(a,b,c,d){a.$apply(function(){b.data("$injector",
d);c(b)(a)})}]);return d},e=/^NG_ENABLE_DEBUG_INFO!/,f=/^NG_DEFER_BOOTSTRAP!/;Q&&e.test(Q.name)&&(c.debugInfoEnabled=!0,Q.name=Q.name.replace(e,""));if(Q&&!f.test(Q.name))return d();Q.name=Q.name.replace(f,"");ca.resumeBootstrap=function(b){r(b,function(b){a.push(b)});return d()};G(ca.resumeDeferredBootstrap)&&ca.resumeDeferredBootstrap()}function Kd(){Q.name="NG_ENABLE_DEBUG_INFO!"+Q.name;Q.location.reload()}function Ld(b){b=ca.element(b).injector();if(!b)throw Ja("test");return b.get("$$testability")}
function vc(b,a){a=a||"_";return b.replace(Md,function(b,d){return(d?a:"")+b.toLowerCase()})}function Nd(){var b;wc||((ta=Q.jQuery)&&ta.fn.on?(A=ta,w(ta.fn,{scope:Ka.scope,isolateScope:Ka.isolateScope,controller:Ka.controller,injector:Ka.injector,inheritedData:Ka.inheritedData}),b=ta.cleanData,ta.cleanData=function(a){var c;if(Qb)Qb=!1;else for(var d=0,e;null!=(e=a[d]);d++)(c=ta._data(e,"events"))&&c.$destroy&&ta(e).triggerHandler("$destroy");b(a)}):A=T,ca.element=A,wc=!0)}function Rb(b,a,c){if(!b)throw Ja("areq",
a||"?",c||"required");return b}function sb(b,a,c){c&&H(b)&&(b=b[b.length-1]);Rb(G(b),a,"not a function, got "+(b&&"object"===typeof b?b.constructor.name||"Object":typeof b));return b}function La(b,a){if("hasOwnProperty"===b)throw Ja("badname",a);}function xc(b,a,c){if(!a)return b;a=a.split(".");for(var d,e=b,f=a.length,g=0;g<f;g++)d=a[g],b&&(b=(e=b)[d]);return!c&&G(b)?pc(e,b):b}function tb(b){var a=b[0];b=b[b.length-1];var c=[a];do{a=a.nextSibling;if(!a)break;c.push(a)}while(a!==b);return A(c)}function ia(){return Object.create(null)}
function Od(b){function a(a,b,c){return a[b]||(a[b]=c())}var c=R("$injector"),d=R("ng");b=a(b,"angular",Object);b.$$minErr=b.$$minErr||R;return a(b,"module",function(){var b={};return function(f,g,h){if("hasOwnProperty"===f)throw d("badname","module");g&&b.hasOwnProperty(f)&&(b[f]=null);return a(b,f,function(){function a(c,d,e,f){f||(f=b);return function(){f[e||"push"]([c,d,arguments]);return u}}if(!g)throw c("nomod",f);var b=[],d=[],e=[],q=a("$injector","invoke","push",d),u={_invokeQueue:b,_configBlocks:d,
_runBlocks:e,requires:g,name:f,provider:a("$provide","provider"),factory:a("$provide","factory"),service:a("$provide","service"),value:a("$provide","value"),constant:a("$provide","constant","unshift"),animation:a("$animateProvider","register"),filter:a("$filterProvider","register"),controller:a("$controllerProvider","register"),directive:a("$compileProvider","directive"),config:q,run:function(a){e.push(a);return this}};h&&q(h);return u})}})}function Pd(b){w(b,{bootstrap:uc,copy:Da,extend:w,equals:ha,
element:A,forEach:r,injector:ab,noop:E,bind:pc,toJson:$a,fromJson:qc,identity:ra,isUndefined:x,isDefined:y,isString:C,isFunction:G,isObject:J,isNumber:Y,isElement:oc,isArray:H,version:Qd,isDate:ga,lowercase:z,uppercase:ub,callbacks:{counter:0},getTestability:Ld,$$minErr:R,$$csp:bb,reloadWithDebugInfo:Kd});cb=Od(Q);try{cb("ngLocale")}catch(a){cb("ngLocale",[]).provider("$locale",Rd)}cb("ng",["ngLocale"],["$provide",function(a){a.provider({$$sanitizeUri:Sd});a.provider("$compile",yc).directive({a:Td,
input:zc,textarea:zc,form:Ud,script:Vd,select:Wd,style:Xd,option:Yd,ngBind:Zd,ngBindHtml:$d,ngBindTemplate:ae,ngClass:be,ngClassEven:ce,ngClassOdd:de,ngCloak:ee,ngController:fe,ngForm:ge,ngHide:he,ngIf:ie,ngInclude:je,ngInit:ke,ngNonBindable:le,ngPluralize:me,ngRepeat:ne,ngShow:oe,ngStyle:pe,ngSwitch:qe,ngSwitchWhen:re,ngSwitchDefault:se,ngOptions:te,ngTransclude:ue,ngModel:ve,ngList:we,ngChange:xe,pattern:Ac,ngPattern:Ac,required:Bc,ngRequired:Bc,minlength:Cc,ngMinlength:Cc,maxlength:Dc,ngMaxlength:Dc,
ngValue:ye,ngModelOptions:ze}).directive({ngInclude:Ae}).directive(vb).directive(Ec);a.provider({$anchorScroll:Be,$animate:Ce,$browser:De,$cacheFactory:Ee,$controller:Fe,$document:Ge,$exceptionHandler:He,$filter:Fc,$interpolate:Ie,$interval:Je,$http:Ke,$httpBackend:Le,$location:Me,$log:Ne,$parse:Oe,$rootScope:Pe,$q:Qe,$$q:Re,$sce:Se,$sceDelegate:Te,$sniffer:Ue,$templateCache:Ve,$templateRequest:We,$$testability:Xe,$timeout:Ye,$window:Ze,$$rAF:$e,$$asyncCallback:af,$$jqLite:bf})}])}function db(b){return b.replace(cf,
function(a,b,d,e){return e?d.toUpperCase():d}).replace(df,"Moz$1")}function Gc(b){b=b.nodeType;return b===qa||!b||9===b}function Hc(b,a){var c,d,e=a.createDocumentFragment(),f=[];if(Sb.test(b)){c=c||e.appendChild(a.createElement("div"));d=(ef.exec(b)||["",""])[1].toLowerCase();d=ja[d]||ja._default;c.innerHTML=d[1]+b.replace(ff,"<$1></$2>")+d[2];for(d=d[0];d--;)c=c.lastChild;f=Ya(f,c.childNodes);c=e.firstChild;c.textContent=""}else f.push(a.createTextNode(b));e.textContent="";e.innerHTML="";r(f,function(a){e.appendChild(a)});
return e}function T(b){if(b instanceof T)return b;var a;C(b)&&(b=N(b),a=!0);if(!(this instanceof T)){if(a&&"<"!=b.charAt(0))throw Tb("nosel");return new T(b)}if(a){a=W;var c;b=(c=gf.exec(b))?[a.createElement(c[1])]:(c=Hc(b,a))?c.childNodes:[]}Ic(this,b)}function Ub(b){return b.cloneNode(!0)}function wb(b,a){a||xb(b);if(b.querySelectorAll)for(var c=b.querySelectorAll("*"),d=0,e=c.length;d<e;d++)xb(c[d])}function Jc(b,a,c,d){if(y(d))throw Tb("offargs");var e=(d=yb(b))&&d.events,f=d&&d.handle;if(f)if(a)r(a.split(" "),
function(a){if(y(c)){var d=e[a];Xa(d||[],c);if(d&&0<d.length)return}b.removeEventListener(a,f,!1);delete e[a]});else for(a in e)"$destroy"!==a&&b.removeEventListener(a,f,!1),delete e[a]}function xb(b,a){var c=b.ng339,d=c&&zb[c];d&&(a?delete d.data[a]:(d.handle&&(d.events.$destroy&&d.handle({},"$destroy"),Jc(b)),delete zb[c],b.ng339=t))}function yb(b,a){var c=b.ng339,c=c&&zb[c];a&&!c&&(b.ng339=c=++hf,c=zb[c]={events:{},data:{},handle:t});return c}function Vb(b,a,c){if(Gc(b)){var d=y(c),e=!d&&a&&!J(a),
f=!a;b=(b=yb(b,!e))&&b.data;if(d)b[a]=c;else{if(f)return b;if(e)return b&&b[a];w(b,a)}}}function Ab(b,a){return b.getAttribute?-1<(" "+(b.getAttribute("class")||"")+" ").replace(/[\n\t]/g," ").indexOf(" "+a+" "):!1}function Bb(b,a){a&&b.setAttribute&&r(a.split(" "),function(a){b.setAttribute("class",N((" "+(b.getAttribute("class")||"")+" ").replace(/[\n\t]/g," ").replace(" "+N(a)+" "," ")))})}function Cb(b,a){if(a&&b.setAttribute){var c=(" "+(b.getAttribute("class")||"")+" ").replace(/[\n\t]/g," ");
r(a.split(" "),function(a){a=N(a);-1===c.indexOf(" "+a+" ")&&(c+=a+" ")});b.setAttribute("class",N(c))}}function Ic(b,a){if(a)if(a.nodeType)b[b.length++]=a;else{var c=a.length;if("number"===typeof c&&a.window!==a){if(c)for(var d=0;d<c;d++)b[b.length++]=a[d]}else b[b.length++]=a}}function Kc(b,a){return Db(b,"$"+(a||"ngController")+"Controller")}function Db(b,a,c){9==b.nodeType&&(b=b.documentElement);for(a=H(a)?a:[a];b;){for(var d=0,e=a.length;d<e;d++)if((c=A.data(b,a[d]))!==t)return c;b=b.parentNode||
11===b.nodeType&&b.host}}function Lc(b){for(wb(b,!0);b.firstChild;)b.removeChild(b.firstChild)}function Mc(b,a){a||wb(b);var c=b.parentNode;c&&c.removeChild(b)}function jf(b,a){a=a||Q;if("complete"===a.document.readyState)a.setTimeout(b);else A(a).on("load",b)}function Nc(b,a){var c=Eb[a.toLowerCase()];return c&&Oc[va(b)]&&c}function kf(b,a){var c=b.nodeName;return("INPUT"===c||"TEXTAREA"===c)&&Pc[a]}function lf(b,a){var c=function(c,e){c.isDefaultPrevented=function(){return c.defaultPrevented};var f=
a[e||c.type],g=f?f.length:0;if(g){if(x(c.immediatePropagationStopped)){var h=c.stopImmediatePropagation;c.stopImmediatePropagation=function(){c.immediatePropagationStopped=!0;c.stopPropagation&&c.stopPropagation();h&&h.call(c)}}c.isImmediatePropagationStopped=function(){return!0===c.immediatePropagationStopped};1<g&&(f=sa(f));for(var l=0;l<g;l++)c.isImmediatePropagationStopped()||f[l].call(b,c)}};c.elem=b;return c}function bf(){this.$get=function(){return w(T,{hasClass:function(b,a){b.attr&&(b=b[0]);
return Ab(b,a)},addClass:function(b,a){b.attr&&(b=b[0]);return Cb(b,a)},removeClass:function(b,a){b.attr&&(b=b[0]);return Bb(b,a)}})}}function Ma(b,a){var c=b&&b.$$hashKey;if(c)return"function"===typeof c&&(c=b.$$hashKey()),c;c=typeof b;return c="function"==c||"object"==c&&null!==b?b.$$hashKey=c+":"+(a||Fd)():c+":"+b}function eb(b,a){if(a){var c=0;this.nextUid=function(){return++c}}r(b,this.put,this)}function mf(b){return(b=b.toString().replace(Qc,"").match(Rc))?"function("+(b[1]||"").replace(/[\s\r\n]+/,
" ")+")":"fn"}function ab(b,a){function c(a){return function(b,c){if(J(b))r(b,mc(a));else return a(b,c)}}function d(a,b){La(a,"service");if(G(b)||H(b))b=q.instantiate(b);if(!b.$get)throw Fa("pget",a);return p[a+"Provider"]=b}function e(a,b){return function(){var c=s.invoke(b,this);if(x(c))throw Fa("undef",a);return c}}function f(a,b,c){return d(a,{$get:!1!==c?e(a,b):b})}function g(a){var b=[],c;r(a,function(a){function d(a){var b,c;b=0;for(c=a.length;b<c;b++){var e=a[b],f=q.get(e[0]);f[e[1]].apply(f,
e[2])}}if(!n.get(a)){n.put(a,!0);try{C(a)?(c=cb(a),b=b.concat(g(c.requires)).concat(c._runBlocks),d(c._invokeQueue),d(c._configBlocks)):G(a)?b.push(q.invoke(a)):H(a)?b.push(q.invoke(a)):sb(a,"module")}catch(e){throw H(a)&&(a=a[a.length-1]),e.message&&e.stack&&-1==e.stack.indexOf(e.message)&&(e=e.message+"\n"+e.stack),Fa("modulerr",a,e.stack||e.message||e);}}});return b}function h(b,c){function d(a,e){if(b.hasOwnProperty(a)){if(b[a]===l)throw Fa("cdep",a+" <- "+k.join(" <- "));return b[a]}try{return k.unshift(a),
b[a]=l,b[a]=c(a,e)}catch(f){throw b[a]===l&&delete b[a],f;}finally{k.shift()}}function e(b,c,f,g){"string"===typeof f&&(g=f,f=null);var k=[],h=ab.$$annotate(b,a,g),l,q,p;q=0;for(l=h.length;q<l;q++){p=h[q];if("string"!==typeof p)throw Fa("itkn",p);k.push(f&&f.hasOwnProperty(p)?f[p]:d(p,g))}H(b)&&(b=b[l]);return b.apply(c,k)}return{invoke:e,instantiate:function(a,b,c){var d=Object.create((H(a)?a[a.length-1]:a).prototype||null);a=e(a,d,b,c);return J(a)||G(a)?a:d},get:d,annotate:ab.$$annotate,has:function(a){return p.hasOwnProperty(a+
"Provider")||b.hasOwnProperty(a)}}}a=!0===a;var l={},k=[],n=new eb([],!0),p={$provide:{provider:c(d),factory:c(f),service:c(function(a,b){return f(a,["$injector",function(a){return a.instantiate(b)}])}),value:c(function(a,b){return f(a,ea(b),!1)}),constant:c(function(a,b){La(a,"constant");p[a]=b;u[a]=b}),decorator:function(a,b){var c=q.get(a+"Provider"),d=c.$get;c.$get=function(){var a=s.invoke(d,c);return s.invoke(b,null,{$delegate:a})}}}},q=p.$injector=h(p,function(a,b){ca.isString(b)&&k.push(b);
throw Fa("unpr",k.join(" <- "));}),u={},s=u.$injector=h(u,function(a,b){var c=q.get(a+"Provider",b);return s.invoke(c.$get,c,t,a)});r(g(b),function(a){s.invoke(a||E)});return s}function Be(){var b=!0;this.disableAutoScrolling=function(){b=!1};this.$get=["$window","$location","$rootScope",function(a,c,d){function e(a){var b=null;Array.prototype.some.call(a,function(a){if("a"===va(a))return b=a,!0});return b}function f(b){if(b){b.scrollIntoView();var c;c=g.yOffset;G(c)?c=c():oc(c)?(c=c[0],c="fixed"!==
a.getComputedStyle(c).position?0:c.getBoundingClientRect().bottom):Y(c)||(c=0);c&&(b=b.getBoundingClientRect().top,a.scrollBy(0,b-c))}else a.scrollTo(0,0)}function g(){var a=c.hash(),b;a?(b=h.getElementById(a))?f(b):(b=e(h.getElementsByName(a)))?f(b):"top"===a&&f(null):f(null)}var h=a.document;b&&d.$watch(function(){return c.hash()},function(a,b){a===b&&""===a||jf(function(){d.$evalAsync(g)})});return g}]}function af(){this.$get=["$$rAF","$timeout",function(b,a){return b.supported?function(a){return b(a)}:
function(b){return a(b,0,!1)}}]}function nf(b,a,c,d){function e(a){try{a.apply(null,Za.call(arguments,1))}finally{if(m--,0===m)for(;F.length;)try{F.pop()()}catch(b){c.error(b)}}}function f(a,b){(function da(){r(Z,function(a){a()});L=b(da,a)})()}function g(){h();l()}function h(){a:{try{B=u.state;break a}catch(a){}B=void 0}B=x(B)?null:B;ha(B,O)&&(B=O);O=B}function l(){if(D!==n.url()||I!==B)D=n.url(),I=B,r(X,function(a){a(n.url(),B)})}function k(a){try{return decodeURIComponent(a)}catch(b){return a}}
var n=this,p=a[0],q=b.location,u=b.history,s=b.setTimeout,M=b.clearTimeout,v={};n.isMock=!1;var m=0,F=[];n.$$completeOutstandingRequest=e;n.$$incOutstandingRequestCount=function(){m++};n.notifyWhenNoOutstandingRequests=function(a){r(Z,function(a){a()});0===m?a():F.push(a)};var Z=[],L;n.addPollFn=function(a){x(L)&&f(100,s);Z.push(a);return a};var B,I,D=q.href,S=a.find("base"),P=null;h();I=B;n.url=function(a,c,e){x(e)&&(e=null);q!==b.location&&(q=b.location);u!==b.history&&(u=b.history);if(a){var f=
I===e;if(D===a&&(!d.history||f))return n;var g=D&&Ga(D)===Ga(a);D=a;I=e;!d.history||g&&f?(g||(P=a),c?q.replace(a):g?(c=q,e=a.indexOf("#"),a=-1===e?"":a.substr(e+1),c.hash=a):q.href=a):(u[c?"replaceState":"pushState"](e,"",a),h(),I=B);return n}return P||q.href.replace(/%27/g,"'")};n.state=function(){return B};var X=[],ba=!1,O=null;n.onUrlChange=function(a){if(!ba){if(d.history)A(b).on("popstate",g);A(b).on("hashchange",g);ba=!0}X.push(a);return a};n.$$checkUrlChange=l;n.baseHref=function(){var a=S.attr("href");
return a?a.replace(/^(https?\:)?\/\/[^\/]*/,""):""};var fa={},y="",ka=n.baseHref();n.cookies=function(a,b){var d,e,f,g;if(a)b===t?p.cookie=encodeURIComponent(a)+"=;path="+ka+";expires=Thu, 01 Jan 1970 00:00:00 GMT":C(b)&&(d=(p.cookie=encodeURIComponent(a)+"="+encodeURIComponent(b)+";path="+ka).length+1,4096<d&&c.warn("Cookie '"+a+"' possibly not set or overflowed because it was too large ("+d+" > 4096 bytes)!"));else{if(p.cookie!==y)for(y=p.cookie,d=y.split("; "),fa={},f=0;f<d.length;f++)e=d[f],g=
e.indexOf("="),0<g&&(a=k(e.substring(0,g)),fa[a]===t&&(fa[a]=k(e.substring(g+1))));return fa}};n.defer=function(a,b){var c;m++;c=s(function(){delete v[c];e(a)},b||0);v[c]=!0;return c};n.defer.cancel=function(a){return v[a]?(delete v[a],M(a),e(E),!0):!1}}function De(){this.$get=["$window","$log","$sniffer","$document",function(b,a,c,d){return new nf(b,d,a,c)}]}function Ee(){this.$get=function(){function b(b,d){function e(a){a!=p&&(q?q==a&&(q=a.n):q=a,f(a.n,a.p),f(a,p),p=a,p.n=null)}function f(a,b){a!=
b&&(a&&(a.p=b),b&&(b.n=a))}if(b in a)throw R("$cacheFactory")("iid",b);var g=0,h=w({},d,{id:b}),l={},k=d&&d.capacity||Number.MAX_VALUE,n={},p=null,q=null;return a[b]={put:function(a,b){if(k<Number.MAX_VALUE){var c=n[a]||(n[a]={key:a});e(c)}if(!x(b))return a in l||g++,l[a]=b,g>k&&this.remove(q.key),b},get:function(a){if(k<Number.MAX_VALUE){var b=n[a];if(!b)return;e(b)}return l[a]},remove:function(a){if(k<Number.MAX_VALUE){var b=n[a];if(!b)return;b==p&&(p=b.p);b==q&&(q=b.n);f(b.n,b.p);delete n[a]}delete l[a];
g--},removeAll:function(){l={};g=0;n={};p=q=null},destroy:function(){n=h=l=null;delete a[b]},info:function(){return w({},h,{size:g})}}}var a={};b.info=function(){var b={};r(a,function(a,e){b[e]=a.info()});return b};b.get=function(b){return a[b]};return b}}function Ve(){this.$get=["$cacheFactory",function(b){return b("templates")}]}function yc(b,a){function c(a,b){var c=/^\s*([@&]|=(\*?))(\??)\s*(\w*)\s*$/,d={};r(a,function(a,e){var f=a.match(c);if(!f)throw la("iscp",b,e,a);d[e]={mode:f[1][0],collection:"*"===
f[2],optional:"?"===f[3],attrName:f[4]||e}});return d}var d={},e=/^\s*directive\:\s*([\w\-]+)\s+(.*)$/,f=/(([\w\-]+)(?:\:([^;]+))?;?)/,g=Gd("ngSrc,ngSrcset,src,srcset"),h=/^(?:(\^\^?)?(\?)?(\^\^?)?)?/,l=/^(on[a-z]+|formaction)$/;this.directive=function p(a,e){La(a,"directive");C(a)?(Rb(e,"directiveFactory"),d.hasOwnProperty(a)||(d[a]=[],b.factory(a+"Directive",["$injector","$exceptionHandler",function(b,e){var f=[];r(d[a],function(d,g){try{var h=b.invoke(d);G(h)?h={compile:ea(h)}:!h.compile&&h.link&&
(h.compile=ea(h.link));h.priority=h.priority||0;h.index=g;h.name=h.name||a;h.require=h.require||h.controller&&h.name;h.restrict=h.restrict||"EA";J(h.scope)&&(h.$$isolateBindings=c(h.scope,h.name));f.push(h)}catch(k){e(k)}});return f}])),d[a].push(e)):r(a,mc(p));return this};this.aHrefSanitizationWhitelist=function(b){return y(b)?(a.aHrefSanitizationWhitelist(b),this):a.aHrefSanitizationWhitelist()};this.imgSrcSanitizationWhitelist=function(b){return y(b)?(a.imgSrcSanitizationWhitelist(b),this):a.imgSrcSanitizationWhitelist()};
var k=!0;this.debugInfoEnabled=function(a){return y(a)?(k=a,this):k};this.$get=["$injector","$interpolate","$exceptionHandler","$templateRequest","$parse","$controller","$rootScope","$document","$sce","$animate","$$sanitizeUri",function(a,b,c,s,M,v,m,F,Z,L,B){function I(a,b){try{a.addClass(b)}catch(c){}}function D(a,b,c,d,e){a instanceof A||(a=A(a));r(a,function(b,c){b.nodeType==pb&&b.nodeValue.match(/\S+/)&&(a[c]=A(b).wrap("<span></span>").parent()[0])});var f=S(a,b,a,c,d,e);D.$$addScopeClass(a);
var g=null;return function(b,c,d){Rb(b,"scope");d=d||{};var e=d.parentBoundTranscludeFn,h=d.transcludeControllers;d=d.futureParentElement;e&&e.$$boundTransclude&&(e=e.$$boundTransclude);g||(g=(d=d&&d[0])?"foreignobject"!==va(d)&&d.toString().match(/SVG/)?"svg":"html":"html");d="html"!==g?A(Xb(g,A("<div>").append(a).html())):c?Ka.clone.call(a):a;if(h)for(var k in h)d.data("$"+k+"Controller",h[k].instance);D.$$addScopeInfo(d,b);c&&c(d,b);f&&f(b,d,d,e);return d}}function S(a,b,c,d,e,f){function g(a,
c,d,e){var f,k,l,q,p,s,M;if(m)for(M=Array(c.length),q=0;q<h.length;q+=3)f=h[q],M[f]=c[f];else M=c;q=0;for(p=h.length;q<p;)k=M[h[q++]],c=h[q++],f=h[q++],c?(c.scope?(l=a.$new(),D.$$addScopeInfo(A(k),l)):l=a,s=c.transcludeOnThisElement?P(a,c.transclude,e,c.elementTranscludeOnThisElement):!c.templateOnThisElement&&e?e:!e&&b?P(a,b):null,c(f,l,k,d,s)):f&&f(a,k.childNodes,t,e)}for(var h=[],k,l,q,p,m,s=0;s<a.length;s++){k=new Yb;l=X(a[s],[],k,0===s?d:t,e);(f=l.length?fa(l,a[s],k,b,c,null,[],[],f):null)&&
f.scope&&D.$$addScopeClass(k.$$element);k=f&&f.terminal||!(q=a[s].childNodes)||!q.length?null:S(q,f?(f.transcludeOnThisElement||!f.templateOnThisElement)&&f.transclude:b);if(f||k)h.push(s,f,k),p=!0,m=m||f;f=null}return p?g:null}function P(a,b,c,d){return function(d,e,f,g,h){d||(d=a.$new(!1,h),d.$$transcluded=!0);return b(d,e,{parentBoundTranscludeFn:c,transcludeControllers:f,futureParentElement:g})}}function X(a,b,c,d,g){var h=c.$attr,k;switch(a.nodeType){case qa:ka(b,xa(va(a)),"E",d,g);for(var l,
q,p,m=a.attributes,s=0,M=m&&m.length;s<M;s++){var u=!1,L=!1;l=m[s];k=l.name;q=N(l.value);l=xa(k);if(p=U.test(l))k=k.replace(Sc,"").substr(8).replace(/_(.)/g,function(a,b){return b.toUpperCase()});var B=l.replace(/(Start|End)$/,"");x(B)&&l===B+"Start"&&(u=k,L=k.substr(0,k.length-5)+"end",k=k.substr(0,k.length-6));l=xa(k.toLowerCase());h[l]=k;if(p||!c.hasOwnProperty(l))c[l]=q,Nc(a,l)&&(c[l]=!0);Oa(a,b,q,l,p);ka(b,l,"A",d,g,u,L)}a=a.className;J(a)&&(a=a.animVal);if(C(a)&&""!==a)for(;k=f.exec(a);)l=xa(k[2]),
ka(b,l,"C",d,g)&&(c[l]=N(k[3])),a=a.substr(k.index+k[0].length);break;case pb:za(b,a.nodeValue);break;case 8:try{if(k=e.exec(a.nodeValue))l=xa(k[1]),ka(b,l,"M",d,g)&&(c[l]=N(k[2]))}catch(v){}}b.sort(da);return b}function ba(a,b,c){var d=[],e=0;if(b&&a.hasAttribute&&a.hasAttribute(b)){do{if(!a)throw la("uterdir",b,c);a.nodeType==qa&&(a.hasAttribute(b)&&e++,a.hasAttribute(c)&&e--);d.push(a);a=a.nextSibling}while(0<e)}else d.push(a);return A(d)}function O(a,b,c){return function(d,e,f,g,h){e=ba(e[0],
b,c);return a(d,e,f,g,h)}}function fa(a,d,e,f,g,k,l,p,m){function s(a,b,c,d){if(a){c&&(a=O(a,c,d));a.require=K.require;a.directiveName=da;if(P===K||K.$$isolateScope)a=Y(a,{isolateScope:!0});l.push(a)}if(b){c&&(b=O(b,c,d));b.require=K.require;b.directiveName=da;if(P===K||K.$$isolateScope)b=Y(b,{isolateScope:!0});p.push(b)}}function L(a,b,c,d){var e,f="data",g=!1,k=c,l;if(C(b)){l=b.match(h);b=b.substring(l[0].length);l[3]&&(l[1]?l[3]=null:l[1]=l[3]);"^"===l[1]?f="inheritedData":"^^"===l[1]&&(f="inheritedData",
k=c.parent());"?"===l[2]&&(g=!0);e=null;d&&"data"===f&&(e=d[b])&&(e=e.instance);e=e||k[f]("$"+b+"Controller");if(!e&&!g)throw la("ctreq",b,a);return e||null}H(b)&&(e=[],r(b,function(b){e.push(L(a,b,c,d))}));return e}function B(a,c,f,g,h){function k(a,b,c){var d;Va(a)||(c=b,b=a,a=t);E&&(d=F);c||(c=E?X.parent():X);return h(a,b,d,c,Wb)}var m,s,u,I,F,gb,X,O;d===f?(O=e,X=e.$$element):(X=A(f),O=new Yb(X,e));P&&(I=c.$new(!0));h&&(gb=k,gb.$$boundTransclude=h);S&&(Z={},F={},r(S,function(a){var b={$scope:a===
P||a.$$isolateScope?I:c,$element:X,$attrs:O,$transclude:gb};u=a.controller;"@"==u&&(u=O[a.name]);b=v(u,b,!0,a.controllerAs);F[a.name]=b;E||X.data("$"+a.name+"Controller",b.instance);Z[a.name]=b}));if(P){D.$$addScopeInfo(X,I,!0,!(ma&&(ma===P||ma===P.$$originalDirective)));D.$$addScopeClass(X,!0);g=Z&&Z[P.name];var ba=I;g&&g.identifier&&!0===P.bindToController&&(ba=g.instance);r(I.$$isolateBindings=P.$$isolateBindings,function(a,d){var e=a.attrName,f=a.optional,g,h,k,l;switch(a.mode){case "@":O.$observe(e,
function(a){ba[d]=a});O.$$observers[e].$$scope=c;O[e]&&(ba[d]=b(O[e])(c));break;case "=":if(f&&!O[e])break;h=M(O[e]);l=h.literal?ha:function(a,b){return a===b||a!==a&&b!==b};k=h.assign||function(){g=ba[d]=h(c);throw la("nonassign",O[e],P.name);};g=ba[d]=h(c);f=function(a){l(a,ba[d])||(l(a,g)?k(c,a=ba[d]):ba[d]=a);return g=a};f.$stateful=!0;f=a.collection?c.$watchCollection(O[e],f):c.$watch(M(O[e],f),null,h.literal);I.$on("$destroy",f);break;case "&":h=M(O[e]),ba[d]=function(a){return h(c,a)}}})}Z&&
(r(Z,function(a){a()}),Z=null);g=0;for(m=l.length;g<m;g++)s=l[g],$(s,s.isolateScope?I:c,X,O,s.require&&L(s.directiveName,s.require,X,F),gb);var Wb=c;P&&(P.template||null===P.templateUrl)&&(Wb=I);a&&a(Wb,f.childNodes,t,h);for(g=p.length-1;0<=g;g--)s=p[g],$(s,s.isolateScope?I:c,X,O,s.require&&L(s.directiveName,s.require,X,F),gb)}m=m||{};for(var I=-Number.MAX_VALUE,F,S=m.controllerDirectives,Z,P=m.newIsolateScopeDirective,ma=m.templateDirective,fa=m.nonTlbTranscludeDirective,ka=!1,x=!1,E=m.hasElementTranscludeDirective,
w=e.$$element=A(d),K,da,V,fb=f,za,z=0,Q=a.length;z<Q;z++){K=a[z];var Oa=K.$$start,U=K.$$end;Oa&&(w=ba(d,Oa,U));V=t;if(I>K.priority)break;if(V=K.scope)K.templateUrl||(J(V)?(Na("new/isolated scope",P||F,K,w),P=K):Na("new/isolated scope",P,K,w)),F=F||K;da=K.name;!K.templateUrl&&K.controller&&(V=K.controller,S=S||{},Na("'"+da+"' controller",S[da],K,w),S[da]=K);if(V=K.transclude)ka=!0,K.$$tlb||(Na("transclusion",fa,K,w),fa=K),"element"==V?(E=!0,I=K.priority,V=w,w=e.$$element=A(W.createComment(" "+da+": "+
e[da]+" ")),d=w[0],T(g,Za.call(V,0),d),fb=D(V,f,I,k&&k.name,{nonTlbTranscludeDirective:fa})):(V=A(Ub(d)).contents(),w.empty(),fb=D(V,f));if(K.template)if(x=!0,Na("template",ma,K,w),ma=K,V=G(K.template)?K.template(w,e):K.template,V=Tc(V),K.replace){k=K;V=Sb.test(V)?Uc(Xb(K.templateNamespace,N(V))):[];d=V[0];if(1!=V.length||d.nodeType!==qa)throw la("tplrt",da,"");T(g,w,d);Q={$attr:{}};V=X(d,[],Q);var aa=a.splice(z+1,a.length-(z+1));P&&y(V);a=a.concat(V).concat(aa);R(e,Q);Q=a.length}else w.html(V);if(K.templateUrl)x=
!0,Na("template",ma,K,w),ma=K,K.replace&&(k=K),B=of(a.splice(z,a.length-z),w,e,g,ka&&fb,l,p,{controllerDirectives:S,newIsolateScopeDirective:P,templateDirective:ma,nonTlbTranscludeDirective:fa}),Q=a.length;else if(K.compile)try{za=K.compile(w,e,fb),G(za)?s(null,za,Oa,U):za&&s(za.pre,za.post,Oa,U)}catch(pf){c(pf,wa(w))}K.terminal&&(B.terminal=!0,I=Math.max(I,K.priority))}B.scope=F&&!0===F.scope;B.transcludeOnThisElement=ka;B.elementTranscludeOnThisElement=E;B.templateOnThisElement=x;B.transclude=fb;
m.hasElementTranscludeDirective=E;return B}function y(a){for(var b=0,c=a.length;b<c;b++)a[b]=Ob(a[b],{$$isolateScope:!0})}function ka(b,e,f,g,h,k,l){if(e===h)return null;h=null;if(d.hasOwnProperty(e)){var q;e=a.get(e+"Directive");for(var m=0,s=e.length;m<s;m++)try{q=e[m],(g===t||g>q.priority)&&-1!=q.restrict.indexOf(f)&&(k&&(q=Ob(q,{$$start:k,$$end:l})),b.push(q),h=q)}catch(M){c(M)}}return h}function x(b){if(d.hasOwnProperty(b))for(var c=a.get(b+"Directive"),e=0,f=c.length;e<f;e++)if(b=c[e],b.multiElement)return!0;
return!1}function R(a,b){var c=b.$attr,d=a.$attr,e=a.$$element;r(a,function(d,e){"$"!=e.charAt(0)&&(b[e]&&b[e]!==d&&(d+=("style"===e?";":" ")+b[e]),a.$set(e,d,!0,c[e]))});r(b,function(b,f){"class"==f?(I(e,b),a["class"]=(a["class"]?a["class"]+" ":"")+b):"style"==f?(e.attr("style",e.attr("style")+";"+b),a.style=(a.style?a.style+";":"")+b):"$"==f.charAt(0)||a.hasOwnProperty(f)||(a[f]=b,d[f]=c[f])})}function of(a,b,c,d,e,f,g,h){var k=[],l,q,p=b[0],m=a.shift(),M=Ob(m,{templateUrl:null,transclude:null,
replace:null,$$originalDirective:m}),u=G(m.templateUrl)?m.templateUrl(b,c):m.templateUrl,L=m.templateNamespace;b.empty();s(Z.getTrustedResourceUrl(u)).then(function(s){var B,v;s=Tc(s);if(m.replace){s=Sb.test(s)?Uc(Xb(L,N(s))):[];B=s[0];if(1!=s.length||B.nodeType!==qa)throw la("tplrt",m.name,u);s={$attr:{}};T(d,b,B);var D=X(B,[],s);J(m.scope)&&y(D);a=D.concat(a);R(c,s)}else B=p,b.html(s);a.unshift(M);l=fa(a,B,c,e,b,m,f,g,h);r(d,function(a,c){a==B&&(d[c]=b[0])});for(q=S(b[0].childNodes,e);k.length;){s=
k.shift();v=k.shift();var F=k.shift(),O=k.shift(),D=b[0];if(!s.$$destroyed){if(v!==p){var Z=v.className;h.hasElementTranscludeDirective&&m.replace||(D=Ub(B));T(F,A(v),D);I(A(D),Z)}v=l.transcludeOnThisElement?P(s,l.transclude,O):O;l(q,s,D,d,v)}}k=null});return function(a,b,c,d,e){a=e;b.$$destroyed||(k?k.push(b,c,d,a):(l.transcludeOnThisElement&&(a=P(b,l.transclude,e)),l(q,b,c,d,a)))}}function da(a,b){var c=b.priority-a.priority;return 0!==c?c:a.name!==b.name?a.name<b.name?-1:1:a.index-b.index}function Na(a,
b,c,d){if(b)throw la("multidir",b.name,c.name,a,wa(d));}function za(a,c){var d=b(c,!0);d&&a.push({priority:0,compile:function(a){a=a.parent();var b=!!a.length;b&&D.$$addBindingClass(a);return function(a,c){var e=c.parent();b||D.$$addBindingClass(e);D.$$addBindingInfo(e,d.expressions);a.$watch(d,function(a){c[0].nodeValue=a})}}})}function Xb(a,b){a=z(a||"html");switch(a){case "svg":case "math":var c=W.createElement("div");c.innerHTML="<"+a+">"+b+"</"+a+">";return c.childNodes[0].childNodes;default:return b}}
function Q(a,b){if("srcdoc"==b)return Z.HTML;var c=va(a);if("xlinkHref"==b||"form"==c&&"action"==b||"img"!=c&&("src"==b||"ngSrc"==b))return Z.RESOURCE_URL}function Oa(a,c,d,e,f){var h=Q(a,e);f=g[e]||f;var k=b(d,!0,h,f);if(k){if("multiple"===e&&"select"===va(a))throw la("selmulti",wa(a));c.push({priority:100,compile:function(){return{pre:function(a,c,g){c=g.$$observers||(g.$$observers={});if(l.test(e))throw la("nodomevents");var m=g[e];m!==d&&(k=m&&b(m,!0,h,f),d=m);k&&(g[e]=k(a),(c[e]||(c[e]=[])).$$inter=
!0,(g.$$observers&&g.$$observers[e].$$scope||a).$watch(k,function(a,b){"class"===e&&a!=b?g.$updateClass(a,b):g.$set(e,a)}))}}}})}}function T(a,b,c){var d=b[0],e=b.length,f=d.parentNode,g,h;if(a)for(g=0,h=a.length;g<h;g++)if(a[g]==d){a[g++]=c;h=g+e-1;for(var k=a.length;g<k;g++,h++)h<k?a[g]=a[h]:delete a[g];a.length-=e-1;a.context===d&&(a.context=c);break}f&&f.replaceChild(c,d);a=W.createDocumentFragment();a.appendChild(d);A(c).data(A(d).data());ta?(Qb=!0,ta.cleanData([d])):delete A.cache[d[A.expando]];
d=1;for(e=b.length;d<e;d++)f=b[d],A(f).remove(),a.appendChild(f),delete b[d];b[0]=c;b.length=1}function Y(a,b){return w(function(){return a.apply(null,arguments)},a,b)}function $(a,b,d,e,f,g){try{a(b,d,e,f,g)}catch(h){c(h,wa(d))}}var Yb=function(a,b){if(b){var c=Object.keys(b),d,e,f;d=0;for(e=c.length;d<e;d++)f=c[d],this[f]=b[f]}else this.$attr={};this.$$element=a};Yb.prototype={$normalize:xa,$addClass:function(a){a&&0<a.length&&L.addClass(this.$$element,a)},$removeClass:function(a){a&&0<a.length&&
L.removeClass(this.$$element,a)},$updateClass:function(a,b){var c=Vc(a,b);c&&c.length&&L.addClass(this.$$element,c);(c=Vc(b,a))&&c.length&&L.removeClass(this.$$element,c)},$set:function(a,b,d,e){var f=this.$$element[0],g=Nc(f,a),h=kf(f,a),f=a;g?(this.$$element.prop(a,b),e=g):h&&(this[h]=b,f=h);this[a]=b;e?this.$attr[a]=e:(e=this.$attr[a])||(this.$attr[a]=e=vc(a,"-"));g=va(this.$$element);if("a"===g&&"href"===a||"img"===g&&"src"===a)this[a]=b=B(b,"src"===a);else if("img"===g&&"srcset"===a){for(var g=
"",h=N(b),k=/(\s+\d+x\s*,|\s+\d+w\s*,|\s+,|,\s+)/,k=/\s/.test(h)?k:/(,)/,h=h.split(k),k=Math.floor(h.length/2),l=0;l<k;l++)var q=2*l,g=g+B(N(h[q]),!0),g=g+(" "+N(h[q+1]));h=N(h[2*l]).split(/\s/);g+=B(N(h[0]),!0);2===h.length&&(g+=" "+N(h[1]));this[a]=b=g}!1!==d&&(null===b||b===t?this.$$element.removeAttr(e):this.$$element.attr(e,b));(a=this.$$observers)&&r(a[f],function(a){try{a(b)}catch(d){c(d)}})},$observe:function(a,b){var c=this,d=c.$$observers||(c.$$observers=ia()),e=d[a]||(d[a]=[]);e.push(b);
m.$evalAsync(function(){!e.$$inter&&c.hasOwnProperty(a)&&b(c[a])});return function(){Xa(e,b)}}};var V=b.startSymbol(),ma=b.endSymbol(),Tc="{{"==V||"}}"==ma?ra:function(a){return a.replace(/\{\{/g,V).replace(/}}/g,ma)},U=/^ngAttr[A-Z]/;D.$$addBindingInfo=k?function(a,b){var c=a.data("$binding")||[];H(b)?c=c.concat(b):c.push(b);a.data("$binding",c)}:E;D.$$addBindingClass=k?function(a){I(a,"ng-binding")}:E;D.$$addScopeInfo=k?function(a,b,c,d){a.data(c?d?"$isolateScopeNoTemplate":"$isolateScope":"$scope",
b)}:E;D.$$addScopeClass=k?function(a,b){I(a,b?"ng-isolate-scope":"ng-scope")}:E;return D}]}function xa(b){return db(b.replace(Sc,""))}function Vc(b,a){var c="",d=b.split(/\s+/),e=a.split(/\s+/),f=0;a:for(;f<d.length;f++){for(var g=d[f],h=0;h<e.length;h++)if(g==e[h])continue a;c+=(0<c.length?" ":"")+g}return c}function Uc(b){b=A(b);var a=b.length;if(1>=a)return b;for(;a--;)8===b[a].nodeType&&qf.call(b,a,1);return b}function Fe(){var b={},a=!1,c=/^(\S+)(\s+as\s+(\w+))?$/;this.register=function(a,c){La(a,
"controller");J(a)?w(b,a):b[a]=c};this.allowGlobals=function(){a=!0};this.$get=["$injector","$window",function(d,e){function f(a,b,c,d){if(!a||!J(a.$scope))throw R("$controller")("noscp",d,b);a.$scope[b]=c}return function(g,h,l,k){var n,p,q;l=!0===l;k&&C(k)&&(q=k);if(C(g)){k=g.match(c);if(!k)throw rf("ctrlfmt",g);p=k[1];q=q||k[3];g=b.hasOwnProperty(p)?b[p]:xc(h.$scope,p,!0)||(a?xc(e,p,!0):t);sb(g,p,!0)}if(l)return l=(H(g)?g[g.length-1]:g).prototype,n=Object.create(l||null),q&&f(h,q,n,p||g.name),w(function(){d.invoke(g,
n,h,p);return n},{instance:n,identifier:q});n=d.instantiate(g,h,p);q&&f(h,q,n,p||g.name);return n}}]}function Ge(){this.$get=["$window",function(b){return A(b.document)}]}function He(){this.$get=["$log",function(b){return function(a,c){b.error.apply(b,arguments)}}]}function Zb(b,a){if(C(b)){var c=b.replace(sf,"").trim();if(c){var d=a("Content-Type");(d=d&&0===d.indexOf(Wc))||(d=(d=c.match(tf))&&uf[d[0]].test(c));d&&(b=qc(c))}}return b}function Xc(b){var a=ia(),c,d,e;if(!b)return a;r(b.split("\n"),
function(b){e=b.indexOf(":");c=z(N(b.substr(0,e)));d=N(b.substr(e+1));c&&(a[c]=a[c]?a[c]+", "+d:d)});return a}function Yc(b){var a=J(b)?b:t;return function(c){a||(a=Xc(b));return c?(c=a[z(c)],void 0===c&&(c=null),c):a}}function Zc(b,a,c,d){if(G(d))return d(b,a,c);r(d,function(d){b=d(b,a,c)});return b}function Ke(){var b=this.defaults={transformResponse:[Zb],transformRequest:[function(a){return J(a)&&"[object File]"!==Ca.call(a)&&"[object Blob]"!==Ca.call(a)&&"[object FormData]"!==Ca.call(a)?$a(a):
a}],headers:{common:{Accept:"application/json, text/plain, */*"},post:sa($b),put:sa($b),patch:sa($b)},xsrfCookieName:"XSRF-TOKEN",xsrfHeaderName:"X-XSRF-TOKEN"},a=!1;this.useApplyAsync=function(b){return y(b)?(a=!!b,this):a};var c=this.interceptors=[];this.$get=["$httpBackend","$browser","$cacheFactory","$rootScope","$q","$injector",function(d,e,f,g,h,l){function k(a){function c(a){var b=w({},a);b.data=a.data?Zc(a.data,a.headers,a.status,e.transformResponse):a.data;a=a.status;return 200<=a&&300>a?
b:h.reject(b)}function d(a){var b,c={};r(a,function(a,d){G(a)?(b=a(),null!=b&&(c[d]=b)):c[d]=a});return c}if(!ca.isObject(a))throw R("$http")("badreq",a);var e=w({method:"get",transformRequest:b.transformRequest,transformResponse:b.transformResponse},a);e.headers=function(a){var c=b.headers,e=w({},a.headers),f,g,c=w({},c.common,c[z(a.method)]);a:for(f in c){a=z(f);for(g in e)if(z(g)===a)continue a;e[f]=c[f]}return d(e)}(a);e.method=ub(e.method);var f=[function(a){var d=a.headers,e=Zc(a.data,Yc(d),
t,a.transformRequest);x(e)&&r(d,function(a,b){"content-type"===z(b)&&delete d[b]});x(a.withCredentials)&&!x(b.withCredentials)&&(a.withCredentials=b.withCredentials);return n(a,e).then(c,c)},t],g=h.when(e);for(r(u,function(a){(a.request||a.requestError)&&f.unshift(a.request,a.requestError);(a.response||a.responseError)&&f.push(a.response,a.responseError)});f.length;){a=f.shift();var k=f.shift(),g=g.then(a,k)}g.success=function(a){g.then(function(b){a(b.data,b.status,b.headers,e)});return g};g.error=
function(a){g.then(null,function(b){a(b.data,b.status,b.headers,e)});return g};return g}function n(c,f){function l(b,c,d,e){function f(){m(c,b,d,e)}I&&(200<=b&&300>b?I.put(P,[b,c,Xc(d),e]):I.remove(P));a?g.$applyAsync(f):(f(),g.$$phase||g.$apply())}function m(a,b,d,e){b=Math.max(b,0);(200<=b&&300>b?L.resolve:L.reject)({data:a,status:b,headers:Yc(d),config:c,statusText:e})}function n(a){m(a.data,a.status,sa(a.headers()),a.statusText)}function u(){var a=k.pendingRequests.indexOf(c);-1!==a&&k.pendingRequests.splice(a,
1)}var L=h.defer(),B=L.promise,I,D,S=c.headers,P=p(c.url,c.params);k.pendingRequests.push(c);B.then(u,u);!c.cache&&!b.cache||!1===c.cache||"GET"!==c.method&&"JSONP"!==c.method||(I=J(c.cache)?c.cache:J(b.cache)?b.cache:q);I&&(D=I.get(P),y(D)?D&&G(D.then)?D.then(n,n):H(D)?m(D[1],D[0],sa(D[2]),D[3]):m(D,200,{},"OK"):I.put(P,B));x(D)&&((D=$c(c.url)?e.cookies()[c.xsrfCookieName||b.xsrfCookieName]:t)&&(S[c.xsrfHeaderName||b.xsrfHeaderName]=D),d(c.method,P,f,l,S,c.timeout,c.withCredentials,c.responseType));
return B}function p(a,b){if(!b)return a;var c=[];Ed(b,function(a,b){null===a||x(a)||(H(a)||(a=[a]),r(a,function(a){J(a)&&(a=ga(a)?a.toISOString():$a(a));c.push(Ea(b)+"="+Ea(a))}))});0<c.length&&(a+=(-1==a.indexOf("?")?"?":"&")+c.join("&"));return a}var q=f("$http"),u=[];r(c,function(a){u.unshift(C(a)?l.get(a):l.invoke(a))});k.pendingRequests=[];(function(a){r(arguments,function(a){k[a]=function(b,c){return k(w(c||{},{method:a,url:b}))}})})("get","delete","head","jsonp");(function(a){r(arguments,function(a){k[a]=
function(b,c,d){return k(w(d||{},{method:a,url:b,data:c}))}})})("post","put","patch");k.defaults=b;return k}]}function vf(){return new Q.XMLHttpRequest}function Le(){this.$get=["$browser","$window","$document",function(b,a,c){return wf(b,vf,b.defer,a.angular.callbacks,c[0])}]}function wf(b,a,c,d,e){function f(a,b,c){var f=e.createElement("script"),n=null;f.type="text/javascript";f.src=a;f.async=!0;n=function(a){f.removeEventListener("load",n,!1);f.removeEventListener("error",n,!1);e.body.removeChild(f);
f=null;var g=-1,u="unknown";a&&("load"!==a.type||d[b].called||(a={type:"error"}),u=a.type,g="error"===a.type?404:200);c&&c(g,u)};f.addEventListener("load",n,!1);f.addEventListener("error",n,!1);e.body.appendChild(f);return n}return function(e,h,l,k,n,p,q,u){function s(){m&&m();F&&F.abort()}function M(a,d,e,f,g){L!==t&&c.cancel(L);m=F=null;a(d,e,f,g);b.$$completeOutstandingRequest(E)}b.$$incOutstandingRequestCount();h=h||b.url();if("jsonp"==z(e)){var v="_"+(d.counter++).toString(36);d[v]=function(a){d[v].data=
a;d[v].called=!0};var m=f(h.replace("JSON_CALLBACK","angular.callbacks."+v),v,function(a,b){M(k,a,d[v].data,"",b);d[v]=E})}else{var F=a();F.open(e,h,!0);r(n,function(a,b){y(a)&&F.setRequestHeader(b,a)});F.onload=function(){var a=F.statusText||"",b="response"in F?F.response:F.responseText,c=1223===F.status?204:F.status;0===c&&(c=b?200:"file"==Aa(h).protocol?404:0);M(k,c,b,F.getAllResponseHeaders(),a)};e=function(){M(k,-1,null,null,"")};F.onerror=e;F.onabort=e;q&&(F.withCredentials=!0);if(u)try{F.responseType=
u}catch(Z){if("json"!==u)throw Z;}F.send(l||null)}if(0<p)var L=c(s,p);else p&&G(p.then)&&p.then(s)}}function Ie(){var b="{{",a="}}";this.startSymbol=function(a){return a?(b=a,this):b};this.endSymbol=function(b){return b?(a=b,this):a};this.$get=["$parse","$exceptionHandler","$sce",function(c,d,e){function f(a){return"\\\\\\"+a}function g(f,g,u,s){function M(c){return c.replace(k,b).replace(n,a)}function v(a){try{var b=a;a=u?e.getTrusted(u,b):e.valueOf(b);var c;if(s&&!y(a))c=a;else if(null==a)c="";
else{switch(typeof a){case "string":break;case "number":a=""+a;break;default:a=$a(a)}c=a}return c}catch(g){c=ac("interr",f,g.toString()),d(c)}}s=!!s;for(var m,F,r=0,L=[],B=[],I=f.length,D=[],S=[];r<I;)if(-1!=(m=f.indexOf(b,r))&&-1!=(F=f.indexOf(a,m+h)))r!==m&&D.push(M(f.substring(r,m))),r=f.substring(m+h,F),L.push(r),B.push(c(r,v)),r=F+l,S.push(D.length),D.push("");else{r!==I&&D.push(M(f.substring(r)));break}if(u&&1<D.length)throw ac("noconcat",f);if(!g||L.length){var P=function(a){for(var b=0,c=
L.length;b<c;b++){if(s&&x(a[b]))return;D[S[b]]=a[b]}return D.join("")};return w(function(a){var b=0,c=L.length,e=Array(c);try{for(;b<c;b++)e[b]=B[b](a);return P(e)}catch(g){a=ac("interr",f,g.toString()),d(a)}},{exp:f,expressions:L,$$watchDelegate:function(a,b,c){var d;return a.$watchGroup(B,function(c,e){var f=P(c);G(b)&&b.call(this,f,c!==e?d:f,a);d=f},c)}})}}var h=b.length,l=a.length,k=new RegExp(b.replace(/./g,f),"g"),n=new RegExp(a.replace(/./g,f),"g");g.startSymbol=function(){return b};g.endSymbol=
function(){return a};return g}]}function Je(){this.$get=["$rootScope","$window","$q","$$q",function(b,a,c,d){function e(e,h,l,k){var n=a.setInterval,p=a.clearInterval,q=0,u=y(k)&&!k,s=(u?d:c).defer(),M=s.promise;l=y(l)?l:0;M.then(null,null,e);M.$$intervalId=n(function(){s.notify(q++);0<l&&q>=l&&(s.resolve(q),p(M.$$intervalId),delete f[M.$$intervalId]);u||b.$apply()},h);f[M.$$intervalId]=s;return M}var f={};e.cancel=function(b){return b&&b.$$intervalId in f?(f[b.$$intervalId].reject("canceled"),a.clearInterval(b.$$intervalId),
delete f[b.$$intervalId],!0):!1};return e}]}function Rd(){this.$get=function(){return{id:"en-us",NUMBER_FORMATS:{DECIMAL_SEP:".",GROUP_SEP:",",PATTERNS:[{minInt:1,minFrac:0,maxFrac:3,posPre:"",posSuf:"",negPre:"-",negSuf:"",gSize:3,lgSize:3},{minInt:1,minFrac:2,maxFrac:2,posPre:"\u00a4",posSuf:"",negPre:"(\u00a4",negSuf:")",gSize:3,lgSize:3}],CURRENCY_SYM:"$"},DATETIME_FORMATS:{MONTH:"January February March April May June July August September October November December".split(" "),SHORTMONTH:"Jan Feb Mar Apr May Jun Jul Aug Sep Oct Nov Dec".split(" "),
DAY:"Sunday Monday Tuesday Wednesday Thursday Friday Saturday".split(" "),SHORTDAY:"Sun Mon Tue Wed Thu Fri Sat".split(" "),AMPMS:["AM","PM"],medium:"MMM d, y h:mm:ss a","short":"M/d/yy h:mm a",fullDate:"EEEE, MMMM d, y",longDate:"MMMM d, y",mediumDate:"MMM d, y",shortDate:"M/d/yy",mediumTime:"h:mm:ss a",shortTime:"h:mm a",ERANAMES:["Before Christ","Anno Domini"],ERAS:["BC","AD"]},pluralCat:function(b){return 1===b?"one":"other"}}}}function bc(b){b=b.split("/");for(var a=b.length;a--;)b[a]=qb(b[a]);
return b.join("/")}function ad(b,a){var c=Aa(b);a.$$protocol=c.protocol;a.$$host=c.hostname;a.$$port=aa(c.port)||xf[c.protocol]||null}function bd(b,a){var c="/"!==b.charAt(0);c&&(b="/"+b);var d=Aa(b);a.$$path=decodeURIComponent(c&&"/"===d.pathname.charAt(0)?d.pathname.substring(1):d.pathname);a.$$search=sc(d.search);a.$$hash=decodeURIComponent(d.hash);a.$$path&&"/"!=a.$$path.charAt(0)&&(a.$$path="/"+a.$$path)}function ya(b,a){if(0===a.indexOf(b))return a.substr(b.length)}function Ga(b){var a=b.indexOf("#");
return-1==a?b:b.substr(0,a)}function Fb(b){return b.replace(/(#.+)|#$/,"$1")}function cc(b){return b.substr(0,Ga(b).lastIndexOf("/")+1)}function dc(b,a){this.$$html5=!0;a=a||"";var c=cc(b);ad(b,this);this.$$parse=function(a){var b=ya(c,a);if(!C(b))throw Gb("ipthprfx",a,c);bd(b,this);this.$$path||(this.$$path="/");this.$$compose()};this.$$compose=function(){var a=Pb(this.$$search),b=this.$$hash?"#"+qb(this.$$hash):"";this.$$url=bc(this.$$path)+(a?"?"+a:"")+b;this.$$absUrl=c+this.$$url.substr(1)};this.$$parseLinkUrl=
function(d,e){if(e&&"#"===e[0])return this.hash(e.slice(1)),!0;var f,g;(f=ya(b,d))!==t?(g=f,g=(f=ya(a,f))!==t?c+(ya("/",f)||f):b+g):(f=ya(c,d))!==t?g=c+f:c==d+"/"&&(g=c);g&&this.$$parse(g);return!!g}}function ec(b,a){var c=cc(b);ad(b,this);this.$$parse=function(d){d=ya(b,d)||ya(c,d);var e;"#"===d.charAt(0)?(e=ya(a,d),x(e)&&(e=d)):e=this.$$html5?d:"";bd(e,this);d=this.$$path;var f=/^\/[A-Z]:(\/.*)/;0===e.indexOf(b)&&(e=e.replace(b,""));f.exec(e)||(d=(e=f.exec(d))?e[1]:d);this.$$path=d;this.$$compose()};
this.$$compose=function(){var c=Pb(this.$$search),e=this.$$hash?"#"+qb(this.$$hash):"";this.$$url=bc(this.$$path)+(c?"?"+c:"")+e;this.$$absUrl=b+(this.$$url?a+this.$$url:"")};this.$$parseLinkUrl=function(a,c){return Ga(b)==Ga(a)?(this.$$parse(a),!0):!1}}function cd(b,a){this.$$html5=!0;ec.apply(this,arguments);var c=cc(b);this.$$parseLinkUrl=function(d,e){if(e&&"#"===e[0])return this.hash(e.slice(1)),!0;var f,g;b==Ga(d)?f=d:(g=ya(c,d))?f=b+a+g:c===d+"/"&&(f=c);f&&this.$$parse(f);return!!f};this.$$compose=
function(){var c=Pb(this.$$search),e=this.$$hash?"#"+qb(this.$$hash):"";this.$$url=bc(this.$$path)+(c?"?"+c:"")+e;this.$$absUrl=b+a+this.$$url}}function Hb(b){return function(){return this[b]}}function dd(b,a){return function(c){if(x(c))return this[b];this[b]=a(c);this.$$compose();return this}}function Me(){var b="",a={enabled:!1,requireBase:!0,rewriteLinks:!0};this.hashPrefix=function(a){return y(a)?(b=a,this):b};this.html5Mode=function(b){return Wa(b)?(a.enabled=b,this):J(b)?(Wa(b.enabled)&&(a.enabled=
b.enabled),Wa(b.requireBase)&&(a.requireBase=b.requireBase),Wa(b.rewriteLinks)&&(a.rewriteLinks=b.rewriteLinks),this):a};this.$get=["$rootScope","$browser","$sniffer","$rootElement","$window",function(c,d,e,f,g){function h(a,b,c){var e=k.url(),f=k.$$state;try{d.url(a,b,c),k.$$state=d.state()}catch(g){throw k.url(e),k.$$state=f,g;}}function l(a,b){c.$broadcast("$locationChangeSuccess",k.absUrl(),a,k.$$state,b)}var k,n;n=d.baseHref();var p=d.url(),q;if(a.enabled){if(!n&&a.requireBase)throw Gb("nobase");
q=p.substring(0,p.indexOf("/",p.indexOf("//")+2))+(n||"/");n=e.history?dc:cd}else q=Ga(p),n=ec;k=new n(q,"#"+b);k.$$parseLinkUrl(p,p);k.$$state=d.state();var u=/^\s*(javascript|mailto):/i;f.on("click",function(b){if(a.rewriteLinks&&!b.ctrlKey&&!b.metaKey&&!b.shiftKey&&2!=b.which&&2!=b.button){for(var e=A(b.target);"a"!==va(e[0]);)if(e[0]===f[0]||!(e=e.parent())[0])return;var h=e.prop("href"),l=e.attr("href")||e.attr("xlink:href");J(h)&&"[object SVGAnimatedString]"===h.toString()&&(h=Aa(h.animVal).href);
u.test(h)||!h||e.attr("target")||b.isDefaultPrevented()||!k.$$parseLinkUrl(h,l)||(b.preventDefault(),k.absUrl()!=d.url()&&(c.$apply(),g.angular["ff-684208-preventDefault"]=!0))}});Fb(k.absUrl())!=Fb(p)&&d.url(k.absUrl(),!0);var s=!0;d.onUrlChange(function(a,b){c.$evalAsync(function(){var d=k.absUrl(),e=k.$$state,f;k.$$parse(a);k.$$state=b;f=c.$broadcast("$locationChangeStart",a,d,b,e).defaultPrevented;k.absUrl()===a&&(f?(k.$$parse(d),k.$$state=e,h(d,!1,e)):(s=!1,l(d,e)))});c.$$phase||c.$digest()});
c.$watch(function(){var a=Fb(d.url()),b=Fb(k.absUrl()),f=d.state(),g=k.$$replace,q=a!==b||k.$$html5&&e.history&&f!==k.$$state;if(s||q)s=!1,c.$evalAsync(function(){var b=k.absUrl(),d=c.$broadcast("$locationChangeStart",b,a,k.$$state,f).defaultPrevented;k.absUrl()===b&&(d?(k.$$parse(a),k.$$state=f):(q&&h(b,g,f===k.$$state?null:k.$$state),l(a,f)))});k.$$replace=!1});return k}]}function Ne(){var b=!0,a=this;this.debugEnabled=function(a){return y(a)?(b=a,this):b};this.$get=["$window",function(c){function d(a){a instanceof
Error&&(a.stack?a=a.message&&-1===a.stack.indexOf(a.message)?"Error: "+a.message+"\n"+a.stack:a.stack:a.sourceURL&&(a=a.message+"\n"+a.sourceURL+":"+a.line));return a}function e(a){var b=c.console||{},e=b[a]||b.log||E;a=!1;try{a=!!e.apply}catch(l){}return a?function(){var a=[];r(arguments,function(b){a.push(d(b))});return e.apply(b,a)}:function(a,b){e(a,null==b?"":b)}}return{log:e("log"),info:e("info"),warn:e("warn"),error:e("error"),debug:function(){var c=e("debug");return function(){b&&c.apply(a,
arguments)}}()}}]}function ua(b,a){if("__defineGetter__"===b||"__defineSetter__"===b||"__lookupGetter__"===b||"__lookupSetter__"===b||"__proto__"===b)throw na("isecfld",a);return b}function oa(b,a){if(b){if(b.constructor===b)throw na("isecfn",a);if(b.window===b)throw na("isecwindow",a);if(b.children&&(b.nodeName||b.prop&&b.attr&&b.find))throw na("isecdom",a);if(b===Object)throw na("isecobj",a);}return b}function fc(b){return b.constant}function hb(b,a,c,d,e){oa(b,e);oa(a,e);c=c.split(".");for(var f,
g=0;1<c.length;g++){f=ua(c.shift(),e);var h=0===g&&a&&a[f]||b[f];h||(h={},b[f]=h);b=oa(h,e)}f=ua(c.shift(),e);oa(b[f],e);return b[f]=d}function Pa(b){return"constructor"==b}function ed(b,a,c,d,e,f,g){ua(b,f);ua(a,f);ua(c,f);ua(d,f);ua(e,f);var h=function(a){return oa(a,f)},l=g||Pa(b)?h:ra,k=g||Pa(a)?h:ra,n=g||Pa(c)?h:ra,p=g||Pa(d)?h:ra,q=g||Pa(e)?h:ra;return function(f,g){var h=g&&g.hasOwnProperty(b)?g:f;if(null==h)return h;h=l(h[b]);if(!a)return h;if(null==h)return t;h=k(h[a]);if(!c)return h;if(null==
h)return t;h=n(h[c]);if(!d)return h;if(null==h)return t;h=p(h[d]);return e?null==h?t:h=q(h[e]):h}}function yf(b,a){return function(c,d){return b(c,d,oa,a)}}function zf(b,a,c){var d=a.expensiveChecks,e=d?Af:Bf,f=e[b];if(f)return f;var g=b.split("."),h=g.length;if(a.csp)f=6>h?ed(g[0],g[1],g[2],g[3],g[4],c,d):function(a,b){var e=0,f;do f=ed(g[e++],g[e++],g[e++],g[e++],g[e++],c,d)(a,b),b=t,a=f;while(e<h);return f};else{var l="";d&&(l+="s = eso(s, fe);\nl = eso(l, fe);\n");var k=d;r(g,function(a,b){ua(a,
c);var e=(b?"s":'((l&&l.hasOwnProperty("'+a+'"))?l:s)')+"."+a;if(d||Pa(a))e="eso("+e+", fe)",k=!0;l+="if(s == null) return undefined;\ns="+e+";\n"});l+="return s;";a=new Function("s","l","eso","fe",l);a.toString=ea(l);k&&(a=yf(a,c));f=a}f.sharedGetter=!0;f.assign=function(a,c,d){return hb(a,d,b,c,b)};return e[b]=f}function gc(b){return G(b.valueOf)?b.valueOf():Cf.call(b)}function Oe(){var b=ia(),a=ia();this.$get=["$filter","$sniffer",function(c,d){function e(a){var b=a;a.sharedGetter&&(b=function(b,
c){return a(b,c)},b.literal=a.literal,b.constant=a.constant,b.assign=a.assign);return b}function f(a,b){for(var c=0,d=a.length;c<d;c++){var e=a[c];e.constant||(e.inputs?f(e.inputs,b):-1===b.indexOf(e)&&b.push(e))}return b}function g(a,b){return null==a||null==b?a===b:"object"===typeof a&&(a=gc(a),"object"===typeof a)?!1:a===b||a!==a&&b!==b}function h(a,b,c,d){var e=d.$$inputs||(d.$$inputs=f(d.inputs,[])),h;if(1===e.length){var k=g,e=e[0];return a.$watch(function(a){var b=e(a);g(b,k)||(h=d(a),k=b&&
gc(b));return h},b,c)}for(var l=[],q=0,p=e.length;q<p;q++)l[q]=g;return a.$watch(function(a){for(var b=!1,c=0,f=e.length;c<f;c++){var k=e[c](a);if(b||(b=!g(k,l[c])))l[c]=k&&gc(k)}b&&(h=d(a));return h},b,c)}function l(a,b,c,d){var e,f;return e=a.$watch(function(a){return d(a)},function(a,c,d){f=a;G(b)&&b.apply(this,arguments);y(a)&&d.$$postDigest(function(){y(f)&&e()})},c)}function k(a,b,c,d){function e(a){var b=!0;r(a,function(a){y(a)||(b=!1)});return b}var f,g;return f=a.$watch(function(a){return d(a)},
function(a,c,d){g=a;G(b)&&b.call(this,a,c,d);e(a)&&d.$$postDigest(function(){e(g)&&f()})},c)}function n(a,b,c,d){var e;return e=a.$watch(function(a){return d(a)},function(a,c,d){G(b)&&b.apply(this,arguments);e()},c)}function p(a,b){if(!b)return a;var c=a.$$watchDelegate,c=c!==k&&c!==l?function(c,d){var e=a(c,d);return b(e,c,d)}:function(c,d){var e=a(c,d),f=b(e,c,d);return y(e)?f:e};a.$$watchDelegate&&a.$$watchDelegate!==h?c.$$watchDelegate=a.$$watchDelegate:b.$stateful||(c.$$watchDelegate=h,c.inputs=
[a]);return c}var q={csp:d.csp,expensiveChecks:!1},u={csp:d.csp,expensiveChecks:!0};return function(d,f,g){var m,r,t;switch(typeof d){case "string":t=d=d.trim();var L=g?a:b;m=L[t];m||(":"===d.charAt(0)&&":"===d.charAt(1)&&(r=!0,d=d.substring(2)),g=g?u:q,m=new hc(g),m=(new ib(m,c,g)).parse(d),m.constant?m.$$watchDelegate=n:r?(m=e(m),m.$$watchDelegate=m.literal?k:l):m.inputs&&(m.$$watchDelegate=h),L[t]=m);return p(m,f);case "function":return p(d,f);default:return p(E,f)}}}]}function Qe(){this.$get=
["$rootScope","$exceptionHandler",function(b,a){return fd(function(a){b.$evalAsync(a)},a)}]}function Re(){this.$get=["$browser","$exceptionHandler",function(b,a){return fd(function(a){b.defer(a)},a)}]}function fd(b,a){function c(a,b,c){function d(b){return function(c){e||(e=!0,b.call(a,c))}}var e=!1;return[d(b),d(c)]}function d(){this.$$state={status:0}}function e(a,b){return function(c){b.call(a,c)}}function f(c){!c.processScheduled&&c.pending&&(c.processScheduled=!0,b(function(){var b,d,e;e=c.pending;
c.processScheduled=!1;c.pending=t;for(var f=0,g=e.length;f<g;++f){d=e[f][0];b=e[f][c.status];try{G(b)?d.resolve(b(c.value)):1===c.status?d.resolve(c.value):d.reject(c.value)}catch(h){d.reject(h),a(h)}}}))}function g(){this.promise=new d;this.resolve=e(this,this.resolve);this.reject=e(this,this.reject);this.notify=e(this,this.notify)}var h=R("$q",TypeError);d.prototype={then:function(a,b,c){var d=new g;this.$$state.pending=this.$$state.pending||[];this.$$state.pending.push([d,a,b,c]);0<this.$$state.status&&
f(this.$$state);return d.promise},"catch":function(a){return this.then(null,a)},"finally":function(a,b){return this.then(function(b){return k(b,!0,a)},function(b){return k(b,!1,a)},b)}};g.prototype={resolve:function(a){this.promise.$$state.status||(a===this.promise?this.$$reject(h("qcycle",a)):this.$$resolve(a))},$$resolve:function(b){var d,e;e=c(this,this.$$resolve,this.$$reject);try{if(J(b)||G(b))d=b&&b.then;G(d)?(this.promise.$$state.status=-1,d.call(b,e[0],e[1],this.notify)):(this.promise.$$state.value=
b,this.promise.$$state.status=1,f(this.promise.$$state))}catch(g){e[1](g),a(g)}},reject:function(a){this.promise.$$state.status||this.$$reject(a)},$$reject:function(a){this.promise.$$state.value=a;this.promise.$$state.status=2;f(this.promise.$$state)},notify:function(c){var d=this.promise.$$state.pending;0>=this.promise.$$state.status&&d&&d.length&&b(function(){for(var b,e,f=0,g=d.length;f<g;f++){e=d[f][0];b=d[f][3];try{e.notify(G(b)?b(c):c)}catch(h){a(h)}}})}};var l=function(a,b){var c=new g;b?c.resolve(a):
c.reject(a);return c.promise},k=function(a,b,c){var d=null;try{G(c)&&(d=c())}catch(e){return l(e,!1)}return d&&G(d.then)?d.then(function(){return l(a,b)},function(a){return l(a,!1)}):l(a,b)},n=function(a,b,c,d){var e=new g;e.resolve(a);return e.promise.then(b,c,d)},p=function u(a){if(!G(a))throw h("norslvr",a);if(!(this instanceof u))return new u(a);var b=new g;a(function(a){b.resolve(a)},function(a){b.reject(a)});return b.promise};p.defer=function(){return new g};p.reject=function(a){var b=new g;
b.reject(a);return b.promise};p.when=n;p.all=function(a){var b=new g,c=0,d=H(a)?[]:{};r(a,function(a,e){c++;n(a).then(function(a){d.hasOwnProperty(e)||(d[e]=a,--c||b.resolve(d))},function(a){d.hasOwnProperty(e)||b.reject(a)})});0===c&&b.resolve(d);return b.promise};return p}function $e(){this.$get=["$window","$timeout",function(b,a){var c=b.requestAnimationFrame||b.webkitRequestAnimationFrame,d=b.cancelAnimationFrame||b.webkitCancelAnimationFrame||b.webkitCancelRequestAnimationFrame,e=!!c,f=e?function(a){var b=
c(a);return function(){d(b)}}:function(b){var c=a(b,16.66,!1);return function(){a.cancel(c)}};f.supported=e;return f}]}function Pe(){function b(a){function b(){this.$$watchers=this.$$nextSibling=this.$$childHead=this.$$childTail=null;this.$$listeners={};this.$$listenerCount={};this.$$watchersCount=0;this.$id=++ob;this.$$ChildScope=null}b.prototype=a;return b}var a=10,c=R("$rootScope"),d=null,e=null;this.digestTtl=function(b){arguments.length&&(a=b);return a};this.$get=["$injector","$exceptionHandler",
"$parse","$browser",function(f,g,h,l){function k(a){a.currentScope.$$destroyed=!0}function n(){this.$id=++ob;this.$$phase=this.$parent=this.$$watchers=this.$$nextSibling=this.$$prevSibling=this.$$childHead=this.$$childTail=null;this.$root=this;this.$$destroyed=!1;this.$$listeners={};this.$$listenerCount={};this.$$isolateBindings=null}function p(a){if(v.$$phase)throw c("inprog",v.$$phase);v.$$phase=a}function q(a,b,c){do a.$$listenerCount[c]-=b,0===a.$$listenerCount[c]&&delete a.$$listenerCount[c];
while(a=a.$parent)}function u(){}function s(){for(;t.length;)try{t.shift()()}catch(a){g(a)}e=null}function M(){null===e&&(e=l.defer(function(){v.$apply(s)}))}n.prototype={constructor:n,$new:function(a,c){var d;c=c||this;a?(d=new n,d.$root=this.$root):(this.$$ChildScope||(this.$$ChildScope=b(this)),d=new this.$$ChildScope);d.$parent=c;d.$$prevSibling=c.$$childTail;c.$$childHead?(c.$$childTail.$$nextSibling=d,c.$$childTail=d):c.$$childHead=c.$$childTail=d;(a||c!=this)&&d.$on("$destroy",k);return d},
$watch:function(a,b,c){var e=h(a);if(e.$$watchDelegate)return e.$$watchDelegate(this,b,c,e);var f=this.$$watchers,g={fn:b,last:u,get:e,exp:a,eq:!!c};d=null;G(b)||(g.fn=E);f||(f=this.$$watchers=[]);f.unshift(g);return function(){Xa(f,g);d=null}},$watchGroup:function(a,b){function c(){h=!1;k?(k=!1,b(e,e,g)):b(e,d,g)}var d=Array(a.length),e=Array(a.length),f=[],g=this,h=!1,k=!0;if(!a.length){var l=!0;g.$evalAsync(function(){l&&b(e,e,g)});return function(){l=!1}}if(1===a.length)return this.$watch(a[0],
function(a,c,f){e[0]=a;d[0]=c;b(e,a===c?e:d,f)});r(a,function(a,b){var k=g.$watch(a,function(a,f){e[b]=a;d[b]=f;h||(h=!0,g.$evalAsync(c))});f.push(k)});return function(){for(;f.length;)f.shift()()}},$watchCollection:function(a,b){function c(a){e=a;var b,d,g,h;if(!x(e)){if(J(e))if(Sa(e))for(f!==p&&(f=p,u=f.length=0,l++),a=e.length,u!==a&&(l++,f.length=u=a),b=0;b<a;b++)h=f[b],g=e[b],d=h!==h&&g!==g,d||h===g||(l++,f[b]=g);else{f!==n&&(f=n={},u=0,l++);a=0;for(b in e)e.hasOwnProperty(b)&&(a++,g=e[b],h=
f[b],b in f?(d=h!==h&&g!==g,d||h===g||(l++,f[b]=g)):(u++,f[b]=g,l++));if(u>a)for(b in l++,f)e.hasOwnProperty(b)||(u--,delete f[b])}else f!==e&&(f=e,l++);return l}}c.$stateful=!0;var d=this,e,f,g,k=1<b.length,l=0,q=h(a,c),p=[],n={},m=!0,u=0;return this.$watch(q,function(){m?(m=!1,b(e,e,d)):b(e,g,d);if(k)if(J(e))if(Sa(e)){g=Array(e.length);for(var a=0;a<e.length;a++)g[a]=e[a]}else for(a in g={},e)tc.call(e,a)&&(g[a]=e[a]);else g=e})},$digest:function(){var b,f,h,k,q,n,r=a,t,O=[],M,y;p("$digest");l.$$checkUrlChange();
this===v&&null!==e&&(l.defer.cancel(e),s());d=null;do{n=!1;for(t=this;m.length;){try{y=m.shift(),y.scope.$eval(y.expression,y.locals)}catch(w){g(w)}d=null}a:do{if(k=t.$$watchers)for(q=k.length;q--;)try{if(b=k[q])if((f=b.get(t))!==(h=b.last)&&!(b.eq?ha(f,h):"number"===typeof f&&"number"===typeof h&&isNaN(f)&&isNaN(h)))n=!0,d=b,b.last=b.eq?Da(f,null):f,b.fn(f,h===u?f:h,t),5>r&&(M=4-r,O[M]||(O[M]=[]),O[M].push({msg:G(b.exp)?"fn: "+(b.exp.name||b.exp.toString()):b.exp,newVal:f,oldVal:h}));else if(b===
d){n=!1;break a}}catch(A){g(A)}if(!(k=t.$$childHead||t!==this&&t.$$nextSibling))for(;t!==this&&!(k=t.$$nextSibling);)t=t.$parent}while(t=k);if((n||m.length)&&!r--)throw v.$$phase=null,c("infdig",a,O);}while(n||m.length);for(v.$$phase=null;F.length;)try{F.shift()()}catch(x){g(x)}},$destroy:function(){if(!this.$$destroyed){var a=this.$parent;this.$broadcast("$destroy");this.$$destroyed=!0;if(this!==v){for(var b in this.$$listenerCount)q(this,this.$$listenerCount[b],b);a.$$childHead==this&&(a.$$childHead=
this.$$nextSibling);a.$$childTail==this&&(a.$$childTail=this.$$prevSibling);this.$$prevSibling&&(this.$$prevSibling.$$nextSibling=this.$$nextSibling);this.$$nextSibling&&(this.$$nextSibling.$$prevSibling=this.$$prevSibling);this.$destroy=this.$digest=this.$apply=this.$evalAsync=this.$applyAsync=E;this.$on=this.$watch=this.$watchGroup=function(){return E};this.$$listeners={};this.$parent=this.$$nextSibling=this.$$prevSibling=this.$$childHead=this.$$childTail=this.$root=this.$$watchers=null}}},$eval:function(a,
b){return h(a)(this,b)},$evalAsync:function(a,b){v.$$phase||m.length||l.defer(function(){m.length&&v.$digest()});m.push({scope:this,expression:a,locals:b})},$$postDigest:function(a){F.push(a)},$apply:function(a){try{return p("$apply"),this.$eval(a)}catch(b){g(b)}finally{v.$$phase=null;try{v.$digest()}catch(c){throw g(c),c;}}},$applyAsync:function(a){function b(){c.$eval(a)}var c=this;a&&t.push(b);M()},$on:function(a,b){var c=this.$$listeners[a];c||(this.$$listeners[a]=c=[]);c.push(b);var d=this;do d.$$listenerCount[a]||
(d.$$listenerCount[a]=0),d.$$listenerCount[a]++;while(d=d.$parent);var e=this;return function(){var d=c.indexOf(b);-1!==d&&(c[d]=null,q(e,1,a))}},$emit:function(a,b){var c=[],d,e=this,f=!1,h={name:a,targetScope:e,stopPropagation:function(){f=!0},preventDefault:function(){h.defaultPrevented=!0},defaultPrevented:!1},k=Ya([h],arguments,1),l,q;do{d=e.$$listeners[a]||c;h.currentScope=e;l=0;for(q=d.length;l<q;l++)if(d[l])try{d[l].apply(null,k)}catch(p){g(p)}else d.splice(l,1),l--,q--;if(f)return h.currentScope=
null,h;e=e.$parent}while(e);h.currentScope=null;return h},$broadcast:function(a,b){var c=this,d=this,e={name:a,targetScope:this,preventDefault:function(){e.defaultPrevented=!0},defaultPrevented:!1};if(!this.$$listenerCount[a])return e;for(var f=Ya([e],arguments,1),h,l;c=d;){e.currentScope=c;d=c.$$listeners[a]||[];h=0;for(l=d.length;h<l;h++)if(d[h])try{d[h].apply(null,f)}catch(k){g(k)}else d.splice(h,1),h--,l--;if(!(d=c.$$listenerCount[a]&&c.$$childHead||c!==this&&c.$$nextSibling))for(;c!==this&&!(d=
c.$$nextSibling);)c=c.$parent}e.currentScope=null;return e}};var v=new n,m=v.$$asyncQueue=[],F=v.$$postDigestQueue=[],t=v.$$applyAsyncQueue=[];return v}]}function Sd(){var b=/^\s*(https?|ftp|mailto|tel|file):/,a=/^\s*((https?|ftp|file|blob):|data:image\/)/;this.aHrefSanitizationWhitelist=function(a){return y(a)?(b=a,this):b};this.imgSrcSanitizationWhitelist=function(b){return y(b)?(a=b,this):a};this.$get=function(){return function(c,d){var e=d?a:b,f;f=Aa(c).href;return""===f||f.match(e)?c:"unsafe:"+
f}}}function Df(b){if("self"===b)return b;if(C(b)){if(-1<b.indexOf("***"))throw Ba("iwcard",b);b=gd(b).replace("\\*\\*",".*").replace("\\*","[^:/.?&;]*");return new RegExp("^"+b+"$")}if(Ua(b))return new RegExp("^"+b.source+"$");throw Ba("imatcher");}function hd(b){var a=[];y(b)&&r(b,function(b){a.push(Df(b))});return a}function Te(){this.SCE_CONTEXTS=pa;var b=["self"],a=[];this.resourceUrlWhitelist=function(a){arguments.length&&(b=hd(a));return b};this.resourceUrlBlacklist=function(b){arguments.length&&
(a=hd(b));return a};this.$get=["$injector",function(c){function d(a,b){return"self"===a?$c(b):!!a.exec(b.href)}function e(a){var b=function(a){this.$$unwrapTrustedValue=function(){return a}};a&&(b.prototype=new a);b.prototype.valueOf=function(){return this.$$unwrapTrustedValue()};b.prototype.toString=function(){return this.$$unwrapTrustedValue().toString()};return b}var f=function(a){throw Ba("unsafe");};c.has("$sanitize")&&(f=c.get("$sanitize"));var g=e(),h={};h[pa.HTML]=e(g);h[pa.CSS]=e(g);h[pa.URL]=
e(g);h[pa.JS]=e(g);h[pa.RESOURCE_URL]=e(h[pa.URL]);return{trustAs:function(a,b){var c=h.hasOwnProperty(a)?h[a]:null;if(!c)throw Ba("icontext",a,b);if(null===b||b===t||""===b)return b;if("string"!==typeof b)throw Ba("itype",a);return new c(b)},getTrusted:function(c,e){if(null===e||e===t||""===e)return e;var g=h.hasOwnProperty(c)?h[c]:null;if(g&&e instanceof g)return e.$$unwrapTrustedValue();if(c===pa.RESOURCE_URL){var g=Aa(e.toString()),p,q,u=!1;p=0;for(q=b.length;p<q;p++)if(d(b[p],g)){u=!0;break}if(u)for(p=
0,q=a.length;p<q;p++)if(d(a[p],g)){u=!1;break}if(u)return e;throw Ba("insecurl",e.toString());}if(c===pa.HTML)return f(e);throw Ba("unsafe");},valueOf:function(a){return a instanceof g?a.$$unwrapTrustedValue():a}}}]}function Se(){var b=!0;this.enabled=function(a){arguments.length&&(b=!!a);return b};this.$get=["$parse","$sceDelegate",function(a,c){if(b&&8>Qa)throw Ba("iequirks");var d=sa(pa);d.isEnabled=function(){return b};d.trustAs=c.trustAs;d.getTrusted=c.getTrusted;d.valueOf=c.valueOf;b||(d.trustAs=
d.getTrusted=function(a,b){return b},d.valueOf=ra);d.parseAs=function(b,c){var e=a(c);return e.literal&&e.constant?e:a(c,function(a){return d.getTrusted(b,a)})};var e=d.parseAs,f=d.getTrusted,g=d.trustAs;r(pa,function(a,b){var c=z(b);d[db("parse_as_"+c)]=function(b){return e(a,b)};d[db("get_trusted_"+c)]=function(b){return f(a,b)};d[db("trust_as_"+c)]=function(b){return g(a,b)}});return d}]}function Ue(){this.$get=["$window","$document",function(b,a){var c={},d=aa((/android (\d+)/.exec(z((b.navigator||
{}).userAgent))||[])[1]),e=/Boxee/i.test((b.navigator||{}).userAgent),f=a[0]||{},g,h=/^(Moz|webkit|ms)(?=[A-Z])/,l=f.body&&f.body.style,k=!1,n=!1;if(l){for(var p in l)if(k=h.exec(p)){g=k[0];g=g.substr(0,1).toUpperCase()+g.substr(1);break}g||(g="WebkitOpacity"in l&&"webkit");k=!!("transition"in l||g+"Transition"in l);n=!!("animation"in l||g+"Animation"in l);!d||k&&n||(k=C(f.body.style.webkitTransition),n=C(f.body.style.webkitAnimation))}return{history:!(!b.history||!b.history.pushState||4>d||e),hasEvent:function(a){if("input"===
a&&11>=Qa)return!1;if(x(c[a])){var b=f.createElement("div");c[a]="on"+a in b}return c[a]},csp:bb(),vendorPrefix:g,transitions:k,animations:n,android:d}}]}function We(){this.$get=["$templateCache","$http","$q",function(b,a,c){function d(e,f){d.totalPendingRequests++;var g=a.defaults&&a.defaults.transformResponse;H(g)?g=g.filter(function(a){return a!==Zb}):g===Zb&&(g=null);return a.get(e,{cache:b,transformResponse:g})["finally"](function(){d.totalPendingRequests--}).then(function(a){return a.data},
function(a){if(!f)throw la("tpload",e);return c.reject(a)})}d.totalPendingRequests=0;return d}]}function Xe(){this.$get=["$rootScope","$browser","$location",function(b,a,c){return{findBindings:function(a,b,c){a=a.getElementsByClassName("ng-binding");var g=[];r(a,function(a){var d=ca.element(a).data("$binding");d&&r(d,function(d){c?(new RegExp("(^|\\s)"+gd(b)+"(\\s|\\||$)")).test(d)&&g.push(a):-1!=d.indexOf(b)&&g.push(a)})});return g},findModels:function(a,b,c){for(var g=["ng-","data-ng-","ng\\:"],
h=0;h<g.length;++h){var l=a.querySelectorAll("["+g[h]+"model"+(c?"=":"*=")+'"'+b+'"]');if(l.length)return l}},getLocation:function(){return c.url()},setLocation:function(a){a!==c.url()&&(c.url(a),b.$digest())},whenStable:function(b){a.notifyWhenNoOutstandingRequests(b)}}}]}function Ye(){this.$get=["$rootScope","$browser","$q","$$q","$exceptionHandler",function(b,a,c,d,e){function f(f,l,k){var n=y(k)&&!k,p=(n?d:c).defer(),q=p.promise;l=a.defer(function(){try{p.resolve(f())}catch(a){p.reject(a),e(a)}finally{delete g[q.$$timeoutId]}n||
b.$apply()},l);q.$$timeoutId=l;g[l]=p;return q}var g={};f.cancel=function(b){return b&&b.$$timeoutId in g?(g[b.$$timeoutId].reject("canceled"),delete g[b.$$timeoutId],a.defer.cancel(b.$$timeoutId)):!1};return f}]}function Aa(b){Qa&&($.setAttribute("href",b),b=$.href);$.setAttribute("href",b);return{href:$.href,protocol:$.protocol?$.protocol.replace(/:$/,""):"",host:$.host,search:$.search?$.search.replace(/^\?/,""):"",hash:$.hash?$.hash.replace(/^#/,""):"",hostname:$.hostname,port:$.port,pathname:"/"===
$.pathname.charAt(0)?$.pathname:"/"+$.pathname}}function $c(b){b=C(b)?Aa(b):b;return b.protocol===id.protocol&&b.host===id.host}function Ze(){this.$get=ea(Q)}function Fc(b){function a(c,d){if(J(c)){var e={};r(c,function(b,c){e[c]=a(c,b)});return e}return b.factory(c+"Filter",d)}this.register=a;this.$get=["$injector",function(a){return function(b){return a.get(b+"Filter")}}];a("currency",jd);a("date",kd);a("filter",Ef);a("json",Ff);a("limitTo",Gf);a("lowercase",Hf);a("number",ld);a("orderBy",md);a("uppercase",
If)}function Ef(){return function(b,a,c){if(!H(b))return b;var d;switch(typeof a){case "function":break;case "boolean":case "number":case "string":d=!0;case "object":a=Jf(a,c,d);break;default:return b}return b.filter(a)}}function Jf(b,a,c){var d=J(b)&&"$"in b;!0===a?a=ha:G(a)||(a=function(a,b){if(J(a)||J(b))return!1;a=z(""+a);b=z(""+b);return-1!==a.indexOf(b)});return function(e){return d&&!J(e)?Ha(e,b.$,a,!1):Ha(e,b,a,c)}}function Ha(b,a,c,d,e){var f=null!==b?typeof b:"null",g=null!==a?typeof a:
"null";if("string"===g&&"!"===a.charAt(0))return!Ha(b,a.substring(1),c,d);if(H(b))return b.some(function(b){return Ha(b,a,c,d)});switch(f){case "object":var h;if(d){for(h in b)if("$"!==h.charAt(0)&&Ha(b[h],a,c,!0))return!0;return e?!1:Ha(b,a,c,!1)}if("object"===g){for(h in a)if(e=a[h],!G(e)&&!x(e)&&(f="$"===h,!Ha(f?b:b[h],e,c,f,f)))return!1;return!0}return c(b,a);case "function":return!1;default:return c(b,a)}}function jd(b){var a=b.NUMBER_FORMATS;return function(b,d,e){x(d)&&(d=a.CURRENCY_SYM);x(e)&&
(e=a.PATTERNS[1].maxFrac);return null==b?b:nd(b,a.PATTERNS[1],a.GROUP_SEP,a.DECIMAL_SEP,e).replace(/\u00A4/g,d)}}function ld(b){var a=b.NUMBER_FORMATS;return function(b,d){return null==b?b:nd(b,a.PATTERNS[0],a.GROUP_SEP,a.DECIMAL_SEP,d)}}function nd(b,a,c,d,e){if(!isFinite(b)||J(b))return"";var f=0>b;b=Math.abs(b);var g=b+"",h="",l=[],k=!1;if(-1!==g.indexOf("e")){var n=g.match(/([\d\.]+)e(-?)(\d+)/);n&&"-"==n[2]&&n[3]>e+1?b=0:(h=g,k=!0)}if(k)0<e&&1>b&&(h=b.toFixed(e),b=parseFloat(h));else{g=(g.split(od)[1]||
"").length;x(e)&&(e=Math.min(Math.max(a.minFrac,g),a.maxFrac));b=+(Math.round(+(b.toString()+"e"+e)).toString()+"e"+-e);var g=(""+b).split(od),k=g[0],g=g[1]||"",p=0,q=a.lgSize,u=a.gSize;if(k.length>=q+u)for(p=k.length-q,n=0;n<p;n++)0===(p-n)%u&&0!==n&&(h+=c),h+=k.charAt(n);for(n=p;n<k.length;n++)0===(k.length-n)%q&&0!==n&&(h+=c),h+=k.charAt(n);for(;g.length<e;)g+="0";e&&"0"!==e&&(h+=d+g.substr(0,e))}0===b&&(f=!1);l.push(f?a.negPre:a.posPre,h,f?a.negSuf:a.posSuf);return l.join("")}function Ib(b,a,
c){var d="";0>b&&(d="-",b=-b);for(b=""+b;b.length<a;)b="0"+b;c&&(b=b.substr(b.length-a));return d+b}function U(b,a,c,d){c=c||0;return function(e){e=e["get"+b]();if(0<c||e>-c)e+=c;0===e&&-12==c&&(e=12);return Ib(e,a,d)}}function Jb(b,a){return function(c,d){var e=c["get"+b](),f=ub(a?"SHORT"+b:b);return d[f][e]}}function pd(b){var a=(new Date(b,0,1)).getDay();return new Date(b,0,(4>=a?5:12)-a)}function qd(b){return function(a){var c=pd(a.getFullYear());a=+new Date(a.getFullYear(),a.getMonth(),a.getDate()+
(4-a.getDay()))-+c;a=1+Math.round(a/6048E5);return Ib(a,b)}}function ic(b,a){return 0>=b.getFullYear()?a.ERAS[0]:a.ERAS[1]}function kd(b){function a(a){var b;if(b=a.match(c)){a=new Date(0);var f=0,g=0,h=b[8]?a.setUTCFullYear:a.setFullYear,l=b[8]?a.setUTCHours:a.setHours;b[9]&&(f=aa(b[9]+b[10]),g=aa(b[9]+b[11]));h.call(a,aa(b[1]),aa(b[2])-1,aa(b[3]));f=aa(b[4]||0)-f;g=aa(b[5]||0)-g;h=aa(b[6]||0);b=Math.round(1E3*parseFloat("0."+(b[7]||0)));l.call(a,f,g,h,b)}return a}var c=/^(\d{4})-?(\d\d)-?(\d\d)(?:T(\d\d)(?::?(\d\d)(?::?(\d\d)(?:\.(\d+))?)?)?(Z|([+-])(\d\d):?(\d\d))?)?$/;
return function(c,e,f){var g="",h=[],l,k;e=e||"mediumDate";e=b.DATETIME_FORMATS[e]||e;C(c)&&(c=Kf.test(c)?aa(c):a(c));Y(c)&&(c=new Date(c));if(!ga(c))return c;for(;e;)(k=Lf.exec(e))?(h=Ya(h,k,1),e=h.pop()):(h.push(e),e=null);f&&"UTC"===f&&(c=new Date(c.getTime()),c.setMinutes(c.getMinutes()+c.getTimezoneOffset()));r(h,function(a){l=Mf[a];g+=l?l(c,b.DATETIME_FORMATS):a.replace(/(^'|'$)/g,"").replace(/''/g,"'")});return g}}function Ff(){return function(b,a){x(a)&&(a=2);return $a(b,a)}}function Gf(){return function(b,
a){Y(b)&&(b=b.toString());return H(b)||C(b)?(a=Infinity===Math.abs(Number(a))?Number(a):aa(a))?0<a?b.slice(0,a):b.slice(a):C(b)?"":[]:b}}function md(b){return function(a,c,d){function e(a,b){return b?function(b,c){return a(c,b)}:a}function f(a){switch(typeof a){case "number":case "boolean":case "string":return!0;default:return!1}}function g(a){return null===a?"null":"function"===typeof a.valueOf&&(a=a.valueOf(),f(a))||"function"===typeof a.toString&&(a=a.toString(),f(a))?a:""}function h(a,b){var c=
typeof a,d=typeof b;c===d&&"object"===c&&(a=g(a),b=g(b));return c===d?("string"===c&&(a=a.toLowerCase(),b=b.toLowerCase()),a===b?0:a<b?-1:1):c<d?-1:1}if(!Sa(a))return a;c=H(c)?c:[c];0===c.length&&(c=["+"]);c=c.map(function(a){var c=!1,d=a||ra;if(C(a)){if("+"==a.charAt(0)||"-"==a.charAt(0))c="-"==a.charAt(0),a=a.substring(1);if(""===a)return e(h,c);d=b(a);if(d.constant){var f=d();return e(function(a,b){return h(a[f],b[f])},c)}}return e(function(a,b){return h(d(a),d(b))},c)});return Za.call(a).sort(e(function(a,
b){for(var d=0;d<c.length;d++){var e=c[d](a,b);if(0!==e)return e}return 0},d))}}function Ia(b){G(b)&&(b={link:b});b.restrict=b.restrict||"AC";return ea(b)}function rd(b,a,c,d,e){var f=this,g=[],h=f.$$parentForm=b.parent().controller("form")||Kb;f.$error={};f.$$success={};f.$pending=t;f.$name=e(a.name||a.ngForm||"")(c);f.$dirty=!1;f.$pristine=!0;f.$valid=!0;f.$invalid=!1;f.$submitted=!1;h.$addControl(f);f.$rollbackViewValue=function(){r(g,function(a){a.$rollbackViewValue()})};f.$commitViewValue=function(){r(g,
function(a){a.$commitViewValue()})};f.$addControl=function(a){La(a.$name,"input");g.push(a);a.$name&&(f[a.$name]=a)};f.$$renameControl=function(a,b){var c=a.$name;f[c]===a&&delete f[c];f[b]=a;a.$name=b};f.$removeControl=function(a){a.$name&&f[a.$name]===a&&delete f[a.$name];r(f.$pending,function(b,c){f.$setValidity(c,null,a)});r(f.$error,function(b,c){f.$setValidity(c,null,a)});r(f.$$success,function(b,c){f.$setValidity(c,null,a)});Xa(g,a)};sd({ctrl:this,$element:b,set:function(a,b,c){var d=a[b];
d?-1===d.indexOf(c)&&d.push(c):a[b]=[c]},unset:function(a,b,c){var d=a[b];d&&(Xa(d,c),0===d.length&&delete a[b])},parentForm:h,$animate:d});f.$setDirty=function(){d.removeClass(b,Ra);d.addClass(b,Lb);f.$dirty=!0;f.$pristine=!1;h.$setDirty()};f.$setPristine=function(){d.setClass(b,Ra,Lb+" ng-submitted");f.$dirty=!1;f.$pristine=!0;f.$submitted=!1;r(g,function(a){a.$setPristine()})};f.$setUntouched=function(){r(g,function(a){a.$setUntouched()})};f.$setSubmitted=function(){d.addClass(b,"ng-submitted");
f.$submitted=!0;h.$setSubmitted()}}function jc(b){b.$formatters.push(function(a){return b.$isEmpty(a)?a:a.toString()})}function jb(b,a,c,d,e,f){var g=z(a[0].type);if(!e.android){var h=!1;a.on("compositionstart",function(a){h=!0});a.on("compositionend",function(){h=!1;l()})}var l=function(b){k&&(f.defer.cancel(k),k=null);if(!h){var e=a.val();b=b&&b.type;"password"===g||c.ngTrim&&"false"===c.ngTrim||(e=N(e));(d.$viewValue!==e||""===e&&d.$$hasNativeValidators)&&d.$setViewValue(e,b)}};if(e.hasEvent("input"))a.on("input",
l);else{var k,n=function(a,b,c){k||(k=f.defer(function(){k=null;b&&b.value===c||l(a)}))};a.on("keydown",function(a){var b=a.keyCode;91===b||15<b&&19>b||37<=b&&40>=b||n(a,this,this.value)});if(e.hasEvent("paste"))a.on("paste cut",n)}a.on("change",l);d.$render=function(){a.val(d.$isEmpty(d.$viewValue)?"":d.$viewValue)}}function Mb(b,a){return function(c,d){var e,f;if(ga(c))return c;if(C(c)){'"'==c.charAt(0)&&'"'==c.charAt(c.length-1)&&(c=c.substring(1,c.length-1));if(Nf.test(c))return new Date(c);b.lastIndex=
0;if(e=b.exec(c))return e.shift(),f=d?{yyyy:d.getFullYear(),MM:d.getMonth()+1,dd:d.getDate(),HH:d.getHours(),mm:d.getMinutes(),ss:d.getSeconds(),sss:d.getMilliseconds()/1E3}:{yyyy:1970,MM:1,dd:1,HH:0,mm:0,ss:0,sss:0},r(e,function(b,c){c<a.length&&(f[a[c]]=+b)}),new Date(f.yyyy,f.MM-1,f.dd,f.HH,f.mm,f.ss||0,1E3*f.sss||0)}return NaN}}function kb(b,a,c,d){return function(e,f,g,h,l,k,n){function p(a){return a&&!(a.getTime&&a.getTime()!==a.getTime())}function q(a){return y(a)?ga(a)?a:c(a):t}td(e,f,g,h);
jb(e,f,g,h,l,k);var u=h&&h.$options&&h.$options.timezone,s;h.$$parserName=b;h.$parsers.push(function(b){return h.$isEmpty(b)?null:a.test(b)?(b=c(b,s),"UTC"===u&&b.setMinutes(b.getMinutes()-b.getTimezoneOffset()),b):t});h.$formatters.push(function(a){if(a&&!ga(a))throw Nb("datefmt",a);if(p(a)){if((s=a)&&"UTC"===u){var b=6E4*s.getTimezoneOffset();s=new Date(s.getTime()+b)}return n("date")(a,d,u)}s=null;return""});if(y(g.min)||g.ngMin){var r;h.$validators.min=function(a){return!p(a)||x(r)||c(a)>=r};
g.$observe("min",function(a){r=q(a);h.$validate()})}if(y(g.max)||g.ngMax){var v;h.$validators.max=function(a){return!p(a)||x(v)||c(a)<=v};g.$observe("max",function(a){v=q(a);h.$validate()})}}}function td(b,a,c,d){(d.$$hasNativeValidators=J(a[0].validity))&&d.$parsers.push(function(b){var c=a.prop("validity")||{};return c.badInput&&!c.typeMismatch?t:b})}function ud(b,a,c,d,e){if(y(d)){b=b(d);if(!b.constant)throw R("ngModel")("constexpr",c,d);return b(a)}return e}function kc(b,a){b="ngClass"+b;return["$animate",
function(c){function d(a,b){var c=[],d=0;a:for(;d<a.length;d++){for(var e=a[d],n=0;n<b.length;n++)if(e==b[n])continue a;c.push(e)}return c}function e(a){if(!H(a)){if(C(a))return a.split(" ");if(J(a)){var b=[];r(a,function(a,c){a&&(b=b.concat(c.split(" ")))});return b}}return a}return{restrict:"AC",link:function(f,g,h){function l(a,b){var c=g.data("$classCounts")||{},d=[];r(a,function(a){if(0<b||c[a])c[a]=(c[a]||0)+b,c[a]===+(0<b)&&d.push(a)});g.data("$classCounts",c);return d.join(" ")}function k(b){if(!0===
a||f.$index%2===a){var k=e(b||[]);if(!n){var u=l(k,1);h.$addClass(u)}else if(!ha(b,n)){var s=e(n),u=d(k,s),k=d(s,k),u=l(u,1),k=l(k,-1);u&&u.length&&c.addClass(g,u);k&&k.length&&c.removeClass(g,k)}}n=sa(b)}var n;f.$watch(h[b],k,!0);h.$observe("class",function(a){k(f.$eval(h[b]))});"ngClass"!==b&&f.$watch("$index",function(c,d){var g=c&1;if(g!==(d&1)){var k=e(f.$eval(h[b]));g===a?(g=l(k,1),h.$addClass(g)):(g=l(k,-1),h.$removeClass(g))}})}}}]}function sd(b){function a(a,b){b&&!f[a]?(k.addClass(e,a),
f[a]=!0):!b&&f[a]&&(k.removeClass(e,a),f[a]=!1)}function c(b,c){b=b?"-"+vc(b,"-"):"";a(lb+b,!0===c);a(vd+b,!1===c)}var d=b.ctrl,e=b.$element,f={},g=b.set,h=b.unset,l=b.parentForm,k=b.$animate;f[vd]=!(f[lb]=e.hasClass(lb));d.$setValidity=function(b,e,f){e===t?(d.$pending||(d.$pending={}),g(d.$pending,b,f)):(d.$pending&&h(d.$pending,b,f),wd(d.$pending)&&(d.$pending=t));Wa(e)?e?(h(d.$error,b,f),g(d.$$success,b,f)):(g(d.$error,b,f),h(d.$$success,b,f)):(h(d.$error,b,f),h(d.$$success,b,f));d.$pending?(a(xd,
!0),d.$valid=d.$invalid=t,c("",null)):(a(xd,!1),d.$valid=wd(d.$error),d.$invalid=!d.$valid,c("",d.$valid));e=d.$pending&&d.$pending[b]?t:d.$error[b]?!1:d.$$success[b]?!0:null;c(b,e);l.$setValidity(b,e,d)}}function wd(b){if(b)for(var a in b)return!1;return!0}var Of=/^\/(.+)\/([a-z]*)$/,z=function(b){return C(b)?b.toLowerCase():b},tc=Object.prototype.hasOwnProperty,ub=function(b){return C(b)?b.toUpperCase():b},Qa,A,ta,Za=[].slice,qf=[].splice,Pf=[].push,Ca=Object.prototype.toString,Ja=R("ng"),ca=Q.angular||
(Q.angular={}),cb,ob=0;Qa=W.documentMode;E.$inject=[];ra.$inject=[];var H=Array.isArray,N=function(b){return C(b)?b.trim():b},gd=function(b){return b.replace(/([-()\[\]{}+?*.$\^|,:#<!\\])/g,"\\$1").replace(/\x08/g,"\\x08")},bb=function(){if(y(bb.isActive_))return bb.isActive_;var b=!(!W.querySelector("[ng-csp]")&&!W.querySelector("[data-ng-csp]"));if(!b)try{new Function("")}catch(a){b=!0}return bb.isActive_=b},rb=["ng-","data-ng-","ng:","x-ng-"],Md=/[A-Z]/g,wc=!1,Qb,qa=1,pb=3,Qd={full:"1.3.15",major:1,
minor:3,dot:15,codeName:"locality-filtration"};T.expando="ng339";var zb=T.cache={},hf=1;T._data=function(b){return this.cache[b[this.expando]]||{}};var cf=/([\:\-\_]+(.))/g,df=/^moz([A-Z])/,Qf={mouseleave:"mouseout",mouseenter:"mouseover"},Tb=R("jqLite"),gf=/^<(\w+)\s*\/?>(?:<\/\1>|)$/,Sb=/<|&#?\w+;/,ef=/<([\w:]+)/,ff=/<(?!area|br|col|embed|hr|img|input|link|meta|param)(([\w:]+)[^>]*)\/>/gi,ja={option:[1,'<select multiple="multiple">',"</select>"],thead:[1,"<table>","</table>"],col:[2,"<table><colgroup>",
"</colgroup></table>"],tr:[2,"<table><tbody>","</tbody></table>"],td:[3,"<table><tbody><tr>","</tr></tbody></table>"],_default:[0,"",""]};ja.optgroup=ja.option;ja.tbody=ja.tfoot=ja.colgroup=ja.caption=ja.thead;ja.th=ja.td;var Ka=T.prototype={ready:function(b){function a(){c||(c=!0,b())}var c=!1;"complete"===W.readyState?setTimeout(a):(this.on("DOMContentLoaded",a),T(Q).on("load",a))},toString:function(){var b=[];r(this,function(a){b.push(""+a)});return"["+b.join(", ")+"]"},eq:function(b){return 0<=
b?A(this[b]):A(this[this.length+b])},length:0,push:Pf,sort:[].sort,splice:[].splice},Eb={};r("multiple selected checked disabled readOnly required open".split(" "),function(b){Eb[z(b)]=b});var Oc={};r("input select option textarea button form details".split(" "),function(b){Oc[b]=!0});var Pc={ngMinlength:"minlength",ngMaxlength:"maxlength",ngMin:"min",ngMax:"max",ngPattern:"pattern"};r({data:Vb,removeData:xb},function(b,a){T[a]=b});r({data:Vb,inheritedData:Db,scope:function(b){return A.data(b,"$scope")||
Db(b.parentNode||b,["$isolateScope","$scope"])},isolateScope:function(b){return A.data(b,"$isolateScope")||A.data(b,"$isolateScopeNoTemplate")},controller:Kc,injector:function(b){return Db(b,"$injector")},removeAttr:function(b,a){b.removeAttribute(a)},hasClass:Ab,css:function(b,a,c){a=db(a);if(y(c))b.style[a]=c;else return b.style[a]},attr:function(b,a,c){var d=z(a);if(Eb[d])if(y(c))c?(b[a]=!0,b.setAttribute(a,d)):(b[a]=!1,b.removeAttribute(d));else return b[a]||(b.attributes.getNamedItem(a)||E).specified?
d:t;else if(y(c))b.setAttribute(a,c);else if(b.getAttribute)return b=b.getAttribute(a,2),null===b?t:b},prop:function(b,a,c){if(y(c))b[a]=c;else return b[a]},text:function(){function b(a,b){if(x(b)){var d=a.nodeType;return d===qa||d===pb?a.textContent:""}a.textContent=b}b.$dv="";return b}(),val:function(b,a){if(x(a)){if(b.multiple&&"select"===va(b)){var c=[];r(b.options,function(a){a.selected&&c.push(a.value||a.text)});return 0===c.length?null:c}return b.value}b.value=a},html:function(b,a){if(x(a))return b.innerHTML;
wb(b,!0);b.innerHTML=a},empty:Lc},function(b,a){T.prototype[a]=function(a,d){var e,f,g=this.length;if(b!==Lc&&(2==b.length&&b!==Ab&&b!==Kc?a:d)===t){if(J(a)){for(e=0;e<g;e++)if(b===Vb)b(this[e],a);else for(f in a)b(this[e],f,a[f]);return this}e=b.$dv;g=e===t?Math.min(g,1):g;for(f=0;f<g;f++){var h=b(this[f],a,d);e=e?e+h:h}return e}for(e=0;e<g;e++)b(this[e],a,d);return this}});r({removeData:xb,on:function a(c,d,e,f){if(y(f))throw Tb("onargs");if(Gc(c)){var g=yb(c,!0);f=g.events;var h=g.handle;h||(h=
g.handle=lf(c,f));for(var g=0<=d.indexOf(" ")?d.split(" "):[d],l=g.length;l--;){d=g[l];var k=f[d];k||(f[d]=[],"mouseenter"===d||"mouseleave"===d?a(c,Qf[d],function(a){var c=a.relatedTarget;c&&(c===this||this.contains(c))||h(a,d)}):"$destroy"!==d&&c.addEventListener(d,h,!1),k=f[d]);k.push(e)}}},off:Jc,one:function(a,c,d){a=A(a);a.on(c,function f(){a.off(c,d);a.off(c,f)});a.on(c,d)},replaceWith:function(a,c){var d,e=a.parentNode;wb(a);r(new T(c),function(c){d?e.insertBefore(c,d.nextSibling):e.replaceChild(c,
a);d=c})},children:function(a){var c=[];r(a.childNodes,function(a){a.nodeType===qa&&c.push(a)});return c},contents:function(a){return a.contentDocument||a.childNodes||[]},append:function(a,c){var d=a.nodeType;if(d===qa||11===d){c=new T(c);for(var d=0,e=c.length;d<e;d++)a.appendChild(c[d])}},prepend:function(a,c){if(a.nodeType===qa){var d=a.firstChild;r(new T(c),function(c){a.insertBefore(c,d)})}},wrap:function(a,c){c=A(c).eq(0).clone()[0];var d=a.parentNode;d&&d.replaceChild(c,a);c.appendChild(a)},
remove:Mc,detach:function(a){Mc(a,!0)},after:function(a,c){var d=a,e=a.parentNode;c=new T(c);for(var f=0,g=c.length;f<g;f++){var h=c[f];e.insertBefore(h,d.nextSibling);d=h}},addClass:Cb,removeClass:Bb,toggleClass:function(a,c,d){c&&r(c.split(" "),function(c){var f=d;x(f)&&(f=!Ab(a,c));(f?Cb:Bb)(a,c)})},parent:function(a){return(a=a.parentNode)&&11!==a.nodeType?a:null},next:function(a){return a.nextElementSibling},find:function(a,c){return a.getElementsByTagName?a.getElementsByTagName(c):[]},clone:Ub,
triggerHandler:function(a,c,d){var e,f,g=c.type||c,h=yb(a);if(h=(h=h&&h.events)&&h[g])e={preventDefault:function(){this.defaultPrevented=!0},isDefaultPrevented:function(){return!0===this.defaultPrevented},stopImmediatePropagation:function(){this.immediatePropagationStopped=!0},isImmediatePropagationStopped:function(){return!0===this.immediatePropagationStopped},stopPropagation:E,type:g,target:a},c.type&&(e=w(e,c)),c=sa(h),f=d?[e].concat(d):[e],r(c,function(c){e.isImmediatePropagationStopped()||c.apply(a,
f)})}},function(a,c){T.prototype[c]=function(c,e,f){for(var g,h=0,l=this.length;h<l;h++)x(g)?(g=a(this[h],c,e,f),y(g)&&(g=A(g))):Ic(g,a(this[h],c,e,f));return y(g)?g:this};T.prototype.bind=T.prototype.on;T.prototype.unbind=T.prototype.off});eb.prototype={put:function(a,c){this[Ma(a,this.nextUid)]=c},get:function(a){return this[Ma(a,this.nextUid)]},remove:function(a){var c=this[a=Ma(a,this.nextUid)];delete this[a];return c}};var Rc=/^function\s*[^\(]*\(\s*([^\)]*)\)/m,Rf=/,/,Sf=/^\s*(_?)(\S+?)\1\s*$/,
Qc=/((\/\/.*$)|(\/\*[\s\S]*?\*\/))/mg,Fa=R("$injector");ab.$$annotate=function(a,c,d){var e;if("function"===typeof a){if(!(e=a.$inject)){e=[];if(a.length){if(c)throw C(d)&&d||(d=a.name||mf(a)),Fa("strictdi",d);c=a.toString().replace(Qc,"");c=c.match(Rc);r(c[1].split(Rf),function(a){a.replace(Sf,function(a,c,d){e.push(d)})})}a.$inject=e}}else H(a)?(c=a.length-1,sb(a[c],"fn"),e=a.slice(0,c)):sb(a,"fn",!0);return e};var Tf=R("$animate"),Ce=["$provide",function(a){this.$$selectors={};this.register=function(c,
d){var e=c+"-animation";if(c&&"."!=c.charAt(0))throw Tf("notcsel",c);this.$$selectors[c.substr(1)]=e;a.factory(e,d)};this.classNameFilter=function(a){1===arguments.length&&(this.$$classNameFilter=a instanceof RegExp?a:null);return this.$$classNameFilter};this.$get=["$$q","$$asyncCallback","$rootScope",function(a,d,e){function f(d){var f,g=a.defer();g.promise.$$cancelFn=function(){f&&f()};e.$$postDigest(function(){f=d(function(){g.resolve()})});return g.promise}function g(a,c){var d=[],e=[],f=ia();
r((a.attr("class")||"").split(/\s+/),function(a){f[a]=!0});r(c,function(a,c){var g=f[c];!1===a&&g?e.push(c):!0!==a||g||d.push(c)});return 0<d.length+e.length&&[d.length?d:null,e.length?e:null]}function h(a,c,d){for(var e=0,f=c.length;e<f;++e)a[c[e]]=d}function l(){n||(n=a.defer(),d(function(){n.resolve();n=null}));return n.promise}function k(a,c){if(ca.isObject(c)){var d=w(c.from||{},c.to||{});a.css(d)}}var n;return{animate:function(a,c,d){k(a,{from:c,to:d});return l()},enter:function(a,c,d,e){k(a,
e);d?d.after(a):c.prepend(a);return l()},leave:function(a,c){k(a,c);a.remove();return l()},move:function(a,c,d,e){return this.enter(a,c,d,e)},addClass:function(a,c,d){return this.setClass(a,c,[],d)},$$addClassImmediately:function(a,c,d){a=A(a);c=C(c)?c:H(c)?c.join(" "):"";r(a,function(a){Cb(a,c)});k(a,d);return l()},removeClass:function(a,c,d){return this.setClass(a,[],c,d)},$$removeClassImmediately:function(a,c,d){a=A(a);c=C(c)?c:H(c)?c.join(" "):"";r(a,function(a){Bb(a,c)});k(a,d);return l()},setClass:function(a,
c,d,e){var k=this,l=!1;a=A(a);var m=a.data("$$animateClasses");m?e&&m.options&&(m.options=ca.extend(m.options||{},e)):(m={classes:{},options:e},l=!0);e=m.classes;c=H(c)?c:c.split(" ");d=H(d)?d:d.split(" ");h(e,c,!0);h(e,d,!1);l&&(m.promise=f(function(c){var d=a.data("$$animateClasses");a.removeData("$$animateClasses");if(d){var e=g(a,d.classes);e&&k.$$setClassImmediately(a,e[0],e[1],d.options)}c()}),a.data("$$animateClasses",m));return m.promise},$$setClassImmediately:function(a,c,d,e){c&&this.$$addClassImmediately(a,
c);d&&this.$$removeClassImmediately(a,d);k(a,e);return l()},enabled:E,cancel:E}}]}],la=R("$compile");yc.$inject=["$provide","$$sanitizeUriProvider"];var Sc=/^((?:x|data)[\:\-_])/i,rf=R("$controller"),Wc="application/json",$b={"Content-Type":Wc+";charset=utf-8"},tf=/^\[|^\{(?!\{)/,uf={"[":/]$/,"{":/}$/},sf=/^\)\]\}',?\n/,ac=R("$interpolate"),Uf=/^([^\?#]*)(\?([^#]*))?(#(.*))?$/,xf={http:80,https:443,ftp:21},Gb=R("$location"),Vf={$$html5:!1,$$replace:!1,absUrl:Hb("$$absUrl"),url:function(a){if(x(a))return this.$$url;
var c=Uf.exec(a);(c[1]||""===a)&&this.path(decodeURIComponent(c[1]));(c[2]||c[1]||""===a)&&this.search(c[3]||"");this.hash(c[5]||"");return this},protocol:Hb("$$protocol"),host:Hb("$$host"),port:Hb("$$port"),path:dd("$$path",function(a){a=null!==a?a.toString():"";return"/"==a.charAt(0)?a:"/"+a}),search:function(a,c){switch(arguments.length){case 0:return this.$$search;case 1:if(C(a)||Y(a))a=a.toString(),this.$$search=sc(a);else if(J(a))a=Da(a,{}),r(a,function(c,e){null==c&&delete a[e]}),this.$$search=
a;else throw Gb("isrcharg");break;default:x(c)||null===c?delete this.$$search[a]:this.$$search[a]=c}this.$$compose();return this},hash:dd("$$hash",function(a){return null!==a?a.toString():""}),replace:function(){this.$$replace=!0;return this}};r([cd,ec,dc],function(a){a.prototype=Object.create(Vf);a.prototype.state=function(c){if(!arguments.length)return this.$$state;if(a!==dc||!this.$$html5)throw Gb("nostate");this.$$state=x(c)?null:c;return this}});var na=R("$parse"),Wf=Function.prototype.call,
Xf=Function.prototype.apply,Yf=Function.prototype.bind,mb=ia();r({"null":function(){return null},"true":function(){return!0},"false":function(){return!1},undefined:function(){}},function(a,c){a.constant=a.literal=a.sharedGetter=!0;mb[c]=a});mb["this"]=function(a){return a};mb["this"].sharedGetter=!0;var nb=w(ia(),{"+":function(a,c,d,e){d=d(a,c);e=e(a,c);return y(d)?y(e)?d+e:d:y(e)?e:t},"-":function(a,c,d,e){d=d(a,c);e=e(a,c);return(y(d)?d:0)-(y(e)?e:0)},"*":function(a,c,d,e){return d(a,c)*e(a,c)},
"/":function(a,c,d,e){return d(a,c)/e(a,c)},"%":function(a,c,d,e){return d(a,c)%e(a,c)},"===":function(a,c,d,e){return d(a,c)===e(a,c)},"!==":function(a,c,d,e){return d(a,c)!==e(a,c)},"==":function(a,c,d,e){return d(a,c)==e(a,c)},"!=":function(a,c,d,e){return d(a,c)!=e(a,c)},"<":function(a,c,d,e){return d(a,c)<e(a,c)},">":function(a,c,d,e){return d(a,c)>e(a,c)},"<=":function(a,c,d,e){return d(a,c)<=e(a,c)},">=":function(a,c,d,e){return d(a,c)>=e(a,c)},"&&":function(a,c,d,e){return d(a,c)&&e(a,c)},
"||":function(a,c,d,e){return d(a,c)||e(a,c)},"!":function(a,c,d){return!d(a,c)},"=":!0,"|":!0}),Zf={n:"\n",f:"\f",r:"\r",t:"\t",v:"\v","'":"'",'"':'"'},hc=function(a){this.options=a};hc.prototype={constructor:hc,lex:function(a){this.text=a;this.index=0;for(this.tokens=[];this.index<this.text.length;)if(a=this.text.charAt(this.index),'"'===a||"'"===a)this.readString(a);else if(this.isNumber(a)||"."===a&&this.isNumber(this.peek()))this.readNumber();else if(this.isIdent(a))this.readIdent();else if(this.is(a,
"(){}[].,;:?"))this.tokens.push({index:this.index,text:a}),this.index++;else if(this.isWhitespace(a))this.index++;else{var c=a+this.peek(),d=c+this.peek(2),e=nb[c],f=nb[d];nb[a]||e||f?(a=f?d:e?c:a,this.tokens.push({index:this.index,text:a,operator:!0}),this.index+=a.length):this.throwError("Unexpected next character ",this.index,this.index+1)}return this.tokens},is:function(a,c){return-1!==c.indexOf(a)},peek:function(a){a=a||1;return this.index+a<this.text.length?this.text.charAt(this.index+a):!1},
isNumber:function(a){return"0"<=a&&"9">=a&&"string"===typeof a},isWhitespace:function(a){return" "===a||"\r"===a||"\t"===a||"\n"===a||"\v"===a||"\u00a0"===a},isIdent:function(a){return"a"<=a&&"z">=a||"A"<=a&&"Z">=a||"_"===a||"$"===a},isExpOperator:function(a){return"-"===a||"+"===a||this.isNumber(a)},throwError:function(a,c,d){d=d||this.index;c=y(c)?"s "+c+"-"+this.index+" ["+this.text.substring(c,d)+"]":" "+d;throw na("lexerr",a,c,this.text);},readNumber:function(){for(var a="",c=this.index;this.index<
this.text.length;){var d=z(this.text.charAt(this.index));if("."==d||this.isNumber(d))a+=d;else{var e=this.peek();if("e"==d&&this.isExpOperator(e))a+=d;else if(this.isExpOperator(d)&&e&&this.isNumber(e)&&"e"==a.charAt(a.length-1))a+=d;else if(!this.isExpOperator(d)||e&&this.isNumber(e)||"e"!=a.charAt(a.length-1))break;else this.throwError("Invalid exponent")}this.index++}this.tokens.push({index:c,text:a,constant:!0,value:Number(a)})},readIdent:function(){for(var a=this.index;this.index<this.text.length;){var c=
this.text.charAt(this.index);if(!this.isIdent(c)&&!this.isNumber(c))break;this.index++}this.tokens.push({index:a,text:this.text.slice(a,this.index),identifier:!0})},readString:function(a){var c=this.index;this.index++;for(var d="",e=a,f=!1;this.index<this.text.length;){var g=this.text.charAt(this.index),e=e+g;if(f)"u"===g?(f=this.text.substring(this.index+1,this.index+5),f.match(/[\da-f]{4}/i)||this.throwError("Invalid unicode escape [\\u"+f+"]"),this.index+=4,d+=String.fromCharCode(parseInt(f,16))):
d+=Zf[g]||g,f=!1;else if("\\"===g)f=!0;else{if(g===a){this.index++;this.tokens.push({index:c,text:e,constant:!0,value:d});return}d+=g}this.index++}this.throwError("Unterminated quote",c)}};var ib=function(a,c,d){this.lexer=a;this.$filter=c;this.options=d};ib.ZERO=w(function(){return 0},{sharedGetter:!0,constant:!0});ib.prototype={constructor:ib,parse:function(a){this.text=a;this.tokens=this.lexer.lex(a);a=this.statements();0!==this.tokens.length&&this.throwError("is an unexpected token",this.tokens[0]);
a.literal=!!a.literal;a.constant=!!a.constant;return a},primary:function(){var a;this.expect("(")?(a=this.filterChain(),this.consume(")")):this.expect("[")?a=this.arrayDeclaration():this.expect("{")?a=this.object():this.peek().identifier&&this.peek().text in mb?a=mb[this.consume().text]:this.peek().identifier?a=this.identifier():this.peek().constant?a=this.constant():this.throwError("not a primary expression",this.peek());for(var c,d;c=this.expect("(","[",".");)"("===c.text?(a=this.functionCall(a,
d),d=null):"["===c.text?(d=a,a=this.objectIndex(a)):"."===c.text?(d=a,a=this.fieldAccess(a)):this.throwError("IMPOSSIBLE");return a},throwError:function(a,c){throw na("syntax",c.text,a,c.index+1,this.text,this.text.substring(c.index));},peekToken:function(){if(0===this.tokens.length)throw na("ueoe",this.text);return this.tokens[0]},peek:function(a,c,d,e){return this.peekAhead(0,a,c,d,e)},peekAhead:function(a,c,d,e,f){if(this.tokens.length>a){a=this.tokens[a];var g=a.text;if(g===c||g===d||g===e||g===
f||!(c||d||e||f))return a}return!1},expect:function(a,c,d,e){return(a=this.peek(a,c,d,e))?(this.tokens.shift(),a):!1},consume:function(a){if(0===this.tokens.length)throw na("ueoe",this.text);var c=this.expect(a);c||this.throwError("is unexpected, expecting ["+a+"]",this.peek());return c},unaryFn:function(a,c){var d=nb[a];return w(function(a,f){return d(a,f,c)},{constant:c.constant,inputs:[c]})},binaryFn:function(a,c,d,e){var f=nb[c];return w(function(c,e){return f(c,e,a,d)},{constant:a.constant&&
d.constant,inputs:!e&&[a,d]})},identifier:function(){for(var a=this.consume().text;this.peek(".")&&this.peekAhead(1).identifier&&!this.peekAhead(2,"(");)a+=this.consume().text+this.consume().text;return zf(a,this.options,this.text)},constant:function(){var a=this.consume().value;return w(function(){return a},{constant:!0,literal:!0})},statements:function(){for(var a=[];;)if(0<this.tokens.length&&!this.peek("}",")",";","]")&&a.push(this.filterChain()),!this.expect(";"))return 1===a.length?a[0]:function(c,
d){for(var e,f=0,g=a.length;f<g;f++)e=a[f](c,d);return e}},filterChain:function(){for(var a=this.expression();this.expect("|");)a=this.filter(a);return a},filter:function(a){var c=this.$filter(this.consume().text),d,e;if(this.peek(":"))for(d=[],e=[];this.expect(":");)d.push(this.expression());var f=[a].concat(d||[]);return w(function(f,h){var l=a(f,h);if(e){e[0]=l;for(l=d.length;l--;)e[l+1]=d[l](f,h);return c.apply(t,e)}return c(l)},{constant:!c.$stateful&&f.every(fc),inputs:!c.$stateful&&f})},expression:function(){return this.assignment()},
assignment:function(){var a=this.ternary(),c,d;return(d=this.expect("="))?(a.assign||this.throwError("implies assignment but ["+this.text.substring(0,d.index)+"] can not be assigned to",d),c=this.ternary(),w(function(d,f){return a.assign(d,c(d,f),f)},{inputs:[a,c]})):a},ternary:function(){var a=this.logicalOR(),c;if(this.expect("?")&&(c=this.assignment(),this.consume(":"))){var d=this.assignment();return w(function(e,f){return a(e,f)?c(e,f):d(e,f)},{constant:a.constant&&c.constant&&d.constant})}return a},
logicalOR:function(){for(var a=this.logicalAND(),c;c=this.expect("||");)a=this.binaryFn(a,c.text,this.logicalAND(),!0);return a},logicalAND:function(){for(var a=this.equality(),c;c=this.expect("&&");)a=this.binaryFn(a,c.text,this.equality(),!0);return a},equality:function(){for(var a=this.relational(),c;c=this.expect("==","!=","===","!==");)a=this.binaryFn(a,c.text,this.relational());return a},relational:function(){for(var a=this.additive(),c;c=this.expect("<",">","<=",">=");)a=this.binaryFn(a,c.text,
this.additive());return a},additive:function(){for(var a=this.multiplicative(),c;c=this.expect("+","-");)a=this.binaryFn(a,c.text,this.multiplicative());return a},multiplicative:function(){for(var a=this.unary(),c;c=this.expect("*","/","%");)a=this.binaryFn(a,c.text,this.unary());return a},unary:function(){var a;return this.expect("+")?this.primary():(a=this.expect("-"))?this.binaryFn(ib.ZERO,a.text,this.unary()):(a=this.expect("!"))?this.unaryFn(a.text,this.unary()):this.primary()},fieldAccess:function(a){var c=
this.identifier();return w(function(d,e,f){d=f||a(d,e);return null==d?t:c(d)},{assign:function(d,e,f){var g=a(d,f);g||a.assign(d,g={},f);return c.assign(g,e)}})},objectIndex:function(a){var c=this.text,d=this.expression();this.consume("]");return w(function(e,f){var g=a(e,f),h=d(e,f);ua(h,c);return g?oa(g[h],c):t},{assign:function(e,f,g){var h=ua(d(e,g),c),l=oa(a(e,g),c);l||a.assign(e,l={},g);return l[h]=f}})},functionCall:function(a,c){var d=[];if(")"!==this.peekToken().text){do d.push(this.expression());
while(this.expect(","))}this.consume(")");var e=this.text,f=d.length?[]:null;return function(g,h){var l=c?c(g,h):y(c)?t:g,k=a(g,h,l)||E;if(f)for(var n=d.length;n--;)f[n]=oa(d[n](g,h),e);oa(l,e);if(k){if(k.constructor===k)throw na("isecfn",e);if(k===Wf||k===Xf||k===Yf)throw na("isecff",e);}l=k.apply?k.apply(l,f):k(f[0],f[1],f[2],f[3],f[4]);f&&(f.length=0);return oa(l,e)}},arrayDeclaration:function(){var a=[];if("]"!==this.peekToken().text){do{if(this.peek("]"))break;a.push(this.expression())}while(this.expect(","))
}this.consume("]");return w(function(c,d){for(var e=[],f=0,g=a.length;f<g;f++)e.push(a[f](c,d));return e},{literal:!0,constant:a.every(fc),inputs:a})},object:function(){var a=[],c=[];if("}"!==this.peekToken().text){do{if(this.peek("}"))break;var d=this.consume();d.constant?a.push(d.value):d.identifier?a.push(d.text):this.throwError("invalid key",d);this.consume(":");c.push(this.expression())}while(this.expect(","))}this.consume("}");return w(function(d,f){for(var g={},h=0,l=c.length;h<l;h++)g[a[h]]=
c[h](d,f);return g},{literal:!0,constant:c.every(fc),inputs:c})}};var Bf=ia(),Af=ia(),Cf=Object.prototype.valueOf,Ba=R("$sce"),pa={HTML:"html",CSS:"css",URL:"url",RESOURCE_URL:"resourceUrl",JS:"js"},la=R("$compile"),$=W.createElement("a"),id=Aa(Q.location.href);Fc.$inject=["$provide"];jd.$inject=["$locale"];ld.$inject=["$locale"];var od=".",Mf={yyyy:U("FullYear",4),yy:U("FullYear",2,0,!0),y:U("FullYear",1),MMMM:Jb("Month"),MMM:Jb("Month",!0),MM:U("Month",2,1),M:U("Month",1,1),dd:U("Date",2),d:U("Date",
1),HH:U("Hours",2),H:U("Hours",1),hh:U("Hours",2,-12),h:U("Hours",1,-12),mm:U("Minutes",2),m:U("Minutes",1),ss:U("Seconds",2),s:U("Seconds",1),sss:U("Milliseconds",3),EEEE:Jb("Day"),EEE:Jb("Day",!0),a:function(a,c){return 12>a.getHours()?c.AMPMS[0]:c.AMPMS[1]},Z:function(a){a=-1*a.getTimezoneOffset();return a=(0<=a?"+":"")+(Ib(Math[0<a?"floor":"ceil"](a/60),2)+Ib(Math.abs(a%60),2))},ww:qd(2),w:qd(1),G:ic,GG:ic,GGG:ic,GGGG:function(a,c){return 0>=a.getFullYear()?c.ERANAMES[0]:c.ERANAMES[1]}},Lf=/((?:[^yMdHhmsaZEwG']+)|(?:'(?:[^']|'')*')|(?:E+|y+|M+|d+|H+|h+|m+|s+|a|Z|G+|w+))(.*)/,
Kf=/^\-?\d+$/;kd.$inject=["$locale"];var Hf=ea(z),If=ea(ub);md.$inject=["$parse"];var Td=ea({restrict:"E",compile:function(a,c){if(!c.href&&!c.xlinkHref&&!c.name)return function(a,c){if("a"===c[0].nodeName.toLowerCase()){var f="[object SVGAnimatedString]"===Ca.call(c.prop("href"))?"xlink:href":"href";c.on("click",function(a){c.attr(f)||a.preventDefault()})}}}}),vb={};r(Eb,function(a,c){if("multiple"!=a){var d=xa("ng-"+c);vb[d]=function(){return{restrict:"A",priority:100,link:function(a,f,g){a.$watch(g[d],
function(a){g.$set(c,!!a)})}}}}});r(Pc,function(a,c){vb[c]=function(){return{priority:100,link:function(a,e,f){if("ngPattern"===c&&"/"==f.ngPattern.charAt(0)&&(e=f.ngPattern.match(Of))){f.$set("ngPattern",new RegExp(e[1],e[2]));return}a.$watch(f[c],function(a){f.$set(c,a)})}}}});r(["src","srcset","href"],function(a){var c=xa("ng-"+a);vb[c]=function(){return{priority:99,link:function(d,e,f){var g=a,h=a;"href"===a&&"[object SVGAnimatedString]"===Ca.call(e.prop("href"))&&(h="xlinkHref",f.$attr[h]="xlink:href",
g=null);f.$observe(c,function(c){c?(f.$set(h,c),Qa&&g&&e.prop(g,f[h])):"href"===a&&f.$set(h,null)})}}}});var Kb={$addControl:E,$$renameControl:function(a,c){a.$name=c},$removeControl:E,$setValidity:E,$setDirty:E,$setPristine:E,$setSubmitted:E};rd.$inject=["$element","$attrs","$scope","$animate","$interpolate"];var yd=function(a){return["$timeout",function(c){return{name:"form",restrict:a?"EAC":"E",controller:rd,compile:function(d,e){d.addClass(Ra).addClass(lb);var f=e.name?"name":a&&e.ngForm?"ngForm":
!1;return{pre:function(a,d,e,k){if(!("action"in e)){var n=function(c){a.$apply(function(){k.$commitViewValue();k.$setSubmitted()});c.preventDefault()};d[0].addEventListener("submit",n,!1);d.on("$destroy",function(){c(function(){d[0].removeEventListener("submit",n,!1)},0,!1)})}var p=k.$$parentForm;f&&(hb(a,null,k.$name,k,k.$name),e.$observe(f,function(c){k.$name!==c&&(hb(a,null,k.$name,t,k.$name),p.$$renameControl(k,c),hb(a,null,k.$name,k,k.$name))}));d.on("$destroy",function(){p.$removeControl(k);
f&&hb(a,null,e[f],t,k.$name);w(k,Kb)})}}}}}]},Ud=yd(),ge=yd(!0),Nf=/\d{4}-[01]\d-[0-3]\dT[0-2]\d:[0-5]\d:[0-5]\d\.\d+([+-][0-2]\d:[0-5]\d|Z)/,$f=/^(ftp|http|https):\/\/(\w+:{0,1}\w*@)?(\S+)(:[0-9]+)?(\/|\/([\w#!:.?+=&%@!\-\/]))?$/,ag=/^[a-z0-9!#$%&'*+\/=?^_`{|}~.-]+@[a-z0-9]([a-z0-9-]*[a-z0-9])?(\.[a-z0-9]([a-z0-9-]*[a-z0-9])?)*$/i,bg=/^\s*(\-|\+)?(\d+|(\d*(\.\d*)))\s*$/,zd=/^(\d{4})-(\d{2})-(\d{2})$/,Ad=/^(\d{4})-(\d\d)-(\d\d)T(\d\d):(\d\d)(?::(\d\d)(\.\d{1,3})?)?$/,lc=/^(\d{4})-W(\d\d)$/,Bd=/^(\d{4})-(\d\d)$/,
Cd=/^(\d\d):(\d\d)(?::(\d\d)(\.\d{1,3})?)?$/,Dd={text:function(a,c,d,e,f,g){jb(a,c,d,e,f,g);jc(e)},date:kb("date",zd,Mb(zd,["yyyy","MM","dd"]),"yyyy-MM-dd"),"datetime-local":kb("datetimelocal",Ad,Mb(Ad,"yyyy MM dd HH mm ss sss".split(" ")),"yyyy-MM-ddTHH:mm:ss.sss"),time:kb("time",Cd,Mb(Cd,["HH","mm","ss","sss"]),"HH:mm:ss.sss"),week:kb("week",lc,function(a,c){if(ga(a))return a;if(C(a)){lc.lastIndex=0;var d=lc.exec(a);if(d){var e=+d[1],f=+d[2],g=d=0,h=0,l=0,k=pd(e),f=7*(f-1);c&&(d=c.getHours(),g=
c.getMinutes(),h=c.getSeconds(),l=c.getMilliseconds());return new Date(e,0,k.getDate()+f,d,g,h,l)}}return NaN},"yyyy-Www"),month:kb("month",Bd,Mb(Bd,["yyyy","MM"]),"yyyy-MM"),number:function(a,c,d,e,f,g){td(a,c,d,e);jb(a,c,d,e,f,g);e.$$parserName="number";e.$parsers.push(function(a){return e.$isEmpty(a)?null:bg.test(a)?parseFloat(a):t});e.$formatters.push(function(a){if(!e.$isEmpty(a)){if(!Y(a))throw Nb("numfmt",a);a=a.toString()}return a});if(y(d.min)||d.ngMin){var h;e.$validators.min=function(a){return e.$isEmpty(a)||
x(h)||a>=h};d.$observe("min",function(a){y(a)&&!Y(a)&&(a=parseFloat(a,10));h=Y(a)&&!isNaN(a)?a:t;e.$validate()})}if(y(d.max)||d.ngMax){var l;e.$validators.max=function(a){return e.$isEmpty(a)||x(l)||a<=l};d.$observe("max",function(a){y(a)&&!Y(a)&&(a=parseFloat(a,10));l=Y(a)&&!isNaN(a)?a:t;e.$validate()})}},url:function(a,c,d,e,f,g){jb(a,c,d,e,f,g);jc(e);e.$$parserName="url";e.$validators.url=function(a,c){var d=a||c;return e.$isEmpty(d)||$f.test(d)}},email:function(a,c,d,e,f,g){jb(a,c,d,e,f,g);jc(e);
e.$$parserName="email";e.$validators.email=function(a,c){var d=a||c;return e.$isEmpty(d)||ag.test(d)}},radio:function(a,c,d,e){x(d.name)&&c.attr("name",++ob);c.on("click",function(a){c[0].checked&&e.$setViewValue(d.value,a&&a.type)});e.$render=function(){c[0].checked=d.value==e.$viewValue};d.$observe("value",e.$render)},checkbox:function(a,c,d,e,f,g,h,l){var k=ud(l,a,"ngTrueValue",d.ngTrueValue,!0),n=ud(l,a,"ngFalseValue",d.ngFalseValue,!1);c.on("click",function(a){e.$setViewValue(c[0].checked,a&&
a.type)});e.$render=function(){c[0].checked=e.$viewValue};e.$isEmpty=function(a){return!1===a};e.$formatters.push(function(a){return ha(a,k)});e.$parsers.push(function(a){return a?k:n})},hidden:E,button:E,submit:E,reset:E,file:E},zc=["$browser","$sniffer","$filter","$parse",function(a,c,d,e){return{restrict:"E",require:["?ngModel"],link:{pre:function(f,g,h,l){l[0]&&(Dd[z(h.type)]||Dd.text)(f,g,h,l[0],c,a,d,e)}}}}],cg=/^(true|false|\d+)$/,ye=function(){return{restrict:"A",priority:100,compile:function(a,
c){return cg.test(c.ngValue)?function(a,c,f){f.$set("value",a.$eval(f.ngValue))}:function(a,c,f){a.$watch(f.ngValue,function(a){f.$set("value",a)})}}}},Zd=["$compile",function(a){return{restrict:"AC",compile:function(c){a.$$addBindingClass(c);return function(c,e,f){a.$$addBindingInfo(e,f.ngBind);e=e[0];c.$watch(f.ngBind,function(a){e.textContent=a===t?"":a})}}}}],ae=["$interpolate","$compile",function(a,c){return{compile:function(d){c.$$addBindingClass(d);return function(d,f,g){d=a(f.attr(g.$attr.ngBindTemplate));
c.$$addBindingInfo(f,d.expressions);f=f[0];g.$observe("ngBindTemplate",function(a){f.textContent=a===t?"":a})}}}}],$d=["$sce","$parse","$compile",function(a,c,d){return{restrict:"A",compile:function(e,f){var g=c(f.ngBindHtml),h=c(f.ngBindHtml,function(a){return(a||"").toString()});d.$$addBindingClass(e);return function(c,e,f){d.$$addBindingInfo(e,f.ngBindHtml);c.$watch(h,function(){e.html(a.getTrustedHtml(g(c))||"")})}}}}],xe=ea({restrict:"A",require:"ngModel",link:function(a,c,d,e){e.$viewChangeListeners.push(function(){a.$eval(d.ngChange)})}}),
be=kc("",!0),de=kc("Odd",0),ce=kc("Even",1),ee=Ia({compile:function(a,c){c.$set("ngCloak",t);a.removeClass("ng-cloak")}}),fe=[function(){return{restrict:"A",scope:!0,controller:"@",priority:500}}],Ec={},dg={blur:!0,focus:!0};r("click dblclick mousedown mouseup mouseover mouseout mousemove mouseenter mouseleave keydown keyup keypress submit focus blur copy cut paste".split(" "),function(a){var c=xa("ng-"+a);Ec[c]=["$parse","$rootScope",function(d,e){return{restrict:"A",compile:function(f,g){var h=
d(g[c],null,!0);return function(c,d){d.on(a,function(d){var f=function(){h(c,{$event:d})};dg[a]&&e.$$phase?c.$evalAsync(f):c.$apply(f)})}}}}]});var ie=["$animate",function(a){return{multiElement:!0,transclude:"element",priority:600,terminal:!0,restrict:"A",$$tlb:!0,link:function(c,d,e,f,g){var h,l,k;c.$watch(e.ngIf,function(c){c?l||g(function(c,f){l=f;c[c.length++]=W.createComment(" end ngIf: "+e.ngIf+" ");h={clone:c};a.enter(c,d.parent(),d)}):(k&&(k.remove(),k=null),l&&(l.$destroy(),l=null),h&&(k=
tb(h.clone),a.leave(k).then(function(){k=null}),h=null))})}}}],je=["$templateRequest","$anchorScroll","$animate","$sce",function(a,c,d,e){return{restrict:"ECA",priority:400,terminal:!0,transclude:"element",controller:ca.noop,compile:function(f,g){var h=g.ngInclude||g.src,l=g.onload||"",k=g.autoscroll;return function(f,g,q,r,s){var t=0,v,m,F,w=function(){m&&(m.remove(),m=null);v&&(v.$destroy(),v=null);F&&(d.leave(F).then(function(){m=null}),m=F,F=null)};f.$watch(e.parseAsResourceUrl(h),function(e){var h=
function(){!y(k)||k&&!f.$eval(k)||c()},m=++t;e?(a(e,!0).then(function(a){if(m===t){var c=f.$new();r.template=a;a=s(c,function(a){w();d.enter(a,null,g).then(h)});v=c;F=a;v.$emit("$includeContentLoaded",e);f.$eval(l)}},function(){m===t&&(w(),f.$emit("$includeContentError",e))}),f.$emit("$includeContentRequested",e)):(w(),r.template=null)})}}}}],Ae=["$compile",function(a){return{restrict:"ECA",priority:-400,require:"ngInclude",link:function(c,d,e,f){/SVG/.test(d[0].toString())?(d.empty(),a(Hc(f.template,
W).childNodes)(c,function(a){d.append(a)},{futureParentElement:d})):(d.html(f.template),a(d.contents())(c))}}}],ke=Ia({priority:450,compile:function(){return{pre:function(a,c,d){a.$eval(d.ngInit)}}}}),we=function(){return{restrict:"A",priority:100,require:"ngModel",link:function(a,c,d,e){var f=c.attr(d.$attr.ngList)||", ",g="false"!==d.ngTrim,h=g?N(f):f;e.$parsers.push(function(a){if(!x(a)){var c=[];a&&r(a.split(h),function(a){a&&c.push(g?N(a):a)});return c}});e.$formatters.push(function(a){return H(a)?
a.join(f):t});e.$isEmpty=function(a){return!a||!a.length}}}},lb="ng-valid",vd="ng-invalid",Ra="ng-pristine",Lb="ng-dirty",xd="ng-pending",Nb=new R("ngModel"),eg=["$scope","$exceptionHandler","$attrs","$element","$parse","$animate","$timeout","$rootScope","$q","$interpolate",function(a,c,d,e,f,g,h,l,k,n){this.$modelValue=this.$viewValue=Number.NaN;this.$$rawModelValue=t;this.$validators={};this.$asyncValidators={};this.$parsers=[];this.$formatters=[];this.$viewChangeListeners=[];this.$untouched=!0;
this.$touched=!1;this.$pristine=!0;this.$dirty=!1;this.$valid=!0;this.$invalid=!1;this.$error={};this.$$success={};this.$pending=t;this.$name=n(d.name||"",!1)(a);var p=f(d.ngModel),q=p.assign,u=p,s=q,M=null,v,m=this;this.$$setOptions=function(a){if((m.$options=a)&&a.getterSetter){var c=f(d.ngModel+"()"),g=f(d.ngModel+"($$$p)");u=function(a){var d=p(a);G(d)&&(d=c(a));return d};s=function(a,c){G(p(a))?g(a,{$$$p:m.$modelValue}):q(a,m.$modelValue)}}else if(!p.assign)throw Nb("nonassign",d.ngModel,wa(e));
};this.$render=E;this.$isEmpty=function(a){return x(a)||""===a||null===a||a!==a};var F=e.inheritedData("$formController")||Kb,w=0;sd({ctrl:this,$element:e,set:function(a,c){a[c]=!0},unset:function(a,c){delete a[c]},parentForm:F,$animate:g});this.$setPristine=function(){m.$dirty=!1;m.$pristine=!0;g.removeClass(e,Lb);g.addClass(e,Ra)};this.$setDirty=function(){m.$dirty=!0;m.$pristine=!1;g.removeClass(e,Ra);g.addClass(e,Lb);F.$setDirty()};this.$setUntouched=function(){m.$touched=!1;m.$untouched=!0;g.setClass(e,
"ng-untouched","ng-touched")};this.$setTouched=function(){m.$touched=!0;m.$untouched=!1;g.setClass(e,"ng-touched","ng-untouched")};this.$rollbackViewValue=function(){h.cancel(M);m.$viewValue=m.$$lastCommittedViewValue;m.$render()};this.$validate=function(){if(!Y(m.$modelValue)||!isNaN(m.$modelValue)){var a=m.$$rawModelValue,c=m.$valid,d=m.$modelValue,e=m.$options&&m.$options.allowInvalid;m.$$runValidators(a,m.$$lastCommittedViewValue,function(f){e||c===f||(m.$modelValue=f?a:t,m.$modelValue!==d&&m.$$writeModelToScope())})}};
this.$$runValidators=function(a,c,d){function e(){var d=!0;r(m.$validators,function(e,f){var h=e(a,c);d=d&&h;g(f,h)});return d?!0:(r(m.$asyncValidators,function(a,c){g(c,null)}),!1)}function f(){var d=[],e=!0;r(m.$asyncValidators,function(f,h){var k=f(a,c);if(!k||!G(k.then))throw Nb("$asyncValidators",k);g(h,t);d.push(k.then(function(){g(h,!0)},function(a){e=!1;g(h,!1)}))});d.length?k.all(d).then(function(){h(e)},E):h(!0)}function g(a,c){l===w&&m.$setValidity(a,c)}function h(a){l===w&&d(a)}w++;var l=
w;(function(){var a=m.$$parserName||"parse";if(v===t)g(a,null);else return v||(r(m.$validators,function(a,c){g(c,null)}),r(m.$asyncValidators,function(a,c){g(c,null)})),g(a,v),v;return!0})()?e()?f():h(!1):h(!1)};this.$commitViewValue=function(){var a=m.$viewValue;h.cancel(M);if(m.$$lastCommittedViewValue!==a||""===a&&m.$$hasNativeValidators)m.$$lastCommittedViewValue=a,m.$pristine&&this.$setDirty(),this.$$parseAndValidate()};this.$$parseAndValidate=function(){var c=m.$$lastCommittedViewValue;if(v=
x(c)?t:!0)for(var d=0;d<m.$parsers.length;d++)if(c=m.$parsers[d](c),x(c)){v=!1;break}Y(m.$modelValue)&&isNaN(m.$modelValue)&&(m.$modelValue=u(a));var e=m.$modelValue,f=m.$options&&m.$options.allowInvalid;m.$$rawModelValue=c;f&&(m.$modelValue=c,m.$modelValue!==e&&m.$$writeModelToScope());m.$$runValidators(c,m.$$lastCommittedViewValue,function(a){f||(m.$modelValue=a?c:t,m.$modelValue!==e&&m.$$writeModelToScope())})};this.$$writeModelToScope=function(){s(a,m.$modelValue);r(m.$viewChangeListeners,function(a){try{a()}catch(d){c(d)}})};
this.$setViewValue=function(a,c){m.$viewValue=a;m.$options&&!m.$options.updateOnDefault||m.$$debounceViewValueCommit(c)};this.$$debounceViewValueCommit=function(c){var d=0,e=m.$options;e&&y(e.debounce)&&(e=e.debounce,Y(e)?d=e:Y(e[c])?d=e[c]:Y(e["default"])&&(d=e["default"]));h.cancel(M);d?M=h(function(){m.$commitViewValue()},d):l.$$phase?m.$commitViewValue():a.$apply(function(){m.$commitViewValue()})};a.$watch(function(){var c=u(a);if(c!==m.$modelValue){m.$modelValue=m.$$rawModelValue=c;v=t;for(var d=
m.$formatters,e=d.length,f=c;e--;)f=d[e](f);m.$viewValue!==f&&(m.$viewValue=m.$$lastCommittedViewValue=f,m.$render(),m.$$runValidators(c,f,E))}return c})}],ve=["$rootScope",function(a){return{restrict:"A",require:["ngModel","^?form","^?ngModelOptions"],controller:eg,priority:1,compile:function(c){c.addClass(Ra).addClass("ng-untouched").addClass(lb);return{pre:function(a,c,f,g){var h=g[0],l=g[1]||Kb;h.$$setOptions(g[2]&&g[2].$options);l.$addControl(h);f.$observe("name",function(a){h.$name!==a&&l.$$renameControl(h,
a)});a.$on("$destroy",function(){l.$removeControl(h)})},post:function(c,e,f,g){var h=g[0];if(h.$options&&h.$options.updateOn)e.on(h.$options.updateOn,function(a){h.$$debounceViewValueCommit(a&&a.type)});e.on("blur",function(e){h.$touched||(a.$$phase?c.$evalAsync(h.$setTouched):c.$apply(h.$setTouched))})}}}}}],fg=/(\s+|^)default(\s+|$)/,ze=function(){return{restrict:"A",controller:["$scope","$attrs",function(a,c){var d=this;this.$options=a.$eval(c.ngModelOptions);this.$options.updateOn!==t?(this.$options.updateOnDefault=
!1,this.$options.updateOn=N(this.$options.updateOn.replace(fg,function(){d.$options.updateOnDefault=!0;return" "}))):this.$options.updateOnDefault=!0}]}},le=Ia({terminal:!0,priority:1E3}),me=["$locale","$interpolate",function(a,c){var d=/{}/g,e=/^when(Minus)?(.+)$/;return{restrict:"EA",link:function(f,g,h){function l(a){g.text(a||"")}var k=h.count,n=h.$attr.when&&g.attr(h.$attr.when),p=h.offset||0,q=f.$eval(n)||{},u={},n=c.startSymbol(),s=c.endSymbol(),t=n+k+"-"+p+s,v=ca.noop,m;r(h,function(a,c){var d=
e.exec(c);d&&(d=(d[1]?"-":"")+z(d[2]),q[d]=g.attr(h.$attr[c]))});r(q,function(a,e){u[e]=c(a.replace(d,t))});f.$watch(k,function(c){c=parseFloat(c);var d=isNaN(c);d||c in q||(c=a.pluralCat(c-p));c===m||d&&isNaN(m)||(v(),v=f.$watch(u[c],l),m=c)})}}}],ne=["$parse","$animate",function(a,c){var d=R("ngRepeat"),e=function(a,c,d,e,k,n,p){a[d]=e;k&&(a[k]=n);a.$index=c;a.$first=0===c;a.$last=c===p-1;a.$middle=!(a.$first||a.$last);a.$odd=!(a.$even=0===(c&1))};return{restrict:"A",multiElement:!0,transclude:"element",
priority:1E3,terminal:!0,$$tlb:!0,compile:function(f,g){var h=g.ngRepeat,l=W.createComment(" end ngRepeat: "+h+" "),k=h.match(/^\s*([\s\S]+?)\s+in\s+([\s\S]+?)(?:\s+as\s+([\s\S]+?))?(?:\s+track\s+by\s+([\s\S]+?))?\s*$/);if(!k)throw d("iexp",h);var n=k[1],p=k[2],q=k[3],u=k[4],k=n.match(/^(?:(\s*[\$\w]+)|\(\s*([\$\w]+)\s*,\s*([\$\w]+)\s*\))$/);if(!k)throw d("iidexp",n);var s=k[3]||k[1],y=k[2];if(q&&(!/^[$a-zA-Z_][$a-zA-Z0-9_]*$/.test(q)||/^(null|undefined|this|\$index|\$first|\$middle|\$last|\$even|\$odd|\$parent|\$root|\$id)$/.test(q)))throw d("badident",
q);var v,m,w,x,E={$id:Ma};u?v=a(u):(w=function(a,c){return Ma(c)},x=function(a){return a});return function(a,f,g,k,n){v&&(m=function(c,d,e){y&&(E[y]=c);E[s]=d;E.$index=e;return v(a,E)});var u=ia();a.$watchCollection(p,function(g){var k,p,v=f[0],D,E=ia(),G,H,L,S,J,C,z;q&&(a[q]=g);if(Sa(g))J=g,p=m||w;else{p=m||x;J=[];for(z in g)g.hasOwnProperty(z)&&"$"!=z.charAt(0)&&J.push(z);J.sort()}G=J.length;z=Array(G);for(k=0;k<G;k++)if(H=g===J?k:J[k],L=g[H],S=p(H,L,k),u[S])C=u[S],delete u[S],E[S]=C,z[k]=C;else{if(E[S])throw r(z,
function(a){a&&a.scope&&(u[a.id]=a)}),d("dupes",h,S,L);z[k]={id:S,scope:t,clone:t};E[S]=!0}for(D in u){C=u[D];S=tb(C.clone);c.leave(S);if(S[0].parentNode)for(k=0,p=S.length;k<p;k++)S[k].$$NG_REMOVED=!0;C.scope.$destroy()}for(k=0;k<G;k++)if(H=g===J?k:J[k],L=g[H],C=z[k],C.scope){D=v;do D=D.nextSibling;while(D&&D.$$NG_REMOVED);C.clone[0]!=D&&c.move(tb(C.clone),null,A(v));v=C.clone[C.clone.length-1];e(C.scope,k,s,L,y,H,G)}else n(function(a,d){C.scope=d;var f=l.cloneNode(!1);a[a.length++]=f;c.enter(a,
null,A(v));v=f;C.clone=a;E[C.id]=C;e(C.scope,k,s,L,y,H,G)});u=E})}}}}],oe=["$animate",function(a){return{restrict:"A",multiElement:!0,link:function(c,d,e){c.$watch(e.ngShow,function(c){a[c?"removeClass":"addClass"](d,"ng-hide",{tempClasses:"ng-hide-animate"})})}}}],he=["$animate",function(a){return{restrict:"A",multiElement:!0,link:function(c,d,e){c.$watch(e.ngHide,function(c){a[c?"addClass":"removeClass"](d,"ng-hide",{tempClasses:"ng-hide-animate"})})}}}],pe=Ia(function(a,c,d){a.$watchCollection(d.ngStyle,
function(a,d){d&&a!==d&&r(d,function(a,d){c.css(d,"")});a&&c.css(a)})}),qe=["$animate",function(a){return{restrict:"EA",require:"ngSwitch",controller:["$scope",function(){this.cases={}}],link:function(c,d,e,f){var g=[],h=[],l=[],k=[],n=function(a,c){return function(){a.splice(c,1)}};c.$watch(e.ngSwitch||e.on,function(c){var d,e;d=0;for(e=l.length;d<e;++d)a.cancel(l[d]);d=l.length=0;for(e=k.length;d<e;++d){var s=tb(h[d].clone);k[d].$destroy();(l[d]=a.leave(s)).then(n(l,d))}h.length=0;k.length=0;(g=
f.cases["!"+c]||f.cases["?"])&&r(g,function(c){c.transclude(function(d,e){k.push(e);var f=c.element;d[d.length++]=W.createComment(" end ngSwitchWhen: ");h.push({clone:d});a.enter(d,f.parent(),f)})})})}}}],re=Ia({transclude:"element",priority:1200,require:"^ngSwitch",multiElement:!0,link:function(a,c,d,e,f){e.cases["!"+d.ngSwitchWhen]=e.cases["!"+d.ngSwitchWhen]||[];e.cases["!"+d.ngSwitchWhen].push({transclude:f,element:c})}}),se=Ia({transclude:"element",priority:1200,require:"^ngSwitch",multiElement:!0,
link:function(a,c,d,e,f){e.cases["?"]=e.cases["?"]||[];e.cases["?"].push({transclude:f,element:c})}}),ue=Ia({restrict:"EAC",link:function(a,c,d,e,f){if(!f)throw R("ngTransclude")("orphan",wa(c));f(function(a){c.empty();c.append(a)})}}),Vd=["$templateCache",function(a){return{restrict:"E",terminal:!0,compile:function(c,d){"text/ng-template"==d.type&&a.put(d.id,c[0].text)}}}],gg=R("ngOptions"),te=ea({restrict:"A",terminal:!0}),Wd=["$compile","$parse",function(a,c){var d=/^\s*([\s\S]+?)(?:\s+as\s+([\s\S]+?))?(?:\s+group\s+by\s+([\s\S]+?))?\s+for\s+(?:([\$\w][\$\w]*)|(?:\(\s*([\$\w][\$\w]*)\s*,\s*([\$\w][\$\w]*)\s*\)))\s+in\s+([\s\S]+?)(?:\s+track\s+by\s+([\s\S]+?))?$/,
e={$setViewValue:E};return{restrict:"E",require:["select","?ngModel"],controller:["$element","$scope","$attrs",function(a,c,d){var l=this,k={},n=e,p;l.databound=d.ngModel;l.init=function(a,c,d){n=a;p=d};l.addOption=function(c,d){La(c,'"option value"');k[c]=!0;n.$viewValue==c&&(a.val(c),p.parent()&&p.remove());d&&d[0].hasAttribute("selected")&&(d[0].selected=!0)};l.removeOption=function(a){this.hasOption(a)&&(delete k[a],n.$viewValue===a&&this.renderUnknownOption(a))};l.renderUnknownOption=function(c){c=
"? "+Ma(c)+" ?";p.val(c);a.prepend(p);a.val(c);p.prop("selected",!0)};l.hasOption=function(a){return k.hasOwnProperty(a)};c.$on("$destroy",function(){l.renderUnknownOption=E})}],link:function(e,g,h,l){function k(a,c,d,e){d.$render=function(){var a=d.$viewValue;e.hasOption(a)?(C.parent()&&C.remove(),c.val(a),""===a&&v.prop("selected",!0)):x(a)&&v?c.val(""):e.renderUnknownOption(a)};c.on("change",function(){a.$apply(function(){C.parent()&&C.remove();d.$setViewValue(c.val())})})}function n(a,c,d){var e;
d.$render=function(){var a=new eb(d.$viewValue);r(c.find("option"),function(c){c.selected=y(a.get(c.value))})};a.$watch(function(){ha(e,d.$viewValue)||(e=sa(d.$viewValue),d.$render())});c.on("change",function(){a.$apply(function(){var a=[];r(c.find("option"),function(c){c.selected&&a.push(c.value)});d.$setViewValue(a)})})}function p(e,f,g){function h(a,c,d){T[x]=d;G&&(T[G]=c);return a(e,T)}function k(a){var c;if(u)if(I&&H(a)){c=new eb([]);for(var d=0;d<a.length;d++)c.put(h(I,null,a[d]),!0)}else c=
new eb(a);else I&&(a=h(I,null,a));return function(d,e){var f;f=I?I:B?B:z;return u?y(c.remove(h(f,d,e))):a===h(f,d,e)}}function l(){m||(e.$$postDigest(p),m=!0)}function n(a,c,d){a[c]=a[c]||0;a[c]+=d?1:-1}function p(){m=!1;var a={"":[]},c=[""],d,l,s,t,v;s=g.$viewValue;t=L(e)||[];var B=G?Object.keys(t).sort():t,x,A,H,z,O={};v=k(s);var N=!1,U,W;Q={};for(z=0;H=B.length,z<H;z++){x=z;if(G&&(x=B[z],"$"===x.charAt(0)))continue;A=t[x];d=h(J,x,A)||"";(l=a[d])||(l=a[d]=[],c.push(d));d=v(x,A);N=N||d;A=h(C,x,A);
A=y(A)?A:"";W=I?I(e,T):G?B[z]:z;I&&(Q[W]=x);l.push({id:W,label:A,selected:d})}u||(w||null===s?a[""].unshift({id:"",label:"",selected:!N}):N||a[""].unshift({id:"?",label:"",selected:!0}));x=0;for(B=c.length;x<B;x++){d=c[x];l=a[d];R.length<=x?(s={element:E.clone().attr("label",d),label:l.label},t=[s],R.push(t),f.append(s.element)):(t=R[x],s=t[0],s.label!=d&&s.element.attr("label",s.label=d));N=null;z=0;for(H=l.length;z<H;z++)d=l[z],(v=t[z+1])?(N=v.element,v.label!==d.label&&(n(O,v.label,!1),n(O,d.label,
!0),N.text(v.label=d.label),N.prop("label",v.label)),v.id!==d.id&&N.val(v.id=d.id),N[0].selected!==d.selected&&(N.prop("selected",v.selected=d.selected),Qa&&N.prop("selected",v.selected))):(""===d.id&&w?U=w:(U=F.clone()).val(d.id).prop("selected",d.selected).attr("selected",d.selected).prop("label",d.label).text(d.label),t.push(v={element:U,label:d.label,id:d.id,selected:d.selected}),n(O,d.label,!0),N?N.after(U):s.element.append(U),N=U);for(z++;t.length>z;)d=t.pop(),n(O,d.label,!1),d.element.remove()}for(;R.length>
x;){l=R.pop();for(z=1;z<l.length;++z)n(O,l[z].label,!1);l[0].element.remove()}r(O,function(a,c){0<a?q.addOption(c):0>a&&q.removeOption(c)})}var v;if(!(v=s.match(d)))throw gg("iexp",s,wa(f));var C=c(v[2]||v[1]),x=v[4]||v[6],A=/ as /.test(v[0])&&v[1],B=A?c(A):null,G=v[5],J=c(v[3]||""),z=c(v[2]?v[1]:x),L=c(v[7]),I=v[8]?c(v[8]):null,Q={},R=[[{element:f,label:""}]],T={};w&&(a(w)(e),w.removeClass("ng-scope"),w.remove());f.empty();f.on("change",function(){e.$apply(function(){var a=L(e)||[],c;if(u)c=[],r(f.val(),
function(d){d=I?Q[d]:d;c.push("?"===d?t:""===d?null:h(B?B:z,d,a[d]))});else{var d=I?Q[f.val()]:f.val();c="?"===d?t:""===d?null:h(B?B:z,d,a[d])}g.$setViewValue(c);p()})});g.$render=p;e.$watchCollection(L,l);e.$watchCollection(function(){var a=L(e),c;if(a&&H(a)){c=Array(a.length);for(var d=0,f=a.length;d<f;d++)c[d]=h(C,d,a[d])}else if(a)for(d in c={},a)a.hasOwnProperty(d)&&(c[d]=h(C,d,a[d]));return c},l);u&&e.$watchCollection(function(){return g.$modelValue},l)}if(l[1]){var q=l[0];l=l[1];var u=h.multiple,
s=h.ngOptions,w=!1,v,m=!1,F=A(W.createElement("option")),E=A(W.createElement("optgroup")),C=F.clone();h=0;for(var B=g.children(),G=B.length;h<G;h++)if(""===B[h].value){v=w=B.eq(h);break}q.init(l,w,C);u&&(l.$isEmpty=function(a){return!a||0===a.length});s?p(e,g,l):u?n(e,g,l):k(e,g,l,q)}}}}],Yd=["$interpolate",function(a){var c={addOption:E,removeOption:E};return{restrict:"E",priority:100,compile:function(d,e){if(x(e.value)){var f=a(d.text(),!0);f||e.$set("value",d.text())}return function(a,d,e){var k=
d.parent(),n=k.data("$selectController")||k.parent().data("$selectController");n&&n.databound||(n=c);f?a.$watch(f,function(a,c){e.$set("value",a);c!==a&&n.removeOption(c);n.addOption(a,d)}):n.addOption(e.value,d);d.on("$destroy",function(){n.removeOption(e.value)})}}}}],Xd=ea({restrict:"E",terminal:!1}),Bc=function(){return{restrict:"A",require:"?ngModel",link:function(a,c,d,e){e&&(d.required=!0,e.$validators.required=function(a,c){return!d.required||!e.$isEmpty(c)},d.$observe("required",function(){e.$validate()}))}}},
Ac=function(){return{restrict:"A",require:"?ngModel",link:function(a,c,d,e){if(e){var f,g=d.ngPattern||d.pattern;d.$observe("pattern",function(a){C(a)&&0<a.length&&(a=new RegExp("^"+a+"$"));if(a&&!a.test)throw R("ngPattern")("noregexp",g,a,wa(c));f=a||t;e.$validate()});e.$validators.pattern=function(a){return e.$isEmpty(a)||x(f)||f.test(a)}}}}},Dc=function(){return{restrict:"A",require:"?ngModel",link:function(a,c,d,e){if(e){var f=-1;d.$observe("maxlength",function(a){a=aa(a);f=isNaN(a)?-1:a;e.$validate()});
e.$validators.maxlength=function(a,c){return 0>f||e.$isEmpty(c)||c.length<=f}}}}},Cc=function(){return{restrict:"A",require:"?ngModel",link:function(a,c,d,e){if(e){var f=0;d.$observe("minlength",function(a){f=aa(a)||0;e.$validate()});e.$validators.minlength=function(a,c){return e.$isEmpty(c)||c.length>=f}}}}};Q.angular.bootstrap?console.log("WARNING: Tried to load angular more than once."):(Nd(),Pd(ca),A(W).ready(function(){Jd(W,uc)}))})(window,document);!window.angular.$$csp()&&window.angular.element(document).find("head").prepend('<style type="text/css">@charset "UTF-8";[ng\\:cloak],[ng-cloak],[data-ng-cloak],[x-ng-cloak],.ng-cloak,.x-ng-cloak,.ng-hide:not(.ng-hide-animate){display:none !important;}ng\\:form{display:block;}</style>');
//# sourceMappingURL=angular.min.js.map

/*
 AngularJS v1.4.1
 (c) 2010-2015 Google, Inc. http://angularjs.org
 License: MIT
*/
(function(q,d,C){'use strict';function v(r,k,h){return{restrict:"ECA",terminal:!0,priority:400,transclude:"element",link:function(a,f,b,c,y){function z(){l&&(h.cancel(l),l=null);m&&(m.$destroy(),m=null);n&&(l=h.leave(n),l.then(function(){l=null}),n=null)}function x(){var b=r.current&&r.current.locals;if(d.isDefined(b&&b.$template)){var b=a.$new(),c=r.current;n=y(b,function(b){h.enter(b,null,n||f).then(function(){!d.isDefined(t)||t&&!a.$eval(t)||k()});z()});m=c.scope=b;m.$emit("$viewContentLoaded");
m.$eval(w)}else z()}var m,n,l,t=b.autoscroll,w=b.onload||"";a.$on("$routeChangeSuccess",x);x()}}}function A(d,k,h){return{restrict:"ECA",priority:-400,link:function(a,f){var b=h.current,c=b.locals;f.html(c.$template);var y=d(f.contents());b.controller&&(c.$scope=a,c=k(b.controller,c),b.controllerAs&&(a[b.controllerAs]=c),f.data("$ngControllerController",c),f.children().data("$ngControllerController",c));y(a)}}}q=d.module("ngRoute",["ng"]).provider("$route",function(){function r(a,f){return d.extend(Object.create(a),
f)}function k(a,d){var b=d.caseInsensitiveMatch,c={originalPath:a,regexp:a},h=c.keys=[];a=a.replace(/([().])/g,"\\$1").replace(/(\/)?:(\w+)([\?\*])?/g,function(a,d,b,c){a="?"===c?c:null;c="*"===c?c:null;h.push({name:b,optional:!!a});d=d||"";return""+(a?"":d)+"(?:"+(a?d:"")+(c&&"(.+?)"||"([^/]+)")+(a||"")+")"+(a||"")}).replace(/([\/$\*])/g,"\\$1");c.regexp=new RegExp("^"+a+"$",b?"i":"");return c}var h={};this.when=function(a,f){var b=d.copy(f);d.isUndefined(b.reloadOnSearch)&&(b.reloadOnSearch=!0);
d.isUndefined(b.caseInsensitiveMatch)&&(b.caseInsensitiveMatch=this.caseInsensitiveMatch);h[a]=d.extend(b,a&&k(a,b));if(a){var c="/"==a[a.length-1]?a.substr(0,a.length-1):a+"/";h[c]=d.extend({redirectTo:a},k(c,b))}return this};this.caseInsensitiveMatch=!1;this.otherwise=function(a){"string"===typeof a&&(a={redirectTo:a});this.when(null,a);return this};this.$get=["$rootScope","$location","$routeParams","$q","$injector","$templateRequest","$sce",function(a,f,b,c,k,q,x){function m(b){var e=s.current;
(v=(p=l())&&e&&p.$$route===e.$$route&&d.equals(p.pathParams,e.pathParams)&&!p.reloadOnSearch&&!w)||!e&&!p||a.$broadcast("$routeChangeStart",p,e).defaultPrevented&&b&&b.preventDefault()}function n(){var u=s.current,e=p;if(v)u.params=e.params,d.copy(u.params,b),a.$broadcast("$routeUpdate",u);else if(e||u)w=!1,(s.current=e)&&e.redirectTo&&(d.isString(e.redirectTo)?f.path(t(e.redirectTo,e.params)).search(e.params).replace():f.url(e.redirectTo(e.pathParams,f.path(),f.search())).replace()),c.when(e).then(function(){if(e){var a=
d.extend({},e.resolve),b,g;d.forEach(a,function(b,e){a[e]=d.isString(b)?k.get(b):k.invoke(b,null,null,e)});d.isDefined(b=e.template)?d.isFunction(b)&&(b=b(e.params)):d.isDefined(g=e.templateUrl)&&(d.isFunction(g)&&(g=g(e.params)),g=x.getTrustedResourceUrl(g),d.isDefined(g)&&(e.loadedTemplateUrl=g,b=q(g)));d.isDefined(b)&&(a.$template=b);return c.all(a)}}).then(function(c){e==s.current&&(e&&(e.locals=c,d.copy(e.params,b)),a.$broadcast("$routeChangeSuccess",e,u))},function(b){e==s.current&&a.$broadcast("$routeChangeError",
e,u,b)})}function l(){var a,b;d.forEach(h,function(c,h){var g;if(g=!b){var k=f.path();g=c.keys;var m={};if(c.regexp)if(k=c.regexp.exec(k)){for(var l=1,n=k.length;l<n;++l){var p=g[l-1],q=k[l];p&&q&&(m[p.name]=q)}g=m}else g=null;else g=null;g=a=g}g&&(b=r(c,{params:d.extend({},f.search(),a),pathParams:a}),b.$$route=c)});return b||h[null]&&r(h[null],{params:{},pathParams:{}})}function t(a,b){var c=[];d.forEach((a||"").split(":"),function(a,d){if(0===d)c.push(a);else{var f=a.match(/(\w+)(?:[?*])?(.*)/),
h=f[1];c.push(b[h]);c.push(f[2]||"");delete b[h]}});return c.join("")}var w=!1,p,v,s={routes:h,reload:function(){w=!0;a.$evalAsync(function(){m();n()})},updateParams:function(a){if(this.current&&this.current.$$route)a=d.extend({},this.current.params,a),f.path(t(this.current.$$route.originalPath,a)),f.search(a);else throw B("norout");}};a.$on("$locationChangeStart",m);a.$on("$locationChangeSuccess",n);return s}]});var B=d.$$minErr("ngRoute");q.provider("$routeParams",function(){this.$get=function(){return{}}});
q.directive("ngView",v);q.directive("ngView",A);v.$inject=["$route","$anchorScroll","$animate"];A.$inject=["$compile","$controller","$route"]})(window,window.angular);
//# sourceMappingURL=angular-route.min.js.map

/*
 AngularJS v1.4.0
 (c) 2010-2015 Google, Inc. http://angularjs.org
 License: MIT
*/
(function(F,t,W){'use strict';function ua(a,b,c){if(!a)throw ngMinErr("areq",b||"?",c||"required");return a}function va(a,b){if(!a&&!b)return"";if(!a)return b;if(!b)return a;X(a)&&(a=a.join(" "));X(b)&&(b=b.join(" "));return a+" "+b}function Ea(a){var b={};a&&(a.to||a.from)&&(b.to=a.to,b.from=a.from);return b}function ba(a,b,c){var d="";a=X(a)?a:a&&U(a)&&a.length?a.split(/\s+/):[];u(a,function(a,s){a&&0<a.length&&(d+=0<s?" ":"",d+=c?b+a:a+b)});return d}function Fa(a){if(a instanceof G)switch(a.length){case 0:return[];
case 1:if(1===a[0].nodeType)return a;break;default:return G(ka(a))}if(1===a.nodeType)return G(a)}function ka(a){if(!a[0])return a;for(var b=0;b<a.length;b++){var c=a[b];if(1==c.nodeType)return c}}function Ga(a,b,c){u(b,function(b){a.addClass(b,c)})}function Ha(a,b,c){u(b,function(b){a.removeClass(b,c)})}function ha(a){return function(b,c){c.addClass&&(Ga(a,b,c.addClass),c.addClass=null);c.removeClass&&(Ha(a,b,c.removeClass),c.removeClass=null)}}function ia(a){a=a||{};if(!a.$$prepared){var b=a.domOperation||
H;a.domOperation=function(){a.$$domOperationFired=!0;b();b=H};a.$$prepared=!0}return a}function ca(a,b){wa(a,b);xa(a,b)}function wa(a,b){b.from&&(a.css(b.from),b.from=null)}function xa(a,b){b.to&&(a.css(b.to),b.to=null)}function R(a,b,c){var d=(b.addClass||"")+" "+(c.addClass||""),e=(b.removeClass||"")+" "+(c.removeClass||"");a=Ia(a.attr("class"),d,e);ya(b,c);b.addClass=a.addClass?a.addClass:null;b.removeClass=a.removeClass?a.removeClass:null;return b}function Ia(a,b,c){function d(a){U(a)&&(a=a.split(" "));
var b={};u(a,function(a){a.length&&(b[a]=!0)});return b}var e={};a=d(a);b=d(b);u(b,function(a,b){e[b]=1});c=d(c);u(c,function(a,b){e[b]=1===e[b]?null:-1});var s={addClass:"",removeClass:""};u(e,function(b,c){var d,e;1===b?(d="addClass",e=!a[c]):-1===b&&(d="removeClass",e=a[c]);e&&(s[d].length&&(s[d]+=" "),s[d]+=c)});return s}function A(a){return a instanceof t.element?a[0]:a}function za(a,b,c){var d=Object.create(null),e=a.getComputedStyle(b)||{};u(c,function(a,b){var c=e[a];if(c){var l=c.charAt(0);
if("-"===l||"+"===l||0<=l)c=Ja(c);0===c&&(c=null);d[b]=c}});return d}function Ja(a){var b=0;a=a.split(/\s*,\s*/);u(a,function(a){"s"==a.charAt(a.length-1)&&(a=a.substring(0,a.length-1));a=parseFloat(a)||0;b=b?Math.max(a,b):a});return b}function la(a){return 0===a||null!=a}function Aa(a,b){var c=O,d=a+"s";b?c+="Duration":d+=" linear all";return[c,d]}function ja(a,b){var c=b?"-"+b+"s":"";da(a,[ea,c]);return[ea,c]}function ma(a,b){var c=b?"paused":"",d=V+"PlayState";da(a,[d,c]);return[d,c]}function da(a,
b){a.style[b[0]]=b[1]}function Ba(){var a=Object.create(null);return{flush:function(){a=Object.create(null)},count:function(b){return(b=a[b])?b.total:0},get:function(b){return(b=a[b])&&b.value},put:function(b,c){a[b]?a[b].total++:a[b]={total:1,value:c}}}}var H=t.noop,ya=t.extend,G=t.element,u=t.forEach,X=t.isArray,U=t.isString,na=t.isObject,Ka=t.isUndefined,La=t.isDefined,Ca=t.isFunction,oa=t.isElement,O,pa,V,qa;F.ontransitionend===W&&F.onwebkittransitionend!==W?(O="WebkitTransition",pa="webkitTransitionEnd transitionend"):
(O="transition",pa="transitionend");F.onanimationend===W&&F.onwebkitanimationend!==W?(V="WebkitAnimation",qa="webkitAnimationEnd animationend"):(V="animation",qa="animationend");var ra=V+"Delay",sa=V+"Duration",ea=O+"Delay";F=O+"Duration";var Ma={transitionDuration:F,transitionDelay:ea,transitionProperty:O+"Property",animationDuration:sa,animationDelay:ra,animationIterationCount:V+"IterationCount"},Na={transitionDuration:F,transitionDelay:ea,animationDuration:sa,animationDelay:ra};t.module("ngAnimate",
[]).directive("ngAnimateChildren",[function(){return function(a,b,c){a=c.ngAnimateChildren;t.isString(a)&&0===a.length?b.data("$$ngAnimateChildren",!0):c.$observe("ngAnimateChildren",function(a){b.data("$$ngAnimateChildren","on"===a||"true"===a)})}}]).factory("$$rAFMutex",["$$rAF",function(a){return function(){var b=!1;a(function(){b=!0});return function(c){b?c():a(c)}}}]).factory("$$rAFScheduler",["$$rAF",function(a){function b(a){d.push([].concat(a));c()}function c(){if(d.length){for(var b=[],n=
0;n<d.length;n++){var g=d[n];g.shift()();g.length&&b.push(g)}d=b;e||a(function(){e||c()})}}var d=[],e;b.waitUntilQuiet=function(b){e&&e();e=a(function(){e=null;b();c()})};return b}]).factory("$$AnimateRunner",["$q","$$rAFMutex",function(a,b){function c(a){this.setHost(a);this._doneCallbacks=[];this._runInAnimationFrame=b();this._state=0}c.chain=function(a,b){function c(){if(n===a.length)b(!0);else a[n](function(a){!1===a?b(!1):(n++,c())})}var n=0;c()};c.all=function(a,b){function c(s){g=g&&s;++n===
a.length&&b(g)}var n=0,g=!0;u(a,function(a){a.done(c)})};c.prototype={setHost:function(a){this.host=a||{}},done:function(a){2===this._state?a():this._doneCallbacks.push(a)},progress:H,getPromise:function(){if(!this.promise){var b=this;this.promise=a(function(a,c){b.done(function(b){!1===b?c():a()})})}return this.promise},then:function(a,b){return this.getPromise().then(a,b)},"catch":function(a){return this.getPromise()["catch"](a)},"finally":function(a){return this.getPromise()["finally"](a)},pause:function(){this.host.pause&&
this.host.pause()},resume:function(){this.host.resume&&this.host.resume()},end:function(){this.host.end&&this.host.end();this._resolve(!0)},cancel:function(){this.host.cancel&&this.host.cancel();this._resolve(!1)},complete:function(a){var b=this;0===b._state&&(b._state=1,b._runInAnimationFrame(function(){b._resolve(a)}))},_resolve:function(a){2!==this._state&&(u(this._doneCallbacks,function(b){b(a)}),this._doneCallbacks.length=0,this._state=2)}};return c}]).provider("$$animateQueue",["$animateProvider",
function(a){function b(a,b,c,g){return d[a].some(function(a){return a(b,c,g)})}function c(a,b){a=a||{};var c=0<(a.addClass||"").length,d=0<(a.removeClass||"").length;return b?c&&d:c||d}var d=this.rules={skip:[],cancel:[],join:[]};d.join.push(function(a,b,d){return!b.structural&&c(b.options)});d.skip.push(function(a,b,d){return!b.structural&&!c(b.options)});d.skip.push(function(a,b,c){return"leave"==c.event&&b.structural});d.skip.push(function(a,b,c){return c.structural&&!b.structural});d.cancel.push(function(a,
b,c){return c.structural&&b.structural});d.cancel.push(function(a,b,c){return 2===c.state&&b.structural});d.cancel.push(function(a,b,c){a=b.options;c=c.options;return a.addClass&&a.addClass===c.removeClass||a.removeClass&&a.removeClass===c.addClass});this.$get=["$$rAF","$rootScope","$rootElement","$document","$$HashMap","$$animation","$$AnimateRunner","$templateRequest","$$jqLite",function(d,s,n,g,l,D,z,Z,I){function w(a,b){var c=A(a),f=[],d=m[b];d&&u(d,function(a){a.node.contains(c)&&f.push(a.callback)});
return f}function B(a,b,c,f){d(function(){u(w(b,a),function(a){a(b,c,f)})})}function r(a,S,p){function d(b,c,f,p){B(c,a,f,p);b.progress(c,f,p)}function k(b){Da(a,p);ca(a,p);p.domOperation();m.complete(!b)}var P,E;if(a=Fa(a))P=A(a),E=a.parent();p=ia(p);var m=new z;if(!P)return k(),m;X(p.addClass)&&(p.addClass=p.addClass.join(" "));X(p.removeClass)&&(p.removeClass=p.removeClass.join(" "));p.from&&!na(p.from)&&(p.from=null);p.to&&!na(p.to)&&(p.to=null);var e=[P.className,p.addClass,p.removeClass].join(" ");
if(!v(e))return k(),m;var M=0<=["enter","move","leave"].indexOf(S),g=!x||L.get(P),e=!g&&h.get(P)||{},l=!!e.state;g||l&&1==e.state||(g=!ta(a,E,S));if(g)return k(),m;M&&K(a);g={structural:M,element:a,event:S,close:k,options:p,runner:m};if(l){if(b("skip",a,g,e)){if(2===e.state)return k(),m;R(a,e.options,p);return e.runner}if(b("cancel",a,g,e))2===e.state?e.runner.end():e.structural?e.close():R(a,g.options,e.options);else if(b("join",a,g,e))if(2===e.state)R(a,p,{});else return S=g.event=e.event,p=R(a,
e.options,g.options),m}else R(a,p,{});(l=g.structural)||(l="animate"===g.event&&0<Object.keys(g.options.to||{}).length||c(g.options));if(!l)return k(),C(a),m;M&&f(E);var r=(e.counter||0)+1;g.counter=r;ga(a,1,g);s.$$postDigest(function(){var b=h.get(P),v=!b,b=b||{},e=a.parent()||[],E=0<e.length&&("animate"===b.event||b.structural||c(b.options));if(v||b.counter!==r||!E){v&&(Da(a,p),ca(a,p));if(v||M&&b.event!==S)p.domOperation(),m.end();E||C(a)}else S=!b.structural&&c(b.options,!0)?"setClass":b.event,
b.structural&&f(e),ga(a,2),b=D(a,S,b.options),b.done(function(b){k(!b);(b=h.get(P))&&b.counter===r&&C(A(a));d(m,S,"close",{})}),m.setHost(b),d(m,S,"start",{})});return m}function K(a){a=A(a).querySelectorAll("[data-ng-animate]");u(a,function(a){var b=parseInt(a.getAttribute("data-ng-animate")),c=h.get(a);switch(b){case 2:c.runner.end();case 1:c&&h.remove(a)}})}function C(a){a=A(a);a.removeAttribute("data-ng-animate");h.remove(a)}function E(a,b){return A(a)===A(b)}function f(a){a=A(a);do{if(!a||1!==
a.nodeType)break;var b=h.get(a);if(b){var f=a;!b.structural&&c(b.options)&&(2===b.state&&b.runner.end(),C(f))}a=a.parentNode}while(1)}function ta(a,b,c){var f=c=!1,d=!1,v;for((a=a.data("$ngAnimatePin"))&&(b=a);b&&b.length;){f||(f=E(b,n));a=b[0];if(1!==a.nodeType)break;var e=h.get(a)||{};d||(d=e.structural||L.get(a));if(Ka(v)||!0===v)a=b.data("$$ngAnimateChildren"),La(a)&&(v=a);if(d&&!1===v)break;f||(f=E(b,n),f||(a=b.data("$ngAnimatePin"))&&(b=a));c||(c=E(b,k));b=b.parent()}return(!d||v)&&f&&c}function ga(a,
b,c){c=c||{};c.state=b;a=A(a);a.setAttribute("data-ng-animate",b);c=(b=h.get(a))?ya(b,c):c;h.put(a,c)}var h=new l,L=new l,x=null,M=s.$watch(function(){return 0===Z.totalPendingRequests},function(a){a&&(M(),s.$$postDigest(function(){s.$$postDigest(function(){null===x&&(x=!0)})}))}),k=G(g[0].body),m={},P=a.classNameFilter(),v=P?function(a){return P.test(a)}:function(){return!0},Da=ha(I);return{on:function(a,b,c){b=ka(b);m[a]=m[a]||[];m[a].push({node:b,callback:c})},off:function(a,b,c){function f(a,
b,c){var d=ka(b);return a.filter(function(a){return!(a.node===d&&(!c||a.callback===c))})}var d=m[a];d&&(m[a]=1===arguments.length?null:f(d,b,c))},pin:function(a,b){ua(oa(a),"element","not an element");ua(oa(b),"parentElement","not an element");a.data("$ngAnimatePin",b)},push:function(a,b,c,f){c=c||{};c.domOperation=f;return r(a,b,c)},enabled:function(a,b){var c=arguments.length;if(0===c)b=!!x;else if(oa(a)){var f=A(a),d=L.get(f);1===c?b=!d:(b=!!b)?d&&L.remove(f):L.put(f,!0)}else b=x=!!a;return b}}}]}]).provider("$$animation",
["$animateProvider",function(a){function b(a){return a.data("$$animationRunner")}var c=this.drivers=[];this.$get=["$$jqLite","$rootScope","$injector","$$AnimateRunner","$$rAFScheduler",function(a,e,s,n,g){var l=[],D=ha(a),z=0,Z=0,I=[];return function(w,B,r){function K(a){a=a.hasAttribute("ng-animate-ref")?[a]:a.querySelectorAll("[ng-animate-ref]");var b=[];u(a,function(a){var c=a.getAttribute("ng-animate-ref");c&&c.length&&b.push(a)});return b}function C(a){var b=[],c={};u(a,function(a,f){var d=A(a.element),
e=0<=["enter","move"].indexOf(a.event),d=a.structural?K(d):[];if(d.length){var h=e?"to":"from";u(d,function(a){var b=a.getAttribute("ng-animate-ref");c[b]=c[b]||{};c[b][h]={animationID:f,element:G(a)}})}else b.push(a)});var f={},d={};u(c,function(c,e){var h=c.from,k=c.to;if(h&&k){var m=a[h.animationID],g=a[k.animationID],x=h.animationID.toString();if(!d[x]){var B=d[x]={structural:!0,beforeStart:function(){m.beforeStart();g.beforeStart()},close:function(){m.close();g.close()},classes:E(m.classes,g.classes),
from:m,to:g,anchors:[]};B.classes.length?b.push(B):(b.push(m),b.push(g))}d[x].anchors.push({out:h.element,"in":k.element})}else h=h?h.animationID:k.animationID,k=h.toString(),f[k]||(f[k]=!0,b.push(a[h]))});return b}function E(a,b){a=a.split(" ");b=b.split(" ");for(var c=[],f=0;f<a.length;f++){var d=a[f];if("ng-"!==d.substring(0,3))for(var h=0;h<b.length;h++)if(d===b[h]){c.push(d);break}}return c.join(" ")}function f(a){for(var b=c.length-1;0<=b;b--){var f=c[b];if(s.has(f)&&(f=s.get(f)(a)))return f}}
function ta(a,c){a.from&&a.to?(b(a.from.element).setHost(c),b(a.to.element).setHost(c)):b(a.element).setHost(c)}function ga(){var a=b(w);!a||"leave"===B&&r.$$domOperationFired||a.end()}function h(b){w.off("$destroy",ga);w.removeData("$$animationRunner");D(w,r);ca(w,r);r.domOperation();k&&a.removeClass(w,k);w.removeClass("ng-animate");x.complete(!b)}r=ia(r);var L=0<=["enter","move","leave"].indexOf(B),x=new n({end:function(){h()},cancel:function(){h(!0)}});if(!c.length)return h(),x;w.data("$$animationRunner",
x);var M=va(w.attr("class"),va(r.addClass,r.removeClass)),k=r.tempClasses;k&&(M+=" "+k,r.tempClasses=null);var m;L||(m=z,z+=1);l.push({element:w,classes:M,event:B,classBasedIndex:m,structural:L,options:r,beforeStart:function(){w.addClass("ng-animate");k&&a.addClass(w,k)},close:h});w.on("$destroy",ga);if(1<l.length)return x;e.$$postDigest(function(){Z=z;z=0;I.length=0;var a=[];u(l,function(c){b(c.element)&&a.push(c)});l.length=0;u(C(a),function(a){function c(){a.beforeStart();var d,h=a.close;if(b(a.anchors?
a.from.element||a.to.element:a.element)){var k=f(a);k&&(d=k.start)}d?(d=d(),d.done(function(a){h(!a)}),ta(a,d)):h()}a.structural?c():(I.push({node:A(a.element),fn:c}),a.classBasedIndex===Z-1&&(I=I.sort(function(a,b){return b.node.contains(a.node)}).map(function(a){return a.fn}),g(I)))})});return x}}]}]).provider("$animateCss",["$animateProvider",function(a){var b=Ba(),c=Ba();this.$get=["$window","$$jqLite","$$AnimateRunner","$timeout","$document","$sniffer","$$rAFScheduler",function(a,e,s,n,g,l,D){function z(a,
b){var c=a.parentNode;return(c.$$ngAnimateParentKey||(c.$$ngAnimateParentKey=++r))+"-"+a.getAttribute("class")+"-"+b}function Z(g,f,B,l){var h;0<b.count(B)&&(h=c.get(B),h||(f=ba(f,"-stagger"),e.addClass(g,f),h=za(a,g,l),h.animationDuration=Math.max(h.animationDuration,0),h.transitionDuration=Math.max(h.transitionDuration,0),e.removeClass(g,f),c.put(B,h)));return h||{}}function I(a){C.push(a);D.waitUntilQuiet(function(){b.flush();c.flush();for(var a=K.offsetWidth+1,d=0;d<C.length;d++)C[d](a);C.length=
0})}function w(c,f,e){f=b.get(e);f||(f=za(a,c,Ma),"infinite"===f.animationIterationCount&&(f.animationIterationCount=1));b.put(e,f);c=f;e=c.animationDelay;f=c.transitionDelay;c.maxDelay=e&&f?Math.max(e,f):e||f;c.maxDuration=Math.max(c.animationDuration*c.animationIterationCount,c.transitionDuration);return c}var B=ha(e),r=0,K=A(g).body,C=[];return function(a,c){function d(){h()}function g(){h(!0)}function h(b){if(!(K||C&&D)){K=!0;D=!1;e.removeClass(a,Y);e.removeClass(a,W);ma(k,!1);ja(k,!1);u(m,function(a){k.style[a[0]]=
""});B(a,c);ca(a,c);if(c.onDone)c.onDone();p&&p.complete(!b)}}function L(a){q.blockTransition&&ja(k,a);q.blockKeyframeAnimation&&ma(k,!!a)}function x(){p=new s({end:d,cancel:g});h();return{$$willAnimate:!1,start:function(){return p},end:d}}function M(){function b(){if(!K){L(!1);u(m,function(a){k.style[a[0]]=a[1]});B(a,c);e.addClass(a,W);if(q.recalculateTimingStyles){fa=k.className+" "+Y;$=z(k,fa);y=w(k,fa,$);Q=y.maxDelay;H=Math.max(Q,0);J=y.maxDuration;if(0===J){h();return}q.hasTransitions=0<y.transitionDuration;
q.hasAnimations=0<y.animationDuration}if(q.applyTransitionDelay||q.applyAnimationDelay){Q="boolean"!==typeof c.delay&&la(c.delay)?parseFloat(c.delay):Q;H=Math.max(Q,0);var l;q.applyTransitionDelay&&(y.transitionDelay=Q,l=[ea,Q+"s"],m.push(l),k.style[l[0]]=l[1]);q.applyAnimationDelay&&(y.animationDelay=Q,l=[ra,Q+"s"],m.push(l),k.style[l[0]]=l[1])}F=1E3*H;G=1E3*J;if(c.easing){var r=c.easing;q.hasTransitions&&(l=O+"TimingFunction",m.push([l,r]),k.style[l]=r);q.hasAnimations&&(l=V+"TimingFunction",m.push([l,
r]),k.style[l]=r)}y.transitionDuration&&p.push(pa);y.animationDuration&&p.push(qa);x=Date.now();a.on(p.join(" "),g);n(d,F+1.5*G);xa(a,c)}}function d(){h()}function g(a){a.stopPropagation();var b=a.originalEvent||a;a=b.$manualTimeStamp||b.timeStamp||Date.now();b=parseFloat(b.elapsedTime.toFixed(3));Math.max(a-x,0)>=F&&b>=J&&(C=!0,h())}if(!K){var x,p=[],l=function(a){if(C)D&&a&&(D=!1,h());else if(D=!a,y.animationDuration)if(a=ma(k,D),D)m.push(a);else{var b=m,c=b.indexOf(a);0<=a&&b.splice(c,1)}},r=0<
U&&(y.transitionDuration&&0===T.transitionDuration||y.animationDuration&&0===T.animationDuration)&&Math.max(T.animationDelay,T.transitionDelay);r?n(b,Math.floor(r*U*1E3),!1):b();t.resume=function(){l(!0)};t.pause=function(){l(!1)}}}var k=A(a);c=ia(c);var m=[],r=a.attr("class"),v=Ea(c),K,D,C,p,t,H,F,J,G;if(0===c.duration||!l.animations&&!l.transitions)return x();var aa=c.event&&X(c.event)?c.event.join(" "):c.event,R="",N="";aa&&c.structural?R=ba(aa,"ng-",!0):aa&&(R=aa);c.addClass&&(N+=ba(c.addClass,
"-add"));c.removeClass&&(N.length&&(N+=" "),N+=ba(c.removeClass,"-remove"));c.applyClassesEarly&&N.length&&(B(a,c),N="");var Y=[R,N].join(" ").trim(),fa=r+" "+Y,W=ba(Y,"-active"),r=v.to&&0<Object.keys(v.to).length;if(!r&&!Y)return x();var $,T;0<c.stagger?(v=parseFloat(c.stagger),T={transitionDelay:v,animationDelay:v,transitionDuration:0,animationDuration:0}):($=z(k,fa),T=Z(k,Y,$,Na));e.addClass(a,Y);c.transitionStyle&&(v=[O,c.transitionStyle],da(k,v),m.push(v));0<=c.duration&&(v=0<k.style[O].length,
v=Aa(c.duration,v),da(k,v),m.push(v));c.keyframeStyle&&(v=[V,c.keyframeStyle],da(k,v),m.push(v));var U=T?0<=c.staggerIndex?c.staggerIndex:b.count($):0;(aa=0===U)&&ja(k,9999);var y=w(k,fa,$),Q=y.maxDelay;H=Math.max(Q,0);J=y.maxDuration;var q={};q.hasTransitions=0<y.transitionDuration;q.hasAnimations=0<y.animationDuration;q.hasTransitionAll=q.hasTransitions&&"all"==y.transitionProperty;q.applyTransitionDuration=r&&(q.hasTransitions&&!q.hasTransitionAll||q.hasAnimations&&!q.hasTransitions);q.applyAnimationDuration=
c.duration&&q.hasAnimations;q.applyTransitionDelay=la(c.delay)&&(q.applyTransitionDuration||q.hasTransitions);q.applyAnimationDelay=la(c.delay)&&q.hasAnimations;q.recalculateTimingStyles=0<N.length;if(q.applyTransitionDuration||q.applyAnimationDuration)J=c.duration?parseFloat(c.duration):J,q.applyTransitionDuration&&(q.hasTransitions=!0,y.transitionDuration=J,v=0<k.style[O+"Property"].length,m.push(Aa(J,v))),q.applyAnimationDuration&&(q.hasAnimations=!0,y.animationDuration=J,m.push([sa,J+"s"]));if(0===
J&&!q.recalculateTimingStyles)return x();null==c.duration&&0<y.transitionDuration&&(q.recalculateTimingStyles=q.recalculateTimingStyles||aa);F=1E3*H;G=1E3*J;c.skipBlocking||(q.blockTransition=0<y.transitionDuration,q.blockKeyframeAnimation=0<y.animationDuration&&0<T.animationDelay&&0===T.animationDuration);wa(a,c);q.blockTransition||ja(k,!1);L(J);return{$$willAnimate:!0,end:d,start:function(){if(!K)return t={end:d,cancel:g,resume:null,pause:null},p=new s(t),I(M),p}}}}]}]).provider("$$animateCssDriver",
["$$animationProvider",function(a){a.drivers.push("$$animateCssDriver");this.$get=["$animateCss","$rootScope","$$AnimateRunner","$rootElement","$document","$sniffer",function(a,c,d,e,s,n){function g(a){return a.replace(/\bng-\S+\b/g,"")}function l(a,b){U(a)&&(a=a.split(" "));U(b)&&(b=b.split(" "));return a.filter(function(a){return-1===b.indexOf(a)}).join(" ")}function D(c,e,z){function D(a){var b={},c=A(a).getBoundingClientRect();u(["width","height","top","left"],function(a){var d=c[a];switch(a){case "top":d+=
I.scrollTop;break;case "left":d+=I.scrollLeft}b[a]=Math.floor(d)+"px"});return b}function s(){var c=g(z.attr("class")||""),d=l(c,t),c=l(t,c),d=a(n,{to:D(z),addClass:"ng-anchor-in "+d,removeClass:"ng-anchor-out "+c,delay:!0});return d.$$willAnimate?d:null}function f(){n.remove();e.removeClass("ng-animate-shim");z.removeClass("ng-animate-shim")}var n=G(A(e).cloneNode(!0)),t=g(n.attr("class")||"");e.addClass("ng-animate-shim");z.addClass("ng-animate-shim");n.addClass("ng-anchor");w.append(n);var h;c=
function(){var c=a(n,{addClass:"ng-anchor-out",delay:!0,from:D(e)});return c.$$willAnimate?c:null}();if(!c&&(h=s(),!h))return f();var L=c||h;return{start:function(){function a(){c&&c.end()}var b,c=L.start();c.done(function(){c=null;if(!h&&(h=s()))return c=h.start(),c.done(function(){c=null;f();b.complete()}),c;f();b.complete()});return b=new d({end:a,cancel:a})}}}function z(a,b,c,e){var g=t(a),f=t(b),l=[];u(e,function(a){(a=D(c,a.out,a["in"]))&&l.push(a)});if(g||f||0!==l.length)return{start:function(){function a(){u(b,
function(a){a.end()})}var b=[];g&&b.push(g.start());f&&b.push(f.start());u(l,function(a){b.push(a.start())});var c=new d({end:a,cancel:a});d.all(b,function(a){c.complete(a)});return c}}}function t(c){var d=c.element,e=c.options||{};c.structural?(e.structural=e.applyClassesEarly=!0,e.event=c.event,"leave"===e.event&&(e.onDone=e.domOperation)):e.event=null;c=a(d,e);return c.$$willAnimate?c:null}if(!n.animations&&!n.transitions)return H;var I=A(s).body;c=A(e);var w=G(I.parentNode===c?I:c);return function(a){return a.from&&
a.to?z(a.from,a.to,a.classes,a.anchors):t(a)}}]}]).provider("$$animateJs",["$animateProvider",function(a){this.$get=["$injector","$$AnimateRunner","$$rAFMutex","$$jqLite",function(b,c,d,e){function s(c){c=X(c)?c:c.split(" ");for(var d=[],e={},z=0;z<c.length;z++){var n=c[z],s=a.$$registeredAnimations[n];s&&!e[n]&&(d.push(b.get(s)),e[n]=!0)}return d}var n=ha(e);return function(a,b,d,e){function t(){e.domOperation();n(a,e)}function A(a,b,d,e,f){switch(d){case "animate":b=[b,e.from,e.to,f];break;case "setClass":b=
[b,r,K,f];break;case "addClass":b=[b,r,f];break;case "removeClass":b=[b,K,f];break;default:b=[b,f]}b.push(e);if(a=a.apply(a,b))if(Ca(a.start)&&(a=a.start()),a instanceof c)a.done(f);else if(Ca(a))return a;return H}function w(a,b,d,e,f){var m=[];u(e,function(e){var g=e[f];g&&m.push(function(){var e,f,m=!1,k=function(a){m||(m=!0,(f||H)(a),e.complete(!a))};e=new c({end:function(){k()},cancel:function(){k(!0)}});f=A(g,a,b,d,function(a){k(!1===a)});return e})});return m}function B(a,b,d,e,f){var m=w(a,
b,d,e,f);if(0===m.length){var g,l;"beforeSetClass"===f?(g=w(a,"removeClass",d,e,"beforeRemoveClass"),l=w(a,"addClass",d,e,"beforeAddClass")):"setClass"===f&&(g=w(a,"removeClass",d,e,"removeClass"),l=w(a,"addClass",d,e,"addClass"));g&&(m=m.concat(g));l&&(m=m.concat(l))}if(0!==m.length)return function(a){var b=[];m.length&&u(m,function(a){b.push(a())});b.length?c.all(b,a):a();return function(a){u(b,function(b){a?b.cancel():b.end()})}}}3===arguments.length&&na(d)&&(e=d,d=null);e=ia(e);d||(d=a.attr("class")||
"",e.addClass&&(d+=" "+e.addClass),e.removeClass&&(d+=" "+e.removeClass));var r=e.addClass,K=e.removeClass,C=s(d),E,f;if(C.length){var F,G;"leave"==b?(G="leave",F="afterLeave"):(G="before"+b.charAt(0).toUpperCase()+b.substr(1),F=b);"enter"!==b&&"move"!==b&&(E=B(a,b,e,C,G));f=B(a,b,e,C,F)}if(E||f)return{start:function(){function b(c){n=!0;t();ca(a,e);k.complete(c)}var d,l=[];E&&l.push(function(a){d=E(a)});l.length?l.push(function(a){t();a(!0)}):t();f&&l.push(function(a){d=f(a)});var n=!1,k=new c({end:function(){n||
((d||H)(void 0),b(void 0))},cancel:function(){n||((d||H)(!0),b(!0))}});c.chain(l,b);return k}}}}]}]).provider("$$animateJsDriver",["$$animationProvider",function(a){a.drivers.push("$$animateJsDriver");this.$get=["$$animateJs","$$AnimateRunner",function(a,c){function d(c){return a(c.element,c.event,c.classes,c.options)}return function(a){if(a.from&&a.to){var b=d(a.from),n=d(a.to);if(b||n)return{start:function(){function a(){return function(){u(d,function(a){a.end()})}}var d=[];b&&d.push(b.start());
n&&d.push(n.start());c.all(d,function(a){e.complete(a)});var e=new c({end:a(),cancel:a()});return e}}}else return d(a)}}]}])})(window,window.angular);
//# sourceMappingURL=angular-animate.min.js.map

'use strict';

angular.module('d3', [])
  .factory('d3', function () {
            var d3;
            var π = Math.PI, ε = 1e-6, d3 = {
                version: "3.0.8"
            }, d3_radians = π / 180, d3_degrees = 180 / π, d3_document = document, d3_window = window;
            function d3_target(d) {
                return d.target;
            }
            function d3_source(d) {
                return d.source;
            }
            var d3_format_decimalPoint = ".", d3_format_thousandsSeparator = ",", d3_format_grouping = [ 3, 3 ];
            if (!Date.now) Date.now = function() {
                return +new Date();
            };
            try {
                d3_document.createElement("div").style.setProperty("opacity", 0, "");
            } catch (error) {
                var d3_style_prototype = d3_window.CSSStyleDeclaration.prototype, d3_style_setProperty = d3_style_prototype.setProperty;
                d3_style_prototype.setProperty = function(name, value, priority) {
                    d3_style_setProperty.call(this, name, value + "", priority);
                };
            }
            function d3_class(ctor, properties) {
                try {
                    for (var key in properties) {
                        Object.defineProperty(ctor.prototype, key, {
                            value: properties[key],
                            enumerable: false
                        });
                    }
                } catch (e) {
                    ctor.prototype = properties;
                }
            }
            var d3_array = d3_arraySlice;
            function d3_arrayCopy(pseudoarray) {
                var i = -1, n = pseudoarray.length, array = [];
                while (++i < n) array.push(pseudoarray[i]);
                return array;
            }
            function d3_arraySlice(pseudoarray) {
                return Array.prototype.slice.call(pseudoarray);
            }
            try {
                d3_array(d3_document.documentElement.childNodes)[0].nodeType;
            } catch (e) {
                d3_array = d3_arrayCopy;
            }
            var d3_arraySubclass = [].__proto__ ? function(array, prototype) {
                array.__proto__ = prototype;
            } : function(array, prototype) {
                for (var property in prototype) array[property] = prototype[property];
            };
            d3.map = function(object) {
                var map = new d3_Map();
                for (var key in object) map.set(key, object[key]);
                return map;
            };
            function d3_Map() {}
            d3_class(d3_Map, {
                has: function(key) {
                    return d3_map_prefix + key in this;
                },
                get: function(key) {
                    return this[d3_map_prefix + key];
                },
                set: function(key, value) {
                    return this[d3_map_prefix + key] = value;
                },
                remove: function(key) {
                    key = d3_map_prefix + key;
                    return key in this && delete this[key];
                },
                keys: function() {
                    var keys = [];
                    this.forEach(function(key) {
                        keys.push(key);
                    });
                    return keys;
                },
                values: function() {
                    var values = [];
                    this.forEach(function(key, value) {
                        values.push(value);
                    });
                    return values;
                },
                entries: function() {
                    var entries = [];
                    this.forEach(function(key, value) {
                        entries.push({
                            key: key,
                            value: value
                        });
                    });
                    return entries;
                },
                forEach: function(f) {
                    for (var key in this) {
                        if (key.charCodeAt(0) === d3_map_prefixCode) {
                            f.call(this, key.substring(1), this[key]);
                        }
                    }
                }
            });
            var d3_map_prefix = "\0", d3_map_prefixCode = d3_map_prefix.charCodeAt(0);
            function d3_identity(d) {
                return d;
            }
            function d3_true() {
                return true;
            }
            function d3_functor(v) {
                return typeof v === "function" ? v : function() {
                    return v;
                };
            }
            d3.functor = d3_functor;
            d3.rebind = function(target, source) {
                var i = 1, n = arguments.length, method;
                while (++i < n) target[method = arguments[i]] = d3_rebind(target, source, source[method]);
                return target;
            };
            function d3_rebind(target, source, method) {
                return function() {
                    var value = method.apply(source, arguments);
                    return value === source ? target : value;
                };
            }
            d3.ascending = function(a, b) {
                return a < b ? -1 : a > b ? 1 : a >= b ? 0 : NaN;
            };
            d3.descending = function(a, b) {
                return b < a ? -1 : b > a ? 1 : b >= a ? 0 : NaN;
            };
            d3.mean = function(array, f) {
                var n = array.length, a, m = 0, i = -1, j = 0;
                if (arguments.length === 1) {
                    while (++i < n) if (d3_number(a = array[i])) m += (a - m) / ++j;
                } else {
                    while (++i < n) if (d3_number(a = f.call(array, array[i], i))) m += (a - m) / ++j;
                }
                return j ? m : undefined;
            };
            d3.median = function(array, f) {
                if (arguments.length > 1) array = array.map(f);
                array = array.filter(d3_number);
                return array.length ? d3.quantile(array.sort(d3.ascending), .5) : undefined;
            };
            d3.min = function(array, f) {
                var i = -1, n = array.length, a, b;
                if (arguments.length === 1) {
                    while (++i < n && ((a = array[i]) == null || a != a)) a = undefined;
                    while (++i < n) if ((b = array[i]) != null && a > b) a = b;
                } else {
                    while (++i < n && ((a = f.call(array, array[i], i)) == null || a != a)) a = undefined;
                    while (++i < n) if ((b = f.call(array, array[i], i)) != null && a > b) a = b;
                }
                return a;
            };
            d3.max = function(array, f) {
                var i = -1, n = array.length, a, b;
                if (arguments.length === 1) {
                    while (++i < n && ((a = array[i]) == null || a != a)) a = undefined;
                    while (++i < n) if ((b = array[i]) != null && b > a) a = b;
                } else {
                    while (++i < n && ((a = f.call(array, array[i], i)) == null || a != a)) a = undefined;
                    while (++i < n) if ((b = f.call(array, array[i], i)) != null && b > a) a = b;
                }
                return a;
            };
            d3.extent = function(array, f) {
                var i = -1, n = array.length, a, b, c;
                if (arguments.length === 1) {
                    while (++i < n && ((a = c = array[i]) == null || a != a)) a = c = undefined;
                    while (++i < n) if ((b = array[i]) != null) {
                        if (a > b) a = b;
                        if (c < b) c = b;
                    }
                } else {
                    while (++i < n && ((a = c = f.call(array, array[i], i)) == null || a != a)) a = undefined;
                    while (++i < n) if ((b = f.call(array, array[i], i)) != null) {
                        if (a > b) a = b;
                        if (c < b) c = b;
                    }
                }
                return [ a, c ];
            };
            d3.random = {
                normal: function(µ, σ) {
                    var n = arguments.length;
                    if (n < 2) σ = 1;
                    if (n < 1) µ = 0;
                    return function() {
                        var x, y, r;
                        do {
                            x = Math.random() * 2 - 1;
                            y = Math.random() * 2 - 1;
                            r = x * x + y * y;
                        } while (!r || r > 1);
                        return µ + σ * x * Math.sqrt(-2 * Math.log(r) / r);
                    };
                },
                logNormal: function() {
                    var random = d3.random.normal.apply(d3, arguments);
                    return function() {
                        return Math.exp(random());
                    };
                },
                irwinHall: function(m) {
                    return function() {
                        for (var s = 0, j = 0; j < m; j++) s += Math.random();
                        return s / m;
                    };
                }
            };
            function d3_number(x) {
                return x != null && !isNaN(x);
            }
            d3.sum = function(array, f) {
                var s = 0, n = array.length, a, i = -1;
                if (arguments.length === 1) {
                    while (++i < n) if (!isNaN(a = +array[i])) s += a;
                } else {
                    while (++i < n) if (!isNaN(a = +f.call(array, array[i], i))) s += a;
                }
                return s;
            };
            d3.quantile = function(values, p) {
                var H = (values.length - 1) * p + 1, h = Math.floor(H), v = +values[h - 1], e = H - h;
                return e ? v + e * (values[h] - v) : v;
            };
            d3.shuffle = function(array) {
                var m = array.length, t, i;
                while (m) {
                    i = Math.random() * m-- | 0;
                    t = array[m], array[m] = array[i], array[i] = t;
                }
                return array;
            };
            d3.transpose = function(matrix) {
                return d3.zip.apply(d3, matrix);
            };
            d3.zip = function() {
                if (!(n = arguments.length)) return [];
                for (var i = -1, m = d3.min(arguments, d3_zipLength), zips = new Array(m); ++i < m; ) {
                    for (var j = -1, n, zip = zips[i] = new Array(n); ++j < n; ) {
                        zip[j] = arguments[j][i];
                    }
                }
                return zips;
            };
            function d3_zipLength(d) {
                return d.length;
            }
            d3.bisector = function(f) {
                return {
                    left: function(a, x, lo, hi) {
                        if (arguments.length < 3) lo = 0;
                        if (arguments.length < 4) hi = a.length;
                        while (lo < hi) {
                            var mid = lo + hi >>> 1;
                            if (f.call(a, a[mid], mid) < x) lo = mid + 1; else hi = mid;
                        }
                        return lo;
                    },
                    right: function(a, x, lo, hi) {
                        if (arguments.length < 3) lo = 0;
                        if (arguments.length < 4) hi = a.length;
                        while (lo < hi) {
                            var mid = lo + hi >>> 1;
                            if (x < f.call(a, a[mid], mid)) hi = mid; else lo = mid + 1;
                        }
                        return lo;
                    }
                };
            };
            var d3_bisector = d3.bisector(function(d) {
                return d;
            });
            d3.bisectLeft = d3_bisector.left;
            d3.bisect = d3.bisectRight = d3_bisector.right;
            d3.nest = function() {
                var nest = {}, keys = [], sortKeys = [], sortValues, rollup;
                function map(array, depth) {
                    if (depth >= keys.length) return rollup ? rollup.call(nest, array) : sortValues ? array.sort(sortValues) : array;
                    var i = -1, n = array.length, key = keys[depth++], keyValue, object, valuesByKey = new d3_Map(), values, o = {};
                    while (++i < n) {
                        if (values = valuesByKey.get(keyValue = key(object = array[i]))) {
                            values.push(object);
                        } else {
                            valuesByKey.set(keyValue, [ object ]);
                        }
                    }
                    valuesByKey.forEach(function(keyValue, values) {
                        o[keyValue] = map(values, depth);
                    });
                    return o;
                }
                function entries(map, depth) {
                    if (depth >= keys.length) return map;
                    var a = [], sortKey = sortKeys[depth++], key;
                    for (key in map) {
                        a.push({
                            key: key,
                            values: entries(map[key], depth)
                        });
                    }
                    if (sortKey) a.sort(function(a, b) {
                        return sortKey(a.key, b.key);
                    });
                    return a;
                }
                nest.map = function(array) {
                    return map(array, 0);
                };
                nest.entries = function(array) {
                    return entries(map(array, 0), 0);
                };
                nest.key = function(d) {
                    keys.push(d);
                    return nest;
                };
                nest.sortKeys = function(order) {
                    sortKeys[keys.length - 1] = order;
                    return nest;
                };
                nest.sortValues = function(order) {
                    sortValues = order;
                    return nest;
                };
                nest.rollup = function(f) {
                    rollup = f;
                    return nest;
                };
                return nest;
            };
            d3.keys = function(map) {
                var keys = [];
                for (var key in map) keys.push(key);
                return keys;
            };
            d3.values = function(map) {
                var values = [];
                for (var key in map) values.push(map[key]);
                return values;
            };
            d3.entries = function(map) {
                var entries = [];
                for (var key in map) entries.push({
                    key: key,
                    value: map[key]
                });
                return entries;
            };
            d3.permute = function(array, indexes) {
                var permutes = [], i = -1, n = indexes.length;
                while (++i < n) permutes[i] = array[indexes[i]];
                return permutes;
            };
            d3.merge = function(arrays) {
                return Array.prototype.concat.apply([], arrays);
            };
            function d3_collapse(s) {
                return s.trim().replace(/\s+/g, " ");
            }
            d3.range = function(start, stop, step) {
                if (arguments.length < 3) {
                    step = 1;
                    if (arguments.length < 2) {
                        stop = start;
                        start = 0;
                    }
                }
                if ((stop - start) / step === Infinity) throw new Error("infinite range");
                var range = [], k = d3_range_integerScale(Math.abs(step)), i = -1, j;
                start *= k, stop *= k, step *= k;
                if (step < 0) while ((j = start + step * ++i) > stop) range.push(j / k); else while ((j = start + step * ++i) < stop) range.push(j / k);
                return range;
            };
            function d3_range_integerScale(x) {
                var k = 1;
                while (x * k % 1) k *= 10;
                return k;
            }
            d3.requote = function(s) {
                return s.replace(d3_requote_re, "\\$&");
            };
            var d3_requote_re = /[\\\^\$\*\+\?\|\[\]\(\)\.\{\}]/g;
            d3.round = function(x, n) {
                return n ? Math.round(x * (n = Math.pow(10, n))) / n : Math.round(x);
            };
            d3.xhr = function(url, mimeType, callback) {
                var xhr = {}, dispatch = d3.dispatch("progress", "load", "error"), headers = {}, response = d3_identity, request = new (d3_window.XDomainRequest && /^(http(s)?:)?\/\//.test(url) ? XDomainRequest : XMLHttpRequest)();
                "onload" in request ? request.onload = request.onerror = respond : request.onreadystatechange = function() {
                    request.readyState > 3 && respond();
                };
                function respond() {
                    var s = request.status;
                    !s && request.responseText || s >= 200 && s < 300 || s === 304 ? dispatch.load.call(xhr, response.call(xhr, request)) : dispatch.error.call(xhr, request);
                }
                request.onprogress = function(event) {
                    var o = d3.event;
                    d3.event = event;
                    try {
                        dispatch.progress.call(xhr, request);
                    } finally {
                        d3.event = o;
                    }
                };
                xhr.header = function(name, value) {
                    name = (name + "").toLowerCase();
                    if (arguments.length < 2) return headers[name];
                    if (value == null) delete headers[name]; else headers[name] = value + "";
                    return xhr;
                };
                xhr.mimeType = function(value) {
                    if (!arguments.length) return mimeType;
                    mimeType = value == null ? null : value + "";
                    return xhr;
                };
                xhr.response = function(value) {
                    response = value;
                    return xhr;
                };
                [ "get", "post" ].forEach(function(method) {
                    xhr[method] = function() {
                        return xhr.send.apply(xhr, [ method ].concat(d3_array(arguments)));
                    };
                });
                xhr.send = function(method, data, callback) {
                    if (arguments.length === 2 && typeof data === "function") callback = data, data = null;
                    request.open(method, url, true);
                    if (mimeType != null && !("accept" in headers)) headers["accept"] = mimeType + ",*/*";
                    if (request.setRequestHeader) for (var name in headers) request.setRequestHeader(name, headers[name]);
                    if (mimeType != null && request.overrideMimeType) request.overrideMimeType(mimeType);
                    if (callback != null) xhr.on("error", callback).on("load", function(request) {
                        callback(null, request);
                    });
                    request.send(data == null ? null : data);
                    return xhr;
                };
                xhr.abort = function() {
                    request.abort();
                    return xhr;
                };
                d3.rebind(xhr, dispatch, "on");
                if (arguments.length === 2 && typeof mimeType === "function") callback = mimeType,
                    mimeType = null;
                return callback == null ? xhr : xhr.get(d3_xhr_fixCallback(callback));
            };
            function d3_xhr_fixCallback(callback) {
                return callback.length === 1 ? function(error, request) {
                    callback(error == null ? request : null);
                } : callback;
            }
            d3.text = function() {
                return d3.xhr.apply(d3, arguments).response(d3_text);
            };
            function d3_text(request) {
                return request.responseText;
            }
            d3.json = function(url, callback) {
                return d3.xhr(url, "application/json", callback).response(d3_json);
            };
            function d3_json(request) {
                return JSON.parse(request.responseText);
            }
            d3.html = function(url, callback) {
                return d3.xhr(url, "text/html", callback).response(d3_html);
            };
            function d3_html(request) {
                var range = d3_document.createRange();
                range.selectNode(d3_document.body);
                return range.createContextualFragment(request.responseText);
            }
            d3.xml = function() {
                return d3.xhr.apply(d3, arguments).response(d3_xml);
            };
            function d3_xml(request) {
                return request.responseXML;
            }
            var d3_nsPrefix = {
                svg: "http://www.w3.org/2000/svg",
                xhtml: "http://www.w3.org/1999/xhtml",
                xlink: "http://www.w3.org/1999/xlink",
                xml: "http://www.w3.org/XML/1998/namespace",
                xmlns: "http://www.w3.org/2000/xmlns/"
            };
            d3.ns = {
                prefix: d3_nsPrefix,
                qualify: function(name) {
                    var i = name.indexOf(":"), prefix = name;
                    if (i >= 0) {
                        prefix = name.substring(0, i);
                        name = name.substring(i + 1);
                    }
                    return d3_nsPrefix.hasOwnProperty(prefix) ? {
                        space: d3_nsPrefix[prefix],
                        local: name
                    } : name;
                }
            };
            d3.dispatch = function() {
                var dispatch = new d3_dispatch(), i = -1, n = arguments.length;
                while (++i < n) dispatch[arguments[i]] = d3_dispatch_event(dispatch);
                return dispatch;
            };
            function d3_dispatch() {}
            d3_dispatch.prototype.on = function(type, listener) {
                var i = type.indexOf("."), name = "";
                if (i > 0) {
                    name = type.substring(i + 1);
                    type = type.substring(0, i);
                }
                return arguments.length < 2 ? this[type].on(name) : this[type].on(name, listener);
            };
            function d3_dispatch_event(dispatch) {
                var listeners = [], listenerByName = new d3_Map();
                function event() {
                    var z = listeners, i = -1, n = z.length, l;
                    while (++i < n) if (l = z[i].on) l.apply(this, arguments);
                    return dispatch;
                }
                event.on = function(name, listener) {
                    var l = listenerByName.get(name), i;
                    if (arguments.length < 2) return l && l.on;
                    if (l) {
                        l.on = null;
                        listeners = listeners.slice(0, i = listeners.indexOf(l)).concat(listeners.slice(i + 1));
                        listenerByName.remove(name);
                    }
                    if (listener) listeners.push(listenerByName.set(name, {
                        on: listener
                    }));
                    return dispatch;
                };
                return event;
            }
            d3.format = function(specifier) {
                var match = d3_format_re.exec(specifier), fill = match[1] || " ", align = match[2] || ">", sign = match[3] || "", basePrefix = match[4] || "", zfill = match[5], width = +match[6], comma = match[7], precision = match[8], type = match[9], scale = 1, suffix = "", integer = false;
                if (precision) precision = +precision.substring(1);
                if (zfill || fill === "0" && align === "=") {
                    zfill = fill = "0";
                    align = "=";
                    if (comma) width -= Math.floor((width - 1) / 4);
                }
                switch (type) {
                    case "n":
                        comma = true;
                        type = "g";
                        break;

                    case "%":
                        scale = 100;
                        suffix = "%";
                        type = "f";
                        break;

                    case "p":
                        scale = 100;
                        suffix = "%";
                        type = "r";
                        break;

                    case "b":
                    case "o":
                    case "x":
                    case "X":
                        if (basePrefix) basePrefix = "0" + type.toLowerCase();

                    case "c":
                    case "d":
                        integer = true;
                        precision = 0;
                        break;

                    case "s":
                        scale = -1;
                        type = "r";
                        break;
                }
                if (basePrefix === "#") basePrefix = "";
                if (type == "r" && !precision) type = "g";
                type = d3_format_types.get(type) || d3_format_typeDefault;
                var zcomma = zfill && comma;
                return function(value) {
                    if (integer && value % 1) return "";
                    var negative = value < 0 || value === 0 && 1 / value < 0 ? (value = -value, "-") : sign;
                    if (scale < 0) {
                        var prefix = d3.formatPrefix(value, precision);
                        value = prefix.scale(value);
                        suffix = prefix.symbol;
                    } else {
                        value *= scale;
                    }
                    value = type(value, precision);
                    if (!zfill && comma) value = d3_format_group(value);
                    var length = basePrefix.length + value.length + (zcomma ? 0 : negative.length), padding = length < width ? new Array(length = width - length + 1).join(fill) : "";
                    if (zcomma) value = d3_format_group(padding + value);
                    if (d3_format_decimalPoint) value.replace(".", d3_format_decimalPoint);
                    negative += basePrefix;
                    return (align === "<" ? negative + value + padding : align === ">" ? padding + negative + value : align === "^" ? padding.substring(0, length >>= 1) + negative + value + padding.substring(length) : negative + (zcomma ? value : padding + value)) + suffix;
                };
            };
            var d3_format_re = /(?:([^{])?([<>=^]))?([+\- ])?(#)?(0)?([0-9]+)?(,)?(\.[0-9]+)?([a-zA-Z%])?/;
            var d3_format_types = d3.map({
                b: function(x) {
                    return x.toString(2);
                },
                c: function(x) {
                    return String.fromCharCode(x);
                },
                o: function(x) {
                    return x.toString(8);
                },
                x: function(x) {
                    return x.toString(16);
                },
                X: function(x) {
                    return x.toString(16).toUpperCase();
                },
                g: function(x, p) {
                    return x.toPrecision(p);
                },
                e: function(x, p) {
                    return x.toExponential(p);
                },
                f: function(x, p) {
                    return x.toFixed(p);
                },
                r: function(x, p) {
                    return (x = d3.round(x, d3_format_precision(x, p))).toFixed(Math.max(0, Math.min(20, d3_format_precision(x * (1 + 1e-15), p))));
                }
            });
            function d3_format_precision(x, p) {
                return p - (x ? Math.ceil(Math.log(x) / Math.LN10) : 1);
            }
            function d3_format_typeDefault(x) {
                return x + "";
            }
            var d3_format_group = d3_identity;
            if (d3_format_grouping) {
                var d3_format_groupingLength = d3_format_grouping.length;
                d3_format_group = function(value) {
                    var i = value.lastIndexOf("."), f = i >= 0 ? "." + value.substring(i + 1) : (i = value.length,
                        ""), t = [], j = 0, g = d3_format_grouping[0];
                    while (i > 0 && g > 0) {
                        t.push(value.substring(i -= g, i + g));
                        g = d3_format_grouping[j = (j + 1) % d3_format_groupingLength];
                    }
                    return t.reverse().join(d3_format_thousandsSeparator || "") + f;
                };
            }
            var d3_formatPrefixes = [ "y", "z", "a", "f", "p", "n", "µ", "m", "", "k", "M", "G", "T", "P", "E", "Z", "Y" ].map(d3_formatPrefix);
            d3.formatPrefix = function(value, precision) {
                var i = 0;
                if (value) {
                    if (value < 0) value *= -1;
                    if (precision) value = d3.round(value, d3_format_precision(value, precision));
                    i = 1 + Math.floor(1e-12 + Math.log(value) / Math.LN10);
                    i = Math.max(-24, Math.min(24, Math.floor((i <= 0 ? i + 1 : i - 1) / 3) * 3));
                }
                return d3_formatPrefixes[8 + i / 3];
            };
            function d3_formatPrefix(d, i) {
                var k = Math.pow(10, Math.abs(8 - i) * 3);
                return {
                    scale: i > 8 ? function(d) {
                        return d / k;
                    } : function(d) {
                        return d * k;
                    },
                    symbol: d
                };
            }
            var d3_ease_default = function() {
                return d3_identity;
            };
            var d3_ease = d3.map({
                linear: d3_ease_default,
                poly: d3_ease_poly,
                quad: function() {
                    return d3_ease_quad;
                },
                cubic: function() {
                    return d3_ease_cubic;
                },
                sin: function() {
                    return d3_ease_sin;
                },
                exp: function() {
                    return d3_ease_exp;
                },
                circle: function() {
                    return d3_ease_circle;
                },
                elastic: d3_ease_elastic,
                back: d3_ease_back,
                bounce: function() {
                    return d3_ease_bounce;
                }
            });
            var d3_ease_mode = d3.map({
                "in": d3_identity,
                out: d3_ease_reverse,
                "in-out": d3_ease_reflect,
                "out-in": function(f) {
                    return d3_ease_reflect(d3_ease_reverse(f));
                }
            });
            d3.ease = function(name) {
                var i = name.indexOf("-"), t = i >= 0 ? name.substring(0, i) : name, m = i >= 0 ? name.substring(i + 1) : "in";
                t = d3_ease.get(t) || d3_ease_default;
                m = d3_ease_mode.get(m) || d3_identity;
                return d3_ease_clamp(m(t.apply(null, Array.prototype.slice.call(arguments, 1))));
            };
            function d3_ease_clamp(f) {
                return function(t) {
                    return t <= 0 ? 0 : t >= 1 ? 1 : f(t);
                };
            }
            function d3_ease_reverse(f) {
                return function(t) {
                    return 1 - f(1 - t);
                };
            }
            function d3_ease_reflect(f) {
                return function(t) {
                    return .5 * (t < .5 ? f(2 * t) : 2 - f(2 - 2 * t));
                };
            }
            function d3_ease_quad(t) {
                return t * t;
            }
            function d3_ease_cubic(t) {
                return t * t * t;
            }
            function d3_ease_cubicInOut(t) {
                if (t <= 0) return 0;
                if (t >= 1) return 1;
                var t2 = t * t, t3 = t2 * t;
                return 4 * (t < .5 ? t3 : 3 * (t - t2) + t3 - .75);
            }
            function d3_ease_poly(e) {
                return function(t) {
                    return Math.pow(t, e);
                };
            }
            function d3_ease_sin(t) {
                return 1 - Math.cos(t * π / 2);
            }
            function d3_ease_exp(t) {
                return Math.pow(2, 10 * (t - 1));
            }
            function d3_ease_circle(t) {
                return 1 - Math.sqrt(1 - t * t);
            }
            function d3_ease_elastic(a, p) {
                var s;
                if (arguments.length < 2) p = .45;
                if (arguments.length) s = p / (2 * π) * Math.asin(1 / a); else a = 1, s = p / 4;
                return function(t) {
                    return 1 + a * Math.pow(2, 10 * -t) * Math.sin((t - s) * 2 * π / p);
                };
            }
            function d3_ease_back(s) {
                if (!s) s = 1.70158;
                return function(t) {
                    return t * t * ((s + 1) * t - s);
                };
            }
            function d3_ease_bounce(t) {
                return t < 1 / 2.75 ? 7.5625 * t * t : t < 2 / 2.75 ? 7.5625 * (t -= 1.5 / 2.75) * t + .75 : t < 2.5 / 2.75 ? 7.5625 * (t -= 2.25 / 2.75) * t + .9375 : 7.5625 * (t -= 2.625 / 2.75) * t + .984375;
            }
            d3.event = null;
            function d3_eventCancel() {
                d3.event.stopPropagation();
                d3.event.preventDefault();
            }
            function d3_eventSource() {
                var e = d3.event, s;
                while (s = e.sourceEvent) e = s;
                return e;
            }
            function d3_eventDispatch(target) {
                var dispatch = new d3_dispatch(), i = 0, n = arguments.length;
                while (++i < n) dispatch[arguments[i]] = d3_dispatch_event(dispatch);
                dispatch.of = function(thiz, argumentz) {
                    return function(e1) {
                        try {
                            var e0 = e1.sourceEvent = d3.event;
                            e1.target = target;
                            d3.event = e1;
                            dispatch[e1.type].apply(thiz, argumentz);
                        } finally {
                            d3.event = e0;
                        }
                    };
                };
                return dispatch;
            }
            d3.transform = function(string) {
                var g = d3_document.createElementNS(d3.ns.prefix.svg, "g");
                return (d3.transform = function(string) {
                    g.setAttribute("transform", string);
                    var t = g.transform.baseVal.consolidate();
                    return new d3_transform(t ? t.matrix : d3_transformIdentity);
                })(string);
            };
            function d3_transform(m) {
                var r0 = [ m.a, m.b ], r1 = [ m.c, m.d ], kx = d3_transformNormalize(r0), kz = d3_transformDot(r0, r1), ky = d3_transformNormalize(d3_transformCombine(r1, r0, -kz)) || 0;
                if (r0[0] * r1[1] < r1[0] * r0[1]) {
                    r0[0] *= -1;
                    r0[1] *= -1;
                    kx *= -1;
                    kz *= -1;
                }
                this.rotate = (kx ? Math.atan2(r0[1], r0[0]) : Math.atan2(-r1[0], r1[1])) * d3_degrees;
                this.translate = [ m.e, m.f ];
                this.scale = [ kx, ky ];
                this.skew = ky ? Math.atan2(kz, ky) * d3_degrees : 0;
            }
            d3_transform.prototype.toString = function() {
                return "translate(" + this.translate + ")rotate(" + this.rotate + ")skewX(" + this.skew + ")scale(" + this.scale + ")";
            };
            function d3_transformDot(a, b) {
                return a[0] * b[0] + a[1] * b[1];
            }
            function d3_transformNormalize(a) {
                var k = Math.sqrt(d3_transformDot(a, a));
                if (k) {
                    a[0] /= k;
                    a[1] /= k;
                }
                return k;
            }
            function d3_transformCombine(a, b, k) {
                a[0] += k * b[0];
                a[1] += k * b[1];
                return a;
            }
            var d3_transformIdentity = {
                a: 1,
                b: 0,
                c: 0,
                d: 1,
                e: 0,
                f: 0
            };
            d3.interpolate = function(a, b) {
                var i = d3.interpolators.length, f;
                while (--i >= 0 && !(f = d3.interpolators[i](a, b))) ;
                return f;
            };
            d3.interpolateNumber = function(a, b) {
                b -= a;
                return function(t) {
                    return a + b * t;
                };
            };
            d3.interpolateRound = function(a, b) {
                b -= a;
                return function(t) {
                    return Math.round(a + b * t);
                };
            };
            d3.interpolateString = function(a, b) {
                var m, i, j, s0 = 0, s1 = 0, s = [], q = [], n, o;
                d3_interpolate_number.lastIndex = 0;
                for (i = 0; m = d3_interpolate_number.exec(b); ++i) {
                    if (m.index) s.push(b.substring(s0, s1 = m.index));
                    q.push({
                        i: s.length,
                        x: m[0]
                    });
                    s.push(null);
                    s0 = d3_interpolate_number.lastIndex;
                }
                if (s0 < b.length) s.push(b.substring(s0));
                for (i = 0, n = q.length; (m = d3_interpolate_number.exec(a)) && i < n; ++i) {
                    o = q[i];
                    if (o.x == m[0]) {
                        if (o.i) {
                            if (s[o.i + 1] == null) {
                                s[o.i - 1] += o.x;
                                s.splice(o.i, 1);
                                for (j = i + 1; j < n; ++j) q[j].i--;
                            } else {
                                s[o.i - 1] += o.x + s[o.i + 1];
                                s.splice(o.i, 2);
                                for (j = i + 1; j < n; ++j) q[j].i -= 2;
                            }
                        } else {
                            if (s[o.i + 1] == null) {
                                s[o.i] = o.x;
                            } else {
                                s[o.i] = o.x + s[o.i + 1];
                                s.splice(o.i + 1, 1);
                                for (j = i + 1; j < n; ++j) q[j].i--;
                            }
                        }
                        q.splice(i, 1);
                        n--;
                        i--;
                    } else {
                        o.x = d3.interpolateNumber(parseFloat(m[0]), parseFloat(o.x));
                    }
                }
                while (i < n) {
                    o = q.pop();
                    if (s[o.i + 1] == null) {
                        s[o.i] = o.x;
                    } else {
                        s[o.i] = o.x + s[o.i + 1];
                        s.splice(o.i + 1, 1);
                    }
                    n--;
                }
                if (s.length === 1) {
                    return s[0] == null ? q[0].x : function() {
                        return b;
                    };
                }
                return function(t) {
                    for (i = 0; i < n; ++i) s[(o = q[i]).i] = o.x(t);
                    return s.join("");
                };
            };
            d3.interpolateTransform = function(a, b) {
                var s = [], q = [], n, A = d3.transform(a), B = d3.transform(b), ta = A.translate, tb = B.translate, ra = A.rotate, rb = B.rotate, wa = A.skew, wb = B.skew, ka = A.scale, kb = B.scale;
                if (ta[0] != tb[0] || ta[1] != tb[1]) {
                    s.push("translate(", null, ",", null, ")");
                    q.push({
                        i: 1,
                        x: d3.interpolateNumber(ta[0], tb[0])
                    }, {
                        i: 3,
                        x: d3.interpolateNumber(ta[1], tb[1])
                    });
                } else if (tb[0] || tb[1]) {
                    s.push("translate(" + tb + ")");
                } else {
                    s.push("");
                }
                if (ra != rb) {
                    if (ra - rb > 180) rb += 360; else if (rb - ra > 180) ra += 360;
                    q.push({
                        i: s.push(s.pop() + "rotate(", null, ")") - 2,
                        x: d3.interpolateNumber(ra, rb)
                    });
                } else if (rb) {
                    s.push(s.pop() + "rotate(" + rb + ")");
                }
                if (wa != wb) {
                    q.push({
                        i: s.push(s.pop() + "skewX(", null, ")") - 2,
                        x: d3.interpolateNumber(wa, wb)
                    });
                } else if (wb) {
                    s.push(s.pop() + "skewX(" + wb + ")");
                }
                if (ka[0] != kb[0] || ka[1] != kb[1]) {
                    n = s.push(s.pop() + "scale(", null, ",", null, ")");
                    q.push({
                        i: n - 4,
                        x: d3.interpolateNumber(ka[0], kb[0])
                    }, {
                        i: n - 2,
                        x: d3.interpolateNumber(ka[1], kb[1])
                    });
                } else if (kb[0] != 1 || kb[1] != 1) {
                    s.push(s.pop() + "scale(" + kb + ")");
                }
                n = q.length;
                return function(t) {
                    var i = -1, o;
                    while (++i < n) s[(o = q[i]).i] = o.x(t);
                    return s.join("");
                };
            };
            d3.interpolateRgb = function(a, b) {
                a = d3.rgb(a);
                b = d3.rgb(b);
                var ar = a.r, ag = a.g, ab = a.b, br = b.r - ar, bg = b.g - ag, bb = b.b - ab;
                return function(t) {
                    return "#" + d3_rgb_hex(Math.round(ar + br * t)) + d3_rgb_hex(Math.round(ag + bg * t)) + d3_rgb_hex(Math.round(ab + bb * t));
                };
            };
            d3.interpolateHsl = function(a, b) {
                a = d3.hsl(a);
                b = d3.hsl(b);
                var h0 = a.h, s0 = a.s, l0 = a.l, h1 = b.h - h0, s1 = b.s - s0, l1 = b.l - l0;
                if (h1 > 180) h1 -= 360; else if (h1 < -180) h1 += 360;
                return function(t) {
                    return d3_hsl_rgb(h0 + h1 * t, s0 + s1 * t, l0 + l1 * t) + "";
                };
            };
            d3.interpolateLab = function(a, b) {
                a = d3.lab(a);
                b = d3.lab(b);
                var al = a.l, aa = a.a, ab = a.b, bl = b.l - al, ba = b.a - aa, bb = b.b - ab;
                return function(t) {
                    return d3_lab_rgb(al + bl * t, aa + ba * t, ab + bb * t) + "";
                };
            };
            d3.interpolateHcl = function(a, b) {
                a = d3.hcl(a);
                b = d3.hcl(b);
                var ah = a.h, ac = a.c, al = a.l, bh = b.h - ah, bc = b.c - ac, bl = b.l - al;
                if (bh > 180) bh -= 360; else if (bh < -180) bh += 360;
                return function(t) {
                    return d3_hcl_lab(ah + bh * t, ac + bc * t, al + bl * t) + "";
                };
            };
            d3.interpolateArray = function(a, b) {
                var x = [], c = [], na = a.length, nb = b.length, n0 = Math.min(a.length, b.length), i;
                for (i = 0; i < n0; ++i) x.push(d3.interpolate(a[i], b[i]));
                for (;i < na; ++i) c[i] = a[i];
                for (;i < nb; ++i) c[i] = b[i];
                return function(t) {
                    for (i = 0; i < n0; ++i) c[i] = x[i](t);
                    return c;
                };
            };
            d3.interpolateObject = function(a, b) {
                var i = {}, c = {}, k;
                for (k in a) {
                    if (k in b) {
                        i[k] = d3_interpolateByName(k)(a[k], b[k]);
                    } else {
                        c[k] = a[k];
                    }
                }
                for (k in b) {
                    if (!(k in a)) {
                        c[k] = b[k];
                    }
                }
                return function(t) {
                    for (k in i) c[k] = i[k](t);
                    return c;
                };
            };
            var d3_interpolate_number = /[-+]?(?:\d+\.?\d*|\.?\d+)(?:[eE][-+]?\d+)?/g;
            function d3_interpolateByName(name) {
                return name == "transform" ? d3.interpolateTransform : d3.interpolate;
            }
            d3.interpolators = [ d3.interpolateObject, function(a, b) {
                return b instanceof Array && d3.interpolateArray(a, b);
            }, function(a, b) {
                return (typeof a === "string" || typeof b === "string") && d3.interpolateString(a + "", b + "");
            }, function(a, b) {
                return (typeof b === "string" ? d3_rgb_names.has(b) || /^(#|rgb\(|hsl\()/.test(b) : b instanceof d3_Color) && d3.interpolateRgb(a, b);
            }, function(a, b) {
                return !isNaN(a = +a) && !isNaN(b = +b) && d3.interpolateNumber(a, b);
            } ];
            function d3_uninterpolateNumber(a, b) {
                b = b - (a = +a) ? 1 / (b - a) : 0;
                return function(x) {
                    return (x - a) * b;
                };
            }
            function d3_uninterpolateClamp(a, b) {
                b = b - (a = +a) ? 1 / (b - a) : 0;
                return function(x) {
                    return Math.max(0, Math.min(1, (x - a) * b));
                };
            }
            function d3_Color() {}
            d3_Color.prototype.toString = function() {
                return this.rgb() + "";
            };
            d3.rgb = function(r, g, b) {
                return arguments.length === 1 ? r instanceof d3_Rgb ? d3_rgb(r.r, r.g, r.b) : d3_rgb_parse("" + r, d3_rgb, d3_hsl_rgb) : d3_rgb(~~r, ~~g, ~~b);
            };
            function d3_rgb(r, g, b) {
                return new d3_Rgb(r, g, b);
            }
            function d3_Rgb(r, g, b) {
                this.r = r;
                this.g = g;
                this.b = b;
            }
            var d3_rgbPrototype = d3_Rgb.prototype = new d3_Color();
            d3_rgbPrototype.brighter = function(k) {
                k = Math.pow(.7, arguments.length ? k : 1);
                var r = this.r, g = this.g, b = this.b, i = 30;
                if (!r && !g && !b) return d3_rgb(i, i, i);
                if (r && r < i) r = i;
                if (g && g < i) g = i;
                if (b && b < i) b = i;
                return d3_rgb(Math.min(255, Math.floor(r / k)), Math.min(255, Math.floor(g / k)), Math.min(255, Math.floor(b / k)));
            };
            d3_rgbPrototype.darker = function(k) {
                k = Math.pow(.7, arguments.length ? k : 1);
                return d3_rgb(Math.floor(k * this.r), Math.floor(k * this.g), Math.floor(k * this.b));
            };
            d3_rgbPrototype.hsl = function() {
                return d3_rgb_hsl(this.r, this.g, this.b);
            };
            d3_rgbPrototype.toString = function() {
                return "#" + d3_rgb_hex(this.r) + d3_rgb_hex(this.g) + d3_rgb_hex(this.b);
            };
            function d3_rgb_hex(v) {
                return v < 16 ? "0" + Math.max(0, v).toString(16) : Math.min(255, v).toString(16);
            }
            function d3_rgb_parse(format, rgb, hsl) {
                var r = 0, g = 0, b = 0, m1, m2, name;
                m1 = /([a-z]+)\((.*)\)/i.exec(format);
                if (m1) {
                    m2 = m1[2].split(",");
                    switch (m1[1]) {
                        case "hsl":
                        {
                            return hsl(parseFloat(m2[0]), parseFloat(m2[1]) / 100, parseFloat(m2[2]) / 100);
                        }

                        case "rgb":
                        {
                            return rgb(d3_rgb_parseNumber(m2[0]), d3_rgb_parseNumber(m2[1]), d3_rgb_parseNumber(m2[2]));
                        }
                    }
                }
                if (name = d3_rgb_names.get(format)) return rgb(name.r, name.g, name.b);
                if (format != null && format.charAt(0) === "#") {
                    if (format.length === 4) {
                        r = format.charAt(1);
                        r += r;
                        g = format.charAt(2);
                        g += g;
                        b = format.charAt(3);
                        b += b;
                    } else if (format.length === 7) {
                        r = format.substring(1, 3);
                        g = format.substring(3, 5);
                        b = format.substring(5, 7);
                    }
                    r = parseInt(r, 16);
                    g = parseInt(g, 16);
                    b = parseInt(b, 16);
                }
                return rgb(r, g, b);
            }
            function d3_rgb_hsl(r, g, b) {
                var min = Math.min(r /= 255, g /= 255, b /= 255), max = Math.max(r, g, b), d = max - min, h, s, l = (max + min) / 2;
                if (d) {
                    s = l < .5 ? d / (max + min) : d / (2 - max - min);
                    if (r == max) h = (g - b) / d + (g < b ? 6 : 0); else if (g == max) h = (b - r) / d + 2; else h = (r - g) / d + 4;
                    h *= 60;
                } else {
                    s = h = 0;
                }
                return d3_hsl(h, s, l);
            }
            function d3_rgb_lab(r, g, b) {
                r = d3_rgb_xyz(r);
                g = d3_rgb_xyz(g);
                b = d3_rgb_xyz(b);
                var x = d3_xyz_lab((.4124564 * r + .3575761 * g + .1804375 * b) / d3_lab_X), y = d3_xyz_lab((.2126729 * r + .7151522 * g + .072175 * b) / d3_lab_Y), z = d3_xyz_lab((.0193339 * r + .119192 * g + .9503041 * b) / d3_lab_Z);
                return d3_lab(116 * y - 16, 500 * (x - y), 200 * (y - z));
            }
            function d3_rgb_xyz(r) {
                return (r /= 255) <= .04045 ? r / 12.92 : Math.pow((r + .055) / 1.055, 2.4);
            }
            function d3_rgb_parseNumber(c) {
                var f = parseFloat(c);
                return c.charAt(c.length - 1) === "%" ? Math.round(f * 2.55) : f;
            }
            var d3_rgb_names = d3.map({
                aliceblue: "#f0f8ff",
                antiquewhite: "#faebd7",
                aqua: "#00ffff",
                aquamarine: "#7fffd4",
                azure: "#f0ffff",
                beige: "#f5f5dc",
                bisque: "#ffe4c4",
                black: "#000000",
                blanchedalmond: "#ffebcd",
                blue: "#0000ff",
                blueviolet: "#8a2be2",
                brown: "#a52a2a",
                burlywood: "#deb887",
                cadetblue: "#5f9ea0",
                chartreuse: "#7fff00",
                chocolate: "#d2691e",
                coral: "#ff7f50",
                cornflowerblue: "#6495ed",
                cornsilk: "#fff8dc",
                crimson: "#dc143c",
                cyan: "#00ffff",
                darkblue: "#00008b",
                darkcyan: "#008b8b",
                darkgoldenrod: "#b8860b",
                darkgray: "#a9a9a9",
                darkgreen: "#006400",
                darkgrey: "#a9a9a9",
                darkkhaki: "#bdb76b",
                darkmagenta: "#8b008b",
                darkolivegreen: "#556b2f",
                darkorange: "#ff8c00",
                darkorchid: "#9932cc",
                darkred: "#8b0000",
                darksalmon: "#e9967a",
                darkseagreen: "#8fbc8f",
                darkslateblue: "#483d8b",
                darkslategray: "#2f4f4f",
                darkslategrey: "#2f4f4f",
                darkturquoise: "#00ced1",
                darkviolet: "#9400d3",
                deeppink: "#ff1493",
                deepskyblue: "#00bfff",
                dimgray: "#696969",
                dimgrey: "#696969",
                dodgerblue: "#1e90ff",
                firebrick: "#b22222",
                floralwhite: "#fffaf0",
                forestgreen: "#228b22",
                fuchsia: "#ff00ff",
                gainsboro: "#dcdcdc",
                ghostwhite: "#f8f8ff",
                gold: "#ffd700",
                goldenrod: "#daa520",
                gray: "#808080",
                green: "#008000",
                greenyellow: "#adff2f",
                grey: "#808080",
                honeydew: "#f0fff0",
                hotpink: "#ff69b4",
                indianred: "#cd5c5c",
                indigo: "#4b0082",
                ivory: "#fffff0",
                khaki: "#f0e68c",
                lavender: "#e6e6fa",
                lavenderblush: "#fff0f5",
                lawngreen: "#7cfc00",
                lemonchiffon: "#fffacd",
                lightblue: "#add8e6",
                lightcoral: "#f08080",
                lightcyan: "#e0ffff",
                lightgoldenrodyellow: "#fafad2",
                lightgray: "#d3d3d3",
                lightgreen: "#90ee90",
                lightgrey: "#d3d3d3",
                lightpink: "#ffb6c1",
                lightsalmon: "#ffa07a",
                lightseagreen: "#20b2aa",
                lightskyblue: "#87cefa",
                lightslategray: "#778899",
                lightslategrey: "#778899",
                lightsteelblue: "#b0c4de",
                lightyellow: "#ffffe0",
                lime: "#00ff00",
                limegreen: "#32cd32",
                linen: "#faf0e6",
                magenta: "#ff00ff",
                maroon: "#800000",
                mediumaquamarine: "#66cdaa",
                mediumblue: "#0000cd",
                mediumorchid: "#ba55d3",
                mediumpurple: "#9370db",
                mediumseagreen: "#3cb371",
                mediumslateblue: "#7b68ee",
                mediumspringgreen: "#00fa9a",
                mediumturquoise: "#48d1cc",
                mediumvioletred: "#c71585",
                midnightblue: "#191970",
                mintcream: "#f5fffa",
                mistyrose: "#ffe4e1",
                moccasin: "#ffe4b5",
                navajowhite: "#ffdead",
                navy: "#000080",
                oldlace: "#fdf5e6",
                olive: "#808000",
                olivedrab: "#6b8e23",
                orange: "#ffa500",
                orangered: "#ff4500",
                orchid: "#da70d6",
                palegoldenrod: "#eee8aa",
                palegreen: "#98fb98",
                paleturquoise: "#afeeee",
                palevioletred: "#db7093",
                papayawhip: "#ffefd5",
                peachpuff: "#ffdab9",
                peru: "#cd853f",
                pink: "#ffc0cb",
                plum: "#dda0dd",
                powderblue: "#b0e0e6",
                purple: "#800080",
                red: "#ff0000",
                rosybrown: "#bc8f8f",
                royalblue: "#4169e1",
                saddlebrown: "#8b4513",
                salmon: "#fa8072",
                sandybrown: "#f4a460",
                seagreen: "#2e8b57",
                seashell: "#fff5ee",
                sienna: "#a0522d",
                silver: "#c0c0c0",
                skyblue: "#87ceeb",
                slateblue: "#6a5acd",
                slategray: "#708090",
                slategrey: "#708090",
                snow: "#fffafa",
                springgreen: "#00ff7f",
                steelblue: "#4682b4",
                tan: "#d2b48c",
                teal: "#008080",
                thistle: "#d8bfd8",
                tomato: "#ff6347",
                turquoise: "#40e0d0",
                violet: "#ee82ee",
                wheat: "#f5deb3",
                white: "#ffffff",
                whitesmoke: "#f5f5f5",
                yellow: "#ffff00",
                yellowgreen: "#9acd32"
            });
            d3_rgb_names.forEach(function(key, value) {
                d3_rgb_names.set(key, d3_rgb_parse(value, d3_rgb, d3_hsl_rgb));
            });
            d3.hsl = function(h, s, l) {
                return arguments.length === 1 ? h instanceof d3_Hsl ? d3_hsl(h.h, h.s, h.l) : d3_rgb_parse("" + h, d3_rgb_hsl, d3_hsl) : d3_hsl(+h, +s, +l);
            };
            function d3_hsl(h, s, l) {
                return new d3_Hsl(h, s, l);
            }
            function d3_Hsl(h, s, l) {
                this.h = h;
                this.s = s;
                this.l = l;
            }
            var d3_hslPrototype = d3_Hsl.prototype = new d3_Color();
            d3_hslPrototype.brighter = function(k) {
                k = Math.pow(.7, arguments.length ? k : 1);
                return d3_hsl(this.h, this.s, this.l / k);
            };
            d3_hslPrototype.darker = function(k) {
                k = Math.pow(.7, arguments.length ? k : 1);
                return d3_hsl(this.h, this.s, k * this.l);
            };
            d3_hslPrototype.rgb = function() {
                return d3_hsl_rgb(this.h, this.s, this.l);
            };
            function d3_hsl_rgb(h, s, l) {
                var m1, m2;
                h = h % 360;
                if (h < 0) h += 360;
                s = s < 0 ? 0 : s > 1 ? 1 : s;
                l = l < 0 ? 0 : l > 1 ? 1 : l;
                m2 = l <= .5 ? l * (1 + s) : l + s - l * s;
                m1 = 2 * l - m2;
                function v(h) {
                    if (h > 360) h -= 360; else if (h < 0) h += 360;
                    if (h < 60) return m1 + (m2 - m1) * h / 60;
                    if (h < 180) return m2;
                    if (h < 240) return m1 + (m2 - m1) * (240 - h) / 60;
                    return m1;
                }
                function vv(h) {
                    return Math.round(v(h) * 255);
                }
                return d3_rgb(vv(h + 120), vv(h), vv(h - 120));
            }
            d3.hcl = function(h, c, l) {
                return arguments.length === 1 ? h instanceof d3_Hcl ? d3_hcl(h.h, h.c, h.l) : h instanceof d3_Lab ? d3_lab_hcl(h.l, h.a, h.b) : d3_lab_hcl((h = d3_rgb_lab((h = d3.rgb(h)).r, h.g, h.b)).l, h.a, h.b) : d3_hcl(+h, +c, +l);
            };
            function d3_hcl(h, c, l) {
                return new d3_Hcl(h, c, l);
            }
            function d3_Hcl(h, c, l) {
                this.h = h;
                this.c = c;
                this.l = l;
            }
            var d3_hclPrototype = d3_Hcl.prototype = new d3_Color();
            d3_hclPrototype.brighter = function(k) {
                return d3_hcl(this.h, this.c, Math.min(100, this.l + d3_lab_K * (arguments.length ? k : 1)));
            };
            d3_hclPrototype.darker = function(k) {
                return d3_hcl(this.h, this.c, Math.max(0, this.l - d3_lab_K * (arguments.length ? k : 1)));
            };
            d3_hclPrototype.rgb = function() {
                return d3_hcl_lab(this.h, this.c, this.l).rgb();
            };
            function d3_hcl_lab(h, c, l) {
                return d3_lab(l, Math.cos(h *= d3_radians) * c, Math.sin(h) * c);
            }
            d3.lab = function(l, a, b) {
                return arguments.length === 1 ? l instanceof d3_Lab ? d3_lab(l.l, l.a, l.b) : l instanceof d3_Hcl ? d3_hcl_lab(l.l, l.c, l.h) : d3_rgb_lab((l = d3.rgb(l)).r, l.g, l.b) : d3_lab(+l, +a, +b);
            };
            function d3_lab(l, a, b) {
                return new d3_Lab(l, a, b);
            }
            function d3_Lab(l, a, b) {
                this.l = l;
                this.a = a;
                this.b = b;
            }
            var d3_lab_K = 18;
            var d3_lab_X = .95047, d3_lab_Y = 1, d3_lab_Z = 1.08883;
            var d3_labPrototype = d3_Lab.prototype = new d3_Color();
            d3_labPrototype.brighter = function(k) {
                return d3_lab(Math.min(100, this.l + d3_lab_K * (arguments.length ? k : 1)), this.a, this.b);
            };
            d3_labPrototype.darker = function(k) {
                return d3_lab(Math.max(0, this.l - d3_lab_K * (arguments.length ? k : 1)), this.a, this.b);
            };
            d3_labPrototype.rgb = function() {
                return d3_lab_rgb(this.l, this.a, this.b);
            };
            function d3_lab_rgb(l, a, b) {
                var y = (l + 16) / 116, x = y + a / 500, z = y - b / 200;
                x = d3_lab_xyz(x) * d3_lab_X;
                y = d3_lab_xyz(y) * d3_lab_Y;
                z = d3_lab_xyz(z) * d3_lab_Z;
                return d3_rgb(d3_xyz_rgb(3.2404542 * x - 1.5371385 * y - .4985314 * z), d3_xyz_rgb(-.969266 * x + 1.8760108 * y + .041556 * z), d3_xyz_rgb(.0556434 * x - .2040259 * y + 1.0572252 * z));
            }
            function d3_lab_hcl(l, a, b) {
                return d3_hcl(Math.atan2(b, a) / π * 180, Math.sqrt(a * a + b * b), l);
            }
            function d3_lab_xyz(x) {
                return x > .206893034 ? x * x * x : (x - 4 / 29) / 7.787037;
            }
            function d3_xyz_lab(x) {
                return x > .008856 ? Math.pow(x, 1 / 3) : 7.787037 * x + 4 / 29;
            }
            function d3_xyz_rgb(r) {
                return Math.round(255 * (r <= .00304 ? 12.92 * r : 1.055 * Math.pow(r, 1 / 2.4) - .055));
            }
            function d3_selection(groups) {
                d3_arraySubclass(groups, d3_selectionPrototype);
                return groups;
            }
            var d3_select = function(s, n) {
                return n.querySelector(s);
            }, d3_selectAll = function(s, n) {
                return n.querySelectorAll(s);
            }, d3_selectRoot = d3_document.documentElement, d3_selectMatcher = d3_selectRoot.matchesSelector || d3_selectRoot.webkitMatchesSelector || d3_selectRoot.mozMatchesSelector || d3_selectRoot.msMatchesSelector || d3_selectRoot.oMatchesSelector, d3_selectMatches = function(n, s) {
                return d3_selectMatcher.call(n, s);
            };
            if (typeof Sizzle === "function") {
                d3_select = function(s, n) {
                    return Sizzle(s, n)[0] || null;
                };
                d3_selectAll = function(s, n) {
                    return Sizzle.uniqueSort(Sizzle(s, n));
                };
                d3_selectMatches = Sizzle.matchesSelector;
            }
            var d3_selectionPrototype = [];
            d3.selection = function() {
                return d3_selectionRoot;
            };
            d3.selection.prototype = d3_selectionPrototype;
            d3_selectionPrototype.select = function(selector) {
                var subgroups = [], subgroup, subnode, group, node;
                if (typeof selector !== "function") selector = d3_selection_selector(selector);
                for (var j = -1, m = this.length; ++j < m; ) {
                    subgroups.push(subgroup = []);
                    subgroup.parentNode = (group = this[j]).parentNode;
                    for (var i = -1, n = group.length; ++i < n; ) {
                        if (node = group[i]) {
                            subgroup.push(subnode = selector.call(node, node.__data__, i));
                            if (subnode && "__data__" in node) subnode.__data__ = node.__data__;
                        } else {
                            subgroup.push(null);
                        }
                    }
                }
                return d3_selection(subgroups);
            };
            function d3_selection_selector(selector) {
                return function() {
                    return d3_select(selector, this);
                };
            }
            d3_selectionPrototype.selectAll = function(selector) {
                var subgroups = [], subgroup, node;
                if (typeof selector !== "function") selector = d3_selection_selectorAll(selector);
                for (var j = -1, m = this.length; ++j < m; ) {
                    for (var group = this[j], i = -1, n = group.length; ++i < n; ) {
                        if (node = group[i]) {
                            subgroups.push(subgroup = d3_array(selector.call(node, node.__data__, i)));
                            subgroup.parentNode = node;
                        }
                    }
                }
                return d3_selection(subgroups);
            };
            function d3_selection_selectorAll(selector) {
                return function() {
                    return d3_selectAll(selector, this);
                };
            }
            d3_selectionPrototype.attr = function(name, value) {
                if (arguments.length < 2) {
                    if (typeof name === "string") {
                        var node = this.node();
                        name = d3.ns.qualify(name);
                        return name.local ? node.getAttributeNS(name.space, name.local) : node.getAttribute(name);
                    }
                    for (value in name) this.each(d3_selection_attr(value, name[value]));
                    return this;
                }
                return this.each(d3_selection_attr(name, value));
            };
            function d3_selection_attr(name, value) {
                name = d3.ns.qualify(name);
                function attrNull() {
                    this.removeAttribute(name);
                }
                function attrNullNS() {
                    this.removeAttributeNS(name.space, name.local);
                }
                function attrConstant() {
                    this.setAttribute(name, value);
                }
                function attrConstantNS() {
                    this.setAttributeNS(name.space, name.local, value);
                }
                function attrFunction() {
                    var x = value.apply(this, arguments);
                    if (x == null) this.removeAttribute(name); else this.setAttribute(name, x);
                }
                function attrFunctionNS() {
                    var x = value.apply(this, arguments);
                    if (x == null) this.removeAttributeNS(name.space, name.local); else this.setAttributeNS(name.space, name.local, x);
                }
                return value == null ? name.local ? attrNullNS : attrNull : typeof value === "function" ? name.local ? attrFunctionNS : attrFunction : name.local ? attrConstantNS : attrConstant;
            }
            d3_selectionPrototype.classed = function(name, value) {
                if (arguments.length < 2) {
                    if (typeof name === "string") {
                        var node = this.node(), n = (name = name.trim().split(/^|\s+/g)).length, i = -1;
                        if (value = node.classList) {
                            while (++i < n) if (!value.contains(name[i])) return false;
                        } else {
                            value = node.className;
                            if (value.baseVal != null) value = value.baseVal;
                            while (++i < n) if (!d3_selection_classedRe(name[i]).test(value)) return false;
                        }
                        return true;
                    }
                    for (value in name) this.each(d3_selection_classed(value, name[value]));
                    return this;
                }
                return this.each(d3_selection_classed(name, value));
            };
            function d3_selection_classedRe(name) {
                return new RegExp("(?:^|\\s+)" + d3.requote(name) + "(?:\\s+|$)", "g");
            }
            function d3_selection_classed(name, value) {
                name = name.trim().split(/\s+/).map(d3_selection_classedName);
                var n = name.length;
                function classedConstant() {
                    var i = -1;
                    while (++i < n) name[i](this, value);
                }
                function classedFunction() {
                    var i = -1, x = value.apply(this, arguments);
                    while (++i < n) name[i](this, x);
                }
                return typeof value === "function" ? classedFunction : classedConstant;
            }
            function d3_selection_classedName(name) {
                var re = d3_selection_classedRe(name);
                return function(node, value) {
                    if (c = node.classList) return value ? c.add(name) : c.remove(name);
                    var c = node.className, cb = c.baseVal != null, cv = cb ? c.baseVal : c;
                    if (value) {
                        re.lastIndex = 0;
                        if (!re.test(cv)) {
                            cv = d3_collapse(cv + " " + name);
                            if (cb) c.baseVal = cv; else node.className = cv;
                        }
                    } else if (cv) {
                        cv = d3_collapse(cv.replace(re, " "));
                        if (cb) c.baseVal = cv; else node.className = cv;
                    }
                };
            }
            d3_selectionPrototype.style = function(name, value, priority) {
                var n = arguments.length;
                if (n < 3) {
                    if (typeof name !== "string") {
                        if (n < 2) value = "";
                        for (priority in name) this.each(d3_selection_style(priority, name[priority], value));
                        return this;
                    }
                    if (n < 2) return d3_window.getComputedStyle(this.node(), null).getPropertyValue(name);
                    priority = "";
                }
                return this.each(d3_selection_style(name, value, priority));
            };
            function d3_selection_style(name, value, priority) {
                function styleNull() {
                    this.style.removeProperty(name);
                }
                function styleConstant() {
                    this.style.setProperty(name, value, priority);
                }
                function styleFunction() {
                    var x = value.apply(this, arguments);
                    if (x == null) this.style.removeProperty(name); else this.style.setProperty(name, x, priority);
                }
                return value == null ? styleNull : typeof value === "function" ? styleFunction : styleConstant;
            }
            d3_selectionPrototype.property = function(name, value) {
                if (arguments.length < 2) {
                    if (typeof name === "string") return this.node()[name];
                    for (value in name) this.each(d3_selection_property(value, name[value]));
                    return this;
                }
                return this.each(d3_selection_property(name, value));
            };
            function d3_selection_property(name, value) {
                function propertyNull() {
                    delete this[name];
                }
                function propertyConstant() {
                    this[name] = value;
                }
                function propertyFunction() {
                    var x = value.apply(this, arguments);
                    if (x == null) delete this[name]; else this[name] = x;
                }
                return value == null ? propertyNull : typeof value === "function" ? propertyFunction : propertyConstant;
            }
            d3_selectionPrototype.text = function(value) {
                return arguments.length ? this.each(typeof value === "function" ? function() {
                    var v = value.apply(this, arguments);
                    this.textContent = v == null ? "" : v;
                } : value == null ? function() {
                    this.textContent = "";
                } : function() {
                    this.textContent = value;
                }) : this.node().textContent;
            };
            d3_selectionPrototype.html = function(value) {
                return arguments.length ? this.each(typeof value === "function" ? function() {
                    var v = value.apply(this, arguments);
                    this.innerHTML = v == null ? "" : v;
                } : value == null ? function() {
                    this.innerHTML = "";
                } : function() {
                    this.innerHTML = value;
                }) : this.node().innerHTML;
            };
            d3_selectionPrototype.append = function(name) {
                name = d3.ns.qualify(name);
                function append() {
                    return this.appendChild(d3_document.createElementNS(this.namespaceURI, name));
                }
                function appendNS() {
                    return this.appendChild(d3_document.createElementNS(name.space, name.local));
                }
                return this.select(name.local ? appendNS : append);
            };
            d3_selectionPrototype.insert = function(name, before) {
                name = d3.ns.qualify(name);
                function insert() {
                    return this.insertBefore(d3_document.createElementNS(this.namespaceURI, name), d3_select(before, this));
                }
                function insertNS() {
                    return this.insertBefore(d3_document.createElementNS(name.space, name.local), d3_select(before, this));
                }
                return this.select(name.local ? insertNS : insert);
            };
            d3_selectionPrototype.remove = function() {
                return this.each(function() {
                    var parent = this.parentNode;
                    if (parent) parent.removeChild(this);
                });
            };
            d3_selectionPrototype.data = function(value, key) {
                var i = -1, n = this.length, group, node;
                if (!arguments.length) {
                    value = new Array(n = (group = this[0]).length);
                    while (++i < n) {
                        if (node = group[i]) {
                            value[i] = node.__data__;
                        }
                    }
                    return value;
                }
                function bind(group, groupData) {
                    var i, n = group.length, m = groupData.length, n0 = Math.min(n, m), updateNodes = new Array(m), enterNodes = new Array(m), exitNodes = new Array(n), node, nodeData;
                    if (key) {
                        var nodeByKeyValue = new d3_Map(), dataByKeyValue = new d3_Map(), keyValues = [], keyValue;
                        for (i = -1; ++i < n; ) {
                            keyValue = key.call(node = group[i], node.__data__, i);
                            if (nodeByKeyValue.has(keyValue)) {
                                exitNodes[i] = node;
                            } else {
                                nodeByKeyValue.set(keyValue, node);
                            }
                            keyValues.push(keyValue);
                        }
                        for (i = -1; ++i < m; ) {
                            keyValue = key.call(groupData, nodeData = groupData[i], i);
                            if (node = nodeByKeyValue.get(keyValue)) {
                                updateNodes[i] = node;
                                node.__data__ = nodeData;
                            } else if (!dataByKeyValue.has(keyValue)) {
                                enterNodes[i] = d3_selection_dataNode(nodeData);
                            }
                            dataByKeyValue.set(keyValue, nodeData);
                            nodeByKeyValue.remove(keyValue);
                        }
                        for (i = -1; ++i < n; ) {
                            if (nodeByKeyValue.has(keyValues[i])) {
                                exitNodes[i] = group[i];
                            }
                        }
                    } else {
                        for (i = -1; ++i < n0; ) {
                            node = group[i];
                            nodeData = groupData[i];
                            if (node) {
                                node.__data__ = nodeData;
                                updateNodes[i] = node;
                            } else {
                                enterNodes[i] = d3_selection_dataNode(nodeData);
                            }
                        }
                        for (;i < m; ++i) {
                            enterNodes[i] = d3_selection_dataNode(groupData[i]);
                        }
                        for (;i < n; ++i) {
                            exitNodes[i] = group[i];
                        }
                    }
                    enterNodes.update = updateNodes;
                    enterNodes.parentNode = updateNodes.parentNode = exitNodes.parentNode = group.parentNode;
                    enter.push(enterNodes);
                    update.push(updateNodes);
                    exit.push(exitNodes);
                }
                var enter = d3_selection_enter([]), update = d3_selection([]), exit = d3_selection([]);
                if (typeof value === "function") {
                    while (++i < n) {
                        bind(group = this[i], value.call(group, group.parentNode.__data__, i));
                    }
                } else {
                    while (++i < n) {
                        bind(group = this[i], value);
                    }
                }
                update.enter = function() {
                    return enter;
                };
                update.exit = function() {
                    return exit;
                };
                return update;
            };
            function d3_selection_dataNode(data) {
                return {
                    __data__: data
                };
            }
            d3_selectionPrototype.datum = function(value) {
                return arguments.length ? this.property("__data__", value) : this.property("__data__");
            };
            d3_selectionPrototype.filter = function(filter) {
                var subgroups = [], subgroup, group, node;
                if (typeof filter !== "function") filter = d3_selection_filter(filter);
                for (var j = 0, m = this.length; j < m; j++) {
                    subgroups.push(subgroup = []);
                    subgroup.parentNode = (group = this[j]).parentNode;
                    for (var i = 0, n = group.length; i < n; i++) {
                        if ((node = group[i]) && filter.call(node, node.__data__, i)) {
                            subgroup.push(node);
                        }
                    }
                }
                return d3_selection(subgroups);
            };
            function d3_selection_filter(selector) {
                return function() {
                    return d3_selectMatches(this, selector);
                };
            }
            d3_selectionPrototype.order = function() {
                for (var j = -1, m = this.length; ++j < m; ) {
                    for (var group = this[j], i = group.length - 1, next = group[i], node; --i >= 0; ) {
                        if (node = group[i]) {
                            if (next && next !== node.nextSibling) next.parentNode.insertBefore(node, next);
                            next = node;
                        }
                    }
                }
                return this;
            };
            d3_selectionPrototype.sort = function(comparator) {
                comparator = d3_selection_sortComparator.apply(this, arguments);
                for (var j = -1, m = this.length; ++j < m; ) this[j].sort(comparator);
                return this.order();
            };
            function d3_selection_sortComparator(comparator) {
                if (!arguments.length) comparator = d3.ascending;
                return function(a, b) {
                    return !a - !b || comparator(a.__data__, b.__data__);
                };
            }
            d3_selectionPrototype.on = function(type, listener, capture) {
                var n = arguments.length;
                if (n < 3) {
                    if (typeof type !== "string") {
                        if (n < 2) listener = false;
                        for (capture in type) this.each(d3_selection_on(capture, type[capture], listener));
                        return this;
                    }
                    if (n < 2) return (n = this.node()["__on" + type]) && n._;
                    capture = false;
                }
                return this.each(d3_selection_on(type, listener, capture));
            };
            function d3_selection_on(type, listener, capture) {
                var name = "__on" + type, i = type.indexOf(".");
                if (i > 0) type = type.substring(0, i);
                function onRemove() {
                    var wrapper = this[name];
                    if (wrapper) {
                        this.removeEventListener(type, wrapper, wrapper.$);
                        delete this[name];
                    }
                }
                function onAdd() {
                    var node = this, args = d3_array(arguments);
                    onRemove.call(this);
                    this.addEventListener(type, this[name] = wrapper, wrapper.$ = capture);
                    wrapper._ = listener;
                    function wrapper(e) {
                        var o = d3.event;
                        d3.event = e;
                        args[0] = node.__data__;
                        try {
                            listener.apply(node, args);
                        } finally {
                            d3.event = o;
                        }
                    }
                }
                return listener ? onAdd : onRemove;
            }
            d3_selectionPrototype.each = function(callback) {
                return d3_selection_each(this, function(node, i, j) {
                    callback.call(node, node.__data__, i, j);
                });
            };
            function d3_selection_each(groups, callback) {
                for (var j = 0, m = groups.length; j < m; j++) {
                    for (var group = groups[j], i = 0, n = group.length, node; i < n; i++) {
                        if (node = group[i]) callback(node, i, j);
                    }
                }
                return groups;
            }
            d3_selectionPrototype.call = function(callback) {
                var args = d3_array(arguments);
                callback.apply(args[0] = this, args);
                return this;
            };
            d3_selectionPrototype.empty = function() {
                return !this.node();
            };
            d3_selectionPrototype.node = function() {
                for (var j = 0, m = this.length; j < m; j++) {
                    for (var group = this[j], i = 0, n = group.length; i < n; i++) {
                        var node = group[i];
                        if (node) return node;
                    }
                }
                return null;
            };
            d3_selectionPrototype.transition = function() {
                var id = d3_transitionInheritId || ++d3_transitionId, subgroups = [], subgroup, node, transition = Object.create(d3_transitionInherit);
                transition.time = Date.now();
                for (var j = -1, m = this.length; ++j < m; ) {
                    subgroups.push(subgroup = []);
                    for (var group = this[j], i = -1, n = group.length; ++i < n; ) {
                        if (node = group[i]) d3_transitionNode(node, i, id, transition);
                        subgroup.push(node);
                    }
                }
                return d3_transition(subgroups, id);
            };
            var d3_selectionRoot = d3_selection([ [ d3_document ] ]);
            d3_selectionRoot[0].parentNode = d3_selectRoot;
            d3.select = function(selector) {
                return typeof selector === "string" ? d3_selectionRoot.select(selector) : d3_selection([ [ selector ] ]);
            };
            d3.selectAll = function(selector) {
                return typeof selector === "string" ? d3_selectionRoot.selectAll(selector) : d3_selection([ d3_array(selector) ]);
            };
            function d3_selection_enter(selection) {
                d3_arraySubclass(selection, d3_selection_enterPrototype);
                return selection;
            }
            var d3_selection_enterPrototype = [];
            d3.selection.enter = d3_selection_enter;
            d3.selection.enter.prototype = d3_selection_enterPrototype;
            d3_selection_enterPrototype.append = d3_selectionPrototype.append;
            d3_selection_enterPrototype.insert = d3_selectionPrototype.insert;
            d3_selection_enterPrototype.empty = d3_selectionPrototype.empty;
            d3_selection_enterPrototype.node = d3_selectionPrototype.node;
            d3_selection_enterPrototype.select = function(selector) {
                var subgroups = [], subgroup, subnode, upgroup, group, node;
                for (var j = -1, m = this.length; ++j < m; ) {
                    upgroup = (group = this[j]).update;
                    subgroups.push(subgroup = []);
                    subgroup.parentNode = group.parentNode;
                    for (var i = -1, n = group.length; ++i < n; ) {
                        if (node = group[i]) {
                            subgroup.push(upgroup[i] = subnode = selector.call(group.parentNode, node.__data__, i));
                            subnode.__data__ = node.__data__;
                        } else {
                            subgroup.push(null);
                        }
                    }
                }
                return d3_selection(subgroups);
            };
            function d3_transition(groups, id) {
                d3_arraySubclass(groups, d3_transitionPrototype);
                groups.id = id;
                return groups;
            }
            var d3_transitionPrototype = [], d3_transitionId = 0, d3_transitionInheritId, d3_transitionInherit = {
                ease: d3_ease_cubicInOut,
                delay: 0,
                duration: 250
            };
            d3_transitionPrototype.call = d3_selectionPrototype.call;
            d3_transitionPrototype.empty = d3_selectionPrototype.empty;
            d3_transitionPrototype.node = d3_selectionPrototype.node;
            d3.transition = function(selection) {
                return arguments.length ? d3_transitionInheritId ? selection.transition() : selection : d3_selectionRoot.transition();
            };
            d3.transition.prototype = d3_transitionPrototype;
            function d3_transitionNode(node, i, id, inherit) {
                var lock = node.__transition__ || (node.__transition__ = {
                    active: 0,
                    count: 0
                }), transition = lock[id];
                if (!transition) {
                    var time = inherit.time;
                    transition = lock[id] = {
                        tween: new d3_Map(),
                        event: d3.dispatch("start", "end"),
                        time: time,
                        ease: inherit.ease,
                        delay: inherit.delay,
                        duration: inherit.duration
                    };
                    ++lock.count;
                    d3.timer(function(elapsed) {
                        var d = node.__data__, ease = transition.ease, event = transition.event, delay = transition.delay, duration = transition.duration, tweened = [];
                        return delay <= elapsed ? start(elapsed) : d3.timer(start, delay, time), 1;
                        function start(elapsed) {
                            if (lock.active > id) return stop();
                            lock.active = id;
                            event.start.call(node, d, i);
                            transition.tween.forEach(function(key, value) {
                                if (value = value.call(node, d, i)) {
                                    tweened.push(value);
                                }
                            });
                            if (!tick(elapsed)) d3.timer(tick, 0, time);
                            return 1;
                        }
                        function tick(elapsed) {
                            if (lock.active !== id) return stop();
                            var t = (elapsed - delay) / duration, e = ease(t), n = tweened.length;
                            while (n > 0) {
                                tweened[--n].call(node, e);
                            }
                            if (t >= 1) {
                                stop();
                                event.end.call(node, d, i);
                                return 1;
                            }
                        }
                        function stop() {
                            if (--lock.count) delete lock[id]; else delete node.__transition__;
                            return 1;
                        }
                    }, 0, time);
                    return transition;
                }
            }
            d3_transitionPrototype.select = function(selector) {
                var id = this.id, subgroups = [], subgroup, subnode, node;
                if (typeof selector !== "function") selector = d3_selection_selector(selector);
                for (var j = -1, m = this.length; ++j < m; ) {
                    subgroups.push(subgroup = []);
                    for (var group = this[j], i = -1, n = group.length; ++i < n; ) {
                        if ((node = group[i]) && (subnode = selector.call(node, node.__data__, i))) {
                            if ("__data__" in node) subnode.__data__ = node.__data__;
                            d3_transitionNode(subnode, i, id, node.__transition__[id]);
                            subgroup.push(subnode);
                        } else {
                            subgroup.push(null);
                        }
                    }
                }
                return d3_transition(subgroups, id);
            };
            d3_transitionPrototype.selectAll = function(selector) {
                var id = this.id, subgroups = [], subgroup, subnodes, node, subnode, transition;
                if (typeof selector !== "function") selector = d3_selection_selectorAll(selector);
                for (var j = -1, m = this.length; ++j < m; ) {
                    for (var group = this[j], i = -1, n = group.length; ++i < n; ) {
                        if (node = group[i]) {
                            transition = node.__transition__[id];
                            subnodes = selector.call(node, node.__data__, i);
                            subgroups.push(subgroup = []);
                            for (var k = -1, o = subnodes.length; ++k < o; ) {
                                d3_transitionNode(subnode = subnodes[k], k, id, transition);
                                subgroup.push(subnode);
                            }
                        }
                    }
                }
                return d3_transition(subgroups, id);
            };
            d3_transitionPrototype.filter = function(filter) {
                var subgroups = [], subgroup, group, node;
                if (typeof filter !== "function") filter = d3_selection_filter(filter);
                for (var j = 0, m = this.length; j < m; j++) {
                    subgroups.push(subgroup = []);
                    for (var group = this[j], i = 0, n = group.length; i < n; i++) {
                        if ((node = group[i]) && filter.call(node, node.__data__, i)) {
                            subgroup.push(node);
                        }
                    }
                }
                return d3_transition(subgroups, this.id, this.time).ease(this.ease());
            };
            d3_transitionPrototype.attr = function(nameNS, value) {
                if (arguments.length < 2) {
                    for (value in nameNS) this.attr(value, nameNS[value]);
                    return this;
                }
                var interpolate = d3_interpolateByName(nameNS), name = d3.ns.qualify(nameNS);
                function attrNull() {
                    this.removeAttribute(name);
                }
                function attrNullNS() {
                    this.removeAttributeNS(name.space, name.local);
                }
                return d3_transition_tween(this, "attr." + nameNS, value, function(b) {
                    function attrString() {
                        var a = this.getAttribute(name), i;
                        return a !== b && (i = interpolate(a, b), function(t) {
                            this.setAttribute(name, i(t));
                        });
                    }
                    function attrStringNS() {
                        var a = this.getAttributeNS(name.space, name.local), i;
                        return a !== b && (i = interpolate(a, b), function(t) {
                            this.setAttributeNS(name.space, name.local, i(t));
                        });
                    }
                    return b == null ? name.local ? attrNullNS : attrNull : (b += "", name.local ? attrStringNS : attrString);
                });
            };
            d3_transitionPrototype.attrTween = function(nameNS, tween) {
                var name = d3.ns.qualify(nameNS);
                function attrTween(d, i) {
                    var f = tween.call(this, d, i, this.getAttribute(name));
                    return f && function(t) {
                        this.setAttribute(name, f(t));
                    };
                }
                function attrTweenNS(d, i) {
                    var f = tween.call(this, d, i, this.getAttributeNS(name.space, name.local));
                    return f && function(t) {
                        this.setAttributeNS(name.space, name.local, f(t));
                    };
                }
                return this.tween("attr." + nameNS, name.local ? attrTweenNS : attrTween);
            };
            d3_transitionPrototype.style = function(name, value, priority) {
                var n = arguments.length;
                if (n < 3) {
                    if (typeof name !== "string") {
                        if (n < 2) value = "";
                        for (priority in name) this.style(priority, name[priority], value);
                        return this;
                    }
                    priority = "";
                }
                var interpolate = d3_interpolateByName(name);
                function styleNull() {
                    this.style.removeProperty(name);
                }
                return d3_transition_tween(this, "style." + name, value, function(b) {
                    function styleString() {
                        var a = d3_window.getComputedStyle(this, null).getPropertyValue(name), i;
                        return a !== b && (i = interpolate(a, b), function(t) {
                            this.style.setProperty(name, i(t), priority);
                        });
                    }
                    return b == null ? styleNull : (b += "", styleString);
                });
            };
            d3_transitionPrototype.styleTween = function(name, tween, priority) {
                if (arguments.length < 3) priority = "";
                return this.tween("style." + name, function(d, i) {
                    var f = tween.call(this, d, i, d3_window.getComputedStyle(this, null).getPropertyValue(name));
                    return f && function(t) {
                        this.style.setProperty(name, f(t), priority);
                    };
                });
            };
            d3_transitionPrototype.text = function(value) {
                return d3_transition_tween(this, "text", value, d3_transition_text);
            };
            function d3_transition_text(b) {
                if (b == null) b = "";
                return function() {
                    this.textContent = b;
                };
            }
            d3_transitionPrototype.remove = function() {
                return this.each("end.transition", function() {
                    var p;
                    if (!this.__transition__ && (p = this.parentNode)) p.removeChild(this);
                });
            };
            d3_transitionPrototype.ease = function(value) {
                var id = this.id;
                if (arguments.length < 1) return this.node().__transition__[id].ease;
                if (typeof value !== "function") value = d3.ease.apply(d3, arguments);
                return d3_selection_each(this, function(node) {
                    node.__transition__[id].ease = value;
                });
            };
            d3_transitionPrototype.delay = function(value) {
                var id = this.id;
                return d3_selection_each(this, typeof value === "function" ? function(node, i, j) {
                    node.__transition__[id].delay = value.call(node, node.__data__, i, j) | 0;
                } : (value |= 0, function(node) {
                    node.__transition__[id].delay = value;
                }));
            };
            d3_transitionPrototype.duration = function(value) {
                var id = this.id;
                return d3_selection_each(this, typeof value === "function" ? function(node, i, j) {
                    node.__transition__[id].duration = Math.max(1, value.call(node, node.__data__, i, j) | 0);
                } : (value = Math.max(1, value | 0), function(node) {
                    node.__transition__[id].duration = value;
                }));
            };
            d3_transitionPrototype.each = function(type, listener) {
                var id = this.id;
                if (arguments.length < 2) {
                    var inherit = d3_transitionInherit, inheritId = d3_transitionInheritId;
                    d3_transitionInheritId = id;
                    d3_selection_each(this, function(node, i, j) {
                        d3_transitionInherit = node.__transition__[id];
                        type.call(node, node.__data__, i, j);
                    });
                    d3_transitionInherit = inherit;
                    d3_transitionInheritId = inheritId;
                } else {
                    d3_selection_each(this, function(node) {
                        node.__transition__[id].event.on(type, listener);
                    });
                }
                return this;
            };
            d3_transitionPrototype.transition = function() {
                var id0 = this.id, id1 = ++d3_transitionId, subgroups = [], subgroup, group, node, transition;
                for (var j = 0, m = this.length; j < m; j++) {
                    subgroups.push(subgroup = []);
                    for (var group = this[j], i = 0, n = group.length; i < n; i++) {
                        if (node = group[i]) {
                            transition = Object.create(node.__transition__[id0]);
                            transition.delay += transition.duration;
                            d3_transitionNode(node, i, id1, transition);
                        }
                        subgroup.push(node);
                    }
                }
                return d3_transition(subgroups, id1);
            };
            d3_transitionPrototype.tween = function(name, tween) {
                var id = this.id;
                if (arguments.length < 2) return this.node().__transition__[id].tween.get(name);
                return d3_selection_each(this, tween == null ? function(node) {
                    node.__transition__[id].tween.remove(name);
                } : function(node) {
                    node.__transition__[id].tween.set(name, tween);
                });
            };
            function d3_transition_tween(groups, name, value, tween) {
                var id = groups.id;
                return d3_selection_each(groups, typeof value === "function" ? function(node, i, j) {
                    node.__transition__[id].tween.set(name, tween(value.call(node, node.__data__, i, j)));
                } : (value = tween(value), function(node) {
                    node.__transition__[id].tween.set(name, value);
                }));
            }
            var d3_timer_id = 0, d3_timer_byId = {}, d3_timer_queue = null, d3_timer_interval, d3_timer_timeout;
            d3.timer = function(callback, delay, then) {
                if (arguments.length < 3) {
                    if (arguments.length < 2) delay = 0; else if (!isFinite(delay)) return;
                    then = Date.now();
                }
                var timer = d3_timer_byId[callback.id];
                if (timer && timer.callback === callback) {
                    timer.then = then;
                    timer.delay = delay;
                } else d3_timer_byId[callback.id = ++d3_timer_id] = d3_timer_queue = {
                    callback: callback,
                    then: then,
                    delay: delay,
                    next: d3_timer_queue
                };
                if (!d3_timer_interval) {
                    d3_timer_timeout = clearTimeout(d3_timer_timeout);
                    d3_timer_interval = 1;
                    d3_timer_frame(d3_timer_step);
                }
            };
            function d3_timer_step() {
                var elapsed, now = Date.now(), t1 = d3_timer_queue;
                while (t1) {
                    elapsed = now - t1.then;
                    if (elapsed >= t1.delay) t1.flush = t1.callback(elapsed);
                    t1 = t1.next;
                }
                var delay = d3_timer_flush() - now;
                if (delay > 24) {
                    if (isFinite(delay)) {
                        clearTimeout(d3_timer_timeout);
                        d3_timer_timeout = setTimeout(d3_timer_step, delay);
                    }
                    d3_timer_interval = 0;
                } else {
                    d3_timer_interval = 1;
                    d3_timer_frame(d3_timer_step);
                }
            }
            d3.timer.flush = function() {
                var elapsed, now = Date.now(), t1 = d3_timer_queue;
                while (t1) {
                    elapsed = now - t1.then;
                    if (!t1.delay) t1.flush = t1.callback(elapsed);
                    t1 = t1.next;
                }
                d3_timer_flush();
            };
            function d3_timer_flush() {
                var t0 = null, t1 = d3_timer_queue, then = Infinity;
                while (t1) {
                    if (t1.flush) {
                        delete d3_timer_byId[t1.callback.id];
                        t1 = t0 ? t0.next = t1.next : d3_timer_queue = t1.next;
                    } else {
                        then = Math.min(then, t1.then + t1.delay);
                        t1 = (t0 = t1).next;
                    }
                }
                return then;
            }
            var d3_timer_frame = d3_window.requestAnimationFrame || d3_window.webkitRequestAnimationFrame || d3_window.mozRequestAnimationFrame || d3_window.oRequestAnimationFrame || d3_window.msRequestAnimationFrame || function(callback) {
                setTimeout(callback, 17);
            };
            d3.mouse = function(container) {
                return d3_mousePoint(container, d3_eventSource());
            };
            var d3_mouse_bug44083 = /WebKit/.test(d3_window.navigator.userAgent) ? -1 : 0;
            function d3_mousePoint(container, e) {
                var svg = container.ownerSVGElement || container;
                if (svg.createSVGPoint) {
                    var point = svg.createSVGPoint();
                    if (d3_mouse_bug44083 < 0 && (d3_window.scrollX || d3_window.scrollY)) {
                        svg = d3.select(d3_document.body).append("svg").style("position", "absolute").style("top", 0).style("left", 0);
                        var ctm = svg[0][0].getScreenCTM();
                        d3_mouse_bug44083 = !(ctm.f || ctm.e);
                        svg.remove();
                    }
                    if (d3_mouse_bug44083) {
                        point.x = e.pageX;
                        point.y = e.pageY;
                    } else {
                        point.x = e.clientX;
                        point.y = e.clientY;
                    }
                    point = point.matrixTransform(container.getScreenCTM().inverse());
                    return [ point.x, point.y ];
                }
                var rect = container.getBoundingClientRect();
                return [ e.clientX - rect.left - container.clientLeft, e.clientY - rect.top - container.clientTop ];
            }
            d3.touches = function(container, touches) {
                if (arguments.length < 2) touches = d3_eventSource().touches;
                return touches ? d3_array(touches).map(function(touch) {
                    var point = d3_mousePoint(container, touch);
                    point.identifier = touch.identifier;
                    return point;
                }) : [];
            };
            function d3_noop() {}
            d3.scale = {};
            function d3_scaleExtent(domain) {
                var start = domain[0], stop = domain[domain.length - 1];
                return start < stop ? [ start, stop ] : [ stop, start ];
            }
            function d3_scaleRange(scale) {
                return scale.rangeExtent ? scale.rangeExtent() : d3_scaleExtent(scale.range());
            }
            function d3_scale_nice(domain, nice) {
                var i0 = 0, i1 = domain.length - 1, x0 = domain[i0], x1 = domain[i1], dx;
                if (x1 < x0) {
                    dx = i0, i0 = i1, i1 = dx;
                    dx = x0, x0 = x1, x1 = dx;
                }
                if (nice = nice(x1 - x0)) {
                    domain[i0] = nice.floor(x0);
                    domain[i1] = nice.ceil(x1);
                }
                return domain;
            }
            function d3_scale_niceDefault() {
                return Math;
            }
            d3.scale.linear = function() {
                return d3_scale_linear([ 0, 1 ], [ 0, 1 ], d3.interpolate, false);
            };
            function d3_scale_linear(domain, range, interpolate, clamp) {
                var output, input;
                function rescale() {
                    var linear = Math.min(domain.length, range.length) > 2 ? d3_scale_polylinear : d3_scale_bilinear, uninterpolate = clamp ? d3_uninterpolateClamp : d3_uninterpolateNumber;
                    output = linear(domain, range, uninterpolate, interpolate);
                    input = linear(range, domain, uninterpolate, d3.interpolate);
                    return scale;
                }
                function scale(x) {
                    return output(x);
                }
                scale.invert = function(y) {
                    return input(y);
                };
                scale.domain = function(x) {
                    if (!arguments.length) return domain;
                    domain = x.map(Number);
                    return rescale();
                };
                scale.range = function(x) {
                    if (!arguments.length) return range;
                    range = x;
                    return rescale();
                };
                scale.rangeRound = function(x) {
                    return scale.range(x).interpolate(d3.interpolateRound);
                };
                scale.clamp = function(x) {
                    if (!arguments.length) return clamp;
                    clamp = x;
                    return rescale();
                };
                scale.interpolate = function(x) {
                    if (!arguments.length) return interpolate;
                    interpolate = x;
                    return rescale();
                };
                scale.ticks = function(m) {
                    return d3_scale_linearTicks(domain, m);
                };
                scale.tickFormat = function(m) {
                    return d3_scale_linearTickFormat(domain, m);
                };
                scale.nice = function() {
                    d3_scale_nice(domain, d3_scale_linearNice);
                    return rescale();
                };
                scale.copy = function() {
                    return d3_scale_linear(domain, range, interpolate, clamp);
                };
                return rescale();
            }
            function d3_scale_linearRebind(scale, linear) {
                return d3.rebind(scale, linear, "range", "rangeRound", "interpolate", "clamp");
            }
            function d3_scale_linearNice(dx) {
                dx = Math.pow(10, Math.round(Math.log(dx) / Math.LN10) - 1);
                return dx && {
                    floor: function(x) {
                        return Math.floor(x / dx) * dx;
                    },
                    ceil: function(x) {
                        return Math.ceil(x / dx) * dx;
                    }
                };
            }
            function d3_scale_linearTickRange(domain, m) {
                var extent = d3_scaleExtent(domain), span = extent[1] - extent[0], step = Math.pow(10, Math.floor(Math.log(span / m) / Math.LN10)), err = m / span * step;
                if (err <= .15) step *= 10; else if (err <= .35) step *= 5; else if (err <= .75) step *= 2;
                extent[0] = Math.ceil(extent[0] / step) * step;
                extent[1] = Math.floor(extent[1] / step) * step + step * .5;
                extent[2] = step;
                return extent;
            }
            function d3_scale_linearTicks(domain, m) {
                return d3.range.apply(d3, d3_scale_linearTickRange(domain, m));
            }
            function d3_scale_linearTickFormat(domain, m) {
                return d3.format(",." + Math.max(0, -Math.floor(Math.log(d3_scale_linearTickRange(domain, m)[2]) / Math.LN10 + .01)) + "f");
            }
            function d3_scale_bilinear(domain, range, uninterpolate, interpolate) {
                var u = uninterpolate(domain[0], domain[1]), i = interpolate(range[0], range[1]);
                return function(x) {
                    return i(u(x));
                };
            }
            function d3_scale_polylinear(domain, range, uninterpolate, interpolate) {
                var u = [], i = [], j = 0, k = Math.min(domain.length, range.length) - 1;
                if (domain[k] < domain[0]) {
                    domain = domain.slice().reverse();
                    range = range.slice().reverse();
                }
                while (++j <= k) {
                    u.push(uninterpolate(domain[j - 1], domain[j]));
                    i.push(interpolate(range[j - 1], range[j]));
                }
                return function(x) {
                    var j = d3.bisect(domain, x, 1, k) - 1;
                    return i[j](u[j](x));
                };
            }
            d3.scale.log = function() {
                return d3_scale_log(d3.scale.linear(), d3_scale_logp);
            };
            function d3_scale_log(linear, log) {
                var pow = log.pow;
                function scale(x) {
                    return linear(log(x));
                }
                scale.invert = function(x) {
                    return pow(linear.invert(x));
                };
                scale.domain = function(x) {
                    if (!arguments.length) return linear.domain().map(pow);
                    log = x[0] < 0 ? d3_scale_logn : d3_scale_logp;
                    pow = log.pow;
                    linear.domain(x.map(log));
                    return scale;
                };
                scale.nice = function() {
                    linear.domain(d3_scale_nice(linear.domain(), d3_scale_niceDefault));
                    return scale;
                };
                scale.ticks = function() {
                    var extent = d3_scaleExtent(linear.domain()), ticks = [];
                    if (extent.every(isFinite)) {
                        var i = Math.floor(extent[0]), j = Math.ceil(extent[1]), u = pow(extent[0]), v = pow(extent[1]);
                        if (log === d3_scale_logn) {
                            ticks.push(pow(i));
                            for (;i++ < j; ) for (var k = 9; k > 0; k--) ticks.push(pow(i) * k);
                        } else {
                            for (;i < j; i++) for (var k = 1; k < 10; k++) ticks.push(pow(i) * k);
                            ticks.push(pow(i));
                        }
                        for (i = 0; ticks[i] < u; i++) {}
                        for (j = ticks.length; ticks[j - 1] > v; j--) {}
                        ticks = ticks.slice(i, j);
                    }
                    return ticks;
                };
                scale.tickFormat = function(n, format) {
                    if (arguments.length < 2) format = d3_scale_logFormat;
                    if (!arguments.length) return format;
                    var k = Math.max(.1, n / scale.ticks().length), f = log === d3_scale_logn ? (e = -1e-12,
                        Math.floor) : (e = 1e-12, Math.ceil), e;
                    return function(d) {
                        return d / pow(f(log(d) + e)) <= k ? format(d) : "";
                    };
                };
                scale.copy = function() {
                    return d3_scale_log(linear.copy(), log);
                };
                return d3_scale_linearRebind(scale, linear);
            }
            var d3_scale_logFormat = d3.format(".0e");
            function d3_scale_logp(x) {
                return Math.log(x < 0 ? 0 : x) / Math.LN10;
            }
            function d3_scale_logn(x) {
                return -Math.log(x > 0 ? 0 : -x) / Math.LN10;
            }
            d3_scale_logp.pow = function(x) {
                return Math.pow(10, x);
            };
            d3_scale_logn.pow = function(x) {
                return -Math.pow(10, -x);
            };
            d3.scale.pow = function() {
                return d3_scale_pow(d3.scale.linear(), 1);
            };
            function d3_scale_pow(linear, exponent) {
                var powp = d3_scale_powPow(exponent), powb = d3_scale_powPow(1 / exponent);
                function scale(x) {
                    return linear(powp(x));
                }
                scale.invert = function(x) {
                    return powb(linear.invert(x));
                };
                scale.domain = function(x) {
                    if (!arguments.length) return linear.domain().map(powb);
                    linear.domain(x.map(powp));
                    return scale;
                };
                scale.ticks = function(m) {
                    return d3_scale_linearTicks(scale.domain(), m);
                };
                scale.tickFormat = function(m) {
                    return d3_scale_linearTickFormat(scale.domain(), m);
                };
                scale.nice = function() {
                    return scale.domain(d3_scale_nice(scale.domain(), d3_scale_linearNice));
                };
                scale.exponent = function(x) {
                    if (!arguments.length) return exponent;
                    var domain = scale.domain();
                    powp = d3_scale_powPow(exponent = x);
                    powb = d3_scale_powPow(1 / exponent);
                    return scale.domain(domain);
                };
                scale.copy = function() {
                    return d3_scale_pow(linear.copy(), exponent);
                };
                return d3_scale_linearRebind(scale, linear);
            }
            function d3_scale_powPow(e) {
                return function(x) {
                    return x < 0 ? -Math.pow(-x, e) : Math.pow(x, e);
                };
            }
            d3.scale.sqrt = function() {
                return d3.scale.pow().exponent(.5);
            };
            d3.scale.ordinal = function() {
                return d3_scale_ordinal([], {
                    t: "range",
                    a: [ [] ]
                });
            };
            function d3_scale_ordinal(domain, ranger) {
                var index, range, rangeBand;
                function scale(x) {
                    return range[((index.get(x) || index.set(x, domain.push(x))) - 1) % range.length];
                }
                function steps(start, step) {
                    return d3.range(domain.length).map(function(i) {
                        return start + step * i;
                    });
                }
                scale.domain = function(x) {
                    if (!arguments.length) return domain;
                    domain = [];
                    index = new d3_Map();
                    var i = -1, n = x.length, xi;
                    while (++i < n) if (!index.has(xi = x[i])) index.set(xi, domain.push(xi));
                    return scale[ranger.t].apply(scale, ranger.a);
                };
                scale.range = function(x) {
                    if (!arguments.length) return range;
                    range = x;
                    rangeBand = 0;
                    ranger = {
                        t: "range",
                        a: arguments
                    };
                    return scale;
                };
                scale.rangePoints = function(x, padding) {
                    if (arguments.length < 2) padding = 0;
                    var start = x[0], stop = x[1], step = (stop - start) / (Math.max(1, domain.length - 1) + padding);
                    range = steps(domain.length < 2 ? (start + stop) / 2 : start + step * padding / 2, step);
                    rangeBand = 0;
                    ranger = {
                        t: "rangePoints",
                        a: arguments
                    };
                    return scale;
                };
                scale.rangeBands = function(x, padding, outerPadding) {
                    if (arguments.length < 2) padding = 0;
                    if (arguments.length < 3) outerPadding = padding;
                    var reverse = x[1] < x[0], start = x[reverse - 0], stop = x[1 - reverse], step = (stop - start) / (domain.length - padding + 2 * outerPadding);
                    range = steps(start + step * outerPadding, step);
                    if (reverse) range.reverse();
                    rangeBand = step * (1 - padding);
                    ranger = {
                        t: "rangeBands",
                        a: arguments
                    };
                    return scale;
                };
                scale.rangeRoundBands = function(x, padding, outerPadding) {
                    if (arguments.length < 2) padding = 0;
                    if (arguments.length < 3) outerPadding = padding;
                    var reverse = x[1] < x[0], start = x[reverse - 0], stop = x[1 - reverse], step = Math.floor((stop - start) / (domain.length - padding + 2 * outerPadding)), error = stop - start - (domain.length - padding) * step;
                    range = steps(start + Math.round(error / 2), step);
                    if (reverse) range.reverse();
                    rangeBand = Math.round(step * (1 - padding));
                    ranger = {
                        t: "rangeRoundBands",
                        a: arguments
                    };
                    return scale;
                };
                scale.rangeBand = function() {
                    return rangeBand;
                };
                scale.rangeExtent = function() {
                    return d3_scaleExtent(ranger.a[0]);
                };
                scale.copy = function() {
                    return d3_scale_ordinal(domain, ranger);
                };
                return scale.domain(domain);
            }
            d3.scale.category10 = function() {
                return d3.scale.ordinal().range(d3_category10);
            };
            d3.scale.category20 = function() {
                return d3.scale.ordinal().range(d3_category20);
            };
            d3.scale.category20b = function() {
                return d3.scale.ordinal().range(d3_category20b);
            };
            d3.scale.category20c = function() {
                return d3.scale.ordinal().range(d3_category20c);
            };
            var d3_category10 = [ "#1f77b4", "#ff7f0e", "#2ca02c", "#d62728", "#9467bd", "#8c564b", "#e377c2", "#7f7f7f", "#bcbd22", "#17becf" ];
            var d3_category20 = [ "#1f77b4", "#aec7e8", "#ff7f0e", "#ffbb78", "#2ca02c", "#98df8a", "#d62728", "#ff9896", "#9467bd", "#c5b0d5", "#8c564b", "#c49c94", "#e377c2", "#f7b6d2", "#7f7f7f", "#c7c7c7", "#bcbd22", "#dbdb8d", "#17becf", "#9edae5" ];
            var d3_category20b = [ "#393b79", "#5254a3", "#6b6ecf", "#9c9ede", "#637939", "#8ca252", "#b5cf6b", "#cedb9c", "#8c6d31", "#bd9e39", "#e7ba52", "#e7cb94", "#843c39", "#ad494a", "#d6616b", "#e7969c", "#7b4173", "#a55194", "#ce6dbd", "#de9ed6" ];
            var d3_category20c = [ "#3182bd", "#6baed6", "#9ecae1", "#c6dbef", "#e6550d", "#fd8d3c", "#fdae6b", "#fdd0a2", "#31a354", "#74c476", "#a1d99b", "#c7e9c0", "#756bb1", "#9e9ac8", "#bcbddc", "#dadaeb", "#636363", "#969696", "#bdbdbd", "#d9d9d9" ];
            d3.scale.quantile = function() {
                return d3_scale_quantile([], []);
            };
            function d3_scale_quantile(domain, range) {
                var thresholds;
                function rescale() {
                    var k = 0, q = range.length;
                    thresholds = [];
                    while (++k < q) thresholds[k - 1] = d3.quantile(domain, k / q);
                    return scale;
                }
                function scale(x) {
                    if (isNaN(x = +x)) return NaN;
                    return range[d3.bisect(thresholds, x)];
                }
                scale.domain = function(x) {
                    if (!arguments.length) return domain;
                    domain = x.filter(function(d) {
                        return !isNaN(d);
                    }).sort(d3.ascending);
                    return rescale();
                };
                scale.range = function(x) {
                    if (!arguments.length) return range;
                    range = x;
                    return rescale();
                };
                scale.quantiles = function() {
                    return thresholds;
                };
                scale.copy = function() {
                    return d3_scale_quantile(domain, range);
                };
                return rescale();
            }
            d3.scale.quantize = function() {
                return d3_scale_quantize(0, 1, [ 0, 1 ]);
            };
            function d3_scale_quantize(x0, x1, range) {
                var kx, i;
                function scale(x) {
                    return range[Math.max(0, Math.min(i, Math.floor(kx * (x - x0))))];
                }
                function rescale() {
                    kx = range.length / (x1 - x0);
                    i = range.length - 1;
                    return scale;
                }
                scale.domain = function(x) {
                    if (!arguments.length) return [ x0, x1 ];
                    x0 = +x[0];
                    x1 = +x[x.length - 1];
                    return rescale();
                };
                scale.range = function(x) {
                    if (!arguments.length) return range;
                    range = x;
                    return rescale();
                };
                scale.copy = function() {
                    return d3_scale_quantize(x0, x1, range);
                };
                return rescale();
            }
            d3.scale.threshold = function() {
                return d3_scale_threshold([ .5 ], [ 0, 1 ]);
            };
            function d3_scale_threshold(domain, range) {
                function scale(x) {
                    return range[d3.bisect(domain, x)];
                }
                scale.domain = function(_) {
                    if (!arguments.length) return domain;
                    domain = _;
                    return scale;
                };
                scale.range = function(_) {
                    if (!arguments.length) return range;
                    range = _;
                    return scale;
                };
                scale.copy = function() {
                    return d3_scale_threshold(domain, range);
                };
                return scale;
            }
            d3.scale.identity = function() {
                return d3_scale_identity([ 0, 1 ]);
            };
            function d3_scale_identity(domain) {
                function identity(x) {
                    return +x;
                }
                identity.invert = identity;
                identity.domain = identity.range = function(x) {
                    if (!arguments.length) return domain;
                    domain = x.map(identity);
                    return identity;
                };
                identity.ticks = function(m) {
                    return d3_scale_linearTicks(domain, m);
                };
                identity.tickFormat = function(m) {
                    return d3_scale_linearTickFormat(domain, m);
                };
                identity.copy = function() {
                    return d3_scale_identity(domain);
                };
                return identity;
            }
            d3.svg = {};
            d3.svg.arc = function() {
                var innerRadius = d3_svg_arcInnerRadius, outerRadius = d3_svg_arcOuterRadius, startAngle = d3_svg_arcStartAngle, endAngle = d3_svg_arcEndAngle;
                function arc() {
                    var r0 = innerRadius.apply(this, arguments), r1 = outerRadius.apply(this, arguments), a0 = startAngle.apply(this, arguments) + d3_svg_arcOffset, a1 = endAngle.apply(this, arguments) + d3_svg_arcOffset, da = (a1 < a0 && (da = a0,
                        a0 = a1, a1 = da), a1 - a0), df = da < π ? "0" : "1", c0 = Math.cos(a0), s0 = Math.sin(a0), c1 = Math.cos(a1), s1 = Math.sin(a1);
                    return da >= d3_svg_arcMax ? r0 ? "M0," + r1 + "A" + r1 + "," + r1 + " 0 1,1 0," + -r1 + "A" + r1 + "," + r1 + " 0 1,1 0," + r1 + "M0," + r0 + "A" + r0 + "," + r0 + " 0 1,0 0," + -r0 + "A" + r0 + "," + r0 + " 0 1,0 0," + r0 + "Z" : "M0," + r1 + "A" + r1 + "," + r1 + " 0 1,1 0," + -r1 + "A" + r1 + "," + r1 + " 0 1,1 0," + r1 + "Z" : r0 ? "M" + r1 * c0 + "," + r1 * s0 + "A" + r1 + "," + r1 + " 0 " + df + ",1 " + r1 * c1 + "," + r1 * s1 + "L" + r0 * c1 + "," + r0 * s1 + "A" + r0 + "," + r0 + " 0 " + df + ",0 " + r0 * c0 + "," + r0 * s0 + "Z" : "M" + r1 * c0 + "," + r1 * s0 + "A" + r1 + "," + r1 + " 0 " + df + ",1 " + r1 * c1 + "," + r1 * s1 + "L0,0" + "Z";
                }
                arc.innerRadius = function(v) {
                    if (!arguments.length) return innerRadius;
                    innerRadius = d3_functor(v);
                    return arc;
                };
                arc.outerRadius = function(v) {
                    if (!arguments.length) return outerRadius;
                    outerRadius = d3_functor(v);
                    return arc;
                };
                arc.startAngle = function(v) {
                    if (!arguments.length) return startAngle;
                    startAngle = d3_functor(v);
                    return arc;
                };
                arc.endAngle = function(v) {
                    if (!arguments.length) return endAngle;
                    endAngle = d3_functor(v);
                    return arc;
                };
                arc.centroid = function() {
                    var r = (innerRadius.apply(this, arguments) + outerRadius.apply(this, arguments)) / 2, a = (startAngle.apply(this, arguments) + endAngle.apply(this, arguments)) / 2 + d3_svg_arcOffset;
                    return [ Math.cos(a) * r, Math.sin(a) * r ];
                };
                return arc;
            };
            var d3_svg_arcOffset = -π / 2, d3_svg_arcMax = 2 * π - 1e-6;
            function d3_svg_arcInnerRadius(d) {
                return d.innerRadius;
            }
            function d3_svg_arcOuterRadius(d) {
                return d.outerRadius;
            }
            function d3_svg_arcStartAngle(d) {
                return d.startAngle;
            }
            function d3_svg_arcEndAngle(d) {
                return d.endAngle;
            }
            function d3_svg_line(projection) {
                var x = d3_svg_lineX, y = d3_svg_lineY, defined = d3_true, interpolate = d3_svg_lineLinear, interpolateKey = interpolate.key, tension = .7;
                function line(data) {
                    var segments = [], points = [], i = -1, n = data.length, d, fx = d3_functor(x), fy = d3_functor(y);
                    function segment() {
                        segments.push("M", interpolate(projection(points), tension));
                    }
                    while (++i < n) {
                        if (defined.call(this, d = data[i], i)) {
                            points.push([ +fx.call(this, d, i), +fy.call(this, d, i) ]);
                        } else if (points.length) {
                            segment();
                            points = [];
                        }
                    }
                    if (points.length) segment();
                    return segments.length ? segments.join("") : null;
                }
                line.x = function(_) {
                    if (!arguments.length) return x;
                    x = _;
                    return line;
                };
                line.y = function(_) {
                    if (!arguments.length) return y;
                    y = _;
                    return line;
                };
                line.defined = function(_) {
                    if (!arguments.length) return defined;
                    defined = _;
                    return line;
                };
                line.interpolate = function(_) {
                    if (!arguments.length) return interpolateKey;
                    if (typeof _ === "function") interpolateKey = interpolate = _; else interpolateKey = (interpolate = d3_svg_lineInterpolators.get(_) || d3_svg_lineLinear).key;
                    return line;
                };
                line.tension = function(_) {
                    if (!arguments.length) return tension;
                    tension = _;
                    return line;
                };
                return line;
            }
            d3.svg.line = function() {
                return d3_svg_line(d3_identity);
            };
            function d3_svg_lineX(d) {
                return d[0];
            }
            function d3_svg_lineY(d) {
                return d[1];
            }
            var d3_svg_lineInterpolators = d3.map({
                linear: d3_svg_lineLinear,
                "linear-closed": d3_svg_lineLinearClosed,
                "step-before": d3_svg_lineStepBefore,
                "step-after": d3_svg_lineStepAfter,
                basis: d3_svg_lineBasis,
                "basis-open": d3_svg_lineBasisOpen,
                "basis-closed": d3_svg_lineBasisClosed,
                bundle: d3_svg_lineBundle,
                cardinal: d3_svg_lineCardinal,
                "cardinal-open": d3_svg_lineCardinalOpen,
                "cardinal-closed": d3_svg_lineCardinalClosed,
                monotone: d3_svg_lineMonotone
            });
            d3_svg_lineInterpolators.forEach(function(key, value) {
                value.key = key;
                value.closed = /-closed$/.test(key);
            });
            function d3_svg_lineLinear(points) {
                return points.join("L");
            }
            function d3_svg_lineLinearClosed(points) {
                return d3_svg_lineLinear(points) + "Z";
            }
            function d3_svg_lineStepBefore(points) {
                var i = 0, n = points.length, p = points[0], path = [ p[0], ",", p[1] ];
                while (++i < n) path.push("V", (p = points[i])[1], "H", p[0]);
                return path.join("");
            }
            function d3_svg_lineStepAfter(points) {
                var i = 0, n = points.length, p = points[0], path = [ p[0], ",", p[1] ];
                while (++i < n) path.push("H", (p = points[i])[0], "V", p[1]);
                return path.join("");
            }
            function d3_svg_lineCardinalOpen(points, tension) {
                return points.length < 4 ? d3_svg_lineLinear(points) : points[1] + d3_svg_lineHermite(points.slice(1, points.length - 1), d3_svg_lineCardinalTangents(points, tension));
            }
            function d3_svg_lineCardinalClosed(points, tension) {
                return points.length < 3 ? d3_svg_lineLinear(points) : points[0] + d3_svg_lineHermite((points.push(points[0]),
                    points), d3_svg_lineCardinalTangents([ points[points.length - 2] ].concat(points, [ points[1] ]), tension));
            }
            function d3_svg_lineCardinal(points, tension) {
                return points.length < 3 ? d3_svg_lineLinear(points) : points[0] + d3_svg_lineHermite(points, d3_svg_lineCardinalTangents(points, tension));
            }
            function d3_svg_lineHermite(points, tangents) {
                if (tangents.length < 1 || points.length != tangents.length && points.length != tangents.length + 2) {
                    return d3_svg_lineLinear(points);
                }
                var quad = points.length != tangents.length, path = "", p0 = points[0], p = points[1], t0 = tangents[0], t = t0, pi = 1;
                if (quad) {
                    path += "Q" + (p[0] - t0[0] * 2 / 3) + "," + (p[1] - t0[1] * 2 / 3) + "," + p[0] + "," + p[1];
                    p0 = points[1];
                    pi = 2;
                }
                if (tangents.length > 1) {
                    t = tangents[1];
                    p = points[pi];
                    pi++;
                    path += "C" + (p0[0] + t0[0]) + "," + (p0[1] + t0[1]) + "," + (p[0] - t[0]) + "," + (p[1] - t[1]) + "," + p[0] + "," + p[1];
                    for (var i = 2; i < tangents.length; i++, pi++) {
                        p = points[pi];
                        t = tangents[i];
                        path += "S" + (p[0] - t[0]) + "," + (p[1] - t[1]) + "," + p[0] + "," + p[1];
                    }
                }
                if (quad) {
                    var lp = points[pi];
                    path += "Q" + (p[0] + t[0] * 2 / 3) + "," + (p[1] + t[1] * 2 / 3) + "," + lp[0] + "," + lp[1];
                }
                return path;
            }
            function d3_svg_lineCardinalTangents(points, tension) {
                var tangents = [], a = (1 - tension) / 2, p0, p1 = points[0], p2 = points[1], i = 1, n = points.length;
                while (++i < n) {
                    p0 = p1;
                    p1 = p2;
                    p2 = points[i];
                    tangents.push([ a * (p2[0] - p0[0]), a * (p2[1] - p0[1]) ]);
                }
                return tangents;
            }
            function d3_svg_lineBasis(points) {
                if (points.length < 3) return d3_svg_lineLinear(points);
                var i = 1, n = points.length, pi = points[0], x0 = pi[0], y0 = pi[1], px = [ x0, x0, x0, (pi = points[1])[0] ], py = [ y0, y0, y0, pi[1] ], path = [ x0, ",", y0 ];
                d3_svg_lineBasisBezier(path, px, py);
                while (++i < n) {
                    pi = points[i];
                    px.shift();
                    px.push(pi[0]);
                    py.shift();
                    py.push(pi[1]);
                    d3_svg_lineBasisBezier(path, px, py);
                }
                i = -1;
                while (++i < 2) {
                    px.shift();
                    px.push(pi[0]);
                    py.shift();
                    py.push(pi[1]);
                    d3_svg_lineBasisBezier(path, px, py);
                }
                return path.join("");
            }
            function d3_svg_lineBasisOpen(points) {
                if (points.length < 4) return d3_svg_lineLinear(points);
                var path = [], i = -1, n = points.length, pi, px = [ 0 ], py = [ 0 ];
                while (++i < 3) {
                    pi = points[i];
                    px.push(pi[0]);
                    py.push(pi[1]);
                }
                path.push(d3_svg_lineDot4(d3_svg_lineBasisBezier3, px) + "," + d3_svg_lineDot4(d3_svg_lineBasisBezier3, py));
                --i;
                while (++i < n) {
                    pi = points[i];
                    px.shift();
                    px.push(pi[0]);
                    py.shift();
                    py.push(pi[1]);
                    d3_svg_lineBasisBezier(path, px, py);
                }
                return path.join("");
            }
            function d3_svg_lineBasisClosed(points) {
                var path, i = -1, n = points.length, m = n + 4, pi, px = [], py = [];
                while (++i < 4) {
                    pi = points[i % n];
                    px.push(pi[0]);
                    py.push(pi[1]);
                }
                path = [ d3_svg_lineDot4(d3_svg_lineBasisBezier3, px), ",", d3_svg_lineDot4(d3_svg_lineBasisBezier3, py) ];
                --i;
                while (++i < m) {
                    pi = points[i % n];
                    px.shift();
                    px.push(pi[0]);
                    py.shift();
                    py.push(pi[1]);
                    d3_svg_lineBasisBezier(path, px, py);
                }
                return path.join("");
            }
            function d3_svg_lineBundle(points, tension) {
                var n = points.length - 1;
                if (n) {
                    var x0 = points[0][0], y0 = points[0][1], dx = points[n][0] - x0, dy = points[n][1] - y0, i = -1, p, t;
                    while (++i <= n) {
                        p = points[i];
                        t = i / n;
                        p[0] = tension * p[0] + (1 - tension) * (x0 + t * dx);
                        p[1] = tension * p[1] + (1 - tension) * (y0 + t * dy);
                    }
                }
                return d3_svg_lineBasis(points);
            }
            function d3_svg_lineDot4(a, b) {
                return a[0] * b[0] + a[1] * b[1] + a[2] * b[2] + a[3] * b[3];
            }
            var d3_svg_lineBasisBezier1 = [ 0, 2 / 3, 1 / 3, 0 ], d3_svg_lineBasisBezier2 = [ 0, 1 / 3, 2 / 3, 0 ], d3_svg_lineBasisBezier3 = [ 0, 1 / 6, 2 / 3, 1 / 6 ];
            function d3_svg_lineBasisBezier(path, x, y) {
                path.push("C", d3_svg_lineDot4(d3_svg_lineBasisBezier1, x), ",", d3_svg_lineDot4(d3_svg_lineBasisBezier1, y), ",", d3_svg_lineDot4(d3_svg_lineBasisBezier2, x), ",", d3_svg_lineDot4(d3_svg_lineBasisBezier2, y), ",", d3_svg_lineDot4(d3_svg_lineBasisBezier3, x), ",", d3_svg_lineDot4(d3_svg_lineBasisBezier3, y));
            }
            function d3_svg_lineSlope(p0, p1) {
                return (p1[1] - p0[1]) / (p1[0] - p0[0]);
            }
            function d3_svg_lineFiniteDifferences(points) {
                var i = 0, j = points.length - 1, m = [], p0 = points[0], p1 = points[1], d = m[0] = d3_svg_lineSlope(p0, p1);
                while (++i < j) {
                    m[i] = (d + (d = d3_svg_lineSlope(p0 = p1, p1 = points[i + 1]))) / 2;
                }
                m[i] = d;
                return m;
            }
            function d3_svg_lineMonotoneTangents(points) {
                var tangents = [], d, a, b, s, m = d3_svg_lineFiniteDifferences(points), i = -1, j = points.length - 1;
                while (++i < j) {
                    d = d3_svg_lineSlope(points[i], points[i + 1]);
                    if (Math.abs(d) < 1e-6) {
                        m[i] = m[i + 1] = 0;
                    } else {
                        a = m[i] / d;
                        b = m[i + 1] / d;
                        s = a * a + b * b;
                        if (s > 9) {
                            s = d * 3 / Math.sqrt(s);
                            m[i] = s * a;
                            m[i + 1] = s * b;
                        }
                    }
                }
                i = -1;
                while (++i <= j) {
                    s = (points[Math.min(j, i + 1)][0] - points[Math.max(0, i - 1)][0]) / (6 * (1 + m[i] * m[i]));
                    tangents.push([ s || 0, m[i] * s || 0 ]);
                }
                return tangents;
            }
            function d3_svg_lineMonotone(points) {
                return points.length < 3 ? d3_svg_lineLinear(points) : points[0] + d3_svg_lineHermite(points, d3_svg_lineMonotoneTangents(points));
            }
            d3.svg.line.radial = function() {
                var line = d3_svg_line(d3_svg_lineRadial);
                line.radius = line.x, delete line.x;
                line.angle = line.y, delete line.y;
                return line;
            };
            function d3_svg_lineRadial(points) {
                var point, i = -1, n = points.length, r, a;
                while (++i < n) {
                    point = points[i];
                    r = point[0];
                    a = point[1] + d3_svg_arcOffset;
                    point[0] = r * Math.cos(a);
                    point[1] = r * Math.sin(a);
                }
                return points;
            }
            function d3_svg_area(projection) {
                var x0 = d3_svg_lineX, x1 = d3_svg_lineX, y0 = 0, y1 = d3_svg_lineY, defined = d3_true, interpolate = d3_svg_lineLinear, interpolateKey = interpolate.key, interpolateReverse = interpolate, L = "L", tension = .7;
                function area(data) {
                    var segments = [], points0 = [], points1 = [], i = -1, n = data.length, d, fx0 = d3_functor(x0), fy0 = d3_functor(y0), fx1 = x0 === x1 ? function() {
                        return x;
                    } : d3_functor(x1), fy1 = y0 === y1 ? function() {
                        return y;
                    } : d3_functor(y1), x, y;
                    function segment() {
                        segments.push("M", interpolate(projection(points1), tension), L, interpolateReverse(projection(points0.reverse()), tension), "Z");
                    }
                    while (++i < n) {
                        if (defined.call(this, d = data[i], i)) {
                            points0.push([ x = +fx0.call(this, d, i), y = +fy0.call(this, d, i) ]);
                            points1.push([ +fx1.call(this, d, i), +fy1.call(this, d, i) ]);
                        } else if (points0.length) {
                            segment();
                            points0 = [];
                            points1 = [];
                        }
                    }
                    if (points0.length) segment();
                    return segments.length ? segments.join("") : null;
                }
                area.x = function(_) {
                    if (!arguments.length) return x1;
                    x0 = x1 = _;
                    return area;
                };
                area.x0 = function(_) {
                    if (!arguments.length) return x0;
                    x0 = _;
                    return area;
                };
                area.x1 = function(_) {
                    if (!arguments.length) return x1;
                    x1 = _;
                    return area;
                };
                area.y = function(_) {
                    if (!arguments.length) return y1;
                    y0 = y1 = _;
                    return area;
                };
                area.y0 = function(_) {
                    if (!arguments.length) return y0;
                    y0 = _;
                    return area;
                };
                area.y1 = function(_) {
                    if (!arguments.length) return y1;
                    y1 = _;
                    return area;
                };
                area.defined = function(_) {
                    if (!arguments.length) return defined;
                    defined = _;
                    return area;
                };
                area.interpolate = function(_) {
                    if (!arguments.length) return interpolateKey;
                    if (typeof _ === "function") interpolateKey = interpolate = _; else interpolateKey = (interpolate = d3_svg_lineInterpolators.get(_) || d3_svg_lineLinear).key;
                    interpolateReverse = interpolate.reverse || interpolate;
                    L = interpolate.closed ? "M" : "L";
                    return area;
                };
                area.tension = function(_) {
                    if (!arguments.length) return tension;
                    tension = _;
                    return area;
                };
                return area;
            }
            d3_svg_lineStepBefore.reverse = d3_svg_lineStepAfter;
            d3_svg_lineStepAfter.reverse = d3_svg_lineStepBefore;
            d3.svg.area = function() {
                return d3_svg_area(d3_identity);
            };
            d3.svg.area.radial = function() {
                var area = d3_svg_area(d3_svg_lineRadial);
                area.radius = area.x, delete area.x;
                area.innerRadius = area.x0, delete area.x0;
                area.outerRadius = area.x1, delete area.x1;
                area.angle = area.y, delete area.y;
                area.startAngle = area.y0, delete area.y0;
                area.endAngle = area.y1, delete area.y1;
                return area;
            };
            d3.svg.chord = function() {
                var source = d3_source, target = d3_target, radius = d3_svg_chordRadius, startAngle = d3_svg_arcStartAngle, endAngle = d3_svg_arcEndAngle;
                function chord(d, i) {
                    var s = subgroup(this, source, d, i), t = subgroup(this, target, d, i);
                    return "M" + s.p0 + arc(s.r, s.p1, s.a1 - s.a0) + (equals(s, t) ? curve(s.r, s.p1, s.r, s.p0) : curve(s.r, s.p1, t.r, t.p0) + arc(t.r, t.p1, t.a1 - t.a0) + curve(t.r, t.p1, s.r, s.p0)) + "Z";
                }
                function subgroup(self, f, d, i) {
                    var subgroup = f.call(self, d, i), r = radius.call(self, subgroup, i), a0 = startAngle.call(self, subgroup, i) + d3_svg_arcOffset, a1 = endAngle.call(self, subgroup, i) + d3_svg_arcOffset;
                    return {
                        r: r,
                        a0: a0,
                        a1: a1,
                        p0: [ r * Math.cos(a0), r * Math.sin(a0) ],
                        p1: [ r * Math.cos(a1), r * Math.sin(a1) ]
                    };
                }
                function equals(a, b) {
                    return a.a0 == b.a0 && a.a1 == b.a1;
                }
                function arc(r, p, a) {
                    return "A" + r + "," + r + " 0 " + +(a > π) + ",1 " + p;
                }
                function curve(r0, p0, r1, p1) {
                    return "Q 0,0 " + p1;
                }
                chord.radius = function(v) {
                    if (!arguments.length) return radius;
                    radius = d3_functor(v);
                    return chord;
                };
                chord.source = function(v) {
                    if (!arguments.length) return source;
                    source = d3_functor(v);
                    return chord;
                };
                chord.target = function(v) {
                    if (!arguments.length) return target;
                    target = d3_functor(v);
                    return chord;
                };
                chord.startAngle = function(v) {
                    if (!arguments.length) return startAngle;
                    startAngle = d3_functor(v);
                    return chord;
                };
                chord.endAngle = function(v) {
                    if (!arguments.length) return endAngle;
                    endAngle = d3_functor(v);
                    return chord;
                };
                return chord;
            };
            function d3_svg_chordRadius(d) {
                return d.radius;
            }
            d3.svg.diagonal = function() {
                var source = d3_source, target = d3_target, projection = d3_svg_diagonalProjection;
                function diagonal(d, i) {
                    var p0 = source.call(this, d, i), p3 = target.call(this, d, i), m = (p0.y + p3.y) / 2, p = [ p0, {
                        x: p0.x,
                        y: m
                    }, {
                        x: p3.x,
                        y: m
                    }, p3 ];
                    p = p.map(projection);
                    return "M" + p[0] + "C" + p[1] + " " + p[2] + " " + p[3];
                }
                diagonal.source = function(x) {
                    if (!arguments.length) return source;
                    source = d3_functor(x);
                    return diagonal;
                };
                diagonal.target = function(x) {
                    if (!arguments.length) return target;
                    target = d3_functor(x);
                    return diagonal;
                };
                diagonal.projection = function(x) {
                    if (!arguments.length) return projection;
                    projection = x;
                    return diagonal;
                };
                return diagonal;
            };
            function d3_svg_diagonalProjection(d) {
                return [ d.x, d.y ];
            }
            d3.svg.diagonal.radial = function() {
                var diagonal = d3.svg.diagonal(), projection = d3_svg_diagonalProjection, projection_ = diagonal.projection;
                diagonal.projection = function(x) {
                    return arguments.length ? projection_(d3_svg_diagonalRadialProjection(projection = x)) : projection;
                };
                return diagonal;
            };
            function d3_svg_diagonalRadialProjection(projection) {
                return function() {
                    var d = projection.apply(this, arguments), r = d[0], a = d[1] + d3_svg_arcOffset;
                    return [ r * Math.cos(a), r * Math.sin(a) ];
                };
            }
            d3.svg.symbol = function() {
                var type = d3_svg_symbolType, size = d3_svg_symbolSize;
                function symbol(d, i) {
                    return (d3_svg_symbols.get(type.call(this, d, i)) || d3_svg_symbolCircle)(size.call(this, d, i));
                }
                symbol.type = function(x) {
                    if (!arguments.length) return type;
                    type = d3_functor(x);
                    return symbol;
                };
                symbol.size = function(x) {
                    if (!arguments.length) return size;
                    size = d3_functor(x);
                    return symbol;
                };
                return symbol;
            };
            function d3_svg_symbolSize() {
                return 64;
            }
            function d3_svg_symbolType() {
                return "circle";
            }
            function d3_svg_symbolCircle(size) {
                var r = Math.sqrt(size / π);
                return "M0," + r + "A" + r + "," + r + " 0 1,1 0," + -r + "A" + r + "," + r + " 0 1,1 0," + r + "Z";
            }
            var d3_svg_symbols = d3.map({
                circle: d3_svg_symbolCircle,
                cross: function(size) {
                    var r = Math.sqrt(size / 5) / 2;
                    return "M" + -3 * r + "," + -r + "H" + -r + "V" + -3 * r + "H" + r + "V" + -r + "H" + 3 * r + "V" + r + "H" + r + "V" + 3 * r + "H" + -r + "V" + r + "H" + -3 * r + "Z";
                },
                diamond: function(size) {
                    var ry = Math.sqrt(size / (2 * d3_svg_symbolTan30)), rx = ry * d3_svg_symbolTan30;
                    return "M0," + -ry + "L" + rx + ",0" + " 0," + ry + " " + -rx + ",0" + "Z";
                },
                square: function(size) {
                    var r = Math.sqrt(size) / 2;
                    return "M" + -r + "," + -r + "L" + r + "," + -r + " " + r + "," + r + " " + -r + "," + r + "Z";
                },
                "triangle-down": function(size) {
                    var rx = Math.sqrt(size / d3_svg_symbolSqrt3), ry = rx * d3_svg_symbolSqrt3 / 2;
                    return "M0," + ry + "L" + rx + "," + -ry + " " + -rx + "," + -ry + "Z";
                },
                "triangle-up": function(size) {
                    var rx = Math.sqrt(size / d3_svg_symbolSqrt3), ry = rx * d3_svg_symbolSqrt3 / 2;
                    return "M0," + -ry + "L" + rx + "," + ry + " " + -rx + "," + ry + "Z";
                }
            });
            d3.svg.symbolTypes = d3_svg_symbols.keys();
            var d3_svg_symbolSqrt3 = Math.sqrt(3), d3_svg_symbolTan30 = Math.tan(30 * d3_radians);
            d3.svg.axis = function() {
                var scale = d3.scale.linear(), orient = d3_svg_axisDefaultOrient, tickMajorSize = 6, tickMinorSize = 6, tickEndSize = 6, tickPadding = 3, tickArguments_ = [ 10 ], tickValues = null, tickFormat_, tickSubdivide = 0;
                function axis(g) {
                    g.each(function() {
                        var g = d3.select(this);
                        var ticks = tickValues == null ? scale.ticks ? scale.ticks.apply(scale, tickArguments_) : scale.domain() : tickValues, tickFormat = tickFormat_ == null ? scale.tickFormat ? scale.tickFormat.apply(scale, tickArguments_) : String : tickFormat_;
                        var subticks = d3_svg_axisSubdivide(scale, ticks, tickSubdivide), subtick = g.selectAll(".tick.minor").data(subticks, String), subtickEnter = subtick.enter().insert("line", ".tick").attr("class", "tick minor").style("opacity", 1e-6), subtickExit = d3.transition(subtick.exit()).style("opacity", 1e-6).remove(), subtickUpdate = d3.transition(subtick).style("opacity", 1);
                        var tick = g.selectAll(".tick.major").data(ticks, String), tickEnter = tick.enter().insert("g", "path").attr("class", "tick major").style("opacity", 1e-6), tickExit = d3.transition(tick.exit()).style("opacity", 1e-6).remove(), tickUpdate = d3.transition(tick).style("opacity", 1), tickTransform;
                        var range = d3_scaleRange(scale), path = g.selectAll(".domain").data([ 0 ]), pathUpdate = (path.enter().append("path").attr("class", "domain"),
                            d3.transition(path));
                        var scale1 = scale.copy(), scale0 = this.__chart__ || scale1;
                        this.__chart__ = scale1;
                        tickEnter.append("line");
                        tickEnter.append("text");
                        var lineEnter = tickEnter.select("line"), lineUpdate = tickUpdate.select("line"), text = tick.select("text").text(tickFormat), textEnter = tickEnter.select("text"), textUpdate = tickUpdate.select("text");
                        switch (orient) {
                            case "bottom":
                            {
                                tickTransform = d3_svg_axisX;
                                subtickEnter.attr("y2", tickMinorSize);
                                subtickUpdate.attr("x2", 0).attr("y2", tickMinorSize);
                                lineEnter.attr("y2", tickMajorSize);
                                textEnter.attr("y", Math.max(tickMajorSize, 0) + tickPadding);
                                lineUpdate.attr("x2", 0).attr("y2", tickMajorSize);
                                textUpdate.attr("x", 0).attr("y", Math.max(tickMajorSize, 0) + tickPadding);
                                text.attr("dy", ".71em").style("text-anchor", "middle");
                                pathUpdate.attr("d", "M" + range[0] + "," + tickEndSize + "V0H" + range[1] + "V" + tickEndSize);
                                break;
                            }

                            case "top":
                            {
                                tickTransform = d3_svg_axisX;
                                subtickEnter.attr("y2", -tickMinorSize);
                                subtickUpdate.attr("x2", 0).attr("y2", -tickMinorSize);
                                lineEnter.attr("y2", -tickMajorSize);
                                textEnter.attr("y", -(Math.max(tickMajorSize, 0) + tickPadding));
                                lineUpdate.attr("x2", 0).attr("y2", -tickMajorSize);
                                textUpdate.attr("x", 0).attr("y", -(Math.max(tickMajorSize, 0) + tickPadding));
                                text.attr("dy", "0em").style("text-anchor", "middle");
                                pathUpdate.attr("d", "M" + range[0] + "," + -tickEndSize + "V0H" + range[1] + "V" + -tickEndSize);
                                break;
                            }

                            case "left":
                            {
                                tickTransform = d3_svg_axisY;
                                subtickEnter.attr("x2", -tickMinorSize);
                                subtickUpdate.attr("x2", -tickMinorSize).attr("y2", 0);
                                lineEnter.attr("x2", -tickMajorSize);
                                textEnter.attr("x", -(Math.max(tickMajorSize, 0) + tickPadding));
                                lineUpdate.attr("x2", -tickMajorSize).attr("y2", 0);
                                textUpdate.attr("x", -(Math.max(tickMajorSize, 0) + tickPadding)).attr("y", 0);
                                text.attr("dy", ".32em").style("text-anchor", "end");
                                pathUpdate.attr("d", "M" + -tickEndSize + "," + range[0] + "H0V" + range[1] + "H" + -tickEndSize);
                                break;
                            }

                            case "right":
                            {
                                tickTransform = d3_svg_axisY;
                                subtickEnter.attr("x2", tickMinorSize);
                                subtickUpdate.attr("x2", tickMinorSize).attr("y2", 0);
                                lineEnter.attr("x2", tickMajorSize);
                                textEnter.attr("x", Math.max(tickMajorSize, 0) + tickPadding);
                                lineUpdate.attr("x2", tickMajorSize).attr("y2", 0);
                                textUpdate.attr("x", Math.max(tickMajorSize, 0) + tickPadding).attr("y", 0);
                                text.attr("dy", ".32em").style("text-anchor", "start");
                                pathUpdate.attr("d", "M" + tickEndSize + "," + range[0] + "H0V" + range[1] + "H" + tickEndSize);
                                break;
                            }
                        }
                        if (scale.ticks) {
                            tickEnter.call(tickTransform, scale0);
                            tickUpdate.call(tickTransform, scale1);
                            tickExit.call(tickTransform, scale1);
                            subtickEnter.call(tickTransform, scale0);
                            subtickUpdate.call(tickTransform, scale1);
                            subtickExit.call(tickTransform, scale1);
                        } else {
                            var dx = scale1.rangeBand() / 2, x = function(d) {
                                return scale1(d) + dx;
                            };
                            tickEnter.call(tickTransform, x);
                            tickUpdate.call(tickTransform, x);
                        }
                    });
                }
                axis.scale = function(x) {
                    if (!arguments.length) return scale;
                    scale = x;
                    return axis;
                };
                axis.orient = function(x) {
                    if (!arguments.length) return orient;
                    orient = x in d3_svg_axisOrients ? x + "" : d3_svg_axisDefaultOrient;
                    return axis;
                };
                axis.ticks = function() {
                    if (!arguments.length) return tickArguments_;
                    tickArguments_ = arguments;
                    return axis;
                };
                axis.tickValues = function(x) {
                    if (!arguments.length) return tickValues;
                    tickValues = x;
                    return axis;
                };
                axis.tickFormat = function(x) {
                    if (!arguments.length) return tickFormat_;
                    tickFormat_ = x;
                    return axis;
                };
                axis.tickSize = function(x, y) {
                    if (!arguments.length) return tickMajorSize;
                    var n = arguments.length - 1;
                    tickMajorSize = +x;
                    tickMinorSize = n > 1 ? +y : tickMajorSize;
                    tickEndSize = n > 0 ? +arguments[n] : tickMajorSize;
                    return axis;
                };
                axis.tickPadding = function(x) {
                    if (!arguments.length) return tickPadding;
                    tickPadding = +x;
                    return axis;
                };
                axis.tickSubdivide = function(x) {
                    if (!arguments.length) return tickSubdivide;
                    tickSubdivide = +x;
                    return axis;
                };
                return axis;
            };
            var d3_svg_axisDefaultOrient = "bottom", d3_svg_axisOrients = {
                top: 1,
                right: 1,
                bottom: 1,
                left: 1
            };
            function d3_svg_axisX(selection, x) {
                selection.attr("transform", function(d) {
                    return "translate(" + x(d) + ",0)";
                });
            }
            function d3_svg_axisY(selection, y) {
                selection.attr("transform", function(d) {
                    return "translate(0," + y(d) + ")";
                });
            }
            function d3_svg_axisSubdivide(scale, ticks, m) {
                subticks = [];
                if (m && ticks.length > 1) {
                    var extent = d3_scaleExtent(scale.domain()), subticks, i = -1, n = ticks.length, d = (ticks[1] - ticks[0]) / ++m, j, v;
                    while (++i < n) {
                        for (j = m; --j > 0; ) {
                            if ((v = +ticks[i] - j * d) >= extent[0]) {
                                subticks.push(v);
                            }
                        }
                    }
                    for (--i, j = 0; ++j < m && (v = +ticks[i] + j * d) < extent[1]; ) {
                        subticks.push(v);
                    }
                }
                return subticks;
            }
            d3.svg.brush = function() {
                var event = d3_eventDispatch(brush, "brushstart", "brush", "brushend"), x = null, y = null, resizes = d3_svg_brushResizes[0], extent = [ [ 0, 0 ], [ 0, 0 ] ], extentDomain;
                function brush(g) {
                    g.each(function() {
                        var g = d3.select(this), bg = g.selectAll(".background").data([ 0 ]), fg = g.selectAll(".extent").data([ 0 ]), tz = g.selectAll(".resize").data(resizes, String), e;
                        g.style("pointer-events", "all").on("mousedown.brush", brushstart).on("touchstart.brush", brushstart);
                        bg.enter().append("rect").attr("class", "background").style("visibility", "hidden").style("cursor", "crosshair");
                        fg.enter().append("rect").attr("class", "extent").style("cursor", "move");
                        tz.enter().append("g").attr("class", function(d) {
                            return "resize " + d;
                        }).style("cursor", function(d) {
                                return d3_svg_brushCursor[d];
                            }).append("rect").attr("x", function(d) {
                                return /[ew]$/.test(d) ? -3 : null;
                            }).attr("y", function(d) {
                                return /^[ns]/.test(d) ? -3 : null;
                            }).attr("width", 6).attr("height", 6).style("visibility", "hidden");
                        tz.style("display", brush.empty() ? "none" : null);
                        tz.exit().remove();
                        if (x) {
                            e = d3_scaleRange(x);
                            bg.attr("x", e[0]).attr("width", e[1] - e[0]);
                            redrawX(g);
                        }
                        if (y) {
                            e = d3_scaleRange(y);
                            bg.attr("y", e[0]).attr("height", e[1] - e[0]);
                            redrawY(g);
                        }
                        redraw(g);
                    });
                }
                function redraw(g) {
                    g.selectAll(".resize").attr("transform", function(d) {
                        return "translate(" + extent[+/e$/.test(d)][0] + "," + extent[+/^s/.test(d)][1] + ")";
                    });
                }
                function redrawX(g) {
                    g.select(".extent").attr("x", extent[0][0]);
                    g.selectAll(".extent,.n>rect,.s>rect").attr("width", extent[1][0] - extent[0][0]);
                }
                function redrawY(g) {
                    g.select(".extent").attr("y", extent[0][1]);
                    g.selectAll(".extent,.e>rect,.w>rect").attr("height", extent[1][1] - extent[0][1]);
                }
                function brushstart() {
                    var target = this, eventTarget = d3.select(d3.event.target), event_ = event.of(target, arguments), g = d3.select(target), resizing = eventTarget.datum(), resizingX = !/^(n|s)$/.test(resizing) && x, resizingY = !/^(e|w)$/.test(resizing) && y, dragging = eventTarget.classed("extent"), center, origin = mouse(), offset;
                    var w = d3.select(d3_window).on("mousemove.brush", brushmove).on("mouseup.brush", brushend).on("touchmove.brush", brushmove).on("touchend.brush", brushend).on("keydown.brush", keydown).on("keyup.brush", keyup);
                    if (dragging) {
                        origin[0] = extent[0][0] - origin[0];
                        origin[1] = extent[0][1] - origin[1];
                    } else if (resizing) {
                        var ex = +/w$/.test(resizing), ey = +/^n/.test(resizing);
                        offset = [ extent[1 - ex][0] - origin[0], extent[1 - ey][1] - origin[1] ];
                        origin[0] = extent[ex][0];
                        origin[1] = extent[ey][1];
                    } else if (d3.event.altKey) center = origin.slice();
                    g.style("pointer-events", "none").selectAll(".resize").style("display", null);
                    d3.select("body").style("cursor", eventTarget.style("cursor"));
                    event_({
                        type: "brushstart"
                    });
                    brushmove();
                    d3_eventCancel();
                    function mouse() {
                        var touches = d3.event.changedTouches;
                        return touches ? d3.touches(target, touches)[0] : d3.mouse(target);
                    }
                    function keydown() {
                        if (d3.event.keyCode == 32) {
                            if (!dragging) {
                                center = null;
                                origin[0] -= extent[1][0];
                                origin[1] -= extent[1][1];
                                dragging = 2;
                            }
                            d3_eventCancel();
                        }
                    }
                    function keyup() {
                        if (d3.event.keyCode == 32 && dragging == 2) {
                            origin[0] += extent[1][0];
                            origin[1] += extent[1][1];
                            dragging = 0;
                            d3_eventCancel();
                        }
                    }
                    function brushmove() {
                        var point = mouse(), moved = false;
                        if (offset) {
                            point[0] += offset[0];
                            point[1] += offset[1];
                        }
                        if (!dragging) {
                            if (d3.event.altKey) {
                                if (!center) center = [ (extent[0][0] + extent[1][0]) / 2, (extent[0][1] + extent[1][1]) / 2 ];
                                origin[0] = extent[+(point[0] < center[0])][0];
                                origin[1] = extent[+(point[1] < center[1])][1];
                            } else center = null;
                        }
                        if (resizingX && move1(point, x, 0)) {
                            redrawX(g);
                            moved = true;
                        }
                        if (resizingY && move1(point, y, 1)) {
                            redrawY(g);
                            moved = true;
                        }
                        if (moved) {
                            redraw(g);
                            event_({
                                type: "brush",
                                mode: dragging ? "move" : "resize"
                            });
                        }
                    }
                    function move1(point, scale, i) {
                        var range = d3_scaleRange(scale), r0 = range[0], r1 = range[1], position = origin[i], size = extent[1][i] - extent[0][i], min, max;
                        if (dragging) {
                            r0 -= position;
                            r1 -= size + position;
                        }
                        min = Math.max(r0, Math.min(r1, point[i]));
                        if (dragging) {
                            max = (min += position) + size;
                        } else {
                            if (center) position = Math.max(r0, Math.min(r1, 2 * center[i] - min));
                            if (position < min) {
                                max = min;
                                min = position;
                            } else {
                                max = position;
                            }
                        }
                        if (extent[0][i] !== min || extent[1][i] !== max) {
                            extentDomain = null;
                            extent[0][i] = min;
                            extent[1][i] = max;
                            return true;
                        }
                    }
                    function brushend() {
                        brushmove();
                        g.style("pointer-events", "all").selectAll(".resize").style("display", brush.empty() ? "none" : null);
                        d3.select("body").style("cursor", null);
                        w.on("mousemove.brush", null).on("mouseup.brush", null).on("touchmove.brush", null).on("touchend.brush", null).on("keydown.brush", null).on("keyup.brush", null);
                        event_({
                            type: "brushend"
                        });
                        d3_eventCancel();
                    }
                }
                brush.x = function(z) {
                    if (!arguments.length) return x;
                    x = z;
                    resizes = d3_svg_brushResizes[!x << 1 | !y];
                    return brush;
                };
                brush.y = function(z) {
                    if (!arguments.length) return y;
                    y = z;
                    resizes = d3_svg_brushResizes[!x << 1 | !y];
                    return brush;
                };
                brush.extent = function(z) {
                    var x0, x1, y0, y1, t;
                    if (!arguments.length) {
                        z = extentDomain || extent;
                        if (x) {
                            x0 = z[0][0], x1 = z[1][0];
                            if (!extentDomain) {
                                x0 = extent[0][0], x1 = extent[1][0];
                                if (x.invert) x0 = x.invert(x0), x1 = x.invert(x1);
                                if (x1 < x0) t = x0, x0 = x1, x1 = t;
                            }
                        }
                        if (y) {
                            y0 = z[0][1], y1 = z[1][1];
                            if (!extentDomain) {
                                y0 = extent[0][1], y1 = extent[1][1];
                                if (y.invert) y0 = y.invert(y0), y1 = y.invert(y1);
                                if (y1 < y0) t = y0, y0 = y1, y1 = t;
                            }
                        }
                        return x && y ? [ [ x0, y0 ], [ x1, y1 ] ] : x ? [ x0, x1 ] : y && [ y0, y1 ];
                    }
                    extentDomain = [ [ 0, 0 ], [ 0, 0 ] ];
                    if (x) {
                        x0 = z[0], x1 = z[1];
                        if (y) x0 = x0[0], x1 = x1[0];
                        extentDomain[0][0] = x0, extentDomain[1][0] = x1;
                        if (x.invert) x0 = x(x0), x1 = x(x1);
                        if (x1 < x0) t = x0, x0 = x1, x1 = t;
                        extent[0][0] = x0 | 0, extent[1][0] = x1 | 0;
                    }
                    if (y) {
                        y0 = z[0], y1 = z[1];
                        if (x) y0 = y0[1], y1 = y1[1];
                        extentDomain[0][1] = y0, extentDomain[1][1] = y1;
                        if (y.invert) y0 = y(y0), y1 = y(y1);
                        if (y1 < y0) t = y0, y0 = y1, y1 = t;
                        extent[0][1] = y0 | 0, extent[1][1] = y1 | 0;
                    }
                    return brush;
                };
                brush.clear = function() {
                    extentDomain = null;
                    extent[0][0] = extent[0][1] = extent[1][0] = extent[1][1] = 0;
                    return brush;
                };
                brush.empty = function() {
                    return x && extent[0][0] === extent[1][0] || y && extent[0][1] === extent[1][1];
                };
                return d3.rebind(brush, event, "on");
            };
            var d3_svg_brushCursor = {
                n: "ns-resize",
                e: "ew-resize",
                s: "ns-resize",
                w: "ew-resize",
                nw: "nwse-resize",
                ne: "nesw-resize",
                se: "nwse-resize",
                sw: "nesw-resize"
            };
            var d3_svg_brushResizes = [ [ "n", "e", "s", "w", "nw", "ne", "se", "sw" ], [ "e", "w" ], [ "n", "s" ], [] ];
            d3.behavior = {};
            d3.behavior.drag = function() {
                var event = d3_eventDispatch(drag, "drag", "dragstart", "dragend"), origin = null;
                function drag() {
                    this.on("mousedown.drag", mousedown).on("touchstart.drag", mousedown);
                }
                function mousedown() {
                    var target = this, event_ = event.of(target, arguments), eventTarget = d3.event.target, touchId = d3.event.touches ? d3.event.changedTouches[0].identifier : null, offset, origin_ = point(), moved = 0;
                    var w = d3.select(d3_window).on(touchId != null ? "touchmove.drag-" + touchId : "mousemove.drag", dragmove).on(touchId != null ? "touchend.drag-" + touchId : "mouseup.drag", dragend, true);
                    if (origin) {
                        offset = origin.apply(target, arguments);
                        offset = [ offset.x - origin_[0], offset.y - origin_[1] ];
                    } else {
                        offset = [ 0, 0 ];
                    }
                    if (touchId == null) d3_eventCancel();
                    event_({
                        type: "dragstart"
                    });
                    function point() {
                        var p = target.parentNode;
                        return touchId != null ? d3.touches(p).filter(function(p) {
                            return p.identifier === touchId;
                        })[0] : d3.mouse(p);
                    }
                    function dragmove() {
                        if (!target.parentNode) return dragend();
                        var p = point(), dx = p[0] - origin_[0], dy = p[1] - origin_[1];
                        moved |= dx | dy;
                        origin_ = p;
                        d3_eventCancel();
                        event_({
                            type: "drag",
                            x: p[0] + offset[0],
                            y: p[1] + offset[1],
                            dx: dx,
                            dy: dy
                        });
                    }
                    function dragend() {
                        event_({
                            type: "dragend"
                        });
                        if (moved) {
                            d3_eventCancel();
                            if (d3.event.target === eventTarget) w.on("click.drag", click, true);
                        }
                        w.on(touchId != null ? "touchmove.drag-" + touchId : "mousemove.drag", null).on(touchId != null ? "touchend.drag-" + touchId : "mouseup.drag", null);
                    }
                    function click() {
                        d3_eventCancel();
                        w.on("click.drag", null);
                    }
                }
                drag.origin = function(x) {
                    if (!arguments.length) return origin;
                    origin = x;
                    return drag;
                };
                return d3.rebind(drag, event, "on");
            };
            d3.behavior.zoom = function() {
                var translate = [ 0, 0 ], translate0, scale = 1, scale0, scaleExtent = d3_behavior_zoomInfinity, event = d3_eventDispatch(zoom, "zoom"), x0, x1, y0, y1, touchtime;
                function zoom() {
                    this.on("mousedown.zoom", mousedown).on("mousemove.zoom", mousemove).on(d3_behavior_zoomWheel + ".zoom", mousewheel).on("dblclick.zoom", dblclick).on("touchstart.zoom", touchstart).on("touchmove.zoom", touchmove).on("touchend.zoom", touchstart);
                }
                zoom.translate = function(x) {
                    if (!arguments.length) return translate;
                    translate = x.map(Number);
                    rescale();
                    return zoom;
                };
                zoom.scale = function(x) {
                    if (!arguments.length) return scale;
                    scale = +x;
                    rescale();
                    return zoom;
                };
                zoom.scaleExtent = function(x) {
                    if (!arguments.length) return scaleExtent;
                    scaleExtent = x == null ? d3_behavior_zoomInfinity : x.map(Number);
                    return zoom;
                };
                zoom.x = function(z) {
                    if (!arguments.length) return x1;
                    x1 = z;
                    x0 = z.copy();
                    translate = [ 0, 0 ];
                    scale = 1;
                    return zoom;
                };
                zoom.y = function(z) {
                    if (!arguments.length) return y1;
                    y1 = z;
                    y0 = z.copy();
                    translate = [ 0, 0 ];
                    scale = 1;
                    return zoom;
                };
                function location(p) {
                    return [ (p[0] - translate[0]) / scale, (p[1] - translate[1]) / scale ];
                }
                function point(l) {
                    return [ l[0] * scale + translate[0], l[1] * scale + translate[1] ];
                }
                function scaleTo(s) {
                    scale = Math.max(scaleExtent[0], Math.min(scaleExtent[1], s));
                }
                function translateTo(p, l) {
                    l = point(l);
                    translate[0] += p[0] - l[0];
                    translate[1] += p[1] - l[1];
                }
                function rescale() {
                    if (x1) x1.domain(x0.range().map(function(x) {
                        return (x - translate[0]) / scale;
                    }).map(x0.invert));
                    if (y1) y1.domain(y0.range().map(function(y) {
                        return (y - translate[1]) / scale;
                    }).map(y0.invert));
                }
                function dispatch(event) {
                    rescale();
                    d3.event.preventDefault();
                    event({
                        type: "zoom",
                        scale: scale,
                        translate: translate
                    });
                }
                function mousedown() {
                    var target = this, event_ = event.of(target, arguments), eventTarget = d3.event.target, moved = 0, w = d3.select(d3_window).on("mousemove.zoom", mousemove).on("mouseup.zoom", mouseup), l = location(d3.mouse(target));
                    d3_window.focus();
                    d3_eventCancel();
                    function mousemove() {
                        moved = 1;
                        translateTo(d3.mouse(target), l);
                        dispatch(event_);
                    }
                    function mouseup() {
                        if (moved) d3_eventCancel();
                        w.on("mousemove.zoom", null).on("mouseup.zoom", null);
                        if (moved && d3.event.target === eventTarget) w.on("click.zoom", click, true);
                    }
                    function click() {
                        d3_eventCancel();
                        w.on("click.zoom", null);
                    }
                }
                function mousewheel() {
                    if (!translate0) translate0 = location(d3.mouse(this));
                    scaleTo(Math.pow(2, d3_behavior_zoomDelta() * .002) * scale);
                    translateTo(d3.mouse(this), translate0);
                    dispatch(event.of(this, arguments));
                }
                function mousemove() {
                    translate0 = null;
                }
                function dblclick() {
                    var p = d3.mouse(this), l = location(p), k = Math.log(scale) / Math.LN2;
                    scaleTo(Math.pow(2, d3.event.shiftKey ? Math.ceil(k) - 1 : Math.floor(k) + 1));
                    translateTo(p, l);
                    dispatch(event.of(this, arguments));
                }
                function touchstart() {
                    var touches = d3.touches(this), now = Date.now();
                    scale0 = scale;
                    translate0 = {};
                    touches.forEach(function(t) {
                        translate0[t.identifier] = location(t);
                    });
                    d3_eventCancel();
                    if (touches.length === 1) {
                        if (now - touchtime < 500) {
                            var p = touches[0], l = location(touches[0]);
                            scaleTo(scale * 2);
                            translateTo(p, l);
                            dispatch(event.of(this, arguments));
                        }
                        touchtime = now;
                    }
                }
                function touchmove() {
                    var touches = d3.touches(this), p0 = touches[0], l0 = translate0[p0.identifier];
                    if (p1 = touches[1]) {
                        var p1, l1 = translate0[p1.identifier];
                        p0 = [ (p0[0] + p1[0]) / 2, (p0[1] + p1[1]) / 2 ];
                        l0 = [ (l0[0] + l1[0]) / 2, (l0[1] + l1[1]) / 2 ];
                        scaleTo(d3.event.scale * scale0);
                    }
                    translateTo(p0, l0);
                    touchtime = null;
                    dispatch(event.of(this, arguments));
                }
                return d3.rebind(zoom, event, "on");
            };
            var d3_behavior_zoomInfinity = [ 0, Infinity ];
            var d3_behavior_zoomDelta, d3_behavior_zoomWheel = "onwheel" in document ? (d3_behavior_zoomDelta = function() {
                return -d3.event.deltaY * (d3.event.deltaMode ? 120 : 1);
            }, "wheel") : "onmousewheel" in document ? (d3_behavior_zoomDelta = function() {
                return d3.event.wheelDelta;
            }, "mousewheel") : (d3_behavior_zoomDelta = function() {
                return -d3.event.detail;
            }, "MozMousePixelScroll");
            d3.layout = {};
            d3.layout.bundle = function() {
                return function(links) {
                    var paths = [], i = -1, n = links.length;
                    while (++i < n) paths.push(d3_layout_bundlePath(links[i]));
                    return paths;
                };
            };
            function d3_layout_bundlePath(link) {
                var start = link.source, end = link.target, lca = d3_layout_bundleLeastCommonAncestor(start, end), points = [ start ];
                while (start !== lca) {
                    start = start.parent;
                    points.push(start);
                }
                var k = points.length;
                while (end !== lca) {
                    points.splice(k, 0, end);
                    end = end.parent;
                }
                return points;
            }
            function d3_layout_bundleAncestors(node) {
                var ancestors = [], parent = node.parent;
                while (parent != null) {
                    ancestors.push(node);
                    node = parent;
                    parent = parent.parent;
                }
                ancestors.push(node);
                return ancestors;
            }
            function d3_layout_bundleLeastCommonAncestor(a, b) {
                if (a === b) return a;
                var aNodes = d3_layout_bundleAncestors(a), bNodes = d3_layout_bundleAncestors(b), aNode = aNodes.pop(), bNode = bNodes.pop(), sharedNode = null;
                while (aNode === bNode) {
                    sharedNode = aNode;
                    aNode = aNodes.pop();
                    bNode = bNodes.pop();
                }
                return sharedNode;
            }
            d3.layout.chord = function() {
                var chord = {}, chords, groups, matrix, n, padding = 0, sortGroups, sortSubgroups, sortChords;
                function relayout() {
                    var subgroups = {}, groupSums = [], groupIndex = d3.range(n), subgroupIndex = [], k, x, x0, i, j;
                    chords = [];
                    groups = [];
                    k = 0, i = -1;
                    while (++i < n) {
                        x = 0, j = -1;
                        while (++j < n) {
                            x += matrix[i][j];
                        }
                        groupSums.push(x);
                        subgroupIndex.push(d3.range(n));
                        k += x;
                    }
                    if (sortGroups) {
                        groupIndex.sort(function(a, b) {
                            return sortGroups(groupSums[a], groupSums[b]);
                        });
                    }
                    if (sortSubgroups) {
                        subgroupIndex.forEach(function(d, i) {
                            d.sort(function(a, b) {
                                return sortSubgroups(matrix[i][a], matrix[i][b]);
                            });
                        });
                    }
                    k = (2 * π - padding * n) / k;
                    x = 0, i = -1;
                    while (++i < n) {
                        x0 = x, j = -1;
                        while (++j < n) {
                            var di = groupIndex[i], dj = subgroupIndex[di][j], v = matrix[di][dj], a0 = x, a1 = x += v * k;
                            subgroups[di + "-" + dj] = {
                                index: di,
                                subindex: dj,
                                startAngle: a0,
                                endAngle: a1,
                                value: v
                            };
                        }
                        groups[di] = {
                            index: di,
                            startAngle: x0,
                            endAngle: x,
                            value: (x - x0) / k
                        };
                        x += padding;
                    }
                    i = -1;
                    while (++i < n) {
                        j = i - 1;
                        while (++j < n) {
                            var source = subgroups[i + "-" + j], target = subgroups[j + "-" + i];
                            if (source.value || target.value) {
                                chords.push(source.value < target.value ? {
                                    source: target,
                                    target: source
                                } : {
                                    source: source,
                                    target: target
                                });
                            }
                        }
                    }
                    if (sortChords) resort();
                }
                function resort() {
                    chords.sort(function(a, b) {
                        return sortChords((a.source.value + a.target.value) / 2, (b.source.value + b.target.value) / 2);
                    });
                }
                chord.matrix = function(x) {
                    if (!arguments.length) return matrix;
                    n = (matrix = x) && matrix.length;
                    chords = groups = null;
                    return chord;
                };
                chord.padding = function(x) {
                    if (!arguments.length) return padding;
                    padding = x;
                    chords = groups = null;
                    return chord;
                };
                chord.sortGroups = function(x) {
                    if (!arguments.length) return sortGroups;
                    sortGroups = x;
                    chords = groups = null;
                    return chord;
                };
                chord.sortSubgroups = function(x) {
                    if (!arguments.length) return sortSubgroups;
                    sortSubgroups = x;
                    chords = null;
                    return chord;
                };
                chord.sortChords = function(x) {
                    if (!arguments.length) return sortChords;
                    sortChords = x;
                    if (chords) resort();
                    return chord;
                };
                chord.chords = function() {
                    if (!chords) relayout();
                    return chords;
                };
                chord.groups = function() {
                    if (!groups) relayout();
                    return groups;
                };
                return chord;
            };
            d3.layout.force = function() {
                var force = {}, event = d3.dispatch("start", "tick", "end"), size = [ 1, 1 ], drag, alpha, friction = .9, linkDistance = d3_layout_forceLinkDistance, linkStrength = d3_layout_forceLinkStrength, charge = -30, gravity = .1, theta = .8, nodes = [], links = [], distances, strengths, charges;
                function repulse(node) {
                    return function(quad, x1, _, x2) {
                        if (quad.point !== node) {
                            var dx = quad.cx - node.x, dy = quad.cy - node.y, dn = 1 / Math.sqrt(dx * dx + dy * dy);
                            if ((x2 - x1) * dn < theta) {
                                var k = quad.charge * dn * dn;
                                node.px -= dx * k;
                                node.py -= dy * k;
                                return true;
                            }
                            if (quad.point && isFinite(dn)) {
                                var k = quad.pointCharge * dn * dn;
                                node.px -= dx * k;
                                node.py -= dy * k;
                            }
                        }
                        return !quad.charge;
                    };
                }
                force.tick = function() {
                    if ((alpha *= .99) < .005) {
                        event.end({
                            type: "end",
                            alpha: alpha = 0
                        });
                        return true;
                    }
                    var n = nodes.length, m = links.length, q, i, o, s, t, l, k, x, y;
                    for (i = 0; i < m; ++i) {
                        o = links[i];
                        s = o.source;
                        t = o.target;
                        x = t.x - s.x;
                        y = t.y - s.y;
                        if (l = x * x + y * y) {
                            l = alpha * strengths[i] * ((l = Math.sqrt(l)) - distances[i]) / l;
                            x *= l;
                            y *= l;
                            t.x -= x * (k = s.weight / (t.weight + s.weight));
                            t.y -= y * k;
                            s.x += x * (k = 1 - k);
                            s.y += y * k;
                        }
                    }
                    if (k = alpha * gravity) {
                        x = size[0] / 2;
                        y = size[1] / 2;
                        i = -1;
                        if (k) while (++i < n) {
                            o = nodes[i];
                            o.x += (x - o.x) * k;
                            o.y += (y - o.y) * k;
                        }
                    }
                    if (charge) {
                        d3_layout_forceAccumulate(q = d3.geom.quadtree(nodes), alpha, charges);
                        i = -1;
                        while (++i < n) {
                            if (!(o = nodes[i]).fixed) {
                                q.visit(repulse(o));
                            }
                        }
                    }
                    i = -1;
                    while (++i < n) {
                        o = nodes[i];
                        if (o.fixed) {
                            o.x = o.px;
                            o.y = o.py;
                        } else {
                            o.x -= (o.px - (o.px = o.x)) * friction;
                            o.y -= (o.py - (o.py = o.y)) * friction;
                        }
                    }
                    event.tick({
                        type: "tick",
                        alpha: alpha
                    });
                };
                force.nodes = function(x) {
                    if (!arguments.length) return nodes;
                    nodes = x;
                    return force;
                };
                force.links = function(x) {
                    if (!arguments.length) return links;
                    links = x;
                    return force;
                };
                force.size = function(x) {
                    if (!arguments.length) return size;
                    size = x;
                    return force;
                };
                force.linkDistance = function(x) {
                    if (!arguments.length) return linkDistance;
                    linkDistance = typeof x === "function" ? x : +x;
                    return force;
                };
                force.distance = force.linkDistance;
                force.linkStrength = function(x) {
                    if (!arguments.length) return linkStrength;
                    linkStrength = typeof x === "function" ? x : +x;
                    return force;
                };
                force.friction = function(x) {
                    if (!arguments.length) return friction;
                    friction = +x;
                    return force;
                };
                force.charge = function(x) {
                    if (!arguments.length) return charge;
                    charge = typeof x === "function" ? x : +x;
                    return force;
                };
                force.gravity = function(x) {
                    if (!arguments.length) return gravity;
                    gravity = +x;
                    return force;
                };
                force.theta = function(x) {
                    if (!arguments.length) return theta;
                    theta = +x;
                    return force;
                };
                force.alpha = function(x) {
                    if (!arguments.length) return alpha;
                    x = +x;
                    if (alpha) {
                        if (x > 0) alpha = x; else alpha = 0;
                    } else if (x > 0) {
                        event.start({
                            type: "start",
                            alpha: alpha = x
                        });
                        d3.timer(force.tick);
                    }
                    return force;
                };
                force.start = function() {
                    var i, j, n = nodes.length, m = links.length, w = size[0], h = size[1], neighbors, o;
                    for (i = 0; i < n; ++i) {
                        (o = nodes[i]).index = i;
                        o.weight = 0;
                    }
                    for (i = 0; i < m; ++i) {
                        o = links[i];
                        if (typeof o.source == "number") o.source = nodes[o.source];
                        if (typeof o.target == "number") o.target = nodes[o.target];
                        ++o.source.weight;
                        ++o.target.weight;
                    }
                    for (i = 0; i < n; ++i) {
                        o = nodes[i];
                        if (isNaN(o.x)) o.x = position("x", w);
                        if (isNaN(o.y)) o.y = position("y", h);
                        if (isNaN(o.px)) o.px = o.x;
                        if (isNaN(o.py)) o.py = o.y;
                    }
                    distances = [];
                    if (typeof linkDistance === "function") for (i = 0; i < m; ++i) distances[i] = +linkDistance.call(this, links[i], i); else for (i = 0; i < m; ++i) distances[i] = linkDistance;
                    strengths = [];
                    if (typeof linkStrength === "function") for (i = 0; i < m; ++i) strengths[i] = +linkStrength.call(this, links[i], i); else for (i = 0; i < m; ++i) strengths[i] = linkStrength;
                    charges = [];
                    if (typeof charge === "function") for (i = 0; i < n; ++i) charges[i] = +charge.call(this, nodes[i], i); else for (i = 0; i < n; ++i) charges[i] = charge;
                    function position(dimension, size) {
                        var neighbors = neighbor(i), j = -1, m = neighbors.length, x;
                        while (++j < m) if (!isNaN(x = neighbors[j][dimension])) return x;
                        return Math.random() * size;
                    }
                    function neighbor() {
                        if (!neighbors) {
                            neighbors = [];
                            for (j = 0; j < n; ++j) {
                                neighbors[j] = [];
                            }
                            for (j = 0; j < m; ++j) {
                                var o = links[j];
                                neighbors[o.source.index].push(o.target);
                                neighbors[o.target.index].push(o.source);
                            }
                        }
                        return neighbors[i];
                    }
                    return force.resume();
                };
                force.resume = function() {
                    return force.alpha(.1);
                };
                force.stop = function() {
                    return force.alpha(0);
                };
                force.drag = function() {
                    if (!drag) drag = d3.behavior.drag().origin(d3_identity).on("dragstart.force", d3_layout_forceDragstart).on("drag.force", dragmove).on("dragend.force", d3_layout_forceDragend);
                    if (!arguments.length) return drag;
                    this.on("mouseover.force", d3_layout_forceMouseover).on("mouseout.force", d3_layout_forceMouseout).call(drag);
                };
                function dragmove(d) {
                    d.px = d3.event.x, d.py = d3.event.y;
                    force.resume();
                }
                return d3.rebind(force, event, "on");
            };
            function d3_layout_forceDragstart(d) {
                d.fixed |= 2;
            }
            function d3_layout_forceDragend(d) {
                d.fixed &= ~6;
            }
            function d3_layout_forceMouseover(d) {
                d.fixed |= 4;
                d.px = d.x, d.py = d.y;
            }
            function d3_layout_forceMouseout(d) {
                d.fixed &= ~4;
            }
            function d3_layout_forceAccumulate(quad, alpha, charges) {
                var cx = 0, cy = 0;
                quad.charge = 0;
                if (!quad.leaf) {
                    var nodes = quad.nodes, n = nodes.length, i = -1, c;
                    while (++i < n) {
                        c = nodes[i];
                        if (c == null) continue;
                        d3_layout_forceAccumulate(c, alpha, charges);
                        quad.charge += c.charge;
                        cx += c.charge * c.cx;
                        cy += c.charge * c.cy;
                    }
                }
                if (quad.point) {
                    if (!quad.leaf) {
                        quad.point.x += Math.random() - .5;
                        quad.point.y += Math.random() - .5;
                    }
                    var k = alpha * charges[quad.point.index];
                    quad.charge += quad.pointCharge = k;
                    cx += k * quad.point.x;
                    cy += k * quad.point.y;
                }
                quad.cx = cx / quad.charge;
                quad.cy = cy / quad.charge;
            }
            var d3_layout_forceLinkDistance = 20, d3_layout_forceLinkStrength = 1;
            d3.layout.partition = function() {
                var hierarchy = d3.layout.hierarchy(), size = [ 1, 1 ];
                function position(node, x, dx, dy) {
                    var children = node.children;
                    node.x = x;
                    node.y = node.depth * dy;
                    node.dx = dx;
                    node.dy = dy;
                    if (children && (n = children.length)) {
                        var i = -1, n, c, d;
                        dx = node.value ? dx / node.value : 0;
                        while (++i < n) {
                            position(c = children[i], x, d = c.value * dx, dy);
                            x += d;
                        }
                    }
                }
                function depth(node) {
                    var children = node.children, d = 0;
                    if (children && (n = children.length)) {
                        var i = -1, n;
                        while (++i < n) d = Math.max(d, depth(children[i]));
                    }
                    return 1 + d;
                }
                function partition(d, i) {
                    var nodes = hierarchy.call(this, d, i);
                    position(nodes[0], 0, size[0], size[1] / depth(nodes[0]));
                    return nodes;
                }
                partition.size = function(x) {
                    if (!arguments.length) return size;
                    size = x;
                    return partition;
                };
                return d3_layout_hierarchyRebind(partition, hierarchy);
            };
            d3.layout.pie = function() {
                var value = Number, sort = d3_layout_pieSortByValue, startAngle = 0, endAngle = 2 * π;
                function pie(data) {
                    var values = data.map(function(d, i) {
                        return +value.call(pie, d, i);
                    });
                    var a = +(typeof startAngle === "function" ? startAngle.apply(this, arguments) : startAngle);
                    var k = ((typeof endAngle === "function" ? endAngle.apply(this, arguments) : endAngle) - startAngle) / d3.sum(values);
                    var index = d3.range(data.length);
                    if (sort != null) index.sort(sort === d3_layout_pieSortByValue ? function(i, j) {
                        return values[j] - values[i];
                    } : function(i, j) {
                        return sort(data[i], data[j]);
                    });
                    var arcs = [];
                    index.forEach(function(i) {
                        var d;
                        arcs[i] = {
                            data: data[i],
                            value: d = values[i],
                            startAngle: a,
                            endAngle: a += d * k
                        };
                    });
                    return arcs;
                }
                pie.value = function(x) {
                    if (!arguments.length) return value;
                    value = x;
                    return pie;
                };
                pie.sort = function(x) {
                    if (!arguments.length) return sort;
                    sort = x;
                    return pie;
                };
                pie.startAngle = function(x) {
                    if (!arguments.length) return startAngle;
                    startAngle = x;
                    return pie;
                };
                pie.endAngle = function(x) {
                    if (!arguments.length) return endAngle;
                    endAngle = x;
                    return pie;
                };
                return pie;
            };
            var d3_layout_pieSortByValue = {};
            d3.layout.stack = function() {
                var values = d3_identity, order = d3_layout_stackOrderDefault, offset = d3_layout_stackOffsetZero, out = d3_layout_stackOut, x = d3_layout_stackX, y = d3_layout_stackY;
                function stack(data, index) {
                    var series = data.map(function(d, i) {
                        return values.call(stack, d, i);
                    });
                    var points = series.map(function(d) {
                        return d.map(function(v, i) {
                            return [ x.call(stack, v, i), y.call(stack, v, i) ];
                        });
                    });
                    var orders = order.call(stack, points, index);
                    series = d3.permute(series, orders);
                    points = d3.permute(points, orders);
                    var offsets = offset.call(stack, points, index);
                    var n = series.length, m = series[0].length, i, j, o;
                    for (j = 0; j < m; ++j) {
                        out.call(stack, series[0][j], o = offsets[j], points[0][j][1]);
                        for (i = 1; i < n; ++i) {
                            out.call(stack, series[i][j], o += points[i - 1][j][1], points[i][j][1]);
                        }
                    }
                    return data;
                }
                stack.values = function(x) {
                    if (!arguments.length) return values;
                    values = x;
                    return stack;
                };
                stack.order = function(x) {
                    if (!arguments.length) return order;
                    order = typeof x === "function" ? x : d3_layout_stackOrders.get(x) || d3_layout_stackOrderDefault;
                    return stack;
                };
                stack.offset = function(x) {
                    if (!arguments.length) return offset;
                    offset = typeof x === "function" ? x : d3_layout_stackOffsets.get(x) || d3_layout_stackOffsetZero;
                    return stack;
                };
                stack.x = function(z) {
                    if (!arguments.length) return x;
                    x = z;
                    return stack;
                };
                stack.y = function(z) {
                    if (!arguments.length) return y;
                    y = z;
                    return stack;
                };
                stack.out = function(z) {
                    if (!arguments.length) return out;
                    out = z;
                    return stack;
                };
                return stack;
            };
            function d3_layout_stackX(d) {
                return d.x;
            }
            function d3_layout_stackY(d) {
                return d.y;
            }
            function d3_layout_stackOut(d, y0, y) {
                d.y0 = y0;
                d.y = y;
            }
            var d3_layout_stackOrders = d3.map({
                "inside-out": function(data) {
                    var n = data.length, i, j, max = data.map(d3_layout_stackMaxIndex), sums = data.map(d3_layout_stackReduceSum), index = d3.range(n).sort(function(a, b) {
                        return max[a] - max[b];
                    }), top = 0, bottom = 0, tops = [], bottoms = [];
                    for (i = 0; i < n; ++i) {
                        j = index[i];
                        if (top < bottom) {
                            top += sums[j];
                            tops.push(j);
                        } else {
                            bottom += sums[j];
                            bottoms.push(j);
                        }
                    }
                    return bottoms.reverse().concat(tops);
                },
                reverse: function(data) {
                    return d3.range(data.length).reverse();
                },
                "default": d3_layout_stackOrderDefault
            });
            var d3_layout_stackOffsets = d3.map({
                silhouette: function(data) {
                    var n = data.length, m = data[0].length, sums = [], max = 0, i, j, o, y0 = [];
                    for (j = 0; j < m; ++j) {
                        for (i = 0, o = 0; i < n; i++) o += data[i][j][1];
                        if (o > max) max = o;
                        sums.push(o);
                    }
                    for (j = 0; j < m; ++j) {
                        y0[j] = (max - sums[j]) / 2;
                    }
                    return y0;
                },
                wiggle: function(data) {
                    var n = data.length, x = data[0], m = x.length, i, j, k, s1, s2, s3, dx, o, o0, y0 = [];
                    y0[0] = o = o0 = 0;
                    for (j = 1; j < m; ++j) {
                        for (i = 0, s1 = 0; i < n; ++i) s1 += data[i][j][1];
                        for (i = 0, s2 = 0, dx = x[j][0] - x[j - 1][0]; i < n; ++i) {
                            for (k = 0, s3 = (data[i][j][1] - data[i][j - 1][1]) / (2 * dx); k < i; ++k) {
                                s3 += (data[k][j][1] - data[k][j - 1][1]) / dx;
                            }
                            s2 += s3 * data[i][j][1];
                        }
                        y0[j] = o -= s1 ? s2 / s1 * dx : 0;
                        if (o < o0) o0 = o;
                    }
                    for (j = 0; j < m; ++j) y0[j] -= o0;
                    return y0;
                },
                expand: function(data) {
                    var n = data.length, m = data[0].length, k = 1 / n, i, j, o, y0 = [];
                    for (j = 0; j < m; ++j) {
                        for (i = 0, o = 0; i < n; i++) o += data[i][j][1];
                        if (o) for (i = 0; i < n; i++) data[i][j][1] /= o; else for (i = 0; i < n; i++) data[i][j][1] = k;
                    }
                    for (j = 0; j < m; ++j) y0[j] = 0;
                    return y0;
                },
                zero: d3_layout_stackOffsetZero
            });
            function d3_layout_stackOrderDefault(data) {
                return d3.range(data.length);
            }
            function d3_layout_stackOffsetZero(data) {
                var j = -1, m = data[0].length, y0 = [];
                while (++j < m) y0[j] = 0;
                return y0;
            }
            function d3_layout_stackMaxIndex(array) {
                var i = 1, j = 0, v = array[0][1], k, n = array.length;
                for (;i < n; ++i) {
                    if ((k = array[i][1]) > v) {
                        j = i;
                        v = k;
                    }
                }
                return j;
            }
            function d3_layout_stackReduceSum(d) {
                return d.reduce(d3_layout_stackSum, 0);
            }
            function d3_layout_stackSum(p, d) {
                return p + d[1];
            }
            d3.layout.histogram = function() {
                var frequency = true, valuer = Number, ranger = d3_layout_histogramRange, binner = d3_layout_histogramBinSturges;
                function histogram(data, i) {
                    var bins = [], values = data.map(valuer, this), range = ranger.call(this, values, i), thresholds = binner.call(this, range, values, i), bin, i = -1, n = values.length, m = thresholds.length - 1, k = frequency ? 1 : 1 / n, x;
                    while (++i < m) {
                        bin = bins[i] = [];
                        bin.dx = thresholds[i + 1] - (bin.x = thresholds[i]);
                        bin.y = 0;
                    }
                    if (m > 0) {
                        i = -1;
                        while (++i < n) {
                            x = values[i];
                            if (x >= range[0] && x <= range[1]) {
                                bin = bins[d3.bisect(thresholds, x, 1, m) - 1];
                                bin.y += k;
                                bin.push(data[i]);
                            }
                        }
                    }
                    return bins;
                }
                histogram.value = function(x) {
                    if (!arguments.length) return valuer;
                    valuer = x;
                    return histogram;
                };
                histogram.range = function(x) {
                    if (!arguments.length) return ranger;
                    ranger = d3_functor(x);
                    return histogram;
                };
                histogram.bins = function(x) {
                    if (!arguments.length) return binner;
                    binner = typeof x === "number" ? function(range) {
                        return d3_layout_histogramBinFixed(range, x);
                    } : d3_functor(x);
                    return histogram;
                };
                histogram.frequency = function(x) {
                    if (!arguments.length) return frequency;
                    frequency = !!x;
                    return histogram;
                };
                return histogram;
            };
            function d3_layout_histogramBinSturges(range, values) {
                return d3_layout_histogramBinFixed(range, Math.ceil(Math.log(values.length) / Math.LN2 + 1));
            }
            function d3_layout_histogramBinFixed(range, n) {
                var x = -1, b = +range[0], m = (range[1] - b) / n, f = [];
                while (++x <= n) f[x] = m * x + b;
                return f;
            }
            function d3_layout_histogramRange(values) {
                return [ d3.min(values), d3.max(values) ];
            }
            d3.layout.hierarchy = function() {
                var sort = d3_layout_hierarchySort, children = d3_layout_hierarchyChildren, value = d3_layout_hierarchyValue;
                function recurse(node, depth, nodes) {
                    var childs = children.call(hierarchy, node, depth);
                    node.depth = depth;
                    nodes.push(node);
                    if (childs && (n = childs.length)) {
                        var i = -1, n, c = node.children = [], v = 0, j = depth + 1, d;
                        while (++i < n) {
                            d = recurse(childs[i], j, nodes);
                            d.parent = node;
                            c.push(d);
                            v += d.value;
                        }
                        if (sort) c.sort(sort);
                        if (value) node.value = v;
                    } else if (value) {
                        node.value = +value.call(hierarchy, node, depth) || 0;
                    }
                    return node;
                }
                function revalue(node, depth) {
                    var children = node.children, v = 0;
                    if (children && (n = children.length)) {
                        var i = -1, n, j = depth + 1;
                        while (++i < n) v += revalue(children[i], j);
                    } else if (value) {
                        v = +value.call(hierarchy, node, depth) || 0;
                    }
                    if (value) node.value = v;
                    return v;
                }
                function hierarchy(d) {
                    var nodes = [];
                    recurse(d, 0, nodes);
                    return nodes;
                }
                hierarchy.sort = function(x) {
                    if (!arguments.length) return sort;
                    sort = x;
                    return hierarchy;
                };
                hierarchy.children = function(x) {
                    if (!arguments.length) return children;
                    children = x;
                    return hierarchy;
                };
                hierarchy.value = function(x) {
                    if (!arguments.length) return value;
                    value = x;
                    return hierarchy;
                };
                hierarchy.revalue = function(root) {
                    revalue(root, 0);
                    return root;
                };
                return hierarchy;
            };
            function d3_layout_hierarchyRebind(object, hierarchy) {
                d3.rebind(object, hierarchy, "sort", "children", "value");
                object.nodes = object;
                object.links = d3_layout_hierarchyLinks;
                return object;
            }
            function d3_layout_hierarchyChildren(d) {
                return d.children;
            }
            function d3_layout_hierarchyValue(d) {
                return d.value;
            }
            function d3_layout_hierarchySort(a, b) {
                return b.value - a.value;
            }
            function d3_layout_hierarchyLinks(nodes) {
                return d3.merge(nodes.map(function(parent) {
                    return (parent.children || []).map(function(child) {
                        return {
                            source: parent,
                            target: child
                        };
                    });
                }));
            }
            d3.layout.pack = function() {
                var hierarchy = d3.layout.hierarchy().sort(d3_layout_packSort), padding = 0, size = [ 1, 1 ];
                function pack(d, i) {
                    var nodes = hierarchy.call(this, d, i), root = nodes[0];
                    root.x = 0;
                    root.y = 0;
                    d3_layout_treeVisitAfter(root, function(d) {
                        d.r = Math.sqrt(d.value);
                    });
                    d3_layout_treeVisitAfter(root, d3_layout_packSiblings);
                    var w = size[0], h = size[1], k = Math.max(2 * root.r / w, 2 * root.r / h);
                    if (padding > 0) {
                        var dr = padding * k / 2;
                        d3_layout_treeVisitAfter(root, function(d) {
                            d.r += dr;
                        });
                        d3_layout_treeVisitAfter(root, d3_layout_packSiblings);
                        d3_layout_treeVisitAfter(root, function(d) {
                            d.r -= dr;
                        });
                        k = Math.max(2 * root.r / w, 2 * root.r / h);
                    }
                    d3_layout_packTransform(root, w / 2, h / 2, 1 / k);
                    return nodes;
                }
                pack.size = function(x) {
                    if (!arguments.length) return size;
                    size = x;
                    return pack;
                };
                pack.padding = function(_) {
                    if (!arguments.length) return padding;
                    padding = +_;
                    return pack;
                };
                return d3_layout_hierarchyRebind(pack, hierarchy);
            };
            function d3_layout_packSort(a, b) {
                return a.value - b.value;
            }
            function d3_layout_packInsert(a, b) {
                var c = a._pack_next;
                a._pack_next = b;
                b._pack_prev = a;
                b._pack_next = c;
                c._pack_prev = b;
            }
            function d3_layout_packSplice(a, b) {
                a._pack_next = b;
                b._pack_prev = a;
            }
            function d3_layout_packIntersects(a, b) {
                var dx = b.x - a.x, dy = b.y - a.y, dr = a.r + b.r;
                return dr * dr - dx * dx - dy * dy > .001;
            }
            function d3_layout_packSiblings(node) {
                if (!(nodes = node.children) || !(n = nodes.length)) return;
                var nodes, xMin = Infinity, xMax = -Infinity, yMin = Infinity, yMax = -Infinity, a, b, c, i, j, k, n;
                function bound(node) {
                    xMin = Math.min(node.x - node.r, xMin);
                    xMax = Math.max(node.x + node.r, xMax);
                    yMin = Math.min(node.y - node.r, yMin);
                    yMax = Math.max(node.y + node.r, yMax);
                }
                nodes.forEach(d3_layout_packLink);
                a = nodes[0];
                a.x = -a.r;
                a.y = 0;
                bound(a);
                if (n > 1) {
                    b = nodes[1];
                    b.x = b.r;
                    b.y = 0;
                    bound(b);
                    if (n > 2) {
                        c = nodes[2];
                        d3_layout_packPlace(a, b, c);
                        bound(c);
                        d3_layout_packInsert(a, c);
                        a._pack_prev = c;
                        d3_layout_packInsert(c, b);
                        b = a._pack_next;
                        for (i = 3; i < n; i++) {
                            d3_layout_packPlace(a, b, c = nodes[i]);
                            var isect = 0, s1 = 1, s2 = 1;
                            for (j = b._pack_next; j !== b; j = j._pack_next, s1++) {
                                if (d3_layout_packIntersects(j, c)) {
                                    isect = 1;
                                    break;
                                }
                            }
                            if (isect == 1) {
                                for (k = a._pack_prev; k !== j._pack_prev; k = k._pack_prev, s2++) {
                                    if (d3_layout_packIntersects(k, c)) {
                                        break;
                                    }
                                }
                            }
                            if (isect) {
                                if (s1 < s2 || s1 == s2 && b.r < a.r) d3_layout_packSplice(a, b = j); else d3_layout_packSplice(a = k, b);
                                i--;
                            } else {
                                d3_layout_packInsert(a, c);
                                b = c;
                                bound(c);
                            }
                        }
                    }
                }
                var cx = (xMin + xMax) / 2, cy = (yMin + yMax) / 2, cr = 0;
                for (i = 0; i < n; i++) {
                    c = nodes[i];
                    c.x -= cx;
                    c.y -= cy;
                    cr = Math.max(cr, c.r + Math.sqrt(c.x * c.x + c.y * c.y));
                }
                node.r = cr;
                nodes.forEach(d3_layout_packUnlink);
            }
            function d3_layout_packLink(node) {
                node._pack_next = node._pack_prev = node;
            }
            function d3_layout_packUnlink(node) {
                delete node._pack_next;
                delete node._pack_prev;
            }
            function d3_layout_packTransform(node, x, y, k) {
                var children = node.children;
                node.x = x += k * node.x;
                node.y = y += k * node.y;
                node.r *= k;
                if (children) {
                    var i = -1, n = children.length;
                    while (++i < n) d3_layout_packTransform(children[i], x, y, k);
                }
            }
            function d3_layout_packPlace(a, b, c) {
                var db = a.r + c.r, dx = b.x - a.x, dy = b.y - a.y;
                if (db && (dx || dy)) {
                    var da = b.r + c.r, dc = dx * dx + dy * dy;
                    da *= da;
                    db *= db;
                    var x = .5 + (db - da) / (2 * dc), y = Math.sqrt(Math.max(0, 2 * da * (db + dc) - (db -= dc) * db - da * da)) / (2 * dc);
                    c.x = a.x + x * dx + y * dy;
                    c.y = a.y + x * dy - y * dx;
                } else {
                    c.x = a.x + db;
                    c.y = a.y;
                }
            }
            d3.layout.cluster = function() {
                var hierarchy = d3.layout.hierarchy().sort(null).value(null), separation = d3_layout_treeSeparation, size = [ 1, 1 ];
                function cluster(d, i) {
                    var nodes = hierarchy.call(this, d, i), root = nodes[0], previousNode, x = 0;
                    d3_layout_treeVisitAfter(root, function(node) {
                        var children = node.children;
                        if (children && children.length) {
                            node.x = d3_layout_clusterX(children);
                            node.y = d3_layout_clusterY(children);
                        } else {
                            node.x = previousNode ? x += separation(node, previousNode) : 0;
                            node.y = 0;
                            previousNode = node;
                        }
                    });
                    var left = d3_layout_clusterLeft(root), right = d3_layout_clusterRight(root), x0 = left.x - separation(left, right) / 2, x1 = right.x + separation(right, left) / 2;
                    d3_layout_treeVisitAfter(root, function(node) {
                        node.x = (node.x - x0) / (x1 - x0) * size[0];
                        node.y = (1 - (root.y ? node.y / root.y : 1)) * size[1];
                    });
                    return nodes;
                }
                cluster.separation = function(x) {
                    if (!arguments.length) return separation;
                    separation = x;
                    return cluster;
                };
                cluster.size = function(x) {
                    if (!arguments.length) return size;
                    size = x;
                    return cluster;
                };
                return d3_layout_hierarchyRebind(cluster, hierarchy);
            };
            function d3_layout_clusterY(children) {
                return 1 + d3.max(children, function(child) {
                    return child.y;
                });
            }
            function d3_layout_clusterX(children) {
                return children.reduce(function(x, child) {
                    return x + child.x;
                }, 0) / children.length;
            }
            function d3_layout_clusterLeft(node) {
                var children = node.children;
                return children && children.length ? d3_layout_clusterLeft(children[0]) : node;
            }
            function d3_layout_clusterRight(node) {
                var children = node.children, n;
                return children && (n = children.length) ? d3_layout_clusterRight(children[n - 1]) : node;
            }
            d3.layout.tree = function() {
                var hierarchy = d3.layout.hierarchy().sort(null).value(null), separation = d3_layout_treeSeparation, size = [ 1, 1 ];
                function tree(d, i) {
                    var nodes = hierarchy.call(this, d, i), root = nodes[0];
                    function firstWalk(node, previousSibling) {
                        var children = node.children, layout = node._tree;
                        if (children && (n = children.length)) {
                            var n, firstChild = children[0], previousChild, ancestor = firstChild, child, i = -1;
                            while (++i < n) {
                                child = children[i];
                                firstWalk(child, previousChild);
                                ancestor = apportion(child, previousChild, ancestor);
                                previousChild = child;
                            }
                            d3_layout_treeShift(node);
                            var midpoint = .5 * (firstChild._tree.prelim + child._tree.prelim);
                            if (previousSibling) {
                                layout.prelim = previousSibling._tree.prelim + separation(node, previousSibling);
                                layout.mod = layout.prelim - midpoint;
                            } else {
                                layout.prelim = midpoint;
                            }
                        } else {
                            if (previousSibling) {
                                layout.prelim = previousSibling._tree.prelim + separation(node, previousSibling);
                            }
                        }
                    }
                    function secondWalk(node, x) {
                        node.x = node._tree.prelim + x;
                        var children = node.children;
                        if (children && (n = children.length)) {
                            var i = -1, n;
                            x += node._tree.mod;
                            while (++i < n) {
                                secondWalk(children[i], x);
                            }
                        }
                    }
                    function apportion(node, previousSibling, ancestor) {
                        if (previousSibling) {
                            var vip = node, vop = node, vim = previousSibling, vom = node.parent.children[0], sip = vip._tree.mod, sop = vop._tree.mod, sim = vim._tree.mod, som = vom._tree.mod, shift;
                            while (vim = d3_layout_treeRight(vim), vip = d3_layout_treeLeft(vip), vim && vip) {
                                vom = d3_layout_treeLeft(vom);
                                vop = d3_layout_treeRight(vop);
                                vop._tree.ancestor = node;
                                shift = vim._tree.prelim + sim - vip._tree.prelim - sip + separation(vim, vip);
                                if (shift > 0) {
                                    d3_layout_treeMove(d3_layout_treeAncestor(vim, node, ancestor), node, shift);
                                    sip += shift;
                                    sop += shift;
                                }
                                sim += vim._tree.mod;
                                sip += vip._tree.mod;
                                som += vom._tree.mod;
                                sop += vop._tree.mod;
                            }
                            if (vim && !d3_layout_treeRight(vop)) {
                                vop._tree.thread = vim;
                                vop._tree.mod += sim - sop;
                            }
                            if (vip && !d3_layout_treeLeft(vom)) {
                                vom._tree.thread = vip;
                                vom._tree.mod += sip - som;
                                ancestor = node;
                            }
                        }
                        return ancestor;
                    }
                    d3_layout_treeVisitAfter(root, function(node, previousSibling) {
                        node._tree = {
                            ancestor: node,
                            prelim: 0,
                            mod: 0,
                            change: 0,
                            shift: 0,
                            number: previousSibling ? previousSibling._tree.number + 1 : 0
                        };
                    });
                    firstWalk(root);
                    secondWalk(root, -root._tree.prelim);
                    var left = d3_layout_treeSearch(root, d3_layout_treeLeftmost), right = d3_layout_treeSearch(root, d3_layout_treeRightmost), deep = d3_layout_treeSearch(root, d3_layout_treeDeepest), x0 = left.x - separation(left, right) / 2, x1 = right.x + separation(right, left) / 2, y1 = deep.depth || 1;
                    d3_layout_treeVisitAfter(root, function(node) {
                        node.x = (node.x - x0) / (x1 - x0) * size[0];
                        node.y = node.depth / y1 * size[1];
                        delete node._tree;
                    });
                    return nodes;
                }
                tree.separation = function(x) {
                    if (!arguments.length) return separation;
                    separation = x;
                    return tree;
                };
                tree.size = function(x) {
                    if (!arguments.length) return size;
                    size = x;
                    return tree;
                };
                return d3_layout_hierarchyRebind(tree, hierarchy);
            };
            function d3_layout_treeSeparation(a, b) {
                return a.parent == b.parent ? 1 : 2;
            }
            function d3_layout_treeLeft(node) {
                var children = node.children;
                return children && children.length ? children[0] : node._tree.thread;
            }
            function d3_layout_treeRight(node) {
                var children = node.children, n;
                return children && (n = children.length) ? children[n - 1] : node._tree.thread;
            }
            function d3_layout_treeSearch(node, compare) {
                var children = node.children;
                if (children && (n = children.length)) {
                    var child, n, i = -1;
                    while (++i < n) {
                        if (compare(child = d3_layout_treeSearch(children[i], compare), node) > 0) {
                            node = child;
                        }
                    }
                }
                return node;
            }
            function d3_layout_treeRightmost(a, b) {
                return a.x - b.x;
            }
            function d3_layout_treeLeftmost(a, b) {
                return b.x - a.x;
            }
            function d3_layout_treeDeepest(a, b) {
                return a.depth - b.depth;
            }
            function d3_layout_treeVisitAfter(node, callback) {
                function visit(node, previousSibling) {
                    var children = node.children;
                    if (children && (n = children.length)) {
                        var child, previousChild = null, i = -1, n;
                        while (++i < n) {
                            child = children[i];
                            visit(child, previousChild);
                            previousChild = child;
                        }
                    }
                    callback(node, previousSibling);
                }
                visit(node, null);
            }
            function d3_layout_treeShift(node) {
                var shift = 0, change = 0, children = node.children, i = children.length, child;
                while (--i >= 0) {
                    child = children[i]._tree;
                    child.prelim += shift;
                    child.mod += shift;
                    shift += child.shift + (change += child.change);
                }
            }
            function d3_layout_treeMove(ancestor, node, shift) {
                ancestor = ancestor._tree;
                node = node._tree;
                var change = shift / (node.number - ancestor.number);
                ancestor.change += change;
                node.change -= change;
                node.shift += shift;
                node.prelim += shift;
                node.mod += shift;
            }
            function d3_layout_treeAncestor(vim, node, ancestor) {
                return vim._tree.ancestor.parent == node.parent ? vim._tree.ancestor : ancestor;
            }
            d3.layout.treemap = function() {
                var hierarchy = d3.layout.hierarchy(), round = Math.round, size = [ 1, 1 ], padding = null, pad = d3_layout_treemapPadNull, sticky = false, stickies, mode = "squarify", ratio = .5 * (1 + Math.sqrt(5));
                function scale(children, k) {
                    var i = -1, n = children.length, child, area;
                    while (++i < n) {
                        area = (child = children[i]).value * (k < 0 ? 0 : k);
                        child.area = isNaN(area) || area <= 0 ? 0 : area;
                    }
                }
                function squarify(node) {
                    var children = node.children;
                    if (children && children.length) {
                        var rect = pad(node), row = [], remaining = children.slice(), child, best = Infinity, score, u = mode === "slice" ? rect.dx : mode === "dice" ? rect.dy : mode === "slice-dice" ? node.depth & 1 ? rect.dy : rect.dx : Math.min(rect.dx, rect.dy), n;
                        scale(remaining, rect.dx * rect.dy / node.value);
                        row.area = 0;
                        while ((n = remaining.length) > 0) {
                            row.push(child = remaining[n - 1]);
                            row.area += child.area;
                            if (mode !== "squarify" || (score = worst(row, u)) <= best) {
                                remaining.pop();
                                best = score;
                            } else {
                                row.area -= row.pop().area;
                                position(row, u, rect, false);
                                u = Math.min(rect.dx, rect.dy);
                                row.length = row.area = 0;
                                best = Infinity;
                            }
                        }
                        if (row.length) {
                            position(row, u, rect, true);
                            row.length = row.area = 0;
                        }
                        children.forEach(squarify);
                    }
                }
                function stickify(node) {
                    var children = node.children;
                    if (children && children.length) {
                        var rect = pad(node), remaining = children.slice(), child, row = [];
                        scale(remaining, rect.dx * rect.dy / node.value);
                        row.area = 0;
                        while (child = remaining.pop()) {
                            row.push(child);
                            row.area += child.area;
                            if (child.z != null) {
                                position(row, child.z ? rect.dx : rect.dy, rect, !remaining.length);
                                row.length = row.area = 0;
                            }
                        }
                        children.forEach(stickify);
                    }
                }
                function worst(row, u) {
                    var s = row.area, r, rmax = 0, rmin = Infinity, i = -1, n = row.length;
                    while (++i < n) {
                        if (!(r = row[i].area)) continue;
                        if (r < rmin) rmin = r;
                        if (r > rmax) rmax = r;
                    }
                    s *= s;
                    u *= u;
                    return s ? Math.max(u * rmax * ratio / s, s / (u * rmin * ratio)) : Infinity;
                }
                function position(row, u, rect, flush) {
                    var i = -1, n = row.length, x = rect.x, y = rect.y, v = u ? round(row.area / u) : 0, o;
                    if (u == rect.dx) {
                        if (flush || v > rect.dy) v = rect.dy;
                        while (++i < n) {
                            o = row[i];
                            o.x = x;
                            o.y = y;
                            o.dy = v;
                            x += o.dx = Math.min(rect.x + rect.dx - x, v ? round(o.area / v) : 0);
                        }
                        o.z = true;
                        o.dx += rect.x + rect.dx - x;
                        rect.y += v;
                        rect.dy -= v;
                    } else {
                        if (flush || v > rect.dx) v = rect.dx;
                        while (++i < n) {
                            o = row[i];
                            o.x = x;
                            o.y = y;
                            o.dx = v;
                            y += o.dy = Math.min(rect.y + rect.dy - y, v ? round(o.area / v) : 0);
                        }
                        o.z = false;
                        o.dy += rect.y + rect.dy - y;
                        rect.x += v;
                        rect.dx -= v;
                    }
                }
                function treemap(d) {
                    var nodes = stickies || hierarchy(d), root = nodes[0];
                    root.x = 0;
                    root.y = 0;
                    root.dx = size[0];
                    root.dy = size[1];
                    if (stickies) hierarchy.revalue(root);
                    scale([ root ], root.dx * root.dy / root.value);
                    (stickies ? stickify : squarify)(root);
                    if (sticky) stickies = nodes;
                    return nodes;
                }
                treemap.size = function(x) {
                    if (!arguments.length) return size;
                    size = x;
                    return treemap;
                };
                treemap.padding = function(x) {
                    if (!arguments.length) return padding;
                    function padFunction(node) {
                        var p = x.call(treemap, node, node.depth);
                        return p == null ? d3_layout_treemapPadNull(node) : d3_layout_treemapPad(node, typeof p === "number" ? [ p, p, p, p ] : p);
                    }
                    function padConstant(node) {
                        return d3_layout_treemapPad(node, x);
                    }
                    var type;
                    pad = (padding = x) == null ? d3_layout_treemapPadNull : (type = typeof x) === "function" ? padFunction : type === "number" ? (x = [ x, x, x, x ],
                        padConstant) : padConstant;
                    return treemap;
                };
                treemap.round = function(x) {
                    if (!arguments.length) return round != Number;
                    round = x ? Math.round : Number;
                    return treemap;
                };
                treemap.sticky = function(x) {
                    if (!arguments.length) return sticky;
                    sticky = x;
                    stickies = null;
                    return treemap;
                };
                treemap.ratio = function(x) {
                    if (!arguments.length) return ratio;
                    ratio = x;
                    return treemap;
                };
                treemap.mode = function(x) {
                    if (!arguments.length) return mode;
                    mode = x + "";
                    return treemap;
                };
                return d3_layout_hierarchyRebind(treemap, hierarchy);
            };
            function d3_layout_treemapPadNull(node) {
                return {
                    x: node.x,
                    y: node.y,
                    dx: node.dx,
                    dy: node.dy
                };
            }
            function d3_layout_treemapPad(node, padding) {
                var x = node.x + padding[3], y = node.y + padding[0], dx = node.dx - padding[1] - padding[3], dy = node.dy - padding[0] - padding[2];
                if (dx < 0) {
                    x += dx / 2;
                    dx = 0;
                }
                if (dy < 0) {
                    y += dy / 2;
                    dy = 0;
                }
                return {
                    x: x,
                    y: y,
                    dx: dx,
                    dy: dy
                };
            }
            function d3_dsv(delimiter, mimeType) {
                var reFormat = new RegExp('["' + delimiter + "\n]"), delimiterCode = delimiter.charCodeAt(0);
                function dsv(url, callback) {
                    return d3.xhr(url, mimeType, callback).response(response);
                }
                function response(request) {
                    return dsv.parse(request.responseText);
                }
                dsv.parse = function(text) {
                    var o;
                    return dsv.parseRows(text, function(row) {
                        if (o) return o(row);
                        o = new Function("d", "return {" + row.map(function(name, i) {
                            return JSON.stringify(name) + ": d[" + i + "]";
                        }).join(",") + "}");
                    });
                };
                dsv.parseRows = function(text, f) {
                    var EOL = {}, EOF = {}, rows = [], N = text.length, I = 0, n = 0, t, eol;
                    function token() {
                        if (I >= N) return EOF;
                        if (eol) return eol = false, EOL;
                        var j = I;
                        if (text.charCodeAt(j) === 34) {
                            var i = j;
                            while (i++ < N) {
                                if (text.charCodeAt(i) === 34) {
                                    if (text.charCodeAt(i + 1) !== 34) break;
                                    ++i;
                                }
                            }
                            I = i + 2;
                            var c = text.charCodeAt(i + 1);
                            if (c === 13) {
                                eol = true;
                                if (text.charCodeAt(i + 2) === 10) ++I;
                            } else if (c === 10) {
                                eol = true;
                            }
                            return text.substring(j + 1, i).replace(/""/g, '"');
                        }
                        while (I < N) {
                            var c = text.charCodeAt(I++), k = 1;
                            if (c === 10) eol = true; else if (c === 13) {
                                eol = true;
                                if (text.charCodeAt(I) === 10) ++I, ++k;
                            } else if (c !== delimiterCode) continue;
                            return text.substring(j, I - k);
                        }
                        return text.substring(j);
                    }
                    while ((t = token()) !== EOF) {
                        var a = [];
                        while (t !== EOL && t !== EOF) {
                            a.push(t);
                            t = token();
                        }
                        if (f && !(a = f(a, n++))) continue;
                        rows.push(a);
                    }
                    return rows;
                };
                dsv.format = function(rows) {
                    return rows.map(formatRow).join("\n");
                };
                function formatRow(row) {
                    return row.map(formatValue).join(delimiter);
                }
                function formatValue(text) {
                    return reFormat.test(text) ? '"' + text.replace(/\"/g, '""') + '"' : text;
                }
                return dsv;
            }
            d3.csv = d3_dsv(",", "text/csv");
            d3.tsv = d3_dsv("   ", "text/tab-separated-values");
            d3.geo = {};
            d3.geo.stream = function(object, listener) {
                if (d3_geo_streamObjectType.hasOwnProperty(object.type)) {
                    d3_geo_streamObjectType[object.type](object, listener);
                } else {
                    d3_geo_streamGeometry(object, listener);
                }
            };
            function d3_geo_streamGeometry(geometry, listener) {
                if (d3_geo_streamGeometryType.hasOwnProperty(geometry.type)) {
                    d3_geo_streamGeometryType[geometry.type](geometry, listener);
                }
            }
            var d3_geo_streamObjectType = {
                Feature: function(feature, listener) {
                    d3_geo_streamGeometry(feature.geometry, listener);
                },
                FeatureCollection: function(object, listener) {
                    var features = object.features, i = -1, n = features.length;
                    while (++i < n) d3_geo_streamGeometry(features[i].geometry, listener);
                }
            };
            var d3_geo_streamGeometryType = {
                Sphere: function(object, listener) {
                    listener.sphere();
                },
                Point: function(object, listener) {
                    var coordinate = object.coordinates;
                    listener.point(coordinate[0], coordinate[1]);
                },
                MultiPoint: function(object, listener) {
                    var coordinates = object.coordinates, i = -1, n = coordinates.length, coordinate;
                    while (++i < n) coordinate = coordinates[i], listener.point(coordinate[0], coordinate[1]);
                },
                LineString: function(object, listener) {
                    d3_geo_streamLine(object.coordinates, listener, 0);
                },
                MultiLineString: function(object, listener) {
                    var coordinates = object.coordinates, i = -1, n = coordinates.length;
                    while (++i < n) d3_geo_streamLine(coordinates[i], listener, 0);
                },
                Polygon: function(object, listener) {
                    d3_geo_streamPolygon(object.coordinates, listener);
                },
                MultiPolygon: function(object, listener) {
                    var coordinates = object.coordinates, i = -1, n = coordinates.length;
                    while (++i < n) d3_geo_streamPolygon(coordinates[i], listener);
                },
                GeometryCollection: function(object, listener) {
                    var geometries = object.geometries, i = -1, n = geometries.length;
                    while (++i < n) d3_geo_streamGeometry(geometries[i], listener);
                }
            };
            function d3_geo_streamLine(coordinates, listener, closed) {
                var i = -1, n = coordinates.length - closed, coordinate;
                listener.lineStart();
                while (++i < n) coordinate = coordinates[i], listener.point(coordinate[0], coordinate[1]);
                listener.lineEnd();
            }
            function d3_geo_streamPolygon(coordinates, listener) {
                var i = -1, n = coordinates.length;
                listener.polygonStart();
                while (++i < n) d3_geo_streamLine(coordinates[i], listener, 1);
                listener.polygonEnd();
            }
            function d3_geo_spherical(cartesian) {
                return [ Math.atan2(cartesian[1], cartesian[0]), Math.asin(Math.max(-1, Math.min(1, cartesian[2]))) ];
            }
            function d3_geo_sphericalEqual(a, b) {
                return Math.abs(a[0] - b[0]) < ε && Math.abs(a[1] - b[1]) < ε;
            }
            function d3_geo_cartesian(spherical) {
                var λ = spherical[0], φ = spherical[1], cosφ = Math.cos(φ);
                return [ cosφ * Math.cos(λ), cosφ * Math.sin(λ), Math.sin(φ) ];
            }
            function d3_geo_cartesianDot(a, b) {
                return a[0] * b[0] + a[1] * b[1] + a[2] * b[2];
            }
            function d3_geo_cartesianCross(a, b) {
                return [ a[1] * b[2] - a[2] * b[1], a[2] * b[0] - a[0] * b[2], a[0] * b[1] - a[1] * b[0] ];
            }
            function d3_geo_cartesianAdd(a, b) {
                a[0] += b[0];
                a[1] += b[1];
                a[2] += b[2];
            }
            function d3_geo_cartesianScale(vector, k) {
                return [ vector[0] * k, vector[1] * k, vector[2] * k ];
            }
            function d3_geo_cartesianNormalize(d) {
                var l = Math.sqrt(d[0] * d[0] + d[1] * d[1] + d[2] * d[2]);
                d[0] /= l;
                d[1] /= l;
                d[2] /= l;
            }
            function d3_geo_resample(project) {
                var δ2 = .5, maxDepth = 16;
                function resample(stream) {
                    var λ0, x0, y0, a0, b0, c0;
                    var resample = {
                        point: point,
                        lineStart: lineStart,
                        lineEnd: lineEnd,
                        polygonStart: function() {
                            stream.polygonStart();
                            resample.lineStart = polygonLineStart;
                        },
                        polygonEnd: function() {
                            stream.polygonEnd();
                            resample.lineStart = lineStart;
                        }
                    };
                    function point(x, y) {
                        x = project(x, y);
                        stream.point(x[0], x[1]);
                    }
                    function lineStart() {
                        x0 = NaN;
                        resample.point = linePoint;
                        stream.lineStart();
                    }
                    function linePoint(λ, φ) {
                        var c = d3_geo_cartesian([ λ, φ ]), p = project(λ, φ);
                        resampleLineTo(x0, y0, λ0, a0, b0, c0, x0 = p[0], y0 = p[1], λ0 = λ, a0 = c[0], b0 = c[1], c0 = c[2], maxDepth, stream);
                        stream.point(x0, y0);
                    }
                    function lineEnd() {
                        resample.point = point;
                        stream.lineEnd();
                    }
                    function polygonLineStart() {
                        var λ00, φ00, x00, y00, a00, b00, c00;
                        lineStart();
                        resample.point = function(λ, φ) {
                            linePoint(λ00 = λ, φ00 = φ), x00 = x0, y00 = y0, a00 = a0, b00 = b0, c00 = c0;
                            resample.point = linePoint;
                        };
                        resample.lineEnd = function() {
                            resampleLineTo(x0, y0, λ0, a0, b0, c0, x00, y00, λ00, a00, b00, c00, maxDepth, stream);
                            resample.lineEnd = lineEnd;
                            lineEnd();
                        };
                    }
                    return resample;
                }
                function resampleLineTo(x0, y0, λ0, a0, b0, c0, x1, y1, λ1, a1, b1, c1, depth, stream) {
                    var dx = x1 - x0, dy = y1 - y0, d2 = dx * dx + dy * dy;
                    if (d2 > 4 * δ2 && depth--) {
                        var a = a0 + a1, b = b0 + b1, c = c0 + c1, m = Math.sqrt(a * a + b * b + c * c), φ2 = Math.asin(c /= m), λ2 = Math.abs(Math.abs(c) - 1) < ε ? (λ0 + λ1) / 2 : Math.atan2(b, a), p = project(λ2, φ2), x2 = p[0], y2 = p[1], dx2 = x2 - x0, dy2 = y2 - y0, dz = dy * dx2 - dx * dy2;
                        if (dz * dz / d2 > δ2 || Math.abs((dx * dx2 + dy * dy2) / d2 - .5) > .3) {
                            resampleLineTo(x0, y0, λ0, a0, b0, c0, x2, y2, λ2, a /= m, b /= m, c, depth, stream);
                            stream.point(x2, y2);
                            resampleLineTo(x2, y2, λ2, a, b, c, x1, y1, λ1, a1, b1, c1, depth, stream);
                        }
                    }
                }
                resample.precision = function(_) {
                    if (!arguments.length) return Math.sqrt(δ2);
                    maxDepth = (δ2 = _ * _) > 0 && 16;
                    return resample;
                };
                return resample;
            }
            d3.geo.albersUsa = function() {
                var lower48 = d3.geo.albers();
                var alaska = d3.geo.albers().rotate([ 160, 0 ]).center([ 0, 60 ]).parallels([ 55, 65 ]);
                var hawaii = d3.geo.albers().rotate([ 160, 0 ]).center([ 0, 20 ]).parallels([ 8, 18 ]);
                var puertoRico = d3.geo.albers().rotate([ 60, 0 ]).center([ 0, 10 ]).parallels([ 8, 18 ]);
                function albersUsa(coordinates) {
                    return projection(coordinates)(coordinates);
                }
                function projection(point) {
                    var lon = point[0], lat = point[1];
                    return lat > 50 ? alaska : lon < -140 ? hawaii : lat < 21 ? puertoRico : lower48;
                }
                albersUsa.scale = function(x) {
                    if (!arguments.length) return lower48.scale();
                    lower48.scale(x);
                    alaska.scale(x * .6);
                    hawaii.scale(x);
                    puertoRico.scale(x * 1.5);
                    return albersUsa.translate(lower48.translate());
                };
                albersUsa.translate = function(x) {
                    if (!arguments.length) return lower48.translate();
                    var dz = lower48.scale(), dx = x[0], dy = x[1];
                    lower48.translate(x);
                    alaska.translate([ dx - .4 * dz, dy + .17 * dz ]);
                    hawaii.translate([ dx - .19 * dz, dy + .2 * dz ]);
                    puertoRico.translate([ dx + .58 * dz, dy + .43 * dz ]);
                    return albersUsa;
                };
                return albersUsa.scale(lower48.scale());
            };
            function d3_geo_albers(φ0, φ1) {
                var sinφ0 = Math.sin(φ0), n = (sinφ0 + Math.sin(φ1)) / 2, C = 1 + sinφ0 * (2 * n - sinφ0), ρ0 = Math.sqrt(C) / n;
                function albers(λ, φ) {
                    var ρ = Math.sqrt(C - 2 * n * Math.sin(φ)) / n;
                    return [ ρ * Math.sin(λ *= n), ρ0 - ρ * Math.cos(λ) ];
                }
                albers.invert = function(x, y) {
                    var ρ0_y = ρ0 - y;
                    return [ Math.atan2(x, ρ0_y) / n, Math.asin((C - (x * x + ρ0_y * ρ0_y) * n * n) / (2 * n)) ];
                };
                return albers;
            }
            (d3.geo.albers = function() {
                var φ0 = 29.5 * d3_radians, φ1 = 45.5 * d3_radians, m = d3_geo_projectionMutator(d3_geo_albers), p = m(φ0, φ1);
                p.parallels = function(_) {
                    if (!arguments.length) return [ φ0 * d3_degrees, φ1 * d3_degrees ];
                    return m(φ0 = _[0] * d3_radians, φ1 = _[1] * d3_radians);
                };
                return p.rotate([ 98, 0 ]).center([ 0, 38 ]).scale(1e3);
            }).raw = d3_geo_albers;
            var d3_geo_azimuthalEqualArea = d3_geo_azimuthal(function(cosλcosφ) {
                return Math.sqrt(2 / (1 + cosλcosφ));
            }, function(ρ) {
                return 2 * Math.asin(ρ / 2);
            });
            (d3.geo.azimuthalEqualArea = function() {
                return d3_geo_projection(d3_geo_azimuthalEqualArea);
            }).raw = d3_geo_azimuthalEqualArea;
            var d3_geo_azimuthalEquidistant = d3_geo_azimuthal(function(cosλcosφ) {
                var c = Math.acos(cosλcosφ);
                return c && c / Math.sin(c);
            }, d3_identity);
            (d3.geo.azimuthalEquidistant = function() {
                return d3_geo_projection(d3_geo_azimuthalEquidistant);
            }).raw = d3_geo_azimuthalEquidistant;
            d3.geo.bounds = d3_geo_bounds(d3_identity);
            function d3_geo_bounds(projectStream) {
                var x0, y0, x1, y1;
                var bound = {
                    point: boundPoint,
                    lineStart: d3_noop,
                    lineEnd: d3_noop,
                    polygonStart: function() {
                        bound.lineEnd = boundPolygonLineEnd;
                    },
                    polygonEnd: function() {
                        bound.point = boundPoint;
                    }
                };
                function boundPoint(x, y) {
                    if (x < x0) x0 = x;
                    if (x > x1) x1 = x;
                    if (y < y0) y0 = y;
                    if (y > y1) y1 = y;
                }
                function boundPolygonLineEnd() {
                    bound.point = bound.lineEnd = d3_noop;
                }
                return function(feature) {
                    y1 = x1 = -(x0 = y0 = Infinity);
                    d3.geo.stream(feature, projectStream(bound));
                    return [ [ x0, y0 ], [ x1, y1 ] ];
                };
            }
            d3.geo.centroid = function(object) {
                d3_geo_centroidDimension = d3_geo_centroidW = d3_geo_centroidX = d3_geo_centroidY = d3_geo_centroidZ = 0;
                d3.geo.stream(object, d3_geo_centroid);
                var m;
                if (d3_geo_centroidW && Math.abs(m = Math.sqrt(d3_geo_centroidX * d3_geo_centroidX + d3_geo_centroidY * d3_geo_centroidY + d3_geo_centroidZ * d3_geo_centroidZ)) > ε) {
                    return [ Math.atan2(d3_geo_centroidY, d3_geo_centroidX) * d3_degrees, Math.asin(Math.max(-1, Math.min(1, d3_geo_centroidZ / m))) * d3_degrees ];
                }
            };
            var d3_geo_centroidDimension, d3_geo_centroidW, d3_geo_centroidX, d3_geo_centroidY, d3_geo_centroidZ;
            var d3_geo_centroid = {
                sphere: function() {
                    if (d3_geo_centroidDimension < 2) {
                        d3_geo_centroidDimension = 2;
                        d3_geo_centroidW = d3_geo_centroidX = d3_geo_centroidY = d3_geo_centroidZ = 0;
                    }
                },
                point: d3_geo_centroidPoint,
                lineStart: d3_geo_centroidLineStart,
                lineEnd: d3_geo_centroidLineEnd,
                polygonStart: function() {
                    if (d3_geo_centroidDimension < 2) {
                        d3_geo_centroidDimension = 2;
                        d3_geo_centroidW = d3_geo_centroidX = d3_geo_centroidY = d3_geo_centroidZ = 0;
                    }
                    d3_geo_centroid.lineStart = d3_geo_centroidRingStart;
                },
                polygonEnd: function() {
                    d3_geo_centroid.lineStart = d3_geo_centroidLineStart;
                }
            };
            function d3_geo_centroidPoint(λ, φ) {
                if (d3_geo_centroidDimension) return;
                ++d3_geo_centroidW;
                λ *= d3_radians;
                var cosφ = Math.cos(φ *= d3_radians);
                d3_geo_centroidX += (cosφ * Math.cos(λ) - d3_geo_centroidX) / d3_geo_centroidW;
                d3_geo_centroidY += (cosφ * Math.sin(λ) - d3_geo_centroidY) / d3_geo_centroidW;
                d3_geo_centroidZ += (Math.sin(φ) - d3_geo_centroidZ) / d3_geo_centroidW;
            }
            function d3_geo_centroidRingStart() {
                var λ00, φ00;
                d3_geo_centroidDimension = 1;
                d3_geo_centroidLineStart();
                d3_geo_centroidDimension = 2;
                var linePoint = d3_geo_centroid.point;
                d3_geo_centroid.point = function(λ, φ) {
                    linePoint(λ00 = λ, φ00 = φ);
                };
                d3_geo_centroid.lineEnd = function() {
                    d3_geo_centroid.point(λ00, φ00);
                    d3_geo_centroidLineEnd();
                    d3_geo_centroid.lineEnd = d3_geo_centroidLineEnd;
                };
            }
            function d3_geo_centroidLineStart() {
                var x0, y0, z0;
                if (d3_geo_centroidDimension > 1) return;
                if (d3_geo_centroidDimension < 1) {
                    d3_geo_centroidDimension = 1;
                    d3_geo_centroidW = d3_geo_centroidX = d3_geo_centroidY = d3_geo_centroidZ = 0;
                }
                d3_geo_centroid.point = function(λ, φ) {
                    λ *= d3_radians;
                    var cosφ = Math.cos(φ *= d3_radians);
                    x0 = cosφ * Math.cos(λ);
                    y0 = cosφ * Math.sin(λ);
                    z0 = Math.sin(φ);
                    d3_geo_centroid.point = nextPoint;
                };
                function nextPoint(λ, φ) {
                    λ *= d3_radians;
                    var cosφ = Math.cos(φ *= d3_radians), x = cosφ * Math.cos(λ), y = cosφ * Math.sin(λ), z = Math.sin(φ), w = Math.atan2(Math.sqrt((w = y0 * z - z0 * y) * w + (w = z0 * x - x0 * z) * w + (w = x0 * y - y0 * x) * w), x0 * x + y0 * y + z0 * z);
                    d3_geo_centroidW += w;
                    d3_geo_centroidX += w * (x0 + (x0 = x));
                    d3_geo_centroidY += w * (y0 + (y0 = y));
                    d3_geo_centroidZ += w * (z0 + (z0 = z));
                }
            }
            function d3_geo_centroidLineEnd() {
                d3_geo_centroid.point = d3_geo_centroidPoint;
            }
            d3.geo.circle = function() {
                var origin = [ 0, 0 ], angle, precision = 6, interpolate;
                function circle() {
                    var center = typeof origin === "function" ? origin.apply(this, arguments) : origin, rotate = d3_geo_rotation(-center[0] * d3_radians, -center[1] * d3_radians, 0).invert, ring = [];
                    interpolate(null, null, 1, {
                        point: function(x, y) {
                            ring.push(x = rotate(x, y));
                            x[0] *= d3_degrees, x[1] *= d3_degrees;
                        }
                    });
                    return {
                        type: "Polygon",
                        coordinates: [ ring ]
                    };
                }
                circle.origin = function(x) {
                    if (!arguments.length) return origin;
                    origin = x;
                    return circle;
                };
                circle.angle = function(x) {
                    if (!arguments.length) return angle;
                    interpolate = d3_geo_circleInterpolate((angle = +x) * d3_radians, precision * d3_radians);
                    return circle;
                };
                circle.precision = function(_) {
                    if (!arguments.length) return precision;
                    interpolate = d3_geo_circleInterpolate(angle * d3_radians, (precision = +_) * d3_radians);
                    return circle;
                };
                return circle.angle(90);
            };
            function d3_geo_circleInterpolate(radians, precision) {
                var cr = Math.cos(radians), sr = Math.sin(radians);
                return function(from, to, direction, listener) {
                    if (from != null) {
                        from = d3_geo_circleAngle(cr, from);
                        to = d3_geo_circleAngle(cr, to);
                        if (direction > 0 ? from < to : from > to) from += direction * 2 * π;
                    } else {
                        from = radians + direction * 2 * π;
                        to = radians;
                    }
                    var point;
                    for (var step = direction * precision, t = from; direction > 0 ? t > to : t < to; t -= step) {
                        listener.point((point = d3_geo_spherical([ cr, -sr * Math.cos(t), -sr * Math.sin(t) ]))[0], point[1]);
                    }
                };
            }
            function d3_geo_circleAngle(cr, point) {
                var a = d3_geo_cartesian(point);
                a[0] -= cr;
                d3_geo_cartesianNormalize(a);
                var angle = Math.acos(Math.max(-1, Math.min(1, -a[1])));
                return ((-a[2] < 0 ? -angle : angle) + 2 * Math.PI - ε) % (2 * Math.PI);
            }
            function d3_geo_clip(pointVisible, clipLine, interpolate) {
                return function(listener) {
                    var line = clipLine(listener);
                    var clip = {
                        point: point,
                        lineStart: lineStart,
                        lineEnd: lineEnd,
                        polygonStart: function() {
                            clip.point = pointRing;
                            clip.lineStart = ringStart;
                            clip.lineEnd = ringEnd;
                            invisible = false;
                            invisibleArea = visibleArea = 0;
                            segments = [];
                            listener.polygonStart();
                        },
                        polygonEnd: function() {
                            clip.point = point;
                            clip.lineStart = lineStart;
                            clip.lineEnd = lineEnd;
                            segments = d3.merge(segments);
                            if (segments.length) {
                                d3_geo_clipPolygon(segments, interpolate, listener);
                            } else if (visibleArea < -ε || invisible && invisibleArea < -ε) {
                                listener.lineStart();
                                interpolate(null, null, 1, listener);
                                listener.lineEnd();
                            }
                            listener.polygonEnd();
                            segments = null;
                        },
                        sphere: function() {
                            listener.polygonStart();
                            listener.lineStart();
                            interpolate(null, null, 1, listener);
                            listener.lineEnd();
                            listener.polygonEnd();
                        }
                    };
                    function point(λ, φ) {
                        if (pointVisible(λ, φ)) listener.point(λ, φ);
                    }
                    function pointLine(λ, φ) {
                        line.point(λ, φ);
                    }
                    function lineStart() {
                        clip.point = pointLine;
                        line.lineStart();
                    }
                    function lineEnd() {
                        clip.point = point;
                        line.lineEnd();
                    }
                    var segments, visibleArea, invisibleArea, invisible;
                    var buffer = d3_geo_clipBufferListener(), ringListener = clipLine(buffer), ring;
                    function pointRing(λ, φ) {
                        ringListener.point(λ, φ);
                        ring.push([ λ, φ ]);
                    }
                    function ringStart() {
                        ringListener.lineStart();
                        ring = [];
                    }
                    function ringEnd() {
                        pointRing(ring[0][0], ring[0][1]);
                        ringListener.lineEnd();
                        var clean = ringListener.clean(), ringSegments = buffer.buffer(), segment, n = ringSegments.length;
                        if (!n) {
                            invisible = true;
                            invisibleArea += d3_geo_clipAreaRing(ring, -1);
                            ring = null;
                            return;
                        }
                        ring = null;
                        if (clean & 1) {
                            segment = ringSegments[0];
                            visibleArea += d3_geo_clipAreaRing(segment, 1);
                            var n = segment.length - 1, i = -1, point;
                            listener.lineStart();
                            while (++i < n) listener.point((point = segment[i])[0], point[1]);
                            listener.lineEnd();
                            return;
                        }
                        if (n > 1 && clean & 2) ringSegments.push(ringSegments.pop().concat(ringSegments.shift()));
                        segments.push(ringSegments.filter(d3_geo_clipSegmentLength1));
                    }
                    return clip;
                };
            }
            function d3_geo_clipPolygon(segments, interpolate, listener) {
                var subject = [], clip = [];
                segments.forEach(function(segment) {
                    if ((n = segment.length) <= 1) return;
                    var n, p0 = segment[0], p1 = segment[n - 1];
                    if (d3_geo_sphericalEqual(p0, p1)) {
                        listener.lineStart();
                        for (var i = 0; i < n; ++i) listener.point((p0 = segment[i])[0], p0[1]);
                        listener.lineEnd();
                        return;
                    }
                    var a = {
                        point: p0,
                        points: segment,
                        other: null,
                        visited: false,
                        entry: true,
                        subject: true
                    }, b = {
                        point: p0,
                        points: [ p0 ],
                        other: a,
                        visited: false,
                        entry: false,
                        subject: false
                    };
                    a.other = b;
                    subject.push(a);
                    clip.push(b);
                    a = {
                        point: p1,
                        points: [ p1 ],
                        other: null,
                        visited: false,
                        entry: false,
                        subject: true
                    };
                    b = {
                        point: p1,
                        points: [ p1 ],
                        other: a,
                        visited: false,
                        entry: true,
                        subject: false
                    };
                    a.other = b;
                    subject.push(a);
                    clip.push(b);
                });
                clip.sort(d3_geo_clipSort);
                d3_geo_clipLinkCircular(subject);
                d3_geo_clipLinkCircular(clip);
                if (!subject.length) return;
                var start = subject[0], current, points, point;
                while (1) {
                    current = start;
                    while (current.visited) if ((current = current.next) === start) return;
                    points = current.points;
                    listener.lineStart();
                    do {
                        current.visited = current.other.visited = true;
                        if (current.entry) {
                            if (current.subject) {
                                for (var i = 0; i < points.length; i++) listener.point((point = points[i])[0], point[1]);
                            } else {
                                interpolate(current.point, current.next.point, 1, listener);
                            }
                            current = current.next;
                        } else {
                            if (current.subject) {
                                points = current.prev.points;
                                for (var i = points.length; --i >= 0; ) listener.point((point = points[i])[0], point[1]);
                            } else {
                                interpolate(current.point, current.prev.point, -1, listener);
                            }
                            current = current.prev;
                        }
                        current = current.other;
                        points = current.points;
                    } while (!current.visited);
                    listener.lineEnd();
                }
            }
            function d3_geo_clipLinkCircular(array) {
                if (!(n = array.length)) return;
                var n, i = 0, a = array[0], b;
                while (++i < n) {
                    a.next = b = array[i];
                    b.prev = a;
                    a = b;
                }
                a.next = b = array[0];
                b.prev = a;
            }
            function d3_geo_clipSort(a, b) {
                return ((a = a.point)[0] < 0 ? a[1] - π / 2 - ε : π / 2 - a[1]) - ((b = b.point)[0] < 0 ? b[1] - π / 2 - ε : π / 2 - b[1]);
            }
            function d3_geo_clipSegmentLength1(segment) {
                return segment.length > 1;
            }
            function d3_geo_clipBufferListener() {
                var lines = [], line;
                return {
                    lineStart: function() {
                        lines.push(line = []);
                    },
                    point: function(λ, φ) {
                        line.push([ λ, φ ]);
                    },
                    lineEnd: d3_noop,
                    buffer: function() {
                        var buffer = lines;
                        lines = [];
                        line = null;
                        return buffer;
                    }
                };
            }
            function d3_geo_clipAreaRing(ring, invisible) {
                if (!(n = ring.length)) return 0;
                var n, i = 0, area = 0, p = ring[0], λ = p[0], φ = p[1], cosφ = Math.cos(φ), x0 = Math.atan2(invisible * Math.sin(λ) * cosφ, Math.sin(φ)), y0 = 1 - invisible * Math.cos(λ) * cosφ, x1 = x0, x, y;
                while (++i < n) {
                    p = ring[i];
                    cosφ = Math.cos(φ = p[1]);
                    x = Math.atan2(invisible * Math.sin(λ = p[0]) * cosφ, Math.sin(φ));
                    y = 1 - invisible * Math.cos(λ) * cosφ;
                    if (Math.abs(y0 - 2) < ε && Math.abs(y - 2) < ε) continue;
                    if (Math.abs(y) < ε || Math.abs(y0) < ε) {} else if (Math.abs(Math.abs(x - x0) - π) < ε) {
                        if (y + y0 > 2) area += 4 * (x - x0);
                    } else if (Math.abs(y0 - 2) < ε) area += 4 * (x - x1); else area += ((3 * π + x - x0) % (2 * π) - π) * (y0 + y);
                    x1 = x0, x0 = x, y0 = y;
                }
                return area;
            }
            var d3_geo_clipAntimeridian = d3_geo_clip(d3_true, d3_geo_clipAntimeridianLine, d3_geo_clipAntimeridianInterpolate);
            function d3_geo_clipAntimeridianLine(listener) {
                var λ0 = NaN, φ0 = NaN, sλ0 = NaN, clean;
                return {
                    lineStart: function() {
                        listener.lineStart();
                        clean = 1;
                    },
                    point: function(λ1, φ1) {
                        var sλ1 = λ1 > 0 ? π : -π, dλ = Math.abs(λ1 - λ0);
                        if (Math.abs(dλ - π) < ε) {
                            listener.point(λ0, φ0 = (φ0 + φ1) / 2 > 0 ? π / 2 : -π / 2);
                            listener.point(sλ0, φ0);
                            listener.lineEnd();
                            listener.lineStart();
                            listener.point(sλ1, φ0);
                            listener.point(λ1, φ0);
                            clean = 0;
                        } else if (sλ0 !== sλ1 && dλ >= π) {
                            if (Math.abs(λ0 - sλ0) < ε) λ0 -= sλ0 * ε;
                            if (Math.abs(λ1 - sλ1) < ε) λ1 -= sλ1 * ε;
                            φ0 = d3_geo_clipAntimeridianIntersect(λ0, φ0, λ1, φ1);
                            listener.point(sλ0, φ0);
                            listener.lineEnd();
                            listener.lineStart();
                            listener.point(sλ1, φ0);
                            clean = 0;
                        }
                        listener.point(λ0 = λ1, φ0 = φ1);
                        sλ0 = sλ1;
                    },
                    lineEnd: function() {
                        listener.lineEnd();
                        λ0 = φ0 = NaN;
                    },
                    clean: function() {
                        return 2 - clean;
                    }
                };
            }
            function d3_geo_clipAntimeridianIntersect(λ0, φ0, λ1, φ1) {
                var cosφ0, cosφ1, sinλ0_λ1 = Math.sin(λ0 - λ1);
                return Math.abs(sinλ0_λ1) > ε ? Math.atan((Math.sin(φ0) * (cosφ1 = Math.cos(φ1)) * Math.sin(λ1) - Math.sin(φ1) * (cosφ0 = Math.cos(φ0)) * Math.sin(λ0)) / (cosφ0 * cosφ1 * sinλ0_λ1)) : (φ0 + φ1) / 2;
            }
            function d3_geo_clipAntimeridianInterpolate(from, to, direction, listener) {
                var φ;
                if (from == null) {
                    φ = direction * π / 2;
                    listener.point(-π, φ);
                    listener.point(0, φ);
                    listener.point(π, φ);
                    listener.point(π, 0);
                    listener.point(π, -φ);
                    listener.point(0, -φ);
                    listener.point(-π, -φ);
                    listener.point(-π, 0);
                    listener.point(-π, φ);
                } else if (Math.abs(from[0] - to[0]) > ε) {
                    var s = (from[0] < to[0] ? 1 : -1) * π;
                    φ = direction * s / 2;
                    listener.point(-s, φ);
                    listener.point(0, φ);
                    listener.point(s, φ);
                } else {
                    listener.point(to[0], to[1]);
                }
            }
            function d3_geo_clipCircle(degrees) {
                var radians = degrees * d3_radians, cr = Math.cos(radians), interpolate = d3_geo_circleInterpolate(radians, 6 * d3_radians);
                return d3_geo_clip(visible, clipLine, interpolate);
                function visible(λ, φ) {
                    return Math.cos(λ) * Math.cos(φ) > cr;
                }
                function clipLine(listener) {
                    var point0, v0, v00, clean;
                    return {
                        lineStart: function() {
                            v00 = v0 = false;
                            clean = 1;
                        },
                        point: function(λ, φ) {
                            var point1 = [ λ, φ ], point2, v = visible(λ, φ);
                            if (!point0 && (v00 = v0 = v)) listener.lineStart();
                            if (v !== v0) {
                                point2 = intersect(point0, point1);
                                if (d3_geo_sphericalEqual(point0, point2) || d3_geo_sphericalEqual(point1, point2)) {
                                    point1[0] += ε;
                                    point1[1] += ε;
                                    v = visible(point1[0], point1[1]);
                                }
                            }
                            if (v !== v0) {
                                clean = 0;
                                if (v0 = v) {
                                    listener.lineStart();
                                    point2 = intersect(point1, point0);
                                    listener.point(point2[0], point2[1]);
                                } else {
                                    point2 = intersect(point0, point1);
                                    listener.point(point2[0], point2[1]);
                                    listener.lineEnd();
                                }
                                point0 = point2;
                            }
                            if (v && (!point0 || !d3_geo_sphericalEqual(point0, point1))) listener.point(point1[0], point1[1]);
                            point0 = point1;
                        },
                        lineEnd: function() {
                            if (v0) listener.lineEnd();
                            point0 = null;
                        },
                        clean: function() {
                            return clean | (v00 && v0) << 1;
                        }
                    };
                }
                function intersect(a, b) {
                    var pa = d3_geo_cartesian(a, 0), pb = d3_geo_cartesian(b, 0);
                    var n1 = [ 1, 0, 0 ], n2 = d3_geo_cartesianCross(pa, pb), n2n2 = d3_geo_cartesianDot(n2, n2), n1n2 = n2[0], determinant = n2n2 - n1n2 * n1n2;
                    if (!determinant) return a;
                    var c1 = cr * n2n2 / determinant, c2 = -cr * n1n2 / determinant, n1xn2 = d3_geo_cartesianCross(n1, n2), A = d3_geo_cartesianScale(n1, c1), B = d3_geo_cartesianScale(n2, c2);
                    d3_geo_cartesianAdd(A, B);
                    var u = n1xn2, w = d3_geo_cartesianDot(A, u), uu = d3_geo_cartesianDot(u, u), t = Math.sqrt(w * w - uu * (d3_geo_cartesianDot(A, A) - 1)), q = d3_geo_cartesianScale(u, (-w - t) / uu);
                    d3_geo_cartesianAdd(q, A);
                    return d3_geo_spherical(q);
                }
            }
            function d3_geo_compose(a, b) {
                function compose(x, y) {
                    return x = a(x, y), b(x[0], x[1]);
                }
                if (a.invert && b.invert) compose.invert = function(x, y) {
                    return x = b.invert(x, y), x && a.invert(x[0], x[1]);
                };
                return compose;
            }
            function d3_geo_equirectangular(λ, φ) {
                return [ λ, φ ];
            }
            (d3.geo.equirectangular = function() {
                return d3_geo_projection(d3_geo_equirectangular).scale(250 / π);
            }).raw = d3_geo_equirectangular.invert = d3_geo_equirectangular;
            var d3_geo_gnomonic = d3_geo_azimuthal(function(cosλcosφ) {
                return 1 / cosλcosφ;
            }, Math.atan);
            (d3.geo.gnomonic = function() {
                return d3_geo_projection(d3_geo_gnomonic);
            }).raw = d3_geo_gnomonic;
            d3.geo.graticule = function() {
                var x1, x0, y1, y0, dx = 22.5, dy = dx, x, y, precision = 2.5;
                function graticule() {
                    return {
                        type: "MultiLineString",
                        coordinates: lines()
                    };
                }
                function lines() {
                    return d3.range(Math.ceil(x0 / dx) * dx, x1, dx).map(x).concat(d3.range(Math.ceil(y0 / dy) * dy, y1, dy).map(y));
                }
                graticule.lines = function() {
                    return lines().map(function(coordinates) {
                        return {
                            type: "LineString",
                            coordinates: coordinates
                        };
                    });
                };
                graticule.outline = function() {
                    return {
                        type: "Polygon",
                        coordinates: [ x(x0).concat(y(y1).slice(1), x(x1).reverse().slice(1), y(y0).reverse().slice(1)) ]
                    };
                };
                graticule.extent = function(_) {
                    if (!arguments.length) return [ [ x0, y0 ], [ x1, y1 ] ];
                    x0 = +_[0][0], x1 = +_[1][0];
                    y0 = +_[0][1], y1 = +_[1][1];
                    if (x0 > x1) _ = x0, x0 = x1, x1 = _;
                    if (y0 > y1) _ = y0, y0 = y1, y1 = _;
                    return graticule.precision(precision);
                };
                graticule.step = function(_) {
                    if (!arguments.length) return [ dx, dy ];
                    dx = +_[0], dy = +_[1];
                    return graticule;
                };
                graticule.precision = function(_) {
                    if (!arguments.length) return precision;
                    precision = +_;
                    x = d3_geo_graticuleX(y0, y1, precision);
                    y = d3_geo_graticuleY(x0, x1, precision);
                    return graticule;
                };
                return graticule.extent([ [ -180 + ε, -90 + ε ], [ 180 - ε, 90 - ε ] ]);
            };
            function d3_geo_graticuleX(y0, y1, dy) {
                var y = d3.range(y0, y1 - ε, dy).concat(y1);
                return function(x) {
                    return y.map(function(y) {
                        return [ x, y ];
                    });
                };
            }
            function d3_geo_graticuleY(x0, x1, dx) {
                var x = d3.range(x0, x1 - ε, dx).concat(x1);
                return function(y) {
                    return x.map(function(x) {
                        return [ x, y ];
                    });
                };
            }
            function d3_geo_haversin(x) {
                return (x = Math.sin(x / 2)) * x;
            }
            d3.geo.interpolate = function(source, target) {
                return d3_geo_interpolate(source[0] * d3_radians, source[1] * d3_radians, target[0] * d3_radians, target[1] * d3_radians);
            };
            function d3_geo_interpolate(x0, y0, x1, y1) {
                var cy0 = Math.cos(y0), sy0 = Math.sin(y0), cy1 = Math.cos(y1), sy1 = Math.sin(y1), kx0 = cy0 * Math.cos(x0), ky0 = cy0 * Math.sin(x0), kx1 = cy1 * Math.cos(x1), ky1 = cy1 * Math.sin(x1), d = 2 * Math.asin(Math.sqrt(d3_geo_haversin(y1 - y0) + cy0 * cy1 * d3_geo_haversin(x1 - x0))), k = 1 / Math.sin(d);
                var interpolate = d ? function(t) {
                    var B = Math.sin(t *= d) * k, A = Math.sin(d - t) * k, x = A * kx0 + B * kx1, y = A * ky0 + B * ky1, z = A * sy0 + B * sy1;
                    return [ Math.atan2(y, x) * d3_degrees, Math.atan2(z, Math.sqrt(x * x + y * y)) * d3_degrees ];
                } : function() {
                    return [ x0 * d3_degrees, y0 * d3_degrees ];
                };
                interpolate.distance = d;
                return interpolate;
            }
            d3.geo.greatArc = function() {
                var source = d3_source, source_, target = d3_target, target_, precision = 6 * d3_radians, interpolate;
                function greatArc() {
                    var p0 = source_ || source.apply(this, arguments), p1 = target_ || target.apply(this, arguments), i = interpolate || d3.geo.interpolate(p0, p1), t = 0, dt = precision / i.distance, coordinates = [ p0 ];
                    while ((t += dt) < 1) coordinates.push(i(t));
                    coordinates.push(p1);
                    return {
                        type: "LineString",
                        coordinates: coordinates
                    };
                }
                greatArc.distance = function() {
                    return (interpolate || d3.geo.interpolate(source_ || source.apply(this, arguments), target_ || target.apply(this, arguments))).distance;
                };
                greatArc.source = function(_) {
                    if (!arguments.length) return source;
                    source = _, source_ = typeof _ === "function" ? null : _;
                    interpolate = source_ && target_ ? d3.geo.interpolate(source_, target_) : null;
                    return greatArc;
                };
                greatArc.target = function(_) {
                    if (!arguments.length) return target;
                    target = _, target_ = typeof _ === "function" ? null : _;
                    interpolate = source_ && target_ ? d3.geo.interpolate(source_, target_) : null;
                    return greatArc;
                };
                greatArc.precision = function(_) {
                    if (!arguments.length) return precision / d3_radians;
                    precision = _ * d3_radians;
                    return greatArc;
                };
                return greatArc;
            };
            function d3_geo_mercator(λ, φ) {
                return [ λ / (2 * π), Math.max(-.5, Math.min(+.5, Math.log(Math.tan(π / 4 + φ / 2)) / (2 * π))) ];
            }
            d3_geo_mercator.invert = function(x, y) {
                return [ 2 * π * x, 2 * Math.atan(Math.exp(2 * π * y)) - π / 2 ];
            };
            (d3.geo.mercator = function() {
                return d3_geo_projection(d3_geo_mercator).scale(500);
            }).raw = d3_geo_mercator;
            var d3_geo_orthographic = d3_geo_azimuthal(function() {
                return 1;
            }, Math.asin);
            (d3.geo.orthographic = function() {
                return d3_geo_projection(d3_geo_orthographic);
            }).raw = d3_geo_orthographic;
            d3.geo.path = function() {
                var pointRadius = 4.5, projection, context, projectStream, contextStream;
                function path(object) {
                    if (object) d3.geo.stream(object, projectStream(contextStream.pointRadius(typeof pointRadius === "function" ? +pointRadius.apply(this, arguments) : pointRadius)));
                    return contextStream.result();
                }
                path.area = function(object) {
                    d3_geo_pathAreaSum = 0;
                    d3.geo.stream(object, projectStream(d3_geo_pathArea));
                    return d3_geo_pathAreaSum;
                };
                path.centroid = function(object) {
                    d3_geo_centroidDimension = d3_geo_centroidX = d3_geo_centroidY = d3_geo_centroidZ = 0;
                    d3.geo.stream(object, projectStream(d3_geo_pathCentroid));
                    return d3_geo_centroidZ ? [ d3_geo_centroidX / d3_geo_centroidZ, d3_geo_centroidY / d3_geo_centroidZ ] : undefined;
                };
                path.bounds = function(object) {
                    return d3_geo_bounds(projectStream)(object);
                };
                path.projection = function(_) {
                    if (!arguments.length) return projection;
                    projectStream = (projection = _) ? _.stream || d3_geo_pathProjectStream(_) : d3_identity;
                    return path;
                };
                path.context = function(_) {
                    if (!arguments.length) return context;
                    contextStream = (context = _) == null ? new d3_geo_pathBuffer() : new d3_geo_pathContext(_);
                    return path;
                };
                path.pointRadius = function(_) {
                    if (!arguments.length) return pointRadius;
                    pointRadius = typeof _ === "function" ? _ : +_;
                    return path;
                };
                return path.projection(d3.geo.albersUsa()).context(null);
            };
            function d3_geo_pathCircle(radius) {
                return "m0," + radius + "a" + radius + "," + radius + " 0 1,1 0," + -2 * radius + "a" + radius + "," + radius + " 0 1,1 0," + +2 * radius + "z";
            }
            function d3_geo_pathProjectStream(project) {
                var resample = d3_geo_resample(function(λ, φ) {
                    return project([ λ * d3_degrees, φ * d3_degrees ]);
                });
                return function(stream) {
                    stream = resample(stream);
                    return {
                        point: function(λ, φ) {
                            stream.point(λ * d3_radians, φ * d3_radians);
                        },
                        sphere: function() {
                            stream.sphere();
                        },
                        lineStart: function() {
                            stream.lineStart();
                        },
                        lineEnd: function() {
                            stream.lineEnd();
                        },
                        polygonStart: function() {
                            stream.polygonStart();
                        },
                        polygonEnd: function() {
                            stream.polygonEnd();
                        }
                    };
                };
            }
            function d3_geo_pathBuffer() {
                var pointCircle = d3_geo_pathCircle(4.5), buffer = [];
                var stream = {
                    point: point,
                    lineStart: function() {
                        stream.point = pointLineStart;
                    },
                    lineEnd: lineEnd,
                    polygonStart: function() {
                        stream.lineEnd = lineEndPolygon;
                    },
                    polygonEnd: function() {
                        stream.lineEnd = lineEnd;
                        stream.point = point;
                    },
                    pointRadius: function(_) {
                        pointCircle = d3_geo_pathCircle(_);
                        return stream;
                    },
                    result: function() {
                        if (buffer.length) {
                            var result = buffer.join("");
                            buffer = [];
                            return result;
                        }
                    }
                };
                function point(x, y) {
                    buffer.push("M", x, ",", y, pointCircle);
                }
                function pointLineStart(x, y) {
                    buffer.push("M", x, ",", y);
                    stream.point = pointLine;
                }
                function pointLine(x, y) {
                    buffer.push("L", x, ",", y);
                }
                function lineEnd() {
                    stream.point = point;
                }
                function lineEndPolygon() {
                    buffer.push("Z");
                }
                return stream;
            }
            function d3_geo_pathContext(context) {
                var pointRadius = 4.5;
                var stream = {
                    point: point,
                    lineStart: function() {
                        stream.point = pointLineStart;
                    },
                    lineEnd: lineEnd,
                    polygonStart: function() {
                        stream.lineEnd = lineEndPolygon;
                    },
                    polygonEnd: function() {
                        stream.lineEnd = lineEnd;
                        stream.point = point;
                    },
                    pointRadius: function(_) {
                        pointRadius = _;
                        return stream;
                    },
                    result: d3_noop
                };
                function point(x, y) {
                    context.moveTo(x, y);
                    context.arc(x, y, pointRadius, 0, 2 * π);
                }
                function pointLineStart(x, y) {
                    context.moveTo(x, y);
                    stream.point = pointLine;
                }
                function pointLine(x, y) {
                    context.lineTo(x, y);
                }
                function lineEnd() {
                    stream.point = point;
                }
                function lineEndPolygon() {
                    context.closePath();
                }
                return stream;
            }
            var d3_geo_pathAreaSum, d3_geo_pathAreaPolygon, d3_geo_pathArea = {
                point: d3_noop,
                lineStart: d3_noop,
                lineEnd: d3_noop,
                polygonStart: function() {
                    d3_geo_pathAreaPolygon = 0;
                    d3_geo_pathArea.lineStart = d3_geo_pathAreaRingStart;
                },
                polygonEnd: function() {
                    d3_geo_pathArea.lineStart = d3_geo_pathArea.lineEnd = d3_geo_pathArea.point = d3_noop;
                    d3_geo_pathAreaSum += Math.abs(d3_geo_pathAreaPolygon / 2);
                }
            };
            function d3_geo_pathAreaRingStart() {
                var x00, y00, x0, y0;
                d3_geo_pathArea.point = function(x, y) {
                    d3_geo_pathArea.point = nextPoint;
                    x00 = x0 = x, y00 = y0 = y;
                };
                function nextPoint(x, y) {
                    d3_geo_pathAreaPolygon += y0 * x - x0 * y;
                    x0 = x, y0 = y;
                }
                d3_geo_pathArea.lineEnd = function() {
                    nextPoint(x00, y00);
                };
            }
            var d3_geo_pathCentroid = {
                point: d3_geo_pathCentroidPoint,
                lineStart: d3_geo_pathCentroidLineStart,
                lineEnd: d3_geo_pathCentroidLineEnd,
                polygonStart: function() {
                    d3_geo_pathCentroid.lineStart = d3_geo_pathCentroidRingStart;
                },
                polygonEnd: function() {
                    d3_geo_pathCentroid.point = d3_geo_pathCentroidPoint;
                    d3_geo_pathCentroid.lineStart = d3_geo_pathCentroidLineStart;
                    d3_geo_pathCentroid.lineEnd = d3_geo_pathCentroidLineEnd;
                }
            };
            function d3_geo_pathCentroidPoint(x, y) {
                if (d3_geo_centroidDimension) return;
                d3_geo_centroidX += x;
                d3_geo_centroidY += y;
                ++d3_geo_centroidZ;
            }
            function d3_geo_pathCentroidLineStart() {
                var x0, y0;
                if (d3_geo_centroidDimension !== 1) {
                    if (d3_geo_centroidDimension < 1) {
                        d3_geo_centroidDimension = 1;
                        d3_geo_centroidX = d3_geo_centroidY = d3_geo_centroidZ = 0;
                    } else return;
                }
                d3_geo_pathCentroid.point = function(x, y) {
                    d3_geo_pathCentroid.point = nextPoint;
                    x0 = x, y0 = y;
                };
                function nextPoint(x, y) {
                    var dx = x - x0, dy = y - y0, z = Math.sqrt(dx * dx + dy * dy);
                    d3_geo_centroidX += z * (x0 + x) / 2;
                    d3_geo_centroidY += z * (y0 + y) / 2;
                    d3_geo_centroidZ += z;
                    x0 = x, y0 = y;
                }
            }
            function d3_geo_pathCentroidLineEnd() {
                d3_geo_pathCentroid.point = d3_geo_pathCentroidPoint;
            }
            function d3_geo_pathCentroidRingStart() {
                var x00, y00, x0, y0;
                if (d3_geo_centroidDimension < 2) {
                    d3_geo_centroidDimension = 2;
                    d3_geo_centroidX = d3_geo_centroidY = d3_geo_centroidZ = 0;
                }
                d3_geo_pathCentroid.point = function(x, y) {
                    d3_geo_pathCentroid.point = nextPoint;
                    x00 = x0 = x, y00 = y0 = y;
                };
                function nextPoint(x, y) {
                    var z = y0 * x - x0 * y;
                    d3_geo_centroidX += z * (x0 + x);
                    d3_geo_centroidY += z * (y0 + y);
                    d3_geo_centroidZ += z * 3;
                    x0 = x, y0 = y;
                }
                d3_geo_pathCentroid.lineEnd = function() {
                    nextPoint(x00, y00);
                };
            }
            d3.geo.area = function(object) {
                d3_geo_areaSum = 0;
                d3.geo.stream(object, d3_geo_area);
                return d3_geo_areaSum;
            };
            var d3_geo_areaSum, d3_geo_areaRingU, d3_geo_areaRingV;
            var d3_geo_area = {
                sphere: function() {
                    d3_geo_areaSum += 4 * π;
                },
                point: d3_noop,
                lineStart: d3_noop,
                lineEnd: d3_noop,
                polygonStart: function() {
                    d3_geo_areaRingU = 1, d3_geo_areaRingV = 0;
                    d3_geo_area.lineStart = d3_geo_areaRingStart;
                },
                polygonEnd: function() {
                    var area = 2 * Math.atan2(d3_geo_areaRingV, d3_geo_areaRingU);
                    d3_geo_areaSum += area < 0 ? 4 * π + area : area;
                    d3_geo_area.lineStart = d3_geo_area.lineEnd = d3_geo_area.point = d3_noop;
                }
            };
            function d3_geo_areaRingStart() {
                var λ00, φ00, λ0, cosφ0, sinφ0;
                d3_geo_area.point = function(λ, φ) {
                    d3_geo_area.point = nextPoint;
                    λ0 = (λ00 = λ) * d3_radians, cosφ0 = Math.cos(φ = (φ00 = φ) * d3_radians / 2 + π / 4),
                        sinφ0 = Math.sin(φ);
                };
                function nextPoint(λ, φ) {
                    λ *= d3_radians;
                    φ = φ * d3_radians / 2 + π / 4;
                    var dλ = λ - λ0, cosφ = Math.cos(φ), sinφ = Math.sin(φ), k = sinφ0 * sinφ, u0 = d3_geo_areaRingU, v0 = d3_geo_areaRingV, u = cosφ0 * cosφ + k * Math.cos(dλ), v = k * Math.sin(dλ);
                    d3_geo_areaRingU = u0 * u - v0 * v;
                    d3_geo_areaRingV = v0 * u + u0 * v;
                    λ0 = λ, cosφ0 = cosφ, sinφ0 = sinφ;
                }
                d3_geo_area.lineEnd = function() {
                    nextPoint(λ00, φ00);
                };
            }
            d3.geo.projection = d3_geo_projection;
            d3.geo.projectionMutator = d3_geo_projectionMutator;
            function d3_geo_projection(project) {
                return d3_geo_projectionMutator(function() {
                    return project;
                })();
            }
            function d3_geo_projectionMutator(projectAt) {
                var project, rotate, projectRotate, projectResample = d3_geo_resample(function(x, y) {
                    x = project(x, y);
                    return [ x[0] * k + δx, δy - x[1] * k ];
                }), k = 150, x = 480, y = 250, λ = 0, φ = 0, δλ = 0, δφ = 0, δγ = 0, δx, δy, clip = d3_geo_clipAntimeridian, clipAngle = null;
                function projection(point) {
                    point = projectRotate(point[0] * d3_radians, point[1] * d3_radians);
                    return [ point[0] * k + δx, δy - point[1] * k ];
                }
                function invert(point) {
                    point = projectRotate.invert((point[0] - δx) / k, (δy - point[1]) / k);
                    return point && [ point[0] * d3_degrees, point[1] * d3_degrees ];
                }
                projection.stream = function(stream) {
                    return d3_geo_projectionRadiansRotate(rotate, clip(projectResample(stream)));
                };
                projection.clipAngle = function(_) {
                    if (!arguments.length) return clipAngle;
                    clip = _ == null ? (clipAngle = _, d3_geo_clipAntimeridian) : d3_geo_clipCircle(clipAngle = +_);
                    return projection;
                };
                projection.scale = function(_) {
                    if (!arguments.length) return k;
                    k = +_;
                    return reset();
                };
                projection.translate = function(_) {
                    if (!arguments.length) return [ x, y ];
                    x = +_[0];
                    y = +_[1];
                    return reset();
                };
                projection.center = function(_) {
                    if (!arguments.length) return [ λ * d3_degrees, φ * d3_degrees ];
                    λ = _[0] % 360 * d3_radians;
                    φ = _[1] % 360 * d3_radians;
                    return reset();
                };
                projection.rotate = function(_) {
                    if (!arguments.length) return [ δλ * d3_degrees, δφ * d3_degrees, δγ * d3_degrees ];
                    δλ = _[0] % 360 * d3_radians;
                    δφ = _[1] % 360 * d3_radians;
                    δγ = _.length > 2 ? _[2] % 360 * d3_radians : 0;
                    return reset();
                };
                d3.rebind(projection, projectResample, "precision");
                function reset() {
                    projectRotate = d3_geo_compose(rotate = d3_geo_rotation(δλ, δφ, δγ), project);
                    var center = project(λ, φ);
                    δx = x - center[0] * k;
                    δy = y + center[1] * k;
                    return projection;
                }
                return function() {
                    project = projectAt.apply(this, arguments);
                    projection.invert = project.invert && invert;
                    return reset();
                };
            }
            function d3_geo_projectionRadiansRotate(rotate, stream) {
                return {
                    point: function(x, y) {
                        y = rotate(x * d3_radians, y * d3_radians), x = y[0];
                        stream.point(x > π ? x - 2 * π : x < -π ? x + 2 * π : x, y[1]);
                    },
                    sphere: function() {
                        stream.sphere();
                    },
                    lineStart: function() {
                        stream.lineStart();
                    },
                    lineEnd: function() {
                        stream.lineEnd();
                    },
                    polygonStart: function() {
                        stream.polygonStart();
                    },
                    polygonEnd: function() {
                        stream.polygonEnd();
                    }
                };
            }
            function d3_geo_rotation(δλ, δφ, δγ) {
                return δλ ? δφ || δγ ? d3_geo_compose(d3_geo_rotationλ(δλ), d3_geo_rotationφγ(δφ, δγ)) : d3_geo_rotationλ(δλ) : δφ || δγ ? d3_geo_rotationφγ(δφ, δγ) : d3_geo_equirectangular;
            }
            function d3_geo_forwardRotationλ(δλ) {
                return function(λ, φ) {
                    return λ += δλ, [ λ > π ? λ - 2 * π : λ < -π ? λ + 2 * π : λ, φ ];
                };
            }
            function d3_geo_rotationλ(δλ) {
                var rotation = d3_geo_forwardRotationλ(δλ);
                rotation.invert = d3_geo_forwardRotationλ(-δλ);
                return rotation;
            }
            function d3_geo_rotationφγ(δφ, δγ) {
                var cosδφ = Math.cos(δφ), sinδφ = Math.sin(δφ), cosδγ = Math.cos(δγ), sinδγ = Math.sin(δγ);
                function rotation(λ, φ) {
                    var cosφ = Math.cos(φ), x = Math.cos(λ) * cosφ, y = Math.sin(λ) * cosφ, z = Math.sin(φ), k = z * cosδφ + x * sinδφ;
                    return [ Math.atan2(y * cosδγ - k * sinδγ, x * cosδφ - z * sinδφ), Math.asin(Math.max(-1, Math.min(1, k * cosδγ + y * sinδγ))) ];
                }
                rotation.invert = function(λ, φ) {
                    var cosφ = Math.cos(φ), x = Math.cos(λ) * cosφ, y = Math.sin(λ) * cosφ, z = Math.sin(φ), k = z * cosδγ - y * sinδγ;
                    return [ Math.atan2(y * cosδγ + z * sinδγ, x * cosδφ + k * sinδφ), Math.asin(Math.max(-1, Math.min(1, k * cosδφ - x * sinδφ))) ];
                };
                return rotation;
            }
            var d3_geo_stereographic = d3_geo_azimuthal(function(cosλcosφ) {
                return 1 / (1 + cosλcosφ);
            }, function(ρ) {
                return 2 * Math.atan(ρ);
            });
            (d3.geo.stereographic = function() {
                return d3_geo_projection(d3_geo_stereographic);
            }).raw = d3_geo_stereographic;
            function d3_geo_azimuthal(scale, angle) {
                function azimuthal(λ, φ) {
                    var cosλ = Math.cos(λ), cosφ = Math.cos(φ), k = scale(cosλ * cosφ);
                    return [ k * cosφ * Math.sin(λ), k * Math.sin(φ) ];
                }
                azimuthal.invert = function(x, y) {
                    var ρ = Math.sqrt(x * x + y * y), c = angle(ρ), sinc = Math.sin(c), cosc = Math.cos(c);
                    return [ Math.atan2(x * sinc, ρ * cosc), Math.asin(ρ && y * sinc / ρ) ];
                };
                return azimuthal;
            }
            d3.geom = {};
            d3.geom.hull = function(vertices) {
                if (vertices.length < 3) return [];
                var len = vertices.length, plen = len - 1, points = [], stack = [], i, j, h = 0, x1, y1, x2, y2, u, v, a, sp;
                for (i = 1; i < len; ++i) {
                    if (vertices[i][1] < vertices[h][1]) {
                        h = i;
                    } else if (vertices[i][1] == vertices[h][1]) {
                        h = vertices[i][0] < vertices[h][0] ? i : h;
                    }
                }
                for (i = 0; i < len; ++i) {
                    if (i === h) continue;
                    y1 = vertices[i][1] - vertices[h][1];
                    x1 = vertices[i][0] - vertices[h][0];
                    points.push({
                        angle: Math.atan2(y1, x1),
                        index: i
                    });
                }
                points.sort(function(a, b) {
                    return a.angle - b.angle;
                });
                a = points[0].angle;
                v = points[0].index;
                u = 0;
                for (i = 1; i < plen; ++i) {
                    j = points[i].index;
                    if (a == points[i].angle) {
                        x1 = vertices[v][0] - vertices[h][0];
                        y1 = vertices[v][1] - vertices[h][1];
                        x2 = vertices[j][0] - vertices[h][0];
                        y2 = vertices[j][1] - vertices[h][1];
                        if (x1 * x1 + y1 * y1 >= x2 * x2 + y2 * y2) {
                            points[i].index = -1;
                        } else {
                            points[u].index = -1;
                            a = points[i].angle;
                            u = i;
                            v = j;
                        }
                    } else {
                        a = points[i].angle;
                        u = i;
                        v = j;
                    }
                }
                stack.push(h);
                for (i = 0, j = 0; i < 2; ++j) {
                    if (points[j].index !== -1) {
                        stack.push(points[j].index);
                        i++;
                    }
                }
                sp = stack.length;
                for (;j < plen; ++j) {
                    if (points[j].index === -1) continue;
                    while (!d3_geom_hullCCW(stack[sp - 2], stack[sp - 1], points[j].index, vertices)) {
                        --sp;
                    }
                    stack[sp++] = points[j].index;
                }
                var poly = [];
                for (i = 0; i < sp; ++i) {
                    poly.push(vertices[stack[i]]);
                }
                return poly;
            };
            function d3_geom_hullCCW(i1, i2, i3, v) {
                var t, a, b, c, d, e, f;
                t = v[i1];
                a = t[0];
                b = t[1];
                t = v[i2];
                c = t[0];
                d = t[1];
                t = v[i3];
                e = t[0];
                f = t[1];
                return (f - b) * (c - a) - (d - b) * (e - a) > 0;
            }
            d3.geom.polygon = function(coordinates) {
                coordinates.area = function() {
                    var i = 0, n = coordinates.length, area = coordinates[n - 1][1] * coordinates[0][0] - coordinates[n - 1][0] * coordinates[0][1];
                    while (++i < n) {
                        area += coordinates[i - 1][1] * coordinates[i][0] - coordinates[i - 1][0] * coordinates[i][1];
                    }
                    return area * .5;
                };
                coordinates.centroid = function(k) {
                    var i = -1, n = coordinates.length, x = 0, y = 0, a, b = coordinates[n - 1], c;
                    if (!arguments.length) k = -1 / (6 * coordinates.area());
                    while (++i < n) {
                        a = b;
                        b = coordinates[i];
                        c = a[0] * b[1] - b[0] * a[1];
                        x += (a[0] + b[0]) * c;
                        y += (a[1] + b[1]) * c;
                    }
                    return [ x * k, y * k ];
                };
                coordinates.clip = function(subject) {
                    var input, i = -1, n = coordinates.length, j, m, a = coordinates[n - 1], b, c, d;
                    while (++i < n) {
                        input = subject.slice();
                        subject.length = 0;
                        b = coordinates[i];
                        c = input[(m = input.length) - 1];
                        j = -1;
                        while (++j < m) {
                            d = input[j];
                            if (d3_geom_polygonInside(d, a, b)) {
                                if (!d3_geom_polygonInside(c, a, b)) {
                                    subject.push(d3_geom_polygonIntersect(c, d, a, b));
                                }
                                subject.push(d);
                            } else if (d3_geom_polygonInside(c, a, b)) {
                                subject.push(d3_geom_polygonIntersect(c, d, a, b));
                            }
                            c = d;
                        }
                        a = b;
                    }
                    return subject;
                };
                return coordinates;
            };
            function d3_geom_polygonInside(p, a, b) {
                return (b[0] - a[0]) * (p[1] - a[1]) < (b[1] - a[1]) * (p[0] - a[0]);
            }
            function d3_geom_polygonIntersect(c, d, a, b) {
                var x1 = c[0], x3 = a[0], x21 = d[0] - x1, x43 = b[0] - x3, y1 = c[1], y3 = a[1], y21 = d[1] - y1, y43 = b[1] - y3, ua = (x43 * (y1 - y3) - y43 * (x1 - x3)) / (y43 * x21 - x43 * y21);
                return [ x1 + ua * x21, y1 + ua * y21 ];
            }
            d3.geom.voronoi = function(vertices) {
                var polygons = vertices.map(function() {
                    return [];
                }), Z = 1e6;
                d3_voronoi_tessellate(vertices, function(e) {
                    var s1, s2, x1, x2, y1, y2;
                    if (e.a === 1 && e.b >= 0) {
                        s1 = e.ep.r;
                        s2 = e.ep.l;
                    } else {
                        s1 = e.ep.l;
                        s2 = e.ep.r;
                    }
                    if (e.a === 1) {
                        y1 = s1 ? s1.y : -Z;
                        x1 = e.c - e.b * y1;
                        y2 = s2 ? s2.y : Z;
                        x2 = e.c - e.b * y2;
                    } else {
                        x1 = s1 ? s1.x : -Z;
                        y1 = e.c - e.a * x1;
                        x2 = s2 ? s2.x : Z;
                        y2 = e.c - e.a * x2;
                    }
                    var v1 = [ x1, y1 ], v2 = [ x2, y2 ];
                    polygons[e.region.l.index].push(v1, v2);
                    polygons[e.region.r.index].push(v1, v2);
                });
                polygons = polygons.map(function(polygon, i) {
                    var cx = vertices[i][0], cy = vertices[i][1], angle = polygon.map(function(v) {
                        return Math.atan2(v[0] - cx, v[1] - cy);
                    }), order = d3.range(polygon.length).sort(function(a, b) {
                        return angle[a] - angle[b];
                    });
                    return order.filter(function(d, i) {
                        return !i || angle[d] - angle[order[i - 1]] > ε;
                    }).map(function(d) {
                            return polygon[d];
                        });
                });
                polygons.forEach(function(polygon, i) {
                    var n = polygon.length;
                    if (!n) return polygon.push([ -Z, -Z ], [ -Z, Z ], [ Z, Z ], [ Z, -Z ]);
                    if (n > 2) return;
                    var p0 = vertices[i], p1 = polygon[0], p2 = polygon[1], x0 = p0[0], y0 = p0[1], x1 = p1[0], y1 = p1[1], x2 = p2[0], y2 = p2[1], dx = Math.abs(x2 - x1), dy = y2 - y1;
                    if (Math.abs(dy) < ε) {
                        var y = y0 < y1 ? -Z : Z;
                        polygon.push([ -Z, y ], [ Z, y ]);
                    } else if (dx < ε) {
                        var x = x0 < x1 ? -Z : Z;
                        polygon.push([ x, -Z ], [ x, Z ]);
                    } else {
                        var y = (x2 - x1) * (y1 - y0) < (x1 - x0) * (y2 - y1) ? Z : -Z, z = Math.abs(dy) - dx;
                        if (Math.abs(z) < ε) {
                            polygon.push([ dy < 0 ? y : -y, y ]);
                        } else {
                            if (z > 0) y *= -1;
                            polygon.push([ -Z, y ], [ Z, y ]);
                        }
                    }
                });
                return polygons;
            };
            var d3_voronoi_opposite = {
                l: "r",
                r: "l"
            };
            function d3_voronoi_tessellate(vertices, callback) {
                var Sites = {
                    list: vertices.map(function(v, i) {
                        return {
                            index: i,
                            x: v[0],
                            y: v[1]
                        };
                    }).sort(function(a, b) {
                            return a.y < b.y ? -1 : a.y > b.y ? 1 : a.x < b.x ? -1 : a.x > b.x ? 1 : 0;
                        }),
                    bottomSite: null
                };
                var EdgeList = {
                    list: [],
                    leftEnd: null,
                    rightEnd: null,
                    init: function() {
                        EdgeList.leftEnd = EdgeList.createHalfEdge(null, "l");
                        EdgeList.rightEnd = EdgeList.createHalfEdge(null, "l");
                        EdgeList.leftEnd.r = EdgeList.rightEnd;
                        EdgeList.rightEnd.l = EdgeList.leftEnd;
                        EdgeList.list.unshift(EdgeList.leftEnd, EdgeList.rightEnd);
                    },
                    createHalfEdge: function(edge, side) {
                        return {
                            edge: edge,
                            side: side,
                            vertex: null,
                            l: null,
                            r: null
                        };
                    },
                    insert: function(lb, he) {
                        he.l = lb;
                        he.r = lb.r;
                        lb.r.l = he;
                        lb.r = he;
                    },
                    leftBound: function(p) {
                        var he = EdgeList.leftEnd;
                        do {
                            he = he.r;
                        } while (he != EdgeList.rightEnd && Geom.rightOf(he, p));
                        he = he.l;
                        return he;
                    },
                    del: function(he) {
                        he.l.r = he.r;
                        he.r.l = he.l;
                        he.edge = null;
                    },
                    right: function(he) {
                        return he.r;
                    },
                    left: function(he) {
                        return he.l;
                    },
                    leftRegion: function(he) {
                        return he.edge == null ? Sites.bottomSite : he.edge.region[he.side];
                    },
                    rightRegion: function(he) {
                        return he.edge == null ? Sites.bottomSite : he.edge.region[d3_voronoi_opposite[he.side]];
                    }
                };
                var Geom = {
                    bisect: function(s1, s2) {
                        var newEdge = {
                            region: {
                                l: s1,
                                r: s2
                            },
                            ep: {
                                l: null,
                                r: null
                            }
                        };
                        var dx = s2.x - s1.x, dy = s2.y - s1.y, adx = dx > 0 ? dx : -dx, ady = dy > 0 ? dy : -dy;
                        newEdge.c = s1.x * dx + s1.y * dy + (dx * dx + dy * dy) * .5;
                        if (adx > ady) {
                            newEdge.a = 1;
                            newEdge.b = dy / dx;
                            newEdge.c /= dx;
                        } else {
                            newEdge.b = 1;
                            newEdge.a = dx / dy;
                            newEdge.c /= dy;
                        }
                        return newEdge;
                    },
                    intersect: function(el1, el2) {
                        var e1 = el1.edge, e2 = el2.edge;
                        if (!e1 || !e2 || e1.region.r == e2.region.r) {
                            return null;
                        }
                        var d = e1.a * e2.b - e1.b * e2.a;
                        if (Math.abs(d) < 1e-10) {
                            return null;
                        }
                        var xint = (e1.c * e2.b - e2.c * e1.b) / d, yint = (e2.c * e1.a - e1.c * e2.a) / d, e1r = e1.region.r, e2r = e2.region.r, el, e;
                        if (e1r.y < e2r.y || e1r.y == e2r.y && e1r.x < e2r.x) {
                            el = el1;
                            e = e1;
                        } else {
                            el = el2;
                            e = e2;
                        }
                        var rightOfSite = xint >= e.region.r.x;
                        if (rightOfSite && el.side === "l" || !rightOfSite && el.side === "r") {
                            return null;
                        }
                        return {
                            x: xint,
                            y: yint
                        };
                    },
                    rightOf: function(he, p) {
                        var e = he.edge, topsite = e.region.r, rightOfSite = p.x > topsite.x;
                        if (rightOfSite && he.side === "l") {
                            return 1;
                        }
                        if (!rightOfSite && he.side === "r") {
                            return 0;
                        }
                        if (e.a === 1) {
                            var dyp = p.y - topsite.y, dxp = p.x - topsite.x, fast = 0, above = 0;
                            if (!rightOfSite && e.b < 0 || rightOfSite && e.b >= 0) {
                                above = fast = dyp >= e.b * dxp;
                            } else {
                                above = p.x + p.y * e.b > e.c;
                                if (e.b < 0) {
                                    above = !above;
                                }
                                if (!above) {
                                    fast = 1;
                                }
                            }
                            if (!fast) {
                                var dxs = topsite.x - e.region.l.x;
                                above = e.b * (dxp * dxp - dyp * dyp) < dxs * dyp * (1 + 2 * dxp / dxs + e.b * e.b);
                                if (e.b < 0) {
                                    above = !above;
                                }
                            }
                        } else {
                            var yl = e.c - e.a * p.x, t1 = p.y - yl, t2 = p.x - topsite.x, t3 = yl - topsite.y;
                            above = t1 * t1 > t2 * t2 + t3 * t3;
                        }
                        return he.side === "l" ? above : !above;
                    },
                    endPoint: function(edge, side, site) {
                        edge.ep[side] = site;
                        if (!edge.ep[d3_voronoi_opposite[side]]) return;
                        callback(edge);
                    },
                    distance: function(s, t) {
                        var dx = s.x - t.x, dy = s.y - t.y;
                        return Math.sqrt(dx * dx + dy * dy);
                    }
                };
                var EventQueue = {
                    list: [],
                    insert: function(he, site, offset) {
                        he.vertex = site;
                        he.ystar = site.y + offset;
                        for (var i = 0, list = EventQueue.list, l = list.length; i < l; i++) {
                            var next = list[i];
                            if (he.ystar > next.ystar || he.ystar == next.ystar && site.x > next.vertex.x) {
                                continue;
                            } else {
                                break;
                            }
                        }
                        list.splice(i, 0, he);
                    },
                    del: function(he) {
                        for (var i = 0, ls = EventQueue.list, l = ls.length; i < l && ls[i] != he; ++i) {}
                        ls.splice(i, 1);
                    },
                    empty: function() {
                        return EventQueue.list.length === 0;
                    },
                    nextEvent: function(he) {
                        for (var i = 0, ls = EventQueue.list, l = ls.length; i < l; ++i) {
                            if (ls[i] == he) return ls[i + 1];
                        }
                        return null;
                    },
                    min: function() {
                        var elem = EventQueue.list[0];
                        return {
                            x: elem.vertex.x,
                            y: elem.ystar
                        };
                    },
                    extractMin: function() {
                        return EventQueue.list.shift();
                    }
                };
                EdgeList.init();
                Sites.bottomSite = Sites.list.shift();
                var newSite = Sites.list.shift(), newIntStar;
                var lbnd, rbnd, llbnd, rrbnd, bisector;
                var bot, top, temp, p, v;
                var e, pm;
                while (true) {
                    if (!EventQueue.empty()) {
                        newIntStar = EventQueue.min();
                    }
                    if (newSite && (EventQueue.empty() || newSite.y < newIntStar.y || newSite.y == newIntStar.y && newSite.x < newIntStar.x)) {
                        lbnd = EdgeList.leftBound(newSite);
                        rbnd = EdgeList.right(lbnd);
                        bot = EdgeList.rightRegion(lbnd);
                        e = Geom.bisect(bot, newSite);
                        bisector = EdgeList.createHalfEdge(e, "l");
                        EdgeList.insert(lbnd, bisector);
                        p = Geom.intersect(lbnd, bisector);
                        if (p) {
                            EventQueue.del(lbnd);
                            EventQueue.insert(lbnd, p, Geom.distance(p, newSite));
                        }
                        lbnd = bisector;
                        bisector = EdgeList.createHalfEdge(e, "r");
                        EdgeList.insert(lbnd, bisector);
                        p = Geom.intersect(bisector, rbnd);
                        if (p) {
                            EventQueue.insert(bisector, p, Geom.distance(p, newSite));
                        }
                        newSite = Sites.list.shift();
                    } else if (!EventQueue.empty()) {
                        lbnd = EventQueue.extractMin();
                        llbnd = EdgeList.left(lbnd);
                        rbnd = EdgeList.right(lbnd);
                        rrbnd = EdgeList.right(rbnd);
                        bot = EdgeList.leftRegion(lbnd);
                        top = EdgeList.rightRegion(rbnd);
                        v = lbnd.vertex;
                        Geom.endPoint(lbnd.edge, lbnd.side, v);
                        Geom.endPoint(rbnd.edge, rbnd.side, v);
                        EdgeList.del(lbnd);
                        EventQueue.del(rbnd);
                        EdgeList.del(rbnd);
                        pm = "l";
                        if (bot.y > top.y) {
                            temp = bot;
                            bot = top;
                            top = temp;
                            pm = "r";
                        }
                        e = Geom.bisect(bot, top);
                        bisector = EdgeList.createHalfEdge(e, pm);
                        EdgeList.insert(llbnd, bisector);
                        Geom.endPoint(e, d3_voronoi_opposite[pm], v);
                        p = Geom.intersect(llbnd, bisector);
                        if (p) {
                            EventQueue.del(llbnd);
                            EventQueue.insert(llbnd, p, Geom.distance(p, bot));
                        }
                        p = Geom.intersect(bisector, rrbnd);
                        if (p) {
                            EventQueue.insert(bisector, p, Geom.distance(p, bot));
                        }
                    } else {
                        break;
                    }
                }
                for (lbnd = EdgeList.right(EdgeList.leftEnd); lbnd != EdgeList.rightEnd; lbnd = EdgeList.right(lbnd)) {
                    callback(lbnd.edge);
                }
            }
            d3.geom.delaunay = function(vertices) {
                var edges = vertices.map(function() {
                    return [];
                }), triangles = [];
                d3_voronoi_tessellate(vertices, function(e) {
                    edges[e.region.l.index].push(vertices[e.region.r.index]);
                });
                edges.forEach(function(edge, i) {
                    var v = vertices[i], cx = v[0], cy = v[1];
                    edge.forEach(function(v) {
                        v.angle = Math.atan2(v[0] - cx, v[1] - cy);
                    });
                    edge.sort(function(a, b) {
                        return a.angle - b.angle;
                    });
                    for (var j = 0, m = edge.length - 1; j < m; j++) {
                        triangles.push([ v, edge[j], edge[j + 1] ]);
                    }
                });
                return triangles;
            };
            d3.geom.quadtree = function(points, x1, y1, x2, y2) {
                var p, i = -1, n = points.length;
                if (arguments.length < 5) {
                    if (arguments.length === 3) {
                        y2 = y1;
                        x2 = x1;
                        y1 = x1 = 0;
                    } else {
                        x1 = y1 = Infinity;
                        x2 = y2 = -Infinity;
                        while (++i < n) {
                            p = points[i];
                            if (p.x < x1) x1 = p.x;
                            if (p.y < y1) y1 = p.y;
                            if (p.x > x2) x2 = p.x;
                            if (p.y > y2) y2 = p.y;
                        }
                    }
                }
                var dx = x2 - x1, dy = y2 - y1;
                if (dx > dy) y2 = y1 + dx; else x2 = x1 + dy;
                function insert(n, p, x1, y1, x2, y2) {
                    if (isNaN(p.x) || isNaN(p.y)) return;
                    if (n.leaf) {
                        var v = n.point;
                        if (v) {
                            if (Math.abs(v.x - p.x) + Math.abs(v.y - p.y) < .01) {
                                insertChild(n, p, x1, y1, x2, y2);
                            } else {
                                n.point = null;
                                insertChild(n, v, x1, y1, x2, y2);
                                insertChild(n, p, x1, y1, x2, y2);
                            }
                        } else {
                            n.point = p;
                        }
                    } else {
                        insertChild(n, p, x1, y1, x2, y2);
                    }
                }
                function insertChild(n, p, x1, y1, x2, y2) {
                    var sx = (x1 + x2) * .5, sy = (y1 + y2) * .5, right = p.x >= sx, bottom = p.y >= sy, i = (bottom << 1) + right;
                    n.leaf = false;
                    n = n.nodes[i] || (n.nodes[i] = d3_geom_quadtreeNode());
                    if (right) x1 = sx; else x2 = sx;
                    if (bottom) y1 = sy; else y2 = sy;
                    insert(n, p, x1, y1, x2, y2);
                }
                var root = d3_geom_quadtreeNode();
                root.add = function(p) {
                    insert(root, p, x1, y1, x2, y2);
                };
                root.visit = function(f) {
                    d3_geom_quadtreeVisit(f, root, x1, y1, x2, y2);
                };
                points.forEach(root.add);
                return root;
            };
            function d3_geom_quadtreeNode() {
                return {
                    leaf: true,
                    nodes: [],
                    point: null
                };
            }
            function d3_geom_quadtreeVisit(f, node, x1, y1, x2, y2) {
                if (!f(node, x1, y1, x2, y2)) {
                    var sx = (x1 + x2) * .5, sy = (y1 + y2) * .5, children = node.nodes;
                    if (children[0]) d3_geom_quadtreeVisit(f, children[0], x1, y1, sx, sy);
                    if (children[1]) d3_geom_quadtreeVisit(f, children[1], sx, y1, x2, sy);
                    if (children[2]) d3_geom_quadtreeVisit(f, children[2], x1, sy, sx, y2);
                    if (children[3]) d3_geom_quadtreeVisit(f, children[3], sx, sy, x2, y2);
                }
            }
            d3.time = {};
            var d3_time = Date, d3_time_daySymbols = [ "Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday" ];
            function d3_time_utc() {
                this._ = new Date(arguments.length > 1 ? Date.UTC.apply(this, arguments) : arguments[0]);
            }
            d3_time_utc.prototype = {
                getDate: function() {
                    return this._.getUTCDate();
                },
                getDay: function() {
                    return this._.getUTCDay();
                },
                getFullYear: function() {
                    return this._.getUTCFullYear();
                },
                getHours: function() {
                    return this._.getUTCHours();
                },
                getMilliseconds: function() {
                    return this._.getUTCMilliseconds();
                },
                getMinutes: function() {
                    return this._.getUTCMinutes();
                },
                getMonth: function() {
                    return this._.getUTCMonth();
                },
                getSeconds: function() {
                    return this._.getUTCSeconds();
                },
                getTime: function() {
                    return this._.getTime();
                },
                getTimezoneOffset: function() {
                    return 0;
                },
                valueOf: function() {
                    return this._.valueOf();
                },
                setDate: function() {
                    d3_time_prototype.setUTCDate.apply(this._, arguments);
                },
                setDay: function() {
                    d3_time_prototype.setUTCDay.apply(this._, arguments);
                },
                setFullYear: function() {
                    d3_time_prototype.setUTCFullYear.apply(this._, arguments);
                },
                setHours: function() {
                    d3_time_prototype.setUTCHours.apply(this._, arguments);
                },
                setMilliseconds: function() {
                    d3_time_prototype.setUTCMilliseconds.apply(this._, arguments);
                },
                setMinutes: function() {
                    d3_time_prototype.setUTCMinutes.apply(this._, arguments);
                },
                setMonth: function() {
                    d3_time_prototype.setUTCMonth.apply(this._, arguments);
                },
                setSeconds: function() {
                    d3_time_prototype.setUTCSeconds.apply(this._, arguments);
                },
                setTime: function() {
                    d3_time_prototype.setTime.apply(this._, arguments);
                }
            };
            var d3_time_prototype = Date.prototype;
            var d3_time_formatDateTime = "%a %b %e %X %Y", d3_time_formatDate = "%m/%d/%Y", d3_time_formatTime = "%H:%M:%S";
            var d3_time_days = [ "Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday" ], d3_time_dayAbbreviations = [ "Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat" ], d3_time_months = [ "January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December" ], d3_time_monthAbbreviations = [ "Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec" ];
            d3.time.format = function(template) {
                var n = template.length;
                function format(date) {
                    var string = [], i = -1, j = 0, c, p, f;
                    while (++i < n) {
                        if (template.charCodeAt(i) === 37) {
                            string.push(template.substring(j, i));
                            if ((p = d3_time_formatPads[c = template.charAt(++i)]) != null) c = template.charAt(++i);
                            if (f = d3_time_formats[c]) c = f(date, p == null ? c === "e" ? " " : "0" : p);
                            string.push(c);
                            j = i + 1;
                        }
                    }
                    string.push(template.substring(j, i));
                    return string.join("");
                }
                format.parse = function(string) {
                    var d = {
                        y: 1900,
                        m: 0,
                        d: 1,
                        H: 0,
                        M: 0,
                        S: 0,
                        L: 0
                    }, i = d3_time_parse(d, template, string, 0);
                    if (i != string.length) return null;
                    if ("p" in d) d.H = d.H % 12 + d.p * 12;
                    var date = new d3_time();
                    date.setFullYear(d.y, d.m, d.d);
                    date.setHours(d.H, d.M, d.S, d.L);
                    return date;
                };
                format.toString = function() {
                    return template;
                };
                return format;
            };
            function d3_time_parse(date, template, string, j) {
                var c, p, i = 0, n = template.length, m = string.length;
                while (i < n) {
                    if (j >= m) return -1;
                    c = template.charCodeAt(i++);
                    if (c === 37) {
                        p = d3_time_parsers[template.charAt(i++)];
                        if (!p || (j = p(date, string, j)) < 0) return -1;
                    } else if (c != string.charCodeAt(j++)) {
                        return -1;
                    }
                }
                return j;
            }
            function d3_time_formatRe(names) {
                return new RegExp("^(?:" + names.map(d3.requote).join("|") + ")", "i");
            }
            function d3_time_formatLookup(names) {
                var map = new d3_Map(), i = -1, n = names.length;
                while (++i < n) map.set(names[i].toLowerCase(), i);
                return map;
            }
            function d3_time_formatPad(value, fill, width) {
                value += "";
                var length = value.length;
                return length < width ? new Array(width - length + 1).join(fill) + value : value;
            }
            var d3_time_dayRe = d3_time_formatRe(d3_time_days), d3_time_dayAbbrevRe = d3_time_formatRe(d3_time_dayAbbreviations), d3_time_monthRe = d3_time_formatRe(d3_time_months), d3_time_monthLookup = d3_time_formatLookup(d3_time_months), d3_time_monthAbbrevRe = d3_time_formatRe(d3_time_monthAbbreviations), d3_time_monthAbbrevLookup = d3_time_formatLookup(d3_time_monthAbbreviations);
            var d3_time_formatPads = {
                "-": "",
                _: " ",
                "0": "0"
            };
            var d3_time_formats = {
                a: function(d) {
                    return d3_time_dayAbbreviations[d.getDay()];
                },
                A: function(d) {
                    return d3_time_days[d.getDay()];
                },
                b: function(d) {
                    return d3_time_monthAbbreviations[d.getMonth()];
                },
                B: function(d) {
                    return d3_time_months[d.getMonth()];
                },
                c: d3.time.format(d3_time_formatDateTime),
                d: function(d, p) {
                    return d3_time_formatPad(d.getDate(), p, 2);
                },
                e: function(d, p) {
                    return d3_time_formatPad(d.getDate(), p, 2);
                },
                H: function(d, p) {
                    return d3_time_formatPad(d.getHours(), p, 2);
                },
                I: function(d, p) {
                    return d3_time_formatPad(d.getHours() % 12 || 12, p, 2);
                },
                j: function(d, p) {
                    return d3_time_formatPad(1 + d3.time.dayOfYear(d), p, 3);
                },
                L: function(d, p) {
                    return d3_time_formatPad(d.getMilliseconds(), p, 3);
                },
                m: function(d, p) {
                    return d3_time_formatPad(d.getMonth() + 1, p, 2);
                },
                M: function(d, p) {
                    return d3_time_formatPad(d.getMinutes(), p, 2);
                },
                p: function(d) {
                    return d.getHours() >= 12 ? "PM" : "AM";
                },
                S: function(d, p) {
                    return d3_time_formatPad(d.getSeconds(), p, 2);
                },
                U: function(d, p) {
                    return d3_time_formatPad(d3.time.sundayOfYear(d), p, 2);
                },
                w: function(d) {
                    return d.getDay();
                },
                W: function(d, p) {
                    return d3_time_formatPad(d3.time.mondayOfYear(d), p, 2);
                },
                x: d3.time.format(d3_time_formatDate),
                X: d3.time.format(d3_time_formatTime),
                y: function(d, p) {
                    return d3_time_formatPad(d.getFullYear() % 100, p, 2);
                },
                Y: function(d, p) {
                    return d3_time_formatPad(d.getFullYear() % 1e4, p, 4);
                },
                Z: d3_time_zone,
                "%": function() {
                    return "%";
                }
            };
            var d3_time_parsers = {
                a: d3_time_parseWeekdayAbbrev,
                A: d3_time_parseWeekday,
                b: d3_time_parseMonthAbbrev,
                B: d3_time_parseMonth,
                c: d3_time_parseLocaleFull,
                d: d3_time_parseDay,
                e: d3_time_parseDay,
                H: d3_time_parseHour24,
                I: d3_time_parseHour24,
                L: d3_time_parseMilliseconds,
                m: d3_time_parseMonthNumber,
                M: d3_time_parseMinutes,
                p: d3_time_parseAmPm,
                S: d3_time_parseSeconds,
                x: d3_time_parseLocaleDate,
                X: d3_time_parseLocaleTime,
                y: d3_time_parseYear,
                Y: d3_time_parseFullYear
            };
            function d3_time_parseWeekdayAbbrev(date, string, i) {
                d3_time_dayAbbrevRe.lastIndex = 0;
                var n = d3_time_dayAbbrevRe.exec(string.substring(i));
                return n ? i += n[0].length : -1;
            }
            function d3_time_parseWeekday(date, string, i) {
                d3_time_dayRe.lastIndex = 0;
                var n = d3_time_dayRe.exec(string.substring(i));
                return n ? i += n[0].length : -1;
            }
            function d3_time_parseMonthAbbrev(date, string, i) {
                d3_time_monthAbbrevRe.lastIndex = 0;
                var n = d3_time_monthAbbrevRe.exec(string.substring(i));
                return n ? (date.m = d3_time_monthAbbrevLookup.get(n[0].toLowerCase()), i += n[0].length) : -1;
            }
            function d3_time_parseMonth(date, string, i) {
                d3_time_monthRe.lastIndex = 0;
                var n = d3_time_monthRe.exec(string.substring(i));
                return n ? (date.m = d3_time_monthLookup.get(n[0].toLowerCase()), i += n[0].length) : -1;
            }
            function d3_time_parseLocaleFull(date, string, i) {
                return d3_time_parse(date, d3_time_formats.c.toString(), string, i);
            }
            function d3_time_parseLocaleDate(date, string, i) {
                return d3_time_parse(date, d3_time_formats.x.toString(), string, i);
            }
            function d3_time_parseLocaleTime(date, string, i) {
                return d3_time_parse(date, d3_time_formats.X.toString(), string, i);
            }
            function d3_time_parseFullYear(date, string, i) {
                d3_time_numberRe.lastIndex = 0;
                var n = d3_time_numberRe.exec(string.substring(i, i + 4));
                return n ? (date.y = +n[0], i += n[0].length) : -1;
            }
            function d3_time_parseYear(date, string, i) {
                d3_time_numberRe.lastIndex = 0;
                var n = d3_time_numberRe.exec(string.substring(i, i + 2));
                return n ? (date.y = d3_time_expandYear(+n[0]), i += n[0].length) : -1;
            }
            function d3_time_expandYear(d) {
                return d + (d > 68 ? 1900 : 2e3);
            }
            function d3_time_parseMonthNumber(date, string, i) {
                d3_time_numberRe.lastIndex = 0;
                var n = d3_time_numberRe.exec(string.substring(i, i + 2));
                return n ? (date.m = n[0] - 1, i += n[0].length) : -1;
            }
            function d3_time_parseDay(date, string, i) {
                d3_time_numberRe.lastIndex = 0;
                var n = d3_time_numberRe.exec(string.substring(i, i + 2));
                return n ? (date.d = +n[0], i += n[0].length) : -1;
            }
            function d3_time_parseHour24(date, string, i) {
                d3_time_numberRe.lastIndex = 0;
                var n = d3_time_numberRe.exec(string.substring(i, i + 2));
                return n ? (date.H = +n[0], i += n[0].length) : -1;
            }
            function d3_time_parseMinutes(date, string, i) {
                d3_time_numberRe.lastIndex = 0;
                var n = d3_time_numberRe.exec(string.substring(i, i + 2));
                return n ? (date.M = +n[0], i += n[0].length) : -1;
            }
            function d3_time_parseSeconds(date, string, i) {
                d3_time_numberRe.lastIndex = 0;
                var n = d3_time_numberRe.exec(string.substring(i, i + 2));
                return n ? (date.S = +n[0], i += n[0].length) : -1;
            }
            function d3_time_parseMilliseconds(date, string, i) {
                d3_time_numberRe.lastIndex = 0;
                var n = d3_time_numberRe.exec(string.substring(i, i + 3));
                return n ? (date.L = +n[0], i += n[0].length) : -1;
            }
            var d3_time_numberRe = /^\s*\d+/;
            function d3_time_parseAmPm(date, string, i) {
                var n = d3_time_amPmLookup.get(string.substring(i, i += 2).toLowerCase());
                return n == null ? -1 : (date.p = n, i);
            }
            var d3_time_amPmLookup = d3.map({
                am: 0,
                pm: 1
            });
            function d3_time_zone(d) {
                var z = d.getTimezoneOffset(), zs = z > 0 ? "-" : "+", zh = ~~(Math.abs(z) / 60), zm = Math.abs(z) % 60;
                return zs + d3_time_formatPad(zh, "0", 2) + d3_time_formatPad(zm, "0", 2);
            }
            d3.time.format.utc = function(template) {
                var local = d3.time.format(template);
                function format(date) {
                    try {
                        d3_time = d3_time_utc;
                        var utc = new d3_time();
                        utc._ = date;
                        return local(utc);
                    } finally {
                        d3_time = Date;
                    }
                }
                format.parse = function(string) {
                    try {
                        d3_time = d3_time_utc;
                        var date = local.parse(string);
                        return date && date._;
                    } finally {
                        d3_time = Date;
                    }
                };
                format.toString = local.toString;
                return format;
            };
            var d3_time_formatIso = d3.time.format.utc("%Y-%m-%dT%H:%M:%S.%LZ");
            d3.time.format.iso = Date.prototype.toISOString && +new Date("2000-01-01T00:00:00.000Z") ? d3_time_formatIsoNative : d3_time_formatIso;
            function d3_time_formatIsoNative(date) {
                return date.toISOString();
            }
            d3_time_formatIsoNative.parse = function(string) {
                var date = new Date(string);
                return isNaN(date) ? null : date;
            };
            d3_time_formatIsoNative.toString = d3_time_formatIso.toString;
            function d3_time_interval(local, step, number) {
                function round(date) {
                    var d0 = local(date), d1 = offset(d0, 1);
                    return date - d0 < d1 - date ? d0 : d1;
                }
                function ceil(date) {
                    step(date = local(new d3_time(date - 1)), 1);
                    return date;
                }
                function offset(date, k) {
                    step(date = new d3_time(+date), k);
                    return date;
                }
                function range(t0, t1, dt) {
                    var time = ceil(t0), times = [];
                    if (dt > 1) {
                        while (time < t1) {
                            if (!(number(time) % dt)) times.push(new Date(+time));
                            step(time, 1);
                        }
                    } else {
                        while (time < t1) times.push(new Date(+time)), step(time, 1);
                    }
                    return times;
                }
                function range_utc(t0, t1, dt) {
                    try {
                        d3_time = d3_time_utc;
                        var utc = new d3_time_utc();
                        utc._ = t0;
                        return range(utc, t1, dt);
                    } finally {
                        d3_time = Date;
                    }
                }
                local.floor = local;
                local.round = round;
                local.ceil = ceil;
                local.offset = offset;
                local.range = range;
                var utc = local.utc = d3_time_interval_utc(local);
                utc.floor = utc;
                utc.round = d3_time_interval_utc(round);
                utc.ceil = d3_time_interval_utc(ceil);
                utc.offset = d3_time_interval_utc(offset);
                utc.range = range_utc;
                return local;
            }
            function d3_time_interval_utc(method) {
                return function(date, k) {
                    try {
                        d3_time = d3_time_utc;
                        var utc = new d3_time_utc();
                        utc._ = date;
                        return method(utc, k)._;
                    } finally {
                        d3_time = Date;
                    }
                };
            }
            d3.time.second = d3_time_interval(function(date) {
                return new d3_time(Math.floor(date / 1e3) * 1e3);
            }, function(date, offset) {
                date.setTime(date.getTime() + Math.floor(offset) * 1e3);
            }, function(date) {
                return date.getSeconds();
            });
            d3.time.seconds = d3.time.second.range;
            d3.time.seconds.utc = d3.time.second.utc.range;
            d3.time.minute = d3_time_interval(function(date) {
                return new d3_time(Math.floor(date / 6e4) * 6e4);
            }, function(date, offset) {
                date.setTime(date.getTime() + Math.floor(offset) * 6e4);
            }, function(date) {
                return date.getMinutes();
            });
            d3.time.minutes = d3.time.minute.range;
            d3.time.minutes.utc = d3.time.minute.utc.range;
            d3.time.hour = d3_time_interval(function(date) {
                var timezone = date.getTimezoneOffset() / 60;
                return new d3_time((Math.floor(date / 36e5 - timezone) + timezone) * 36e5);
            }, function(date, offset) {
                date.setTime(date.getTime() + Math.floor(offset) * 36e5);
            }, function(date) {
                return date.getHours();
            });
            d3.time.hours = d3.time.hour.range;
            d3.time.hours.utc = d3.time.hour.utc.range;
            d3.time.day = d3_time_interval(function(date) {
                var day = new d3_time(1970, 0);
                day.setFullYear(date.getFullYear(), date.getMonth(), date.getDate());
                return day;
            }, function(date, offset) {
                date.setDate(date.getDate() + offset);
            }, function(date) {
                return date.getDate() - 1;
            });
            d3.time.days = d3.time.day.range;
            d3.time.days.utc = d3.time.day.utc.range;
            d3.time.dayOfYear = function(date) {
                var year = d3.time.year(date);
                return Math.floor((date - year - (date.getTimezoneOffset() - year.getTimezoneOffset()) * 6e4) / 864e5);
            };
            d3_time_daySymbols.forEach(function(day, i) {
                day = day.toLowerCase();
                i = 7 - i;
                var interval = d3.time[day] = d3_time_interval(function(date) {
                    (date = d3.time.day(date)).setDate(date.getDate() - (date.getDay() + i) % 7);
                    return date;
                }, function(date, offset) {
                    date.setDate(date.getDate() + Math.floor(offset) * 7);
                }, function(date) {
                    var day = d3.time.year(date).getDay();
                    return Math.floor((d3.time.dayOfYear(date) + (day + i) % 7) / 7) - (day !== i);
                });
                d3.time[day + "s"] = interval.range;
                d3.time[day + "s"].utc = interval.utc.range;
                d3.time[day + "OfYear"] = function(date) {
                    var day = d3.time.year(date).getDay();
                    return Math.floor((d3.time.dayOfYear(date) + (day + i) % 7) / 7);
                };
            });
            d3.time.week = d3.time.sunday;
            d3.time.weeks = d3.time.sunday.range;
            d3.time.weeks.utc = d3.time.sunday.utc.range;
            d3.time.weekOfYear = d3.time.sundayOfYear;
            d3.time.month = d3_time_interval(function(date) {
                date = d3.time.day(date);
                date.setDate(1);
                return date;
            }, function(date, offset) {
                date.setMonth(date.getMonth() + offset);
            }, function(date) {
                return date.getMonth();
            });
            d3.time.months = d3.time.month.range;
            d3.time.months.utc = d3.time.month.utc.range;
            d3.time.year = d3_time_interval(function(date) {
                date = d3.time.day(date);
                date.setMonth(0, 1);
                return date;
            }, function(date, offset) {
                date.setFullYear(date.getFullYear() + offset);
            }, function(date) {
                return date.getFullYear();
            });
            d3.time.years = d3.time.year.range;
            d3.time.years.utc = d3.time.year.utc.range;
            function d3_time_scale(linear, methods, format) {
                function scale(x) {
                    return linear(x);
                }
                scale.invert = function(x) {
                    return d3_time_scaleDate(linear.invert(x));
                };
                scale.domain = function(x) {
                    if (!arguments.length) return linear.domain().map(d3_time_scaleDate);
                    linear.domain(x);
                    return scale;
                };
                scale.nice = function(m) {
                    return scale.domain(d3_scale_nice(scale.domain(), function() {
                        return m;
                    }));
                };
                scale.ticks = function(m, k) {
                    var extent = d3_time_scaleExtent(scale.domain());
                    if (typeof m !== "function") {
                        var span = extent[1] - extent[0], target = span / m, i = d3.bisect(d3_time_scaleSteps, target);
                        if (i == d3_time_scaleSteps.length) return methods.year(extent, m);
                        if (!i) return linear.ticks(m).map(d3_time_scaleDate);
                        if (Math.log(target / d3_time_scaleSteps[i - 1]) < Math.log(d3_time_scaleSteps[i] / target)) --i;
                        m = methods[i];
                        k = m[1];
                        m = m[0].range;
                    }
                    return m(extent[0], new Date(+extent[1] + 1), k);
                };
                scale.tickFormat = function() {
                    return format;
                };
                scale.copy = function() {
                    return d3_time_scale(linear.copy(), methods, format);
                };
                return d3.rebind(scale, linear, "range", "rangeRound", "interpolate", "clamp");
            }
            function d3_time_scaleExtent(domain) {
                var start = domain[0], stop = domain[domain.length - 1];
                return start < stop ? [ start, stop ] : [ stop, start ];
            }
            function d3_time_scaleDate(t) {
                return new Date(t);
            }
            function d3_time_scaleFormat(formats) {
                return function(date) {
                    var i = formats.length - 1, f = formats[i];
                    while (!f[1](date)) f = formats[--i];
                    return f[0](date);
                };
            }
            function d3_time_scaleSetYear(y) {
                var d = new Date(y, 0, 1);
                d.setFullYear(y);
                return d;
            }
            function d3_time_scaleGetYear(d) {
                var y = d.getFullYear(), d0 = d3_time_scaleSetYear(y), d1 = d3_time_scaleSetYear(y + 1);
                return y + (d - d0) / (d1 - d0);
            }
            var d3_time_scaleSteps = [ 1e3, 5e3, 15e3, 3e4, 6e4, 3e5, 9e5, 18e5, 36e5, 108e5, 216e5, 432e5, 864e5, 1728e5, 6048e5, 2592e6, 7776e6, 31536e6 ];
            var d3_time_scaleLocalMethods = [ [ d3.time.second, 1 ], [ d3.time.second, 5 ], [ d3.time.second, 15 ], [ d3.time.second, 30 ], [ d3.time.minute, 1 ], [ d3.time.minute, 5 ], [ d3.time.minute, 15 ], [ d3.time.minute, 30 ], [ d3.time.hour, 1 ], [ d3.time.hour, 3 ], [ d3.time.hour, 6 ], [ d3.time.hour, 12 ], [ d3.time.day, 1 ], [ d3.time.day, 2 ], [ d3.time.week, 1 ], [ d3.time.month, 1 ], [ d3.time.month, 3 ], [ d3.time.year, 1 ] ];
            var d3_time_scaleLocalFormats = [ [ d3.time.format("%Y"), d3_true ], [ d3.time.format("%B"), function(d) {
                return d.getMonth();
            } ], [ d3.time.format("%b %d"), function(d) {
                return d.getDate() != 1;
            } ], [ d3.time.format("%a %d"), function(d) {
                return d.getDay() && d.getDate() != 1;
            } ], [ d3.time.format("%I %p"), function(d) {
                return d.getHours();
            } ], [ d3.time.format("%I:%M"), function(d) {
                return d.getMinutes();
            } ], [ d3.time.format(":%S"), function(d) {
                return d.getSeconds();
            } ], [ d3.time.format(".%L"), function(d) {
                return d.getMilliseconds();
            } ] ];
            var d3_time_scaleLinear = d3.scale.linear(), d3_time_scaleLocalFormat = d3_time_scaleFormat(d3_time_scaleLocalFormats);
            d3_time_scaleLocalMethods.year = function(extent, m) {
                return d3_time_scaleLinear.domain(extent.map(d3_time_scaleGetYear)).ticks(m).map(d3_time_scaleSetYear);
            };
            d3.time.scale = function() {
                return d3_time_scale(d3.scale.linear(), d3_time_scaleLocalMethods, d3_time_scaleLocalFormat);
            };
            var d3_time_scaleUTCMethods = d3_time_scaleLocalMethods.map(function(m) {
                return [ m[0].utc, m[1] ];
            });
            var d3_time_scaleUTCFormats = [ [ d3.time.format.utc("%Y"), d3_true ], [ d3.time.format.utc("%B"), function(d) {
                return d.getUTCMonth();
            } ], [ d3.time.format.utc("%b %d"), function(d) {
                return d.getUTCDate() != 1;
            } ], [ d3.time.format.utc("%a %d"), function(d) {
                return d.getUTCDay() && d.getUTCDate() != 1;
            } ], [ d3.time.format.utc("%I %p"), function(d) {
                return d.getUTCHours();
            } ], [ d3.time.format.utc("%I:%M"), function(d) {
                return d.getUTCMinutes();
            } ], [ d3.time.format.utc(":%S"), function(d) {
                return d.getUTCSeconds();
            } ], [ d3.time.format.utc(".%L"), function(d) {
                return d.getUTCMilliseconds();
            } ] ];
            var d3_time_scaleUTCFormat = d3_time_scaleFormat(d3_time_scaleUTCFormats);
            function d3_time_scaleUTCSetYear(y) {
                var d = new Date(Date.UTC(y, 0, 1));
                d.setUTCFullYear(y);
                return d;
            }
            function d3_time_scaleUTCGetYear(d) {
                var y = d.getUTCFullYear(), d0 = d3_time_scaleUTCSetYear(y), d1 = d3_time_scaleUTCSetYear(y + 1);
                return y + (d - d0) / (d1 - d0);
            }
            d3_time_scaleUTCMethods.year = function(extent, m) {
                return d3_time_scaleLinear.domain(extent.map(d3_time_scaleUTCGetYear)).ticks(m).map(d3_time_scaleUTCSetYear);
            };
            d3.time.scale.utc = function() {
                return d3_time_scale(d3.scale.linear(), d3_time_scaleUTCMethods, d3_time_scaleUTCFormat);
            };
            return d3;
  });
'use strict';

angular.module('d3')
  .config( ['$provide', function ($provide) {

        var d3WorldCloudDecorator = function($delegate){

            // Word cloud layout by Jason Davies, http://www.jasondavies.com/word-cloud/
            // Algorithm due to Jonathan Feinberg, http://static.mrfeinberg.com/bv_ch03.pdf
            var d3 = $delegate;
            (function (exports) {
                function cloud() {
                    var size = [256, 256],
                        text = cloudText,
                        font = cloudFont,
                        fontSize = cloudFontSize,
                        fontStyle = cloudFontNormal,
                        fontWeight = cloudFontNormal,
                        rotate = cloudRotate,
                        padding = cloudPadding,
                        spiral = archimedeanSpiral,
                        words = [],
                        timeInterval = Infinity,
                        event = d3.dispatch("word", "end"),
                        timer = null,
                        cloud = {};

                    cloud.start = function () {
                        var board = zeroArray((size[0] >> 5) * size[1]),
                            bounds = null,
                            n = words.length,
                            i = -1,
                            tags = [],
                            data = words.map(function (d, i) {
                                d.text = text.call(this, d, i);
                                d.font = font.call(this, d, i);
                                d.style = fontStyle.call(this, d, i);
                                d.weight = fontWeight.call(this, d, i);
                                d.rotate = rotate.call(this, d, i);
                                d.size = ~~fontSize.call(this, d, i);
                                d.padding = cloudPadding.call(this, d, i);
                                return d;
                            }).sort(function (a, b) {
                                    return b.size - a.size;
                                });

                        if (timer) clearInterval(timer);
                        timer = setInterval(step, 0);
                        step();

                        return cloud;

                        function step() {
                            var start = +new Date,
                                d;
                            while (+new Date - start < timeInterval && ++i < n && timer) {
                                d = data[i];
                                d.x = (size[0] * (Math.random() + .5)) >> 1;
                                d.y = (size[1] * (Math.random() + .5)) >> 1;
                                cloudSprite(d, data, i);
                                if (place(board, d, bounds)) {
                                    tags.push(d);
                                    event.word(d);
                                    if (bounds) cloudBounds(bounds, d);
                                    else bounds = [
                                        {x: d.x + d.x0, y: d.y + d.y0},
                                        {x: d.x + d.x1, y: d.y + d.y1}
                                    ];
                                    // Temporary hack
                                    d.x -= size[0] >> 1;
                                    d.y -= size[1] >> 1;
                                }
                            }
                            if (i >= n) {
                                cloud.stop();
                                event.end(tags, bounds);
                            }
                        }
                    }

                    cloud.stop = function () {
                        if (timer) {
                            clearInterval(timer);
                            timer = null;
                        }
                        return cloud;
                    };

                    cloud.timeInterval = function (x) {
                        if (!arguments.length) return timeInterval;
                        timeInterval = x == null ? Infinity : x;
                        return cloud;
                    };

                    function place(board, tag, bounds) {
                        var perimeter = [
                                {x: 0, y: 0},
                                {x: size[0], y: size[1]}
                            ],
                            startX = tag.x,
                            startY = tag.y,
                            maxDelta = Math.sqrt(size[0] * size[0] + size[1] * size[1]),
                            s = spiral(size),
                            dt = Math.random() < .5 ? 1 : -1,
                            t = -dt,
                            dxdy,
                            dx,
                            dy;

                        while (dxdy = s(t += dt)) {
                            dx = ~~dxdy[0];
                            dy = ~~dxdy[1];

                            if (Math.min(dx, dy) > maxDelta) break;

                            tag.x = startX + dx;
                            tag.y = startY + dy;

                            if (tag.x + tag.x0 < 0 || tag.y + tag.y0 < 0 ||
                                tag.x + tag.x1 > size[0] || tag.y + tag.y1 > size[1]) continue;
                            // TODO only check for collisions within current bounds.
                            if (!bounds || !cloudCollide(tag, board, size[0])) {
                                if (!bounds || collideRects(tag, bounds)) {
                                    var sprite = tag.sprite,
                                        w = tag.width >> 5,
                                        sw = size[0] >> 5,
                                        lx = tag.x - (w << 4),
                                        sx = lx & 0x7f,
                                        msx = 32 - sx,
                                        h = tag.y1 - tag.y0,
                                        x = (tag.y + tag.y0) * sw + (lx >> 5),
                                        last;
                                    for (var j = 0; j < h; j++) {
                                        last = 0;
                                        for (var i = 0; i <= w; i++) {
                                            board[x + i] |= (last << msx) | (i < w ? (last = sprite[j * w + i]) >>> sx : 0);
                                        }
                                        x += sw;
                                    }
                                    delete tag.sprite;
                                    return true;
                                }
                            }
                        }
                        return false;
                    }

                    cloud.words = function (x) {
                        if (!arguments.length) return words;
                        words = x;
                        return cloud;
                    };

                    cloud.size = function (x) {
                        if (!arguments.length) return size;
                        size = [+x[0], +x[1]];
                        return cloud;
                    };

                    cloud.font = function (x) {
                        if (!arguments.length) return font;
                        font = d3.functor(x);
                        return cloud;
                    };

                    cloud.fontStyle = function (x) {
                        if (!arguments.length) return fontStyle;
                        fontStyle = d3.functor(x);
                        return cloud;
                    };

                    cloud.fontWeight = function (x) {
                        if (!arguments.length) return fontWeight;
                        fontWeight = d3.functor(x);
                        return cloud;
                    };

                    cloud.rotate = function (x) {
                        if (!arguments.length) return rotate;
                        rotate = d3.functor(x);
                        return cloud;
                    };

                    cloud.text = function (x) {
                        if (!arguments.length) return text;
                        text = d3.functor(x);
                        return cloud;
                    };

                    cloud.spiral = function (x) {
                        if (!arguments.length) return spiral;
                        spiral = spirals[x + ""] || x;
                        return cloud;
                    };

                    cloud.fontSize = function (x) {
                        if (!arguments.length) return fontSize;
                        fontSize = d3.functor(x);
                        return cloud;
                    };

                    cloud.padding = function (x) {
                        if (!arguments.length) return padding;
                        padding = d3.functor(x);
                        return cloud;
                    };

                    return d3.rebind(cloud, event, "on");
                }

                function cloudText(d) {
                    return d.text;
                }

                function cloudFont() {
                    return "serif";
                }

                function cloudFontNormal() {
                    return "normal";
                }

                function cloudFontSize(d) {
                    return Math.sqrt(d.value);
                }

                function cloudRotate() {
                    return (~~(Math.random() * 6) - 3) * 30;
                }

                function cloudPadding() {
                    return 1;
                }

                // Fetches a monochrome sprite bitmap for the specified text.
                // Load in batches for speed.
                function cloudSprite(d, data, di) {
                    if (d.sprite) return;
                    c.clearRect(0, 0, (cw << 5) / ratio, ch / ratio);
                    var x = 0,
                        y = 0,
                        maxh = 0,
                        n = data.length;
                    di--;
                    while (++di < n) {
                        d = data[di];
                        c.save();
                        c.font = d.style + " " + d.weight + " " + ~~((d.size + 1) / ratio) + "px " + d.font;
                        var w = c.measureText(d.text + "m").width * ratio,
                            h = d.size << 1;
                        if (d.rotate) {
                            var sr = Math.sin(d.rotate * cloudRadians),
                                cr = Math.cos(d.rotate * cloudRadians),
                                wcr = w * cr,
                                wsr = w * sr,
                                hcr = h * cr,
                                hsr = h * sr;
                            w = (Math.max(Math.abs(wcr + hsr), Math.abs(wcr - hsr)) + 0x1f) >> 5 << 5;
                            h = ~~Math.max(Math.abs(wsr + hcr), Math.abs(wsr - hcr));
                        } else {
                            w = (w + 0x1f) >> 5 << 5;
                        }
                        if (h > maxh) maxh = h;
                        if (x + w >= (cw << 5)) {
                            x = 0;
                            y += maxh;
                            maxh = 0;
                        }
                        if (y + h >= ch) break;
                        c.translate((x + (w >> 1)) / ratio, (y + (h >> 1)) / ratio);
                        if (d.rotate) c.rotate(d.rotate * cloudRadians);
                        c.fillText(d.text, 0, 0);
                        c.restore();
                        d.width = w;
                        d.height = h;
                        d.xoff = x;
                        d.yoff = y;
                        d.x1 = w >> 1;
                        d.y1 = h >> 1;
                        d.x0 = -d.x1;
                        d.y0 = -d.y1;
                        x += w;
                    }
                    var pixels = c.getImageData(0, 0, (cw << 5) / ratio, ch / ratio).data,
                        sprite = [];
                    while (--di >= 0) {
                        d = data[di];
                        var w = d.width,
                            w32 = w >> 5,
                            h = d.y1 - d.y0,
                            p = d.padding;
                        // Zero the buffer
                        for (var i = 0; i < h * w32; i++) sprite[i] = 0;
                        x = d.xoff;
                        if (x == null) return;
                        y = d.yoff;
                        var seen = 0,
                            seenRow = -1;
                        for (var j = 0; j < h; j++) {
                            for (var i = 0; i < w; i++) {
                                var k = w32 * j + (i >> 5),
                                    m = pixels[((y + j) * (cw << 5) + (x + i)) << 2] ? 1 << (31 - (i % 32)) : 0;
                                if (p) {
                                    if (j) sprite[k - w32] |= m;
                                    if (j < w - 1) sprite[k + w32] |= m;
                                    m |= (m << 1) | (m >> 1);
                                }
                                sprite[k] |= m;
                                seen |= m;
                            }
                            if (seen) seenRow = j;
                            else {
                                d.y0++;
                                h--;
                                j--;
                                y++;
                            }
                        }
                        d.y1 = d.y0 + seenRow;
                        d.sprite = sprite.slice(0, (d.y1 - d.y0) * w32);
                    }
                }

                // Use mask-based collision detection.
                function cloudCollide(tag, board, sw) {
                    sw >>= 5;
                    var sprite = tag.sprite,
                        w = tag.width >> 5,
                        lx = tag.x - (w << 4),
                        sx = lx & 0x7f,
                        msx = 32 - sx,
                        h = tag.y1 - tag.y0,
                        x = (tag.y + tag.y0) * sw + (lx >> 5),
                        last;
                    for (var j = 0; j < h; j++) {
                        last = 0;
                        for (var i = 0; i <= w; i++) {
                            if (((last << msx) | (i < w ? (last = sprite[j * w + i]) >>> sx : 0))
                                & board[x + i]) return true;
                        }
                        x += sw;
                    }
                    return false;
                }

                function cloudBounds(bounds, d) {
                    var b0 = bounds[0],
                        b1 = bounds[1];
                    if (d.x + d.x0 < b0.x) b0.x = d.x + d.x0;
                    if (d.y + d.y0 < b0.y) b0.y = d.y + d.y0;
                    if (d.x + d.x1 > b1.x) b1.x = d.x + d.x1;
                    if (d.y + d.y1 > b1.y) b1.y = d.y + d.y1;
                }

                function collideRects(a, b) {
                    return a.x + a.x1 > b[0].x && a.x + a.x0 < b[1].x && a.y + a.y1 > b[0].y && a.y + a.y0 < b[1].y;
                }

                function archimedeanSpiral(size) {
                    var e = size[0] / size[1];
                    return function (t) {
                        return [e * (t *= .1) * Math.cos(t), t * Math.sin(t)];
                    };
                }

                function rectangularSpiral(size) {
                    var dy = 4,
                        dx = dy * size[0] / size[1],
                        x = 0,
                        y = 0;
                    return function (t) {
                        var sign = t < 0 ? -1 : 1;
                        // See triangular numbers: T_n = n * (n + 1) / 2.
                        switch ((Math.sqrt(1 + 4 * sign * t) - sign) & 3) {
                            case 0:
                                x += dx;
                                break;
                            case 1:
                                y += dy;
                                break;
                            case 2:
                                x -= dx;
                                break;
                            default:
                                y -= dy;
                                break;
                        }
                        return [x, y];
                    };
                }

                // TODO reuse arrays?
                function zeroArray(n) {
                    var a = [],
                        i = -1;
                    while (++i < n) a[i] = 0;
                    return a;
                }

                var cloudRadians = Math.PI / 180,
                    cw = 1 << 11 >> 5,
                    ch = 1 << 11,
                    canvas,
                    ratio = 1;

                if (typeof document !== "undefined") {
                    canvas = document.createElement("canvas");
                    canvas.width = 1;
                    canvas.height = 1;
                    ratio = Math.sqrt(canvas.getContext("2d").getImageData(0, 0, 1, 1).data.length >> 2);
                    canvas.width = (cw << 5) / ratio;
                    canvas.height = ch / ratio;
                } else {
                    // node-canvas support
                    var Canvas = require("canvas");
                    canvas = new Canvas(cw << 5, ch);
                }

                var c = canvas.getContext("2d"),
                    spirals = {
                        archimedean: archimedeanSpiral,
                        rectangular: rectangularSpiral
                    };
                c.fillStyle = "red";
                c.textAlign = "center";

                exports.cloud = cloud;
            })(typeof exports === "undefined" ? d3.layout || (d3.layout = {}) : exports);

            return d3;
        };

        $provide.decorator('d3', d3WorldCloudDecorator);
  }]);