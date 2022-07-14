(()=>{"use strict";var t,e={8650:(t,e,n)=>{n.r(e),n.d(e,{stickyController:()=>b});var r=n(4290),a=n(9755);function i(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,r.key,r)}}function o(t,e){l(t,e),e.add(t)}function l(t,e){if(e.has(t))throw new TypeError("Cannot initialize the same private elements twice on an object")}function c(t,e,n){if(!e.has(t))throw new TypeError("attempted to get private field on non-instance");return n}var u=new WeakMap,s=new WeakSet,f=new WeakSet,p=new WeakSet,h=new WeakSet;function d(t){var e=!1;return t&&(e=!0),e}function v(){c(this,p,y).call(this,window.location.hash)}function y(t,e){if(!(n=this,r=u,a=function(t,e,n){if(!e.has(t))throw new TypeError("attempted to get private field on non-instance");return e.get(t)}(n,r),function(t,e){return e.get?e.get.call(t):e.value}(n,a)).test(t))return!1;var n,r,a,i=document.getElementById(t.slice(1));if(i){var o=i.getBoundingClientRect(),l=window.pageYOffset+o.top-this.getStickyOffset();window.scrollTo(window.pageXOffset,l),history&&history.pushState&&e&&history.pushState({},document.title,location.pathname+t)}return!!i}function w(t){var e=t.target;"A"===e.nodeName&&c(this,p,y).call(this,e.getAttribute("href"),!0)&&t.preventDefault()}var b=new(function(){function t(){var e,n;!function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,t),o(this,h),o(this,p),o(this,f),o(this,s),n={writable:!0,value:/^#[^ ]+$/},l(this,e=u),e.set(this,n)}var e,n;return e=t,(n=[{key:"init",value:function(){var t=this,e=a(".wh_header");c(this,s,d).call(this,e)&&(e.addClass("header-sticky"),e.css({top:"0"}),e.outerHeight());var n=a(".wh_tools").parent();c(this,s,d).call(this,n)&&(n.addClass("breadcrumb-sticky"),n.css({top:e.outerHeight()}),n.outerHeight());var i=a(".wh-letters");c(this,s,d).call(this,i)&&(i.addClass("indexTerms-sticky"),i.css({top:e.outerHeight()})),c(this,f,v).call(this),window.addEventListener("hashchange",(function(){return c(t,f,v).call(t)})),document.body.addEventListener("click",(function(e){return c(t,h,w).call(t,e)}));try{var o=document.getElementsByClassName("wh_header")[0];new ResizeObserver((function(){n.css({top:e.outerHeight()}),i.css({top:e.outerHeight()})})).observe(o)}catch(t){r.Z.debug("ResizeObserver is not supported.",t)}}},{key:"getStickyOffset",value:function(){var t=0,e=a(".wh_header");c(this,s,d).call(this,e)&&(t+=e.outerHeight());var n=a(".wh_tools").parent();return c(this,s,d).call(this,n)&&(t+=n.outerHeight()),t}}])&&i(e.prototype,n),Object.defineProperty(e,"prototype",{writable:!1}),t}())},2891:(t,e,n)=>{n(3734);var r=n(8091);const a=localization;var i=n.n(a);function o(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,r.key,r)}}var l=function(){function t(){!function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,t)}var e,n;return e=t,n=[{key:"getLocalization",value:function(t){var e=t;return t in i()&&(e=i()[t]),e}}],null&&o(e.prototype,null),n&&o(e,n),Object.defineProperty(e,"prototype",{writable:!1}),t}(),c=n(9755);function u(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,r.key,r)}}function s(t,e){!function(t,e){if(e.has(t))throw new TypeError("Cannot initialize the same private elements twice on an object")}(t,e),e.add(t)}function f(t,e,n){if(!e.has(t))throw new TypeError("attempted to get private field on non-instance");return n}var p=new WeakSet,h=new WeakSet;function d(t,e){var n=c(t).parent().siblings(":not(.wh_not_expandable)");if(void 0!==e)"collapsed"==e?(n.slideUp(0),c(".webhelp_expand_collapse_sections").attr("data-next-state","expanded").attr("title",l.getLocalization("expandSections")),c(t).removeClass("expanded"),c(t).attr("aria-expanded",!1),c(t).attr("aria-label",l.getLocalization("expand"))):(n.slideDown(0),c(".webhelp_expand_collapse_sections").attr("data-next-state","collapsed").attr("title",l.getLocalization("collapseSections")),c(t).addClass("expanded"),c(t).attr("aria-expanded",!0),c(t).attr("aria-label",l.getLocalization("collapse")));else{c(t).toggleClass("expanded");var r=c(t).hasClass("expanded");c(t).attr("aria-expanded",r),r?c(t).attr("aria-label",l.getLocalization("collapse")):c(t).attr("aria-label",l.getLocalization("expand"));var a=c(t).parent();"CAPTION"==a.prop("tagName")||a.hasClass("wh_first_letter")?n.toggle():n.slideToggle("1000")}}function v(t){t.siblings(":hidden").addClass("wh_not_expandable")}var y=new(function(){function t(){!function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,t),s(this,h),s(this,p)}var e,n;return e=t,(n=[{key:"init",value:function(){var t=this,e=r.Options.get("webhelp.topic.collapsible.elements.initial.state");["table > caption:not(:empty)",".topic > .title",".sectiontitle:not(.tasklabel)",".wh_term_group > .wh_first_letter"].forEach((function(e){var n=c(document).find(e);n.siblings(":not(:hidden)").length>0&&(n.prepend(c("<span>",{class:"wh_expand_btn expanded",role:"button","aria-expanded":"true",tabindex:0,"aria-label":l.getLocalization("collapse")})),f(t,h,v).call(t,n))})),c(".wh-letters a").on("click",(function(t){var e=c(t.currentTarget).attr("href").replace("#","");t.preventDefault(),history.replaceState({},"",t.target.href),c("[id='"+e+"']").length>0&&c("html, body").animate({scrollTop:c("[id='"+e+"']").offset().top},1e3)})),c.each(c(document).find(".wh_expand_btn"),(function(n,r){f(t,p,d).call(t,r,e)})),c(".webhelp_expand_collapse_sections").on("click",(function(e){var n=c(".webhelp_expand_collapse_sections").attr("data-next-state");return c.each(c(document).find(".wh_expand_btn"),(function(e,r){f(t,p,d).call(t,r,n)})),!1})),c(".wh_topic_toc a").on("click",(function(e){var n=c(e.currentTarget).attr("href"),r=c(n);r.length&&(c.each(r.parents(),(function(){c(e.currentTarget).children(".title").length&&f(this,p,d).call(this,c(e.currentTarget).children(".title").find(".wh_expand_btn"),"expanded")})),f(t,p,d).call(t,r.children(".title").find(".wh_expand_btn"),"expanded"))}));var n=c(document).find(".wh_expand_btn");n.on("click",(function(e){return f(t,p,d).call(t,e.currentTarget),!1})),n.on("keypress",(function(e){13!==e.which&&32!==e.which||(e.preventDefault(),f(t,p,d).call(t,e.currentTarget))}))}}])&&u(e.prototype,n),Object.defineProperty(e,"prototype",{writable:!1}),t}()),w=n(9755);function b(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,r.key,r)}}var g=n(8091).Options,m=n(8650).stickyController,_=new(function(){function t(){!function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,t)}var e,n;return e=t,(n=[{key:"init",value:function(){[".dt[id]",".section[id] .sectiontitle",".title.topictitle2[id]","table[id] .tablecap"].forEach((function(t){w(document).find(t).append("<span class='permalink'/>")})),w("span.permalink").on("click",(function(t){var e=w(t.currentTarget).closest("[id]").attr("id"),n="#"+e;if(t.preventDefault(),history.replaceState({},"",n),g.getBoolean("webhelp.enable.sticky.header")){var r=m.getStickyOffset();w("html, body").animate({scrollTop:w("[id='"+e+"']").offset().top-r},1e3)}else w("html, body").animate({scrollTop:w("[id='"+e+"']").offset().top},1e3)}))}}])&&b(e.prototype,n),Object.defineProperty(e,"prototype",{writable:!1}),t}()),k=n(8650),O=n(7856),T=n.n(O);function x(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,r.key,r)}}var j=function(){function t(){!function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,t)}var e,n;return e=t,n=[{key:"appendHtmlNode",value:function(t,e){var n=T().sanitize(t[0]);e.append(n)}},{key:"appendElementNodeToBody",value:function(t){var e=T().sanitize(t,{RETURN_DOM:!0,RETURN_DOM_IMPORT:!0});return document.body.appendChild(e.firstChild)}},{key:"sanitize",value:function(t){return T().sanitize(t,{ALLOWED_TAGS:[]})}}],null&&x(e.prototype,null),n&&x(e,n),Object.defineProperty(e,"prototype",{writable:!1}),t}(),C=n(4290),S=n(9755);function E(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,r.key,r)}}function P(t,e,n){return function(t,e,n){if(e.set)e.set.call(t,n);else{if(!e.writable)throw new TypeError("attempted to set read only private field");e.value=n}}(t,W(t,e,"set"),n),n}function R(t,e){return function(t,e){return e.get?e.get.call(t):e.value}(t,W(t,e,"get"))}function W(t,e,n){if(!e.has(t))throw new TypeError("attempted to "+n+" private field on non-instance");return e.get(t)}var D=new WeakMap,I=function(){function t(){var e,n,r;!function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,t),r={writable:!0,value:null},function(t,e){if(e.has(t))throw new TypeError("Cannot initialize the same private elements twice on an object")}(e=this,n=D),n.set(e,r)}var e,n;return e=t,(n=[{key:"_getPathToRoot",value:function(){return null==R(this,D)&&(P(this,D,S('meta[name="wh-path2root"]').attr("content")),null!=R(this,D)&&null!=R(this,D)||P(this,D,"")),R(this,D)}}])&&E(e.prototype,n),Object.defineProperty(e,"prototype",{writable:!1}),t}(),z="data-state",L="data-tocid",H="pending",A="not-ready",N="collapsed",M="expanded",B="leaf",U=n(9755);function Z(t){return Z="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},Z(t)}function J(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,r.key,r)}}function $(t,e){return $=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(t,e){return t.__proto__=e,t},$(t,e)}function F(t,e){if(e&&("object"===Z(e)||"function"==typeof e))return e;if(void 0!==e)throw new TypeError("Derived constructors may only return object or undefined");return G(t)}function G(t){if(void 0===t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t}function X(){return X="undefined"!=typeof Reflect&&Reflect.get?Reflect.get.bind():function(t,e,n){var r=Y(t,e);if(r){var a=Object.getOwnPropertyDescriptor(r,e);return a.get?a.get.call(arguments.length<3?t:n):a.value}},X.apply(this,arguments)}function Y(t,e){for(;!Object.prototype.hasOwnProperty.call(t,e)&&null!==(t=q(t)););return t}function q(t){return q=Object.setPrototypeOf?Object.getPrototypeOf.bind():function(t){return t.__proto__||Object.getPrototypeOf(t)},q(t)}function K(t,e){V(t,e),e.add(t)}function Q(t,e,n){V(t,e),e.set(t,n)}function V(t,e){if(e.has(t))throw new TypeError("Cannot initialize the same private elements twice on an object")}function tt(t,e){return function(t,e){return e.get?e.get.call(t):e.value}(t,rt(t,e,"get"))}function et(t,e,n){if(!e.has(t))throw new TypeError("attempted to get private field on non-instance");return n}function nt(t,e,n){return function(t,e,n){if(e.set)e.set.call(t,n);else{if(!e.writable)throw new TypeError("attempted to set read only private field");e.value=n}}(t,rt(t,e,"set"),n),n}function rt(t,e,n){if(!e.has(t))throw new TypeError("attempted to "+n+" private field on non-instance");return e.get(t)}var at=new WeakMap,it=new WeakMap,ot=new WeakSet,lt=new WeakSet,ct=new WeakSet,ut=new WeakSet,st=new WeakSet,ft=new WeakSet,pt=new WeakSet,ht=new WeakSet,dt=function(t){!function(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function");t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,writable:!0,configurable:!0}}),Object.defineProperty(t,"prototype",{writable:!1}),e&&$(t,e)}(l,t);var e,n,a,i,o=(a=l,i=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(t){return!1}}(),function(){var t,e=q(a);if(i){var n=q(this).constructor;t=Reflect.construct(e,arguments,n)}else t=e.apply(this,arguments);return F(this,t)});function l(t,e){var n;return function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,l),K(G(n=o.call(this)),ht),K(G(n),pt),K(G(n),ft),K(G(n),st),K(G(n),ut),K(G(n),ct),K(G(n),lt),K(G(n),ot),Q(G(n),at,{writable:!0,value:void 0}),Q(G(n),it,{writable:!0,value:void 0}),nt(G(n),at,t),nt(G(n),it,e),n}return e=l,(n=[{key:"init",value:function(){var t=this;U(document).on("mouseenter",".wh_top_menu li",(function(e){return et(t,ot,vt).call(t,e)})),U(document).on("mouseleave",".wh_top_menu li",(function(t){var e=U(t.currentTarget).children(".topicref");e.attr(z)!==B&&(U(t.currentTarget).attr("aria-expanded","false"),e.attr(z,N))})),U(document).on("click",".wh_top_menu li",(function(t){U(".wh_top_menu li").removeClass("active"),U(t.currentTarget).addClass("active"),U(t.currentTarget).parents("li").addClass("active"),t.stopImmediatePropagation()})),U(document).on({click:function(t){var e=U(".wh_top_menu");e.is(t.target)||0!==e.has(t.target).length||U(".wh_top_menu li.active").removeClass("active")},keydown:function(t){27===t.which&&U(".wh_top_menu li.active").removeClass("active")}});var e=r.Options.getBoolean("webhelp.top.menu.activated.on.click");U(document).on("click",".wh_top_menu a",(function(n){var r;if(void 0!==n.pointerType&&(r=n.pointerType),!(e||U(window).width()<767||tt(t,it)||"touch"==r))return!0;var a=U(n.currentTarget).closest("li"),i=a.hasClass("active"),o=a.hasClass("has-children");if(i||!o)return window.location=U(n.currentTarget).attr("href"),n.preventDefault(),n.stopImmediatePropagation(),!1;n.preventDefault()}))}}])&&J(e.prototype,n),Object.defineProperty(e,"prototype",{writable:!1}),l}(I);function vt(t){var e=U(t.currentTarget),n=e.children(".topicref"),r=n.attr(z);if(r===H);else if(r===A){n.attr(z,H);var a=n.attr("id"),i=U("<span>",{class:"dot"}),o=U("<ul>",{class:"loading","aria-labelledby":a,role:"menu",html:U("<li>",{role:"menuitem",html:[i,i.clone(),i.clone()]})});j.appendHtmlNode(o,e),et(this,lt,yt).call(this,e),et(this,ct,wt).call(this,n)}else r===M?et(this,lt,yt).call(this,e):r===N&&n.attr(z,M);null!=e.attr("aria-expanded")&&e.attr("aria-expanded","true")}function yt(t){var e,n=tt(this,at)?"left":"right",r=U(".wh_top_menu ul").index(t.parent("ul")),a=parseInt(t.offset().left),i=a+parseInt(t.width()),o=parseInt(t.children("ul").width()),l=i+o;0==r?"left"==n?(t.attr("data-menuDirection","left"),(e=i-o)<=0&&(t.css("position","relative"),t.children("ul").css("position","absolute"),t.children("ul").css("right","auto"),t.children("ul").css("left","0"))):(t.attr("data-menuDirection","right"),(l=a+o)>=U(window).width()&&(t.css("position","relative"),t.children("ul").css("position","absolute"),t.children("ul").css("right","0"),t.children("ul").css("left","auto"))):(e=a-o,"left"==n?e>=0?(t.attr("data-menuDirection","left"),t.children("ul").css("right","100%"),t.children("ul").css("left","auto")):(t.attr("data-menuDirection","right"),t.children("ul").css("right","auto"),t.children("ul").css("left","100%")):l<=U(window).width()?(t.attr("data-menuDirection","right"),t.children("ul").css("right","auto"),t.children("ul").css("left","100%")):(t.attr("data-menuDirection","left"),t.children("ul").css("right","100%"),t.children("ul").css("left","auto")))}function wt(t){var e=this,n=U(t).attr(L);null!=n&&C.Z.loadJS("./"+X(q(dt.prototype),"_getPathToRoot",this).call(this)+"oxygen-webhelp/app/nav-links/json/"+n+".js",(function(){var r=oxy_webhelp_navlinks[n];if(null!=r){var a=r.topics,i=t.closest("li"),o=et(e,ut,bt).call(e,a),l=i.children("ul.loading");l.find("li").remove(),l.removeClass("loading"),o.forEach((function(t){return l.append(t)})),t.attr(z,M)}else t.attr(z,B)}))}function bt(t){var e=this,n=[];return t.forEach((function(t){if(!t.menu.isHidden){var r=et(e,st,gt).call(e,t);n.push(r)}})),n}function gt(t){var e=U('<li role="menuitem">');t.menu.hasChildren&&(e.addClass("has-children"),e.attr("aria-haspopup","true"),e.attr("aria-expanded","false"));var n=t.menu.image;if(null!=n&&null!=n.href){var r=et(this,ft,mt).call(this,t);e.append(r)}var a=et(this,pt,_t).call(this,t);return e.append(a),e}function mt(t){var e=t.menu.image,n=U("<span>",{class:"topicImg"}),r="";"external"==e.scope||(r+=X(q(dt.prototype),"_getPathToRoot",this).call(this)),r+=e.href;var a=U("<img>",{src:r,alt:t.title});return null!=e.height&&a.attr("height",e.height),null!=e.width&&a.attr("width",e.width),j.appendHtmlNode(a,n),n}function _t(t){var e="external"==t.scope,n=U("<span>");n.addClass("topicref"),null!=t.outputclass&&n.addClass(t.outputclass);var r=t.attributes;void 0!==r&&Object.keys(r).forEach((function(t){return n.attr(t,r[t])})),n.attr(L,t.tocID),n.attr("id",t.tocID+"-mi"),et(this,ht,kt).call(this,t)?n.attr(z,A):n.attr(z,B);var a="";null!=t.href&&"javascript:void(0)"!=t.href&&(e||(a+=X(q(dt.prototype),"_getPathToRoot",this).call(this)),a+=t.href);var i=U("<a>",{href:a,html:t.title}),o=X(q(dt.prototype),"_getPathToRoot",this).call(this);i.find("a[href]").each((function(t,e){var n=U(e).attr("href");n.startsWith("http:")||n.startsWith("https:")||U(e).attr("href",o+n)})),i.find("img[src]").each((function(t,e){var n=U(e).attr("src");n.startsWith("http:")||n.startsWith("https:")||U(e).attr("src",o+n)})),e&&i.attr("target","_blank");var l=U("<span>",{class:"title"});return j.appendHtmlNode(i,l),j.appendHtmlNode(l,n),n}function kt(t){var e=t.topics;return(null==e||0!=e.length)&&(null==t.menu||t.menu.hasChildren)}var Ot=!1;"rtl"==U("html").attr("dir")&&(Ot=!0);var Tt=!1;try{document.createEvent("TouchEvent")&&(Tt=!0)}catch(t){C.Z.debug(t)}var xt=new dt(Ot,Tt);n(9755)((function(){xt.init(),r.Options.getBoolean("webhelp.enable.sticky.header")&&k.stickyController.init(),y.init(),_.init()}))},8091:(t,e,n)=>{n.r(e),n.d(e,{Options:()=>o});var r=n(4093),a=n.n(r);function i(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,r.key,r)}}var o=function(){function t(){!function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,t)}var e,n;return e=t,n=[{key:"get",value:function(t){return a()[t]}},{key:"getBoolean",value:function(t){var e=a()[t];return"true"==e||"yes"==e}},{key:"getInteger",value:function(t){var e=a()[t];return parseInt(e,10)}},{key:"getIndexerLanguage",value:function(){var t=this.get("webhelp.language");if(t){var e=t.indexOf("_");-1!=e&&(t=t.substring(0,e))}return t}}],null&&i(e.prototype,null),n&&i(e,n),Object.defineProperty(e,"prototype",{writable:!1}),t}()},4290:(t,e,n)=>{function r(t,e){if(t){if("string"==typeof t)return a(t,e);var n=Object.prototype.toString.call(t).slice(8,-1);return"Object"===n&&t.constructor&&(n=t.constructor.name),"Map"===n||"Set"===n?Array.from(t):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?a(t,e):void 0}}function a(t,e){(null==e||e>t.length)&&(e=t.length);for(var n=0,r=new Array(e);n<e;n++)r[n]=t[n];return r}function i(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,r.key,r)}}n.d(e,{Z:()=>o});var o=function(){function t(){!function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,t)}var e,n;return e=t,n=[{key:"getParameter",value:function(t){var e,n,a,i=new URLSearchParams(window.location.search),o=new URLSearchParams,l=function(t,e){var n="undefined"!=typeof Symbol&&t[Symbol.iterator]||t["@@iterator"];if(!n){if(Array.isArray(t)||(n=r(t))){n&&(t=n);var a=0,i=function(){};return{s:i,n:function(){return a>=t.length?{done:!0}:{done:!1,value:t[a++]}},e:function(t){throw t},f:i}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}var o,l=!0,c=!1;return{s:function(){n=n.call(t)},n:function(){var t=n.next();return l=t.done,t},e:function(t){c=!0,o=t},f:function(){try{l||null==n.return||n.return()}finally{if(c)throw o}}}}(i);try{for(l.s();!(e=l.n()).done;){var c=(n=e.value,a=2,function(t){if(Array.isArray(t))return t}(n)||function(t,e){var n=null==t?null:"undefined"!=typeof Symbol&&t[Symbol.iterator]||t["@@iterator"];if(null!=n){var r,a,i=[],o=!0,l=!1;try{for(n=n.call(t);!(o=(r=n.next()).done)&&(i.push(r.value),!e||i.length!==e);o=!0);}catch(t){l=!0,a=t}finally{try{o||null==n.return||n.return()}finally{if(l)throw a}}return i}}(n,a)||r(n,a)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()),u=c[0],s=c[1];o.append(u.toLowerCase(),s)}}catch(t){l.e(t)}finally{l.f()}var f=o.get(t.toLowerCase());return f&&(f=(f=decodeURIComponent(f)).replace(/\+/g," ")),f}},{key:"loadJS",value:function(t,e){var n=document.createElement("script");n.src=t,n.onload=e,n.onreadystatechange=e,document.body.appendChild(n)}},{key:"isLocal",value:function(){this.debug("isLocal()");try{var t=window.location.protocol;if(t.includes("http")||t.includes("https"))return!1}catch(t){this.debug(t)}return!0}},{key:"debug",value:function(t,e){}}],null&&i(e.prototype,null),n&&i(e,n),Object.defineProperty(e,"prototype",{writable:!1}),t}()},4093:t=>{t.exports=properties}},n={};function r(t){var a=n[t];if(void 0!==a)return a.exports;var i=n[t]={exports:{}};return e[t].call(i.exports,i,i.exports,r),i.exports}r.m=e,t=[],r.O=(e,n,a,i)=>{if(!n){var o=1/0;for(s=0;s<t.length;s++){for(var[n,a,i]=t[s],l=!0,c=0;c<n.length;c++)(!1&i||o>=i)&&Object.keys(r.O).every((t=>r.O[t](n[c])))?n.splice(c--,1):(l=!1,i<o&&(o=i));if(l){t.splice(s--,1);var u=a();void 0!==u&&(e=u)}}return e}i=i||0;for(var s=t.length;s>0&&t[s-1][2]>i;s--)t[s]=t[s-1];t[s]=[n,a,i]},r.n=t=>{var e=t&&t.__esModule?()=>t.default:()=>t;return r.d(e,{a:e}),e},r.d=(t,e)=>{for(var n in e)r.o(e,n)&&!r.o(t,n)&&Object.defineProperty(t,n,{enumerable:!0,get:e[n]})},r.g=function(){if("object"==typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(t){if("object"==typeof window)return window}}(),r.o=(t,e)=>Object.prototype.hasOwnProperty.call(t,e),r.r=t=>{"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},r.j="indexterms",(()=>{var t={indexterms:0};r.O.j=e=>0===t[e];var e=(e,n)=>{var a,i,[o,l,c]=n,u=0;if(o.some((e=>0!==t[e]))){for(a in l)r.o(l,a)&&(r.m[a]=l[a]);if(c)var s=c(r)}for(e&&e(n);u<o.length;u++)i=o[u],r.o(t,i)&&t[i]&&t[i][0](),t[i]=0;return r.O(s)},n=self.webpackChunkwebhelp=self.webpackChunkwebhelp||[];n.forEach(e.bind(null,0)),n.push=e.bind(null,n.push.bind(n))})();var a=r.O(void 0,["commons"],(()=>r(2891)));a=r.O(a)})();
//