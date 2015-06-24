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
"use strict";angular.module("d3").config(["$provide",function(t){var n=function(t){var n=t;return function(t){function r(){function t(t,n,e){var a,o,u,i=([{x:0,y:0},{x:r[0],y:r[1]}],n.x),f=n.y,l=Math.sqrt(r[0]*r[0]+r[1]*r[1]),s=b(r),h=Math.random()<.5?1:-1,x=-h;for(console.log("1");(a=s(x+=h))&&(o=~~a[0],u=~~a[1],!(Math.min(o,u)>l));)if(n.x=i+o,n.y=f+u,!(n.x+n.x0<0||n.y+n.y0<0||n.x+n.x1>r[0]||n.y+n.y1>r[1]||e&&c(n,t,r[0])||e&&!y(n,e))){for(var g,d=n.sprite,v=n.width>>5,m=r[0]>>5,p=n.x-(v<<4),M=127&p,w=32-M,z=n.y1-n.y0,I=(n.y+n.y0)*m+(p>>5),q=0;z>q;q++){g=0;for(var k=0;v>=k;k++)t[I+k]|=g<<w|(v>k?(g=d[q*v+k])>>>M:0);I+=m}return delete n.sprite,!0}return!1}var r=[256,256],x=e,d=a,v=u,m=o,p=o,M=i,w=f,b=h,I=[],q=1/0,k=n.dispatch("word","end"),D=null,S={};return S.start=function(){function n(){for(var n,f=+new Date;+new Date-f<q&&++u<o&&D;)n=c[u],n.x=r[0]*(Math.random()+.5)>>1,n.y=r[1]*(Math.random()+.5)>>1,l(n,c,u),t(e,n,a)&&(i.push(n),k.word(n),a?s(a,n):a=[{x:n.x+n.x0,y:n.y+n.y0},{x:n.x+n.x1,y:n.y+n.y1}],n.x-=r[0]>>1,n.y-=r[1]>>1);u>=o&&(S.stop(),k.end(i,a))}var e=g((r[0]>>5)*r[1]),a=null,o=I.length,u=-1,i=[],c=I.map(function(t,n){return t.text=x.call(this,t,n),t.font=d.call(this,t,n),t.style=m.call(this,t,n),t.weight=p.call(this,t,n),t.rotate=M.call(this,t,n),t.size=~~v.call(this,t,n),t.padding=f.call(this,t,n),t}).sort(function(t,n){return n.size-t.size});return D&&clearInterval(D),D=setInterval(n,0),n(),S},S.stop=function(){return D&&(clearInterval(D),D=null),S},S.timeInterval=function(t){return arguments.length?(q=null==t?1/0:t,S):q},S.words=function(t){return arguments.length?(I=t,S):I},console.log("2"),S.size=function(t){return arguments.length?(r=[+t[0],+t[1]],S):r},S.font=function(t){return arguments.length?(d=n.functor(t),S):d},S.fontStyle=function(t){return arguments.length?(m=n.functor(t),S):m},S.fontWeight=function(t){return arguments.length?(p=n.functor(t),S):p},S.rotate=function(t){return arguments.length?(M=n.functor(t),S):M},S.text=function(t){return arguments.length?(x=n.functor(t),S):x},S.spiral=function(t){return arguments.length?(b=z[t+""]||t,S):b},S.fontSize=function(t){return arguments.length?(v=n.functor(t),S):v},S.padding=function(t){return arguments.length?(w=n.functor(t),S):w},console.log("3"),n.rebind(S,k,"on")}function e(t){return t.text}function a(){return"serif"}function o(){return"normal"}function u(t){return Math.sqrt(t.value)}function i(){return 30*(~~(6*Math.random())-3)}function f(){return 1}function l(t,n,r){if(!t.sprite){b.clearRect(0,0,(m<<5)/M,p/M);var e=0,a=0,o=0,u=n.length;for(r--;++r<u;){t=n[r],b.save(),b.font=t.style+" "+t.weight+" "+~~((t.size+1)/M)+"px "+t.font;var i=b.measureText(t.text+"m").width*M,f=t.size<<1;if(t.rotate){var l=Math.sin(t.rotate*v),c=Math.cos(t.rotate*v),s=i*c,y=i*l,h=f*c,x=f*l;i=Math.max(Math.abs(s+x),Math.abs(s-x))+31>>5<<5,f=~~Math.max(Math.abs(y+h),Math.abs(y-h))}else i=i+31>>5<<5;if(f>o&&(o=f),e+i>=m<<5&&(e=0,a+=o,o=0),a+f>=p)break;b.translate((e+(i>>1))/M,(a+(f>>1))/M),t.rotate&&b.rotate(t.rotate*v),b.fillText(t.text,0,0),b.restore(),t.width=i,t.height=f,t.xoff=e,t.yoff=a,t.x1=i>>1,t.y1=f>>1,t.x0=-t.x1,t.y0=-t.y1,e+=i}for(var g=b.getImageData(0,0,(m<<5)/M,p/M).data,d=[];--r>=0;){t=n[r];for(var i=t.width,w=i>>5,f=t.y1-t.y0,z=t.padding,I=0;f*w>I;I++)d[I]=0;if(e=t.xoff,null==e)return;a=t.yoff;for(var q=0,k=-1,D=0;f>D;D++){for(var I=0;i>I;I++){var S=w*D+(I>>5),C=g[(a+D)*(m<<5)+(e+I)<<2]?1<<31-I%32:0;z&&(D&&(d[S-w]|=C),i-1>D&&(d[S+w]|=C),C|=C<<1|C>>1),d[S]|=C,q|=C}q?k=D:(t.y0++,f--,D--,a++)}t.y1=t.y0+k,t.sprite=d.slice(0,(t.y1-t.y0)*w)}}}function c(t,n,r){r>>=5;for(var e,a=t.sprite,o=t.width>>5,u=t.x-(o<<4),i=127&u,f=32-i,l=t.y1-t.y0,c=(t.y+t.y0)*r+(u>>5),s=0;l>s;s++){e=0;for(var y=0;o>=y;y++)if((e<<f|(o>y?(e=a[s*o+y])>>>i:0))&n[c+y])return!0;c+=r}return!1}function s(t,n){var r=t[0],e=t[1];n.x+n.x0<r.x&&(r.x=n.x+n.x0),n.y+n.y0<r.y&&(r.y=n.y+n.y0),n.x+n.x1>e.x&&(e.x=n.x+n.x1),n.y+n.y1>e.y&&(e.y=n.y+n.y1)}function y(t,n){return t.x+t.x1>n[0].x&&t.x+t.x0<n[1].x&&t.y+t.y1>n[0].y&&t.y+t.y0<n[1].y}function h(t){console.log("4");var n=t[0]/t[1];return function(t){return[n*(t*=.1)*Math.cos(t),t*Math.sin(t)]}}function x(t){var n=4,r=n*t[0]/t[1],e=0,a=0;return function(t){var o=0>t?-1:1;switch(Math.sqrt(1+4*o*t)-o&3){case 0:e+=r;break;case 1:a+=n;break;case 2:e-=r;break;default:a-=n}return[e,a]}}function g(t){for(var n=[],r=-1;++r<t;)n[r]=0;return n}var d,v=Math.PI/180,m=64,p=2048,M=1;if("undefined"!=typeof document)d=document.createElement("canvas"),d.width=1,d.height=1,M=Math.sqrt(d.getContext("2d").getImageData(0,0,1,1).data.length>>2),d.width=(m<<5)/M,d.height=p/M;else{var w=require("canvas");d=new w(m<<5,p)}console.log("5");var b=d.getContext("2d"),z={archimedean:h,rectangular:x};b.fillStyle="red",b.textAlign="center",t.cloud=r}("undefined"==typeof exports?n.layout||(n.layout={}):exports),n};t.decorator("d3",n)}]);
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
