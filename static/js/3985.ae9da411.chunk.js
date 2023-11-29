"use strict";(self.webpackChunk_minimal_kit_cra_js=self.webpackChunk_minimal_kit_cra_js||[]).push([[3985],{50933:function(n,e,t){t.d(e,{Z:function(){return m}});var r=t(1413),i=t(45987),o=t(64554),a=t(50533),c=t(36314),l=t(4567),s=t(93517),u=t(83854),d=t(80184);function f(n){var e=n.link,t=n.activeLast,i=n.disabled,c=e.name,l=e.href,s=e.icon,f=(0,r.Z)({typography:"body2",alignItems:"center",color:"text.primary",display:"inline-flex"},i&&!t&&{cursor:"default",pointerEvents:"none",color:"text.disabled"}),h=(0,d.jsxs)(d.Fragment,{children:[s&&(0,d.jsx)(o.Z,{component:"span",sx:{mr:1,display:"inherit","& svg":{width:20,height:20}},children:s}),c]});return l?(0,d.jsx)(a.Z,{component:u.r,href:l,sx:f,children:h}):(0,d.jsxs)(o.Z,{sx:f,children:[" ",h," "]})}var h=["links","action","heading","moreLink","activeLast","sx"];function m(n){var e=n.links,t=n.action,u=n.heading,m=n.moreLink,g=n.activeLast,p=n.sx,v=(0,i.Z)(n,h),Z=e[e.length-1].name;return(0,d.jsxs)(o.Z,{sx:(0,r.Z)({},p),children:[(0,d.jsxs)(c.Z,{direction:"row",alignItems:"center",children:[(0,d.jsxs)(o.Z,{sx:{flexGrow:1},children:[u&&(0,d.jsx)(l.Z,{variant:"h4",gutterBottom:!0,children:u}),!!e.length&&(0,d.jsx)(s.Z,(0,r.Z)((0,r.Z)({separator:(0,d.jsx)(x,{})},v),{},{children:e.map((function(n){return(0,d.jsx)(f,{link:n,activeLast:g,disabled:n.name===Z},n.name||"")}))}))]}),t&&(0,d.jsxs)(o.Z,{sx:{flexShrink:0},children:[" ",t," "]})]}),!!m&&(0,d.jsx)(o.Z,{sx:{mt:2},children:m.map((function(n){return(0,d.jsx)(a.Z,{href:n,variant:"body2",target:"_blank",rel:"noopener",sx:{display:"table"},children:n},n)}))})]})}function x(){return(0,d.jsx)(o.Z,{component:"span",sx:{width:4,height:4,borderRadius:"50%",bgcolor:"text.disabled"}})}},53985:function(n,e,t){t.r(e),t.d(e,{default:function(){return m}});var r=t(6907),i=t(16002),o=t(64554),a=t(5849),c=t(89164),l=t(38072),s=t(32869),u=t(50933),d=t(31562),f=t(80184);function h(){var n=(0,s.Ds)(),e=n.enqueueSnackbar,t=n.closeSnackbar,r=function(n,r){e("This is an ".concat(n),{variant:n,anchorOrigin:r,action:function(e){return(0,f.jsxs)(f.Fragment,{children:[(0,f.jsx)(a.Z,{size:"small",color:"default"!==n?n:"primary",onClick:function(){console.info("I belong to snackbar with key ".concat(e))},children:"Alert"}),(0,f.jsx)(a.Z,{size:"small",color:"inherit",onClick:function(){return t(e)},children:"Dismiss"})]})}})};return(0,f.jsxs)(f.Fragment,{children:[(0,f.jsx)(o.Z,{sx:{py:5,bgcolor:function(n){return"light"===n.palette.mode?"grey.200":"grey.800"}},children:(0,f.jsx)(c.Z,{children:(0,f.jsx)(u.Z,{heading:"Snackbar",links:[{name:"Components",href:l.H.components},{name:"Snackbar"}],moreLink:["https://www.iamhosseindhv.com/notistack"]})})}),(0,f.jsx)(c.Z,{sx:{my:10},children:(0,f.jsxs)(i.ZP,{columns:{xs:1,md:2},spacing:3,children:[(0,f.jsxs)(d.Z,{title:"Simple",children:[(0,f.jsx)(a.Z,{variant:"contained",color:"inherit",onClick:function(){return e("This is an default",{variant:"default"})},children:"Default"}),(0,f.jsx)(a.Z,{variant:"contained",color:"info",onClick:function(){return e("This is an info",{variant:"info"})},children:"Info"}),(0,f.jsx)(a.Z,{variant:"contained",color:"success",onClick:function(){return e("This is an success",{variant:"success"})},children:"Success"}),(0,f.jsx)(a.Z,{variant:"contained",color:"warning",onClick:function(){return e("This is an warning",{variant:"warning"})},children:"Warning"}),(0,f.jsx)(a.Z,{variant:"contained",color:"error",onClick:function(){return e("This is an error",{variant:"error"})},children:"Error"})]}),(0,f.jsxs)(d.Z,{title:"With Action",children:[(0,f.jsx)(a.Z,{variant:"contained",color:"inherit",onClick:function(){return r("default")},children:"Default"}),(0,f.jsx)(a.Z,{variant:"contained",color:"info",onClick:function(){return r("info")},children:"Info"}),(0,f.jsx)(a.Z,{variant:"contained",color:"success",onClick:function(){return r("success")},children:"Success"}),(0,f.jsx)(a.Z,{variant:"contained",color:"warning",onClick:function(){return r("warning")},children:"Warning"}),(0,f.jsx)(a.Z,{variant:"contained",color:"error",onClick:function(){return r("error")},children:"Error"})]}),(0,f.jsxs)(d.Z,{title:"anchorOrigin",children:[(0,f.jsx)(a.Z,{variant:"text",color:"inherit",onClick:function(){return r("default",{vertical:"top",horizontal:"left"})},children:"Top Left"}),(0,f.jsx)(a.Z,{variant:"text",color:"inherit",onClick:function(){return r("default",{vertical:"top",horizontal:"center"})},children:"Top Center"}),(0,f.jsx)(a.Z,{variant:"text",color:"inherit",onClick:function(){return r("default")},children:"Top Right"}),(0,f.jsx)(a.Z,{variant:"text",color:"inherit",onClick:function(){return r("default",{vertical:"bottom",horizontal:"left"})},children:"Bottom Left"}),(0,f.jsx)(a.Z,{variant:"text",color:"inherit",onClick:function(){return r("default",{vertical:"bottom",horizontal:"center"})},children:"Bottom Center"}),(0,f.jsx)(a.Z,{variant:"text",color:"inherit",onClick:function(){return r("default",{vertical:"bottom",horizontal:"right"})},children:"Bottom Right"})]})]})})]})}function m(){return(0,f.jsxs)(f.Fragment,{children:[(0,f.jsx)(r.ql,{children:(0,f.jsx)("title",{children:" Extra: Snackbar"})}),(0,f.jsx)(h,{})]})}},31562:function(n,e,t){t.d(e,{Z:function(){return d}});var r=t(1413),i=t(45987),o=t(12065),a=t(27938),c=t(9585),l=t(36314),s=t(80184),u=["title","sx","children"];function d(n){var e=n.title,t=n.sx,d=n.children,f=(0,i.Z)(n,u);return(0,s.jsxs)(a.Z,{variant:"outlined",sx:{borderRadius:1.5,borderStyle:"dashed",bgcolor:function(n){return(0,o.Fq)(n.palette.grey[500],.04)}},children:[e&&(0,s.jsx)(c.Z,{title:e}),(0,s.jsx)(l.Z,(0,r.Z)((0,r.Z)({spacing:3,direction:"row",alignItems:"center",justifyContent:"center",flexWrap:"wrap",sx:(0,r.Z)({p:5,minHeight:180},t)},f),{},{children:d}))]})}},16002:function(n,e,t){t.d(e,{ZP:function(){return w}});var r=t(93433),i=t(29439),o=t(63366),a=t(87462),c=t(94419),l=t(54164),s=t(66934),u=t(31402),d=t(51184),f=t(45682),h=t(82466),m=t(62876),x=t(6117),g=t(38717),p=t(72791),v=t(21217);function Z(n){return(0,v.Z)("MuiMasonry",n)}(0,t(75878).Z)("MuiMasonry",["root"]);var b=t(80184),j=["children","className","component","columns","spacing","defaultColumns","defaultHeight","defaultSpacing"],k=function(n){return Number(n.replace("px",""))},y={flexBasis:"100%",width:0,margin:0,padding:0},C=(0,s.ZP)("div",{name:"MuiMasonry",slot:"Root",overridesResolver:function(n,e){return[e.root]}})((function(n){var e=n.ownerState,t=n.theme,r={width:"100%",display:"flex",flexFlow:"column wrap",alignContent:"flex-start",boxSizing:"border-box","& > *":{boxSizing:"border-box"}},i={};if(e.isSSR){for(var o={},c=k(t.spacing(e.defaultSpacing)),l=1;l<=e.defaultColumns;l+=1)o["&:nth-of-type(".concat(e.defaultColumns,"n+").concat(l%e.defaultColumns,")")]={order:l};return i.height=e.defaultHeight,i.margin=-c/2,i["& > *"]=(0,a.Z)({},r["& > *"],o,{margin:c/2,width:"calc(".concat((100/e.defaultColumns).toFixed(2),"% - ").concat(c,"px)")}),(0,a.Z)({},r,i)}var s=(0,d.P$)({values:e.spacing,breakpoints:t.breakpoints.values}),u=(0,f.hB)(t);r=(0,h.Z)(r,(0,d.k9)({theme:t},s,(function(n){var t;if("string"===typeof n&&!Number.isNaN(Number(n))||"number"===typeof n){var r=Number(n);t=(0,f.NA)(u,r)}else t=n;return(0,a.Z)({margin:"calc(0px - (".concat(t," / 2))"),"& > *":{margin:"calc(".concat(t," / 2)")}},e.maxColumnHeight&&{height:"number"===typeof t?Math.ceil(e.maxColumnHeight+k(t)):"calc(".concat(e.maxColumnHeight,"px + ").concat(t,")")})})));var m=(0,d.P$)({values:e.columns,breakpoints:t.breakpoints.values});return r=(0,h.Z)(r,(0,d.k9)({theme:t},m,(function(n){var e=Number(n),t="".concat((100/e).toFixed(2),"%"),r="string"===typeof s&&!Number.isNaN(Number(s))||"number"===typeof s?(0,f.NA)(u,Number(s)):"0px";return{"& > *":{width:"calc(".concat(t," - ").concat(r,")")}}}))),"object"===typeof s&&(r=(0,h.Z)(r,(0,d.k9)({theme:t},s,(function(n,e){if(e){var t=Number(n),r=Object.keys(m).pop(),i=(0,f.NA)(u,t),o="object"===typeof m?m[e]||m[r]:m,a="".concat((100/o).toFixed(2),"%");return{"& > *":{width:"calc(".concat(a," - ").concat(i,")")}}}return null})))),r})),w=p.forwardRef((function(n,e){var t=(0,u.Z)({props:n,name:"MuiMasonry"}),s=t.children,d=t.className,f=t.component,h=void 0===f?"div":f,v=t.columns,w=void 0===v?4:v,N=t.spacing,S=void 0===N?1:N,M=t.defaultColumns,R=t.defaultHeight,T=t.defaultSpacing,z=(0,o.Z)(t,j),A=p.useRef(),F=p.useState(),H=(0,i.Z)(F,2),L=H[0],E=H[1],_=!L&&R&&void 0!==M&&void 0!==T,B=p.useState(_?M-1:0),I=(0,i.Z)(B,2),O=I[0],W=I[1],D=(0,a.Z)({},t,{spacing:S,columns:w,maxColumnHeight:L,defaultColumns:M,defaultHeight:R,defaultSpacing:T,isSSR:_}),P=function(n){var e=n.classes;return(0,c.Z)({root:["root"]},Z,e)}(D),q=function(n){if(A.current&&n&&0!==n.length){var e=A.current,t=A.current.firstChild,i=e.clientWidth,o=t.clientWidth;if(0!==i&&0!==o){var a=window.getComputedStyle(t),c=k(a.marginLeft),s=k(a.marginRight),u=Math.round(i/(o+c+s)),d=new Array(u).fill(0),f=!1;e.childNodes.forEach((function(n){if(n.nodeType===Node.ELEMENT_NODE&&"line-break"!==n.dataset.class&&!f){var e=window.getComputedStyle(n),t=k(e.marginTop),i=k(e.marginBottom),o=k(e.height)?Math.ceil(k(e.height))+t+i:0;if(0!==o){for(var a=0;a<n.childNodes.length;a+=1){var c=n.childNodes[a];if("IMG"===c.tagName&&0===c.clientHeight){f=!0;break}}if(!f){var l=d.indexOf(Math.min.apply(Math,(0,r.Z)(d)));d[l]+=o;var s=l+1;n.style.order=s}}else f=!0}})),f||l.flushSync((function(){E(Math.max.apply(Math,(0,r.Z)(d))),W(u>0?u-1:0)}))}}};(0,m.Z)((function(){if("undefined"!==typeof ResizeObserver){var n,e=new ResizeObserver((function(){n=window.requestAnimationFrame(q)}));return A.current&&A.current.childNodes.forEach((function(n){e.observe(n)})),function(){n&&window.cancelAnimationFrame(n),e&&e.disconnect()}}}),[w,S,s]);var G=(0,x.Z)(e,A),$=new Array(O).fill("").map((function(n,e){return(0,b.jsx)("span",{"data-class":"line-break",style:(0,a.Z)({},y,{order:e+1})},e)}));return(0,b.jsxs)(C,(0,a.Z)({as:h,className:(0,g.Z)(P.root,d),ref:G,ownerState:D},z,{children:[s,$]}))}))},38717:function(n,e,t){function r(n){var e,t,i="";if("string"==typeof n||"number"==typeof n)i+=n;else if("object"==typeof n)if(Array.isArray(n))for(e=0;e<n.length;e++)n[e]&&(t=r(n[e]))&&(i&&(i+=" "),i+=t);else for(e in n)n[e]&&(i&&(i+=" "),i+=e);return i}e.Z=function(){for(var n,e,t=0,i="";t<arguments.length;)(n=arguments[t++])&&(e=r(n))&&(i&&(i+=" "),i+=e);return i}}}]);
//# sourceMappingURL=3985.ae9da411.chunk.js.map