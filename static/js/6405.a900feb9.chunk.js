"use strict";(self.webpackChunk_minimal_kit_cra_js=self.webpackChunk_minimal_kit_cra_js||[]).push([[6405],{50933:function(e,n,r){r.d(n,{Z:function(){return p}});var t=r(1413),a=r(45987),i=r(64554),o=r(50533),s=r(36314),l=r(4567),c=r(93517),d=r(83854),u=r(80184);function h(e){var n=e.link,r=e.activeLast,a=e.disabled,s=n.name,l=n.href,c=n.icon,h=(0,t.Z)({typography:"body2",alignItems:"center",color:"text.primary",display:"inline-flex"},a&&!r&&{cursor:"default",pointerEvents:"none",color:"text.disabled"}),f=(0,u.jsxs)(u.Fragment,{children:[c&&(0,u.jsx)(i.Z,{component:"span",sx:{mr:1,display:"inherit","& svg":{width:20,height:20}},children:c}),s]});return l?(0,u.jsx)(o.Z,{component:d.r,href:l,sx:h,children:f}):(0,u.jsxs)(i.Z,{sx:h,children:[" ",f," "]})}var f=["links","action","heading","moreLink","activeLast","sx"];function p(e){var n=e.links,r=e.action,d=e.heading,p=e.moreLink,v=e.activeLast,g=e.sx,x=(0,a.Z)(e,f),b=n[n.length-1].name;return(0,u.jsxs)(i.Z,{sx:(0,t.Z)({},g),children:[(0,u.jsxs)(s.Z,{direction:"row",alignItems:"center",children:[(0,u.jsxs)(i.Z,{sx:{flexGrow:1},children:[d&&(0,u.jsx)(l.Z,{variant:"h4",gutterBottom:!0,children:d}),!!n.length&&(0,u.jsx)(c.Z,(0,t.Z)((0,t.Z)({separator:(0,u.jsx)(m,{})},x),{},{children:n.map((function(e){return(0,u.jsx)(h,{link:e,activeLast:v,disabled:e.name===b},e.name||"")}))}))]}),r&&(0,u.jsxs)(i.Z,{sx:{flexShrink:0},children:[" ",r," "]})]}),!!p&&(0,u.jsx)(i.Z,{sx:{mt:2},children:p.map((function(e){return(0,u.jsx)(o.Z,{href:e,variant:"body2",target:"_blank",rel:"noopener",sx:{display:"table"},children:e},e)}))})]})}function m(){return(0,u.jsx)(i.Z,{component:"span",sx:{width:4,height:4,borderRadius:"50%",bgcolor:"text.disabled"}})}},86405:function(e,n,r){r.r(n),r.d(n,{default:function(){return cn}});var t=r(6907),a=r(1413),i=r(64554),o=r(36314),s=r(13967),l=r(89164),c=r(38072),d=r(11908),u=r(50933),h=r(45987),f=r(72791);function p(e,n){return n||(n=e.slice(0)),e.raw=n,e}var m=function(){function e(e){var n=this;this._insertTag=function(e){n.container.insertBefore(e,0===n.tags.length?n.insertionPoint?n.insertionPoint.nextSibling:n.prepend?n.container.firstChild:n.before:n.tags[n.tags.length-1].nextSibling),n.tags.push(e)},this.isSpeedy=void 0===e.speedy||e.speedy,this.tags=[],this.ctr=0,this.nonce=e.nonce,this.key=e.key,this.container=e.container,this.prepend=e.prepend,this.insertionPoint=e.insertionPoint,this.before=null}var n=e.prototype;return n.hydrate=function(e){e.forEach(this._insertTag)},n.insert=function(e){this.ctr%(this.isSpeedy?65e3:1)==0&&this._insertTag(function(e){var n=document.createElement("style");return n.setAttribute("data-emotion",e.key),void 0!==e.nonce&&n.setAttribute("nonce",e.nonce),n.appendChild(document.createTextNode("")),n.setAttribute("data-s",""),n}(this));var n=this.tags[this.tags.length-1];if(this.isSpeedy){var r=function(e){if(e.sheet)return e.sheet;for(var n=0;n<document.styleSheets.length;n++)if(document.styleSheets[n].ownerNode===e)return document.styleSheets[n]}(n);try{r.insertRule(e,r.cssRules.length)}catch(n){}}else n.appendChild(document.createTextNode(e));this.ctr++},n.flush=function(){this.tags.forEach((function(e){return e.parentNode&&e.parentNode.removeChild(e)})),this.tags=[],this.ctr=0},e}(),v="-ms-",g="-webkit-",x=Math.abs,b=String.fromCharCode,y=Object.assign;function Z(e){return e.trim()}function k(e,n,r){return e.replace(n,r)}function w(e,n){return e.indexOf(n)}function j(e,n){return 0|e.charCodeAt(n)}function C(e,n,r){return e.slice(n,r)}function $(e){return e.length}function A(e){return e.length}function S(e,n){return n.push(e),e}var E=1,J=1,Q=0,_=0,z=0,O="";function R(e,n,r,t,a,i,o){return{value:e,root:n,parent:r,type:t,props:a,children:i,line:E,column:J,length:o,return:""}}function W(e,n){return y(R("",null,null,"",null,null,0),e,{length:-e.length},n)}function I(){return z=_>0?j(O,--_):0,J--,10===z&&(J=1,E--),z}function F(){return z=_<Q?j(O,_++):0,J++,10===z&&(J=1,E++),z}function N(){return j(O,_)}function T(){return _}function D(e,n){return C(O,e,n)}function L(e){switch(e){case 0:case 9:case 10:case 13:case 32:return 5;case 33:case 43:case 44:case 47:case 62:case 64:case 126:case 59:case 123:case 125:return 4;case 58:return 3;case 34:case 39:case 40:case 91:return 2;case 41:case 93:return 1}return 0}function G(e){return E=J=1,Q=$(O=e),_=0,[]}function P(e){return O="",e}function q(e){return Z(D(_-1,M(91===e?e+2:40===e?e+1:e)))}function H(e){for(;(z=N())&&z<33;)F();return L(e)>2||L(z)>3?"":" "}function B(e,n){for(;--n&&F()&&!(z<48||z>102||z>57&&z<65||z>70&&z<97););return D(e,T()+(n<6&&32==N()&&32==F()))}function M(e){for(;F();)switch(z){case e:return _;case 34:case 39:34!==e&&39!==e&&M(z);break;case 40:41===e&&M(e);break;case 92:F()}return _}function U(e,n){for(;F()&&e+z!==57&&(e+z!==84||47!==N()););return"/*"+D(n,_-1)+"*"+b(47===e?e:F())}function V(e){for(;!L(N());)F();return D(e,_)}function K(e){return P(X("",null,null,null,[""],e=G(e),0,[0],e))}function X(e,n,r,t,a,i,o,s,l){for(var c=0,d=0,u=o,h=0,f=0,p=0,m=1,v=1,g=1,x=0,y="",Z=a,j=i,C=t,A=y;v;)switch(p=x,x=F()){case 40:if(108!=p&&58==A.charCodeAt(u-1)){-1!=w(A+=k(q(x),"&","&\f"),"&\f")&&(g=-1);break}case 34:case 39:case 91:A+=q(x);break;case 9:case 10:case 13:case 32:A+=H(p);break;case 92:A+=B(T()-1,7);continue;case 47:switch(N()){case 42:case 47:S(ee(U(F(),T()),n,r),l);break;default:A+="/"}break;case 123*m:s[c++]=$(A)*g;case 125*m:case 59:case 0:switch(x){case 0:case 125:v=0;case 59+d:f>0&&$(A)-u&&S(f>32?ne(A+";",t,r,u-1):ne(k(A," ","")+";",t,r,u-2),l);break;case 59:A+=";";default:if(S(C=Y(A,n,r,c,d,a,s,y,Z=[],j=[],u),i),123===x)if(0===d)X(A,n,C,C,Z,i,u,s,j);else switch(h){case 100:case 109:case 115:X(e,C,C,t&&S(Y(e,C,C,0,0,a,s,y,a,Z=[],u),j),a,j,u,s,t?Z:j);break;default:X(A,C,C,C,[""],j,0,s,j)}}c=d=f=0,m=g=1,y=A="",u=o;break;case 58:u=1+$(A),f=p;default:if(m<1)if(123==x)--m;else if(125==x&&0==m++&&125==I())continue;switch(A+=b(x),x*m){case 38:g=d>0?1:(A+="\f",-1);break;case 44:s[c++]=($(A)-1)*g,g=1;break;case 64:45===N()&&(A+=q(F())),h=N(),d=u=$(y=A+=V(T())),x++;break;case 45:45===p&&2==$(A)&&(m=0)}}return i}function Y(e,n,r,t,a,i,o,s,l,c,d){for(var u=a-1,h=0===a?i:[""],f=A(h),p=0,m=0,v=0;p<t;++p)for(var g=0,b=C(e,u+1,u=x(m=o[p])),y=e;g<f;++g)(y=Z(m>0?h[g]+" "+b:k(b,/&\f/g,h[g])))&&(l[v++]=y);return R(e,n,r,0===a?"rule":s,l,c,d)}function ee(e,n,r){return R(e,n,r,"comm",b(z),C(e,2,-2),0)}function ne(e,n,r,t){return R(e,n,r,"decl",C(e,0,t),C(e,t+1,-1),t)}function re(e,n){switch(function(e,n){return(((n<<2^j(e,0))<<2^j(e,1))<<2^j(e,2))<<2^j(e,3)}(e,n)){case 5103:return g+"print-"+e+e;case 5737:case 4201:case 3177:case 3433:case 1641:case 4457:case 2921:case 5572:case 6356:case 5844:case 3191:case 6645:case 3005:case 6391:case 5879:case 5623:case 6135:case 4599:case 4855:case 4215:case 6389:case 5109:case 5365:case 5621:case 3829:return g+e+e;case 5349:case 4246:case 4810:case 6968:case 2756:return g+e+"-moz-"+e+v+e+e;case 6828:case 4268:return g+e+v+e+e;case 6165:return g+e+v+"flex-"+e+e;case 5187:return g+e+k(e,/(\w+).+(:[^]+)/,"-webkit-box-$1$2-ms-flex-$1$2")+e;case 5443:return g+e+v+"flex-item-"+k(e,/flex-|-self/,"")+e;case 4675:return g+e+v+"flex-line-pack"+k(e,/align-content|flex-|-self/,"")+e;case 5548:return g+e+v+k(e,"shrink","negative")+e;case 5292:return g+e+v+k(e,"basis","preferred-size")+e;case 6060:return g+"box-"+k(e,"-grow","")+g+e+v+k(e,"grow","positive")+e;case 4554:return g+k(e,/([^-])(transform)/g,"$1-webkit-$2")+e;case 6187:return k(k(k(e,/(zoom-|grab)/,g+"$1"),/(image-set)/,g+"$1"),e,"")+e;case 5495:case 3959:return k(e,/(image-set\([^]*)/,g+"$1$`$1");case 4968:return k(k(e,/(.+:)(flex-)?(.*)/,"-webkit-box-pack:$3-ms-flex-pack:$3"),/s.+-b[^;]+/,"justify")+g+e+e;case 4095:case 3583:case 4068:case 2532:return k(e,/(.+)-inline(.+)/,g+"$1$2")+e;case 8116:case 7059:case 5753:case 5535:case 5445:case 5701:case 4933:case 4677:case 5533:case 5789:case 5021:case 4765:if($(e)-1-n>6)switch(j(e,n+1)){case 109:if(45!==j(e,n+4))break;case 102:return k(e,/(.+:)(.+)-([^]+)/,"$1-webkit-$2-$3$1-moz-"+(108==j(e,n+3)?"$3":"$2-$3"))+e;case 115:return~w(e,"stretch")?re(k(e,"stretch","fill-available"),n)+e:e}break;case 4949:if(115!==j(e,n+1))break;case 6444:switch(j(e,$(e)-3-(~w(e,"!important")&&10))){case 107:return k(e,":",":"+g)+e;case 101:return k(e,/(.+:)([^;!]+)(;|!.+)?/,"$1"+g+(45===j(e,14)?"inline-":"")+"box$3$1"+g+"$2$3$1"+v+"$2box$3")+e}break;case 5936:switch(j(e,n+11)){case 114:return g+e+v+k(e,/[svh]\w+-[tblr]{2}/,"tb")+e;case 108:return g+e+v+k(e,/[svh]\w+-[tblr]{2}/,"tb-rl")+e;case 45:return g+e+v+k(e,/[svh]\w+-[tblr]{2}/,"lr")+e}return g+e+v+e+e}return e}function te(e,n){for(var r="",t=A(e),a=0;a<t;a++)r+=n(e[a],a,e,n)||"";return r}function ae(e,n,r,t){switch(e.type){case"@import":case"decl":return e.return=e.return||e.value;case"comm":return"";case"@keyframes":return e.return=e.value+"{"+te(e.children,t)+"}";case"rule":e.value=e.props.join(",")}return $(r=te(e.children,t))?e.return=e.value+"{"+r+"}":""}var ie=function(e,n,r){for(var t=0,a=0;t=a,a=N(),38===t&&12===a&&(n[r]=1),!L(a);)F();return D(e,_)},oe=new WeakMap,se=function(e){if("rule"===e.type&&e.parent&&!(e.length<1)){for(var n=e.value,r=e.parent,t=e.column===r.column&&e.line===r.line;"rule"!==r.type;)if(!(r=r.parent))return;if((1!==e.props.length||58===n.charCodeAt(0)||oe.get(r))&&!t){oe.set(e,!0);for(var a=[],i=function(e,n){return P(function(e,n){var r=-1,t=44;do{switch(L(t)){case 0:38===t&&12===N()&&(n[r]=1),e[r]+=ie(_-1,n,r);break;case 2:e[r]+=q(t);break;case 4:if(44===t){e[++r]=58===N()?"&\f":"",n[r]=e[r].length;break}default:e[r]+=b(t)}}while(t=F());return e}(G(e),n))}(n,a),o=r.props,s=0,l=0;s<i.length;s++)for(var c=0;c<o.length;c++,l++)e.props[l]=a[s]?i[s].replace(/&\f/g,o[c]):o[c]+" "+i[s]}}},le=function(e){if("decl"===e.type){var n=e.value;108===n.charCodeAt(0)&&98===n.charCodeAt(2)&&(e.return="",e.value="")}},ce=[function(e,n,r,t){if(e.length>-1&&!e.return)switch(e.type){case"decl":e.return=re(e.value,e.length);break;case"@keyframes":return te([W(e,{value:k(e.value,"@","@"+g)})],t);case"rule":if(e.length)return function(e,n){return e.map(n).join("")}(e.props,(function(n){switch(function(e,n){return(e=/(::plac\w+|:read-\w+)/.exec(e))?e[0]:e}(n)){case":read-only":case":read-write":return te([W(e,{props:[k(n,/:(read-\w+)/,":-moz-$1")]})],t);case"::placeholder":return te([W(e,{props:[k(n,/:(plac\w+)/,":-webkit-input-$1")]}),W(e,{props:[k(n,/:(plac\w+)/,":-moz-$1")]}),W(e,{props:[k(n,/:(plac\w+)/,v+"input-$1")]})],t)}return""}))}}],de={animationIterationCount:1,borderImageOutset:1,borderImageSlice:1,borderImageWidth:1,boxFlex:1,boxFlexGroup:1,boxOrdinalGroup:1,columnCount:1,columns:1,flex:1,flexGrow:1,flexPositive:1,flexShrink:1,flexNegative:1,flexOrder:1,gridRow:1,gridRowEnd:1,gridRowSpan:1,gridRowStart:1,gridColumn:1,gridColumnEnd:1,gridColumnSpan:1,gridColumnStart:1,msGridRow:1,msGridRowSpan:1,msGridColumn:1,msGridColumnSpan:1,fontWeight:1,lineHeight:1,opacity:1,order:1,orphans:1,tabSize:1,widows:1,zIndex:1,zoom:1,WebkitLineClamp:1,fillOpacity:1,floodOpacity:1,stopOpacity:1,strokeDasharray:1,strokeDashoffset:1,strokeMiterlimit:1,strokeOpacity:1,strokeWidth:1},ue=/[A-Z]|^ms/g,he=/_EMO_([^_]+?)_([^]*?)_EMO_/g,fe=function(e){return 45===e.charCodeAt(1)},pe=function(e){return null!=e&&"boolean"!=typeof e},me=function(e){var n=Object.create(null);return function(r){return void 0===n[r]&&(n[r]=e(r)),n[r]}}((function(e){return fe(e)?e:e.replace(ue,"-$&").toLowerCase()})),ve=function(e,n){switch(e){case"animation":case"animationName":if("string"==typeof n)return n.replace(he,(function(e,n,r){return xe={name:n,styles:r,next:xe},n}))}return 1===de[e]||fe(e)||"number"!=typeof n||0===n?n:n+"px"};function ge(e,n,r){if(null==r)return"";if(void 0!==r.__emotion_styles)return r;switch(typeof r){case"boolean":return"";case"object":if(1===r.anim)return xe={name:r.name,styles:r.styles,next:xe},r.name;if(void 0!==r.styles){var t=r.next;if(void 0!==t)for(;void 0!==t;)xe={name:t.name,styles:t.styles,next:xe},t=t.next;return r.styles+";"}return function(e,n,r){var t="";if(Array.isArray(r))for(var a=0;a<r.length;a++)t+=ge(e,n,r[a])+";";else for(var i in r){var o=r[i];if("object"!=typeof o)null!=n&&void 0!==n[o]?t+=i+"{"+n[o]+"}":pe(o)&&(t+=me(i)+":"+ve(i,o)+";");else if(!Array.isArray(o)||"string"!=typeof o[0]||null!=n&&void 0!==n[o[0]]){var s=ge(e,n,o);switch(i){case"animation":case"animationName":t+=me(i)+":"+s+";";break;default:t+=i+"{"+s+"}"}}else for(var l=0;l<o.length;l++)pe(o[l])&&(t+=me(i)+":"+ve(i,o[l])+";")}return t}(e,n,r);case"function":if(void 0!==e){var a=xe,i=r(e);return xe=a,ge(e,n,i)}}if(null==n)return r;var o=n[r];return void 0!==o?o:r}var xe,be=/label:\s*([^\s;\n{]+)\s*(;|$)/g,ye=function(e,n,r){if(1===e.length&&"object"==typeof e[0]&&null!==e[0]&&void 0!==e[0].styles)return e[0];var t=!0,a="";xe=void 0;var i=e[0];null==i||void 0===i.raw?(t=!1,a+=ge(r,n,i)):a+=i[0];for(var o=1;o<e.length;o++)a+=ge(r,n,e[o]),t&&(a+=i[o]);be.lastIndex=0;for(var s,l="";null!==(s=be.exec(a));)l+="-"+s[1];var c=function(e){for(var n,r=0,t=0,a=e.length;a>=4;++t,a-=4)n=1540483477*(65535&(n=255&e.charCodeAt(t)|(255&e.charCodeAt(++t))<<8|(255&e.charCodeAt(++t))<<16|(255&e.charCodeAt(++t))<<24))+(59797*(n>>>16)<<16),r=1540483477*(65535&(n^=n>>>24))+(59797*(n>>>16)<<16)^1540483477*(65535&r)+(59797*(r>>>16)<<16);switch(a){case 3:r^=(255&e.charCodeAt(t+2))<<16;case 2:r^=(255&e.charCodeAt(t+1))<<8;case 1:r=1540483477*(65535&(r^=255&e.charCodeAt(t)))+(59797*(r>>>16)<<16)}return(((r=1540483477*(65535&(r^=r>>>13))+(59797*(r>>>16)<<16))^r>>>15)>>>0).toString(36)}(a)+l;return{name:c,styles:a,next:xe}};function Ze(e,n,r){var t="";return r.split(" ").forEach((function(r){void 0!==e[r]?n.push(e[r]+";"):t+=r+" "})),t}function ke(e,n){if(void 0===e.inserted[n.name])return e.insert("",n,e.sheet,!0)}function we(e,n,r){var t=[],a=Ze(e,t,r);return t.length<2?r:a+n(t)}var je,Ce,$e,Ae,Se,Ee=function e(n){for(var r="",t=0;t<n.length;t++){var a=n[t];if(null!=a){var i=void 0;switch(typeof a){case"boolean":break;case"object":if(Array.isArray(a))i=e(a);else for(var o in i="",a)a[o]&&o&&(i&&(i+=" "),i+=o);break;default:i=a}i&&(r&&(r+=" "),r+=i)}}return r},Je=function(e){var n=function(e){var n=e.key;if("css"===n){var r=document.querySelectorAll("style[data-emotion]:not([data-s])");Array.prototype.forEach.call(r,(function(e){-1!==e.getAttribute("data-emotion").indexOf(" ")&&(document.head.appendChild(e),e.setAttribute("data-s",""))}))}var t=e.stylisPlugins||ce;var a,i,o={},s=[];a=e.container||document.head,Array.prototype.forEach.call(document.querySelectorAll('style[data-emotion^="'+n+' "]'),(function(e){for(var n=e.getAttribute("data-emotion").split(" "),r=1;r<n.length;r++)o[n[r]]=!0;s.push(e)}));var l,c,d=[ae,(c=function(e){l.insert(e)},function(e){e.root||(e=e.return)&&c(e)})],u=function(e){var n=A(e);return function(r,t,a,i){for(var o="",s=0;s<n;s++)o+=e[s](r,t,a,i)||"";return o}}([se,le].concat(t,d));i=function(e,n,r,t){l=r,te(K(e?e+"{"+n.styles+"}":n.styles),u),t&&(h.inserted[n.name]=!0)};var h={key:n,sheet:new m({key:n,container:a,nonce:e.nonce,speedy:e.speedy,prepend:e.prepend,insertionPoint:e.insertionPoint}),nonce:e.nonce,inserted:o,registered:{},insert:i};return h.sheet.hydrate(s),h}({key:"css"});n.sheet.speedy=function(e){this.isSpeedy=e},n.compat=!0;var r=function(){for(var e=arguments.length,r=new Array(e),t=0;t<e;t++)r[t]=arguments[t];var a=ye(r,n.registered,void 0);return function(e,n,r){!function(e,n,r){var t=e.key+"-"+n.name;!1===r&&void 0===e.registered[t]&&(e.registered[t]=n.styles)}(e,n,r);var t=e.key+"-"+n.name;if(void 0===e.inserted[n.name]){var a=n;do{e.insert(n===a?"."+t:"",a,e.sheet,!0),a=a.next}while(void 0!==a)}}(n,a,!1),n.key+"-"+a.name};return{css:r,cx:function(){for(var e=arguments.length,t=new Array(e),a=0;a<e;a++)t[a]=arguments[a];return we(n.registered,r,Ee(t))},injectGlobal:function(){for(var e=arguments.length,r=new Array(e),t=0;t<e;t++)r[t]=arguments[t];var a=ye(r,n.registered);ke(n,a)},keyframes:function(){for(var e=arguments.length,r=new Array(e),t=0;t<e;t++)r[t]=arguments[t];var a=ye(r,n.registered),i="animation-"+a.name;return ke(n,{name:a.name,styles:"@keyframes "+i+"{"+a.styles+"}"}),i},hydrate:function(e){e.forEach((function(e){n.inserted[e]=!0}))},flush:function(){n.registered={},n.inserted={},n.sheet.flush()},sheet:n.sheet,cache:n,getRegisteredStyles:Ze.bind(null,n.registered),merge:we.bind(null,n.registered,r)}}(),Qe=Je.cx,_e=Je.css,ze=_e(je||(je=p(["\n  content: '';\n  position: absolute;\n  top: 0;\n  height: var(--tree-line-height);\n  box-sizing: border-box;\n"]))),Oe=_e(Ce||(Ce=p(["\n  display: flex;\n  padding-inline-start: 0;\n  margin: 0;\n  padding-top: var(--tree-line-height);\n  position: relative;\n\n  ::before {\n    ",";\n    left: calc(50% - var(--tree-line-width) / 2);\n    width: 0;\n    border-left: var(--tree-line-width) var(--tree-node-line-style)\n      var(--tree-line-color);\n  }\n"])),ze),Re=_e($e||($e=p(["\n  flex: auto;\n  text-align: center;\n  list-style-type: none;\n  position: relative;\n  padding: var(--tree-line-height) var(--tree-node-padding) 0\n    var(--tree-node-padding);\n"]))),We=_e(Ae||(Ae=p(["\n  ::before,\n  ::after {\n    ",";\n    right: 50%;\n    width: 50%;\n    border-top: var(--tree-line-width) var(--tree-node-line-style)\n      var(--tree-line-color);\n  }\n  ::after {\n    left: 50%;\n    border-left: var(--tree-line-width) var(--tree-node-line-style)\n      var(--tree-line-color);\n  }\n\n  :only-of-type {\n    padding: 0;\n    ::after,\n    :before {\n      display: none;\n    }\n  }\n\n  :first-of-type {\n    ::before {\n      border: 0 none;\n    }\n    ::after {\n      border-radius: var(--tree-line-border-radius) 0 0 0;\n    }\n  }\n\n  :last-of-type {\n    ::before {\n      border-right: var(--tree-line-width) var(--tree-node-line-style)\n        var(--tree-line-color);\n      border-radius: 0 var(--tree-line-border-radius) 0 0;\n    }\n    ::after {\n      border: 0 none;\n    }\n  }\n"])),ze);function Ie(e){var n=e.children,r=e.label;return f.createElement("li",{className:Qe(Re,We,e.className)},r,f.Children.count(n)>0&&f.createElement("ul",{className:Oe},n))}function Fe(e){var n=e.children,r=e.label,t=e.lineHeight,a=void 0===t?"20px":t,i=e.lineWidth,o=void 0===i?"1px":i,s=e.lineColor,l=void 0===s?"black":s,c=e.nodePadding,d=void 0===c?"5px":c,u=e.lineStyle,h=void 0===u?"solid":u,m=e.lineBorderRadius,v=void 0===m?"5px":m;return f.createElement("ul",{className:_e(Se||(Se=p(["\n        padding-inline-start: 0;\n        margin: 0;\n        display: flex;\n\n        --line-height: ",";\n        --line-width: ",";\n        --line-color: ",";\n        --line-border-radius: ",";\n        --line-style: ",";\n        --node-padding: ",";\n\n        --tree-line-height: var(--line-height, 20px);\n        --tree-line-width: var(--line-width, 1px);\n        --tree-line-color: var(--line-color, black);\n        --tree-line-border-radius: var(--line-border-radius, 5px);\n        --tree-node-line-style: var(--line-style, solid);\n        --tree-node-padding: var(--node-padding, 5px);\n      "])),a,o,l,v,h,d)},f.createElement(Ie,{label:r},n))}var Ne=r(62652),Te=r(12065),De=r(57621),Le=r(60220),Ge=r(4567),Pe=r(80160),qe=r(80184);function He(e){var n=e.node,r=e.depth,t=e.length,l=e.sx,c=(0,s.Z)(),d="light"===c.palette.mode,u=function(e){return{bgcolor:(0,Te.Fq)(c.palette[e].main,.08),border:"solid 1px ".concat((0,Te.Fq)(c.palette[e].main,.24)),color:d?c.palette[e].darker:c.palette[e].lighter}},h=1===r,f="root"===n.group,p="product design"===n.group,m="development"===n.group,v="marketing"===n.group;return(0,qe.jsxs)(o.Z,{sx:{position:"relative",display:"inline-flex"},alignItems:"center",children:[!h&&(0,qe.jsx)(Le.Z,{alt:n.name,src:n.avatarUrl||"",sx:{mt:-3.5,zIndex:9,width:56,height:56,position:"absolute",border:"solid 4px ".concat(c.palette.background.paper)}}),(0,qe.jsxs)(De.Z,{sx:(0,a.Z)((0,a.Z)((0,a.Z)((0,a.Z)((0,a.Z)({pt:5,pb:3,minWidth:200,borderRadius:1.5,textTransform:"capitalize"},h&&{py:2}),h&&p&&u("primary")),h&&m&&u("info")),h&&v&&u("warning")),l),children:[1!==r&&!f&&(0,qe.jsx)(i.Z,{sx:(0,a.Z)((0,a.Z)((0,a.Z)({top:0,left:0,width:1,height:4,position:"absolute",borderRadius:1.5},p&&{bgcolor:"primary.light"}),m&&{bgcolor:"info.light"}),v&&{bgcolor:"warning.light"})}),(0,qe.jsxs)(Ge.Z,{variant:h?"subtitle1":"subtitle2",noWrap:!0,children:[n.name,h&&(0,qe.jsx)(Pe.Z,{color:(m?"info":v&&"warning")||"primary",sx:{ml:1},children:t})]}),!h&&(0,qe.jsx)(Ge.Z,{variant:"caption",component:"div",noWrap:!0,sx:{color:"text.secondary"},children:n.role})]})]})}function Be(e){var n=e.node,r=e.sx;return(0,qe.jsx)(De.Z,{sx:(0,a.Z)({p:2,boxShadow:"none",borderRadius:1.5,display:"inline-flex",textTransform:"capitalize",color:function(e){return"light"===e.palette.mode?"primary.darker":"primary.lighter"},bgcolor:function(e){return(0,Te.Fq)(e.palette.primary.main,.08)},border:function(e){return"1px solid ".concat((0,Te.Fq)(e.palette.primary.main,.24))}},r),children:(0,qe.jsx)(Ge.Z,{variant:"subtitle2",children:n.name})})}var Me=r(82626),Ue=r(13400),Ve=r(27216),Ke=r(52115);function Xe(e){var n=e.node,r=e.onEdit,t=e.onDelete,i=e.sx,o=(0,Ke.S)();return(0,qe.jsxs)(qe.Fragment,{children:[(0,qe.jsxs)(De.Z,{sx:(0,a.Z)({p:2,minWidth:200,borderRadius:1.5,textAlign:"left",position:"relative",display:"inline-flex",flexDirection:"column",textTransform:"capitalize"},i),children:[(0,qe.jsx)(Ue.Z,{color:o.open?"inherit":"default",onClick:o.onOpen,sx:{position:"absolute",top:8,right:8},children:(0,qe.jsx)(Ve.Z,{icon:"eva:more-horizontal-fill"})}),(0,qe.jsx)(Le.Z,{alt:n.name,src:n.avatarUrl||"",sx:{mr:2,mb:1,width:48,height:48}}),(0,qe.jsx)(Ge.Z,{variant:"subtitle2",noWrap:!0,children:n.name}),(0,qe.jsx)(Ge.Z,{variant:"caption",component:"div",noWrap:!0,sx:{color:"text.secondary"},children:n.role})]}),(0,qe.jsxs)(Ke.Z,{open:o.open,onClose:o.onClose,arrow:"left-center",sx:{width:160},children:[t&&(0,qe.jsxs)(Me.Z,{onClick:function(){o.onClose(),t()},sx:{color:"error.main"},children:[(0,qe.jsx)(Ve.Z,{icon:"solar:trash-bin-trash-bold"}),"Delete"]}),r&&(0,qe.jsxs)(Me.Z,{onClick:function(){o.onClose(),r()},children:[(0,qe.jsx)(Ve.Z,{icon:"solar:pen-bold"}),"Edit"]})]})]})}var Ye=["data","variant","sx"];function en(e){var n=e.data,r=e.variant,t=void 0===r?"simple":r,i=e.sx,o=(0,h.Z)(e,Ye),l=(0,s.Z)();return(0,qe.jsx)(Fe,(0,a.Z)((0,a.Z)({lineWidth:"1.5px",nodePadding:"4px",lineBorderRadius:"24px",lineColor:l.palette.divider,label:"simple"===t&&(0,qe.jsx)(Be,{sx:i,node:n})||"standard"===t&&(0,qe.jsx)(Xe,{sx:i,node:n,onEdit:function(){return console.info("EDIT",n.name)},onDelete:function(){return console.info("DELETE",n.name)}})||"group"===t&&(0,qe.jsx)(He,{sx:i,node:n})},o),{},{children:n.children.map((function(e){return(0,qe.jsx)(nn,{depth:1,data:e,variant:t,sx:i},e.name)}))}))}function nn(e){var n,r=e.data,t=e.depth,a=e.variant,i=e.sx,o=r.children&&!!r.children;return(0,qe.jsx)(Ie,{label:"simple"===a&&(0,qe.jsx)(Be,{sx:i,node:r})||"standard"===a&&(0,qe.jsx)(Xe,{sx:i,node:r,onEdit:function(){return console.info("EDIT",r.name)},onDelete:function(){return console.info("DELETE",r.name)}})||"group"===a&&(0,qe.jsx)(He,{sx:i,node:r,depth:t,length:null===(n=(0,Ne.V)(r.children))||void 0===n?void 0:n.length}),children:o&&(0,qe.jsx)(rn,{data:r.children,depth:t,variant:a,sx:i})})}function rn(e){var n=e.data,r=e.depth,t=e.variant,a=e.sx;return(0,qe.jsx)(qe.Fragment,{children:n.map((function(e){return(0,qe.jsx)(nn,{data:e,depth:r+1,variant:t,sx:a},e.name)}))})}var tn=r(31562);function an(){var e=(0,s.Z)();return(0,qe.jsxs)(qe.Fragment,{children:[(0,qe.jsx)(i.Z,{sx:{py:5,bgcolor:"light"===e.palette.mode?"grey.200":"grey.800"},children:(0,qe.jsx)(l.Z,{children:(0,qe.jsx)(u.Z,{heading:"Organizational Chart",links:[{name:"Components",href:c.H.components},{name:"Organizational Chart"}],moreLink:["https://www.npmjs.com/package/react-organizational-chart","https://daniel-hauser.github.io/react-organizational-chart/?path=/story/example-tree--basic"]})})}),(0,qe.jsx)(l.Z,{sx:{my:10},children:(0,qe.jsxs)(o.Z,{spacing:5,children:[(0,qe.jsx)(tn.Z,{title:"Simple",children:(0,qe.jsx)(en,{data:sn,lineColor:e.palette.primary.light})}),(0,qe.jsx)(tn.Z,{title:"Standard",sx:{overflow:"auto"},children:(0,qe.jsx)(en,{data:sn,variant:"standard",lineHeight:"40px"})}),(0,qe.jsx)(tn.Z,{title:"By Group",sx:{overflow:"auto"},children:(0,qe.jsx)(en,{data:ln,variant:"group",lineHeight:"64px"})})]})})]})}var on=function(e,n,r,t){return{name:e,group:n,role:r,avatarUrl:t}},sn=(0,a.Z)((0,a.Z)({},on("tasha mcneill","root","ceo, co-founder",d.QJ.image.avatar(1))),{},{children:[(0,a.Z)((0,a.Z)({},on("john stone","product design","lead",d.QJ.image.avatar(2))),{},{children:[(0,a.Z)((0,a.Z)({},on("rimsha wynn","product design","senior",d.QJ.image.avatar(3))),{},{children:null})]}),(0,a.Z)((0,a.Z)({},on("ponnappa priya","development","lead",d.QJ.image.avatar(4))),{},{children:[(0,a.Z)((0,a.Z)({},on("tyra elliott","development","senior",d.QJ.image.avatar(5))),{},{children:[(0,a.Z)((0,a.Z)({},on("sheridan mckee","development","back end developer",d.QJ.image.avatar(6))),{},{children:[(0,a.Z)((0,a.Z)({},on("ang li","development","back end developer",d.QJ.image.avatar(7))),{},{children:null})]}),(0,a.Z)((0,a.Z)({},on("hope ahmad","development","front end",d.QJ.image.avatar(8))),{},{children:null})]})]}),(0,a.Z)((0,a.Z)({},on("peter stanbridge","marketing","lead",d.QJ.image.avatar(9))),{},{children:[(0,a.Z)((0,a.Z)({},on("madeline harding","marketing","support",d.QJ.image.avatar(10))),{},{children:null}),(0,a.Z)((0,a.Z)({},on("eoin medrano","marketing","content writer",d.QJ.image.avatar(11))),{},{children:null})]})]}),ln=(0,a.Z)((0,a.Z)({},on("tasha mcneill","root","ceo, co-founder",d.QJ.image.avatar(1))),{},{children:[(0,a.Z)((0,a.Z)({},on("product design","product design",null,null)),{},{children:[(0,a.Z)((0,a.Z)({},on("john stone","product design","lead",d.QJ.image.avatar(2))),{},{children:[(0,a.Z)((0,a.Z)({},on("rimsha wynn","product design","senior",d.QJ.image.avatar(3))),{},{children:null})]})]}),(0,a.Z)((0,a.Z)({},on("development","development",null,null)),{},{children:[(0,a.Z)((0,a.Z)({},on("ponnappa priya","development","lead",d.QJ.image.avatar(4))),{},{children:[(0,a.Z)((0,a.Z)({},on("tyra elliott","development","senior",d.QJ.image.avatar(5))),{},{children:[(0,a.Z)((0,a.Z)({},on("sheridan mckee","development","back end developer",d.QJ.image.avatar(6))),{},{children:[(0,a.Z)((0,a.Z)({},on("ang li","development","back end developer",d.QJ.image.avatar(7))),{},{children:null})]}),(0,a.Z)((0,a.Z)({},on("hope ahmad","development","front end",d.QJ.image.avatar(8))),{},{children:null})]})]})]}),(0,a.Z)((0,a.Z)({},on("marketing","marketing",null,null)),{},{children:[(0,a.Z)((0,a.Z)({},on("peter stanbridge","marketing","lead",d.QJ.image.avatar(9))),{},{children:[(0,a.Z)((0,a.Z)({},on("madeline harding","marketing","support",d.QJ.image.avatar(10))),{},{children:null}),(0,a.Z)((0,a.Z)({},on("eoin medrano","marketing","content writer",d.QJ.image.avatar(11))),{},{children:null})]})]})]});function cn(){return(0,qe.jsxs)(qe.Fragment,{children:[(0,qe.jsx)(t.ql,{children:(0,qe.jsx)("title",{children:" Extra: Organizational Chart"})}),(0,qe.jsx)(an,{})]})}},31562:function(e,n,r){r.d(n,{Z:function(){return u}});var t=r(1413),a=r(45987),i=r(12065),o=r(27938),s=r(9585),l=r(36314),c=r(80184),d=["title","sx","children"];function u(e){var n=e.title,r=e.sx,u=e.children,h=(0,a.Z)(e,d);return(0,c.jsxs)(o.Z,{variant:"outlined",sx:{borderRadius:1.5,borderStyle:"dashed",bgcolor:function(e){return(0,i.Fq)(e.palette.grey[500],.04)}},children:[n&&(0,c.jsx)(s.Z,{title:n}),(0,c.jsx)(l.Z,(0,t.Z)((0,t.Z)({spacing:3,direction:"row",alignItems:"center",justifyContent:"center",flexWrap:"wrap",sx:(0,t.Z)({p:5,minHeight:180},r)},h),{},{children:u}))]})}}}]);
//# sourceMappingURL=6405.a900feb9.chunk.js.map