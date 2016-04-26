/*! jQuery v2.1.4 | (c) 2005, 2015 jQuery Foundation, Inc. | jquery.org/license */
!function(a,b){"object"==typeof module&&"object"==typeof module.exports?module.exports=a.document?b(a,!0):function(a){if(!a.document)throw new Error("jQuery requires a window with a document");return b(a)}:b(a)}("undefined"!=typeof window?window:this,function(a,b){var c=[],d=c.slice,e=c.concat,f=c.push,g=c.indexOf,h={},i=h.toString,j=h.hasOwnProperty,k={},l=a.document,m="2.1.4",n=function(a,b){return new n.fn.init(a,b)},o=/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g,p=/^-ms-/,q=/-([\da-z])/gi,r=function(a,b){return b.toUpperCase()};n.fn=n.prototype={jquery:m,constructor:n,selector:"",length:0,toArray:function(){return d.call(this)},get:function(a){return null!=a?0>a?this[a+this.length]:this[a]:d.call(this)},pushStack:function(a){var b=n.merge(this.constructor(),a);return b.prevObject=this,b.context=this.context,b},each:function(a,b){return n.each(this,a,b)},map:function(a){return this.pushStack(n.map(this,function(b,c){return a.call(b,c,b)}))},slice:function(){return this.pushStack(d.apply(this,arguments))},first:function(){return this.eq(0)},last:function(){return this.eq(-1)},eq:function(a){var b=this.length,c=+a+(0>a?b:0);return this.pushStack(c>=0&&b>c?[this[c]]:[])},end:function(){return this.prevObject||this.constructor(null)},push:f,sort:c.sort,splice:c.splice},n.extend=n.fn.extend=function(){var a,b,c,d,e,f,g=arguments[0]||{},h=1,i=arguments.length,j=!1;for("boolean"==typeof g&&(j=g,g=arguments[h]||{},h++),"object"==typeof g||n.isFunction(g)||(g={}),h===i&&(g=this,h--);i>h;h++)if(null!=(a=arguments[h]))for(b in a)c=g[b],d=a[b],g!==d&&(j&&d&&(n.isPlainObject(d)||(e=n.isArray(d)))?(e?(e=!1,f=c&&n.isArray(c)?c:[]):f=c&&n.isPlainObject(c)?c:{},g[b]=n.extend(j,f,d)):void 0!==d&&(g[b]=d));return g},n.extend({expando:"jQuery"+(m+Math.random()).replace(/\D/g,""),isReady:!0,error:function(a){throw new Error(a)},noop:function(){},isFunction:function(a){return"function"===n.type(a)},isArray:Array.isArray,isWindow:function(a){return null!=a&&a===a.window},isNumeric:function(a){return!n.isArray(a)&&a-parseFloat(a)+1>=0},isPlainObject:function(a){return"object"!==n.type(a)||a.nodeType||n.isWindow(a)?!1:a.constructor&&!j.call(a.constructor.prototype,"isPrototypeOf")?!1:!0},isEmptyObject:function(a){var b;for(b in a)return!1;return!0},type:function(a){return null==a?a+"":"object"==typeof a||"function"==typeof a?h[i.call(a)]||"object":typeof a},globalEval:function(a){var b,c=eval;a=n.trim(a),a&&(1===a.indexOf("use strict")?(b=l.createElement("script"),b.text=a,l.head.appendChild(b).parentNode.removeChild(b)):c(a))},camelCase:function(a){return a.replace(p,"ms-").replace(q,r)},nodeName:function(a,b){return a.nodeName&&a.nodeName.toLowerCase()===b.toLowerCase()},each:function(a,b,c){var d,e=0,f=a.length,g=s(a);if(c){if(g){for(;f>e;e++)if(d=b.apply(a[e],c),d===!1)break}else for(e in a)if(d=b.apply(a[e],c),d===!1)break}else if(g){for(;f>e;e++)if(d=b.call(a[e],e,a[e]),d===!1)break}else for(e in a)if(d=b.call(a[e],e,a[e]),d===!1)break;return a},trim:function(a){return null==a?"":(a+"").replace(o,"")},makeArray:function(a,b){var c=b||[];return null!=a&&(s(Object(a))?n.merge(c,"string"==typeof a?[a]:a):f.call(c,a)),c},inArray:function(a,b,c){return null==b?-1:g.call(b,a,c)},merge:function(a,b){for(var c=+b.length,d=0,e=a.length;c>d;d++)a[e++]=b[d];return a.length=e,a},grep:function(a,b,c){for(var d,e=[],f=0,g=a.length,h=!c;g>f;f++)d=!b(a[f],f),d!==h&&e.push(a[f]);return e},map:function(a,b,c){var d,f=0,g=a.length,h=s(a),i=[];if(h)for(;g>f;f++)d=b(a[f],f,c),null!=d&&i.push(d);else for(f in a)d=b(a[f],f,c),null!=d&&i.push(d);return e.apply([],i)},guid:1,proxy:function(a,b){var c,e,f;return"string"==typeof b&&(c=a[b],b=a,a=c),n.isFunction(a)?(e=d.call(arguments,2),f=function(){return a.apply(b||this,e.concat(d.call(arguments)))},f.guid=a.guid=a.guid||n.guid++,f):void 0},now:Date.now,support:k}),n.each("Boolean Number String Function Array Date RegExp Object Error".split(" "),function(a,b){h["[object "+b+"]"]=b.toLowerCase()});function s(a){var b="length"in a&&a.length,c=n.type(a);return"function"===c||n.isWindow(a)?!1:1===a.nodeType&&b?!0:"array"===c||0===b||"number"==typeof b&&b>0&&b-1 in a}var t=function(a){var b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,u="sizzle"+1*new Date,v=a.document,w=0,x=0,y=ha(),z=ha(),A=ha(),B=function(a,b){return a===b&&(l=!0),0},C=1<<31,D={}.hasOwnProperty,E=[],F=E.pop,G=E.push,H=E.push,I=E.slice,J=function(a,b){for(var c=0,d=a.length;d>c;c++)if(a[c]===b)return c;return-1},K="checked|selected|async|autofocus|autoplay|controls|defer|disabled|hidden|ismap|loop|multiple|open|readonly|required|scoped",L="[\\x20\\t\\r\\n\\f]",M="(?:\\\\.|[\\w-]|[^\\x00-\\xa0])+",N=M.replace("w","w#"),O="\\["+L+"*("+M+")(?:"+L+"*([*^$|!~]?=)"+L+"*(?:'((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\"|("+N+"))|)"+L+"*\\]",P=":("+M+")(?:\\((('((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\")|((?:\\\\.|[^\\\\()[\\]]|"+O+")*)|.*)\\)|)",Q=new RegExp(L+"+","g"),R=new RegExp("^"+L+"+|((?:^|[^\\\\])(?:\\\\.)*)"+L+"+$","g"),S=new RegExp("^"+L+"*,"+L+"*"),T=new RegExp("^"+L+"*([>+~]|"+L+")"+L+"*"),U=new RegExp("="+L+"*([^\\]'\"]*?)"+L+"*\\]","g"),V=new RegExp(P),W=new RegExp("^"+N+"$"),X={ID:new RegExp("^#("+M+")"),CLASS:new RegExp("^\\.("+M+")"),TAG:new RegExp("^("+M.replace("w","w*")+")"),ATTR:new RegExp("^"+O),PSEUDO:new RegExp("^"+P),CHILD:new RegExp("^:(only|first|last|nth|nth-last)-(child|of-type)(?:\\("+L+"*(even|odd|(([+-]|)(\\d*)n|)"+L+"*(?:([+-]|)"+L+"*(\\d+)|))"+L+"*\\)|)","i"),bool:new RegExp("^(?:"+K+")$","i"),needsContext:new RegExp("^"+L+"*[>+~]|:(even|odd|eq|gt|lt|nth|first|last)(?:\\("+L+"*((?:-\\d)?\\d*)"+L+"*\\)|)(?=[^-]|$)","i")},Y=/^(?:input|select|textarea|button)$/i,Z=/^h\d$/i,$=/^[^{]+\{\s*\[native \w/,_=/^(?:#([\w-]+)|(\w+)|\.([\w-]+))$/,aa=/[+~]/,ba=/'|\\/g,ca=new RegExp("\\\\([\\da-f]{1,6}"+L+"?|("+L+")|.)","ig"),da=function(a,b,c){var d="0x"+b-65536;return d!==d||c?b:0>d?String.fromCharCode(d+65536):String.fromCharCode(d>>10|55296,1023&d|56320)},ea=function(){m()};try{H.apply(E=I.call(v.childNodes),v.childNodes),E[v.childNodes.length].nodeType}catch(fa){H={apply:E.length?function(a,b){G.apply(a,I.call(b))}:function(a,b){var c=a.length,d=0;while(a[c++]=b[d++]);a.length=c-1}}}function ga(a,b,d,e){var f,h,j,k,l,o,r,s,w,x;if((b?b.ownerDocument||b:v)!==n&&m(b),b=b||n,d=d||[],k=b.nodeType,"string"!=typeof a||!a||1!==k&&9!==k&&11!==k)return d;if(!e&&p){if(11!==k&&(f=_.exec(a)))if(j=f[1]){if(9===k){if(h=b.getElementById(j),!h||!h.parentNode)return d;if(h.id===j)return d.push(h),d}else if(b.ownerDocument&&(h=b.ownerDocument.getElementById(j))&&t(b,h)&&h.id===j)return d.push(h),d}else{if(f[2])return H.apply(d,b.getElementsByTagName(a)),d;if((j=f[3])&&c.getElementsByClassName)return H.apply(d,b.getElementsByClassName(j)),d}if(c.qsa&&(!q||!q.test(a))){if(s=r=u,w=b,x=1!==k&&a,1===k&&"object"!==b.nodeName.toLowerCase()){o=g(a),(r=b.getAttribute("id"))?s=r.replace(ba,"\\$&"):b.setAttribute("id",s),s="[id='"+s+"'] ",l=o.length;while(l--)o[l]=s+ra(o[l]);w=aa.test(a)&&pa(b.parentNode)||b,x=o.join(",")}if(x)try{return H.apply(d,w.querySelectorAll(x)),d}catch(y){}finally{r||b.removeAttribute("id")}}}return i(a.replace(R,"$1"),b,d,e)}function ha(){var a=[];function b(c,e){return a.push(c+" ")>d.cacheLength&&delete b[a.shift()],b[c+" "]=e}return b}function ia(a){return a[u]=!0,a}function ja(a){var b=n.createElement("div");try{return!!a(b)}catch(c){return!1}finally{b.parentNode&&b.parentNode.removeChild(b),b=null}}function ka(a,b){var c=a.split("|"),e=a.length;while(e--)d.attrHandle[c[e]]=b}function la(a,b){var c=b&&a,d=c&&1===a.nodeType&&1===b.nodeType&&(~b.sourceIndex||C)-(~a.sourceIndex||C);if(d)return d;if(c)while(c=c.nextSibling)if(c===b)return-1;return a?1:-1}function ma(a){return function(b){var c=b.nodeName.toLowerCase();return"input"===c&&b.type===a}}function na(a){return function(b){var c=b.nodeName.toLowerCase();return("input"===c||"button"===c)&&b.type===a}}function oa(a){return ia(function(b){return b=+b,ia(function(c,d){var e,f=a([],c.length,b),g=f.length;while(g--)c[e=f[g]]&&(c[e]=!(d[e]=c[e]))})})}function pa(a){return a&&"undefined"!=typeof a.getElementsByTagName&&a}c=ga.support={},f=ga.isXML=function(a){var b=a&&(a.ownerDocument||a).documentElement;return b?"HTML"!==b.nodeName:!1},m=ga.setDocument=function(a){var b,e,g=a?a.ownerDocument||a:v;return g!==n&&9===g.nodeType&&g.documentElement?(n=g,o=g.documentElement,e=g.defaultView,e&&e!==e.top&&(e.addEventListener?e.addEventListener("unload",ea,!1):e.attachEvent&&e.attachEvent("onunload",ea)),p=!f(g),c.attributes=ja(function(a){return a.className="i",!a.getAttribute("className")}),c.getElementsByTagName=ja(function(a){return a.appendChild(g.createComment("")),!a.getElementsByTagName("*").length}),c.getElementsByClassName=$.test(g.getElementsByClassName),c.getById=ja(function(a){return o.appendChild(a).id=u,!g.getElementsByName||!g.getElementsByName(u).length}),c.getById?(d.find.ID=function(a,b){if("undefined"!=typeof b.getElementById&&p){var c=b.getElementById(a);return c&&c.parentNode?[c]:[]}},d.filter.ID=function(a){var b=a.replace(ca,da);return function(a){return a.getAttribute("id")===b}}):(delete d.find.ID,d.filter.ID=function(a){var b=a.replace(ca,da);return function(a){var c="undefined"!=typeof a.getAttributeNode&&a.getAttributeNode("id");return c&&c.value===b}}),d.find.TAG=c.getElementsByTagName?function(a,b){return"undefined"!=typeof b.getElementsByTagName?b.getElementsByTagName(a):c.qsa?b.querySelectorAll(a):void 0}:function(a,b){var c,d=[],e=0,f=b.getElementsByTagName(a);if("*"===a){while(c=f[e++])1===c.nodeType&&d.push(c);return d}return f},d.find.CLASS=c.getElementsByClassName&&function(a,b){return p?b.getElementsByClassName(a):void 0},r=[],q=[],(c.qsa=$.test(g.querySelectorAll))&&(ja(function(a){o.appendChild(a).innerHTML="<a id='"+u+"'></a><select id='"+u+"-\f]' msallowcapture=''><option selected=''></option></select>",a.querySelectorAll("[msallowcapture^='']").length&&q.push("[*^$]="+L+"*(?:''|\"\")"),a.querySelectorAll("[selected]").length||q.push("\\["+L+"*(?:value|"+K+")"),a.querySelectorAll("[id~="+u+"-]").length||q.push("~="),a.querySelectorAll(":checked").length||q.push(":checked"),a.querySelectorAll("a#"+u+"+*").length||q.push(".#.+[+~]")}),ja(function(a){var b=g.createElement("input");b.setAttribute("type","hidden"),a.appendChild(b).setAttribute("name","D"),a.querySelectorAll("[name=d]").length&&q.push("name"+L+"*[*^$|!~]?="),a.querySelectorAll(":enabled").length||q.push(":enabled",":disabled"),a.querySelectorAll("*,:x"),q.push(",.*:")})),(c.matchesSelector=$.test(s=o.matches||o.webkitMatchesSelector||o.mozMatchesSelector||o.oMatchesSelector||o.msMatchesSelector))&&ja(function(a){c.disconnectedMatch=s.call(a,"div"),s.call(a,"[s!='']:x"),r.push("!=",P)}),q=q.length&&new RegExp(q.join("|")),r=r.length&&new RegExp(r.join("|")),b=$.test(o.compareDocumentPosition),t=b||$.test(o.contains)?function(a,b){var c=9===a.nodeType?a.documentElement:a,d=b&&b.parentNode;return a===d||!(!d||1!==d.nodeType||!(c.contains?c.contains(d):a.compareDocumentPosition&&16&a.compareDocumentPosition(d)))}:function(a,b){if(b)while(b=b.parentNode)if(b===a)return!0;return!1},B=b?function(a,b){if(a===b)return l=!0,0;var d=!a.compareDocumentPosition-!b.compareDocumentPosition;return d?d:(d=(a.ownerDocument||a)===(b.ownerDocument||b)?a.compareDocumentPosition(b):1,1&d||!c.sortDetached&&b.compareDocumentPosition(a)===d?a===g||a.ownerDocument===v&&t(v,a)?-1:b===g||b.ownerDocument===v&&t(v,b)?1:k?J(k,a)-J(k,b):0:4&d?-1:1)}:function(a,b){if(a===b)return l=!0,0;var c,d=0,e=a.parentNode,f=b.parentNode,h=[a],i=[b];if(!e||!f)return a===g?-1:b===g?1:e?-1:f?1:k?J(k,a)-J(k,b):0;if(e===f)return la(a,b);c=a;while(c=c.parentNode)h.unshift(c);c=b;while(c=c.parentNode)i.unshift(c);while(h[d]===i[d])d++;return d?la(h[d],i[d]):h[d]===v?-1:i[d]===v?1:0},g):n},ga.matches=function(a,b){return ga(a,null,null,b)},ga.matchesSelector=function(a,b){if((a.ownerDocument||a)!==n&&m(a),b=b.replace(U,"='$1']"),!(!c.matchesSelector||!p||r&&r.test(b)||q&&q.test(b)))try{var d=s.call(a,b);if(d||c.disconnectedMatch||a.document&&11!==a.document.nodeType)return d}catch(e){}return ga(b,n,null,[a]).length>0},ga.contains=function(a,b){return(a.ownerDocument||a)!==n&&m(a),t(a,b)},ga.attr=function(a,b){(a.ownerDocument||a)!==n&&m(a);var e=d.attrHandle[b.toLowerCase()],f=e&&D.call(d.attrHandle,b.toLowerCase())?e(a,b,!p):void 0;return void 0!==f?f:c.attributes||!p?a.getAttribute(b):(f=a.getAttributeNode(b))&&f.specified?f.value:null},ga.error=function(a){throw new Error("Syntax error, unrecognized expression: "+a)},ga.uniqueSort=function(a){var b,d=[],e=0,f=0;if(l=!c.detectDuplicates,k=!c.sortStable&&a.slice(0),a.sort(B),l){while(b=a[f++])b===a[f]&&(e=d.push(f));while(e--)a.splice(d[e],1)}return k=null,a},e=ga.getText=function(a){var b,c="",d=0,f=a.nodeType;if(f){if(1===f||9===f||11===f){if("string"==typeof a.textContent)return a.textContent;for(a=a.firstChild;a;a=a.nextSibling)c+=e(a)}else if(3===f||4===f)return a.nodeValue}else while(b=a[d++])c+=e(b);return c},d=ga.selectors={cacheLength:50,createPseudo:ia,match:X,attrHandle:{},find:{},relative:{">":{dir:"parentNode",first:!0}," ":{dir:"parentNode"},"+":{dir:"previousSibling",first:!0},"~":{dir:"previousSibling"}},preFilter:{ATTR:function(a){return a[1]=a[1].replace(ca,da),a[3]=(a[3]||a[4]||a[5]||"").replace(ca,da),"~="===a[2]&&(a[3]=" "+a[3]+" "),a.slice(0,4)},CHILD:function(a){return a[1]=a[1].toLowerCase(),"nth"===a[1].slice(0,3)?(a[3]||ga.error(a[0]),a[4]=+(a[4]?a[5]+(a[6]||1):2*("even"===a[3]||"odd"===a[3])),a[5]=+(a[7]+a[8]||"odd"===a[3])):a[3]&&ga.error(a[0]),a},PSEUDO:function(a){var b,c=!a[6]&&a[2];return X.CHILD.test(a[0])?null:(a[3]?a[2]=a[4]||a[5]||"":c&&V.test(c)&&(b=g(c,!0))&&(b=c.indexOf(")",c.length-b)-c.length)&&(a[0]=a[0].slice(0,b),a[2]=c.slice(0,b)),a.slice(0,3))}},filter:{TAG:function(a){var b=a.replace(ca,da).toLowerCase();return"*"===a?function(){return!0}:function(a){return a.nodeName&&a.nodeName.toLowerCase()===b}},CLASS:function(a){var b=y[a+" "];return b||(b=new RegExp("(^|"+L+")"+a+"("+L+"|$)"))&&y(a,function(a){return b.test("string"==typeof a.className&&a.className||"undefined"!=typeof a.getAttribute&&a.getAttribute("class")||"")})},ATTR:function(a,b,c){return function(d){var e=ga.attr(d,a);return null==e?"!="===b:b?(e+="","="===b?e===c:"!="===b?e!==c:"^="===b?c&&0===e.indexOf(c):"*="===b?c&&e.indexOf(c)>-1:"$="===b?c&&e.slice(-c.length)===c:"~="===b?(" "+e.replace(Q," ")+" ").indexOf(c)>-1:"|="===b?e===c||e.slice(0,c.length+1)===c+"-":!1):!0}},CHILD:function(a,b,c,d,e){var f="nth"!==a.slice(0,3),g="last"!==a.slice(-4),h="of-type"===b;return 1===d&&0===e?function(a){return!!a.parentNode}:function(b,c,i){var j,k,l,m,n,o,p=f!==g?"nextSibling":"previousSibling",q=b.parentNode,r=h&&b.nodeName.toLowerCase(),s=!i&&!h;if(q){if(f){while(p){l=b;while(l=l[p])if(h?l.nodeName.toLowerCase()===r:1===l.nodeType)return!1;o=p="only"===a&&!o&&"nextSibling"}return!0}if(o=[g?q.firstChild:q.lastChild],g&&s){k=q[u]||(q[u]={}),j=k[a]||[],n=j[0]===w&&j[1],m=j[0]===w&&j[2],l=n&&q.childNodes[n];while(l=++n&&l&&l[p]||(m=n=0)||o.pop())if(1===l.nodeType&&++m&&l===b){k[a]=[w,n,m];break}}else if(s&&(j=(b[u]||(b[u]={}))[a])&&j[0]===w)m=j[1];else while(l=++n&&l&&l[p]||(m=n=0)||o.pop())if((h?l.nodeName.toLowerCase()===r:1===l.nodeType)&&++m&&(s&&((l[u]||(l[u]={}))[a]=[w,m]),l===b))break;return m-=e,m===d||m%d===0&&m/d>=0}}},PSEUDO:function(a,b){var c,e=d.pseudos[a]||d.setFilters[a.toLowerCase()]||ga.error("unsupported pseudo: "+a);return e[u]?e(b):e.length>1?(c=[a,a,"",b],d.setFilters.hasOwnProperty(a.toLowerCase())?ia(function(a,c){var d,f=e(a,b),g=f.length;while(g--)d=J(a,f[g]),a[d]=!(c[d]=f[g])}):function(a){return e(a,0,c)}):e}},pseudos:{not:ia(function(a){var b=[],c=[],d=h(a.replace(R,"$1"));return d[u]?ia(function(a,b,c,e){var f,g=d(a,null,e,[]),h=a.length;while(h--)(f=g[h])&&(a[h]=!(b[h]=f))}):function(a,e,f){return b[0]=a,d(b,null,f,c),b[0]=null,!c.pop()}}),has:ia(function(a){return function(b){return ga(a,b).length>0}}),contains:ia(function(a){return a=a.replace(ca,da),function(b){return(b.textContent||b.innerText||e(b)).indexOf(a)>-1}}),lang:ia(function(a){return W.test(a||"")||ga.error("unsupported lang: "+a),a=a.replace(ca,da).toLowerCase(),function(b){var c;do if(c=p?b.lang:b.getAttribute("xml:lang")||b.getAttribute("lang"))return c=c.toLowerCase(),c===a||0===c.indexOf(a+"-");while((b=b.parentNode)&&1===b.nodeType);return!1}}),target:function(b){var c=a.location&&a.location.hash;return c&&c.slice(1)===b.id},root:function(a){return a===o},focus:function(a){return a===n.activeElement&&(!n.hasFocus||n.hasFocus())&&!!(a.type||a.href||~a.tabIndex)},enabled:function(a){return a.disabled===!1},disabled:function(a){return a.disabled===!0},checked:function(a){var b=a.nodeName.toLowerCase();return"input"===b&&!!a.checked||"option"===b&&!!a.selected},selected:function(a){return a.parentNode&&a.parentNode.selectedIndex,a.selected===!0},empty:function(a){for(a=a.firstChild;a;a=a.nextSibling)if(a.nodeType<6)return!1;return!0},parent:function(a){return!d.pseudos.empty(a)},header:function(a){return Z.test(a.nodeName)},input:function(a){return Y.test(a.nodeName)},button:function(a){var b=a.nodeName.toLowerCase();return"input"===b&&"button"===a.type||"button"===b},text:function(a){var b;return"input"===a.nodeName.toLowerCase()&&"text"===a.type&&(null==(b=a.getAttribute("type"))||"text"===b.toLowerCase())},first:oa(function(){return[0]}),last:oa(function(a,b){return[b-1]}),eq:oa(function(a,b,c){return[0>c?c+b:c]}),even:oa(function(a,b){for(var c=0;b>c;c+=2)a.push(c);return a}),odd:oa(function(a,b){for(var c=1;b>c;c+=2)a.push(c);return a}),lt:oa(function(a,b,c){for(var d=0>c?c+b:c;--d>=0;)a.push(d);return a}),gt:oa(function(a,b,c){for(var d=0>c?c+b:c;++d<b;)a.push(d);return a})}},d.pseudos.nth=d.pseudos.eq;for(b in{radio:!0,checkbox:!0,file:!0,password:!0,image:!0})d.pseudos[b]=ma(b);for(b in{submit:!0,reset:!0})d.pseudos[b]=na(b);function qa(){}qa.prototype=d.filters=d.pseudos,d.setFilters=new qa,g=ga.tokenize=function(a,b){var c,e,f,g,h,i,j,k=z[a+" "];if(k)return b?0:k.slice(0);h=a,i=[],j=d.preFilter;while(h){(!c||(e=S.exec(h)))&&(e&&(h=h.slice(e[0].length)||h),i.push(f=[])),c=!1,(e=T.exec(h))&&(c=e.shift(),f.push({value:c,type:e[0].replace(R," ")}),h=h.slice(c.length));for(g in d.filter)!(e=X[g].exec(h))||j[g]&&!(e=j[g](e))||(c=e.shift(),f.push({value:c,type:g,matches:e}),h=h.slice(c.length));if(!c)break}return b?h.length:h?ga.error(a):z(a,i).slice(0)};function ra(a){for(var b=0,c=a.length,d="";c>b;b++)d+=a[b].value;return d}function sa(a,b,c){var d=b.dir,e=c&&"parentNode"===d,f=x++;return b.first?function(b,c,f){while(b=b[d])if(1===b.nodeType||e)return a(b,c,f)}:function(b,c,g){var h,i,j=[w,f];if(g){while(b=b[d])if((1===b.nodeType||e)&&a(b,c,g))return!0}else while(b=b[d])if(1===b.nodeType||e){if(i=b[u]||(b[u]={}),(h=i[d])&&h[0]===w&&h[1]===f)return j[2]=h[2];if(i[d]=j,j[2]=a(b,c,g))return!0}}}function ta(a){return a.length>1?function(b,c,d){var e=a.length;while(e--)if(!a[e](b,c,d))return!1;return!0}:a[0]}function ua(a,b,c){for(var d=0,e=b.length;e>d;d++)ga(a,b[d],c);return c}function va(a,b,c,d,e){for(var f,g=[],h=0,i=a.length,j=null!=b;i>h;h++)(f=a[h])&&(!c||c(f,d,e))&&(g.push(f),j&&b.push(h));return g}function wa(a,b,c,d,e,f){return d&&!d[u]&&(d=wa(d)),e&&!e[u]&&(e=wa(e,f)),ia(function(f,g,h,i){var j,k,l,m=[],n=[],o=g.length,p=f||ua(b||"*",h.nodeType?[h]:h,[]),q=!a||!f&&b?p:va(p,m,a,h,i),r=c?e||(f?a:o||d)?[]:g:q;if(c&&c(q,r,h,i),d){j=va(r,n),d(j,[],h,i),k=j.length;while(k--)(l=j[k])&&(r[n[k]]=!(q[n[k]]=l))}if(f){if(e||a){if(e){j=[],k=r.length;while(k--)(l=r[k])&&j.push(q[k]=l);e(null,r=[],j,i)}k=r.length;while(k--)(l=r[k])&&(j=e?J(f,l):m[k])>-1&&(f[j]=!(g[j]=l))}}else r=va(r===g?r.splice(o,r.length):r),e?e(null,g,r,i):H.apply(g,r)})}function xa(a){for(var b,c,e,f=a.length,g=d.relative[a[0].type],h=g||d.relative[" "],i=g?1:0,k=sa(function(a){return a===b},h,!0),l=sa(function(a){return J(b,a)>-1},h,!0),m=[function(a,c,d){var e=!g&&(d||c!==j)||((b=c).nodeType?k(a,c,d):l(a,c,d));return b=null,e}];f>i;i++)if(c=d.relative[a[i].type])m=[sa(ta(m),c)];else{if(c=d.filter[a[i].type].apply(null,a[i].matches),c[u]){for(e=++i;f>e;e++)if(d.relative[a[e].type])break;return wa(i>1&&ta(m),i>1&&ra(a.slice(0,i-1).concat({value:" "===a[i-2].type?"*":""})).replace(R,"$1"),c,e>i&&xa(a.slice(i,e)),f>e&&xa(a=a.slice(e)),f>e&&ra(a))}m.push(c)}return ta(m)}function ya(a,b){var c=b.length>0,e=a.length>0,f=function(f,g,h,i,k){var l,m,o,p=0,q="0",r=f&&[],s=[],t=j,u=f||e&&d.find.TAG("*",k),v=w+=null==t?1:Math.random()||.1,x=u.length;for(k&&(j=g!==n&&g);q!==x&&null!=(l=u[q]);q++){if(e&&l){m=0;while(o=a[m++])if(o(l,g,h)){i.push(l);break}k&&(w=v)}c&&((l=!o&&l)&&p--,f&&r.push(l))}if(p+=q,c&&q!==p){m=0;while(o=b[m++])o(r,s,g,h);if(f){if(p>0)while(q--)r[q]||s[q]||(s[q]=F.call(i));s=va(s)}H.apply(i,s),k&&!f&&s.length>0&&p+b.length>1&&ga.uniqueSort(i)}return k&&(w=v,j=t),r};return c?ia(f):f}return h=ga.compile=function(a,b){var c,d=[],e=[],f=A[a+" "];if(!f){b||(b=g(a)),c=b.length;while(c--)f=xa(b[c]),f[u]?d.push(f):e.push(f);f=A(a,ya(e,d)),f.selector=a}return f},i=ga.select=function(a,b,e,f){var i,j,k,l,m,n="function"==typeof a&&a,o=!f&&g(a=n.selector||a);if(e=e||[],1===o.length){if(j=o[0]=o[0].slice(0),j.length>2&&"ID"===(k=j[0]).type&&c.getById&&9===b.nodeType&&p&&d.relative[j[1].type]){if(b=(d.find.ID(k.matches[0].replace(ca,da),b)||[])[0],!b)return e;n&&(b=b.parentNode),a=a.slice(j.shift().value.length)}i=X.needsContext.test(a)?0:j.length;while(i--){if(k=j[i],d.relative[l=k.type])break;if((m=d.find[l])&&(f=m(k.matches[0].replace(ca,da),aa.test(j[0].type)&&pa(b.parentNode)||b))){if(j.splice(i,1),a=f.length&&ra(j),!a)return H.apply(e,f),e;break}}}return(n||h(a,o))(f,b,!p,e,aa.test(a)&&pa(b.parentNode)||b),e},c.sortStable=u.split("").sort(B).join("")===u,c.detectDuplicates=!!l,m(),c.sortDetached=ja(function(a){return 1&a.compareDocumentPosition(n.createElement("div"))}),ja(function(a){return a.innerHTML="<a href='#'></a>","#"===a.firstChild.getAttribute("href")})||ka("type|href|height|width",function(a,b,c){return c?void 0:a.getAttribute(b,"type"===b.toLowerCase()?1:2)}),c.attributes&&ja(function(a){return a.innerHTML="<input/>",a.firstChild.setAttribute("value",""),""===a.firstChild.getAttribute("value")})||ka("value",function(a,b,c){return c||"input"!==a.nodeName.toLowerCase()?void 0:a.defaultValue}),ja(function(a){return null==a.getAttribute("disabled")})||ka(K,function(a,b,c){var d;return c?void 0:a[b]===!0?b.toLowerCase():(d=a.getAttributeNode(b))&&d.specified?d.value:null}),ga}(a);n.find=t,n.expr=t.selectors,n.expr[":"]=n.expr.pseudos,n.unique=t.uniqueSort,n.text=t.getText,n.isXMLDoc=t.isXML,n.contains=t.contains;var u=n.expr.match.needsContext,v=/^<(\w+)\s*\/?>(?:<\/\1>|)$/,w=/^.[^:#\[\.,]*$/;function x(a,b,c){if(n.isFunction(b))return n.grep(a,function(a,d){return!!b.call(a,d,a)!==c});if(b.nodeType)return n.grep(a,function(a){return a===b!==c});if("string"==typeof b){if(w.test(b))return n.filter(b,a,c);b=n.filter(b,a)}return n.grep(a,function(a){return g.call(b,a)>=0!==c})}n.filter=function(a,b,c){var d=b[0];return c&&(a=":not("+a+")"),1===b.length&&1===d.nodeType?n.find.matchesSelector(d,a)?[d]:[]:n.find.matches(a,n.grep(b,function(a){return 1===a.nodeType}))},n.fn.extend({find:function(a){var b,c=this.length,d=[],e=this;if("string"!=typeof a)return this.pushStack(n(a).filter(function(){for(b=0;c>b;b++)if(n.contains(e[b],this))return!0}));for(b=0;c>b;b++)n.find(a,e[b],d);return d=this.pushStack(c>1?n.unique(d):d),d.selector=this.selector?this.selector+" "+a:a,d},filter:function(a){return this.pushStack(x(this,a||[],!1))},not:function(a){return this.pushStack(x(this,a||[],!0))},is:function(a){return!!x(this,"string"==typeof a&&u.test(a)?n(a):a||[],!1).length}});var y,z=/^(?:\s*(<[\w\W]+>)[^>]*|#([\w-]*))$/,A=n.fn.init=function(a,b){var c,d;if(!a)return this;if("string"==typeof a){if(c="<"===a[0]&&">"===a[a.length-1]&&a.length>=3?[null,a,null]:z.exec(a),!c||!c[1]&&b)return!b||b.jquery?(b||y).find(a):this.constructor(b).find(a);if(c[1]){if(b=b instanceof n?b[0]:b,n.merge(this,n.parseHTML(c[1],b&&b.nodeType?b.ownerDocument||b:l,!0)),v.test(c[1])&&n.isPlainObject(b))for(c in b)n.isFunction(this[c])?this[c](b[c]):this.attr(c,b[c]);return this}return d=l.getElementById(c[2]),d&&d.parentNode&&(this.length=1,this[0]=d),this.context=l,this.selector=a,this}return a.nodeType?(this.context=this[0]=a,this.length=1,this):n.isFunction(a)?"undefined"!=typeof y.ready?y.ready(a):a(n):(void 0!==a.selector&&(this.selector=a.selector,this.context=a.context),n.makeArray(a,this))};A.prototype=n.fn,y=n(l);var B=/^(?:parents|prev(?:Until|All))/,C={children:!0,contents:!0,next:!0,prev:!0};n.extend({dir:function(a,b,c){var d=[],e=void 0!==c;while((a=a[b])&&9!==a.nodeType)if(1===a.nodeType){if(e&&n(a).is(c))break;d.push(a)}return d},sibling:function(a,b){for(var c=[];a;a=a.nextSibling)1===a.nodeType&&a!==b&&c.push(a);return c}}),n.fn.extend({has:function(a){var b=n(a,this),c=b.length;return this.filter(function(){for(var a=0;c>a;a++)if(n.contains(this,b[a]))return!0})},closest:function(a,b){for(var c,d=0,e=this.length,f=[],g=u.test(a)||"string"!=typeof a?n(a,b||this.context):0;e>d;d++)for(c=this[d];c&&c!==b;c=c.parentNode)if(c.nodeType<11&&(g?g.index(c)>-1:1===c.nodeType&&n.find.matchesSelector(c,a))){f.push(c);break}return this.pushStack(f.length>1?n.unique(f):f)},index:function(a){return a?"string"==typeof a?g.call(n(a),this[0]):g.call(this,a.jquery?a[0]:a):this[0]&&this[0].parentNode?this.first().prevAll().length:-1},add:function(a,b){return this.pushStack(n.unique(n.merge(this.get(),n(a,b))))},addBack:function(a){return this.add(null==a?this.prevObject:this.prevObject.filter(a))}});function D(a,b){while((a=a[b])&&1!==a.nodeType);return a}n.each({parent:function(a){var b=a.parentNode;return b&&11!==b.nodeType?b:null},parents:function(a){return n.dir(a,"parentNode")},parentsUntil:function(a,b,c){return n.dir(a,"parentNode",c)},next:function(a){return D(a,"nextSibling")},prev:function(a){return D(a,"previousSibling")},nextAll:function(a){return n.dir(a,"nextSibling")},prevAll:function(a){return n.dir(a,"previousSibling")},nextUntil:function(a,b,c){return n.dir(a,"nextSibling",c)},prevUntil:function(a,b,c){return n.dir(a,"previousSibling",c)},siblings:function(a){return n.sibling((a.parentNode||{}).firstChild,a)},children:function(a){return n.sibling(a.firstChild)},contents:function(a){return a.contentDocument||n.merge([],a.childNodes)}},function(a,b){n.fn[a]=function(c,d){var e=n.map(this,b,c);return"Until"!==a.slice(-5)&&(d=c),d&&"string"==typeof d&&(e=n.filter(d,e)),this.length>1&&(C[a]||n.unique(e),B.test(a)&&e.reverse()),this.pushStack(e)}});var E=/\S+/g,F={};function G(a){var b=F[a]={};return n.each(a.match(E)||[],function(a,c){b[c]=!0}),b}n.Callbacks=function(a){a="string"==typeof a?F[a]||G(a):n.extend({},a);var b,c,d,e,f,g,h=[],i=!a.once&&[],j=function(l){for(b=a.memory&&l,c=!0,g=e||0,e=0,f=h.length,d=!0;h&&f>g;g++)if(h[g].apply(l[0],l[1])===!1&&a.stopOnFalse){b=!1;break}d=!1,h&&(i?i.length&&j(i.shift()):b?h=[]:k.disable())},k={add:function(){if(h){var c=h.length;!function g(b){n.each(b,function(b,c){var d=n.type(c);"function"===d?a.unique&&k.has(c)||h.push(c):c&&c.length&&"string"!==d&&g(c)})}(arguments),d?f=h.length:b&&(e=c,j(b))}return this},remove:function(){return h&&n.each(arguments,function(a,b){var c;while((c=n.inArray(b,h,c))>-1)h.splice(c,1),d&&(f>=c&&f--,g>=c&&g--)}),this},has:function(a){return a?n.inArray(a,h)>-1:!(!h||!h.length)},empty:function(){return h=[],f=0,this},disable:function(){return h=i=b=void 0,this},disabled:function(){return!h},lock:function(){return i=void 0,b||k.disable(),this},locked:function(){return!i},fireWith:function(a,b){return!h||c&&!i||(b=b||[],b=[a,b.slice?b.slice():b],d?i.push(b):j(b)),this},fire:function(){return k.fireWith(this,arguments),this},fired:function(){return!!c}};return k},n.extend({Deferred:function(a){var b=[["resolve","done",n.Callbacks("once memory"),"resolved"],["reject","fail",n.Callbacks("once memory"),"rejected"],["notify","progress",n.Callbacks("memory")]],c="pending",d={state:function(){return c},always:function(){return e.done(arguments).fail(arguments),this},then:function(){var a=arguments;return n.Deferred(function(c){n.each(b,function(b,f){var g=n.isFunction(a[b])&&a[b];e[f[1]](function(){var a=g&&g.apply(this,arguments);a&&n.isFunction(a.promise)?a.promise().done(c.resolve).fail(c.reject).progress(c.notify):c[f[0]+"With"](this===d?c.promise():this,g?[a]:arguments)})}),a=null}).promise()},promise:function(a){return null!=a?n.extend(a,d):d}},e={};return d.pipe=d.then,n.each(b,function(a,f){var g=f[2],h=f[3];d[f[1]]=g.add,h&&g.add(function(){c=h},b[1^a][2].disable,b[2][2].lock),e[f[0]]=function(){return e[f[0]+"With"](this===e?d:this,arguments),this},e[f[0]+"With"]=g.fireWith}),d.promise(e),a&&a.call(e,e),e},when:function(a){var b=0,c=d.call(arguments),e=c.length,f=1!==e||a&&n.isFunction(a.promise)?e:0,g=1===f?a:n.Deferred(),h=function(a,b,c){return function(e){b[a]=this,c[a]=arguments.length>1?d.call(arguments):e,c===i?g.notifyWith(b,c):--f||g.resolveWith(b,c)}},i,j,k;if(e>1)for(i=new Array(e),j=new Array(e),k=new Array(e);e>b;b++)c[b]&&n.isFunction(c[b].promise)?c[b].promise().done(h(b,k,c)).fail(g.reject).progress(h(b,j,i)):--f;return f||g.resolveWith(k,c),g.promise()}});var H;n.fn.ready=function(a){return n.ready.promise().done(a),this},n.extend({isReady:!1,readyWait:1,holdReady:function(a){a?n.readyWait++:n.ready(!0)},ready:function(a){(a===!0?--n.readyWait:n.isReady)||(n.isReady=!0,a!==!0&&--n.readyWait>0||(H.resolveWith(l,[n]),n.fn.triggerHandler&&(n(l).triggerHandler("ready"),n(l).off("ready"))))}});function I(){l.removeEventListener("DOMContentLoaded",I,!1),a.removeEventListener("load",I,!1),n.ready()}n.ready.promise=function(b){return H||(H=n.Deferred(),"complete"===l.readyState?setTimeout(n.ready):(l.addEventListener("DOMContentLoaded",I,!1),a.addEventListener("load",I,!1))),H.promise(b)},n.ready.promise();var J=n.access=function(a,b,c,d,e,f,g){var h=0,i=a.length,j=null==c;if("object"===n.type(c)){e=!0;for(h in c)n.access(a,b,h,c[h],!0,f,g)}else if(void 0!==d&&(e=!0,n.isFunction(d)||(g=!0),j&&(g?(b.call(a,d),b=null):(j=b,b=function(a,b,c){return j.call(n(a),c)})),b))for(;i>h;h++)b(a[h],c,g?d:d.call(a[h],h,b(a[h],c)));return e?a:j?b.call(a):i?b(a[0],c):f};n.acceptData=function(a){return 1===a.nodeType||9===a.nodeType||!+a.nodeType};function K(){Object.defineProperty(this.cache={},0,{get:function(){return{}}}),this.expando=n.expando+K.uid++}K.uid=1,K.accepts=n.acceptData,K.prototype={key:function(a){if(!K.accepts(a))return 0;var b={},c=a[this.expando];if(!c){c=K.uid++;try{b[this.expando]={value:c},Object.defineProperties(a,b)}catch(d){b[this.expando]=c,n.extend(a,b)}}return this.cache[c]||(this.cache[c]={}),c},set:function(a,b,c){var d,e=this.key(a),f=this.cache[e];if("string"==typeof b)f[b]=c;else if(n.isEmptyObject(f))n.extend(this.cache[e],b);else for(d in b)f[d]=b[d];return f},get:function(a,b){var c=this.cache[this.key(a)];return void 0===b?c:c[b]},access:function(a,b,c){var d;return void 0===b||b&&"string"==typeof b&&void 0===c?(d=this.get(a,b),void 0!==d?d:this.get(a,n.camelCase(b))):(this.set(a,b,c),void 0!==c?c:b)},remove:function(a,b){var c,d,e,f=this.key(a),g=this.cache[f];if(void 0===b)this.cache[f]={};else{n.isArray(b)?d=b.concat(b.map(n.camelCase)):(e=n.camelCase(b),b in g?d=[b,e]:(d=e,d=d in g?[d]:d.match(E)||[])),c=d.length;while(c--)delete g[d[c]]}},hasData:function(a){return!n.isEmptyObject(this.cache[a[this.expando]]||{})},discard:function(a){a[this.expando]&&delete this.cache[a[this.expando]]}};var L=new K,M=new K,N=/^(?:\{[\w\W]*\}|\[[\w\W]*\])$/,O=/([A-Z])/g;function P(a,b,c){var d;if(void 0===c&&1===a.nodeType)if(d="data-"+b.replace(O,"-$1").toLowerCase(),c=a.getAttribute(d),"string"==typeof c){try{c="true"===c?!0:"false"===c?!1:"null"===c?null:+c+""===c?+c:N.test(c)?n.parseJSON(c):c}catch(e){}M.set(a,b,c)}else c=void 0;return c}n.extend({hasData:function(a){return M.hasData(a)||L.hasData(a)},data:function(a,b,c){
    return M.access(a,b,c)},removeData:function(a,b){M.remove(a,b)},_data:function(a,b,c){return L.access(a,b,c)},_removeData:function(a,b){L.remove(a,b)}}),n.fn.extend({data:function(a,b){var c,d,e,f=this[0],g=f&&f.attributes;if(void 0===a){if(this.length&&(e=M.get(f),1===f.nodeType&&!L.get(f,"hasDataAttrs"))){c=g.length;while(c--)g[c]&&(d=g[c].name,0===d.indexOf("data-")&&(d=n.camelCase(d.slice(5)),P(f,d,e[d])));L.set(f,"hasDataAttrs",!0)}return e}return"object"==typeof a?this.each(function(){M.set(this,a)}):J(this,function(b){var c,d=n.camelCase(a);if(f&&void 0===b){if(c=M.get(f,a),void 0!==c)return c;if(c=M.get(f,d),void 0!==c)return c;if(c=P(f,d,void 0),void 0!==c)return c}else this.each(function(){var c=M.get(this,d);M.set(this,d,b),-1!==a.indexOf("-")&&void 0!==c&&M.set(this,a,b)})},null,b,arguments.length>1,null,!0)},removeData:function(a){return this.each(function(){M.remove(this,a)})}}),n.extend({queue:function(a,b,c){var d;return a?(b=(b||"fx")+"queue",d=L.get(a,b),c&&(!d||n.isArray(c)?d=L.access(a,b,n.makeArray(c)):d.push(c)),d||[]):void 0},dequeue:function(a,b){b=b||"fx";var c=n.queue(a,b),d=c.length,e=c.shift(),f=n._queueHooks(a,b),g=function(){n.dequeue(a,b)};"inprogress"===e&&(e=c.shift(),d--),e&&("fx"===b&&c.unshift("inprogress"),delete f.stop,e.call(a,g,f)),!d&&f&&f.empty.fire()},_queueHooks:function(a,b){var c=b+"queueHooks";return L.get(a,c)||L.access(a,c,{empty:n.Callbacks("once memory").add(function(){L.remove(a,[b+"queue",c])})})}}),n.fn.extend({queue:function(a,b){var c=2;return"string"!=typeof a&&(b=a,a="fx",c--),arguments.length<c?n.queue(this[0],a):void 0===b?this:this.each(function(){var c=n.queue(this,a,b);n._queueHooks(this,a),"fx"===a&&"inprogress"!==c[0]&&n.dequeue(this,a)})},dequeue:function(a){return this.each(function(){n.dequeue(this,a)})},clearQueue:function(a){return this.queue(a||"fx",[])},promise:function(a,b){var c,d=1,e=n.Deferred(),f=this,g=this.length,h=function(){--d||e.resolveWith(f,[f])};"string"!=typeof a&&(b=a,a=void 0),a=a||"fx";while(g--)c=L.get(f[g],a+"queueHooks"),c&&c.empty&&(d++,c.empty.add(h));return h(),e.promise(b)}});var Q=/[+-]?(?:\d*\.|)\d+(?:[eE][+-]?\d+|)/.source,R=["Top","Right","Bottom","Left"],S=function(a,b){return a=b||a,"none"===n.css(a,"display")||!n.contains(a.ownerDocument,a)},T=/^(?:checkbox|radio)$/i;!function(){var a=l.createDocumentFragment(),b=a.appendChild(l.createElement("div")),c=l.createElement("input");c.setAttribute("type","radio"),c.setAttribute("checked","checked"),c.setAttribute("name","t"),b.appendChild(c),k.checkClone=b.cloneNode(!0).cloneNode(!0).lastChild.checked,b.innerHTML="<textarea>x</textarea>",k.noCloneChecked=!!b.cloneNode(!0).lastChild.defaultValue}();var U="undefined";k.focusinBubbles="onfocusin"in a;var V=/^key/,W=/^(?:mouse|pointer|contextmenu)|click/,X=/^(?:focusinfocus|focusoutblur)$/,Y=/^([^.]*)(?:\.(.+)|)$/;function Z(){return!0}function $(){return!1}function _(){try{return l.activeElement}catch(a){}}n.event={global:{},add:function(a,b,c,d,e){var f,g,h,i,j,k,l,m,o,p,q,r=L.get(a);if(r){c.handler&&(f=c,c=f.handler,e=f.selector),c.guid||(c.guid=n.guid++),(i=r.events)||(i=r.events={}),(g=r.handle)||(g=r.handle=function(b){return typeof n!==U&&n.event.triggered!==b.type?n.event.dispatch.apply(a,arguments):void 0}),b=(b||"").match(E)||[""],j=b.length;while(j--)h=Y.exec(b[j])||[],o=q=h[1],p=(h[2]||"").split(".").sort(),o&&(l=n.event.special[o]||{},o=(e?l.delegateType:l.bindType)||o,l=n.event.special[o]||{},k=n.extend({type:o,origType:q,data:d,handler:c,guid:c.guid,selector:e,needsContext:e&&n.expr.match.needsContext.test(e),namespace:p.join(".")},f),(m=i[o])||(m=i[o]=[],m.delegateCount=0,l.setup&&l.setup.call(a,d,p,g)!==!1||a.addEventListener&&a.addEventListener(o,g,!1)),l.add&&(l.add.call(a,k),k.handler.guid||(k.handler.guid=c.guid)),e?m.splice(m.delegateCount++,0,k):m.push(k),n.event.global[o]=!0)}},remove:function(a,b,c,d,e){var f,g,h,i,j,k,l,m,o,p,q,r=L.hasData(a)&&L.get(a);if(r&&(i=r.events)){b=(b||"").match(E)||[""],j=b.length;while(j--)if(h=Y.exec(b[j])||[],o=q=h[1],p=(h[2]||"").split(".").sort(),o){l=n.event.special[o]||{},o=(d?l.delegateType:l.bindType)||o,m=i[o]||[],h=h[2]&&new RegExp("(^|\\.)"+p.join("\\.(?:.*\\.|)")+"(\\.|$)"),g=f=m.length;while(f--)k=m[f],!e&&q!==k.origType||c&&c.guid!==k.guid||h&&!h.test(k.namespace)||d&&d!==k.selector&&("**"!==d||!k.selector)||(m.splice(f,1),k.selector&&m.delegateCount--,l.remove&&l.remove.call(a,k));g&&!m.length&&(l.teardown&&l.teardown.call(a,p,r.handle)!==!1||n.removeEvent(a,o,r.handle),delete i[o])}else for(o in i)n.event.remove(a,o+b[j],c,d,!0);n.isEmptyObject(i)&&(delete r.handle,L.remove(a,"events"))}},trigger:function(b,c,d,e){var f,g,h,i,k,m,o,p=[d||l],q=j.call(b,"type")?b.type:b,r=j.call(b,"namespace")?b.namespace.split("."):[];if(g=h=d=d||l,3!==d.nodeType&&8!==d.nodeType&&!X.test(q+n.event.triggered)&&(q.indexOf(".")>=0&&(r=q.split("."),q=r.shift(),r.sort()),k=q.indexOf(":")<0&&"on"+q,b=b[n.expando]?b:new n.Event(q,"object"==typeof b&&b),b.isTrigger=e?2:3,b.namespace=r.join("."),b.namespace_re=b.namespace?new RegExp("(^|\\.)"+r.join("\\.(?:.*\\.|)")+"(\\.|$)"):null,b.result=void 0,b.target||(b.target=d),c=null==c?[b]:n.makeArray(c,[b]),o=n.event.special[q]||{},e||!o.trigger||o.trigger.apply(d,c)!==!1)){if(!e&&!o.noBubble&&!n.isWindow(d)){for(i=o.delegateType||q,X.test(i+q)||(g=g.parentNode);g;g=g.parentNode)p.push(g),h=g;h===(d.ownerDocument||l)&&p.push(h.defaultView||h.parentWindow||a)}f=0;while((g=p[f++])&&!b.isPropagationStopped())b.type=f>1?i:o.bindType||q,m=(L.get(g,"events")||{})[b.type]&&L.get(g,"handle"),m&&m.apply(g,c),m=k&&g[k],m&&m.apply&&n.acceptData(g)&&(b.result=m.apply(g,c),b.result===!1&&b.preventDefault());return b.type=q,e||b.isDefaultPrevented()||o._default&&o._default.apply(p.pop(),c)!==!1||!n.acceptData(d)||k&&n.isFunction(d[q])&&!n.isWindow(d)&&(h=d[k],h&&(d[k]=null),n.event.triggered=q,d[q](),n.event.triggered=void 0,h&&(d[k]=h)),b.result}},dispatch:function(a){a=n.event.fix(a);var b,c,e,f,g,h=[],i=d.call(arguments),j=(L.get(this,"events")||{})[a.type]||[],k=n.event.special[a.type]||{};if(i[0]=a,a.delegateTarget=this,!k.preDispatch||k.preDispatch.call(this,a)!==!1){h=n.event.handlers.call(this,a,j),b=0;while((f=h[b++])&&!a.isPropagationStopped()){a.currentTarget=f.elem,c=0;while((g=f.handlers[c++])&&!a.isImmediatePropagationStopped())(!a.namespace_re||a.namespace_re.test(g.namespace))&&(a.handleObj=g,a.data=g.data,e=((n.event.special[g.origType]||{}).handle||g.handler).apply(f.elem,i),void 0!==e&&(a.result=e)===!1&&(a.preventDefault(),a.stopPropagation()))}return k.postDispatch&&k.postDispatch.call(this,a),a.result}},handlers:function(a,b){var c,d,e,f,g=[],h=b.delegateCount,i=a.target;if(h&&i.nodeType&&(!a.button||"click"!==a.type))for(;i!==this;i=i.parentNode||this)if(i.disabled!==!0||"click"!==a.type){for(d=[],c=0;h>c;c++)f=b[c],e=f.selector+" ",void 0===d[e]&&(d[e]=f.needsContext?n(e,this).index(i)>=0:n.find(e,this,null,[i]).length),d[e]&&d.push(f);d.length&&g.push({elem:i,handlers:d})}return h<b.length&&g.push({elem:this,handlers:b.slice(h)}),g},props:"altKey bubbles cancelable ctrlKey currentTarget eventPhase metaKey relatedTarget shiftKey target timeStamp view which".split(" "),fixHooks:{},keyHooks:{props:"char charCode key keyCode".split(" "),filter:function(a,b){return null==a.which&&(a.which=null!=b.charCode?b.charCode:b.keyCode),a}},mouseHooks:{props:"button buttons clientX clientY offsetX offsetY pageX pageY screenX screenY toElement".split(" "),filter:function(a,b){var c,d,e,f=b.button;return null==a.pageX&&null!=b.clientX&&(c=a.target.ownerDocument||l,d=c.documentElement,e=c.body,a.pageX=b.clientX+(d&&d.scrollLeft||e&&e.scrollLeft||0)-(d&&d.clientLeft||e&&e.clientLeft||0),a.pageY=b.clientY+(d&&d.scrollTop||e&&e.scrollTop||0)-(d&&d.clientTop||e&&e.clientTop||0)),a.which||void 0===f||(a.which=1&f?1:2&f?3:4&f?2:0),a}},fix:function(a){if(a[n.expando])return a;var b,c,d,e=a.type,f=a,g=this.fixHooks[e];g||(this.fixHooks[e]=g=W.test(e)?this.mouseHooks:V.test(e)?this.keyHooks:{}),d=g.props?this.props.concat(g.props):this.props,a=new n.Event(f),b=d.length;while(b--)c=d[b],a[c]=f[c];return a.target||(a.target=l),3===a.target.nodeType&&(a.target=a.target.parentNode),g.filter?g.filter(a,f):a},special:{load:{noBubble:!0},focus:{trigger:function(){return this!==_()&&this.focus?(this.focus(),!1):void 0},delegateType:"focusin"},blur:{trigger:function(){return this===_()&&this.blur?(this.blur(),!1):void 0},delegateType:"focusout"},click:{trigger:function(){return"checkbox"===this.type&&this.click&&n.nodeName(this,"input")?(this.click(),!1):void 0},_default:function(a){return n.nodeName(a.target,"a")}},beforeunload:{postDispatch:function(a){void 0!==a.result&&a.originalEvent&&(a.originalEvent.returnValue=a.result)}}},simulate:function(a,b,c,d){var e=n.extend(new n.Event,c,{type:a,isSimulated:!0,originalEvent:{}});d?n.event.trigger(e,null,b):n.event.dispatch.call(b,e),e.isDefaultPrevented()&&c.preventDefault()}},n.removeEvent=function(a,b,c){a.removeEventListener&&a.removeEventListener(b,c,!1)},n.Event=function(a,b){return this instanceof n.Event?(a&&a.type?(this.originalEvent=a,this.type=a.type,this.isDefaultPrevented=a.defaultPrevented||void 0===a.defaultPrevented&&a.returnValue===!1?Z:$):this.type=a,b&&n.extend(this,b),this.timeStamp=a&&a.timeStamp||n.now(),void(this[n.expando]=!0)):new n.Event(a,b)},n.Event.prototype={isDefaultPrevented:$,isPropagationStopped:$,isImmediatePropagationStopped:$,preventDefault:function(){var a=this.originalEvent;this.isDefaultPrevented=Z,a&&a.preventDefault&&a.preventDefault()},stopPropagation:function(){var a=this.originalEvent;this.isPropagationStopped=Z,a&&a.stopPropagation&&a.stopPropagation()},stopImmediatePropagation:function(){var a=this.originalEvent;this.isImmediatePropagationStopped=Z,a&&a.stopImmediatePropagation&&a.stopImmediatePropagation(),this.stopPropagation()}},n.each({mouseenter:"mouseover",mouseleave:"mouseout",pointerenter:"pointerover",pointerleave:"pointerout"},function(a,b){n.event.special[a]={delegateType:b,bindType:b,handle:function(a){var c,d=this,e=a.relatedTarget,f=a.handleObj;return(!e||e!==d&&!n.contains(d,e))&&(a.type=f.origType,c=f.handler.apply(this,arguments),a.type=b),c}}}),k.focusinBubbles||n.each({focus:"focusin",blur:"focusout"},function(a,b){var c=function(a){n.event.simulate(b,a.target,n.event.fix(a),!0)};n.event.special[b]={setup:function(){var d=this.ownerDocument||this,e=L.access(d,b);e||d.addEventListener(a,c,!0),L.access(d,b,(e||0)+1)},teardown:function(){var d=this.ownerDocument||this,e=L.access(d,b)-1;e?L.access(d,b,e):(d.removeEventListener(a,c,!0),L.remove(d,b))}}}),n.fn.extend({on:function(a,b,c,d,e){var f,g;if("object"==typeof a){"string"!=typeof b&&(c=c||b,b=void 0);for(g in a)this.on(g,b,c,a[g],e);return this}if(null==c&&null==d?(d=b,c=b=void 0):null==d&&("string"==typeof b?(d=c,c=void 0):(d=c,c=b,b=void 0)),d===!1)d=$;else if(!d)return this;return 1===e&&(f=d,d=function(a){return n().off(a),f.apply(this,arguments)},d.guid=f.guid||(f.guid=n.guid++)),this.each(function(){n.event.add(this,a,d,c,b)})},one:function(a,b,c,d){return this.on(a,b,c,d,1)},off:function(a,b,c){var d,e;if(a&&a.preventDefault&&a.handleObj)return d=a.handleObj,n(a.delegateTarget).off(d.namespace?d.origType+"."+d.namespace:d.origType,d.selector,d.handler),this;if("object"==typeof a){for(e in a)this.off(e,b,a[e]);return this}return(b===!1||"function"==typeof b)&&(c=b,b=void 0),c===!1&&(c=$),this.each(function(){n.event.remove(this,a,c,b)})},trigger:function(a,b){return this.each(function(){n.event.trigger(a,b,this)})},triggerHandler:function(a,b){var c=this[0];return c?n.event.trigger(a,b,c,!0):void 0}});var aa=/<(?!area|br|col|embed|hr|img|input|link|meta|param)(([\w:]+)[^>]*)\/>/gi,ba=/<([\w:]+)/,ca=/<|&#?\w+;/,da=/<(?:script|style|link)/i,ea=/checked\s*(?:[^=]|=\s*.checked.)/i,fa=/^$|\/(?:java|ecma)script/i,ga=/^true\/(.*)/,ha=/^\s*<!(?:\[CDATA\[|--)|(?:\]\]|--)>\s*$/g,ia={option:[1,"<select multiple='multiple'>","</select>"],thead:[1,"<table>","</table>"],col:[2,"<table><colgroup>","</colgroup></table>"],tr:[2,"<table><tbody>","</tbody></table>"],td:[3,"<table><tbody><tr>","</tr></tbody></table>"],_default:[0,"",""]};ia.optgroup=ia.option,ia.tbody=ia.tfoot=ia.colgroup=ia.caption=ia.thead,ia.th=ia.td;function ja(a,b){return n.nodeName(a,"table")&&n.nodeName(11!==b.nodeType?b:b.firstChild,"tr")?a.getElementsByTagName("tbody")[0]||a.appendChild(a.ownerDocument.createElement("tbody")):a}function ka(a){return a.type=(null!==a.getAttribute("type"))+"/"+a.type,a}function la(a){var b=ga.exec(a.type);return b?a.type=b[1]:a.removeAttribute("type"),a}function ma(a,b){for(var c=0,d=a.length;d>c;c++)L.set(a[c],"globalEval",!b||L.get(b[c],"globalEval"))}function na(a,b){var c,d,e,f,g,h,i,j;if(1===b.nodeType){if(L.hasData(a)&&(f=L.access(a),g=L.set(b,f),j=f.events)){delete g.handle,g.events={};for(e in j)for(c=0,d=j[e].length;d>c;c++)n.event.add(b,e,j[e][c])}M.hasData(a)&&(h=M.access(a),i=n.extend({},h),M.set(b,i))}}function oa(a,b){var c=a.getElementsByTagName?a.getElementsByTagName(b||"*"):a.querySelectorAll?a.querySelectorAll(b||"*"):[];return void 0===b||b&&n.nodeName(a,b)?n.merge([a],c):c}function pa(a,b){var c=b.nodeName.toLowerCase();"input"===c&&T.test(a.type)?b.checked=a.checked:("input"===c||"textarea"===c)&&(b.defaultValue=a.defaultValue)}n.extend({clone:function(a,b,c){var d,e,f,g,h=a.cloneNode(!0),i=n.contains(a.ownerDocument,a);if(!(k.noCloneChecked||1!==a.nodeType&&11!==a.nodeType||n.isXMLDoc(a)))for(g=oa(h),f=oa(a),d=0,e=f.length;e>d;d++)pa(f[d],g[d]);if(b)if(c)for(f=f||oa(a),g=g||oa(h),d=0,e=f.length;e>d;d++)na(f[d],g[d]);else na(a,h);return g=oa(h,"script"),g.length>0&&ma(g,!i&&oa(a,"script")),h},buildFragment:function(a,b,c,d){for(var e,f,g,h,i,j,k=b.createDocumentFragment(),l=[],m=0,o=a.length;o>m;m++)if(e=a[m],e||0===e)if("object"===n.type(e))n.merge(l,e.nodeType?[e]:e);else if(ca.test(e)){f=f||k.appendChild(b.createElement("div")),g=(ba.exec(e)||["",""])[1].toLowerCase(),h=ia[g]||ia._default,f.innerHTML=h[1]+e.replace(aa,"<$1></$2>")+h[2],j=h[0];while(j--)f=f.lastChild;n.merge(l,f.childNodes),f=k.firstChild,f.textContent=""}else l.push(b.createTextNode(e));k.textContent="",m=0;while(e=l[m++])if((!d||-1===n.inArray(e,d))&&(i=n.contains(e.ownerDocument,e),f=oa(k.appendChild(e),"script"),i&&ma(f),c)){j=0;while(e=f[j++])fa.test(e.type||"")&&c.push(e)}return k},cleanData:function(a){for(var b,c,d,e,f=n.event.special,g=0;void 0!==(c=a[g]);g++){if(n.acceptData(c)&&(e=c[L.expando],e&&(b=L.cache[e]))){if(b.events)for(d in b.events)f[d]?n.event.remove(c,d):n.removeEvent(c,d,b.handle);L.cache[e]&&delete L.cache[e]}delete M.cache[c[M.expando]]}}}),n.fn.extend({text:function(a){return J(this,function(a){return void 0===a?n.text(this):this.empty().each(function(){(1===this.nodeType||11===this.nodeType||9===this.nodeType)&&(this.textContent=a)})},null,a,arguments.length)},append:function(){return this.domManip(arguments,function(a){if(1===this.nodeType||11===this.nodeType||9===this.nodeType){var b=ja(this,a);b.appendChild(a)}})},prepend:function(){return this.domManip(arguments,function(a){if(1===this.nodeType||11===this.nodeType||9===this.nodeType){var b=ja(this,a);b.insertBefore(a,b.firstChild)}})},before:function(){return this.domManip(arguments,function(a){this.parentNode&&this.parentNode.insertBefore(a,this)})},after:function(){return this.domManip(arguments,function(a){this.parentNode&&this.parentNode.insertBefore(a,this.nextSibling)})},remove:function(a,b){for(var c,d=a?n.filter(a,this):this,e=0;null!=(c=d[e]);e++)b||1!==c.nodeType||n.cleanData(oa(c)),c.parentNode&&(b&&n.contains(c.ownerDocument,c)&&ma(oa(c,"script")),c.parentNode.removeChild(c));return this},empty:function(){for(var a,b=0;null!=(a=this[b]);b++)1===a.nodeType&&(n.cleanData(oa(a,!1)),a.textContent="");return this},clone:function(a,b){return a=null==a?!1:a,b=null==b?a:b,this.map(function(){return n.clone(this,a,b)})},html:function(a){return J(this,function(a){var b=this[0]||{},c=0,d=this.length;if(void 0===a&&1===b.nodeType)return b.innerHTML;if("string"==typeof a&&!da.test(a)&&!ia[(ba.exec(a)||["",""])[1].toLowerCase()]){a=a.replace(aa,"<$1></$2>");try{for(;d>c;c++)b=this[c]||{},1===b.nodeType&&(n.cleanData(oa(b,!1)),b.innerHTML=a);b=0}catch(e){}}b&&this.empty().append(a)},null,a,arguments.length)},replaceWith:function(){var a=arguments[0];return this.domManip(arguments,function(b){a=this.parentNode,n.cleanData(oa(this)),a&&a.replaceChild(b,this)}),a&&(a.length||a.nodeType)?this:this.remove()},detach:function(a){return this.remove(a,!0)},domManip:function(a,b){a=e.apply([],a);var c,d,f,g,h,i,j=0,l=this.length,m=this,o=l-1,p=a[0],q=n.isFunction(p);if(q||l>1&&"string"==typeof p&&!k.checkClone&&ea.test(p))return this.each(function(c){var d=m.eq(c);q&&(a[0]=p.call(this,c,d.html())),d.domManip(a,b)});if(l&&(c=n.buildFragment(a,this[0].ownerDocument,!1,this),d=c.firstChild,1===c.childNodes.length&&(c=d),d)){for(f=n.map(oa(c,"script"),ka),g=f.length;l>j;j++)h=c,j!==o&&(h=n.clone(h,!0,!0),g&&n.merge(f,oa(h,"script"))),b.call(this[j],h,j);if(g)for(i=f[f.length-1].ownerDocument,n.map(f,la),j=0;g>j;j++)h=f[j],fa.test(h.type||"")&&!L.access(h,"globalEval")&&n.contains(i,h)&&(h.src?n._evalUrl&&n._evalUrl(h.src):n.globalEval(h.textContent.replace(ha,"")))}return this}}),n.each({appendTo:"append",prependTo:"prepend",insertBefore:"before",insertAfter:"after",replaceAll:"replaceWith"},function(a,b){n.fn[a]=function(a){for(var c,d=[],e=n(a),g=e.length-1,h=0;g>=h;h++)c=h===g?this:this.clone(!0),n(e[h])[b](c),f.apply(d,c.get());return this.pushStack(d)}});var qa,ra={};function sa(b,c){var d,e=n(c.createElement(b)).appendTo(c.body),f=a.getDefaultComputedStyle&&(d=a.getDefaultComputedStyle(e[0]))?d.display:n.css(e[0],"display");return e.detach(),f}function ta(a){var b=l,c=ra[a];return c||(c=sa(a,b),"none"!==c&&c||(qa=(qa||n("<iframe frameborder='0' width='0' height='0'/>")).appendTo(b.documentElement),b=qa[0].contentDocument,b.write(),b.close(),c=sa(a,b),qa.detach()),ra[a]=c),c}var ua=/^margin/,va=new RegExp("^("+Q+")(?!px)[a-z%]+$","i"),wa=function(b){return b.ownerDocument.defaultView.opener?b.ownerDocument.defaultView.getComputedStyle(b,null):a.getComputedStyle(b,null)};function xa(a,b,c){var d,e,f,g,h=a.style;return c=c||wa(a),c&&(g=c.getPropertyValue(b)||c[b]),c&&(""!==g||n.contains(a.ownerDocument,a)||(g=n.style(a,b)),va.test(g)&&ua.test(b)&&(d=h.width,e=h.minWidth,f=h.maxWidth,h.minWidth=h.maxWidth=h.width=g,g=c.width,h.width=d,h.minWidth=e,h.maxWidth=f)),void 0!==g?g+"":g}function ya(a,b){return{get:function(){return a()?void delete this.get:(this.get=b).apply(this,arguments)}}}!function(){var b,c,d=l.documentElement,e=l.createElement("div"),f=l.createElement("div");if(f.style){f.style.backgroundClip="content-box",f.cloneNode(!0).style.backgroundClip="",k.clearCloneStyle="content-box"===f.style.backgroundClip,e.style.cssText="border:0;width:0;height:0;top:0;left:-9999px;margin-top:1px;position:absolute",e.appendChild(f);function g(){f.style.cssText="-webkit-box-sizing:border-box;-moz-box-sizing:border-box;box-sizing:border-box;display:block;margin-top:1%;top:1%;border:1px;padding:1px;width:4px;position:absolute",f.innerHTML="",d.appendChild(e);var g=a.getComputedStyle(f,null);b="1%"!==g.top,c="4px"===g.width,d.removeChild(e)}a.getComputedStyle&&n.extend(k,{pixelPosition:function(){return g(),b},boxSizingReliable:function(){return null==c&&g(),c},reliableMarginRight:function(){var b,c=f.appendChild(l.createElement("div"));return c.style.cssText=f.style.cssText="-webkit-box-sizing:content-box;-moz-box-sizing:content-box;box-sizing:content-box;display:block;margin:0;border:0;padding:0",c.style.marginRight=c.style.width="0",f.style.width="1px",d.appendChild(e),b=!parseFloat(a.getComputedStyle(c,null).marginRight),d.removeChild(e),f.removeChild(c),b}})}}(),n.swap=function(a,b,c,d){var e,f,g={};for(f in b)g[f]=a.style[f],a.style[f]=b[f];e=c.apply(a,d||[]);for(f in b)a.style[f]=g[f];return e};var za=/^(none|table(?!-c[ea]).+)/,Aa=new RegExp("^("+Q+")(.*)$","i"),Ba=new RegExp("^([+-])=("+Q+")","i"),Ca={position:"absolute",visibility:"hidden",display:"block"},Da={letterSpacing:"0",fontWeight:"400"},Ea=["Webkit","O","Moz","ms"];function Fa(a,b){if(b in a)return b;var c=b[0].toUpperCase()+b.slice(1),d=b,e=Ea.length;while(e--)if(b=Ea[e]+c,b in a)return b;return d}function Ga(a,b,c){var d=Aa.exec(b);return d?Math.max(0,d[1]-(c||0))+(d[2]||"px"):b}function Ha(a,b,c,d,e){for(var f=c===(d?"border":"content")?4:"width"===b?1:0,g=0;4>f;f+=2)"margin"===c&&(g+=n.css(a,c+R[f],!0,e)),d?("content"===c&&(g-=n.css(a,"padding"+R[f],!0,e)),"margin"!==c&&(g-=n.css(a,"border"+R[f]+"Width",!0,e))):(g+=n.css(a,"padding"+R[f],!0,e),"padding"!==c&&(g+=n.css(a,"border"+R[f]+"Width",!0,e)));return g}function Ia(a,b,c){var d=!0,e="width"===b?a.offsetWidth:a.offsetHeight,f=wa(a),g="border-box"===n.css(a,"boxSizing",!1,f);if(0>=e||null==e){if(e=xa(a,b,f),(0>e||null==e)&&(e=a.style[b]),va.test(e))return e;d=g&&(k.boxSizingReliable()||e===a.style[b]),e=parseFloat(e)||0}return e+Ha(a,b,c||(g?"border":"content"),d,f)+"px"}function Ja(a,b){for(var c,d,e,f=[],g=0,h=a.length;h>g;g++)d=a[g],d.style&&(f[g]=L.get(d,"olddisplay"),c=d.style.display,b?(f[g]||"none"!==c||(d.style.display=""),""===d.style.display&&S(d)&&(f[g]=L.access(d,"olddisplay",ta(d.nodeName)))):(e=S(d),"none"===c&&e||L.set(d,"olddisplay",e?c:n.css(d,"display"))));for(g=0;h>g;g++)d=a[g],d.style&&(b&&"none"!==d.style.display&&""!==d.style.display||(d.style.display=b?f[g]||"":"none"));return a}n.extend({cssHooks:{opacity:{get:function(a,b){if(b){var c=xa(a,"opacity");return""===c?"1":c}}}},cssNumber:{columnCount:!0,fillOpacity:!0,flexGrow:!0,flexShrink:!0,fontWeight:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,widows:!0,zIndex:!0,zoom:!0},cssProps:{"float":"cssFloat"},style:function(a,b,c,d){if(a&&3!==a.nodeType&&8!==a.nodeType&&a.style){var e,f,g,h=n.camelCase(b),i=a.style;return b=n.cssProps[h]||(n.cssProps[h]=Fa(i,h)),g=n.cssHooks[b]||n.cssHooks[h],void 0===c?g&&"get"in g&&void 0!==(e=g.get(a,!1,d))?e:i[b]:(f=typeof c,"string"===f&&(e=Ba.exec(c))&&(c=(e[1]+1)*e[2]+parseFloat(n.css(a,b)),f="number"),null!=c&&c===c&&("number"!==f||n.cssNumber[h]||(c+="px"),k.clearCloneStyle||""!==c||0!==b.indexOf("background")||(i[b]="inherit"),g&&"set"in g&&void 0===(c=g.set(a,c,d))||(i[b]=c)),void 0)}},css:function(a,b,c,d){var e,f,g,h=n.camelCase(b);return b=n.cssProps[h]||(n.cssProps[h]=Fa(a.style,h)),g=n.cssHooks[b]||n.cssHooks[h],g&&"get"in g&&(e=g.get(a,!0,c)),void 0===e&&(e=xa(a,b,d)),"normal"===e&&b in Da&&(e=Da[b]),""===c||c?(f=parseFloat(e),c===!0||n.isNumeric(f)?f||0:e):e}}),n.each(["height","width"],function(a,b){n.cssHooks[b]={get:function(a,c,d){return c?za.test(n.css(a,"display"))&&0===a.offsetWidth?n.swap(a,Ca,function(){return Ia(a,b,d)}):Ia(a,b,d):void 0},set:function(a,c,d){var e=d&&wa(a);return Ga(a,c,d?Ha(a,b,d,"border-box"===n.css(a,"boxSizing",!1,e),e):0)}}}),n.cssHooks.marginRight=ya(k.reliableMarginRight,function(a,b){return b?n.swap(a,{display:"inline-block"},xa,[a,"marginRight"]):void 0}),n.each({margin:"",padding:"",border:"Width"},function(a,b){n.cssHooks[a+b]={expand:function(c){for(var d=0,e={},f="string"==typeof c?c.split(" "):[c];4>d;d++)e[a+R[d]+b]=f[d]||f[d-2]||f[0];return e}},ua.test(a)||(n.cssHooks[a+b].set=Ga)}),n.fn.extend({css:function(a,b){return J(this,function(a,b,c){var d,e,f={},g=0;if(n.isArray(b)){for(d=wa(a),e=b.length;e>g;g++)f[b[g]]=n.css(a,b[g],!1,d);return f}return void 0!==c?n.style(a,b,c):n.css(a,b)},a,b,arguments.length>1)},show:function(){return Ja(this,!0)},hide:function(){return Ja(this)},toggle:function(a){return"boolean"==typeof a?a?this.show():this.hide():this.each(function(){S(this)?n(this).show():n(this).hide()})}});function Ka(a,b,c,d,e){return new Ka.prototype.init(a,b,c,d,e)}n.Tween=Ka,Ka.prototype={constructor:Ka,init:function(a,b,c,d,e,f){this.elem=a,this.prop=c,this.easing=e||"swing",this.options=b,this.start=this.now=this.cur(),this.end=d,this.unit=f||(n.cssNumber[c]?"":"px")},cur:function(){var a=Ka.propHooks[this.prop];return a&&a.get?a.get(this):Ka.propHooks._default.get(this)},run:function(a){var b,c=Ka.propHooks[this.prop];return this.options.duration?this.pos=b=n.easing[this.easing](a,this.options.duration*a,0,1,this.options.duration):this.pos=b=a,this.now=(this.end-this.start)*b+this.start,this.options.step&&this.options.step.call(this.elem,this.now,this),c&&c.set?c.set(this):Ka.propHooks._default.set(this),this}},Ka.prototype.init.prototype=Ka.prototype,Ka.propHooks={_default:{get:function(a){var b;return null==a.elem[a.prop]||a.elem.style&&null!=a.elem.style[a.prop]?(b=n.css(a.elem,a.prop,""),b&&"auto"!==b?b:0):a.elem[a.prop]},set:function(a){n.fx.step[a.prop]?n.fx.step[a.prop](a):a.elem.style&&(null!=a.elem.style[n.cssProps[a.prop]]||n.cssHooks[a.prop])?n.style(a.elem,a.prop,a.now+a.unit):a.elem[a.prop]=a.now}}},Ka.propHooks.scrollTop=Ka.propHooks.scrollLeft={set:function(a){a.elem.nodeType&&a.elem.parentNode&&(a.elem[a.prop]=a.now)}},n.easing={linear:function(a){return a},swing:function(a){return.5-Math.cos(a*Math.PI)/2}},n.fx=Ka.prototype.init,n.fx.step={};var La,Ma,Na=/^(?:toggle|show|hide)$/,Oa=new RegExp("^(?:([+-])=|)("+Q+")([a-z%]*)$","i"),Pa=/queueHooks$/,Qa=[Va],Ra={"*":[function(a,b){var c=this.createTween(a,b),d=c.cur(),e=Oa.exec(b),f=e&&e[3]||(n.cssNumber[a]?"":"px"),g=(n.cssNumber[a]||"px"!==f&&+d)&&Oa.exec(n.css(c.elem,a)),h=1,i=20;if(g&&g[3]!==f){f=f||g[3],e=e||[],g=+d||1;do h=h||".5",g/=h,n.style(c.elem,a,g+f);while(h!==(h=c.cur()/d)&&1!==h&&--i)}return e&&(g=c.start=+g||+d||0,c.unit=f,c.end=e[1]?g+(e[1]+1)*e[2]:+e[2]),c}]};function Sa(){return setTimeout(function(){La=void 0}),La=n.now()}function Ta(a,b){var c,d=0,e={height:a};for(b=b?1:0;4>d;d+=2-b)c=R[d],e["margin"+c]=e["padding"+c]=a;return b&&(e.opacity=e.width=a),e}function Ua(a,b,c){for(var d,e=(Ra[b]||[]).concat(Ra["*"]),f=0,g=e.length;g>f;f++)if(d=e[f].call(c,b,a))return d}function Va(a,b,c){var d,e,f,g,h,i,j,k,l=this,m={},o=a.style,p=a.nodeType&&S(a),q=L.get(a,"fxshow");c.queue||(h=n._queueHooks(a,"fx"),null==h.unqueued&&(h.unqueued=0,i=h.empty.fire,h.empty.fire=function(){h.unqueued||i()}),h.unqueued++,l.always(function(){l.always(function(){h.unqueued--,n.queue(a,"fx").length||h.empty.fire()})})),1===a.nodeType&&("height"in b||"width"in b)&&(c.overflow=[o.overflow,o.overflowX,o.overflowY],j=n.css(a,"display"),k="none"===j?L.get(a,"olddisplay")||ta(a.nodeName):j,"inline"===k&&"none"===n.css(a,"float")&&(o.display="inline-block")),c.overflow&&(o.overflow="hidden",l.always(function(){o.overflow=c.overflow[0],o.overflowX=c.overflow[1],o.overflowY=c.overflow[2]}));for(d in b)if(e=b[d],Na.exec(e)){if(delete b[d],f=f||"toggle"===e,e===(p?"hide":"show")){if("show"!==e||!q||void 0===q[d])continue;p=!0}m[d]=q&&q[d]||n.style(a,d)}else j=void 0;if(n.isEmptyObject(m))"inline"===("none"===j?ta(a.nodeName):j)&&(o.display=j);else{q?"hidden"in q&&(p=q.hidden):q=L.access(a,"fxshow",{}),f&&(q.hidden=!p),p?n(a).show():l.done(function(){n(a).hide()}),l.done(function(){var b;L.remove(a,"fxshow");for(b in m)n.style(a,b,m[b])});for(d in m)g=Ua(p?q[d]:0,d,l),d in q||(q[d]=g.start,p&&(g.end=g.start,g.start="width"===d||"height"===d?1:0))}}function Wa(a,b){var c,d,e,f,g;for(c in a)if(d=n.camelCase(c),e=b[d],f=a[c],n.isArray(f)&&(e=f[1],f=a[c]=f[0]),c!==d&&(a[d]=f,delete a[c]),g=n.cssHooks[d],g&&"expand"in g){f=g.expand(f),delete a[d];for(c in f)c in a||(a[c]=f[c],b[c]=e)}else b[d]=e}function Xa(a,b,c){var d,e,f=0,g=Qa.length,h=n.Deferred().always(function(){delete i.elem}),i=function(){if(e)return!1;for(var b=La||Sa(),c=Math.max(0,j.startTime+j.duration-b),d=c/j.duration||0,f=1-d,g=0,i=j.tweens.length;i>g;g++)j.tweens[g].run(f);return h.notifyWith(a,[j,f,c]),1>f&&i?c:(h.resolveWith(a,[j]),!1)},j=h.promise({elem:a,props:n.extend({},b),opts:n.extend(!0,{specialEasing:{}},c),originalProperties:b,originalOptions:c,startTime:La||Sa(),duration:c.duration,tweens:[],createTween:function(b,c){var d=n.Tween(a,j.opts,b,c,j.opts.specialEasing[b]||j.opts.easing);return j.tweens.push(d),d},stop:function(b){var c=0,d=b?j.tweens.length:0;if(e)return this;for(e=!0;d>c;c++)j.tweens[c].run(1);return b?h.resolveWith(a,[j,b]):h.rejectWith(a,[j,b]),this}}),k=j.props;for(Wa(k,j.opts.specialEasing);g>f;f++)if(d=Qa[f].call(j,a,k,j.opts))return d;return n.map(k,Ua,j),n.isFunction(j.opts.start)&&j.opts.start.call(a,j),n.fx.timer(n.extend(i,{elem:a,anim:j,queue:j.opts.queue})),j.progress(j.opts.progress).done(j.opts.done,j.opts.complete).fail(j.opts.fail).always(j.opts.always)}n.Animation=n.extend(Xa,{tweener:function(a,b){n.isFunction(a)?(b=a,a=["*"]):a=a.split(" ");for(var c,d=0,e=a.length;e>d;d++)c=a[d],Ra[c]=Ra[c]||[],Ra[c].unshift(b)},prefilter:function(a,b){b?Qa.unshift(a):Qa.push(a)}}),n.speed=function(a,b,c){var d=a&&"object"==typeof a?n.extend({},a):{complete:c||!c&&b||n.isFunction(a)&&a,duration:a,easing:c&&b||b&&!n.isFunction(b)&&b};return d.duration=n.fx.off?0:"number"==typeof d.duration?d.duration:d.duration in n.fx.speeds?n.fx.speeds[d.duration]:n.fx.speeds._default,(null==d.queue||d.queue===!0)&&(d.queue="fx"),d.old=d.complete,d.complete=function(){n.isFunction(d.old)&&d.old.call(this),d.queue&&n.dequeue(this,d.queue)},d},n.fn.extend({fadeTo:function(a,b,c,d){return this.filter(S).css("opacity",0).show().end().animate({opacity:b},a,c,d)},animate:function(a,b,c,d){var e=n.isEmptyObject(a),f=n.speed(b,c,d),g=function(){var b=Xa(this,n.extend({},a),f);(e||L.get(this,"finish"))&&b.stop(!0)};return g.finish=g,e||f.queue===!1?this.each(g):this.queue(f.queue,g)},stop:function(a,b,c){var d=function(a){var b=a.stop;delete a.stop,b(c)};return"string"!=typeof a&&(c=b,b=a,a=void 0),b&&a!==!1&&this.queue(a||"fx",[]),this.each(function(){var b=!0,e=null!=a&&a+"queueHooks",f=n.timers,g=L.get(this);if(e)g[e]&&g[e].stop&&d(g[e]);else for(e in g)g[e]&&g[e].stop&&Pa.test(e)&&d(g[e]);for(e=f.length;e--;)f[e].elem!==this||null!=a&&f[e].queue!==a||(f[e].anim.stop(c),b=!1,f.splice(e,1));(b||!c)&&n.dequeue(this,a)})},finish:function(a){return a!==!1&&(a=a||"fx"),this.each(function(){var b,c=L.get(this),d=c[a+"queue"],e=c[a+"queueHooks"],f=n.timers,g=d?d.length:0;for(c.finish=!0,n.queue(this,a,[]),e&&e.stop&&e.stop.call(this,!0),b=f.length;b--;)f[b].elem===this&&f[b].queue===a&&(f[b].anim.stop(!0),f.splice(b,1));for(b=0;g>b;b++)d[b]&&d[b].finish&&d[b].finish.call(this);delete c.finish})}}),n.each(["toggle","show","hide"],function(a,b){var c=n.fn[b];n.fn[b]=function(a,d,e){return null==a||"boolean"==typeof a?c.apply(this,arguments):this.animate(Ta(b,!0),a,d,e)}}),n.each({slideDown:Ta("show"),slideUp:Ta("hide"),slideToggle:Ta("toggle"),fadeIn:{opacity:"show"},fadeOut:{opacity:"hide"},fadeToggle:{opacity:"toggle"}},function(a,b){n.fn[a]=function(a,c,d){return this.animate(b,a,c,d)}}),n.timers=[],n.fx.tick=function(){var a,b=0,c=n.timers;for(La=n.now();b<c.length;b++)a=c[b],a()||c[b]!==a||c.splice(b--,1);c.length||n.fx.stop(),La=void 0},n.fx.timer=function(a){n.timers.push(a),a()?n.fx.start():n.timers.pop()},n.fx.interval=13,n.fx.start=function(){Ma||(Ma=setInterval(n.fx.tick,n.fx.interval))},n.fx.stop=function(){clearInterval(Ma),Ma=null},n.fx.speeds={slow:600,fast:200,_default:400},n.fn.delay=function(a,b){return a=n.fx?n.fx.speeds[a]||a:a,b=b||"fx",this.queue(b,function(b,c){var d=setTimeout(b,a);c.stop=function(){clearTimeout(d)}})},function(){var a=l.createElement("input"),b=l.createElement("select"),c=b.appendChild(l.createElement("option"));a.type="checkbox",k.checkOn=""!==a.value,k.optSelected=c.selected,b.disabled=!0,k.optDisabled=!c.disabled,a=l.createElement("input"),a.value="t",a.type="radio",k.radioValue="t"===a.value}();var Ya,Za,$a=n.expr.attrHandle;n.fn.extend({attr:function(a,b){return J(this,n.attr,a,b,arguments.length>1)},removeAttr:function(a){return this.each(function(){n.removeAttr(this,a)})}}),n.extend({attr:function(a,b,c){var d,e,f=a.nodeType;if(a&&3!==f&&8!==f&&2!==f)return typeof a.getAttribute===U?n.prop(a,b,c):(1===f&&n.isXMLDoc(a)||(b=b.toLowerCase(),d=n.attrHooks[b]||(n.expr.match.bool.test(b)?Za:Ya)),
    void 0===c?d&&"get"in d&&null!==(e=d.get(a,b))?e:(e=n.find.attr(a,b),null==e?void 0:e):null!==c?d&&"set"in d&&void 0!==(e=d.set(a,c,b))?e:(a.setAttribute(b,c+""),c):void n.removeAttr(a,b))},removeAttr:function(a,b){var c,d,e=0,f=b&&b.match(E);if(f&&1===a.nodeType)while(c=f[e++])d=n.propFix[c]||c,n.expr.match.bool.test(c)&&(a[d]=!1),a.removeAttribute(c)},attrHooks:{type:{set:function(a,b){if(!k.radioValue&&"radio"===b&&n.nodeName(a,"input")){var c=a.value;return a.setAttribute("type",b),c&&(a.value=c),b}}}}}),Za={set:function(a,b,c){return b===!1?n.removeAttr(a,c):a.setAttribute(c,c),c}},n.each(n.expr.match.bool.source.match(/\w+/g),function(a,b){var c=$a[b]||n.find.attr;$a[b]=function(a,b,d){var e,f;return d||(f=$a[b],$a[b]=e,e=null!=c(a,b,d)?b.toLowerCase():null,$a[b]=f),e}});var _a=/^(?:input|select|textarea|button)$/i;n.fn.extend({prop:function(a,b){return J(this,n.prop,a,b,arguments.length>1)},removeProp:function(a){return this.each(function(){delete this[n.propFix[a]||a]})}}),n.extend({propFix:{"for":"htmlFor","class":"className"},prop:function(a,b,c){var d,e,f,g=a.nodeType;if(a&&3!==g&&8!==g&&2!==g)return f=1!==g||!n.isXMLDoc(a),f&&(b=n.propFix[b]||b,e=n.propHooks[b]),void 0!==c?e&&"set"in e&&void 0!==(d=e.set(a,c,b))?d:a[b]=c:e&&"get"in e&&null!==(d=e.get(a,b))?d:a[b]},propHooks:{tabIndex:{get:function(a){return a.hasAttribute("tabindex")||_a.test(a.nodeName)||a.href?a.tabIndex:-1}}}}),k.optSelected||(n.propHooks.selected={get:function(a){var b=a.parentNode;return b&&b.parentNode&&b.parentNode.selectedIndex,null}}),n.each(["tabIndex","readOnly","maxLength","cellSpacing","cellPadding","rowSpan","colSpan","useMap","frameBorder","contentEditable"],function(){n.propFix[this.toLowerCase()]=this});var ab=/[\t\r\n\f]/g;n.fn.extend({addClass:function(a){var b,c,d,e,f,g,h="string"==typeof a&&a,i=0,j=this.length;if(n.isFunction(a))return this.each(function(b){n(this).addClass(a.call(this,b,this.className))});if(h)for(b=(a||"").match(E)||[];j>i;i++)if(c=this[i],d=1===c.nodeType&&(c.className?(" "+c.className+" ").replace(ab," "):" ")){f=0;while(e=b[f++])d.indexOf(" "+e+" ")<0&&(d+=e+" ");g=n.trim(d),c.className!==g&&(c.className=g)}return this},removeClass:function(a){var b,c,d,e,f,g,h=0===arguments.length||"string"==typeof a&&a,i=0,j=this.length;if(n.isFunction(a))return this.each(function(b){n(this).removeClass(a.call(this,b,this.className))});if(h)for(b=(a||"").match(E)||[];j>i;i++)if(c=this[i],d=1===c.nodeType&&(c.className?(" "+c.className+" ").replace(ab," "):"")){f=0;while(e=b[f++])while(d.indexOf(" "+e+" ")>=0)d=d.replace(" "+e+" "," ");g=a?n.trim(d):"",c.className!==g&&(c.className=g)}return this},toggleClass:function(a,b){var c=typeof a;return"boolean"==typeof b&&"string"===c?b?this.addClass(a):this.removeClass(a):this.each(n.isFunction(a)?function(c){n(this).toggleClass(a.call(this,c,this.className,b),b)}:function(){if("string"===c){var b,d=0,e=n(this),f=a.match(E)||[];while(b=f[d++])e.hasClass(b)?e.removeClass(b):e.addClass(b)}else(c===U||"boolean"===c)&&(this.className&&L.set(this,"__className__",this.className),this.className=this.className||a===!1?"":L.get(this,"__className__")||"")})},hasClass:function(a){for(var b=" "+a+" ",c=0,d=this.length;d>c;c++)if(1===this[c].nodeType&&(" "+this[c].className+" ").replace(ab," ").indexOf(b)>=0)return!0;return!1}});var bb=/\r/g;n.fn.extend({val:function(a){var b,c,d,e=this[0];{if(arguments.length)return d=n.isFunction(a),this.each(function(c){var e;1===this.nodeType&&(e=d?a.call(this,c,n(this).val()):a,null==e?e="":"number"==typeof e?e+="":n.isArray(e)&&(e=n.map(e,function(a){return null==a?"":a+""})),b=n.valHooks[this.type]||n.valHooks[this.nodeName.toLowerCase()],b&&"set"in b&&void 0!==b.set(this,e,"value")||(this.value=e))});if(e)return b=n.valHooks[e.type]||n.valHooks[e.nodeName.toLowerCase()],b&&"get"in b&&void 0!==(c=b.get(e,"value"))?c:(c=e.value,"string"==typeof c?c.replace(bb,""):null==c?"":c)}}}),n.extend({valHooks:{option:{get:function(a){var b=n.find.attr(a,"value");return null!=b?b:n.trim(n.text(a))}},select:{get:function(a){for(var b,c,d=a.options,e=a.selectedIndex,f="select-one"===a.type||0>e,g=f?null:[],h=f?e+1:d.length,i=0>e?h:f?e:0;h>i;i++)if(c=d[i],!(!c.selected&&i!==e||(k.optDisabled?c.disabled:null!==c.getAttribute("disabled"))||c.parentNode.disabled&&n.nodeName(c.parentNode,"optgroup"))){if(b=n(c).val(),f)return b;g.push(b)}return g},set:function(a,b){var c,d,e=a.options,f=n.makeArray(b),g=e.length;while(g--)d=e[g],(d.selected=n.inArray(d.value,f)>=0)&&(c=!0);return c||(a.selectedIndex=-1),f}}}}),n.each(["radio","checkbox"],function(){n.valHooks[this]={set:function(a,b){return n.isArray(b)?a.checked=n.inArray(n(a).val(),b)>=0:void 0}},k.checkOn||(n.valHooks[this].get=function(a){return null===a.getAttribute("value")?"on":a.value})}),n.each("blur focus focusin focusout load resize scroll unload click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select submit keydown keypress keyup error contextmenu".split(" "),function(a,b){n.fn[b]=function(a,c){return arguments.length>0?this.on(b,null,a,c):this.trigger(b)}}),n.fn.extend({hover:function(a,b){return this.mouseenter(a).mouseleave(b||a)},bind:function(a,b,c){return this.on(a,null,b,c)},unbind:function(a,b){return this.off(a,null,b)},delegate:function(a,b,c,d){return this.on(b,a,c,d)},undelegate:function(a,b,c){return 1===arguments.length?this.off(a,"**"):this.off(b,a||"**",c)}});var cb=n.now(),db=/\?/;n.parseJSON=function(a){return JSON.parse(a+"")},n.parseXML=function(a){var b,c;if(!a||"string"!=typeof a)return null;try{c=new DOMParser,b=c.parseFromString(a,"text/xml")}catch(d){b=void 0}return(!b||b.getElementsByTagName("parsererror").length)&&n.error("Invalid XML: "+a),b};var eb=/#.*$/,fb=/([?&])_=[^&]*/,gb=/^(.*?):[ \t]*([^\r\n]*)$/gm,hb=/^(?:about|app|app-storage|.+-extension|file|res|widget):$/,ib=/^(?:GET|HEAD)$/,jb=/^\/\//,kb=/^([\w.+-]+:)(?:\/\/(?:[^\/?#]*@|)([^\/?#:]*)(?::(\d+)|)|)/,lb={},mb={},nb="*/".concat("*"),ob=a.location.href,pb=kb.exec(ob.toLowerCase())||[];function qb(a){return function(b,c){"string"!=typeof b&&(c=b,b="*");var d,e=0,f=b.toLowerCase().match(E)||[];if(n.isFunction(c))while(d=f[e++])"+"===d[0]?(d=d.slice(1)||"*",(a[d]=a[d]||[]).unshift(c)):(a[d]=a[d]||[]).push(c)}}function rb(a,b,c,d){var e={},f=a===mb;function g(h){var i;return e[h]=!0,n.each(a[h]||[],function(a,h){var j=h(b,c,d);return"string"!=typeof j||f||e[j]?f?!(i=j):void 0:(b.dataTypes.unshift(j),g(j),!1)}),i}return g(b.dataTypes[0])||!e["*"]&&g("*")}function sb(a,b){var c,d,e=n.ajaxSettings.flatOptions||{};for(c in b)void 0!==b[c]&&((e[c]?a:d||(d={}))[c]=b[c]);return d&&n.extend(!0,a,d),a}function tb(a,b,c){var d,e,f,g,h=a.contents,i=a.dataTypes;while("*"===i[0])i.shift(),void 0===d&&(d=a.mimeType||b.getResponseHeader("Content-Type"));if(d)for(e in h)if(h[e]&&h[e].test(d)){i.unshift(e);break}if(i[0]in c)f=i[0];else{for(e in c){if(!i[0]||a.converters[e+" "+i[0]]){f=e;break}g||(g=e)}f=f||g}return f?(f!==i[0]&&i.unshift(f),c[f]):void 0}function ub(a,b,c,d){var e,f,g,h,i,j={},k=a.dataTypes.slice();if(k[1])for(g in a.converters)j[g.toLowerCase()]=a.converters[g];f=k.shift();while(f)if(a.responseFields[f]&&(c[a.responseFields[f]]=b),!i&&d&&a.dataFilter&&(b=a.dataFilter(b,a.dataType)),i=f,f=k.shift())if("*"===f)f=i;else if("*"!==i&&i!==f){if(g=j[i+" "+f]||j["* "+f],!g)for(e in j)if(h=e.split(" "),h[1]===f&&(g=j[i+" "+h[0]]||j["* "+h[0]])){g===!0?g=j[e]:j[e]!==!0&&(f=h[0],k.unshift(h[1]));break}if(g!==!0)if(g&&a["throws"])b=g(b);else try{b=g(b)}catch(l){return{state:"parsererror",error:g?l:"No conversion from "+i+" to "+f}}}return{state:"success",data:b}}n.extend({active:0,lastModified:{},etag:{},ajaxSettings:{url:ob,type:"GET",isLocal:hb.test(pb[1]),global:!0,processData:!0,async:!0,contentType:"application/x-www-form-urlencoded; charset=UTF-8",accepts:{"*":nb,text:"text/plain",html:"text/html",xml:"application/xml, text/xml",json:"application/json, text/javascript"},contents:{xml:/xml/,html:/html/,json:/json/},responseFields:{xml:"responseXML",text:"responseText",json:"responseJSON"},converters:{"* text":String,"text html":!0,"text json":n.parseJSON,"text xml":n.parseXML},flatOptions:{url:!0,context:!0}},ajaxSetup:function(a,b){return b?sb(sb(a,n.ajaxSettings),b):sb(n.ajaxSettings,a)},ajaxPrefilter:qb(lb),ajaxTransport:qb(mb),ajax:function(a,b){"object"==typeof a&&(b=a,a=void 0),b=b||{};var c,d,e,f,g,h,i,j,k=n.ajaxSetup({},b),l=k.context||k,m=k.context&&(l.nodeType||l.jquery)?n(l):n.event,o=n.Deferred(),p=n.Callbacks("once memory"),q=k.statusCode||{},r={},s={},t=0,u="canceled",v={readyState:0,getResponseHeader:function(a){var b;if(2===t){if(!f){f={};while(b=gb.exec(e))f[b[1].toLowerCase()]=b[2]}b=f[a.toLowerCase()]}return null==b?null:b},getAllResponseHeaders:function(){return 2===t?e:null},setRequestHeader:function(a,b){var c=a.toLowerCase();return t||(a=s[c]=s[c]||a,r[a]=b),this},overrideMimeType:function(a){return t||(k.mimeType=a),this},statusCode:function(a){var b;if(a)if(2>t)for(b in a)q[b]=[q[b],a[b]];else v.always(a[v.status]);return this},abort:function(a){var b=a||u;return c&&c.abort(b),x(0,b),this}};if(o.promise(v).complete=p.add,v.success=v.done,v.error=v.fail,k.url=((a||k.url||ob)+"").replace(eb,"").replace(jb,pb[1]+"//"),k.type=b.method||b.type||k.method||k.type,k.dataTypes=n.trim(k.dataType||"*").toLowerCase().match(E)||[""],null==k.crossDomain&&(h=kb.exec(k.url.toLowerCase()),k.crossDomain=!(!h||h[1]===pb[1]&&h[2]===pb[2]&&(h[3]||("http:"===h[1]?"80":"443"))===(pb[3]||("http:"===pb[1]?"80":"443")))),k.data&&k.processData&&"string"!=typeof k.data&&(k.data=n.param(k.data,k.traditional)),rb(lb,k,b,v),2===t)return v;i=n.event&&k.global,i&&0===n.active++&&n.event.trigger("ajaxStart"),k.type=k.type.toUpperCase(),k.hasContent=!ib.test(k.type),d=k.url,k.hasContent||(k.data&&(d=k.url+=(db.test(d)?"&":"?")+k.data,delete k.data),k.cache===!1&&(k.url=fb.test(d)?d.replace(fb,"$1_="+cb++):d+(db.test(d)?"&":"?")+"_="+cb++)),k.ifModified&&(n.lastModified[d]&&v.setRequestHeader("If-Modified-Since",n.lastModified[d]),n.etag[d]&&v.setRequestHeader("If-None-Match",n.etag[d])),(k.data&&k.hasContent&&k.contentType!==!1||b.contentType)&&v.setRequestHeader("Content-Type",k.contentType),v.setRequestHeader("Accept",k.dataTypes[0]&&k.accepts[k.dataTypes[0]]?k.accepts[k.dataTypes[0]]+("*"!==k.dataTypes[0]?", "+nb+"; q=0.01":""):k.accepts["*"]);for(j in k.headers)v.setRequestHeader(j,k.headers[j]);if(k.beforeSend&&(k.beforeSend.call(l,v,k)===!1||2===t))return v.abort();u="abort";for(j in{success:1,error:1,complete:1})v[j](k[j]);if(c=rb(mb,k,b,v)){v.readyState=1,i&&m.trigger("ajaxSend",[v,k]),k.async&&k.timeout>0&&(g=setTimeout(function(){v.abort("timeout")},k.timeout));try{t=1,c.send(r,x)}catch(w){if(!(2>t))throw w;x(-1,w)}}else x(-1,"No Transport");function x(a,b,f,h){var j,r,s,u,w,x=b;2!==t&&(t=2,g&&clearTimeout(g),c=void 0,e=h||"",v.readyState=a>0?4:0,j=a>=200&&300>a||304===a,f&&(u=tb(k,v,f)),u=ub(k,u,v,j),j?(k.ifModified&&(w=v.getResponseHeader("Last-Modified"),w&&(n.lastModified[d]=w),w=v.getResponseHeader("etag"),w&&(n.etag[d]=w)),204===a||"HEAD"===k.type?x="nocontent":304===a?x="notmodified":(x=u.state,r=u.data,s=u.error,j=!s)):(s=x,(a||!x)&&(x="error",0>a&&(a=0))),v.status=a,v.statusText=(b||x)+"",j?o.resolveWith(l,[r,x,v]):o.rejectWith(l,[v,x,s]),v.statusCode(q),q=void 0,i&&m.trigger(j?"ajaxSuccess":"ajaxError",[v,k,j?r:s]),p.fireWith(l,[v,x]),i&&(m.trigger("ajaxComplete",[v,k]),--n.active||n.event.trigger("ajaxStop")))}return v},getJSON:function(a,b,c){return n.get(a,b,c,"json")},getScript:function(a,b){return n.get(a,void 0,b,"script")}}),n.each(["get","post"],function(a,b){n[b]=function(a,c,d,e){return n.isFunction(c)&&(e=e||d,d=c,c=void 0),n.ajax({url:a,type:b,dataType:e,data:c,success:d})}}),n._evalUrl=function(a){return n.ajax({url:a,type:"GET",dataType:"script",async:!1,global:!1,"throws":!0})},n.fn.extend({wrapAll:function(a){var b;return n.isFunction(a)?this.each(function(b){n(this).wrapAll(a.call(this,b))}):(this[0]&&(b=n(a,this[0].ownerDocument).eq(0).clone(!0),this[0].parentNode&&b.insertBefore(this[0]),b.map(function(){var a=this;while(a.firstElementChild)a=a.firstElementChild;return a}).append(this)),this)},wrapInner:function(a){return this.each(n.isFunction(a)?function(b){n(this).wrapInner(a.call(this,b))}:function(){var b=n(this),c=b.contents();c.length?c.wrapAll(a):b.append(a)})},wrap:function(a){var b=n.isFunction(a);return this.each(function(c){n(this).wrapAll(b?a.call(this,c):a)})},unwrap:function(){return this.parent().each(function(){n.nodeName(this,"body")||n(this).replaceWith(this.childNodes)}).end()}}),n.expr.filters.hidden=function(a){return a.offsetWidth<=0&&a.offsetHeight<=0},n.expr.filters.visible=function(a){return!n.expr.filters.hidden(a)};var vb=/%20/g,wb=/\[\]$/,xb=/\r?\n/g,yb=/^(?:submit|button|image|reset|file)$/i,zb=/^(?:input|select|textarea|keygen)/i;function Ab(a,b,c,d){var e;if(n.isArray(b))n.each(b,function(b,e){c||wb.test(a)?d(a,e):Ab(a+"["+("object"==typeof e?b:"")+"]",e,c,d)});else if(c||"object"!==n.type(b))d(a,b);else for(e in b)Ab(a+"["+e+"]",b[e],c,d)}n.param=function(a,b){var c,d=[],e=function(a,b){b=n.isFunction(b)?b():null==b?"":b,d[d.length]=encodeURIComponent(a)+"="+encodeURIComponent(b)};if(void 0===b&&(b=n.ajaxSettings&&n.ajaxSettings.traditional),n.isArray(a)||a.jquery&&!n.isPlainObject(a))n.each(a,function(){e(this.name,this.value)});else for(c in a)Ab(c,a[c],b,e);return d.join("&").replace(vb,"+")},n.fn.extend({serialize:function(){return n.param(this.serializeArray())},serializeArray:function(){return this.map(function(){var a=n.prop(this,"elements");return a?n.makeArray(a):this}).filter(function(){var a=this.type;return this.name&&!n(this).is(":disabled")&&zb.test(this.nodeName)&&!yb.test(a)&&(this.checked||!T.test(a))}).map(function(a,b){var c=n(this).val();return null==c?null:n.isArray(c)?n.map(c,function(a){return{name:b.name,value:a.replace(xb,"\r\n")}}):{name:b.name,value:c.replace(xb,"\r\n")}}).get()}}),n.ajaxSettings.xhr=function(){try{return new XMLHttpRequest}catch(a){}};var Bb=0,Cb={},Db={0:200,1223:204},Eb=n.ajaxSettings.xhr();a.attachEvent&&a.attachEvent("onunload",function(){for(var a in Cb)Cb[a]()}),k.cors=!!Eb&&"withCredentials"in Eb,k.ajax=Eb=!!Eb,n.ajaxTransport(function(a){var b;return k.cors||Eb&&!a.crossDomain?{send:function(c,d){var e,f=a.xhr(),g=++Bb;if(f.open(a.type,a.url,a.async,a.username,a.password),a.xhrFields)for(e in a.xhrFields)f[e]=a.xhrFields[e];a.mimeType&&f.overrideMimeType&&f.overrideMimeType(a.mimeType),a.crossDomain||c["X-Requested-With"]||(c["X-Requested-With"]="XMLHttpRequest");for(e in c)f.setRequestHeader(e,c[e]);b=function(a){return function(){b&&(delete Cb[g],b=f.onload=f.onerror=null,"abort"===a?f.abort():"error"===a?d(f.status,f.statusText):d(Db[f.status]||f.status,f.statusText,"string"==typeof f.responseText?{text:f.responseText}:void 0,f.getAllResponseHeaders()))}},f.onload=b(),f.onerror=b("error"),b=Cb[g]=b("abort");try{f.send(a.hasContent&&a.data||null)}catch(h){if(b)throw h}},abort:function(){b&&b()}}:void 0}),n.ajaxSetup({accepts:{script:"text/javascript, application/javascript, application/ecmascript, application/x-ecmascript"},contents:{script:/(?:java|ecma)script/},converters:{"text script":function(a){return n.globalEval(a),a}}}),n.ajaxPrefilter("script",function(a){void 0===a.cache&&(a.cache=!1),a.crossDomain&&(a.type="GET")}),n.ajaxTransport("script",function(a){if(a.crossDomain){var b,c;return{send:function(d,e){b=n("<script>").prop({async:!0,charset:a.scriptCharset,src:a.url}).on("load error",c=function(a){b.remove(),c=null,a&&e("error"===a.type?404:200,a.type)}),l.head.appendChild(b[0])},abort:function(){c&&c()}}}});var Fb=[],Gb=/(=)\?(?=&|$)|\?\?/;n.ajaxSetup({jsonp:"callback",jsonpCallback:function(){var a=Fb.pop()||n.expando+"_"+cb++;return this[a]=!0,a}}),n.ajaxPrefilter("json jsonp",function(b,c,d){var e,f,g,h=b.jsonp!==!1&&(Gb.test(b.url)?"url":"string"==typeof b.data&&!(b.contentType||"").indexOf("application/x-www-form-urlencoded")&&Gb.test(b.data)&&"data");return h||"jsonp"===b.dataTypes[0]?(e=b.jsonpCallback=n.isFunction(b.jsonpCallback)?b.jsonpCallback():b.jsonpCallback,h?b[h]=b[h].replace(Gb,"$1"+e):b.jsonp!==!1&&(b.url+=(db.test(b.url)?"&":"?")+b.jsonp+"="+e),b.converters["script json"]=function(){return g||n.error(e+" was not called"),g[0]},b.dataTypes[0]="json",f=a[e],a[e]=function(){g=arguments},d.always(function(){a[e]=f,b[e]&&(b.jsonpCallback=c.jsonpCallback,Fb.push(e)),g&&n.isFunction(f)&&f(g[0]),g=f=void 0}),"script"):void 0}),n.parseHTML=function(a,b,c){if(!a||"string"!=typeof a)return null;"boolean"==typeof b&&(c=b,b=!1),b=b||l;var d=v.exec(a),e=!c&&[];return d?[b.createElement(d[1])]:(d=n.buildFragment([a],b,e),e&&e.length&&n(e).remove(),n.merge([],d.childNodes))};var Hb=n.fn.load;n.fn.load=function(a,b,c){if("string"!=typeof a&&Hb)return Hb.apply(this,arguments);var d,e,f,g=this,h=a.indexOf(" ");return h>=0&&(d=n.trim(a.slice(h)),a=a.slice(0,h)),n.isFunction(b)?(c=b,b=void 0):b&&"object"==typeof b&&(e="POST"),g.length>0&&n.ajax({url:a,type:e,dataType:"html",data:b}).done(function(a){f=arguments,g.html(d?n("<div>").append(n.parseHTML(a)).find(d):a)}).complete(c&&function(a,b){g.each(c,f||[a.responseText,b,a])}),this},n.each(["ajaxStart","ajaxStop","ajaxComplete","ajaxError","ajaxSuccess","ajaxSend"],function(a,b){n.fn[b]=function(a){return this.on(b,a)}}),n.expr.filters.animated=function(a){return n.grep(n.timers,function(b){return a===b.elem}).length};var Ib=a.document.documentElement;function Jb(a){return n.isWindow(a)?a:9===a.nodeType&&a.defaultView}n.offset={setOffset:function(a,b,c){var d,e,f,g,h,i,j,k=n.css(a,"position"),l=n(a),m={};"static"===k&&(a.style.position="relative"),h=l.offset(),f=n.css(a,"top"),i=n.css(a,"left"),j=("absolute"===k||"fixed"===k)&&(f+i).indexOf("auto")>-1,j?(d=l.position(),g=d.top,e=d.left):(g=parseFloat(f)||0,e=parseFloat(i)||0),n.isFunction(b)&&(b=b.call(a,c,h)),null!=b.top&&(m.top=b.top-h.top+g),null!=b.left&&(m.left=b.left-h.left+e),"using"in b?b.using.call(a,m):l.css(m)}},n.fn.extend({offset:function(a){if(arguments.length)return void 0===a?this:this.each(function(b){n.offset.setOffset(this,a,b)});var b,c,d=this[0],e={top:0,left:0},f=d&&d.ownerDocument;if(f)return b=f.documentElement,n.contains(b,d)?(typeof d.getBoundingClientRect!==U&&(e=d.getBoundingClientRect()),c=Jb(f),{top:e.top+c.pageYOffset-b.clientTop,left:e.left+c.pageXOffset-b.clientLeft}):e},position:function(){if(this[0]){var a,b,c=this[0],d={top:0,left:0};return"fixed"===n.css(c,"position")?b=c.getBoundingClientRect():(a=this.offsetParent(),b=this.offset(),n.nodeName(a[0],"html")||(d=a.offset()),d.top+=n.css(a[0],"borderTopWidth",!0),d.left+=n.css(a[0],"borderLeftWidth",!0)),{top:b.top-d.top-n.css(c,"marginTop",!0),left:b.left-d.left-n.css(c,"marginLeft",!0)}}},offsetParent:function(){return this.map(function(){var a=this.offsetParent||Ib;while(a&&!n.nodeName(a,"html")&&"static"===n.css(a,"position"))a=a.offsetParent;return a||Ib})}}),n.each({scrollLeft:"pageXOffset",scrollTop:"pageYOffset"},function(b,c){var d="pageYOffset"===c;n.fn[b]=function(e){return J(this,function(b,e,f){var g=Jb(b);return void 0===f?g?g[c]:b[e]:void(g?g.scrollTo(d?a.pageXOffset:f,d?f:a.pageYOffset):b[e]=f)},b,e,arguments.length,null)}}),n.each(["top","left"],function(a,b){n.cssHooks[b]=ya(k.pixelPosition,function(a,c){return c?(c=xa(a,b),va.test(c)?n(a).position()[b]+"px":c):void 0})}),n.each({Height:"height",Width:"width"},function(a,b){n.each({padding:"inner"+a,content:b,"":"outer"+a},function(c,d){n.fn[d]=function(d,e){var f=arguments.length&&(c||"boolean"!=typeof d),g=c||(d===!0||e===!0?"margin":"border");return J(this,function(b,c,d){var e;return n.isWindow(b)?b.document.documentElement["client"+a]:9===b.nodeType?(e=b.documentElement,Math.max(b.body["scroll"+a],e["scroll"+a],b.body["offset"+a],e["offset"+a],e["client"+a])):void 0===d?n.css(b,c,g):n.style(b,c,d,g)},b,f?d:void 0,f,null)}})}),n.fn.size=function(){return this.length},n.fn.andSelf=n.fn.addBack,"function"==typeof define&&define.amd&&define("jquery",[],function(){return n});var Kb=a.jQuery,Lb=a.$;return n.noConflict=function(b){return a.$===n&&(a.$=Lb),b&&a.jQuery===n&&(a.jQuery=Kb),n},typeof b===U&&(a.jQuery=a.$=n),n});

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
 * Copyright Â© 2008 George McGinley Smith
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
 * Copyright Â© 2001 Robert Penner
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

        // If thereâ€™s no element, return the picker constructor.
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

                    // If itâ€™s already started, do nothing.
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


                    // If thereâ€™s a format for the hidden input element, create the element.
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


                    // Once weâ€™re all set, check the theme in use.
                    IS_DEFAULT_THEME = isUsingDefaultTheme( P.$root.children()[ 0 ] )


                    // If the element has autofocus, open the picker.
                    if ( ELEMENT.autofocus ) {
                        P.open()
                    }


                    // Trigger queued the â€œstartâ€ and â€œrenderâ€ events.
                    return P.trigger( 'start' ).trigger( 'render' )
                }, //start


                /**
                 * Render a new picker
                 */
                render: function( entireComponent ) {

                    // Insert a new component holder in the root or box.
                    if ( entireComponent ) P.$root.html( createWrappedComponent() )
                    else P.$root.find( '.' + CLASSES.box ).html( P.component.nodes( STATE.open ) )

                    // Trigger the queued â€œrenderâ€ events.
                    return P.trigger( 'render' )
                }, //render


                /**
                 * Destroy everything
                 */
                stop: function() {

                    // If itâ€™s already stopped, do nothing.
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

                    // Trigger the queued â€œstopâ€ events.
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

                    // If itâ€™s already open, do nothing.
                    if ( STATE.open ) return P

                    // Add the â€œactiveâ€ class.
                    $ELEMENT.addClass( CLASSES.active )
                    aria( ELEMENT, 'expanded', true )

                    // * A Firefox bug, when `html` has `overflow:hidden`, results in
                    //   killing transitions :(. So add the â€œopenedâ€ state on the next tick.
                    //   Bug: https://bugzilla.mozilla.org/show_bug.cgi?id=625289
                    setTimeout( function() {

                        // Add the â€œopenedâ€ class to the picker root.
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

                        // Pass focus to the root elementâ€™s jQuery object.
                        // * Workaround for iOS8 to bring the pickerâ€™s root into view.
                        P.$root[0].focus()

                        // Bind the document events.
                        $document.on( 'click.' + STATE.id + ' focusin.' + STATE.id, function( event ) {

                            var target = event.target

                            // If the target of the event is not the element, close the picker picker.
                            // * Donâ€™t worry about clicks or focusins on the root because those donâ€™t bubble up.
                            //   Also, for Firefox, a click on an `option` element bubbles up directly
                            //   to the doc. So make sure the target wasn't the doc.
                            // * In Firefox stopPropagation() doesnâ€™t prevent right-click events from bubbling,
                            //   which causes the picker to unexpectedly close when right-clicking it. So make
                            //   sure the event wasnâ€™t a right-click.
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


                            // Check if there is a key movement or â€œenterâ€ keypress on the element.
                            else if ( target == P.$root[0] && ( keycodeToMove || keycode == 13 ) ) {

                                // Prevent the default action to stop page movement.
                                event.preventDefault()

                                // Trigger the key movement action.
                                if ( keycodeToMove ) {
                                    PickerConstructor._.trigger( P.component.key.go, P, [ PickerConstructor._.trigger( keycodeToMove ) ] )
                                }

                                // On â€œenterâ€, if the highlighted item isnâ€™t disabled, set the value and close.
                                else if ( !P.$root.find( '.' + CLASSES.highlighted ).hasClass( CLASSES.disabled ) ) {
                                    P.set( 'select', P.component.item.highlight ).close()
                                }
                            }


                            // If the target is within the root and â€œenterâ€ is pressed,
                            // prevent the default action and trigger a click on the target instead.
                            else if ( $.contains( P.$root[0], target ) && keycode == 13 ) {
                                event.preventDefault()
                                target.click()
                            }
                        })
                    }

                    // Trigger the queued â€œopenâ€ events.
                    return P.trigger( 'open' )
                }, //open


                /**
                 * Close the picker
                 */
                close: function( giveFocus ) {

                    // If we need to give focus, do it before changing states.
                    if ( giveFocus ) {
                        // ....ah yes! It wouldâ€™ve been incomplete without a crazy workaround for IE :|
                        // The focus is triggered *after* the close has completed - causing it
                        // to open again. So unbind and rebind the event at the next tick.
                        P.$root.off( 'focus.toOpen' )[0].focus()
                        setTimeout( function() {
                            P.$root.on( 'focus.toOpen', handleFocusToOpenEvent )
                        }, 0 )
                    }

                    // Remove the â€œactiveâ€ class.
                    $ELEMENT.removeClass( CLASSES.active )
                    aria( ELEMENT, 'expanded', false )

                    // * A Firefox bug, when `html` has `overflow:hidden`, results in
                    //   killing transitions :(. So remove the â€œopenedâ€ state on the next tick.
                    //   Bug: https://bugzilla.mozilla.org/show_bug.cgi?id=625289
                    setTimeout( function() {

                        // Remove the â€œopenedâ€ and â€œfocusedâ€ class from the picker root.
                        P.$root.removeClass( CLASSES.opened + ' ' + CLASSES.focused )
                        aria( P.$root[0], 'hidden', true )

                    }, 0 )

                    // If itâ€™s already closed, do nothing more.
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

                    // Trigger the queued â€œcloseâ€ events.
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

                        // If the thing isnâ€™t an object, make it one.
                        if ( !thingIsObject ) {
                            thingObject[ thing ] = value
                        }

                        // Go through the things of items to set.
                        for ( thingItem in thingObject ) {

                            // Grab the value of the thing.
                            thingValue = thingObject[ thingItem ]

                            // First, if the item exists and thereâ€™s a value, set it.
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

                    // When the method isnâ€™t muted, trigger queued â€œsetâ€ events and pass the `thingObject`.
                    return options.muted ? P : P.trigger( 'set', thingObject )
                }, //set


                /**
                 * Get something
                 */
                get: function( thing, format ) {

                    // Make sure thereâ€™s something to get.
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

                        // If the thing isnâ€™t an object, make it one.
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

            // Add the â€œinputâ€ class name.
            addClass(CLASSES.input).

            // Remove the tabindex.
            attr('tabindex', -1).

            // If thereâ€™s a `data-value`, update the value of the element.
            val( $ELEMENT.data('value') ?
                P.get('select', SETTINGS.format) :
                ELEMENT.value
            )


            // Only bind keydown events if the element isnâ€™t editable.
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
                // to the doc and remove the â€œfocusedâ€ state from the root.
                focusin: function( event ) {
                    P.$root.removeClass( CLASSES.focused )
                    event.stopPropagation()
                },

                // When something within the root holder is clicked, stop it
                // from bubbling to the doc.
                'mousedown click': function( event ) {

                    var target = event.target

                    // Make sure the target isnâ€™t the root holder so it can bubble up.
                    if ( target != P.$root.children()[ 0 ] ) {

                        event.stopPropagation()

                        // * For mousedown events, cancel the default action in order to
                        //   prevent cases where focus is shifted onto external elements
                        //   when using things like jQuery mobile or MagnificPopup (ref: #249 & #120).
                        //   Also, for Firefox, donâ€™t prevent action on the `option` element.
                        if ( event.type == 'mousedown' && !$( target ).is( 'input, select, textarea, button, option' )) {

                            event.preventDefault()

                            // Re-focus onto the root so that users can click away
                            // from elements focused within the picker.
                            P.$root[0].focus()
                        }
                    }
                }
            }).

            // Add/remove the â€œtargetâ€ class on focus and blur.
            on({
                focus: function() {
                    $ELEMENT.addClass( CLASSES.target )
                },
                blur: function() {
                    $ELEMENT.removeClass( CLASSES.target )
                }
            }).

            // Open the picker and adjust the root â€œfocusedâ€ state
            on( 'focus.toOpen', handleFocusToOpenEvent ).

            // If thereâ€™s a click on an actionable element, carry out the actions.
            on( 'click', '[data-pick], [data-nav], [data-clear], [data-close]', function() {

                var $target = $( this ),
                    targetData = $target.data(),
                    targetDisabled = $target.hasClass( CLASSES.navDisabled ) || $target.hasClass( CLASSES.disabled ),

                // * For IE, non-focusable elements can be active elements as well
                //   (http://stackoverflow.com/a/2684561).
                    activeElement = getActiveElement()
                activeElement = activeElement && ( activeElement.type || activeElement.href )

                // If itâ€™s disabled or nothing inside is actively focused, re-focus the element.
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

                // If a â€œclearâ€ button is pressed, empty the values and close with focus.
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

                // Create the name using the original inputâ€™s with a prefix and suffix.
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

            // For some reason IE clears the input value on â€œescapeâ€.
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

            // If itâ€™s a focus event, add the â€œfocusedâ€ class to the root.
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
     * Get the width of the browserâ€™s scrollbar.
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
            // doesnâ€™t exist, create a new picker using `this` element
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

        // When thereâ€™s a value, set the `select`, which in turn
        // also sets the `highlight` and `view`.
        if ( valueString ) {
            calendar.set( 'select', valueString, { format: formatString })
        }

        // If thereâ€™s no value, default to highlighting â€œtodayâ€.
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

        // If thereâ€™s no value, use the type as the value.
        value = value === undefined ? type : value


        // If itâ€™s infinity, update the value.
        if ( value == -Infinity || value == Infinity ) {
            isInfiniteValue = value
        }

        // If itâ€™s an object, use the native date object.
        else if ( $.isPlainObject( value ) && _.isInteger( value.pick ) ) {
            value = value.obj
        }

        // If itâ€™s an array, convert it into a date and make sure
        // that itâ€™s a valid date â€“ otherwise default to today.
        else if ( $.isArray( value ) ) {
            value = new Date( value[ 0 ], value[ 1 ], value[ 2 ] )
            value = _.isDate( value ) ? value : calendar.create().obj
        }

        // If itâ€™s a number or date object, make a normalized date.
        else if ( _.isInteger( value ) || _.isDate( value ) ) {
            value = calendar.normalize( new Date( value ), options )
        }

        // If itâ€™s a literal true or any other case, set it to now.
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
     * literal â€œtrueâ€, or integer relative to another time.
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

            // If weâ€™re navigating months but the view is in a different
            // month, navigate to the viewâ€™s year and month.
            if ( options && options.nav && viewsetObject && viewsetObject.month !== targetMonth ) {
                targetYear = viewsetObject.year
                targetMonth = viewsetObject.month
            }

            // Figure out the expected target year and month.
            targetDateObject = new Date( targetYear, targetMonth + ( options && options.nav ? options.nav : 0 ), 1 )
            targetYear = targetDateObject.getFullYear()
            targetMonth = targetDateObject.getMonth()

            // If the month weâ€™re going to doesnâ€™t have enough days,
            // keep decreasing the date until we reach the monthâ€™s last date.
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

        // If itâ€™s anything false-y, remove the limits.
        if ( !value ) {
            value = type == 'min' ? -Infinity : Infinity
        }

        // If itâ€™s a string, parse it.
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

        // Check if weâ€™ve reached the limit during shifting.
            reachedMin, reachedMax,

        // Check if the calendar is inverted and at least one weekday is enabled.
            hasEnabledWeekdays = isFlippedBase && calendar.item.disable.filter( function( value ) {

                    // If thereâ€™s a date, check where it is relative to the target.
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
        // â€¢ Navigating months.
        // â€¢ Not inverted and date enabled.
        // â€¢ Inverted and all dates disabled.
        // â€¢ ..and anything else.
        if ( !options || !options.nav ) if (
            /* 1 */ ( !isFlippedBase && calendar.disabled( dateObject ) ) ||
        /* 2 */ ( isFlippedBase && calendar.disabled( dateObject ) && ( hasEnabledWeekdays || hasEnabledBeforeTarget || hasEnabledAfterTarget ) ) ||
        /* 3 */ ( !isFlippedBase && (dateObject.pick <= minLimitObject.pick || dateObject.pick >= maxLimitObject.pick) )
        ) {


            // When inverted, flip the direction if there arenâ€™t any enabled weekdays
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


                // If weâ€™ve looped into the next/prev month with a large interval, return to the original date and flatten the interval.
                if ( Math.abs( interval ) > 1 && ( dateObject.month < originalDateObject.month || dateObject.month > originalDateObject.month ) ) {
                    dateObject = originalDateObject
                    interval = interval > 0 ? 1 : -1
                }


                // If weâ€™ve reached the min/max limit, reverse the direction, flatten the interval and set it to the limit.
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


                // If weâ€™ve reached both limits, just break out of the loop.
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

                // If itâ€™s an array or a native JS date, create and match the exact date.
                if ( $.isArray( dateToDisable ) || _.isDate( dateToDisable ) ) {
                    return dateToVerify.pick === calendar.create( dateToDisable ).pick
                }

                // If itâ€™s an object, match a date within the â€œfromâ€ and â€œtoâ€ range.
                if ( $.isPlainObject( dateToDisable ) ) {
                    return calendar.withinRange( dateToDisable, dateToVerify )
                }
            })

        // If this date matches a disabled date, confirm itâ€™s not inverted.
        isDisabledMatch = isDisabledMatch.length && !isDisabledMatch.filter(function( dateToDisable ) {
                return $.isArray( dateToDisable ) && dateToDisable[3] == 'inverted' ||
                    $.isPlainObject( dateToDisable ) && dateToDisable.inverted
            }).length

        // Check the calendar â€œenabledâ€ flag and respectively flip the
        // disabled state. Then also check if itâ€™s beyond the min/max limits.
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

        // If itâ€™s already parsed, weâ€™re good.
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

        // When weâ€™re working with weekdays, do a direct comparison.
        if (
            ( _.isInteger( one ) && _.isInteger( two ) ) ||
            ( typeof one == 'boolean' && typeof two == 'boolean' )
        ) {
            return one === two
        }

        // When weâ€™re working with date representations, compare the â€œpickâ€ value.
        if (
            ( _.isDate( one ) || $.isArray( one ) ) &&
            ( _.isDate( two ) || $.isArray( two ) )
        ) {
            return calendar.create( one ).pick === calendar.create( two ).pick
        }

        // When weâ€™re working with range objects, compare the â€œfromâ€ and â€œtoâ€.
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

        // When weâ€™re working with a weekday index, compare the days.
        if ( _.isInteger( one ) && ( _.isDate( two ) || $.isArray( two ) ) ) {
            one = one % 7 + firstDay
            return one === calendar.create( two ).day + 1
        }
        if ( _.isInteger( two ) && ( _.isDate( one ) || $.isArray( one ) ) ) {
            two = two % 7 + firstDay
            return two === calendar.create( one ).day + 1
        }

        // When weâ€™re working with range objects, check if the ranges overlap.
        if ( $.isPlainObject( one ) && $.isPlainObject( two ) ) {
            return calendar.overlapRanges( one, two )
        }

        return false
    }


    /**
     * Flip the â€œenabledâ€ state.
     */
    DatePicker.prototype.flipEnable = function(val) {
        var itemObject = this.item
        itemObject.enable = val || (itemObject.enable == -1 ? 1 : -1)
    }


    /**
     * Mark a collection of dates as â€œdisabledâ€.
     */
    DatePicker.prototype.deactivate = function( type, datesToDisable ) {

        var calendar = this,
            disabledItems = calendar.item.disable.slice(0)


        // If weâ€™re flipping, thatâ€™s all we need to do.
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
     * Mark a collection of dates as â€œenabledâ€.
     */
    DatePicker.prototype.activate = function( type, datesToEnable ) {

        var calendar = this,
            disabledItems = calendar.item.disable,
            disabledItemsCount = disabledItems.length

        // If weâ€™re flipping, thatâ€™s all we need to do.
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

                    // When an overlapped match is found, add the â€œinvertedâ€ state to it.
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

                // In the event that weâ€™re dealing with an exact range of dates,
                // make sure there are no â€œinvertedâ€ dates because of it.
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

            // * For Firefox forms to submit, make sure to set the buttonsâ€™ `type` attributes as â€œbuttonâ€.
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

;(function($){
    'use strict';
    $.fn.pgwSlider = function(options) {

        var defaults = {
            mainClassName : 'pgwSlider',
            listPosition : 'right',
            selectionMode : 'click',
            transitionEffect : 'sliding',
            autoSlide : true,
            displayList : true,
            displayControls : false,
            touchControls : true,
            verticalCentering : false,
            adaptiveHeight : false,
            maxHeight : 540,
            beforeSlide : null,
            afterSlide : null,
            adaptiveDuration : 500,
            transitionDuration : 500,
            intervalDuration : 3000
        };

        if (this.length == 0) {
            return this;
        } else if(this.length > 1) {
            this.each(function() {
                $(this).pgwSlider(options);
            });
            return this;
        }

        var pgwSlider = this;
        pgwSlider.plugin = this;
        pgwSlider.data = [];
        pgwSlider.config = {};
        pgwSlider.currentSlide = 0;
        pgwSlider.slideCount = 0;
        pgwSlider.resizeEvent = null;
        pgwSlider.intervalEvent = null;
        pgwSlider.touchFirstPosition = null;
        pgwSlider.transitionInProgress = false;
        pgwSlider.window = $(window);

        // Init
        var init = function() {

            // Merge user options with the default configuration
            pgwSlider.config = $.extend({}, defaults, options);

            // Setup
            setup();

            // Activate interval
            if (pgwSlider.config.autoSlide) {
                activateInterval();
            }

            return true;
        };

        // Get element
        var getElement = function(obj) {
            var element = {};

            // Get link
            var elementLink = obj.find('a').attr('href');
            if ((typeof elementLink != 'undefined') && (elementLink != '')) {
                element.link = elementLink;
                var elementLinkTarget = obj.find('a').attr('target');
                if ((typeof elementLinkTarget != 'undefined') && (elementLinkTarget != '')) {
                    element.linkTarget = elementLinkTarget;
                }
            }

            // Get image
            var elementThumbnail = obj.find('img').attr('src');
            if ((typeof elementThumbnail != 'undefined') && (elementThumbnail != '')) {
                element.thumbnail = elementThumbnail;
            }

            var elementImage = obj.find('img').attr('data-large-src');
            if ((typeof elementImage != 'undefined') && (elementImage != '')) {
                element.image = elementImage;
            }

            // Get title
            var elementSpan = obj.find('span').text();
            if ((typeof elementSpan != 'undefined') && (elementSpan != '') && (elementSpan != null)) {
                element.title = elementSpan;
            } else {
                //var elementTitle = obj.find('img').attr('alt');
                //if ((typeof elementTitle != 'undefined') && (elementTitle != '')) {
                //    element.title = elementTitle;
                //}
            }

            // Get Title
            var elementTitle = obj.find('h2').html(); //alert(varelementTitle);
            //  alert(elementTitle);
            //var elementTitle = obj.find('img').attr('alt');
            if ((typeof elementTitle != 'undefined') && (elementTitle != '')) {
                element.title = elementTitle;
            }
            // Get description
            var elementDescription = obj.find('p').text();
            //var elementDescription = obj.find('img').attr('data-description');
            if ((typeof elementDescription != 'undefined') && (elementDescription != '')) {
                element.description = elementDescription;
            }

            var elementTime = obj.find('small').text();
            //alert(elementTime);
            if ((typeof elementTime != 'undefined') && (elementTime != '')) {
                element.time = elementTime;
            }

            //var elementDescription = obj.find('img').attr('data-description');
            if ((typeof elementDescription != 'undefined') && (elementDescription != '')) {
                element.description = elementDescription;
            }

            return element;
        };

        // Update the current height


        var updateHeight = function(height, animate) {

            // Check maxHeight
            if (pgwSlider.config.maxHeight) {

                if (pgwSlider.plugin.width() > 480 && height > pgwSlider.config.maxHeight) {

                    height = pgwSlider.config.maxHeight;
                } else if (pgwSlider.plugin.width() <= 480) {
                    if (height + pgwSlider.plugin.find('.ps-list').height() > pgwSlider.config.maxHeight) {
                        height = pgwSlider.config.maxHeight - pgwSlider.plugin.find('.ps-list').height();
                    }
                }
            }

            // Prevents multiple calculations in a short time
            clearTimeout(pgwSlider.resizeEvent);
            pgwSlider.resizeEvent = setTimeout(function() {

                // Adjust right list

                var elementHeight = ((height / pgwSlider.slideCount));
                var elementWidth = (100 / pgwSlider.slideCount);
                pgwSlider.plugin.find('.ps-list > li').css({ width: elementWidth + '%' });

                // Adjust main container
                if (typeof animate != 'undefined' && animate && pgwSlider.config.maxHeight == null) {

                    if (typeof pgwSlider.plugin.find('.ps-current').animate == 'function') {
                        pgwSlider.plugin.find('.ps-current').animate({
                            height: height

                        }, pgwSlider.config.adaptiveDuration, function() {
                            pgwSlider.plugin.find('.ps-list > li').animate({ height: elementHeight }, pgwSlider.config.adaptiveDuration);
                        });
                    } else {
                        pgwSlider.plugin.find('.ps-current').css('height', height);
                        pgwSlider.plugin.find('.ps-list > li').css('height', elementHeight);
                    }

                } else {
                    pgwSlider.plugin.find('.ps-current').css('height', height);
                    pgwSlider.plugin.find('.ps-list > li').css('height', elementHeight);
                }

                // Vertical alignement
                if (pgwSlider.config.verticalCentering) {

                    // List elements
                    pgwSlider.plugin.find('.ps-list > li').each(function(){
                        if ((elementHeight > 50) && ($(this).find('img').height() > elementHeight)) {
                            var imageMargin = Math.round(($(this).find('img').height() - elementHeight) / 2);
                            $(this).find('img').css('margin-top', -imageMargin);

                        } else if ($(this).find('img').height() < elementHeight) {
                            var imageMargin = Math.round((elementHeight - $(this).find('img').height()) / 2);
                            $(this).find('img').css('margin-top', imageMargin);

                        } else {
                            $(this).find('img').css('margin-top', '');
                        }
                    });

                    // Current elements
                    pgwSlider.plugin.find('.ps-current > ul > li').each(function(){
                        var isVisible = ($(this).css('display') == 'none') ? false : true;

                        if (! isVisible) {
                            $(this).show();
                        }

                        if ($(this).show().find('img').height() > height) {
                            var imageMargin = Math.round(($(this).find('img').height() - height) / 2);
                            $(this).find('img').css('margin-top', -imageMargin);

                        } else if ($(this).show().find('img').height() < height) {
                            var imageMargin = Math.round((height - $(this).find('img').height()) / 2);
                            $(this).find('img').css('margin-top', imageMargin);

                        } else {
                            $(this).find('img').css('margin-top', '');
                        }

                        if (! isVisible) {
                            $(this).hide();
                        }
                    });
                }

            }, 100);

            return true;
        };

        // Set size class
        var setSizeClass = function() {

            if (pgwSlider.plugin.width() <= 480) {
                pgwSlider.plugin.addClass('narrow').removeClass('wide');
            } else {
                pgwSlider.plugin.addClass('wide').removeClass('narrow');
            }

            return true;
        };

        // Setup
        var setup = function() {

            // Create container
            pgwSlider.plugin.removeClass(pgwSlider.config.mainClassName).addClass('ps-list');
            pgwSlider.plugin.wrap('<div class="' + pgwSlider.config.mainClassName + '"></div>');
            pgwSlider.plugin = pgwSlider.plugin.parent();
            pgwSlider.plugin.prepend('<div class="ps-current"><ul></ul><span class="ps-caption"></span></div>');
            pgwSlider.slideCount = pgwSlider.plugin.find('.ps-list > li').length;

            if (pgwSlider.slideCount == 0) {
                throw new Error('PgwSlider - No slider item has been found');
                return false;
            }

            // Add controls
            if (pgwSlider.config.displayControls && pgwSlider.slideCount > 1) {
                pgwSlider.plugin.find('.ps-current').prepend('<span class="ps-prev"><span class="ps-prevIcon"></span></span>');
                pgwSlider.plugin.find('.ps-current').append('<span class="ps-next"><span class="ps-nextIcon"></span></span>');
                pgwSlider.plugin.find('.ps-current .ps-prev').on('click',function() {
                    pgwSlider.previousSlide();
                });
                pgwSlider.plugin.find('.ps-current .ps-next').on('click',function() {
                    pgwSlider.nextSlide();
                });
            }

            // Disable list
            if (! pgwSlider.config.displayList) {
                pgwSlider.plugin.find('.ps-current').css('width', '100%');
                pgwSlider.plugin.find('.ps-list').hide();
            }

            // Get slider elements
            var elementId = 1;
            pgwSlider.plugin.find('.ps-list > li').each(function() {
                var element = getElement($(this));
                element.id = elementId;
                pgwSlider.data.push(element);

                $(this).addClass('elt_' + element.id);

                // Check element title
                if (element.title) {
                    if ($(this).find('span').length == 1) {
                        if ($(this).find('span').text() == '') {
                            $(this).find('span').text(element.title);
                        }
                    } else {
                        $(this).find('img').after('<span>' + element.title + '</span>');
                    }
                }

                // Set element in the current list
                var currentElement = $('<li class="elt_' + elementId + '"></li>');

                if (element.image) {
                    currentElement.html('<img src="' + element.image + '" alt="' + (element.title ? element.title : '') + '">');
                } else if (element.thumbnail) {
                    currentElement.html('<img src="' + element.thumbnail + '" alt="' + (element.title ? element.title : '') + '">');
                }

                if (element.link) {
                    currentElement.html('<a href="' + element.link + '"' + (element.linkTarget ? ' target="' + element.linkTarget + '"' : '') + '>' + currentElement.html() + '</a>');
                }

                pgwSlider.plugin.find('.ps-current > ul').append(currentElement);

                // Set selection mode
                if ((pgwSlider.config.selectionMode == 'mouseOver') && (pgwSlider.config.transitionEffect == 'fading')) {
                    $(this).css('cursor', 'default').on('click',function(event) {
                        event.preventDefault();
                    }).bind('mouseenter', function(event) {
                        displayElement(element.id);
                    });
                    $(this).find('a').css('cursor', 'default');
                } else {
                    $(this).css('cursor', 'pointer').on('click',function(event) {
                        event.preventDefault();
                        displayElement(element.id);
                    });
                }

                elementId++;
            });

            // Set list position
            if (pgwSlider.config.listPosition == 'left') {
                pgwSlider.plugin.addClass('listOnTheLeft');
            }

            // Attach slide events
            if (pgwSlider.config.autoSlide) {
                pgwSlider.plugin.on('mouseenter', function() {
                    clearInterval(pgwSlider.intervalEvent);
                    pgwSlider.intervalEvent = null;
                }).on('mouseleave', function() {
                    activateInterval();
                });
            }

            // Display the first element
            displayElement(1);

            // Set the first height
            pgwSlider.plugin.find('.ps-current > ul > li.elt_1 img').on('load', function() {
                setSizeClass();

                var maxHeight = pgwSlider.plugin.find('.ps-current > ul > li.elt_1 img').height();
                updateHeight(maxHeight);

                pgwSlider.window.resize(function() {
                    // The new class must be set before the recalculation of the height.
                    setSizeClass();

                    var maxHeight = pgwSlider.plugin.find('.ps-current > ul > li.elt_' + pgwSlider.currentSlide + ' img').height();
                    updateHeight(maxHeight, pgwSlider.config.adaptiveHeight);
                });
            });

            // Touch controls for current image
            if (pgwSlider.config.touchControls && pgwSlider.slideCount > 1) {

                pgwSlider.plugin.find('.ps-current').on('touchstart', function(e) {
                    try {
                        if (e.originalEvent.touches[0].clientX && pgwSlider.touchFirstPosition == null) {
                            pgwSlider.touchFirstPosition = e.originalEvent.touches[0].clientX;
                        }
                    } catch(e) {
                        pgwSlider.touchFirstPosition = null;
                    }
                });

                pgwSlider.plugin.find('.ps-current').on('touchmove', function(e) {
                    try {
                        if (e.originalEvent.touches[0].clientX && pgwSlider.touchFirstPosition != null) {
                            if (e.originalEvent.touches[0].clientX > (pgwSlider.touchFirstPosition + 50)) {
                                pgwSlider.touchFirstPosition = null;
                                pgwSlider.previousSlide();
                            } else if (e.originalEvent.touches[0].clientX < (pgwSlider.touchFirstPosition - 50)) {
                                pgwSlider.touchFirstPosition = null;
                                pgwSlider.nextSlide();
                            }
                        }
                    } catch(e) {
                        pgwSlider.touchFirstPosition = null;
                    }
                });

                pgwSlider.plugin.find('.ps-current').on('touchend', function(e) {
                    pgwSlider.touchFirstPosition = null;
                });
            }

            return true;
        };

        // Finish element
        var finishElement = function(element) {

            // Element caption
            var elementText = '';

            if (element.time) {
                elementText += '<div class="news-time"><i class="fa fa-clock-o"></i>' + element.time + '</div>';
            }

            if (element.title) {
                elementText += '<h2>'+ element.title + '</h2>';
            }

            if (element.description) {
                if (elementText != '') elementText += '';
                elementText += '<p>'+element.description+'</p>';
            }

            if (elementText != '') {
                // if (element.link) {
                //   elementText = '<a href="' + element.link + '"' + (element.linkTarget ? ' target="' + element.linkTarget + '"' : '') + '>' + elementText + '</a>';
                // }

                if (typeof pgwSlider.plugin.find('.ps-caption').fadeIn == 'function') {
                    pgwSlider.plugin.find('.ps-caption').html(elementText);
                    pgwSlider.plugin.find('.ps-caption').fadeIn(pgwSlider.config.transitionDuration / 2);
                } else {
                    pgwSlider.plugin.find('.ps-caption').html(elementText);
                    pgwSlider.plugin.find('.ps-caption').show();
                }
            }

            // Slider controls
            if (pgwSlider.config.displayControls) {
                if (typeof pgwSlider.plugin.find('.ps-current > .ps-prev').fadeIn == 'function') {
                    pgwSlider.plugin.find('.ps-current > .ps-prev, .ps-current > .ps-next').fadeIn(pgwSlider.config.transitionDuration / 2);
                } else {
                    pgwSlider.plugin.find('.ps-current > .ps-prev, .ps-current > .ps-next').show();
                }
            }

            // After slide
            if (typeof pgwSlider.config.afterSlide == 'function') {
                pgwSlider.config.afterSlide(element.id);
            }

            // Set the container height
            if (pgwSlider.config.adaptiveHeight) {
                var maxHeight = pgwSlider.plugin.find('.ps-current .elt_' + element.id + ' img').height();
                updateHeight(maxHeight, true);
            }

            return true;
        }

        // Fade an element
        var fadeElement = function(element) {
            var elementContainer = pgwSlider.plugin.find('.ps-current > ul');

            // Update list items
            pgwSlider.plugin.find('.ps-list > li').css('opacity', '0.6');
            pgwSlider.plugin.find('.ps-list > li.elt_' + element.id).css('opacity', '1');

            elementContainer.find('li').not('.elt_' + pgwSlider.currentSlide).not('.elt_' + element.id).each(function(){
                if (typeof $(this).stop == 'function') {
                    $(this).stop();
                }
                $(this).css('position', '').css('z-index', 1).hide();
            });

            // Current element
            if (pgwSlider.currentSlide > 0) {
                var currentElement = elementContainer.find('.elt_' + pgwSlider.currentSlide);

                if (typeof currentElement.animate != 'function') {
                    currentElement.animate = function(css, duration, callback) {
                        currentElement.css(css);
                        if (callback) {
                            callback();
                        }
                    };
                }

                if (typeof currentElement.stop == 'function') {
                    currentElement.stop();
                }

                currentElement.css('position', 'absolute').animate({
                    opacity : 0,
                }, pgwSlider.config.transitionDuration, function() {
                    currentElement.css('position', '').css('z-index', 1).hide();
                });
            }

            // Update current id
            pgwSlider.currentSlide = element.id;

            // Next element
            var nextElement = elementContainer.find('.elt_' + element.id);

            if (typeof nextElement.animate != 'function') {
                nextElement.animate = function(css, duration, callback) {
                    nextElement.css(css);
                    if (callback) {
                        callback();
                    }
                };
            }

            if (typeof nextElement.stop == 'function') {
                nextElement.stop();
            }

            nextElement.css('position', 'absolute').show().animate({
                opacity : 1,
            }, pgwSlider.config.transitionDuration, function() {
                nextElement.css('position', '').css('z-index', 2).show();
                finishElement(element);
            });

            return true;
        }

        // Slide an element
        var slideElement = function(element, direction) {
            var elementContainer = pgwSlider.plugin.find('.ps-current > ul');

            if (typeof direction == 'undefined') {
                direction = 'left';
            }

            if (pgwSlider.currentSlide == 0) {
                elementContainer.find('.elt_1').css({
                    position : '',
                    left : '',
                    opacity : 1,
                    'z-index' : 2
                }).show();
                pgwSlider.plugin.find('.ps-list > li.elt_1').css('opacity', '1');
                finishElement(element);

            } else {

                if (pgwSlider.transitionInProgress) {
                    return false;
                }

                pgwSlider.transitionInProgress = true;

                // Get direction details
                var elementWidth = elementContainer.width();

                if (direction == 'left') {
                    var elementDest = -elementWidth;
                    var nextOrigin = elementWidth;
                } else {
                    var elementDest = elementWidth;
                    var nextOrigin = -elementWidth;
                }

                var currentElement = elementContainer.find('.elt_' + pgwSlider.currentSlide);

                if (typeof currentElement.animate != 'function') {
                    currentElement.animate = function(css, duration, callback) {
                        currentElement.css(css);
                        if (callback) {
                            callback();
                        }
                    };
                }

                currentElement.css('position', 'absolute').animate({
                    left : elementDest,
                }, pgwSlider.config.transitionDuration, function() {
                    currentElement.css('position', '').css('z-index', 1).css('left', '').css('opacity', 0).hide();
                });

                // Next element
                var nextElement = elementContainer.find('.elt_' + element.id);

                if (typeof nextElement.animate != 'function') {
                    nextElement.animate = function(css, duration, callback) {
                        nextElement.css(css);
                        if (callback) {
                            callback();
                        }
                    };
                }

                nextElement.css('position', 'absolute').css('left', nextOrigin).css('opacity', 1).show().animate({
                    left : 0,
                }, pgwSlider.config.transitionDuration, function() {
                    nextElement.css('position', '').css('left', '').css('z-index', 2).show();
                    pgwSlider.transitionInProgress = false;

                    // Display new element
                    pgwSlider.plugin.find('.ps-list > li').css('opacity', '0.6');
                    pgwSlider.plugin.find('.ps-list > li.elt_' + element.id).css('opacity', '1');

                    finishElement(element);
                });
            }

            // Update current id
            pgwSlider.currentSlide = element.id;

            return true;
        }

        // Display the current element
        var displayElement = function(elementId, apiController, direction) {

            if (elementId == pgwSlider.currentSlide) {
                return false;
            }

            var element = pgwSlider.data[elementId - 1];

            if (typeof element == 'undefined') {
                throw new Error('PgwSlider - The element ' + elementId + ' is undefined');
                return false;
            }

            if (typeof direction == 'undefined') {
                direction = 'left';
            }

            // Before slide
            if (typeof pgwSlider.config.beforeSlide == 'function') {
                pgwSlider.config.beforeSlide(elementId);
            }

            if (typeof pgwSlider.plugin.find('.ps-caption').fadeOut == 'function') {
                //pgwSlider.plugin.find('.ps-caption, .ps-prev, .ps-next').fadeOut(pgwSlider.config.transitionDuration / 2);

            } else {
                //pgwSlider.plugin.find('.ps-caption, .ps-prev, .ps-next').hide();
            }

            // Choose the transition effect
            if (pgwSlider.config.transitionEffect == 'sliding') {
                slideElement(element, direction);
            } else {
                fadeElement(element);
            }

            // Reset interval to avoid a half interval after an API control
            if (typeof apiController != 'undefined' && pgwSlider.config.autoSlide) {
                activateInterval();
            }

            return true;
        };

        // Activate interval
        var activateInterval = function() {
            clearInterval(pgwSlider.intervalEvent);

            if (pgwSlider.slideCount > 1 && pgwSlider.config.autoSlide) {
                pgwSlider.intervalEvent = setInterval(function() {
                    if (pgwSlider.currentSlide + 1 <= pgwSlider.slideCount) {
                        var nextItem = pgwSlider.currentSlide + 1;
                    } else {
                        var nextItem = 1;
                    }
                    displayElement(nextItem);
                }, pgwSlider.config.intervalDuration);
            }

            return true;
        };

        // Start auto slide
        pgwSlider.startSlide = function() {
            pgwSlider.config.autoSlide = true;
            activateInterval();
            return true;
        };

        // Stop auto slide
        pgwSlider.stopSlide = function() {
            pgwSlider.config.autoSlide = false;
            clearInterval(pgwSlider.intervalEvent);
            return true;
        };

        // Get current slide
        pgwSlider.getCurrentSlide = function() {
            return pgwSlider.currentSlide;
        };

        // Get slide count
        pgwSlider.getSlideCount = function() {
            return pgwSlider.slideCount;
        };

        // Display slide
        pgwSlider.displaySlide = function(itemId) {
            displayElement(itemId, true);
            return true;
        };

        // Next slide
        pgwSlider.nextSlide = function() {
            if (pgwSlider.currentSlide + 1 <= pgwSlider.slideCount) {
                var nextItem = pgwSlider.currentSlide + 1;
            } else {
                var nextItem = 1;
            }
            displayElement(nextItem, true, 'left');
            return true;
        };

        // Previous slide
        pgwSlider.previousSlide = function() {
            if (pgwSlider.currentSlide - 1 >= 1) {
                var previousItem = pgwSlider.currentSlide - 1;
            } else {
                var previousItem = pgwSlider.slideCount;
            }
            displayElement(previousItem, true, 'right');
            return true;
        };

        // Destroy slider
        pgwSlider.destroy = function(soft) {
            clearInterval(pgwSlider.intervalEvent);

            if (typeof soft != 'undefined') {
                pgwSlider.plugin.find('.ps-list > li').each(function() {
                    $(this).attr('style', null).removeClass().css('cursor', '').unbind('click').unbind('mouseenter');
                    $(this).find('a').css('cursor', '');
                    $(this).find('img').attr('style', null);
                });

                pgwSlider.plugin.find('.ps-list').addClass(pgwSlider.config.mainClassName).removeClass('ps-list');
                pgwSlider.plugin.find('.ps-current').unwrap().remove();
                pgwSlider.hide();

            } else {
                pgwSlider.parent().remove();
            }

            pgwSlider.plugin = null;
            pgwSlider.data = [];
            pgwSlider.config = {};
            pgwSlider.currentSlide = 0;
            pgwSlider.slideCount = 0;
            pgwSlider.resizeEvent = null;
            pgwSlider.intervalEvent = null;
            pgwSlider.touchFirstPosition = null;
            pgwSlider.transitionInProgress = false;
            pgwSlider.window = null;

            return true;
        };

        // Reload slider
        pgwSlider.reload = function(newOptions) {
            pgwSlider.destroy(true);

            pgwSlider = this;
            pgwSlider.plugin = this;
            pgwSlider.window = $(window);
            pgwSlider.plugin.show();

            // Merge new options with the default configuration
            pgwSlider.config = $.extend({}, defaults, newOptions);

            // Setup
            setup();

            // Activate interval
            if (pgwSlider.config.autoSlide) {
                activateInterval();
            }

            return true;
        };

        // Slider initialization
        init();

        return this;
    }
})(window.Zepto || window.jQuery);

(function(e){var o="left",n="right",d="up",v="down",c="in",w="out",l="none",r="auto",k="swipe",s="pinch",x="tap",i="doubletap",b="longtap",A="horizontal",t="vertical",h="all",q=10,f="start",j="move",g="end",p="cancel",a="ontouchstart" in window,y="TouchSwipe";var m={fingers:1,threshold:75,cancelThreshold:null,pinchThreshold:20,maxTimeThreshold:null,fingerReleaseThreshold:250,longTapThreshold:500,doubleTapThreshold:200,swipe:null,swipeLeft:null,swipeRight:null,swipeUp:null,swipeDown:null,swipeStatus:null,pinchIn:null,pinchOut:null,pinchStatus:null,click:null,tap:null,doubleTap:null,longTap:null,triggerOnTouchEnd:true,triggerOnTouchLeave:false,allowPageScroll:"auto",fallbackToMouseEvents:true,excludedElements:"button, input, select, textarea, a, .noSwipe"};e.fn.swipe=function(D){var C=e(this),B=C.data(y);if(B&&typeof D==="string"){if(B[D]){return B[D].apply(this,Array.prototype.slice.call(arguments,1))}else{e.error("Method "+D+" does not exist on jQuery.swipe")}}else{if(!B&&(typeof D==="object"||!D)){return u.apply(this,arguments)}}return C};e.fn.swipe.defaults=m;e.fn.swipe.phases={PHASE_START:f,PHASE_MOVE:j,PHASE_END:g,PHASE_CANCEL:p};e.fn.swipe.directions={LEFT:o,RIGHT:n,UP:d,DOWN:v,IN:c,OUT:w};e.fn.swipe.pageScroll={NONE:l,HORIZONTAL:A,VERTICAL:t,AUTO:r};e.fn.swipe.fingers={ONE:1,TWO:2,THREE:3,ALL:h};function u(B){if(B&&(B.allowPageScroll===undefined&&(B.swipe!==undefined||B.swipeStatus!==undefined))){B.allowPageScroll=l}if(B.click!==undefined&&B.tap===undefined){B.tap=B.click}if(!B){B={}}B=e.extend({},e.fn.swipe.defaults,B);return this.each(function(){var D=e(this);var C=D.data(y);if(!C){C=new z(this,B);D.data(y,C)}})}function z(a0,aq){var av=(a||!aq.fallbackToMouseEvents),G=av?"touchstart":"mousedown",au=av?"touchmove":"mousemove",R=av?"touchend":"mouseup",P=av?null:"mouseleave",az="touchcancel";var ac=0,aL=null,Y=0,aX=0,aV=0,D=1,am=0,aF=0,J=null;var aN=e(a0);var W="start";var T=0;var aM=null;var Q=0,aY=0,a1=0,aa=0,K=0;var aS=null;try{aN.bind(G,aJ);aN.bind(az,a5)}catch(ag){e.error("events not supported "+G+","+az+" on jQuery.swipe")}this.enable=function(){aN.bind(G,aJ);aN.bind(az,a5);return aN};this.disable=function(){aG();return aN};this.destroy=function(){aG();aN.data(y,null);return aN};this.option=function(a8,a7){if(aq[a8]!==undefined){if(a7===undefined){return aq[a8]}else{aq[a8]=a7}}else{e.error("Option "+a8+" does not exist on jQuery.swipe.options")}};function aJ(a9){if(ax()){return}if(e(a9.target).closest(aq.excludedElements,aN).length>0){return}var ba=a9.originalEvent?a9.originalEvent:a9;var a8,a7=a?ba.touches[0]:ba;W=f;if(a){T=ba.touches.length}else{a9.preventDefault()}ac=0;aL=null;aF=null;Y=0;aX=0;aV=0;D=1;am=0;aM=af();J=X();O();if(!a||(T===aq.fingers||aq.fingers===h)||aT()){ae(0,a7);Q=ao();if(T==2){ae(1,ba.touches[1]);aX=aV=ap(aM[0].start,aM[1].start)}if(aq.swipeStatus||aq.pinchStatus){a8=L(ba,W)}}else{a8=false}if(a8===false){W=p;L(ba,W);return a8}else{ak(true)}}function aZ(ba){var bd=ba.originalEvent?ba.originalEvent:ba;if(W===g||W===p||ai()){return}var a9,a8=a?bd.touches[0]:bd;var bb=aD(a8);aY=ao();if(a){T=bd.touches.length}W=j;if(T==2){if(aX==0){ae(1,bd.touches[1]);aX=aV=ap(aM[0].start,aM[1].start)}else{aD(bd.touches[1]);aV=ap(aM[0].end,aM[1].end);aF=an(aM[0].end,aM[1].end)}D=a3(aX,aV);am=Math.abs(aX-aV)}if((T===aq.fingers||aq.fingers===h)||!a||aT()){aL=aH(bb.start,bb.end);ah(ba,aL);ac=aO(bb.start,bb.end);Y=aI();aE(aL,ac);if(aq.swipeStatus||aq.pinchStatus){a9=L(bd,W)}if(!aq.triggerOnTouchEnd||aq.triggerOnTouchLeave){var a7=true;if(aq.triggerOnTouchLeave){var bc=aU(this);a7=B(bb.end,bc)}if(!aq.triggerOnTouchEnd&&a7){W=ay(j)}else{if(aq.triggerOnTouchLeave&&!a7){W=ay(g)}}if(W==p||W==g){L(bd,W)}}}else{W=p;L(bd,W)}if(a9===false){W=p;L(bd,W)}}function I(a7){var a8=a7.originalEvent;if(a){if(a8.touches.length>0){C();return true}}if(ai()){T=aa}a7.preventDefault();aY=ao();Y=aI();if(a6()){W=p;L(a8,W)}else{if(aq.triggerOnTouchEnd||(aq.triggerOnTouchEnd==false&&W===j)){W=g;L(a8,W)}else{if(!aq.triggerOnTouchEnd&&a2()){W=g;aB(a8,W,x)}else{if(W===j){W=p;L(a8,W)}}}}ak(false)}function a5(){T=0;aY=0;Q=0;aX=0;aV=0;D=1;O();ak(false)}function H(a7){var a8=a7.originalEvent;if(aq.triggerOnTouchLeave){W=ay(g);L(a8,W)}}function aG(){aN.unbind(G,aJ);aN.unbind(az,a5);aN.unbind(au,aZ);aN.unbind(R,I);if(P){aN.unbind(P,H)}ak(false)}function ay(bb){var ba=bb;var a9=aw();var a8=aj();var a7=a6();if(!a9||a7){ba=p}else{if(a8&&bb==j&&(!aq.triggerOnTouchEnd||aq.triggerOnTouchLeave)){ba=g}else{if(!a8&&bb==g&&aq.triggerOnTouchLeave){ba=p}}}return ba}function L(a9,a7){var a8=undefined;if(F()||S()){a8=aB(a9,a7,k)}else{if((M()||aT())&&a8!==false){a8=aB(a9,a7,s)}}if(aC()&&a8!==false){a8=aB(a9,a7,i)}else{if(al()&&a8!==false){a8=aB(a9,a7,b)}else{if(ad()&&a8!==false){a8=aB(a9,a7,x)}}}if(a7===p){a5(a9)}if(a7===g){if(a){if(a9.touches.length==0){a5(a9)}}else{a5(a9)}}return a8}function aB(ba,a7,a9){var a8=undefined;if(a9==k){aN.trigger("swipeStatus",[a7,aL||null,ac||0,Y||0,T]);if(aq.swipeStatus){a8=aq.swipeStatus.call(aN,ba,a7,aL||null,ac||0,Y||0,T);if(a8===false){return false}}if(a7==g&&aR()){aN.trigger("swipe",[aL,ac,Y,T]);if(aq.swipe){a8=aq.swipe.call(aN,ba,aL,ac,Y,T);if(a8===false){return false}}switch(aL){case o:aN.trigger("swipeLeft",[aL,ac,Y,T]);if(aq.swipeLeft){a8=aq.swipeLeft.call(aN,ba,aL,ac,Y,T)}break;case n:aN.trigger("swipeRight",[aL,ac,Y,T]);if(aq.swipeRight){a8=aq.swipeRight.call(aN,ba,aL,ac,Y,T)}break;case d:aN.trigger("swipeUp",[aL,ac,Y,T]);if(aq.swipeUp){a8=aq.swipeUp.call(aN,ba,aL,ac,Y,T)}break;case v:aN.trigger("swipeDown",[aL,ac,Y,T]);if(aq.swipeDown){a8=aq.swipeDown.call(aN,ba,aL,ac,Y,T)}break}}}if(a9==s){aN.trigger("pinchStatus",[a7,aF||null,am||0,Y||0,T,D]);if(aq.pinchStatus){a8=aq.pinchStatus.call(aN,ba,a7,aF||null,am||0,Y||0,T,D);if(a8===false){return false}}if(a7==g&&a4()){switch(aF){case c:aN.trigger("pinchIn",[aF||null,am||0,Y||0,T,D]);if(aq.pinchIn){a8=aq.pinchIn.call(aN,ba,aF||null,am||0,Y||0,T,D)}break;case w:aN.trigger("pinchOut",[aF||null,am||0,Y||0,T,D]);if(aq.pinchOut){a8=aq.pinchOut.call(aN,ba,aF||null,am||0,Y||0,T,D)}break}}}if(a9==x){if(a7===p||a7===g){clearTimeout(aS);if(V()&&!E()){K=ao();aS=setTimeout(e.proxy(function(){K=null;aN.trigger("tap",[ba.target]);if(aq.tap){a8=aq.tap.call(aN,ba,ba.target)}},this),aq.doubleTapThreshold)}else{K=null;aN.trigger("tap",[ba.target]);if(aq.tap){a8=aq.tap.call(aN,ba,ba.target)}}}}else{if(a9==i){if(a7===p||a7===g){clearTimeout(aS);K=null;aN.trigger("doubletap",[ba.target]);if(aq.doubleTap){a8=aq.doubleTap.call(aN,ba,ba.target)}}}else{if(a9==b){if(a7===p||a7===g){clearTimeout(aS);K=null;aN.trigger("longtap",[ba.target]);if(aq.longTap){a8=aq.longTap.call(aN,ba,ba.target)}}}}}return a8}function aj(){var a7=true;if(aq.threshold!==null){a7=ac>=aq.threshold}return a7}function a6(){var a7=false;if(aq.cancelThreshold!==null&&aL!==null){a7=(aP(aL)-ac)>=aq.cancelThreshold}return a7}function ab(){if(aq.pinchThreshold!==null){return am>=aq.pinchThreshold}return true}function aw(){var a7;if(aq.maxTimeThreshold){if(Y>=aq.maxTimeThreshold){a7=false}else{a7=true}}else{a7=true}return a7}function ah(a7,a8){if(aq.allowPageScroll===l||aT()){a7.preventDefault()}else{var a9=aq.allowPageScroll===r;switch(a8){case o:if((aq.swipeLeft&&a9)||(!a9&&aq.allowPageScroll!=A)){a7.preventDefault()}break;case n:if((aq.swipeRight&&a9)||(!a9&&aq.allowPageScroll!=A)){a7.preventDefault()}break;case d:if((aq.swipeUp&&a9)||(!a9&&aq.allowPageScroll!=t)){a7.preventDefault()}break;case v:if((aq.swipeDown&&a9)||(!a9&&aq.allowPageScroll!=t)){a7.preventDefault()}break}}}function a4(){var a8=aK();var a7=U();var a9=ab();return a8&&a7&&a9}function aT(){return !!(aq.pinchStatus||aq.pinchIn||aq.pinchOut)}function M(){return !!(a4()&&aT())}function aR(){var ba=aw();var bc=aj();var a9=aK();var a7=U();var a8=a6();var bb=!a8&&a7&&a9&&bc&&ba;return bb}function S(){return !!(aq.swipe||aq.swipeStatus||aq.swipeLeft||aq.swipeRight||aq.swipeUp||aq.swipeDown)}function F(){return !!(aR()&&S())}function aK(){return((T===aq.fingers||aq.fingers===h)||!a)}function U(){return aM[0].end.x!==0}function a2(){return !!(aq.tap)}function V(){return !!(aq.doubleTap)}function aQ(){return !!(aq.longTap)}function N(){if(K==null){return false}var a7=ao();return(V()&&((a7-K)<=aq.doubleTapThreshold))}function E(){return N()}function at(){return((T===1||!a)&&(isNaN(ac)||ac===0))}function aW(){return((Y>aq.longTapThreshold)&&(ac<q))}function ad(){return !!(at()&&a2())}function aC(){return !!(N()&&V())}function al(){return !!(aW()&&aQ())}function C(){a1=ao();aa=event.touches.length+1}function O(){a1=0;aa=0}function ai(){var a7=false;if(a1){var a8=ao()-a1;if(a8<=aq.fingerReleaseThreshold){a7=true}}return a7}function ax(){return !!(aN.data(y+"_intouch")===true)}function ak(a7){if(a7===true){aN.bind(au,aZ);aN.bind(R,I);if(P){aN.bind(P,H)}}else{aN.unbind(au,aZ,false);aN.unbind(R,I,false);if(P){aN.unbind(P,H,false)}}aN.data(y+"_intouch",a7===true)}function ae(a8,a7){var a9=a7.identifier!==undefined?a7.identifier:0;aM[a8].identifier=a9;aM[a8].start.x=aM[a8].end.x=a7.pageX||a7.clientX;aM[a8].start.y=aM[a8].end.y=a7.pageY||a7.clientY;return aM[a8]}function aD(a7){var a9=a7.identifier!==undefined?a7.identifier:0;var a8=Z(a9);a8.end.x=a7.pageX||a7.clientX;a8.end.y=a7.pageY||a7.clientY;return a8}function Z(a8){for(var a7=0;a7<aM.length;a7++){if(aM[a7].identifier==a8){return aM[a7]}}}function af(){var a7=[];for(var a8=0;a8<=5;a8++){a7.push({start:{x:0,y:0},end:{x:0,y:0},identifier:0})}return a7}function aE(a7,a8){a8=Math.max(a8,aP(a7));J[a7].distance=a8}function aP(a7){return J[a7].distance}function X(){var a7={};a7[o]=ar(o);a7[n]=ar(n);a7[d]=ar(d);a7[v]=ar(v);return a7}function ar(a7){return{direction:a7,distance:0}}function aI(){return aY-Q}function ap(ba,a9){var a8=Math.abs(ba.x-a9.x);var a7=Math.abs(ba.y-a9.y);return Math.round(Math.sqrt(a8*a8+a7*a7))}function a3(a7,a8){var a9=(a8/a7)*1;return a9.toFixed(2)}function an(){if(D<1){return w}else{return c}}function aO(a8,a7){return Math.round(Math.sqrt(Math.pow(a7.x-a8.x,2)+Math.pow(a7.y-a8.y,2)))}function aA(ba,a8){var a7=ba.x-a8.x;var bc=a8.y-ba.y;var a9=Math.atan2(bc,a7);var bb=Math.round(a9*180/Math.PI);if(bb<0){bb=360-Math.abs(bb)}return bb}function aH(a8,a7){var a9=aA(a8,a7);if((a9<=45)&&(a9>=0)){return o}else{if((a9<=360)&&(a9>=315)){return o}else{if((a9>=135)&&(a9<=225)){return n}else{if((a9>45)&&(a9<135)){return v}else{return d}}}}}function ao(){var a7=new Date();return a7.getTime()}function aU(a7){a7=e(a7);var a9=a7.offset();var a8={left:a9.left,right:a9.left+a7.outerWidth(),top:a9.top,bottom:a9.top+a7.outerHeight()};return a8}function B(a7,a8){return(a7.x>a8.left&&a7.x<a8.right&&a7.y>a8.top&&a7.y<a8.bottom)}}})(jQuery);
// Utility for creating objects in older browsers
if (typeof Object.create !== 'function') {
    Object.create = function(obj) {
        'use strict';
        function F() {}
        F.prototype = obj;
        return new F();
    };
}

;(function($, window, document, undefined) {
    'use strict';

    $.fn.liquidSlider = function(options) {
        return this.each(function() {
            var slider = Object.create(LiquidSlider);
            slider.init(options, this);
            $.data(this, 'liquidSlider', slider);
        });
    };

    $.fn.liquidSlider.options = {
        autoHeight: true,
        minHeight: 0,
        heightEaseDuration: 1500,
        heightEaseFunction: 'easeInOutExpo',

        slideEaseDuration: 1500,
        slideEaseFunction: 'easeInOutExpo',
        slideEaseFunctionFallback: 'swing',
        animateIn: 'bounceInRight',
        animateOut: 'bounceOutRight',
        continuous: true,
        fadeInDuration: 500,
        fadeOutDuration: 500,

        autoSlide: false,
        autoSlideDirection: 'right',
        autoSlideInterval: 6000,
        forceAutoSlide: false,
        pauseOnHover: false,

        dynamicArrows: true,
        dynamicArrowsGraphical: true,
        dynamicArrowLeftText: '&#171; left',
        dynamicArrowRightText: 'right &#187;',
        hideSideArrows: false,
        hideSideArrowsDuration: 750,
        hoverArrows: true,
        hoverArrowDuration: 250,

        dynamicTabs: true,
        dynamicTabsHtml: true,
        includeTitle: true,
        panelTitleSelector: '.slider-tab',
        dynamicTabsAlign: 'left',
        dynamicTabsPosition: 'bottom',
        navElementTag: 'div',

        firstPanelToLoad: 1,
        hashLinking: false,
        hashTitleSelector: '.title',

        keyboardNavigation: false,
        leftKey: 39,
        rightKey: 37,
        panelKeys: {
            1: 49,
            2: 50,
            3: 51,
            4: 52
        },

        responsive: true,
        mobileNavigation: false,
        mobileNavDefaultText: 'Menu',
        mobileUIThreshold: 0,
        hideArrowsWhenMobile: false,
        hideArrowsThreshold: 0,
        useCSSMaxWidth: 3000,

        preload: function() {
            var _this = this;
            jQuery(window).bind('load', function() {
                _this.finalize();
            });
        },
        onload: function() {},
        pretransition: function() {
            this.transition();
        },
        callback: function() {},

        preloader: false,
        swipe: true,
        swipeArgs: undefined
    };

})(jQuery, window, document);

// Create the Liquid Slider Object
var LiquidSlider = {};

LiquidSlider.init = function(options, elem) {
    var _this = this;

    // Cache the element
    _this.elem = elem;
    _this.$elem = jQuery(elem);

    jQuery('.no-js').removeClass('no-js');

    // Cache the ID and class. This allows for multiple instances with any ID name supplied
    _this.sliderId = '#' + (_this.$elem).attr('id');
    _this.$sliderId = jQuery(_this.sliderId);

    // Set the options
    _this.options = jQuery.extend({}, jQuery.fn.liquidSlider.options, options);

    // Variable for the % sign if needed (responsive), otherwise px
    _this.pSign = (_this.options.responsive) ? '%' : 'px';

    // jQuery or CSS3 ?
    _this.determineAnimationType();

    // Disable some stuff when not responsive
    if (!_this.options.responsive) {
        _this.options.mobileNavigation = false;
        _this.options.hideArrowsWhenMobile = false;
    }

    // If using animate.css, add the class here and disable other options.
    if (_this.options.slideEaseFunction === 'animate.css') {
        if (!_this.useCSS) {
            _this.options.slideEaseFunction = _this.options.slideEaseFunctionFallback;
        } else {
            _this.options.continuous = false;
            _this.animateCSS = true;
        }
    }

    // Build the tabs and navigation
    _this.build();

    // Register events
    _this.events();

    // Fix width
    if (!_this.options.responsive && _this.options.dynamicArrows)
        _this.$sliderWrap.width(_this.$sliderId.outerWidth(true) +
            _this.leftArrow.outerWidth(true) +
            _this.rightArrow.outerWidth(true));

    // Set the slider as loaded (almost)
    _this.loaded = true;

    _this.options.preload.call(_this);

};

LiquidSlider.build = function() {
    var _this = this,
        isAbsolute;

    // Wrap the entire slider unless it exists already
    if ((_this.$sliderId).parent().attr('class') !== 'ls-wrapper') {
        (_this.$sliderId).wrap('<div id="' +
            (_this.$elem).attr('id') +
            '-wrapper" class="ls-wrapper"></div>');
    }

    // Cache the wrapper
    _this.$sliderWrap = jQuery(_this.sliderId + '-wrapper');

    // Add the preloader
    _this.options.preloader && _this.addPreloader();

    // Add the .panel class to the individual panels
    jQuery(_this.sliderId).children().addClass((_this.$elem).attr('id') + '-panel ls-panel');
    _this.panelClass = _this.sliderId + ' .' + (_this.$elem).attr('id') + '-panel:not(.clone)';
    _this.$panelClass = jQuery(_this.panelClass);

    // Wrap all panels in a div, and wrap inner content in a div
    (_this.$panelClass).wrapAll('<div class="panel-container"></div>');
    (_this.$panelClass).wrapInner('<div class="panel-wrapper"></div>');
    _this.panelContainer = (_this.$panelClass).parent();
    _this.$panelContainer = _this.panelContainer;

    // Build hash links
    _this.options.hashLinking && _this.buildHashTags();

    // If using fade transition, add the class here and disable other options.
    if (_this.options.slideEaseFunction === 'fade') {
        (_this.$panelClass).addClass('fade');
        _this.options.continuous = false;
        _this.fade = true;
    }

    // Build navigation tabs
    if (_this.options.dynamicTabs) {
        _this.addNavigation();
    } else {
        _this.options.mobileNavigation = false;
    }

    // Build navigation arrows or disable features
    if (_this.options.dynamicArrows) {
        _this.addArrows();
    } else {
        _this.options.hoverArrows = false;
        _this.options.hideSideArrows = false;
        _this.options.hideArrowsWhenMobile = false;
    }

    /**
     * Create a container width to allow for a smooth float right.
     * Won't calculate arrows if positioned absolute
     */
    isAbsolute = ((_this.$leftArrow) && (_this.$leftArrow).css('position') === 'absolute') ? 0 : 1;

    // Set slider width
    _this.totalSliderWidth = (_this.$sliderId).outerWidth(true) +
        (jQuery(_this.$leftArrow).outerWidth(true)) * isAbsolute +
        (jQuery(_this.$rightArrow).outerWidth(true)) * isAbsolute;
    jQuery((_this.$sliderWrap)).css('width', _this.totalSliderWidth);

    // Align navigation tabs
    _this.options.dynamicTabs && _this.alignNavigation();

    /*
     * There is no need to use continuous if arrow navigation is hidden on sides.
     * If you want to use autoslide and still want hideSideArrows, use the API
     */
    _this.options.hideSideArrows && (_this.options.continuous = false);

    // Clone panels if continuous is enabled
    if (_this.options.continuous) {
        (_this.$panelContainer).prepend((_this.$panelContainer).children().last().clone().addClass('clone'));
        (_this.$panelContainer).append((_this.$panelContainer).children().eq(1).clone().addClass('clone'));
    }
    var clonedCount = (_this.options.continuous) ? 2 : 0;

    // Count the number of panels and get the combined width
    _this.panelCount = jQuery(_this.panelClass).length;
    _this.panelCountTotal = (_this.fade) ? 1 : _this.panelCount + clonedCount;
    _this.panelWidth = jQuery(_this.panelClass).outerWidth();
    _this.totalWidth = _this.panelCountTotal * _this.panelWidth;

    // Apply the width to the panel container
    jQuery(_this.sliderId + ' .panel-container').css('width', _this.totalWidth);

    // How far should we slide?
    _this.slideDistance = (_this.options.responsive) ? 100 : jQuery(_this.sliderId).outerWidth();
    if (_this.useCSS && _this.options.responsive) {
        _this.totalWidth = 100 * _this.panelCountTotal;
        _this.slideDistance = 100 / _this.panelCountTotal;
    }

    // Make responsive
    _this.options.responsive && _this.makeResponsive();

    // Apply starting position
    _this.prepareTransition(_this.getFirstPanel(), true);

    // Update the class
    _this.updateClass();
};

LiquidSlider.determineAnimationType = function() {
    var _this = this,
        animationstring = 'animation',
        keyframeprefix = '',
        domPrefixes = 'Webkit Moz O ms Khtml'.split(' '),
        pfx = '',
        i = 0;

    /* Decide whether or not to use CSS transitions or jQuery.
     * Code taken from:
     * https://developer.mozilla.org/en-US/docs/CSS/CSS_animations/Detecting_CSS_animation_support
     */
    _this.useCSS = false;
    if (_this.elem.style.animationName) _this.useCSS = true;
    if (_this.useCSS === false) {
        for (i = 0; i < domPrefixes.length; i++) {
            if (_this.elem.style[domPrefixes[i] + 'AnimationName'] !== undefined) {
                pfx = domPrefixes[i];
                animationstring = pfx + 'Animation';
                keyframeprefix = '-' + pfx.toLowerCase() + '-';
                _this.useCSS = true;
                break;
            }
        }
    }
    (document.documentElement.clientWidth > _this.options.useCSSMaxWidth) && (_this.useCSS = false);
};

LiquidSlider.configureCSSTransitions = function(slide, height) {
    var _this = this,
        slideTransition,
        heightTransition,
        sFunction,
        hFunction;

    // Penner equations in attempt to match jQuery Easing
    _this.easing = {
        easeOutCubic: 'cubic-bezier(.215,.61,.355,1)',
        easeInOutCubic: 'cubic-bezier(.645,.045,.355,1)',
        easeInCirc: 'cubic-bezier(.6,.04,.98,.335)',
        easeOutCirc: 'cubic-bezier(.075,.82,.165,1)',
        easeInOutCirc: 'cubic-bezier(.785,.135,.15,.86)',
        easeInExpo: 'cubic-bezier(.95,.05,.795,.035)',
        easeOutExpo: 'cubic-bezier(.19,1,.22,1)',
        easeInOutExpo: 'cubic-bezier(1,0,0,1)',
        easeInQuad: 'cubic-bezier(.55,.085,.68,.53)',
        easeOutQuad: 'cubic-bezier(.25,.46,.45,.94)',
        easeInOutQuad: 'cubic-bezier(.455,.03,.515,.955)',
        easeInQuart: 'cubic-bezier(.895,.03,.685,.22)',
        easeOutQuart: 'cubic-bezier(.165,.84,.44,1)',
        easeInOutQuart: 'cubic-bezier(.77,0,.175,1)',
        easeInQuint: 'cubic-bezier(.755,.05,.855,.06)',
        easeOutQuint: 'cubic-bezier(.23,1,.32,1)',
        easeInOutQuint: 'cubic-bezier(.86,0,.07,1)',
        easeInSine: 'cubic-bezier(.47,0,.745,.715)',
        easeOutSine: 'cubic-bezier(.39,.575,.565,1)',
        easeInOutSine: 'cubic-bezier(.445,.05,.55,.95)',
        easeInBack: 'cubic-bezier(.6,-.28,.735,.045)',
        easeOutBack: 'cubic-bezier(.175,.885,.32,1.275)',
        easeInOutBack: 'cubic-bezier(.68,-.55,.265,1.55)'
    };

    // Set some defaults
    sFunction = _this.easing[_this.options.slideEaseFunction] || _this.options.slideEaseFunction;
    hFunction = _this.easing[_this.options.heightEaseFunction] || _this.options.heightEaseFunction;

    // Build a CSS class depending on the type of transition
    if (_this.useCSS) {
        slideTransition = 'all ' + (slide || _this.options.slideEaseDuration) + 'ms ' + sFunction;
        heightTransition = 'all ' + (height || _this.options.heightEaseDuration) + 'ms ' + hFunction;

        // Build the width transition rules
        jQuery(_this.panelContainer).css({
            '-webkit-transition': slideTransition,
            '-moz-transition': slideTransition,
            '-ms-transition': slideTransition,
            '-o-transition': slideTransition,
            'transition': slideTransition
        });

        // Build the height transition rules
        if (_this.options.autoHeight) {
            (_this.$sliderId).css({
                '-webkit-transition': heightTransition,
                '-moz-transition': heightTransition,
                '-ms-transition': heightTransition,
                '-o-transition': heightTransition,
                'transition': heightTransition
            });
        }
    }
};

LiquidSlider.transitionFade = function() {
    var _this = this;

    jQuery(_this.panelClass).eq(_this.nextPanel)
        .fadeTo(_this.options.fadeInDuration, 1.0).css('z-index', 1);
    jQuery(_this.panelClass).eq(_this.prevPanel)
        .fadeTo(_this.options.fadeOutDuration, 0).css('z-index', 0);
    _this.callback(_this.options.callback, true);
};

LiquidSlider.hover = function() {
    var _this = this;

    (_this.$sliderWrap).hover(
        function() {
            _this.options.hoverArrows && _this.hideShowArrows(_this.options.fadeInDuration, true, true, false);
            _this.options.pauseOnHover && clearTimeout(_this.autoSlideTimeout);
        },
        function() {
            _this.options.hoverArrows && _this.hideShowArrows(_this.options.fadeOutnDuration, true, false, true);
            (_this.options.pauseOnHover && _this.options.autoSlide) && _this.startAutoSlide(true);
        }
    );
};

LiquidSlider.events = function() {
    var _this = this;

    // Set events for all types of navigation
    _this.options.dynamicArrows       && _this.registerArrows();
    _this.options.dynamicTabs         && _this.registerNav();
    _this.options.swipe               && _this.registerTouch();
    _this.options.keyboardNavigation  && _this.registerKeyboard();

    // Click to stop autoSlider
    (_this.$sliderWrap).find('*').on('click', function() {
        if (_this.options.forceAutoSlide) {
            _this.startAutoSlide(true);
        } else if (_this.options.autoSlide) {
            _this.stopAutoSlide();
        }
    });
    _this.hover();
};

LiquidSlider.setNextPanel = function(direction) {
    var _this = this;

    if (direction === _this.nextPanel) return;
    _this.prevPanel = _this.nextPanel;

    if (_this.loaded) {
        if (typeof direction === 'number') {
            _this.nextPanel = direction;
        } else {

            // "left" = -1; "right" = 1;
            _this.nextPanel += (~~(direction === 'right') || -1);

            // If not continuous, slide back at the last or first panel
            _this.options.continuous ||
            (_this.nextPanel = (_this.nextPanel < 0) ? _this.panelCount - 1 : (_this.nextPanel % _this.panelCount));
        }
        if (_this.fade || _this.animateCSS) {
            _this.prepareTransition(_this.nextPanel);
        } else {
            _this.verifyPanel();
        }
    }
};

LiquidSlider.getFirstPanel = function() {
    var _this = this,
        output;

    // is there a hash tag?
    if (_this.options.hashLinking) {
        output = jQuery.inArray(_this.convertRegex(window.location.hash), _this.hashLinks);

        // Default to panel 1 if mistyped
        if (output === -1) output = 0;
    }
    return (output) ? output : _this.options.firstPanelToLoad - 1;
};

/**
 * Searches for the title class and returns the formatted hashtag
 *
 * @param <String> searchTerm
 * @param <Number> input
 * @return <String>
 */
LiquidSlider.getFromPanel = function(searchTerm, panelNumber) {
    var _this = this;

    return _this.convertRegex(_this.$panelClass.find(searchTerm).eq(panelNumber).text());
};

/**
 * Removes unwanted characters for browser hash
 *
 * @param <Number> input
 * @return <String>
 */
LiquidSlider.convertRegex = function(input) {
    return jQuery.trim(input)
        .replace(/[^\w -]+/g,'')
        .replace(/ +/g,'-')
        .toLowerCase();
};

/**
 * Updates all classes for current nav and panels
 *
 * @param <Object> crosslink
 */
LiquidSlider.updateClass = function(crosslink) {
    var _this = this;

    if (_this.options.dynamicTabs) {
        jQuery((_this.$sliderWrap)).find('> .ls-nav .tab' + _this.sanitizeNumber(_this.nextPanel))
            .addClass('current')
            .siblings().removeClass('current');
    }

    // Add it to cloned panels
    _this.$panelClass.eq(_this.sanitizeNumber(_this.nextPanel) - 1 )
        .addClass('currentPanel')
        .siblings().removeClass('currentPanel');

    _this.$clones = jQuery(_this.sliderId + ' .clone');
    if (_this.options.continuous && ((_this.nextPanel === -1) || (_this.nextPanel === _this.panelCount))) {
        _this.$clones.addClass('currentPanel');
    } else {
        _this.$clones.removeClass('currentPanel');
    }

    // Crosslinks
    // <a href="#2" onclick="api.setNextPanel(1);api.updateClass($(this))">slide 1</a>
    if (crosslink) {
        $('.ls-current').removeClass('ls-current');
        crosslink.addClass('ls-current');
    }
};

/**
 * Returns the panel number 1 based instead of 0 based
 *
 * @param <Number> panel
 * @return <Number>
 */
LiquidSlider.sanitizeNumber = function(panel) {
    var _this = this;

    switch (true) {
        case (panel >= _this.panelCount):
            return 1;
        case (panel <= -1):
            return _this.panelCount;
        default:
            return panel + 1;
    }
};

LiquidSlider.finalize = function() {
    var _this = this;

    // Adjust the height again
    var height = (_this.options.autoHeight) ? _this.getHeight() : _this.getHeighestPanel(_this.nextPanel);
    _this.options.autoHeight && _this.adjustHeight(true, height);
    _this.options.autoSlide  && _this.autoSlide();
    _this.options.preloader  && _this.removePreloader();
    _this.onload();
};

/**
 * Runs after each slide transition completes
 *
 * @param <Function> callbackFn
 * @param <Bool> isFade
 */
LiquidSlider.callback = function(callbackFn, isFade) {
    var _this = this;
    if (callbackFn && _this.loaded) {

        // Looks for the end of a transition with CSS, otherwise jQuery
        if (_this.useCSS && typeof isFade !== 'undefined') {
            jQuery('.panel-container').one('webkitTransitionEnd otransitionend oTransitionEnd msTransitionEnd transitionend',
                function() {
                    callbackFn.call(_this);
                });
        } else {
            setTimeout(function() {
                callbackFn.call(_this);
            }, _this.options.slideEaseDuration + 50);
        }
    }
};

LiquidSlider.onload = function() {
    var _this = this;
    _this.options.onload.call(_this);
};

/**
 * Prepares the slider for transition, giving the dev the option to
 * not animate, and override the pre and callback hooks
 *
 * @param <Number> nextPanel
 * @param <Bool> noAnimation
 * @param <Bool> noPretransition
 * @param <Bool> noPosttransition
 */
LiquidSlider.prepareTransition = function(nextPanel, noAnimation, noPretransition, noPosttransition) {
    var _this = this;

    // Override panel
    _this.nextPanel = nextPanel || 0;

    // Option to not update classes, etc
    noPretransition || _this.pretransition(_this.options.pretransition);

    // stores some variables, then sends to pretransition hook
    _this.noAnimation = noAnimation;
    _this.noPosttransition = noPosttransition;
    if (!_this.loaded) {
        _this.transition();
    } else {
        _this.options.pretransition.call(_this);
    }
};

LiquidSlider.pretransition = function() {
    var _this = this;

    _this.options.hashLinking       && _this.updateHashTags();
    _this.options.mobileNavigation  && _this.dropdownSelect.val('tab' + (_this.nextPanel + 1));
    _this.options.hideSideArrows    && _this.hideShowArrows();
    _this.updateClass();
};

LiquidSlider.getTransitionMargin = function() {
    var _this = this;

    return -(_this.nextPanel * _this.slideDistance) -
        (_this.slideDistance * ~~(_this.options.continuous));
};

LiquidSlider.transition = function() {
    var _this = this,
        marginLeft = _this.getTransitionMargin();

    if (_this.animateCSS && _this.loaded) {
        _this.transitionOutAnimateCSS();
        return false;
    }

    // Only slide if we are going to a new panel
    if ((marginLeft + _this.pSign) !== (_this.panelContainer).css('margin-left') || (marginLeft !== -100)) {

        // Adjust the height
        (_this.options.autoHeight && !_this.animateCSS) && _this.adjustHeight(true, _this.getHeight());

        // SLIDE!
        switch (true) {
            case _this.fade:
                _this.transitionFade();
                break;
            case _this.animateCSS:
                _this.transitionInAnimateCSS(marginLeft);
                break;
            case _this.useCSS:
                _this.transitionCSS(marginLeft, _this.noAnimation);
                break;
            default:
                _this.transitionjQuery(marginLeft, _this.noAnimation);
                break;
        }
    }
    _this.noPosttransition || _this.callback(_this.options.callback);
};

// TODO run these together
// TODO this seems buggy in the demo
LiquidSlider.transitionOutAnimateCSS = function() {
    var _this = this;

    jQuery(_this.panelClass).removeClass(_this.options.animateIn + ' animated');
    jQuery(_this.panelClass).eq(_this.prevPanel).addClass('animated ' + _this.options.animateOut);
    _this.callback(_this.transitionInAnimateCSS, undefined);
};

// TODO run these together
LiquidSlider.transitionInAnimateCSS = function() {
    var _this = this;

    _this.options.autoHeight && _this.adjustHeight(false, _this.getHeight());
    _this.transitionCSS(_this.getTransitionMargin(), !_this.loaded);
    jQuery(_this.panelClass).removeClass(_this.options.animateOut + ' animated');
    jQuery(_this.panelClass).eq(_this.nextPanel).addClass('animated ' + _this.options.animateIn);
    _this.callback(_this.options.callback, undefined);
};

LiquidSlider.transitionCSS = function(marginLeft, noAnimation) {
    var _this = this;

    noAnimation && _this.configureCSSTransitions('0', '0');
    (_this.panelContainer).css({
        '-webkit-transform': 'translate3d(' + marginLeft + _this.pSign + ', 0, 0)',
        '-moz-transform': 'translate3d(' + marginLeft + _this.pSign + ', 0, 0)',
        '-ms-transform': 'translate3d(' + marginLeft + _this.pSign + ', 0, 0)',
        '-o-transform': 'translate3d(' + marginLeft + _this.pSign + ', 0, 0)',
        'transform': 'translate3d(' + marginLeft + _this.pSign + ', 0, 0)'
    });

    // Reset transitions
    if (noAnimation) {
        _this.callback(function() {
            _this.configureCSSTransitions();
        });
    } else {
        _this.configureCSSTransitions();
    }
};

LiquidSlider.transitionjQuery = function(marginLeft, noAnimation) {
    var _this = this;

    if (noAnimation) {
        (_this.panelContainer).css('margin-left', marginLeft + _this.pSign);
    } else {
        (_this.panelContainer).animate({
            'margin-left': marginLeft + _this.pSign
        }, {
            easing: jQuery.easing.hasOwnProperty(_this.options.slideEaseFunction) ? _this.options.slideEaseFunction : _this.options.slideEaseFunctionFallback,
            duration: _this.options.slideEaseDuration,
            queue: false
        });
    }
};

/**
 * Returns the height of the upcoming panel,
 * but allows the dev to specify a minimum
 *
 * @param <Number> height
 */
LiquidSlider.getHeight = function(height) {
    var _this = this;

    height = height || _this.$panelClass.eq(_this.sanitizeNumber(_this.nextPanel) - 1).outerHeight(true);

    // Allows a minimum height in the settings to override
    height = (height < _this.options.minHeight) ? _this.options.minHeight : height;
    return height;
};

/**
 * Looks for the heighest panel in the entire slider
 *
 * @param <Number> height
 */
LiquidSlider.getHeighestPanel = function() {
    var _this = this,
        height,
        heighest = 0;

    _this.$panelClass.each(function() {
        height = jQuery(this).outerHeight(true);
        heighest = (height > heighest) ? height : heighest;
    });
    if (_this.options.autoHeight) return heighest;
};

/**
 * Basically checks if we need to jump panels
 * at the end of a transition while using the
 * continuous option (verify we are in the right place)
 */
LiquidSlider.verifyPanel = function() {
    var _this = this,
        clickable = false;

    // Continuous slide requires careful clicking
    if (_this.options.continuous) {

        // If they click beyond, run it through again.
        switch (true) {

            // Clicking too far right
            case (_this.nextPanel > _this.panelCount):
                _this.nextPanel = _this.panelCount;
                _this.setNextPanel(_this.panelCount);
                break;

            // Clicking too far left
            case (_this.nextPanel < -1):
                _this.nextPanel = -1;
                _this.setNextPanel(-1);
                break;

            // Clicking to a cloned panel
            case clickable || ((_this.nextPanel === _this.panelCount) || (_this.nextPanel === -1)):

                // If on a cloned panel, return to the intended panel
                _this.prepareTransition(_this.nextPanel);
                _this.updateClass();
                clearTimeout(cloneJumper);
                var cloneJumper = setTimeout(function() {

                    // But do not jump until the transition is complete
                    if (_this.nextPanel === _this.panelCount) {
                        _this.prepareTransition(0, true, true, true);
                    } else if (_this.nextPanel === -1) {
                        _this.prepareTransition(_this.panelCount - 1, true, true, true);
                    }
                }, _this.options.slideEaseDuration + 50);
                break;

            // The default transition
            default:
                clickable = true;
                _this.prepareTransition(_this.nextPanel);
                break;
        }
    } else {

        // Non-continuous just needs to stay in bounds
        if (_this.nextPanel === _this.panelCount) {
            _this.nextPanel = 0;
        } else if (_this.nextPanel === -1) {
            _this.nextPanel = (_this.panelCount - 1);
        }
        _this.prepareTransition(_this.nextPanel);
    }
};

/**
 * This will add the navigation to the slider.
 * navClass isn't use internally, but may be used
 * with the API (untested)
 *
 * @param <String> navClass
 */
LiquidSlider.addNavigation = function(navClass) {
    var _this = this,
        dynamicTabsElm = '<' + _this.options.navElementTag + ' class="ls-nav"><ul id="' +
            (_this.$elem).attr('id') + '-nav-ul"></ul></' + _this.options.navElementTag + '>';

    // Add basic frame
    if (_this.options.dynamicTabsPosition === 'bottom') {
        (_this.$sliderId).after(dynamicTabsElm);
    } else {
        (_this.$sliderId).before(dynamicTabsElm);
    }

    // Add responsive navigation
    if (_this.options.mobileNavigation) {
        var selectBoxDefault = (_this.options.mobileNavDefaultText) ?
            '<option disabled="disabled" selected="selected">' +
            _this.options.mobileNavDefaultText + '</option>' :
                null,
            dropDownList = '<div class="ls-select-box"><select id="' +
                (_this.$elem).attr('id') + '-nav-select" name="navigation">' +
                selectBoxDefault + '</select></div>';

        // cache elements
        _this.navigation = jQuery(_this.sliderId + '-nav-ul').before(dropDownList);
        _this.dropdown = jQuery(_this.sliderId + '-wrapper .ls-select-box');
        _this.dropdownSelect = jQuery(_this.sliderId + '-nav-select');

        jQuery.each(
            (_this.$elem).find(_this.options.panelTitleSelector),
            function(n) {
                jQuery((_this.$sliderWrap)).find('.ls-select-box select')
                    .append('<option value="tab' + (n + 1) + '">' +
                        jQuery(this).text() + '</option>');
            }
        );
    }

    // Add standard navigation (tabs)
    jQuery.each(
        (_this.$elem).find(_this.options.panelTitleSelector),
        function(n) {
            jQuery((_this.$sliderWrap)).find('.ls-nav ul').append('<li class="tab' +
                (n + 1) + '"><a class="' + ( navClass || 'slider-tab') + '" href="#' +
                (n + 1) + '">' + _this.getNavInsides(this) + '</a></li>');
            if (!_this.options.includeTitle) jQuery(this).remove();
        }
    );
};

/**
 * Returns the title that will be used,
 * supports html or a string.
 *
 * @param <Element> input
 * @return <String or Element>
 */
LiquidSlider.getNavInsides = function(input) {
    return (this.options.dynamicTabsHtml) ? jQuery(input).html() : jQuery(input).text();
};

LiquidSlider.alignNavigation = function() {
    var _this = this,
        arrow = (_this.options.dynamicArrowsGraphical) ? '-arrow' : '';

    // Set the alignment, adjusting for margins
    if (_this.options.dynamicTabsAlign !== 'center') {
        if (!_this.options.responsive) {
            jQuery((_this.$sliderWrap)).find('.ls-nav ul').css(
                'margin-' + _this.options.dynamicTabsAlign,

                // Finds the width of the arrows and the margin
                jQuery((_this.$sliderWrap)).find(
                    '.ls-nav-' +
                    _this.options.dynamicTabsAlign +
                    arrow
                ).outerWidth(true) + parseInt((_this.$sliderId)
                    .css('margin-' + _this.options.dynamicTabsAlign), 10)
            );
        }
        jQuery((_this.$sliderWrap)).find('.ls-nav ul').css('float', _this.options.dynamicTabsAlign);
    }
    _this.totalNavWidth = jQuery((_this.$sliderWrap)).find('.ls-nav ul').outerWidth(true);
    if (_this.options.dynamicTabsAlign === 'center') {

        // Get total width of the navigation tabs and center it
        _this.totalNavWidth = 0;
        jQuery((_this.$sliderWrap)).find('.ls-nav li a').each(function() {
            _this.totalNavWidth += jQuery(this).outerWidth(true);
        });
        jQuery((_this.$sliderWrap)).find('.ls-nav ul').css('width', _this.totalNavWidth + 1);
    }
};

LiquidSlider.registerNav = function() {
    var _this = this;
    (_this.$sliderWrap).find('[class^=ls-nav] li').on('click', function(e) {
        e.preventDefault();
        _this.setNextPanel(parseInt(jQuery(this).attr('class').split('tab')[1], 10) - 1);
        return false;
    });
};

/**
 * This will add the arrows to the slider.
 * arrowClass isn't use internally, but may be used
 * with the API (untested)
 *
 * @param <String> arrowClass
 */
LiquidSlider.addArrows = function(arrowClass) {
    var _this = this,
        arrow = (_this.options.dynamicArrowsGraphical) ? "-arrow " : ' ';
    (_this.$sliderWrap).addClass("arrows");

    if (_this.options.dynamicArrowsGraphical) {
        _this.options.dynamicArrowLeftText = '';
        _this.options.dynamicArrowRightText = '';
    }

    // Build the arrows
    (_this.$sliderId).before('<div class="ls-nav-left' + arrow + (arrowClass || '') +
        '"><a href="#"><i class="fa fa-chevron-left"></i></a></div>');
    (_this.$sliderId).after('<div class="ls-nav-right' + arrow + (arrowClass || '') +
        '"><a href="#"><i class="fa fa-chevron-right"></i></a></div>');

    _this.leftArrow = jQuery(_this.sliderId + '-wrapper [class^=ls-nav-left]')
        .css('visibility', "hidden").addClass('ls-hidden');
    _this.rightArrow = jQuery(_this.sliderId + '-wrapper [class^=ls-nav-right]')
        .css('visibility', "hidden").addClass('ls-hidden');
    if (!_this.options.hoverArrows) _this.hideShowArrows(undefined, true, true, false);
};

/**
 * Handles when arrows will show and whether
 * to hide both, show both, etc.
 * Also allows override of the fade speed
 *
 * @param <Number> speed
 * @param <Bool> forceVisibility
 * @param <Bool> showBoth
 * @param <Bool> hideBoth
 */
LiquidSlider.hideShowArrows = function(speed, forceVisibility, showBoth, hideBoth) {
    var _this = this,
        fadeOut = (typeof speed !== 'undefined') ? speed : _this.options.fadeOutDuration,
        fadeIn = (typeof speed !== 'undefined') ? speed : _this.options.fadeInDuration,
        visibility = forceVisibility ? "visible" : "hidden";

    if (!showBoth && (hideBoth || (_this.sanitizeNumber(_this.nextPanel) === 1))) {
        _this.leftArrow.stop().fadeTo(fadeOut, 0, function() {
            jQuery(this).css('visibility', visibility).addClass('ls-hidden');
        });
    } else if (showBoth || _this.leftArrow.hasClass('ls-hidden')) {
        _this.leftArrow.stop().css('visibility', "visible").fadeTo(fadeIn, 1).removeClass('ls-hidden');
    }
    if (!showBoth && (hideBoth || (_this.sanitizeNumber(_this.nextPanel) === _this.panelCount))) {
        _this.rightArrow.stop().fadeTo(fadeOut, 0, function() {
            jQuery(this).css('visibility', visibility).addClass('ls-hidden');
        });
    } else if (showBoth || _this.rightArrow.hasClass('ls-hidden')) {
        _this.rightArrow.stop().css('visibility', "visible").fadeTo(fadeIn, 1).removeClass('ls-hidden');
    }
};

LiquidSlider.registerArrows = function() {
    var _this = this;

    jQuery((_this.$sliderWrap).find('[class^=ls-nav-]')).on('click', function(e) {
        e.preventDefault();
        _this.setNextPanel(jQuery(this).attr('class').split(' ')[0].split('-')[2]);
    });
};

/**
 * Provides options for adjusting the height,
 * including the ability to use different easing,
 * speed and height.
 *
 * @param <Number> noAnimation
 * @param <Bool> height
 * @param <Bool> easing
 * @param <Bool> duration
 */
LiquidSlider.adjustHeight = function(noAnimation, height, easing, duration) {
    var _this = this;

    if (noAnimation || _this.useCSS) {
        noAnimation && _this.configureCSSTransitions('0', '0');
        (_this.$sliderId).height(height);
        noAnimation && _this.configureCSSTransitions();
        return;
    }
    (_this.$sliderId).animate({
        'height': height + 'px'
    }, {
        easing: jQuery.easing.hasOwnProperty(easing || _this.options.heightEaseFunction) ? easing || _this.options.heightEaseFunction : _this.options.slideEaseFunctionFallback,
        duration: duration || _this.options.heightEaseDuration,
        queue: false
    });
};

LiquidSlider.autoSlide = function() {
    var _this = this;

    // Can't set the autoSlide slower than the easing ;-)
    if (_this.options.autoSlideInterval < _this.options.slideEaseDuration) {
        _this.options.autoSlideInterval =
            (_this.options.slideEaseDuration > _this.options.heightEaseDuration) ?
                _this.options.slideEaseDuration : _this.options.heightEaseDuration;
    }

    // Only run the autoslide if the tab is in focus
    _this.autoSlideTimeout = !document.hasFocus() ? undefined : setTimeout(function() {

        // Slide left or right
        _this.setNextPanel(_this.options.autoSlideDirection);
        _this.autoSlide();
    }, _this.options.autoSlideInterval);

    // Register a focus and blur event to reset autoslide
    jQuery(window).on('focus', function() {
        _this.startAutoSlide(true);
    });
    jQuery(window).on('blur', function() {
        _this.stopAutoSlide();
    });
};

LiquidSlider.stopAutoSlide = function() {
    var _this = this;

    _this.options.autoSlide = false;
    clearTimeout(_this.autoSlideTimeout);
};

/**
 * Starts the autoslide. reset will keep from
 * too many timers running
 *
 * @param <Bool> reset
 */
LiquidSlider.startAutoSlide = function(reset) {
    var _this = this;

    _this.options.autoSlide = true;
    reset || _this.setNextPanel(_this.options.autoSlideDirection);
    _this.autoSlide(clearTimeout(_this.autoSlideTimeout));
};

LiquidSlider.buildHashTags = function() {
    var _this = this;

    _this.hashLinks = [];
    jQuery(_this.panelClass + ' ' + _this.options.hashTitleSelector).each(function() {
        _this.hashLinks.push(_this.convertRegex($(this).text()));
    });
};

LiquidSlider.updateHashTags = function() {
    var _this = this;

    window.location.hash = _this.hashLinks[_this.sanitizeNumber(_this.nextPanel) -1];
};

LiquidSlider.registerKeyboard = function() {
    var _this = this;

    jQuery(document).keydown(function(event) {
        var key = event.keyCode || event.which;
        if (event.target.type !== 'textarea' && event.target.type !== 'textbox') {

            // Off the autoSlider
            _this.options.forceAutoSlide      || jQuery(this).trigger('click');
            (key === _this.options.leftKey)   && _this.setNextPanel('right');
            (key === _this.options.rightKey)  && _this.setNextPanel('left');

            // Set each panel key
            jQuery.each(_this.options.panelKeys, function(index, value) {
                (key === value) && _this.setNextPanel(index - 1);
            });
        }
    });
};

LiquidSlider.addPreloader = function() {
    var _this = this;

    jQuery(_this.sliderId + '-wrapper').append('<div class="ls-preloader"></div>');
};

LiquidSlider.removePreloader = function() {
    var _this = this;

    jQuery(_this.sliderId + '-wrapper .ls-preloader').fadeTo('slow', 0, function() {
        jQuery(this).remove();
    });
};

LiquidSlider.makeResponsive = function() {
    var _this = this;

    // Adjust widths and add classes to make responsive
    jQuery(_this.sliderId + '-wrapper').addClass('ls-responsive').css({
        'max-width': jQuery(_this.sliderId + ' .ls-panel:first-child').width(),
        'width': '100%'
    });

    // Update widths
    jQuery(_this.sliderId + ' .panel-container').css('width', 100 * _this.panelCountTotal + _this.pSign);
    jQuery(_this.sliderId + ' .ls-panel').css('width', 100 / _this.panelCountTotal + _this.pSign);

    // convert to pixels
    jQuery(_this.sliderId + ' .ls-panel').css('width', jQuery(_this.sliderId).outerWidth(true));

    // Cache the padding for add/removing arrows
    if (_this.options.hideArrowsWhenMobile) {
        _this.leftWrapperPadding = jQuery(_this.sliderId + '-wrapper').css('padding-left');
        _this.rightWrapperPadding = (_this.$sliderWrap).css('padding-right');
    }

    // Set events and fire on browser resize
    _this.responsiveEvents();
    jQuery(window).bind('resize orientationchange', function() {
        _this.responsiveEvents();

        clearTimeout(_this.resizingTimeout);
        _this.resizingTimeout = setTimeout(function() {
            var height = (_this.options.autoHeight) ? _this.getHeight() : _this.getHeighestPanel(_this.nextPanel);
            _this.adjustHeight(false, height);
            // convert to pixels
            jQuery(_this.sliderId + ' .ls-panel').css('width', jQuery(_this.sliderId).outerWidth(true));
        }, 500);
    });
};

LiquidSlider.responsiveEvents = function() {
    var _this = this,
        mobileNavChangeOver = (_this.options.hideArrowsThreshold ||
        _this.options.mobileUIThreshold ||
        (_this.totalNavWidth + 10));

    // Test the width while resixing
    if ((_this.$sliderId).outerWidth() < mobileNavChangeOver) {
        if (_this.options.mobileNavigation) {
            (_this.navigation).css('display', 'none');
            (_this.dropdown).css('display', 'block');
            (_this.dropdownSelect).css('display', 'block');

            // Update the navigation
            jQuery(_this.sliderId + '-nav-select').val(_this.options.mobileNavDefaultText);
        }
        if (_this.options.dynamicArrows) {
            if (_this.options.hideArrowsWhenMobile) {
                (_this.leftArrow).remove().length = 0;
                (_this.rightArrow).remove().length = 0;
            } else if (!_this.options.dynamicArrowsGraphical) {

                // If using text arrows, let's move them to the top
                (_this.leftArrow).css('margin-' + _this.options.dynamicTabsPosition, '0');
                (_this.rightArrow).css('margin-' + _this.options.dynamicTabsPosition, '0');
            }
        }
    } else {
        if (_this.options.mobileNavigation) {
            (_this.navigation).css('display', 'block');
            (_this.dropdown).css('display', 'none');
            (_this.dropdownSelect).css('display', 'none');
        }
        if (_this.options.dynamicArrows) {
            if (_this.options.hideArrowsWhenMobile &&
                (!(_this.leftArrow).length || !(_this.rightArrow).length)) {
                _this.addArrows();
                _this.registerArrows();
            } else if (!_this.options.dynamicArrowsGraphical && _this.options.mobileNavigation) {

                // Reposition the text arrows
                (_this.leftArrow).css('margin-' +
                    _this.options.dynamicTabsPosition, (_this.navigation).css('height'));
                (_this.rightArrow).css('margin-' +
                    _this.options.dynamicTabsPosition, (_this.navigation).css('height'));
            }
        }
    }

    // While resizing, set the width to 100%
    jQuery(_this.sliderId + '-wrapper').css('width', '100%');
    _this.loaded && jQuery(_this.sliderId + ' .ls-panel').width(100 / _this.panelCountTotal + _this.pSign);

    // Update when the select box changes
    _this.options.mobileNavigation &&
    (_this.dropdownSelect).change(function() {
        _this.setNextPanel(parseInt(jQuery(this).val().split('tab')[1], 10) - 1);
    });
};

LiquidSlider.registerTouch = function() {
    var _this = this,
        args = _this.options.swipeArgs || {
                fallbackToMouseEvents: false,
                allowPageScroll: 'vertical',
                swipe: function(e, dir) {
                    if (dir === 'up' || dir === 'down') return false;

                    // Reverse the swipe direction
                    _this.swipeDir = (dir === 'left') ? 'right' : 'left';
                    _this.setNextPanel(_this.swipeDir);
                }};
    jQuery(_this.sliderId + ' .ls-panel').swipe(args);
};

;(function($){$.fn.camera = function(opts, callback) {
    var defaults = {


        alignment			: 'center', //topLeft, topCenter, topRight, centerLeft, center, centerRight, bottomLeft, bottomCenter, bottomRight

        autoAdvance			: true,	//true, false

        mobileAutoAdvance	: true, //true, false. Auto-advancing for mobile devices

        barDirection		: 'leftToRight',	//'leftToRight', 'rightToLeft', 'topToBottom', 'bottomToTop'

        barPosition			: 'bottom',	//'bottom', 'left', 'top', 'right'

        cols				: 6,

        easing				: 'easeInOutExpo',	//for the complete list http://jqueryui.com/demos/effect/easing.html

        mobileEasing		: '',	//leave empty if you want to display the same easing on mobile devices and on desktop etc.

        fx					: 'random',	//'random','simpleFade', 'curtainTopLeft', 'curtainTopRight', 'curtainBottomLeft', 'curtainBottomRight', 'curtainSliceLeft', 'curtainSliceRight', 'blindCurtainTopLeft', 'blindCurtainTopRight', 'blindCurtainBottomLeft', 'blindCurtainBottomRight', 'blindCurtainSliceBottom', 'blindCurtainSliceTop', 'stampede', 'mosaic', 'mosaicReverse', 'mosaicRandom', 'mosaicSpiral', 'mosaicSpiralReverse', 'topLeftBottomRight', 'bottomRightTopLeft', 'bottomLeftTopRight', 'bottomLeftTopRight'
        //you can also use more than one effect, just separate them with commas: 'simpleFade, scrollRight, scrollBottom'

        mobileFx			: '',	//leave empty if you want to display the same effect on mobile devices and on desktop etc.

        gridDifference		: 250,	//to make the grid blocks slower than the slices, this value must be smaller than transPeriod

        height				: '450px',	//here you can type pixels (for instance '300px'), a percentage (relative to the width of the slideshow, for instance '50%') or 'auto'

        imagePath			: 'images/',	//he path to the image folder (it serves for the blank.gif, when you want to display videos)

        hover				: true,	//true, false. Puase on state hover. Not available for mobile devices

        loader				: 'pie',	//pie, bar, none (even if you choose "pie", old browsers like IE8- can't display it... they will display always a loading bar)

        loaderColor			: '#eeeeee',

        loaderBgColor		: '#222222',

        loaderOpacity		: .8,	//0, .1, .2, .3, .4, .5, .6, .7, .8, .9, 1

        loaderPadding		: 2,	//how many empty pixels you want to display between the loader and its background

        loaderStroke		: 7,	//the thickness both of the pie loader and of the bar loader. Remember: for the pie, the loader thickness must be less than a half of the pie diameter

        minHeight			: '200px',	//you can also leave it blank

        navigation			: true,	//true or false, to display or not the navigation buttons

        navigationHover		: true,	//if true the navigation button (prev, next and play/stop buttons) will be visible on hover state only, if false they will be visible always

        mobileNavHover		: true,	//same as above, but only for mobile devices

        opacityOnGrid		: false,	//true, false. Decide to apply a fade effect to blocks and slices: if your slideshow is fullscreen or simply big, I recommend to set it false to have a smoother effect

        overlayer			: true,	//a layer on the images to prevent the users grab them simply by clicking the right button of their mouse (.camera_overlayer)

        pagination			: true,

        playPause			: false,	//true or false, to display or not the play/pause buttons

        pauseOnClick		: true,	//true, false. It stops the slideshow when you click the sliders.

        pieDiameter			: 38,

        piePosition			: 'rightTop',	//'rightTop', 'leftTop', 'leftBottom', 'rightBottom'

        portrait			: false, //true, false. Select true if you don't want that your images are cropped

        rows				: 4,

        slicedCols			: 12,	//if 0 the same value of cols

        slicedRows			: 8,	//if 0 the same value of rows

        slideOn				: 'random',	//next, prev, random: decide if the transition effect will be applied to the current (prev) or the next slide

        thumbnails			: false,

        time				: 7000,	//milliseconds between the end of the sliding effect and the start of the nex one

        transPeriod			: 1500,	//lenght of the sliding effect in milliseconds

////////callbacks

        onEndTransition		: function() {  },	//this callback is invoked when the transition effect ends

        onLoaded			: function() {  },	//this callback is invoked when the image on a slide has completely loaded

        onStartLoading		: function() {  },	//this callback is invoked when the image on a slide start loading

        onStartTransition	: function() {  }	//this callback is invoked when the transition effect starts

    };

    'use strict';
    function isMobile() {
        if( navigator.userAgent.match(/Android/i) ||
            navigator.userAgent.match(/webOS/i) ||
            navigator.userAgent.match(/iPad/i) ||
            navigator.userAgent.match(/iPhone/i) ||
            navigator.userAgent.match(/iPod/i)
        ){
            return true;
        }
    }

    var opts = $.extend({}, defaults, opts);

    var wrap = $(this).addClass('camera_wrap');

    wrap.wrapInner(
        '<div class="camera_src" />'
    ).wrapInner(
        '<div class="camera_fakehover" />'
    );

    var fakeHover = $('.camera_fakehover',wrap);

    fakeHover.append(
        '<div class="camera_target"></div>'
    );
    if(opts.overlayer == true){
        fakeHover.append(
            '<div class="camera_overlayer"></div>'
        )
    }
    fakeHover.append(
        '<div class="camera_target_content"></div>'
    );

    var loader;

    if(opts.loader=='pie' && $.browser.msie && $.browser.version < 9){
        loader = 'bar';
    } else {
        loader = opts.loader;
    }

    if(loader == 'pie'){
        fakeHover.append(
            '<div class="camera_pie"></div>'
        )
    } else if (loader == 'bar') {
        fakeHover.append(
            '<div class="camera_bar"></div>'
        )
    } else {
        fakeHover.append(
            '<div class="camera_bar" style="display:none"></div>'
        )
    }

    if(opts.playPause==true){
        fakeHover.append(
            '<div class="camera_commands"></div>'
        )
    }

    if(opts.navigation==true){
        fakeHover.append(
            '<div class="camera_prev"><span><i class="fa fa-chevron-left"></i></span></div>'
        ).append(
            '<div class="camera_next"><span><i class="fa fa-chevron-right"></i></span></div>'
        );
    }

    if(opts.thumbnails==true){
        wrap.append(
            '<div class="camera_thumbs_cont" />'
        );
    }

    if(opts.thumbnails==true && opts.pagination!=true){
        $('.camera_thumbs_cont',wrap).wrap(
            '<div />'
        ).wrap(
            '<div class="camera_thumbs" />'
        ).wrap(
            '<div />'
        ).wrap(
            '<div class="camera_command_wrap" />'
        );
    }

    if(opts.pagination==true){
        wrap.append(
            '<div class="camera_pag"></div>'
        );
    }

    wrap.append(
        '<div class="camera_loader"></div>'
    );

    $('.camera_caption',wrap).each(function(){
        $(this).wrapInner('<div />');
    });


    var pieID = 'pie_'+wrap.index(),
        elem = $('.camera_src',wrap),
        target = $('.camera_target',wrap),
        content = $('.camera_target_content',wrap),
        pieContainer = $('.camera_pie',wrap),
        barContainer = $('.camera_bar',wrap),
        prevNav = $('.camera_prev',wrap),
        nextNav = $('.camera_next',wrap),
        commands = $('.camera_commands',wrap),
        pagination = $('.camera_pag',wrap),
        thumbs = $('.camera_thumbs_cont',wrap);


    var w,
        h;


    var allImg = new Array();
    $('> div', elem).each( function() {
        allImg.push($(this).attr('data-src'));
    });

    var allLinks = new Array();
    $('> div', elem).each( function() {
        if($(this).attr('data-link')){
            allLinks.push($(this).attr('data-link'));
        } else {
            allLinks.push('');
        }
    });

    var allTargets = new Array();
    $('> div', elem).each( function() {
        if($(this).attr('data-target')){
            allTargets.push($(this).attr('data-target'));
        } else {
            allTargets.push('');
        }
    });

    var allPor = new Array();
    $('> div', elem).each( function() {
        if($(this).attr('data-portrait')){
            allPor.push($(this).attr('data-portrait'));
        } else {
            allPor.push('');
        }
    });

    var allAlign= new Array();
    $('> div', elem).each( function() {
        if($(this).attr('data-alignment')){
            allAlign.push($(this).attr('data-alignment'));
        } else {
            allAlign.push('');
        }
    });


    var allThumbs = new Array();
    $('> div', elem).each( function() {
        if($(this).attr('data-thumb')){
            allThumbs.push($(this).attr('data-thumb'));
        } else {
            allThumbs.push('');
        }
    });

    var amountSlide = allImg.length;

    $(content).append('<div class="cameraContents" />');
    var loopMove;
    for (loopMove=0;loopMove<amountSlide;loopMove++)
    {
        $('.cameraContents',content).append('<div class="cameraContent" />');
        if(allLinks[loopMove]!=''){
            //only for Wordpress plugin
            var dataBox = $('> div ',elem).eq(loopMove).attr('data-box');
            if(typeof dataBox !== 'undefined' && dataBox !== false && dataBox != '') {
                dataBox = 'data-box="'+$('> div ',elem).eq(loopMove).attr('data-box')+'"';
            } else {
                dataBox = '';
            }
            //
            $('.camera_target_content .cameraContent:eq('+loopMove+')',wrap).append('<a class="camera_link" href="'+allLinks[loopMove]+'" '+dataBox+' target="'+allTargets[loopMove]+'"></a>');
        }

    }
    $('.camera_caption',wrap).each(function(){
        var ind = $(this).parent().index(),
            cont = wrap.find('.cameraContent').eq(ind);
        $(this).appendTo(cont);
    });

    target.append('<div class="cameraCont" />');
    var cameraCont = $('.cameraCont',wrap);



    var loop;
    for (loop=0;loop<amountSlide;loop++)
    {
        cameraCont.append('<div class="cameraSlide cameraSlide_'+loop+'" />');
        var div = $('> div:eq('+loop+')',elem);
        target.find('.cameraSlide_'+loop).clone(div);
    }


    function thumbnailVisible() {
        var wTh = $(thumbs).width();
        $('li', thumbs).removeClass('camera_visThumb');
        $('li', thumbs).each(function(){
            var pos = $(this).position(),
                ulW = $('ul', thumbs).outerWidth(),
                offUl = $('ul', thumbs).offset().left,
                offDiv = $('> div',thumbs).offset().left,
                ulLeft = offDiv-offUl;
            if(ulLeft>0){
                $('.camera_prevThumbs',camera_thumbs_wrap).removeClass('hideNav');
            } else {
                $('.camera_prevThumbs',camera_thumbs_wrap).addClass('hideNav');
            }
            if((ulW-ulLeft)>wTh){
                $('.camera_nextThumbs',camera_thumbs_wrap).removeClass('hideNav');
            } else {
                $('.camera_nextThumbs',camera_thumbs_wrap).addClass('hideNav');
            }
            var left = pos.left,
                right = pos.left+($(this).width());
            if(right-ulLeft<=wTh && left-ulLeft>=0){
                $(this).addClass('camera_visThumb');
            }
        });
    }

    $(window).bind('load resize pageshow',function(){
        thumbnailPos();
        thumbnailVisible();
    });


    cameraCont.append('<div class="cameraSlide cameraSlide_'+loop+'" />');


    var started;

    wrap.show();
    var w = target.width();
    var h = target.height();

    var setPause;

    $(window).bind('resize pageshow',function(){
        if(started == true) {
            resizeImage();
        }
        $('ul', thumbs).animate({'margin-top':0},0,thumbnailPos);
        if(!elem.hasClass('paused')){
            elem.addClass('paused');
            if($('.camera_stop',camera_thumbs_wrap).length){
                $('.camera_stop',camera_thumbs_wrap).hide()
                $('.camera_play',camera_thumbs_wrap).show();
                if(loader!='none'){
                    $('#'+pieID).hide();
                }
            } else {
                if(loader!='none'){
                    $('#'+pieID).hide();
                }
            }
            clearTimeout(setPause);
            setPause = setTimeout(function(){
                elem.removeClass('paused');
                if($('.camera_play',camera_thumbs_wrap).length){
                    $('.camera_play',camera_thumbs_wrap).hide();
                    $('.camera_stop',camera_thumbs_wrap).show();
                    if(loader!='none'){
                        $('#'+pieID).fadeIn();
                    }
                } else {
                    if(loader!='none'){
                        $('#'+pieID).fadeIn();
                    }
                }
            },1500);
        }
    });

    function resizeImage(){
        var res;
        function resizeImageWork(){
            w = wrap.width();
            if(opts.height.indexOf('%')!=-1) {
                var startH = Math.round(w / (100/parseFloat(opts.height)));
                if(opts.minHeight != '' && startH < parseFloat(opts.minHeight)){
                    h = parseFloat(opts.minHeight);
                } else {
                    h = startH;
                }
                wrap.css({height:h});
            } else if (opts.height=='auto') {
                h = wrap.height();
            } else {
                h = parseFloat(opts.height);
                wrap.css({height:h});
            }
            $('.camerarelative',target).css({'width':w,'height':h});
            $('.imgLoaded',target).each(function(){
                var t = $(this),
                    wT = t.attr('width'),
                    hT = t.attr('height'),
                    imgLoadIn = t.index(),
                    mTop,
                    mLeft,
                    alignment = t.attr('data-alignment'),
                    portrait =  t.attr('data-portrait');

                if(typeof alignment === 'undefined' || alignment === false || alignment === ''){
                    alignment = opts.alignment;
                }

                if(typeof portrait === 'undefined' || portrait === false || portrait === ''){
                    portrait = opts.portrait;
                }

                if(portrait==false||portrait=='false'){
                    if((wT/hT)<(w/h)) {
                        var r = w / wT;
                        var d = (Math.abs(h - (hT*r)))*0.5;
                        switch(alignment){
                            case 'topLeft':
                                mTop = 0;
                                break;
                            case 'topCenter':
                                mTop = 0;
                                break;
                            case 'topRight':
                                mTop = 0;
                                break;
                            case 'centerLeft':
                                mTop = '-'+d+'px';
                                break;
                            case 'center':
                                mTop = '-'+d+'px';
                                break;
                            case 'centerRight':
                                mTop = '-'+d+'px';
                                break;
                            case 'bottomLeft':
                                mTop = '-'+d*2+'px';
                                break;
                            case 'bottomCenter':
                                mTop = '-'+d*2+'px';
                                break;
                            case 'bottomRight':
                                mTop = '-'+d*2+'px';
                                break;
                        }
                        t.css({
                            'height' : hT*r,
                            'margin-left' : 0,
                            'margin-top' : mTop,
                            'position' : 'absolute',
                            'visibility' : 'visible',
                            'width' : w
                        });
                    }
                    else {
                        var r = h / hT;
                        var d = (Math.abs(w - (wT*r)))*0.5;
                        switch(alignment){
                            case 'topLeft':
                                mLeft = 0;
                                break;
                            case 'topCenter':
                                mLeft = '-'+d+'px';
                                break;
                            case 'topRight':
                                mLeft = '-'+d*2+'px';
                                break;
                            case 'centerLeft':
                                mLeft = 0;
                                break;
                            case 'center':
                                mLeft = '-'+d+'px';
                                break;
                            case 'centerRight':
                                mLeft = '-'+d*2+'px';
                                break;
                            case 'bottomLeft':
                                mLeft = 0;
                                break;
                            case 'bottomCenter':
                                mLeft = '-'+d+'px';
                                break;
                            case 'bottomRight':
                                mLeft = '-'+d*2+'px';
                                break;
                        }
                        t.css({
                            'height' : h,
                            'margin-left' : mLeft,
                            'margin-top' : 0,
                            'position' : 'absolute',
                            'visibility' : 'visible',
                            'width' : wT*r
                        });
                    }
                } else {
                    if((wT/hT)<(w/h)) {
                        var r = h / hT;
                        var d = (Math.abs(w - (wT*r)))*0.5;
                        switch(alignment){
                            case 'topLeft':
                                mLeft = 0;
                                break;
                            case 'topCenter':
                                mLeft = d+'px';
                                break;
                            case 'topRight':
                                mLeft = d*2+'px';
                                break;
                            case 'centerLeft':
                                mLeft = 0;
                                break;
                            case 'center':
                                mLeft = d+'px';
                                break;
                            case 'centerRight':
                                mLeft = d*2+'px';
                                break;
                            case 'bottomLeft':
                                mLeft = 0;
                                break;
                            case 'bottomCenter':
                                mLeft = d+'px';
                                break;
                            case 'bottomRight':
                                mLeft = d*2+'px';
                                break;
                        }
                        t.css({
                            'height' : h,
                            'margin-left' : mLeft,
                            'margin-top' : 0,
                            'position' : 'absolute',
                            'visibility' : 'visible',
                            'width' : wT*r
                        });
                    }
                    else {
                        var r = w / wT;
                        var d = (Math.abs(h - (hT*r)))*0.5;
                        switch(alignment){
                            case 'topLeft':
                                mTop = 0;
                                break;
                            case 'topCenter':
                                mTop = 0;
                                break;
                            case 'topRight':
                                mTop = 0;
                                break;
                            case 'centerLeft':
                                mTop = d+'px';
                                break;
                            case 'center':
                                mTop = d+'px';
                                break;
                            case 'centerRight':
                                mTop = d+'px';
                                break;
                            case 'bottomLeft':
                                mTop = d*2+'px';
                                break;
                            case 'bottomCenter':
                                mTop = d*2+'px';
                                break;
                            case 'bottomRight':
                                mTop = d*2+'px';
                                break;
                        }
                        t.css({
                            'height' : hT*r,
                            'margin-left' : 0,
                            'margin-top' : mTop,
                            'position' : 'absolute',
                            'visibility' : 'visible',
                            'width' : w
                        });
                    }
                }
            });
        }
        if (started == true) {
            clearTimeout(res);
            res = setTimeout(resizeImageWork,200);
        } else {
            resizeImageWork();
        }

        started = true;
    }


    var u,
        setT;

    var clickEv,
        autoAdv,
        navHover,
        commands,
        pagination;

    var videoHover,
        videoPresent;

    if(isMobile() && opts.mobileAutoAdvance!=''){
        autoAdv = opts.mobileAutoAdvance;
    } else {
        autoAdv = opts.autoAdvance;
    }

    if(autoAdv==false){
        elem.addClass('paused');
    }

    if(isMobile() && opts.mobileNavHover!=''){
        navHover = opts.mobileNavHover;
    } else {
        navHover = opts.navigationHover;
    }

    if(elem.length!=0){

        var selector = $('.cameraSlide',target);
        selector.wrapInner('<div class="camerarelative" />');

        var navSlide;

        var barDirection = opts.barDirection;

        var camera_thumbs_wrap = wrap;


        $('iframe',fakeHover).each(function(){
            var t = $(this);
            var src = t.attr('src');
            t.attr('data-src',src);
            var divInd = t.parent().index('.camera_src > div');
            $('.camera_target_content .cameraContent:eq('+divInd+')',wrap).append(t);
        });
        function imgFake() {
            $('iframe',fakeHover).each(function(){
                $('.camera_caption',fakeHover).show();
                var t = $(this);
                var cloneSrc = t.attr('data-src');
                t.attr('src',cloneSrc);
                var imgFakeUrl = opts.imagePath+'blank.gif';
                var imgFake = new Image();
                imgFake.src = imgFakeUrl;
                if(opts.height.indexOf('%')!=-1) {
                    var startH = Math.round(w / (100/parseFloat(opts.height)));
                    if(opts.minHeight != '' && startH < parseFloat(opts.minHeight)){
                        h = parseFloat(opts.minHeight);
                    } else {
                        h = startH;
                    }
                } else if (opts.height=='auto') {
                    h = wrap.height();
                } else {
                    h = parseFloat(opts.height);
                }
                t.after($(imgFake).attr({'class':'imgFake','width':w,'height':h}));
                var clone = t.clone();
                t.remove();
                $(imgFake).bind('click',function(){
                    if($(this).css('position')=='absolute') {
                        $(this).remove();
                        if(cloneSrc.indexOf('vimeo') != -1 || cloneSrc.indexOf('youtube') != -1) {
                            if(cloneSrc.indexOf('?') != -1){
                                autoplay = '&autoplay=1';
                            } else {
                                autoplay = '?autoplay=1';
                            }
                        } else if(cloneSrc.indexOf('dailymotion') != -1) {
                            if(cloneSrc.indexOf('?') != -1){
                                autoplay = '&autoPlay=1';
                            } else {
                                autoplay = '?autoPlay=1';
                            }
                        }
                        clone.attr('src',cloneSrc+autoplay);
                        videoPresent = true;
                    } else {
                        $(this).css({position:'absolute',top:0,left:0,zIndex:10}).after(clone);
                        clone.css({position:'absolute',top:0,left:0,zIndex:9});
                    }
                });
            });
        }

        imgFake();


        if(opts.hover==true){
            if(!isMobile()){
                fakeHover.hover(function(){
                    elem.addClass('hovered');
                },function(){
                    elem.removeClass('hovered');
                });
            }
        }

        if(navHover==true){
            $(prevNav,wrap).animate({opacity:0},0);
            $(nextNav,wrap).animate({opacity:0},0);
            $(commands,wrap).animate({opacity:0},0);
            if(isMobile()){
                fakeHover.live('vmouseover',function(){
                    $(prevNav,wrap).animate({opacity:1},200);
                    $(nextNav,wrap).animate({opacity:1},200);
                    $(commands,wrap).animate({opacity:1},200);
                });
                fakeHover.live('vmouseout',function(){
                    $(prevNav,wrap).delay(500).animate({opacity:0},200);
                    $(nextNav,wrap).delay(500).animate({opacity:0},200);
                    $(commands,wrap).delay(500).animate({opacity:0},200);
                });
            } else {
                fakeHover.hover(function(){
                    $(prevNav,wrap).animate({opacity:1},200);
                    $(nextNav,wrap).animate({opacity:1},200);
                    $(commands,wrap).animate({opacity:1},200);
                },function(){
                    $(prevNav,wrap).animate({opacity:0},200);
                    $(nextNav,wrap).animate({opacity:0},200);
                    $(commands,wrap).animate({opacity:0},200);
                });
            }
        }


        $('.camera_stop',camera_thumbs_wrap).on('click',function(){
            autoAdv = false;
            elem.addClass('paused');
            if($('.camera_stop',camera_thumbs_wrap).length){
                $('.camera_stop',camera_thumbs_wrap).hide()
                $('.camera_play',camera_thumbs_wrap).show();
                if(loader!='none'){
                    $('#'+pieID).hide();
                }
            } else {
                if(loader!='none'){
                    $('#'+pieID).hide();
                }
            }
        });

        $('.camera_play',camera_thumbs_wrap).on('click',function(){
            autoAdv = true;
            elem.removeClass('paused');
            if($('.camera_play',camera_thumbs_wrap).length){
                $('.camera_play',camera_thumbs_wrap).hide();
                $('.camera_stop',camera_thumbs_wrap).show();
                if(loader!='none'){
                    $('#'+pieID).show();
                }
            } else {
                if(loader!='none'){
                    $('#'+pieID).show();
                }
            }
        });

        if(opts.pauseOnClick==true){
            $('.camera_target_content',fakeHover).mouseup(function(){
                autoAdv = false;
                elem.addClass('paused');
                $('.camera_stop',camera_thumbs_wrap).hide()
                $('.camera_play',camera_thumbs_wrap).show();
                $('#'+pieID).hide();
            });
        }
        $('.cameraContent, .imgFake',fakeHover).hover(function(){
            videoHover = true;
        },function(){
            videoHover = false;
        });

        $('.cameraContent, .imgFake',fakeHover).bind('click',function(){
            if(videoPresent == true && videoHover == true) {
                autoAdv = false;
                $('.camera_caption',fakeHover).hide();
                elem.addClass('paused');
                $('.camera_stop',camera_thumbs_wrap).hide()
                $('.camera_play',camera_thumbs_wrap).show();
                $('#'+pieID).hide();
            }
        });


    }


    function shuffle(arr) {
        for(
            var j, x, i = arr.length; i;
            j = parseInt(Math.random() * i),
                x = arr[--i], arr[i] = arr[j], arr[j] = x
        );
        return arr;
    }

    function isInteger(s) {
        return Math.ceil(s) == Math.floor(s);
    }

    if (loader != 'pie') {
        barContainer.append('<span class="camera_bar_cont" />');
        $('.camera_bar_cont',barContainer)
            .animate({opacity:opts.loaderOpacity},0)
            .css({'position':'absolute', 'left':0, 'right':0, 'top':0, 'bottom':0, 'background-color':opts.loaderBgColor})
            .append('<span id="'+pieID+'" />');
        $('#'+pieID).animate({opacity:0},0);
        var canvas = $('#'+pieID);
        canvas.css({'position':'absolute', 'background-color':opts.loaderColor});
        switch(opts.barPosition){
            case 'left':
                barContainer.css({right:'auto',width:opts.loaderStroke});
                break;
            case 'right':
                barContainer.css({left:'auto',width:opts.loaderStroke});
                break;
            case 'top':
                barContainer.css({bottom:'auto',height:opts.loaderStroke});
                break;
            case 'bottom':
                barContainer.css({top:'auto',height:opts.loaderStroke});
                break;
        }
        switch(barDirection){
            case 'leftToRight':
                canvas.css({'left':0, 'right':0, 'top':opts.loaderPadding, 'bottom':opts.loaderPadding});
                break;
            case 'rightToLeft':
                canvas.css({'left':0, 'right':0, 'top':opts.loaderPadding, 'bottom':opts.loaderPadding});
                break;
            case 'topToBottom':
                canvas.css({'left':opts.loaderPadding, 'right':opts.loaderPadding, 'top':0, 'bottom':0});
                break;
            case 'bottomToTop':
                canvas.css({'left':opts.loaderPadding, 'right':opts.loaderPadding, 'top':0, 'bottom':0});
                break;
        }
    } else {
        pieContainer.append('<canvas id="'+pieID+'"></canvas>');
        var G_vmlCanvasManager;
        var canvas = document.getElementById(pieID);
        canvas.setAttribute("width", opts.pieDiameter);
        canvas.setAttribute("height", opts.pieDiameter);
        var piePosition;
        switch(opts.piePosition){
            case 'leftTop' :
                piePosition = 'left:0; top:0;';
                break;
            case 'rightTop' :
                piePosition = 'right:0; top:0;';
                break;
            case 'leftBottom' :
                piePosition = 'left:0; bottom:0;';
                break;
            case 'rightBottom' :
                piePosition = 'right:0; bottom:0;';
                break;
        }
        canvas.setAttribute("style", "position:absolute; z-index:1002; "+piePosition);
        var rad;
        var radNew;

        if (canvas && canvas.getContext) {
            var ctx = canvas.getContext("2d");
            ctx.rotate(Math.PI*(3/2));
            ctx.translate(-opts.pieDiameter,0);
        }

    }
    if(loader=='none' || autoAdv==false) {
        $('#'+pieID).hide();
        $('.camera_canvas_wrap',camera_thumbs_wrap).hide();
    }

    if($(pagination).length) {
        $(pagination).append('<ul class="camera_pag_ul" />');
        var li;
        for (li = 0; li < amountSlide; li++){
            $('.camera_pag_ul',wrap).append('<li class="pag_nav_'+li+'" style="position:relative; z-index:1002"><span><span>'+li+'</span></span></li>');
        }
        $('.camera_pag_ul li',wrap).hover(function(){
            $(this).addClass('camera_hover');
            if($('.camera_thumb',this).length){
                var wTh = $('.camera_thumb',this).outerWidth(),
                    hTh = $('.camera_thumb',this).outerHeight(),
                    wTt = $(this).outerWidth();
                $('.camera_thumb',this).show().css({'top':'-'+hTh+'px','left':'-'+(wTh-wTt)/2+'px'}).animate({'opacity':1,'margin-top':'-3px'},200);
                $('.thumb_arrow',this).show().animate({'opacity':1,'margin-top':'-3px'},200);
            }
        },function(){
            $(this).removeClass('camera_hover');
            $('.camera_thumb',this).animate({'margin-top':'-20px','opacity':0},200,function(){
                $(this).css({marginTop:'5px'}).hide();
            });
            $('.thumb_arrow',this).animate({'margin-top':'-20px','opacity':0},200,function(){
                $(this).css({marginTop:'5px'}).hide();
            });
        });
    }



    if($(thumbs).length) {
        var thumbUrl;
        if(!$(pagination).length) {
            $(thumbs).append('<div />');
            $(thumbs).before('<div class="camera_prevThumbs hideNav"><div></div></div>').before('<div class="camera_nextThumbs hideNav"><div></div></div>');
            $('> div',thumbs).append('<ul />');
            $.each(allThumbs, function(i, val) {
                if($('> div', elem).eq(i).attr('data-thumb')!='') {
                    var thumbUrl = $('> div', elem).eq(i).attr('data-thumb'),
                        newImg = new Image();
                    newImg.src = thumbUrl;
                    $('ul',thumbs).append('<li class="pix_thumb pix_thumb_'+i+'" />');
                    $('li.pix_thumb_'+i,thumbs).append($(newImg).attr('class','camera_thumb'));
                }
            });
        } else {
            $.each(allThumbs, function(i, val) {
                if($('> div', elem).eq(i).attr('data-thumb')!='') {
                    var thumbUrl = $('> div', elem).eq(i).attr('data-thumb'),
                        newImg = new Image();
                    newImg.src = thumbUrl;
                    $('li.pag_nav_'+i,pagination).append($(newImg).attr('class','camera_thumb').css({'position':'absolute'}).animate({opacity:0},0));
                    $('li.pag_nav_'+i+' > img',pagination).after('<div class="thumb_arrow" />');
                    $('li.pag_nav_'+i+' > .thumb_arrow',pagination).animate({opacity:0},0);
                }
            });
            wrap.css({marginBottom:$(pagination).outerHeight()});
        }
    } else if(!$(thumbs).length && $(pagination).length) {
        wrap.css({marginBottom:$(pagination).outerHeight()});
    }


    var firstPos = true;

    function thumbnailPos() {
        if($(thumbs).length && !$(pagination).length) {
            var wTh = $(thumbs).outerWidth(),
                owTh = $('ul > li',thumbs).outerWidth(),
                pos = $('li.cameracurrent', thumbs).length ? $('li.cameracurrent', thumbs).position() : '',
                ulW = ($('ul > li', thumbs).length * $('ul > li', thumbs).outerWidth()),
                offUl = $('ul', thumbs).offset().left,
                offDiv = $('> div', thumbs).offset().left,
                ulLeft;

            if(offUl<0){
                ulLeft = '-'+ (offDiv-offUl);
            } else {
                ulLeft = offDiv-offUl;
            }



            if(firstPos == true) {
                $('ul', thumbs).width($('ul > li', thumbs).length * $('ul > li', thumbs).outerWidth());
                if($(thumbs).length && !$(pagination).lenght) {
                    wrap.css({marginBottom:$(thumbs).outerHeight()});
                }
                thumbnailVisible();
                /*I repeat this two lines because of a problem with iPhones*/
                $('ul', thumbs).width($('ul > li', thumbs).length * $('ul > li', thumbs).outerWidth());
                if($(thumbs).length && !$(pagination).lenght) {
                    wrap.css({marginBottom:$(thumbs).outerHeight()});
                }
                /*...*/
            }
            firstPos = false;

            var left = $('li.cameracurrent', thumbs).length ? pos.left : '',
                right = $('li.cameracurrent', thumbs).length ? pos.left+($('li.cameracurrent', thumbs).outerWidth()) : '';
            if(left<$('li.cameracurrent', thumbs).outerWidth()) {
                left = 0;
            }
            if(right-ulLeft>wTh){
                if((left+wTh)<ulW){
                    $('ul', thumbs).animate({'margin-left':'-'+(left)+'px'},500,thumbnailVisible);
                } else {
                    $('ul', thumbs).animate({'margin-left':'-'+($('ul', thumbs).outerWidth()-wTh)+'px'},500,thumbnailVisible);
                }
            } else if(left-ulLeft<0) {
                $('ul', thumbs).animate({'margin-left':'-'+(left)+'px'},500,thumbnailVisible);
            } else {
                $('ul', thumbs).css({'margin-left':'auto', 'margin-right':'auto'});
                setTimeout(thumbnailVisible,100);
            }

        }
    }

    if($(commands).length) {
        $(commands).append('<div class="camera_play"></div>').append('<div class="camera_stop"></div>');
        if(autoAdv==true){
            $('.camera_play',camera_thumbs_wrap).hide();
            $('.camera_stop',camera_thumbs_wrap).show();
        } else {
            $('.camera_stop',camera_thumbs_wrap).hide();
            $('.camera_play',camera_thumbs_wrap).show();
        }

    }


    function canvasLoader() {
        rad = 0;
        var barWidth = $('.camera_bar_cont',camera_thumbs_wrap).width(),
            barHeight = $('.camera_bar_cont',camera_thumbs_wrap).height();

        if (loader != 'pie') {
            switch(barDirection){
                case 'leftToRight':
                    $('#'+pieID).css({'right':barWidth});
                    break;
                case 'rightToLeft':
                    $('#'+pieID).css({'left':barWidth});
                    break;
                case 'topToBottom':
                    $('#'+pieID).css({'bottom':barHeight});
                    break;
                case 'bottomToTop':
                    $('#'+pieID).css({'top':barHeight});
                    break;
            }
        } else {
            ctx.clearRect(0,0,opts.pieDiameter,opts.pieDiameter);
        }
    }


    canvasLoader();


    $('.moveFromLeft, .moveFromRight, .moveFromTop, .moveFromBottom, .fadeIn, .fadeFromLeft, .fadeFromRight, .fadeFromTop, .fadeFromBottom',fakeHover).each(function(){
        $(this).css('visibility','hidden');
    });

    opts.onStartLoading.call(this);

    nextSlide();


    /*************************** FUNCTION nextSlide() ***************************/

    function nextSlide(navSlide){
        elem.addClass('camerasliding');

        videoPresent = false;
        var vis = parseFloat($('div.cameraSlide.cameracurrent',target).index());

        if(navSlide>0){
            var slideI = navSlide-1;
        } else if (vis == amountSlide-1) {
            var slideI = 0;
        } else {
            var slideI = vis+1;
        }


        var slide = $('.cameraSlide:eq('+slideI+')',target);
        var slideNext = $('.cameraSlide:eq('+(slideI+1)+')',target).addClass('cameranext');
        if( vis != slideI+1 ) {
            slideNext.hide();
        }
        $('.cameraContent',fakeHover).fadeOut(600);
        $('.camera_caption',fakeHover).show();

        $('.camerarelative',slide).append($('> div ',elem).eq(slideI).find('> div.camera_effected'));

        $('.camera_target_content .cameraContent:eq('+slideI+')',wrap).append($('> div ',elem).eq(slideI).find('> div'));

        if(!$('.imgLoaded',slide).length){
            var imgUrl = allImg[slideI];
            var imgLoaded = new Image();
            imgLoaded.src = imgUrl +"?"+ new Date().getTime();
            slide.css('visibility','hidden');
            slide.prepend($(imgLoaded).attr('class','imgLoaded').css('visibility','hidden'));
            var wT, hT;
            if (!$(imgLoaded).get(0).complete || wT == '0' || hT == '0' || typeof wT === 'undefined' || wT === false || typeof hT === 'undefined' || hT === false) {
                $('.camera_loader',wrap).delay(500).fadeIn(400);
                imgLoaded.onload = function() {
                    wT = imgLoaded.naturalWidth;
                    hT = imgLoaded.naturalHeight;
                    $(imgLoaded).attr('data-alignment',allAlign[slideI]).attr('data-portrait',allPor[slideI]);
                    $(imgLoaded).attr('width',wT);
                    $(imgLoaded).attr('height',hT);
                    target.find('.cameraSlide_'+slideI).hide().css('visibility','visible');
                    resizeImage();
                    nextSlide(slideI+1);
                };
            }
        } else {
            if( allImg.length > (slideI+1) && !$('.imgLoaded',slideNext).length ){
                var imgUrl2 = allImg[(slideI+1)];
                var imgLoaded2 = new Image();
                imgLoaded2.src = imgUrl2 +"?"+ new Date().getTime();
                slideNext.prepend($(imgLoaded2).attr('class','imgLoaded').css('visibility','hidden'));
                imgLoaded2.onload = function() {
                    wT = imgLoaded2.naturalWidth;
                    hT = imgLoaded2.naturalHeight;
                    $(imgLoaded2).attr('data-alignment',allAlign[slideI+1]).attr('data-portrait',allPor[slideI+1]);
                    $(imgLoaded2).attr('width',wT);
                    $(imgLoaded2).attr('height',hT);
                    resizeImage();
                };
            }
            opts.onLoaded.call(this);
            if($('.camera_loader',wrap).is(':visible')){
                $('.camera_loader',wrap).fadeOut(400);
            } else {
                $('.camera_loader',wrap).css({'visibility':'hidden'});
                $('.camera_loader',wrap).fadeOut(400,function(){
                    $('.camera_loader',wrap).css({'visibility':'visible'});
                });
            }
            var rows = opts.rows,
                cols = opts.cols,
                couples = 1,
                difference = 0,
                dataSlideOn,
                time,
                transPeriod,
                fx,
                easing,
                randomFx = new Array('simpleFade','curtainTopLeft','curtainTopRight','curtainBottomLeft','curtainBottomRight','curtainSliceLeft','curtainSliceRight','blindCurtainTopLeft','blindCurtainTopRight','blindCurtainBottomLeft','blindCurtainBottomRight','blindCurtainSliceBottom','blindCurtainSliceTop','stampede','mosaic','mosaicReverse','mosaicRandom','mosaicSpiral','mosaicSpiralReverse','topLeftBottomRight','bottomRightTopLeft','bottomLeftTopRight','topRightBottomLeft','scrollLeft','scrollRight','scrollTop','scrollBottom','scrollHorz');
            marginLeft = 0,
                marginTop = 0,
                opacityOnGrid = 0;

            if(opts.opacityOnGrid==true){
                opacityOnGrid = 0;
            } else {
                opacityOnGrid = 1;
            }



            var dataFx = $(' > div',elem).eq(slideI).attr('data-fx');

            if(isMobile()&&opts.mobileFx!=''&&opts.mobileFx!='default'){
                fx = opts.mobileFx;
            } else {
                if(typeof dataFx !== 'undefined' && dataFx!== false && dataFx!== 'default'){
                    fx = dataFx;
                } else {
                    fx = opts.fx;
                }
            }

            if(fx=='random') {
                fx = shuffle(randomFx);
                fx = fx[0];
            } else {
                fx = fx;
                if(fx.indexOf(',')>0){
                    fx = fx.replace(/ /g,'');
                    fx = fx.split(',');
                    fx = shuffle(fx);
                    fx = fx[0];
                }
            }

            dataEasing = $(' > div',elem).eq(slideI).attr('data-easing');
            mobileEasing = $(' > div',elem).eq(slideI).attr('data-mobileEasing');

            if(isMobile()&&opts.mobileEasing!=''&&opts.mobileEasing!='default'){
                if(typeof mobileEasing !== 'undefined' && mobileEasing!== false && mobileEasing!== 'default') {
                    easing = mobileEasing;
                } else {
                    easing = opts.mobileEasing;
                }
            } else {
                if(typeof dataEasing !== 'undefined' && dataEasing!== false && dataEasing!== 'default') {
                    easing = dataEasing;
                } else {
                    easing = opts.easing;
                }
            }

            dataSlideOn = $(' > div',elem).eq(slideI).attr('data-slideOn');
            if(typeof dataSlideOn !== 'undefined' && dataSlideOn!== false){
                slideOn = dataSlideOn;
            } else {
                if(opts.slideOn=='random'){
                    var slideOn = new Array('next','prev');
                    slideOn = shuffle(slideOn);
                    slideOn = slideOn[0];
                } else {
                    slideOn = opts.slideOn;
                }
            }

            var dataTime = $(' > div',elem).eq(slideI).attr('data-time');
            if(typeof dataTime !== 'undefined' && dataTime!== false && dataTime!== ''){
                time = parseFloat(dataTime);
            } else {
                time = opts.time;
            }

            var dataTransPeriod = $(' > div',elem).eq(slideI).attr('data-transPeriod');
            if(typeof dataTransPeriod !== 'undefined' && dataTransPeriod!== false && dataTransPeriod!== ''){
                transPeriod = parseFloat(dataTransPeriod);
            } else {
                transPeriod = opts.transPeriod;
            }

            if(!$(elem).hasClass('camerastarted')){
                fx = 'simpleFade';
                slideOn = 'next';
                easing = '';
                transPeriod = 400;
                $(elem).addClass('camerastarted')
            }

            switch(fx){
                case 'simpleFade':
                    cols = 1;
                    rows = 1;
                    break;
                case 'curtainTopLeft':
                    if(opts.slicedCols == 0) {
                        cols = opts.cols;
                    } else {
                        cols = opts.slicedCols;
                    }
                    rows = 1;
                    break;
                case 'curtainTopRight':
                    if(opts.slicedCols == 0) {
                        cols = opts.cols;
                    } else {
                        cols = opts.slicedCols;
                    }
                    rows = 1;
                    break;
                case 'curtainBottomLeft':
                    if(opts.slicedCols == 0) {
                        cols = opts.cols;
                    } else {
                        cols = opts.slicedCols;
                    }
                    rows = 1;
                    break;
                case 'curtainBottomRight':
                    if(opts.slicedCols == 0) {
                        cols = opts.cols;
                    } else {
                        cols = opts.slicedCols;
                    }
                    rows = 1;
                    break;
                case 'curtainSliceLeft':
                    if(opts.slicedCols == 0) {
                        cols = opts.cols;
                    } else {
                        cols = opts.slicedCols;
                    }
                    rows = 1;
                    break;
                case 'curtainSliceRight':
                    if(opts.slicedCols == 0) {
                        cols = opts.cols;
                    } else {
                        cols = opts.slicedCols;
                    }
                    rows = 1;
                    break;
                case 'blindCurtainTopLeft':
                    if(opts.slicedRows == 0) {
                        rows = opts.rows;
                    } else {
                        rows = opts.slicedRows;
                    }
                    cols = 1;
                    break;
                case 'blindCurtainTopRight':
                    if(opts.slicedRows == 0) {
                        rows = opts.rows;
                    } else {
                        rows = opts.slicedRows;
                    }
                    cols = 1;
                    break;
                case 'blindCurtainBottomLeft':
                    if(opts.slicedRows == 0) {
                        rows = opts.rows;
                    } else {
                        rows = opts.slicedRows;
                    }
                    cols = 1;
                    break;
                case 'blindCurtainBottomRight':
                    if(opts.slicedRows == 0) {
                        rows = opts.rows;
                    } else {
                        rows = opts.slicedRows;
                    }
                    cols = 1;
                    break;
                case 'blindCurtainSliceTop':
                    if(opts.slicedRows == 0) {
                        rows = opts.rows;
                    } else {
                        rows = opts.slicedRows;
                    }
                    cols = 1;
                    break;
                case 'blindCurtainSliceBottom':
                    if(opts.slicedRows == 0) {
                        rows = opts.rows;
                    } else {
                        rows = opts.slicedRows;
                    }
                    cols = 1;
                    break;
                case 'stampede':
                    difference = '-'+transPeriod;
                    break;
                case 'mosaic':
                    difference = opts.gridDifference;
                    break;
                case 'mosaicReverse':
                    difference = opts.gridDifference;
                    break;
                case 'mosaicRandom':
                    break;
                case 'mosaicSpiral':
                    difference = opts.gridDifference;
                    couples = 1.7;
                    break;
                case 'mosaicSpiralReverse':
                    difference = opts.gridDifference;
                    couples = 1.7;
                    break;
                case 'topLeftBottomRight':
                    difference = opts.gridDifference;
                    couples = 6;
                    break;
                case 'bottomRightTopLeft':
                    difference = opts.gridDifference;
                    couples = 6;
                    break;
                case 'bottomLeftTopRight':
                    difference = opts.gridDifference;
                    couples = 6;
                    break;
                case 'topRightBottomLeft':
                    difference = opts.gridDifference;
                    couples = 6;
                    break;
                case 'scrollLeft':
                    cols = 1;
                    rows = 1;
                    break;
                case 'scrollRight':
                    cols = 1;
                    rows = 1;
                    break;
                case 'scrollTop':
                    cols = 1;
                    rows = 1;
                    break;
                case 'scrollBottom':
                    cols = 1;
                    rows = 1;
                    break;
                case 'scrollHorz':
                    cols = 1;
                    rows = 1;
                    break;
            }

            var cycle = 0;
            var blocks = rows*cols;
            var leftScrap = w-(Math.floor(w/cols)*cols);
            var topScrap = h-(Math.floor(h/rows)*rows);
            var addLeft;
            var addTop;
            var tAppW = 0;
            var tAppH = 0;
            var arr = new Array();
            var delay = new Array();
            var order = new Array();
            while(cycle < blocks){
                arr.push(cycle);
                delay.push(cycle);
                cameraCont.append('<div class="cameraappended" style="display:none; overflow:hidden; position:absolute; z-index:1000" />');
                var tApp = $('.cameraappended:eq('+cycle+')',target);
                if(fx=='scrollLeft' || fx=='scrollRight' || fx=='scrollTop' || fx=='scrollBottom' || fx=='scrollHorz'){
                    selector.eq(slideI).clone().show().appendTo(tApp);
                } else {
                    if(slideOn=='next'){
                        selector.eq(slideI).clone().show().appendTo(tApp);
                    } else {
                        selector.eq(vis).clone().show().appendTo(tApp);
                    }
                }

                if(cycle%cols<leftScrap){
                    addLeft = 1;
                } else {
                    addLeft = 0;
                }
                if(cycle%cols==0){
                    tAppW = 0;
                }
                if(Math.floor(cycle/cols)<topScrap){
                    addTop = 1;
                } else {
                    addTop = 0;
                }
                tApp.css({
                    'height': Math.floor((h/rows)+addTop+1),
                    'left': tAppW,
                    'top': tAppH,
                    'width': Math.floor((w/cols)+addLeft+1)
                });
                $('> .cameraSlide', tApp).css({
                    'height': h,
                    'margin-left': '-'+tAppW+'px',
                    'margin-top': '-'+tAppH+'px',
                    'width': w
                });
                tAppW = tAppW+tApp.width()-1;
                if(cycle%cols==cols-1){
                    tAppH = tAppH + tApp.height() - 1;
                }
                cycle++;
            }



            switch(fx){
                case 'curtainTopLeft':
                    break;
                case 'curtainBottomLeft':
                    break;
                case 'curtainSliceLeft':
                    break;
                case 'curtainTopRight':
                    arr = arr.reverse();
                    break;
                case 'curtainBottomRight':
                    arr = arr.reverse();
                    break;
                case 'curtainSliceRight':
                    arr = arr.reverse();
                    break;
                case 'blindCurtainTopLeft':
                    break;
                case 'blindCurtainBottomLeft':
                    arr = arr.reverse();
                    break;
                case 'blindCurtainSliceTop':
                    break;
                case 'blindCurtainTopRight':
                    break;
                case 'blindCurtainBottomRight':
                    arr = arr.reverse();
                    break;
                case 'blindCurtainSliceBottom':
                    arr = arr.reverse();
                    break;
                case 'stampede':
                    arr = shuffle(arr);
                    break;
                case 'mosaic':
                    break;
                case 'mosaicReverse':
                    arr = arr.reverse();
                    break;
                case 'mosaicRandom':
                    arr = shuffle(arr);
                    break;
                case 'mosaicSpiral':
                    var rows2 = rows/2, x, y, z, n=0;
                    for (z = 0; z < rows2; z++){
                        y = z;
                        for (x = z; x < cols - z - 1; x++) {
                            order[n++] = y * cols + x;
                        }
                        x = cols - z - 1;
                        for (y = z; y < rows - z - 1; y++) {
                            order[n++] = y * cols + x;
                        }
                        y = rows - z - 1;
                        for (x = cols - z - 1; x > z; x--) {
                            order[n++] = y * cols + x;
                        }
                        x = z;
                        for (y = rows - z - 1; y > z; y--) {
                            order[n++] = y * cols + x;
                        }
                    }

                    arr = order;

                    break;
                case 'mosaicSpiralReverse':
                    var rows2 = rows/2, x, y, z, n=blocks-1;
                    for (z = 0; z < rows2; z++){
                        y = z;
                        for (x = z; x < cols - z - 1; x++) {
                            order[n--] = y * cols + x;
                        }
                        x = cols - z - 1;
                        for (y = z; y < rows - z - 1; y++) {
                            order[n--] = y * cols + x;
                        }
                        y = rows - z - 1;
                        for (x = cols - z - 1; x > z; x--) {
                            order[n--] = y * cols + x;
                        }
                        x = z;
                        for (y = rows - z - 1; y > z; y--) {
                            order[n--] = y * cols + x;
                        }
                    }

                    arr = order;

                    break;
                case 'topLeftBottomRight':
                    for (var y = 0; y < rows; y++)
                        for (var x = 0; x < cols; x++) {
                            order.push(x + y);
                        }
                    delay = order;
                    break;
                case 'bottomRightTopLeft':
                    for (var y = 0; y < rows; y++)
                        for (var x = 0; x < cols; x++) {
                            order.push(x + y);
                        }
                    delay = order.reverse();
                    break;
                case 'bottomLeftTopRight':
                    for (var y = rows; y > 0; y--)
                        for (var x = 0; x < cols; x++) {
                            order.push(x + y);
                        }
                    delay = order;
                    break;
                case 'topRightBottomLeft':
                    for (var y = 0; y < rows; y++)
                        for (var x = cols; x > 0; x--) {
                            order.push(x + y);
                        }
                    delay = order;
                    break;
            }



            $.each(arr, function(index, value) {

                if(value%cols<leftScrap){
                    addLeft = 1;
                } else {
                    addLeft = 0;
                }
                if(value%cols==0){
                    tAppW = 0;
                }
                if(Math.floor(value/cols)<topScrap){
                    addTop = 1;
                } else {
                    addTop = 0;
                }

                switch(fx){
                    case 'simpleFade':
                        height = h;
                        width = w;
                        opacityOnGrid = 0;
                        break;
                    case 'curtainTopLeft':
                        height = 0,
                            width = Math.floor((w/cols)+addLeft+1),
                            marginTop = '-'+Math.floor((h/rows)+addTop+1)+'px';
                        break;
                    case 'curtainTopRight':
                        height = 0,
                            width = Math.floor((w/cols)+addLeft+1),
                            marginTop = '-'+Math.floor((h/rows)+addTop+1)+'px';
                        break;
                    case 'curtainBottomLeft':
                        height = 0,
                            width = Math.floor((w/cols)+addLeft+1),
                            marginTop = Math.floor((h/rows)+addTop+1)+'px';
                        break;
                    case 'curtainBottomRight':
                        height = 0,
                            width = Math.floor((w/cols)+addLeft+1),
                            marginTop = Math.floor((h/rows)+addTop+1)+'px';
                        break;
                    case 'curtainSliceLeft':
                        height = 0,
                            width = Math.floor((w/cols)+addLeft+1);
                        if(value%2==0){
                            marginTop = Math.floor((h/rows)+addTop+1)+'px';
                        } else {
                            marginTop = '-'+Math.floor((h/rows)+addTop+1)+'px';
                        }
                        break;
                    case 'curtainSliceRight':
                        height = 0,
                            width = Math.floor((w/cols)+addLeft+1);
                        if(value%2==0){
                            marginTop = Math.floor((h/rows)+addTop+1)+'px';
                        } else {
                            marginTop = '-'+Math.floor((h/rows)+addTop+1)+'px';
                        }
                        break;
                    case 'blindCurtainTopLeft':
                        height = Math.floor((h/rows)+addTop+1),
                            width = 0,
                            marginLeft = '-'+Math.floor((w/cols)+addLeft+1)+'px';
                        break;
                    case 'blindCurtainTopRight':
                        height = Math.floor((h/rows)+addTop+1),
                            width = 0,
                            marginLeft = Math.floor((w/cols)+addLeft+1)+'px';
                        break;
                    case 'blindCurtainBottomLeft':
                        height = Math.floor((h/rows)+addTop+1),
                            width = 0,
                            marginLeft = '-'+Math.floor((w/cols)+addLeft+1)+'px';
                        break;
                    case 'blindCurtainBottomRight':
                        height = Math.floor((h/rows)+addTop+1),
                            width = 0,
                            marginLeft = Math.floor((w/cols)+addLeft+1)+'px';
                        break;
                    case 'blindCurtainSliceBottom':
                        height = Math.floor((h/rows)+addTop+1),
                            width = 0;
                        if(value%2==0){
                            marginLeft = '-'+Math.floor((w/cols)+addLeft+1)+'px';
                        } else {
                            marginLeft = Math.floor((w/cols)+addLeft+1)+'px';
                        }
                        break;
                    case 'blindCurtainSliceTop':
                        height = Math.floor((h/rows)+addTop+1),
                            width = 0;
                        if(value%2==0){
                            marginLeft = '-'+Math.floor((w/cols)+addLeft+1)+'px';
                        } else {
                            marginLeft = Math.floor((w/cols)+addLeft+1)+'px';
                        }
                        break;
                    case 'stampede':
                        height = 0;
                        width = 0;
                        marginLeft = (w*0.2)*(((index)%cols)-(cols-(Math.floor(cols/2))))+'px';
                        marginTop = (h*0.2)*((Math.floor(index/cols)+1)-(rows-(Math.floor(rows/2))))+'px';
                        break;
                    case 'mosaic':
                        height = 0;
                        width = 0;
                        break;
                    case 'mosaicReverse':
                        height = 0;
                        width = 0;
                        marginLeft = Math.floor((w/cols)+addLeft+1)+'px';
                        marginTop = Math.floor((h/rows)+addTop+1)+'px';
                        break;
                    case 'mosaicRandom':
                        height = 0;
                        width = 0;
                        marginLeft = Math.floor((w/cols)+addLeft+1)*0.5+'px';
                        marginTop = Math.floor((h/rows)+addTop+1)*0.5+'px';
                        break;
                    case 'mosaicSpiral':
                        height = 0;
                        width = 0;
                        marginLeft = Math.floor((w/cols)+addLeft+1)*0.5+'px';
                        marginTop = Math.floor((h/rows)+addTop+1)*0.5+'px';
                        break;
                    case 'mosaicSpiralReverse':
                        height = 0;
                        width = 0;
                        marginLeft = Math.floor((w/cols)+addLeft+1)*0.5+'px';
                        marginTop = Math.floor((h/rows)+addTop+1)*0.5+'px';
                        break;
                    case 'topLeftBottomRight':
                        height = 0;
                        width = 0;
                        break;
                    case 'bottomRightTopLeft':
                        height = 0;
                        width = 0;
                        marginLeft = Math.floor((w/cols)+addLeft+1)+'px';
                        marginTop = Math.floor((h/rows)+addTop+1)+'px';
                        break;
                    case 'bottomLeftTopRight':
                        height = 0;
                        width = 0;
                        marginLeft = 0;
                        marginTop = Math.floor((h/rows)+addTop+1)+'px';
                        break;
                    case 'topRightBottomLeft':
                        height = 0;
                        width = 0;
                        marginLeft = Math.floor((w/cols)+addLeft+1)+'px';
                        marginTop = 0;
                        break;
                    case 'scrollRight':
                        height = h;
                        width = w;
                        marginLeft = -w;
                        break;
                    case 'scrollLeft':
                        height = h;
                        width = w;
                        marginLeft = w;
                        break;
                    case 'scrollTop':
                        height = h;
                        width = w;
                        marginTop = h;
                        break;
                    case 'scrollBottom':
                        height = h;
                        width = w;
                        marginTop = -h;
                        break;
                    case 'scrollHorz':
                        height = h;
                        width = w;
                        if(vis==0 && slideI==amountSlide-1) {
                            marginLeft = -w;
                        } else if(vis<slideI  || (vis==amountSlide-1 && slideI==0)) {
                            marginLeft = w;
                        } else {
                            marginLeft = -w;
                        }
                        break;
                }


                var tApp = $('.cameraappended:eq('+value+')',target);

                if(typeof u !== 'undefined'){
                    clearInterval(u);
                    clearTimeout(setT);
                    setT = setTimeout(canvasLoader,transPeriod+difference);
                }


                if($(pagination).length){
                    $('.camera_pag li',wrap).removeClass('cameracurrent');
                    $('.camera_pag li',wrap).eq(slideI).addClass('cameracurrent');
                }

                if($(thumbs).length){
                    $('li', thumbs).removeClass('cameracurrent');
                    $('li', thumbs).eq(slideI).addClass('cameracurrent');
                    $('li', thumbs).not('.cameracurrent').find('img').animate({opacity:.5,},0);
                    $('li.cameracurrent img', thumbs).animate({opacity:1},0);
                    $('li', thumbs).hover(function(){
                        $('img',this).stop(true,false).animate({opacity:1},150);
                    },function(){
                        if(!$(this).hasClass('cameracurrent')){
                            $('img',this).stop(true,false).animate({opacity:.5},150);
                        }
                    });
                }


                var easedTime = parseFloat(transPeriod)+parseFloat(difference);

                function cameraeased() {

                    $(this).addClass('cameraeased');
                    if($('.cameraeased',target).length>=0){
                        $(thumbs).css({visibility:'visible'});
                    }
                    if($('.cameraeased',target).length==blocks){

                        thumbnailPos();

                        $('.moveFromLeft, .moveFromRight, .moveFromTop, .moveFromBottom, .fadeIn, .fadeFromLeft, .fadeFromRight, .fadeFromTop, .fadeFromBottom',fakeHover).each(function(){
                            $(this).css('visibility','hidden');
                        });

                        selector.eq(slideI).show().css('z-index','999').removeClass('cameranext').addClass('cameracurrent');
                        selector.eq(vis).css('z-index','1').removeClass('cameracurrent');
                        $('.cameraContent',fakeHover).eq(slideI).addClass('cameracurrent');
                        if (vis >= 0) {
                            $('.cameraContent',fakeHover).eq(vis).removeClass('cameracurrent');
                        }

                        opts.onEndTransition.call(this);

                        if($('> div', elem).eq(slideI).attr('data-video')!='hide' && $('.cameraContent.cameracurrent .imgFake',fakeHover).length ){
                            $('.cameraContent.cameracurrent .imgFake',fakeHover).click();
                        }


                        var lMoveIn = selector.eq(slideI).find('.fadeIn').length;
                        var lMoveInContent = $('.cameraContent',fakeHover).eq(slideI).find('.moveFromLeft, .moveFromRight, .moveFromTop, .moveFromBottom, .fadeIn, .fadeFromLeft, .fadeFromRight, .fadeFromTop, .fadeFromBottom').length;

                        if (lMoveIn!=0){
                            $('.cameraSlide.cameracurrent .fadeIn',fakeHover).each(function(){
                                if($(this).attr('data-easing')!=''){
                                    var easeMove = $(this).attr('data-easing');
                                } else {
                                    var easeMove = easing;
                                }
                                var t = $(this);
                                if(typeof t.attr('data-outerWidth') === 'undefined' || t.attr('data-outerWidth') === false || t.attr('data-outerWidth') === '') {
                                    var wMoveIn = t.outerWidth();
                                    t.attr('data-outerWidth',wMoveIn);
                                } else {
                                    var wMoveIn = t.attr('data-outerWidth');
                                }
                                if(typeof t.attr('data-outerHeight') === 'undefined' || t.attr('data-outerHeight') === false || t.attr('data-outerHeight') === '') {
                                    var hMoveIn = t.outerHeight();
                                    t.attr('data-outerHeight',hMoveIn);
                                } else {
                                    var hMoveIn = t.attr('data-outerHeight');
                                }
                                //t.css('width',wMoveIn);
                                var pos = t.position();
                                var left = pos.left;
                                var top = pos.top;
                                var tClass = t.attr('class');
                                var ind = t.index();
                                var hRel = t.parents('.camerarelative').outerHeight();
                                var wRel = t.parents('.camerarelative').outerWidth();
                                if(tClass.indexOf("fadeIn") != -1) {
                                    t.animate({opacity:0},0).css('visibility','visible').delay((time/lMoveIn)*(0.1*(ind-1))).animate({opacity:1},(time/lMoveIn)*0.15,easeMove);
                                } else {
                                    t.css('visibility','visible');
                                }
                            });
                        }

                        $('.cameraContent.cameracurrent',fakeHover).show();
                        if (lMoveInContent!=0){

                            $('.cameraContent.cameracurrent .moveFromLeft, .cameraContent.cameracurrent .moveFromRight, .cameraContent.cameracurrent .moveFromTop, .cameraContent.cameracurrent .moveFromBottom, .cameraContent.cameracurrent .fadeIn, .cameraContent.cameracurrent .fadeFromLeft, .cameraContent.cameracurrent .fadeFromRight, .cameraContent.cameracurrent .fadeFromTop, .cameraContent.cameracurrent .fadeFromBottom',fakeHover).each(function(){
                                if($(this).attr('data-easing')!=''){
                                    var easeMove = $(this).attr('data-easing');
                                } else {
                                    var easeMove = easing;
                                }
                                var t = $(this);
                                var pos = t.position();
                                var left = pos.left;
                                var top = pos.top;
                                var tClass = t.attr('class');
                                var ind = t.index();
                                var thisH = t.outerHeight();
                                if(tClass.indexOf("moveFromLeft") != -1) {
                                    t.css({'left':'-'+(w)+'px','right':'auto'});
                                    t.css('visibility','visible').delay((time/lMoveInContent)*(0.1*(ind-1))).animate({'left':pos.left},(time/lMoveInContent)*0.15,easeMove);
                                } else if(tClass.indexOf("moveFromRight") != -1) {
                                    t.css({'left':w+'px','right':'auto'});
                                    t.css('visibility','visible').delay((time/lMoveInContent)*(0.1*(ind-1))).animate({'left':pos.left},(time/lMoveInContent)*0.15,easeMove);
                                } else if(tClass.indexOf("moveFromTop") != -1) {
                                    t.css({'top':'-'+h+'px','bottom':'auto'});
                                    t.css('visibility','visible').delay((time/lMoveInContent)*(0.1*(ind-1))).animate({'top':pos.top},(time/lMoveInContent)*0.15,easeMove,function(){
                                        t.css({top:'auto',bottom:0});
                                    });
                                } else if(tClass.indexOf("moveFromBottom") != -1) {
                                    t.css({'top':h+'px','bottom':'auto'});
                                    t.css('visibility','visible').delay((time/lMoveInContent)*(0.1*(ind-1))).animate({'top':pos.top},(time/lMoveInContent)*0.15,easeMove);
                                } else if(tClass.indexOf("fadeFromLeft") != -1) {
                                    t.animate({opacity:0},0).css({'left':'-'+(w)+'px','right':'auto'});
                                    t.css('visibility','visible').delay((time/lMoveInContent)*(0.1*(ind-1))).animate({'left':pos.left,opacity:1},(time/lMoveInContent)*0.15,easeMove);
                                } else if(tClass.indexOf("fadeFromRight") != -1) {
                                    t.animate({opacity:0},0).css({'left':(w)+'px','right':'auto'});
                                    t.css('visibility','visible').delay((time/lMoveInContent)*(0.1*(ind-1))).animate({'left':pos.left,opacity:1},(time/lMoveInContent)*0.15,easeMove);
                                } else if(tClass.indexOf("fadeFromTop") != -1) {
                                    t.animate({opacity:0},0).css({'top':'-'+(h)+'px','bottom':'auto'});
                                    t.css('visibility','visible').delay((time/lMoveInContent)*(0.1*(ind-1))).animate({'top':pos.top,opacity:1},(time/lMoveInContent)*0.15,easeMove,function(){
                                        t.css({top:'auto',bottom:0});
                                    });
                                } else if(tClass.indexOf("fadeFromBottom") != -1) {
                                    t.animate({opacity:0},0).css({'bottom':'-'+thisH+'px'});
                                    t.css('visibility','visible').delay((time/lMoveInContent)*(0.1*(ind-1))).animate({'bottom':'0',opacity:1},(time/lMoveInContent)*0.15,easeMove);
                                } else if(tClass.indexOf("fadeIn") != -1) {
                                    t.animate({opacity:0},0).css('visibility','visible').delay((time/lMoveInContent)*(0.1*(ind-1))).animate({opacity:1},(time/lMoveInContent)*0.15,easeMove);
                                } else {
                                    t.css('visibility','visible');
                                }
                            });
                        }


                        $('.cameraappended',target).remove();
                        elem.removeClass('camerasliding');
                        selector.eq(vis).hide();
                        var barWidth = $('.camera_bar_cont',camera_thumbs_wrap).width(),
                            barHeight = $('.camera_bar_cont',camera_thumbs_wrap).height(),
                            radSum;
                        if (loader != 'pie') {
                            radSum = 0.05;
                        } else {
                            radSum = 0.005;
                        }
                        $('#'+pieID).animate({opacity:opts.loaderOpacity},200);
                        u = setInterval(
                            function(){
                                if(elem.hasClass('stopped')){
                                    clearInterval(u);
                                }
                                if (loader != 'pie') {
                                    if(rad<=1.002 && !elem.hasClass('stopped') && !elem.hasClass('paused') && !elem.hasClass('hovered')){
                                        rad = (rad+radSum);
                                    } else if (rad<=1 && (elem.hasClass('stopped') || elem.hasClass('paused') || elem.hasClass('stopped') || elem.hasClass('hovered'))){
                                        rad = rad;
                                    } else {
                                        if(!elem.hasClass('stopped') && !elem.hasClass('paused') && !elem.hasClass('hovered')) {
                                            clearInterval(u);
                                            imgFake();
                                            $('#'+pieID).animate({opacity:0},200,function(){
                                                clearTimeout(setT);
                                                setT = setTimeout(canvasLoader,easedTime);
                                                nextSlide();
                                                opts.onStartLoading.call(this);
                                            });
                                        }
                                    }
                                    switch(barDirection){
                                        case 'leftToRight':
                                            $('#'+pieID).animate({'right':barWidth-(barWidth*rad)},(time*radSum),'linear');
                                            break;
                                        case 'rightToLeft':
                                            $('#'+pieID).animate({'left':barWidth-(barWidth*rad)},(time*radSum),'linear');
                                            break;
                                        case 'topToBottom':
                                            $('#'+pieID).animate({'bottom':barHeight-(barHeight*rad)},(time*radSum),'linear');
                                            break;
                                        case 'bottomToTop':
                                            $('#'+pieID).animate({'bottom':barHeight-(barHeight*rad)},(time*radSum),'linear');
                                            break;
                                    }

                                } else {
                                    radNew = rad;
                                    ctx.clearRect(0,0,opts.pieDiameter,opts.pieDiameter);
                                    ctx.globalCompositeOperation = 'destination-over';
                                    ctx.beginPath();
                                    ctx.arc((opts.pieDiameter)/2, (opts.pieDiameter)/2, (opts.pieDiameter)/2-opts.loaderStroke,0,Math.PI*2,false);
                                    ctx.lineWidth = opts.loaderStroke;
                                    ctx.strokeStyle = opts.loaderBgColor;
                                    ctx.stroke();
                                    ctx.closePath();
                                    ctx.globalCompositeOperation = 'source-over';
                                    ctx.beginPath();
                                    ctx.arc((opts.pieDiameter)/2, (opts.pieDiameter)/2, (opts.pieDiameter)/2-opts.loaderStroke,0,Math.PI*2*radNew,false);
                                    ctx.lineWidth = opts.loaderStroke-(opts.loaderPadding*2);
                                    ctx.strokeStyle = opts.loaderColor;
                                    ctx.stroke();
                                    ctx.closePath();

                                    if(rad<=1.002 && !elem.hasClass('stopped') && !elem.hasClass('paused') && !elem.hasClass('hovered')){
                                        rad = (rad+radSum);
                                    } else if (rad<=1 && (elem.hasClass('stopped') || elem.hasClass('paused') || elem.hasClass('hovered'))){
                                        rad = rad;
                                    } else {
                                        if(!elem.hasClass('stopped') && !elem.hasClass('paused') && !elem.hasClass('hovered')) {
                                            clearInterval(u);
                                            imgFake();
                                            $('#'+pieID+', .camera_canvas_wrap',camera_thumbs_wrap).animate({opacity:0},200,function(){
                                                clearTimeout(setT);
                                                setT = setTimeout(canvasLoader,easedTime);
                                                nextSlide();
                                                opts.onStartLoading.call(this);
                                            });
                                        }
                                    }
                                }
                            },time*radSum
                        );
                    }

                }



                if(fx=='scrollLeft' || fx=='scrollRight' || fx=='scrollTop' || fx=='scrollBottom' || fx=='scrollHorz'){
                    opts.onStartTransition.call(this);
                    easedTime = 0;
                    tApp.delay((((transPeriod+difference)/blocks)*delay[index]*couples)*0.5).css({
                        'display' : 'block',
                        'height': height,
                        'margin-left': marginLeft,
                        'margin-top': marginTop,
                        'width': width
                    }).animate({
                        'height': Math.floor((h/rows)+addTop+1),
                        'margin-top' : 0,
                        'margin-left' : 0,
                        'width' : Math.floor((w/cols)+addLeft+1)
                    },(transPeriod-difference),easing,cameraeased);
                    selector.eq(vis).delay((((transPeriod+difference)/blocks)*delay[index]*couples)*0.5).animate({
                        'margin-left': marginLeft*(-1),
                        'margin-top': marginTop*(-1)
                    },(transPeriod-difference),easing,function(){
                        $(this).css({'margin-top' : 0,'margin-left' : 0});
                    });
                } else {
                    opts.onStartTransition.call(this);
                    easedTime = parseFloat(transPeriod)+parseFloat(difference);
                    if(slideOn=='next'){
                        tApp.delay((((transPeriod+difference)/blocks)*delay[index]*couples)*0.5).css({
                            'display' : 'block',
                            'height': height,
                            'margin-left': marginLeft,
                            'margin-top': marginTop,
                            'width': width,
                            'opacity' : opacityOnGrid
                        }).animate({
                            'height': Math.floor((h/rows)+addTop+1),
                            'margin-top' : 0,
                            'margin-left' : 0,
                            'opacity' : 1,
                            'width' : Math.floor((w/cols)+addLeft+1)
                        },(transPeriod-difference),easing,cameraeased);
                    } else {
                        selector.eq(slideI).show().css('z-index','999').addClass('cameracurrent');
                        selector.eq(vis).css('z-index','1').removeClass('cameracurrent');
                        $('.cameraContent',fakeHover).eq(slideI).addClass('cameracurrent');
                        $('.cameraContent',fakeHover).eq(vis).removeClass('cameracurrent');
                        tApp.delay((((transPeriod+difference)/blocks)*delay[index]*couples)*0.5).css({
                            'display' : 'block',
                            'height': Math.floor((h/rows)+addTop+1),
                            'margin-top' : 0,
                            'margin-left' : 0,
                            'opacity' : 1,
                            'width' : Math.floor((w/cols)+addLeft+1)
                        }).animate({
                            'height': height,
                            'margin-left': marginLeft,
                            'margin-top': marginTop,
                            'width': width,
                            'opacity' : opacityOnGrid
                        },(transPeriod-difference),easing,cameraeased);
                    }
                }





            });




        }
    }


    if($(prevNav).length){
        $(prevNav).on('click',function(){
            if(!elem.hasClass('camerasliding')){
                var idNum = parseFloat($('.cameraSlide.cameracurrent',target).index());
                clearInterval(u);
                imgFake();
                $('#'+pieID+', .camera_canvas_wrap',wrap).animate({opacity:0},0);
                canvasLoader();
                if(idNum!=0){
                    nextSlide(idNum);
                } else {
                    nextSlide(amountSlide);
                }
                opts.onStartLoading.call(this);
            }
        });
    }

    if($(nextNav).length){
        $(nextNav).on('click',function(){
            if(!elem.hasClass('camerasliding')){
                var idNum = parseFloat($('.cameraSlide.cameracurrent',target).index());
                clearInterval(u);
                imgFake();
                $('#'+pieID+', .camera_canvas_wrap',camera_thumbs_wrap).animate({opacity:0},0);
                canvasLoader();
                if(idNum==amountSlide-1){
                    nextSlide(1);
                } else {
                    nextSlide(idNum+2);
                }
                opts.onStartLoading.call(this);
            }
        });
    }


    if(isMobile()){
        fakeHover.bind('swipeleft',function(event){
            if(!elem.hasClass('camerasliding')){
                var idNum = parseFloat($('.cameraSlide.cameracurrent',target).index());
                clearInterval(u);
                imgFake();
                $('#'+pieID+', .camera_canvas_wrap',camera_thumbs_wrap).animate({opacity:0},0);
                canvasLoader();
                if(idNum==amountSlide-1){
                    nextSlide(1);
                } else {
                    nextSlide(idNum+2);
                }
                opts.onStartLoading.call(this);
            }
        });
        fakeHover.bind('swiperight',function(event){
            if(!elem.hasClass('camerasliding')){
                var idNum = parseFloat($('.cameraSlide.cameracurrent',target).index());
                clearInterval(u);
                imgFake();
                $('#'+pieID+', .camera_canvas_wrap',camera_thumbs_wrap).animate({opacity:0},0);
                canvasLoader();
                if(idNum!=0){
                    nextSlide(idNum);
                } else {
                    nextSlide(amountSlide);
                }
                opts.onStartLoading.call(this);
            }
        });
    }

    if($(pagination).length){
        $('.camera_pag li',wrap).on('click',function(){
            if(!elem.hasClass('camerasliding')){
                var idNum = parseFloat($(this).index());
                var curNum = parseFloat($('.cameraSlide.cameracurrent',target).index());
                if(idNum!=curNum) {
                    clearInterval(u);
                    imgFake();
                    $('#'+pieID+', .camera_canvas_wrap',camera_thumbs_wrap).animate({opacity:0},0);
                    canvasLoader();
                    nextSlide(idNum+1);
                    opts.onStartLoading.call(this);
                }
            }
        });
    }

    if($(thumbs).length) {

        $('.pix_thumb img',thumbs).on('click',function(){
            if(!elem.hasClass('camerasliding')){
                var idNum = parseFloat($(this).parents('li').index());
                var curNum = parseFloat($('.cameracurrent',target).index());
                if(idNum!=curNum) {
                    clearInterval(u);
                    imgFake();
                    $('#'+pieID+', .camera_canvas_wrap',camera_thumbs_wrap).animate({opacity:0},0);
                    $('.pix_thumb',thumbs).removeClass('cameracurrent');
                    $(this).parents('li').addClass('cameracurrent');
                    canvasLoader();
                    nextSlide(idNum+1);
                    thumbnailPos();
                    opts.onStartLoading.call(this);
                }
            }
        });

        $('.camera_thumbs_cont .camera_prevThumbs',camera_thumbs_wrap).hover(function(){
            $(this).stop(true,false).animate({opacity:1},250);
        },function(){
            $(this).stop(true,false).animate({opacity:.7},250);
        });
        $('.camera_prevThumbs',camera_thumbs_wrap).on('click',function(){
            var sum = 0,
                wTh = $(thumbs).outerWidth(),
                offUl = $('ul', thumbs).offset().left,
                offDiv = $('> div', thumbs).offset().left,
                ulLeft = offDiv-offUl;
            $('.camera_visThumb',thumbs).each(function(){
                var tW = $(this).outerWidth();
                sum = sum+tW;
            });
            if(ulLeft-sum>0){
                $('ul', thumbs).animate({'margin-left':'-'+(ulLeft-sum)+'px'},500,thumbnailVisible);
            } else {
                $('ul', thumbs).animate({'margin-left':0},500,thumbnailVisible);
            }
        });

        $('.camera_thumbs_cont .camera_nextThumbs',camera_thumbs_wrap).hover(function(){
            $(this).stop(true,false).animate({opacity:1},250);
        },function(){
            $(this).stop(true,false).animate({opacity:.7},250);
        });
        $('.camera_nextThumbs',camera_thumbs_wrap).on('click',function(){
            var sum = 0,
                wTh = $(thumbs).outerWidth(),
                ulW = $('ul', thumbs).outerWidth(),
                offUl = $('ul', thumbs).offset().left,
                offDiv = $('> div', thumbs).offset().left,
                ulLeft = offDiv-offUl;
            $('.camera_visThumb',thumbs).each(function(){
                var tW = $(this).outerWidth();
                sum = sum+tW;
            });
            if(ulLeft+sum+sum<ulW){
                $('ul', thumbs).animate({'margin-left':'-'+(ulLeft+sum)+'px'},500,thumbnailVisible);
            } else {
                $('ul', thumbs).animate({'margin-left':'-'+(ulW-wTh)+'px'},500,thumbnailVisible);
            }
        });

    }



}

})(jQuery);

;(function($){$.fn.cameraStop = function() {
    var wrap = $(this),
        elem = $('.camera_src',wrap),
        pieID = 'pie_'+wrap.index();
    elem.addClass('stopped');
    if($('.camera_showcommands').length) {
        var camera_thumbs_wrap = $('.camera_thumbs_wrap',wrap);
    } else {
        var camera_thumbs_wrap = wrap;
    }
}
})(jQuery);

;(function($){$.fn.cameraPause = function() {
    var wrap = $(this);
    var elem = $('.camera_src',wrap);
    elem.addClass('paused');
}
})(jQuery);

;(function($){$.fn.cameraResume = function() {
    var wrap = $(this);
    var elem = $('.camera_src',wrap);
    if(typeof autoAdv === 'undefined' || autoAdv!==true){
        elem.removeClass('paused');
    }
}
})(jQuery);