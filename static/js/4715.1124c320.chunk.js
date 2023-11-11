"use strict";(self.webpackChunk_minimal_kit_cra_js=self.webpackChunk_minimal_kit_cra_js||[]).push([[4715],{50933:function(e,r,n){n.d(r,{Z:function(){return h}});var t=n(1413),o=n(45987),a=n(64554),i=n(50533),l=n(36314),s=n(4567),c=n(93517),u=n(83854),d=n(80184);function p(e){var r=e.link,n=e.activeLast,o=e.disabled,l=r.name,s=r.href,c=r.icon,p=(0,t.Z)({typography:"body2",alignItems:"center",color:"text.primary",display:"inline-flex"},o&&!n&&{cursor:"default",pointerEvents:"none",color:"text.disabled"}),m=(0,d.jsxs)(d.Fragment,{children:[c&&(0,d.jsx)(a.Z,{component:"span",sx:{mr:1,display:"inherit","& svg":{width:20,height:20}},children:c}),l]});return s?(0,d.jsx)(i.Z,{component:u.r,href:s,sx:p,children:m}):(0,d.jsxs)(a.Z,{sx:p,children:[" ",m," "]})}var m=["links","action","heading","moreLink","activeLast","sx"];function h(e){var r=e.links,n=e.action,u=e.heading,h=e.moreLink,f=e.activeLast,g=e.sx,Z=(0,o.Z)(e,m),v=r[r.length-1].name;return(0,d.jsxs)(a.Z,{sx:(0,t.Z)({},g),children:[(0,d.jsxs)(l.Z,{direction:"row",alignItems:"center",children:[(0,d.jsxs)(a.Z,{sx:{flexGrow:1},children:[u&&(0,d.jsx)(s.Z,{variant:"h4",gutterBottom:!0,children:u}),!!r.length&&(0,d.jsx)(c.Z,(0,t.Z)((0,t.Z)({separator:(0,d.jsx)(x,{})},Z),{},{children:r.map((function(e){return(0,d.jsx)(p,{link:e,activeLast:f,disabled:e.name===v},e.name||"")}))}))]}),n&&(0,d.jsxs)(a.Z,{sx:{flexShrink:0},children:[" ",n," "]})]}),!!h&&(0,d.jsx)(a.Z,{sx:{mt:2},children:h.map((function(e){return(0,d.jsx)(i.Z,{href:e,variant:"body2",target:"_blank",rel:"noopener",sx:{display:"table"},children:e},e)}))})]})}function x(){return(0,d.jsx)(a.Z,{component:"span",sx:{width:4,height:4,borderRadius:"50%",bgcolor:"text.disabled"}})}},17914:function(e,r,n){n.d(r,{m:function(){return l}});var t=n(74165),o=n(15861),a=n(29439),i=n(72791);function l(){var e=(0,i.useState)(null),r=(0,a.Z)(e,2),n=r[0],l=r[1],s=function(){var e=(0,o.Z)((0,t.Z)().mark((function e(r){var n;return(0,t.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(null!==(n=navigator)&&void 0!==n&&n.clipboard){e.next=3;break}return console.warn("Clipboard not supported"),e.abrupt("return",!1);case 3:return e.prev=3,e.next=6,navigator.clipboard.writeText(r);case 6:return l(r),e.abrupt("return",!0);case 10:return e.prev=10,e.t0=e.catch(3),console.warn("Copy failed",e.t0),l(null),e.abrupt("return",!1);case 15:case"end":return e.stop()}}),e,null,[[3,10]])})));return function(r){return e.apply(this,arguments)}}();return{copiedText:n,copy:s}}},87369:function(e,r,n){n.d(r,{D:function(){return o}});var t=n(72791);function o(e){var r=e.click,n=e.doubleClick,o=e.timeout,a=void 0===o?250:o,i=(0,t.useRef)();return(0,t.useCallback)((function(e){i&&(clearTimeout(i.current),i.current=null),r&&1===e.detail&&(i.current=setTimeout((function(){r(e)}),a)),e.detail%2===0&&n(e)}),[r,n,a])}},14715:function(e,r,n){n.r(r),n.d(r,{default:function(){return y}});var t=n(6907),o=n(29439),a=n(72791),i=n(64554),l=n(57621),s=n(36314),c=n(20068),u=n(89164),d=n(48550),p=n(13400),m=n(4567),h=n(63466),x=n(17914),f=n(38072),g=n(87369),Z=n(27216),v=n(32869),b=n(50933),j=n(80184);function C(){var e=(0,v.Ds)().enqueueSnackbar,r=(0,x.m)().copy,n=(0,a.useState)("https://www.npmjs.com/package/"),t=(0,o.Z)(n,2),C=t[0],y=t[1],k="Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia\n  Curae; Sed aliquam, nisi quis porttitor congue, elit erat euismod orci, ac placerat\n  dolor lectus quis orci. Cras non dolor. Praesent egestas neque eu enim. Ut varius\n  tincidunt libero. Fusce fermentum odio nec arcu. Etiam rhoncus. Nulla sit amet est.\n  Donec posuere vulputate arcu. Vestibulum ullamcorper mauris at ligula. Praesent ut\n  ligula non mi varius sagittis. Pellentesque posuere. Praesent adipiscing. Sed\n  libero. Duis leo. Nulla porta dolor.",w=(0,a.useCallback)((function(n){n&&(e("Copied!"),r(n))}),[r,e]),S=(0,g.D)({doubleClick:function(){return w(k)}}),P=(0,a.useCallback)((function(e){y(e.target.value)}),[]);return(0,j.jsxs)(j.Fragment,{children:[(0,j.jsx)(i.Z,{sx:{py:5,bgcolor:function(e){return"light"===e.palette.mode?"grey.200":"grey.800"}},children:(0,j.jsx)(u.Z,{children:(0,j.jsx)(b.Z,{heading:"Copy To Clipboard",links:[{name:"Components",href:f.H.components},{name:"Copy To Clipboard"}]})})}),(0,j.jsx)(u.Z,{sx:{my:10},children:(0,j.jsx)(l.Z,{sx:{p:5},children:(0,j.jsxs)(i.Z,{display:"grid",gridTemplateColumns:{xs:"repeat(1, 1fr)",md:"repeat(2, 1fr)"},gap:5,children:[(0,j.jsxs)(s.Z,{spacing:2,children:[(0,j.jsx)(m.Z,{variant:"overline",sx:{color:"text.secondary"},children:"on Change"}),(0,j.jsx)(d.Z,{fullWidth:!0,value:C,onChange:P,InputProps:{endAdornment:(0,j.jsx)(h.Z,{position:"end",children:(0,j.jsx)(c.Z,{title:"Copy",children:(0,j.jsx)(p.Z,{onClick:function(){return w(C)},children:(0,j.jsx)(Z.Z,{icon:"eva:copy-fill",width:24})})})})}})]}),(0,j.jsxs)(s.Z,{spacing:2,children:[(0,j.jsx)(m.Z,{variant:"overline",sx:{color:"text.secondary"},children:"on Double Click"}),(0,j.jsx)(m.Z,{onClick:S,children:k})]})]})})})]})}function y(){return(0,j.jsxs)(j.Fragment,{children:[(0,j.jsx)(t.ql,{children:(0,j.jsx)("title",{children:" Extra: to Clipboard"})}),(0,j.jsx)(C,{})]})}},93517:function(e,r,n){n.d(r,{Z:function(){return q}});var t=n(93433),o=n(29439),a=n(4942),i=n(87462),l=n(63366),s=n(72791),c=(n(57441),n(59278)),u=n(94419),d=n(26912),p=n(66934),m=n(31402),h=n(4567),x=n(12065),f=n(74223),g=n(80184),Z=(0,f.Z)((0,g.jsx)("path",{d:"M6 10c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2zm12 0c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2zm-6 0c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2z"}),"MoreHoriz"),v=n(95080),b=["slots","slotProps"],j=(0,p.ZP)(v.Z)((function(e){var r=e.theme;return(0,i.Z)({display:"flex",marginLeft:"calc(".concat(r.spacing(1)," * 0.5)"),marginRight:"calc(".concat(r.spacing(1)," * 0.5)")},"light"===r.palette.mode?{backgroundColor:r.palette.grey[100],color:r.palette.grey[700]}:{backgroundColor:r.palette.grey[700],color:r.palette.grey[100]},{borderRadius:2,"&:hover, &:focus":(0,i.Z)({},"light"===r.palette.mode?{backgroundColor:r.palette.grey[200]}:{backgroundColor:r.palette.grey[600]}),"&:active":(0,i.Z)({boxShadow:r.shadows[0]},"light"===r.palette.mode?{backgroundColor:(0,x._4)(r.palette.grey[200],.12)}:{backgroundColor:(0,x._4)(r.palette.grey[600],.12)})})})),C=(0,p.ZP)(Z)({width:24,height:16});var y=function(e){var r=e.slots,n=void 0===r?{}:r,t=e.slotProps,o=void 0===t?{}:t,a=(0,l.Z)(e,b),s=e;return(0,g.jsx)("li",{children:(0,g.jsx)(j,(0,i.Z)({focusRipple:!0},a,{ownerState:s,children:(0,g.jsx)(C,(0,i.Z)({as:n.CollapsedIcon,ownerState:s},o.collapsedIcon))}))})},k=n(75878),w=n(21217);function S(e){return(0,w.Z)("MuiBreadcrumbs",e)}var P=(0,k.Z)("MuiBreadcrumbs",["root","ol","li","separator"]),I=["children","className","component","slots","slotProps","expandText","itemsAfterCollapse","itemsBeforeCollapse","maxItems","separator"],R=(0,p.ZP)(h.Z,{name:"MuiBreadcrumbs",slot:"Root",overridesResolver:function(e,r){return[(0,a.Z)({},"& .".concat(P.li),r.li),r.root]}})({}),T=(0,p.ZP)("ol",{name:"MuiBreadcrumbs",slot:"Ol",overridesResolver:function(e,r){return r.ol}})({display:"flex",flexWrap:"wrap",alignItems:"center",padding:0,margin:0,listStyle:"none"}),_=(0,p.ZP)("li",{name:"MuiBreadcrumbs",slot:"Separator",overridesResolver:function(e,r){return r.separator}})({display:"flex",userSelect:"none",marginLeft:8,marginRight:8});function B(e,r,n,t){return e.reduce((function(o,a,i){return i<e.length-1?o=o.concat(a,(0,g.jsx)(_,{"aria-hidden":!0,className:r,ownerState:t,children:n},"separator-".concat(i))):o.push(a),o}),[])}var q=s.forwardRef((function(e,r){var n=(0,m.Z)({props:e,name:"MuiBreadcrumbs"}),a=n.children,p=n.className,h=n.component,x=void 0===h?"nav":h,f=n.slots,Z=void 0===f?{}:f,v=n.slotProps,b=void 0===v?{}:v,j=n.expandText,C=void 0===j?"Show path":j,k=n.itemsAfterCollapse,w=void 0===k?1:k,P=n.itemsBeforeCollapse,_=void 0===P?1:P,q=n.maxItems,L=void 0===q?8:q,M=n.separator,N=void 0===M?"/":M,D=(0,l.Z)(n,I),A=s.useState(!1),z=(0,o.Z)(A,2),E=z[0],F=z[1],V=(0,i.Z)({},n,{component:x,expanded:E,expandText:C,itemsAfterCollapse:w,itemsBeforeCollapse:_,maxItems:L,separator:N}),H=function(e){var r=e.classes;return(0,u.Z)({root:["root"],li:["li"],ol:["ol"],separator:["separator"]},S,r)}(V),W=(0,d.y)({elementType:Z.CollapsedIcon,externalSlotProps:b.collapsedIcon,ownerState:V}),G=s.useRef(null),O=s.Children.toArray(a).filter((function(e){return s.isValidElement(e)})).map((function(e,r){return(0,g.jsx)("li",{className:H.li,children:e},"child-".concat(r))}));return(0,g.jsx)(R,(0,i.Z)({ref:r,component:x,color:"text.secondary",className:(0,c.Z)(H.root,p),ownerState:V},D,{children:(0,g.jsx)(T,{className:H.ol,ref:G,ownerState:V,children:B(E||L&&O.length<=L?O:function(e){return _+w>=e.length?e:[].concat((0,t.Z)(e.slice(0,_)),[(0,g.jsx)(y,{"aria-label":C,slots:{CollapsedIcon:Z.CollapsedIcon},slotProps:{collapsedIcon:W},onClick:function(){F(!0);var e=G.current.querySelector("a[href],button,[tabindex]");e&&e.focus()}},"ellipsis")],(0,t.Z)(e.slice(e.length-w,e.length)))}(O),H.separator,N,V)})}))}))}}]);
//# sourceMappingURL=4715.1124c320.chunk.js.map