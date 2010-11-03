(function(){var c=Object.prototype.hasOwnProperty;if(!Array.isArray)Array.isArray=function(a){return Object.prototype.toString.call(a)=="[object Array]"};if(!Array.prototype.forEach)Array.prototype.forEach=function(a,b){for(var d=this.length>>>0,e=0;e<d;e++)e in this&&a.call(b,this[e],e,this)};if(!Array.prototype.map)Array.prototype.map=function(a,b){var d=this.length>>>0;if(typeof a!="function")throw new TypeError;for(var e=Array(d),h=0;h<d;h++)if(h in this)e[h]=a.call(b,this[h],h,this);return e};
if(!Array.prototype.filter)Array.prototype.filter=function(a,b){for(var d=[],e=0;e<this.length;e++)a.call(b,this[e])&&d.push(this[e]);return d};if(!Array.prototype.every)Array.prototype.every=function(a,b){for(var d=0;d<this.length;d++)if(!a.call(b,this[d]))return false;return true};if(!Array.prototype.some)Array.prototype.some=function(a,b){for(var d=0;d<this.length;d++)if(a.call(b,this[d]))return true;return false};if(!Array.prototype.reduce)Array.prototype.reduce=function(a){var b=this.length>>>
0;if(typeof a!="function")throw new TypeError;if(b==0&&arguments.length==1)throw new TypeError;var d=0;if(arguments.length>=2)var e=arguments[1];else{do{if(d in this){e=this[d++];break}if(++d>=b)throw new TypeError;}while(1)}for(;d<b;d++)if(d in this)e=a.call(null,e,this[d],d,this);return e};if(!Array.prototype.reduceRight)Array.prototype.reduceRight=function(a){var b=this.length>>>0;if(typeof a!="function")throw new TypeError;if(b==0&&arguments.length==1)throw new TypeError;b=b-1;if(arguments.length>=
2)var d=arguments[1];else{do{if(b in this){d=this[b--];break}if(--b<0)throw new TypeError;}while(1)}for(;b>=0;b--)if(b in this)d=a.call(null,d,this[b],b,this);return d};if(!Array.prototype.indexOf)Array.prototype.indexOf=function(a,b){var d=this.length;if(!d)return-1;var e=b||0;if(e>=d)return-1;if(e<0)e+=d;for(;e<d;e++)if(c.call(this,e))if(a===this[e])return e;return-1};if(!Array.prototype.lastIndexOf)Array.prototype.lastIndexOf=function(a,b){var d=this.length;if(!d)return-1;var e=b||d;if(e<0)e+=
d;for(e=Math.min(e,d-1);e>=0;e--)if(c.call(this,e))if(a===this[e])return e;return-1};if((!Object.create||!Object.defineProperties)&&window.jQuery&&jQuery.webshims){var i=jQuery.webshims;i.objectCreate=function(a,b){var d=function(){};d.prototype=a;d=new d;b&&i.defineProperties(d,b);return d};i.defineProperties=function(a,b){for(var d in b)c.call(b,d)&&i.defineProperty(a,d,b[d]);return a};i.defineProperty=function(a,b,d){if(typeof d!="object")return a;if(c.call(d,"value")){a[b]=d.value;return a}if(Object.defineProperty)try{Object.defineProperty(a,
b,d)}catch(e){}if(a.__defineGetter__){typeof d.get=="function"&&a.__defineGetter__(b,d.get);typeof d.set=="function"&&a.__defineSetter__(b,d.set)}return a}}if(!Object.keys){var u=true,s=["toString","toLocaleString","valueOf","hasOwnProperty","isPrototypeOf","propertyIsEnumerable","constructor"];for(var n in{toString:null})u=false;Object.keys=function(a){if(typeof a!=="object"&&typeof a!=="function"||a===null)throw new TypeError("Object.keys called on a non-object");var b=[];for(var d in a)c.call(a,
d)&&b.push(d);if(u){a=0;for(d=dontEnumLength;a<d;a++){var e=s[a];c.call(o,e)&&b.push(e)}}return b}}if(!Date.prototype.toISOString)Date.prototype.toISOString=function(){return this.getFullYear()+"-"+(this.getMonth()+1)+"-"+this.getDate()+"T"+this.getHours()+":"+this.getMinutes()+":"+this.getSeconds()+"Z"};if(!Date.now)Date.now=function(){return(new Date).getTime()};if(!Date.prototype.toJSON)Date.prototype.toJSON=function(){if(typeof this.toISOString!="function")throw new TypeError;return this.toISOString()};
if(isNaN(Date.parse("T00:00")))Date=function(a){var b=function(h,m,j,p,w,x,B){var v=arguments.length;if(this instanceof a){v=v===1&&String(h)===h?new a(b.parse(h)):v>=7?new a(h,m,j,p,w,x,B):v>=6?new a(h,m,j,p,w,x):v>=5?new a(h,m,j,p,w):v>=4?new a(h,m,j,p):v>=3?new a(h,m,j):v>=2?new a(h,m):v>=1?new a(h):new a;v.constructor=b;return v}return a.apply(this,arguments)},d=RegExp("^(?:((?:[+-]\\d\\d)?\\d\\d\\d\\d)(?:-(\\d\\d)(?:-(\\d\\d))?)?)?(?:T(\\d\\d):(\\d\\d)(?::(\\d\\d)(?:\\.(\\d\\d\\d))?)?)?(?:Z|([+-])(\\d\\d):(\\d\\d))?$");
for(var e in a)b[e]=a[e];b.now=a.now;b.UTC=a.UTC;b.prototype=a.prototype;b.prototype.constructor=b;b.parse=function(h){var m=d.exec(h);if(m){m.shift();for(var j=m[0]===undefined,p=0;p<10;p++)if(p!==7){m[p]=+(m[p]||(p<3?1:0));p===1&&m[p]--}if(j)return((m[3]*60+m[4])*60+m[5])*1E3+m[6];j=(m[8]*60+m[9])*60*1E3;if(m[6]==="-")j=-j;return a.UTC.apply(this,m.slice(0,7))+j}return a.parse.apply(this,arguments)};return b}(Date);var q=Array.prototype.slice;if(!Function.prototype.bind)Function.prototype.bind=
function(a){var b=this;if(typeof b.apply!="function"||typeof b.call!="function")return new TypeError;var d=q.call(arguments),e=function(){if(this instanceof e){var h=Object.create(b.prototype);b.apply(h,d.concat(q.call(arguments)));return h}else return b.call.apply(b,d.concat(q.call(arguments)))};e.bound=b;e.boundTo=a;e.boundArgs=d;e.length=typeof b=="function"?Math.max(b.length-d.length,0):0;return e};if(!String.prototype.trim){var g=/^\s\s*/,f=/\s\s*$/;String.prototype.trim=function(){return String(this).replace(g,
"").replace(f,"")}}})();
jQuery.webshims.ready("es5",function(c,i,u){var s=i.validityMessages,n=c.support,q=false,g=document;if(n.validity===true)q=!u.noHTMLExtFixes;c.extend(c.expr.filters,{valid:function(f){return(c.attr(f,"validity")||{valid:true}).valid},invalid:function(f){return!c.expr.filters.valid(f)},willValidate:function(f){return c.attr(f,"willValidate")}});i.triggerInlineForm=function(){var f=function(a){if(typeof a!="string"||a.indexOf("-")!==-1||a.indexOf(".")!==-1||a.indexOf('"')!==-1)return"";return"var "+
a+' = this.form["'+a+'"];'};return function(a,b){var d=a["on"+b]||a.getAttribute("on"+b)||"",e;b=c.Event({type:b,target:a[0],currentTarget:a[0]});if(d&&typeof d=="string"&&a.form&&a.form.elements){var h="";e=0;for(var m=a.form.elements,j=m.length;e<j;e++){var p=m[e].name,w=m[e].id;if(p)h+=f(p);if(w&&w!==p)h+=f(w)}e=function(){eval(h+d)}.call(a,b)}c(a).trigger(b);return e}}();i.validityAlert=function(){var f=!c.browser.msie||parseInt(c.browser.version,10)>7?"span":"label",a={hideDelay:5E3,showFor:function(j,
p,w){j=c(j);var x=(j.data("inputUIReplace")||{visual:j}).visual;m();a.clear();this.getMessage(j,p);this.position(x);this.show();if(this.hideDelay)d=setTimeout(e,this.hideDelay);if(!w){j=c("input, select, textarea, .ui-slider-handle",x).filter(":visible:first");j[0]||(j=x);b.attr("for",i.getID(j));j.focus();c(g).bind("focusout.validityalert",e)}},getMessage:function(j,p){c("> span",b).html(p||j.attr("validationMessage"))},position:function(j){var p=j.offset();p.top+=j.outerHeight();b.css(p)},show:function(){b.css("display")===
"none"?b.fadeIn():b.fadeTo(400,1)},hide:function(){a.clear();b.fadeOut()},clear:function(){clearTimeout(d);c(g).unbind("focusout.validityalert");b.stop().removeAttr("for")},alert:c("<"+f+' class="validity-alert" role="alert"><span class="va-box" /></'+f+">").css({position:"absolute",display:"none"})},b=a.alert,d=false,e=c.proxy(a,"hide"),h=false,m=function(){if(!h){h=true;c(function(){b.appendTo("body")})}};return a}();s.en=s.en||s["en-US"]||{typeMismatch:{email:"{%value} is not a legal email address",
url:"{%value} is not a valid web address",number:"{%value} is not a number!",date:"{%value} is not a date",time:"{%value} is not a time",range:"{%value} is not a number!","datetime-local":"{%value} is not a correct date-time format."},rangeUnderflow:"{%value} is too low. The lowest value you can use is {%min}.",rangeOverflow:"{%value}  is too high. The highest value you can use is {%max}.",stepMismatch:"The value {%value} is not allowed for this form.",tooLong:"The entered text is too large! You used {%valueLen} letters and the limit is {%maxlength}.",
patternMismatch:"{%value} is not in the format this page requires! {%title}",valueMissing:"You have to specify a value"};s["en-US"]=s["en-US"]||s.en;s[""]=s[""]||s.en;s.de=s.de||{typeMismatch:{email:"{%value} ist keine zul\u00e4ssige E-Mail-Adresse",url:"{%value} ist keine zul\u00e4ssige Webadresse",number:"{%value} ist keine Nummer!",date:"{%value} ist kein Datum",time:"{%value} ist keine Uhrzeit",range:"{%value} ist keine Nummer!","datetime-local":"{%value} ist kein Datum-Uhrzeit Format."},rangeUnderflow:"{%value} ist zu niedrig. {%min} ist der unterste Wert, den Sie benutzen k\u00f6nnen.",
rangeOverflow:"{%value} ist zu hoch. {%max} ist der oberste Wert, den Sie benutzen k\u00f6nnen.",stepMismatch:"Der Wert {%value} ist in diesem Feld nicht zul\u00e4ssig. Hier sind nur bestimmte Werte zul\u00e4ssig. {%title}",tooLong:"Der eingegebene Text ist zu lang! Sie haben {%valueLen} Buchstaben eingegeben, dabei sind {%maxlength} das Maximum.",patternMismatch:"{%value} hat f\u00fcr diese Seite ein falsches Format! {%title}",valueMissing:"Sie m\u00fcssen einen Wert eingeben"};(function(){var f,
a=[],b="value"in g.createElement("output")&&"list"in g.createElement("input"),d,e;if(q&&u.addEventListener){var h={timer:void 0,prevented:false};u.addEventListener("submit",function(j){!h.prevented&&j.target.checkValidity&&c.attr(j.target,"novalidate")==null&&c(j.target).checkValidity()},true);var m=function(j){if(c.attr(j.target,"formnovalidate")!=null){h.timer&&clearTimeout(h.timer);h.prevented=true;h.timer=setTimeout(function(){h.prevented=false},20)}};u.addEventListener("click",m,true);u.addEventListener("touchstart",
m,true);u.addEventListener("touchend",m,true)}c(g).bind("invalid",function(j){if(q&&c.attr(j.target,"validity").valid){j.stopImmediatePropagation();return false}if(!f){if((e=j.target.form)&&q){var p=c(e).bind("submit.preventInvalidSubmit",function(w){if(c.attr(e,"novalidate")==null){w.stopImmediatePropagation();return false}}).data("events").submit;p&&p.length>1&&p.unshift(p.pop())}f=c.Event("firstinvalid");c(j.target).trigger(f)}f&&f.isDefaultPrevented()&&j.preventDefault();if(n.validity!==true||
a.indexOf(j.target)==-1)a.push(j.target);else q&&j.stopImmediatePropagation();j.extraData="fix";clearTimeout(d);d=setTimeout(function(){var w={type:"lastinvalid",cancelable:false,invalidlist:c(a)};q&&!b&&g.activeElement&&f&&f.target!==g.activeElement&&!c.data(f.target,"maybePreventedinvalid")&&i.validityAlert.showFor(f.target);f=false;a=[];c(e).unbind("submit.preventInvalidSubmit");c(j.target).trigger(w,w)},9)})})();(function(){if(q){n.fieldsetValidation=n.fieldsetValidation||"shim";var f=function(a){var b=
(c.attr(a,"validity")||{valid:true}).valid;!b&&a.checkValidity()&&c(a).trigger("invalid");return b};i.addMethod("checkValidity",function(){if(this.elements||c.nodeName(this,"fieldset")){var a=true;c(this.elements||"input, textarea, select",this).each(function(){f(this)||(a=false)});return a}else if(this.checkValidity)return f(this)})}})();(function(){var f=n.validity===true&&i.overrideValidationMessages,a=true,b=true;if(n.validity===true){a=!!("required"in g.createElement("select")||u.noHTMLExtFixes);
b=!!(c('<input type="datetime-local" />')[0].type=="datetime-local"&&c('<input type="range" />')[0].type=="range")}var d=!a||!b||f,e=i.inputTypes,h={},m=["customError","typeMismatch","rangeUnderflow","rangeOverflow","stepMismatch","tooLong","patternMismatch","valueMissing","valid"],j=c.attr,p=c.fn.val,w=f?{value:1,checked:1}:{value:1},x=f?["textarea"]:[],B={radio:1,checkbox:1},v=function(k,t){if(k.form){var l=(k.getAttribute&&k.getAttribute("type")||k.type||"").toLowerCase();if(!f)if(!(!a&&l=="select-one")&&
!e[l])return;f&&!t&&B[l]&&k.name?c(g.getElementsByName(k.name)).each(function(){c.attr(this,"validity")}):c.attr(k,"validity")}};if(!a||f){c.extend(w,{required:1,size:1,multiple:1,selectedIndex:1});x.push("select")}if(!b||f){c.extend(w,{min:1,max:1,step:1});x.push("input")}var E=s[""];c(g).bind("htmlExtLangChange",function(){i.activeLang(s,"validation-base",function(k){E=k})});i.createValidationMessage=function(k,t){var l=E[t];if(l&&typeof l!=="string")l=l[(k.getAttribute("type")||"").toLowerCase()]||
l.defaultMessage;l&&["value","min","max","title","maxlength","label"].forEach(function(r){if(l.indexOf("{%"+r)!==-1){var y=(r=="label"?c.trim(c("label[for="+k.id+"]",k.form).text()).replace(/\*$|:$/,""):c.attr(k,r))||"";l=l.replace("{%"+r+"}",y);if("value"==r)l=l.replace("{%valueLen}",y.length)}});return l||""};c.each(n.validationMessage?["customValidationMessage"]:["customValidationMessage","validationMessage"],function(k,t){i.attr(t,{elementNames:["input","select","textarea"],getter:function(l){var r=
"";if(!c.attr(l,"willValidate"))return r;var y=c.attr(l,"validity")||{valid:1};if(y.valid)return r;if(y.customError||t==="validationMessage")if(r="validationMessage"in l?l.validationMessage:c.data(l,"customvalidationMessage"))return r;c.each(y,function(A,C){if(!(A=="valid"||!C))if(r=i.createValidationMessage(l,A))return false});return r||""}})});n.validationMessage=n.validationMessage||"shim";i.addMethod("setCustomValidity",function(k){k+="";if(this.setCustomValidity){this.setCustomValidity(k);if(d){c.data(this,
"hasCustomError",!!k);v(this)}}else c.data(this,"customvalidationMessage",""+k)});if(n.validity===true){i.addInputType=function(k,t){e[k]=t};i.addValidityRule=function(k,t){h[k]=t};i.addValidityRule("typeMismatch",function(k,t,l,r){if(t==="")return false;r=r.typeMismatch;if(!("type"in l))l.type=(k[0].getAttribute("type")||"").toLowerCase();if(e[l.type]&&e[l.type].mismatch)r=e[l.type].mismatch(t,k);return r})}if(!a){i.createBooleanAttrs("required",["select"]);i.addValidityRule("valueMissing",function(k,
t,l,r){if(l.nodeName=="select"&&!t&&k.attr("required")&&k[0].size<2){if(!l.type)l.type=k[0].type;if(l.type=="select-one"&&c("> option:first-child:not(:disabled)",k).attr("selected"))return true}return r.valueMissing})}if(d){i.attr("validity",{elementNames:x,getter:function(k){var t=k.validity;if(!t)return t;var l={};m.forEach(function(z){l[z]=t[z]});if(!c.attr(k,"willValidate"))return l;var r=c(k),y={type:(k.getAttribute&&k.getAttribute("type")||"").toLowerCase(),nodeName:(k.nodeName||"").toLowerCase()},
A=p.call(r),C=!!c.data(k,"hasCustomError"),F;l.customError=C;if(l.valid&&l.customError)l.valid=false;else if(!l.valid){var G=true;c.each(l,function(z,D){if(D)return G=false});if(G)l.valid=true}c.each(h,function(z,D){l[z]=D(r,A,y,l);if(l[z]&&(l.valid||!F&&f)){k.setCustomValidity(i.createValidationMessage(k,z));l.valid=false;F=true}});l.valid&&k.setCustomValidity("");return l}});c.fn.val=function(){var k=p.apply(this,arguments);this.each(function(){v(this)});return k};c.attr=function(k,t,l){var r=j.apply(this,
arguments);w[t]&&l!==void 0&&k.form&&v(k);return r};if(g.addEventListener){g.addEventListener("change",function(k){v(k.target)},true);b||g.addEventListener("input",function(k){v(k.target)},true)}i.addReady(function(k){k===g?c(x.join(",")).each(function(){v(this,true)}):c(x.join(","),k).each(function(){v(this,true)})})}})();i.createReadyEvent("validation-base")},true);
jQuery.webshims.ready("validation-base",function(c){if(!c.support.validity){var i=c.webshims;i.inputTypes=i.inputTypes||{};var u=i.inputTypes,s={radio:1,checkbox:1};i.addInputType=function(a,b){u[a]=b};var n={customError:false,typeMismatch:false,rangeUnderflow:false,rangeOverflow:false,stepMismatch:false,tooLong:false,patternMismatch:false,valueMissing:false,valid:true},q={valueMissing:function(a,b,d){if(!a.attr("required"))return false;var e=false;if(!("type"in d))d.type=(a[0].getAttribute("type")||
a[0].type||"").toLowerCase();return e=d.nodeName=="select"?!b&&a[0].type=="select-one"&&a[0].size<2&&c("> option:first-child:not(:disabled)",a).attr("selected"):s[d.type]?!c(a[0].form&&a[0].name?a[0].form[a[0].name]:[]).filter(":checked")[0]:!b},tooLong:function(a,b,d){if(b===""||d.nodeName=="select")return false;a=a.attr("maxlength");d=false;var e=b.length;if(e&&a>=0&&b.replace&&(typeof a=="number"||a&&a==a*1))d=e>a;return d},typeMismatch:function(a,b,d){if(b===""||d.nodeName=="select")return false;
var e=false;if(!("type"in d))d.type=(a[0].getAttribute("type")||a[0].type||"").toLowerCase();if(u[d.type]&&u[d.type].mismatch)e=u[d.type].mismatch(b,a);return e},patternMismatch:function(a,b,d){if(b===""||d.nodeName=="select")return false;a=a.attr("pattern");if(!a)return false;return!RegExp("^(?:"+a+")$").test(b)}};i.addValidityRule=function(a,b){q[a]=b};i.addMethod("checkValidity",function(){var a,b=function(d){var e,h=c.attr(d,"validity");if(h)c.data(d,"cachedValidity",h);else return true;if(!h.valid){e=
c.Event("invalid");var m=c(d).trigger(e);if(!a&&!e.isDefaultPrevented()){i.validityAlert.showFor(m);a=true}}c.data(d,"cachedValidity",false);return h.valid};return function(){a=false;if(c.nodeName(this,"form")||c.nodeName(this,"fieldset")){for(var d=true,e=this.elements||c("input, textarea, select",this),h=0,m=e.length;h<m;h++)b(e[h])||(d=false);return d}else return this.form?b(this):true}}());c.event.special.invalid={add:function(){c.data(this,"invalidEventShim")||c.event.special.invalid.setup.call(this)},
setup:function(){c(this).bind("submit",c.event.special.invalid.handler).data("invalidEventShim",true);var a=c(this).data("events").submit;a&&a.length>1&&a.unshift(a.pop())},teardown:function(){c(this).unbind("submit",c.event.special.invalid.handler).data("invalidEventShim",false)},handler:function(a){if(!(a.type!="submit"||!c.nodeName(a.target,"form")||c.attr(a.target,"novalidate")!=null||c.data(a.target,"novalidate")))if(!c(a.target).checkValidity()){!a.originalEvent&&window.console&&console.log&&
console.log("submit");a.stopImmediatePropagation();return false}}};i.attr("validity",{elementNames:["input","select","textarea"],getter:function(a){var b=c.data(a,"cachedValidity");if(b)return b;b=c.extend({},n);if(!c.attr(a,"willValidate"))return b;var d=c(a),e=d.val(),h={nodeName:a.nodeName.toLowerCase()};b.customError=!!c.data(a,"customvalidationMessage");if(b.customError)b.valid=false;c.each(q,function(m,j){if(j(d,e,h)){b[m]=true;b.valid=false}});return b}});i.createBooleanAttrs("required",["input",
"textarea","select"]);i.attr("willValidate",{elementNames:["input","select","textarea"],getter:function(){var a={button:1,reset:1,add:1,remove:1,"move-up":1,"move-down":1,hidden:1,submit:1};return function(b){return!!(b.name&&b.form&&!b.disabled&&!b.readOnly&&!a[b.type]&&c.attr(b.form,"novalidate")==null)}}()});i.addInputType("email",{mismatch:function(){var a=/^((([a-z]|\d|[!#\$%&'\*\+\-\/=\?\^_`{\|}~]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])+(\.([a-z]|\d|[!#\$%&'\*\+\-\/=\?\^_`{\|}~]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])+)*)|(\x22((((\x20|\x09)*(\x0d\x0a))?(\x20|\x09)+)?(([\x01-\x08\x0b\x0c\x0e-\x1f\x7f]|\x21|[\x23-\x5b]|[\x5d-\x7e]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(\\([\x01-\x09\x0b\x0c\x0d-\x7f]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]))))*(((\x20|\x09)*(\x0d\x0a))?(\x20|\x09)+)?\x22))@((([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])*([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])))\.)*(([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])*([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])))\.?$/i;
return function(b){return!a.test(b)}}()});i.addInputType("url",{mismatch:function(){var a=/^([a-z]([a-z]|\d|\+|-|\.)*):(\/\/(((([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:)*@)?((\[(|(v[\da-f]{1,}\.(([a-z]|\d|-|\.|_|~)|[!\$&'\(\)\*\+,;=]|:)+))\])|((\d|[1-9]\d|1\d\d|2[0-4]\d|25[0-5])\.(\d|[1-9]\d|1\d\d|2[0-4]\d|25[0-5])\.(\d|[1-9]\d|1\d\d|2[0-4]\d|25[0-5])\.(\d|[1-9]\d|1\d\d|2[0-4]\d|25[0-5]))|(([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=])*)(:\d*)?)(\/(([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:|@)*)*|(\/((([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:|@)+(\/(([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:|@)*)*)?)|((([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:|@)+(\/(([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:|@)*)*)|((([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:|@)){0})(\?((([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:|@)|[\uE000-\uF8FF]|\/|\?)*)?(\#((([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:|@)|\/|\?)*)?$/i;
return function(b){return!a.test(b)}}()});var g=function(){var a=this;if(a.form){c.data(a.form,"novalidate",true);setTimeout(function(){c.data(a.form,"novalidate",false)},1)}},f={submit:1,button:1};c(document).bind("click",function(a){a.target&&a.target.form&&f[a.target.type]&&c.attr(a.target,"formnovalidate")!=null&&g.call(a.target)});i.addReady(function(a){a=c("form",a).bind("invalid",c.noop).find("button[formnovalidate]").bind("click",g).end();if(!document.activeElement||!document.activeElement.form)c("input, select, textarea",
a).filter("[autofocus]:first").focus()});c.support.validity=c.support.validity||"shim";i.createReadyEvent("validity")}},true);
jQuery.webshims.ready("validation-base",function(c,i){if(!("value"in document.createElement("output"))){var u=document;(function(){var n={input:1,textarea:1},q={radio:1,checkbox:1,submit:1,button:1,image:1,reset:1,color:1},g=function(f){var a,b=f.attr("value"),d=function(h){if(f){var m=f.attr("value");if(m!==b){b=m;if(!h||h.type!="input")i.triggerInlineForm(f[0],"input")}}},e=function(){f.unbind("focusout",e).unbind("input",d);clearInterval(a);d();f=null};clearInterval(a);a=setInterval(d,c.browser.mozilla?
250:111);setTimeout(d,9);f.bind("focusout",e).bind("input",d)};c(u).bind("focusin",function(f){if(f.target&&f.target.type&&!f.target.readonly&&!f.target.readOnly&&!f.target.disabled&&n[(f.target.nodeName||"").toLowerCase()]&&!q[f.target.type])g(c(f.target))})})();var s=function(n){if(!n.getAttribute("aria-live")){n=c(n);var q=(n.text()||"").trim(),g=n.attr("id"),f=n.attr("for"),a=c('<input class="output-shim" type="hidden" name="'+(n.attr("name")||"")+'" value="'+q+'" style="display: none" />').insertAfter(n),
b=a[0].form||u,d=function(e){a[0].value=e;e=a[0].value;n.text(e);n[0].value=e};n[0].defaultValue=q;n[0].value=q;n.attr({"aria-live":"polite"});if(g){a.attr("id",g);n.attr("aria-labeldby",i.getID(c("label[for="+g+"]",b)))}if(f){g=i.getID(n);f.split(" ").forEach(function(e){(e=b.getElementById(e))&&e.setAttribute("aria-controls",g)})}n.data("outputShim",d);a.data("outputShim",d);return d}};i.attr("value",{elementNames:["output","input"],getter:true,setter:function(n,q,g){var f=c.data(n,"outputShim");
if(!f)if(c.nodeName(n,"output"))f=s(n);else return g();f(q)}});i.addReady(function(n){c("output",n).each(function(){s(this)})});i.createReadyEvent("output")}},true);
(function(c){if(!c.support.placeholder){c.support.placeholder="shim";var i=function(g,f,a,b,d){if(!b){b=c.data(g,"placeHolder");if(!b)return}if(d=="focus"||!d&&g===document.activeElement)b.box.removeClass("placeholder-visible");else{if(f===false)f=c.attr(g,"value");if(f)b.box.removeClass("placeholder-visible");else{if(a===false)a=c.attr(g,"placeholder");b.box[a&&!f?"addClass":"removeClass"]("placeholder-visible")}}},u=function(g){g=c(g);var f=g.attr("id"),a=!!(g.attr("title")||g.attr("aria-labeledby"));
if(!a&&f)a=!!c("label[for="+f+"]",g[0].form)[0];return c(a?'<span class="placeholder-text"></span>':'<label for="'+(f||c.webshims.getID(g))+'" class="placeholder-text"></label>')},s=function(){var g=/\n|\r|\f|\t/g,f={text:1,search:1,url:1,email:1,password:1,tel:1};return{create:function(a){var b=c.data(a,"placeHolder");if(b)return b;b=c.data(a,"placeHolder",{text:u(a)});b.box=c(a).wrap('<span class="placeholder-box placeholder-box-'+(a.nodeName||"").toLowerCase()+'" />').bind("focus.placeholder blur.placeholder",
function(m){i(this,false,false,b,m.type)}).parent();b.text.insertAfter(a).bind("mousedown.placeholder",function(){i(this,false,false,b,"focus");a.focus();return false});c.each(["Left","Top"],function(m,j){var p=(parseInt(c.curCSS(a,"padding"+j),10)||0)+Math.max(parseInt(c.curCSS(a,"margin"+j),10)||0,0)+(parseInt(c.curCSS(a,"border"+j+"Width"),10)||0);b.text.css("padding"+j,p)});var d=c.curCSS(a,"lineHeight"),e={width:c(a).getwidth(),height:c(a).getheight()},h=c.curCSS(a,"float");b.text.css("lineHeight")!==
d&&b.text.css("lineHeight",d);e.width&&e.height&&b.text.css(e);h!=="none"&&b.box.addClass("placeholder-box-"+h);return b},update:function(a,b){if(f[c.attr(a,"type")]||c.nodeName(a,"textarea")){if(c.nodeName(a,"input"))b=b.replace(g,"");var d=s.create(a);a.setAttribute("placeholder",b);d.text.text(b);i(a,false,b,d)}}}}();c.webshims.attr("placeholder",{elementNames:["input","textarea"],setter:function(g,f){s.update(g,f)},getter:function(g){return g.getAttribute("placeholder")||""}});var n={elementNames:["input",
"textarea"],setter:function(g,f,a){var b=g.getAttribute("placeholder");b&&"value"in g&&i(g,f,b);a()},getter:true};c.webshims.attr("value",n);var q=c.fn.val;c.fn.val=function(g){g!==undefined&&this.each(function(){this.nodeType===1&&n.setter(this,g,c.noop)});return q.apply(this,arguments)};c.webshims.addReady(function(g){c("input[placeholder], textarea[placeholder]",g).attr("placeholder",function(f,a){return a})})}})(jQuery);