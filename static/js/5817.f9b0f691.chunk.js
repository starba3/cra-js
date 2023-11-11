"use strict";(self.webpackChunk_minimal_kit_cra_js=self.webpackChunk_minimal_kit_cra_js||[]).push([[5817],{50933:function(e,t,n){n.d(t,{Z:function(){return m}});var l=n(1413),a=n(45987),r=n(64554),i=n(50533),o=n(36314),s=n(4567),u=n(93517),c=n(83854),d=n(80184);function h(e){var t=e.link,n=e.activeLast,a=e.disabled,o=t.name,s=t.href,u=t.icon,h=(0,l.Z)({typography:"body2",alignItems:"center",color:"text.primary",display:"inline-flex"},a&&!n&&{cursor:"default",pointerEvents:"none",color:"text.disabled"}),f=(0,d.jsxs)(d.Fragment,{children:[u&&(0,d.jsx)(r.Z,{component:"span",sx:{mr:1,display:"inherit","& svg":{width:20,height:20}},children:u}),o]});return s?(0,d.jsx)(i.Z,{component:c.r,href:s,sx:h,children:f}):(0,d.jsxs)(r.Z,{sx:h,children:[" ",f," "]})}var f=["links","action","heading","moreLink","activeLast","sx"];function m(e){var t=e.links,n=e.action,c=e.heading,m=e.moreLink,p=e.activeLast,v=e.sx,Z=(0,a.Z)(e,f),b=t[t.length-1].name;return(0,d.jsxs)(r.Z,{sx:(0,l.Z)({},v),children:[(0,d.jsxs)(o.Z,{direction:"row",alignItems:"center",children:[(0,d.jsxs)(r.Z,{sx:{flexGrow:1},children:[c&&(0,d.jsx)(s.Z,{variant:"h4",gutterBottom:!0,children:c}),!!t.length&&(0,d.jsx)(u.Z,(0,l.Z)((0,l.Z)({separator:(0,d.jsx)(x,{})},Z),{},{children:t.map((function(e){return(0,d.jsx)(h,{link:e,activeLast:p,disabled:e.name===b},e.name||"")}))}))]}),n&&(0,d.jsxs)(r.Z,{sx:{flexShrink:0},children:[" ",n," "]})]}),!!m&&(0,d.jsx)(r.Z,{sx:{mt:2},children:m.map((function(e){return(0,d.jsx)(i.Z,{href:e,variant:"body2",target:"_blank",rel:"noopener",sx:{display:"table"},children:e},e)}))})]})}function x(){return(0,d.jsx)(r.Z,{component:"span",sx:{width:4,height:4,borderRadius:"50%",bgcolor:"text.disabled"}})}},15817:function(e,t,n){n.r(t),n.d(t,{default:function(){return S}});var l=n(6907),a=n(29439),r=n(72791),i=n(61474),o=n(64554),s=n(2101),u=n(89164),c=n(38072),d=n(50933),h=n(4942),f=n(1413),m=n(16002),x=n(82626),p=n(48550),v=n(13400),Z=n(63466),b=n(27216),g=n(31562),j=n(80184),w=[{value:"USD",label:"$"},{value:"EUR",label:"\u20ac"},{value:"BTC",label:"\u0e3f"},{value:"JPY",label:"\xa5"}];function y(e){var t=e.variant,n=(0,r.useState)("EUR"),l=(0,a.Z)(n,2),i=l[0],o=l[1],s=(0,r.useState)({amount:"",password:"",weight:"",weightRange:"",showPassword:!1}),u=(0,a.Z)(s,2),c=u[0],d=u[1],y=(0,r.useCallback)((function(e){o(e.target.value)}),[]),C=function(e){return function(t){d((0,f.Z)((0,f.Z)({},c),{},(0,h.Z)({},e,t.target.value)))}},k=(0,r.useCallback)((function(){d((0,f.Z)((0,f.Z)({},c),{},{showPassword:!c.showPassword}))}),[c]),S=(0,r.useCallback)((function(e){e.preventDefault()}),[]);return(0,j.jsxs)(m.ZP,{columns:{xs:1,md:2},spacing:3,children:[(0,j.jsxs)(g.Z,{title:"General",children:[(0,j.jsx)(p.Z,{variant:t,fullWidth:!0,label:"Inactive"}),(0,j.jsx)(p.Z,{variant:t,required:!0,fullWidth:!0,label:"Activated",defaultValue:"Hello Minimal"}),(0,j.jsx)(p.Z,{variant:t,fullWidth:!0,type:"password",label:"Password",autoComplete:"current-password"}),(0,j.jsx)(p.Z,{variant:t,disabled:!0,fullWidth:!0,label:"Disabled",defaultValue:"Hello Minimal"})]}),(0,j.jsxs)(g.Z,{title:"With Icon & Adornments",children:[(0,j.jsx)(p.Z,{variant:t,fullWidth:!0,label:"Filled",InputProps:{startAdornment:(0,j.jsx)(Z.Z,{position:"start",children:(0,j.jsx)(b.Z,{icon:"solar:user-rounded-bold",width:24})})}}),(0,j.jsx)(p.Z,{variant:t,disabled:!0,fullWidth:!0,label:"Disabled",defaultValue:"Hello Minimal",InputProps:{startAdornment:(0,j.jsx)(Z.Z,{position:"start",children:(0,j.jsx)(b.Z,{icon:"solar:user-rounded-bold",width:24})})}}),(0,j.jsx)(p.Z,{variant:t,fullWidth:!0,label:"With normal TextField",InputProps:{startAdornment:(0,j.jsx)(Z.Z,{position:"start",children:"Kg"})}}),(0,j.jsx)(p.Z,{variant:t,fullWidth:!0,value:c.weight,onChange:C("weight"),helperText:"Weight",InputProps:{endAdornment:(0,j.jsx)(Z.Z,{position:"end",children:"Kg"})}}),(0,j.jsx)(p.Z,{variant:t,fullWidth:!0,type:c.showPassword?"text":"password",value:c.password,onChange:C("password"),label:"Password",InputProps:{startAdornment:(0,j.jsx)(Z.Z,{position:"start",children:(0,j.jsx)(b.Z,{icon:"solar:user-rounded-bold",width:24})}),endAdornment:(0,j.jsx)(Z.Z,{position:"end",children:(0,j.jsx)(v.Z,{onClick:k,onMouseDown:S,edge:"end",children:c.showPassword?(0,j.jsx)(b.Z,{icon:"solar:eye-bold",width:24}):(0,j.jsx)(b.Z,{icon:"solar:eye-closed-bold",width:24})})})}})]}),(0,j.jsxs)(g.Z,{title:"With Caption",children:[(0,j.jsx)(p.Z,{variant:t,fullWidth:!0,label:"Error",defaultValue:"Hello Minimal",helperText:"Incorrect entry."}),(0,j.jsx)(p.Z,{variant:t,error:!0,fullWidth:!0,label:"Error",defaultValue:"Hello Minimal",helperText:"Incorrect entry."})]}),(0,j.jsxs)(g.Z,{title:"Type",children:[(0,j.jsx)(p.Z,{variant:t,fullWidth:!0,type:"password",label:"Password",autoComplete:"current-password"}),(0,j.jsx)(p.Z,{variant:t,fullWidth:!0,type:"number",label:"Number",defaultValue:0,InputLabelProps:{shrink:!0}}),(0,j.jsx)(p.Z,{variant:t,fullWidth:!0,label:"Search",type:"search"})]}),(0,j.jsxs)(g.Z,{title:"Sizes",children:[(0,j.jsx)(p.Z,{variant:t,fullWidth:!0,label:"Size",size:"small",defaultValue:"Small"}),(0,j.jsx)(p.Z,{variant:t,fullWidth:!0,label:"Size",defaultValue:"Normal"})]}),(0,j.jsxs)(g.Z,{title:"Select",children:[(0,j.jsx)(p.Z,{variant:t,select:!0,fullWidth:!0,label:"Select",value:i,onChange:y,helperText:"Please select your currency",children:w.map((function(e){return(0,j.jsx)(x.Z,{value:e.value,children:e.label},e.value)}))}),(0,j.jsx)(p.Z,{variant:t,select:!0,fullWidth:!0,size:"small",value:i,label:"Native select",SelectProps:{native:!0},onChange:y,helperText:"Please select your currency",children:w.map((function(e){return(0,j.jsx)("option",{value:e.value,children:e.label},e.value)}))})]}),(0,j.jsxs)(g.Z,{title:"Multiline",children:[(0,j.jsx)(p.Z,{variant:t,fullWidth:!0,label:"Multiline",multiline:!0,maxRows:4,value:"Controlled"}),(0,j.jsx)(p.Z,{variant:t,fullWidth:!0,multiline:!0,placeholder:"Placeholder",label:"Multiline Placeholder"}),(0,j.jsx)(p.Z,{variant:t,rows:4,fullWidth:!0,multiline:!0,label:"Multiline",defaultValue:"Default Value"})]})]})}var C=[{value:"outlined",label:"Outlined",component:(0,j.jsx)(y,{variant:"outlined"})},{value:"filled",label:"Filled",component:(0,j.jsx)(y,{variant:"filled"})},{value:"standard",label:"Standard",component:(0,j.jsx)(y,{variant:"standard"})}];function k(){var e=(0,r.useState)("outlined"),t=(0,a.Z)(e,2),n=t[0],l=t[1],h=(0,r.useCallback)((function(e,t){l(t)}),[]);return(0,j.jsxs)(j.Fragment,{children:[(0,j.jsx)(o.Z,{sx:{py:5,bgcolor:function(e){return"light"===e.palette.mode?"grey.200":"grey.800"}},children:(0,j.jsx)(u.Z,{children:(0,j.jsx)(d.Z,{heading:"Textfield",links:[{name:"Components",href:c.H.components},{name:"Textfield"}],moreLink:["https://mui.com/components/text-fields"]})})}),(0,j.jsxs)(u.Z,{sx:{my:10},children:[(0,j.jsx)(s.Z,{value:n,onChange:h,children:C.map((function(e){return(0,j.jsx)(i.Z,{value:e.value,label:e.label},e.value)}))}),(0,j.jsx)("form",{noValidate:!0,autoComplete:"off",children:C.map((function(e){return e.value===n&&(0,j.jsx)(o.Z,{sx:{mt:5},children:e.component},e.value)}))})]})]})}function S(){return(0,j.jsxs)(j.Fragment,{children:[(0,j.jsx)(l.ql,{children:(0,j.jsx)("title",{children:" MUI: TextField"})}),(0,j.jsx)(k,{})]})}},31562:function(e,t,n){n.d(t,{Z:function(){return d}});var l=n(1413),a=n(45987),r=n(12065),i=n(27938),o=n(9585),s=n(36314),u=n(80184),c=["title","sx","children"];function d(e){var t=e.title,n=e.sx,d=e.children,h=(0,a.Z)(e,c);return(0,u.jsxs)(i.Z,{variant:"outlined",sx:{borderRadius:1.5,borderStyle:"dashed",bgcolor:function(e){return(0,r.Fq)(e.palette.grey[500],.04)}},children:[t&&(0,u.jsx)(o.Z,{title:t}),(0,u.jsx)(s.Z,(0,l.Z)((0,l.Z)({spacing:3,direction:"row",alignItems:"center",justifyContent:"center",flexWrap:"wrap",sx:(0,l.Z)({p:5,minHeight:180},n)},h),{},{children:d}))]})}},16002:function(e,t,n){n.d(t,{ZP:function(){return k}});var l=n(93433),a=n(29439),r=n(63366),i=n(87462),o=n(94419),s=n(54164),u=n(66934),c=n(31402),d=n(51184),h=n(45682),f=n(82466),m=n(62876),x=n(6117),p=n(38717),v=n(72791),Z=n(21217);function b(e){return(0,Z.Z)("MuiMasonry",e)}(0,n(75878).Z)("MuiMasonry",["root"]);var g=n(80184),j=["children","className","component","columns","spacing","defaultColumns","defaultHeight","defaultSpacing"],w=function(e){return Number(e.replace("px",""))},y={flexBasis:"100%",width:0,margin:0,padding:0},C=(0,u.ZP)("div",{name:"MuiMasonry",slot:"Root",overridesResolver:function(e,t){return[t.root]}})((function(e){var t=e.ownerState,n=e.theme,l={width:"100%",display:"flex",flexFlow:"column wrap",alignContent:"flex-start",boxSizing:"border-box","& > *":{boxSizing:"border-box"}},a={};if(t.isSSR){for(var r={},o=w(n.spacing(t.defaultSpacing)),s=1;s<=t.defaultColumns;s+=1)r["&:nth-of-type(".concat(t.defaultColumns,"n+").concat(s%t.defaultColumns,")")]={order:s};return a.height=t.defaultHeight,a.margin=-o/2,a["& > *"]=(0,i.Z)({},l["& > *"],r,{margin:o/2,width:"calc(".concat((100/t.defaultColumns).toFixed(2),"% - ").concat(o,"px)")}),(0,i.Z)({},l,a)}var u=(0,d.P$)({values:t.spacing,breakpoints:n.breakpoints.values}),c=(0,h.hB)(n);l=(0,f.Z)(l,(0,d.k9)({theme:n},u,(function(e){var n;if("string"===typeof e&&!Number.isNaN(Number(e))||"number"===typeof e){var l=Number(e);n=(0,h.NA)(c,l)}else n=e;return(0,i.Z)({margin:"calc(0px - (".concat(n," / 2))"),"& > *":{margin:"calc(".concat(n," / 2)")}},t.maxColumnHeight&&{height:"number"===typeof n?Math.ceil(t.maxColumnHeight+w(n)):"calc(".concat(t.maxColumnHeight,"px + ").concat(n,")")})})));var m=(0,d.P$)({values:t.columns,breakpoints:n.breakpoints.values});return l=(0,f.Z)(l,(0,d.k9)({theme:n},m,(function(e){var t=Number(e),n="".concat((100/t).toFixed(2),"%"),l="string"===typeof u&&!Number.isNaN(Number(u))||"number"===typeof u?(0,h.NA)(c,Number(u)):"0px";return{"& > *":{width:"calc(".concat(n," - ").concat(l,")")}}}))),"object"===typeof u&&(l=(0,f.Z)(l,(0,d.k9)({theme:n},u,(function(e,t){if(t){var n=Number(e),l=Object.keys(m).pop(),a=(0,h.NA)(c,n),r="object"===typeof m?m[t]||m[l]:m,i="".concat((100/r).toFixed(2),"%");return{"& > *":{width:"calc(".concat(i," - ").concat(a,")")}}}return null})))),l})),k=v.forwardRef((function(e,t){var n=(0,c.Z)({props:e,name:"MuiMasonry"}),u=n.children,d=n.className,h=n.component,f=void 0===h?"div":h,Z=n.columns,k=void 0===Z?4:Z,S=n.spacing,N=void 0===S?1:S,M=n.defaultColumns,W=n.defaultHeight,P=n.defaultSpacing,A=(0,r.Z)(n,j),H=v.useRef(),I=v.useState(),R=(0,a.Z)(I,2),F=R[0],T=R[1],E=!F&&W&&void 0!==M&&void 0!==P,V=v.useState(E?M-1:0),L=(0,a.Z)(V,2),_=L[0],z=L[1],D=(0,i.Z)({},n,{spacing:N,columns:k,maxColumnHeight:F,defaultColumns:M,defaultHeight:W,defaultSpacing:P,isSSR:E}),O=function(e){var t=e.classes;return(0,o.Z)({root:["root"]},b,t)}(D),B=function(e){if(H.current&&e&&0!==e.length){var t=H.current,n=H.current.firstChild,a=t.clientWidth,r=n.clientWidth;if(0!==a&&0!==r){var i=window.getComputedStyle(n),o=w(i.marginLeft),u=w(i.marginRight),c=Math.round(a/(r+o+u)),d=new Array(c).fill(0),h=!1;t.childNodes.forEach((function(e){if(e.nodeType===Node.ELEMENT_NODE&&"line-break"!==e.dataset.class&&!h){var t=window.getComputedStyle(e),n=w(t.marginTop),a=w(t.marginBottom),r=w(t.height)?Math.ceil(w(t.height))+n+a:0;if(0!==r){for(var i=0;i<e.childNodes.length;i+=1){var o=e.childNodes[i];if("IMG"===o.tagName&&0===o.clientHeight){h=!0;break}}if(!h){var s=d.indexOf(Math.min.apply(Math,(0,l.Z)(d)));d[s]+=r;var u=s+1;e.style.order=u}}else h=!0}})),h||s.flushSync((function(){T(Math.max.apply(Math,(0,l.Z)(d))),z(c>0?c-1:0)}))}}};(0,m.Z)((function(){if("undefined"!==typeof ResizeObserver){var e,t=new ResizeObserver((function(){e=window.requestAnimationFrame(B)}));return H.current&&H.current.childNodes.forEach((function(e){t.observe(e)})),function(){e&&window.cancelAnimationFrame(e),t&&t.disconnect()}}}),[k,N,u]);var q=(0,x.Z)(t,H),U=new Array(_).fill("").map((function(e,t){return(0,g.jsx)("span",{"data-class":"line-break",style:(0,i.Z)({},y,{order:t+1})},t)}));return(0,g.jsxs)(C,(0,i.Z)({as:f,className:(0,p.Z)(O.root,d),ref:q,ownerState:D},A,{children:[u,U]}))}))},38717:function(e,t,n){function l(e){var t,n,a="";if("string"==typeof e||"number"==typeof e)a+=e;else if("object"==typeof e)if(Array.isArray(e))for(t=0;t<e.length;t++)e[t]&&(n=l(e[t]))&&(a&&(a+=" "),a+=n);else for(t in e)e[t]&&(a&&(a+=" "),a+=t);return a}t.Z=function(){for(var e,t,n=0,a="";n<arguments.length;)(e=arguments[n++])&&(t=l(e))&&(a&&(a+=" "),a+=t);return a}}}]);
//# sourceMappingURL=5817.f9b0f691.chunk.js.map