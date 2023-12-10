"use strict";(self.webpackChunk_minimal_kit_cra_js=self.webpackChunk_minimal_kit_cra_js||[]).push([[6356],{50933:function(e,t,n){n.d(t,{Z:function(){return f}});var r=n(1413),a=n(45987),i=n(64554),o=n(50533),l=n(36314),c=n(4567),s=n(93517),u=n(83854),d=n(80184);function m(e){var t=e.link,n=e.activeLast,a=e.disabled,l=t.name,c=t.href,s=t.icon,m=(0,r.Z)({typography:"body2",alignItems:"center",color:"text.primary",display:"inline-flex"},a&&!n&&{cursor:"default",pointerEvents:"none",color:"text.disabled"}),h=(0,d.jsxs)(d.Fragment,{children:[s&&(0,d.jsx)(i.Z,{component:"span",sx:{mr:1,display:"inherit","& svg":{width:20,height:20}},children:s}),l]});return c?(0,d.jsx)(o.Z,{component:u.r,href:c,sx:m,children:h}):(0,d.jsxs)(i.Z,{sx:m,children:[" ",h," "]})}var h=["links","action","heading","moreLink","activeLast","sx"];function f(e){var t=e.links,n=e.action,u=e.heading,f=e.moreLink,x=e.activeLast,v=e.sx,g=(0,a.Z)(e,h),Z=t[t.length-1].name;return(0,d.jsxs)(i.Z,{sx:(0,r.Z)({},v),children:[(0,d.jsxs)(l.Z,{direction:"row",alignItems:"center",children:[(0,d.jsxs)(i.Z,{sx:{flexGrow:1},children:[u&&(0,d.jsx)(c.Z,{variant:"h4",gutterBottom:!0,children:u}),!!t.length&&(0,d.jsx)(s.Z,(0,r.Z)((0,r.Z)({separator:(0,d.jsx)(p,{})},g),{},{children:t.map((function(e){return(0,d.jsx)(m,{link:e,activeLast:x,disabled:e.name===Z},e.name||"")}))}))]}),n&&(0,d.jsxs)(i.Z,{sx:{flexShrink:0},children:[" ",n," "]})]}),!!f&&(0,d.jsx)(i.Z,{sx:{mt:2},children:f.map((function(e){return(0,d.jsx)(o.Z,{href:e,variant:"body2",target:"_blank",rel:"noopener",sx:{display:"table"},children:e},e)}))})]})}function p(){return(0,d.jsx)(i.Z,{component:"span",sx:{width:4,height:4,borderRadius:"50%",bgcolor:"text.disabled"}})}},16356:function(e,t,n){n.r(t),n.d(t,{default:function(){return M}});var r=n(6907),a=n(4942),i=n(16002),o=n(13967),l=n(64554),c=n(36314),s=n(27029),u=n(60220),d=n(20068),m=n(89164),h=n(76348),f=n(5951),p=n(38072),x=n(11908),v=n(27216),g=n(50933),Z=n(31562),j=n(80184),b=["default","primary","secondary","info","success","warning","error"],y=[24,32,40,56],N=["circular","rounded","square"],w=["online","alway","busy","offline"];function k(){var e=(0,o.Z)();return(0,j.jsxs)(j.Fragment,{children:[(0,j.jsx)(l.Z,{sx:{py:5,bgcolor:"light"===e.palette.mode?"grey.200":"grey.800"},children:(0,j.jsx)(m.Z,{children:(0,j.jsx)(g.Z,{heading:"Avatar",links:[{name:"Components",href:p.H.components},{name:"Avatar"}],moreLink:["https://mui.com/components/avatars"]})})}),(0,j.jsx)(m.Z,{sx:{my:10},children:(0,j.jsxs)(i.ZP,{columns:{xs:1,md:2},spacing:3,children:[(0,j.jsx)(Z.Z,{title:"Image",children:[1,2,3,4,5].map((function(e,t){return(0,j.jsx)(u.Z,{alt:x.QJ.fullName(t+1),src:x.QJ.image.avatar(t+1)},t)}))}),(0,j.jsx)(Z.Z,{title:"Letter",children:b.map((function(e,t){return(0,j.jsx)(d.Z,{title:e,children:(0,j.jsx)(u.Z,{alt:x.QJ.fullName(t+3),children:x.QJ.fullName(t+3).charAt(0).toUpperCase()})},e)}))}),(0,j.jsx)(Z.Z,{title:"Icon",children:b.map((function(e){return(0,j.jsx)(u.Z,{color:e,children:(0,j.jsx)(v.Z,{icon:"eva:folder-add-outline",width:24})},e)}))}),(0,j.jsx)(Z.Z,{title:"Variant",children:N.map((function(e){return(0,j.jsx)(u.Z,{variant:e,sx:{bgcolor:"primary.main",color:"primary.contrastText"},children:(0,j.jsx)(v.Z,{icon:"eva:folder-add-outline",width:24})},e)}))}),(0,j.jsx)(Z.Z,{title:"Grouped",children:(0,j.jsxs)(c.Z,{spacing:2,alignItems:"center",children:[y.map((function(e){return(0,j.jsx)(d.Z,{title:e,children:(0,j.jsx)(h.Z,{sx:(0,a.Z)({},"& .".concat(f.Z.avatar),{width:e,height:e}),children:b.map((function(e,t){return(0,j.jsx)(u.Z,{alt:x.QJ.fullAddress(t+1),src:x.QJ.image.avatar(t+1)},e)}))},e)},e)})),(0,j.jsx)(d.Z,{title:"compact",children:(0,j.jsx)(s.Z,{variant:"online",anchorOrigin:{vertical:"bottom",horizontal:"right"},children:(0,j.jsx)(h.Z,{variant:"compact",sx:{width:48,height:48},children:b.slice(0,2).map((function(e,t){return(0,j.jsx)(u.Z,{alt:x.QJ.fullName(t+1),src:x.QJ.image.avatar(t+1)},e)}))})})})]})}),(0,j.jsxs)(Z.Z,{title:"With Badge",children:[(0,j.jsx)(s.Z,{overlap:"circular",anchorOrigin:{vertical:"bottom",horizontal:"right"},badgeContent:(0,j.jsx)(u.Z,{alt:x.QJ.fullName(7),src:x.QJ.image.avatar(7),sx:{p:0,width:24,height:24,border:"solid 2px ".concat(e.palette.background.paper)}}),children:(0,j.jsx)(u.Z,{alt:x.QJ.fullName(8),src:x.QJ.image.avatar(8)})}),w.map((function(e,t){return(0,j.jsx)(s.Z,{variant:e,anchorOrigin:{vertical:"bottom",horizontal:"right"},children:(0,j.jsx)(u.Z,{alt:x.QJ.fullName(t+1),src:x.QJ.image.avatar(t+1)})},e)}))]}),(0,j.jsx)(Z.Z,{title:"Sizes",children:[24,32,48,56,64,80,128].map((function(e,t){return(0,j.jsx)(u.Z,{alt:x.QJ.fullName(t+4),src:x.QJ.image.avatar(t+4),sx:{width:e,height:e}},e)}))})]})})]})}function M(){return(0,j.jsxs)(j.Fragment,{children:[(0,j.jsx)(r.ql,{children:(0,j.jsx)("title",{children:" MUI: Avatar"})}),(0,j.jsx)(k,{})]})}},31562:function(e,t,n){n.d(t,{Z:function(){return d}});var r=n(1413),a=n(45987),i=n(12065),o=n(27938),l=n(9585),c=n(36314),s=n(80184),u=["title","sx","children"];function d(e){var t=e.title,n=e.sx,d=e.children,m=(0,a.Z)(e,u);return(0,s.jsxs)(o.Z,{variant:"outlined",sx:{borderRadius:1.5,borderStyle:"dashed",bgcolor:function(e){return(0,i.Fq)(e.palette.grey[500],.04)}},children:[t&&(0,s.jsx)(l.Z,{title:t}),(0,s.jsx)(c.Z,(0,r.Z)((0,r.Z)({spacing:3,direction:"row",alignItems:"center",justifyContent:"center",flexWrap:"wrap",sx:(0,r.Z)({p:5,minHeight:180},n)},m),{},{children:d}))]})}},16002:function(e,t,n){n.d(t,{ZP:function(){return k}});var r=n(93433),a=n(29439),i=n(63366),o=n(87462),l=n(94419),c=n(54164),s=n(66934),u=n(31402),d=n(51184),m=n(45682),h=n(82466),f=n(62876),p=n(6117),x=n(38717),v=n(72791),g=n(21217);function Z(e){return(0,g.Z)("MuiMasonry",e)}(0,n(75878).Z)("MuiMasonry",["root"]);var j=n(80184),b=["children","className","component","columns","spacing","defaultColumns","defaultHeight","defaultSpacing"],y=function(e){return Number(e.replace("px",""))},N={flexBasis:"100%",width:0,margin:0,padding:0},w=(0,s.ZP)("div",{name:"MuiMasonry",slot:"Root",overridesResolver:function(e,t){return[t.root]}})((function(e){var t=e.ownerState,n=e.theme,r={width:"100%",display:"flex",flexFlow:"column wrap",alignContent:"flex-start",boxSizing:"border-box","& > *":{boxSizing:"border-box"}},a={};if(t.isSSR){for(var i={},l=y(n.spacing(t.defaultSpacing)),c=1;c<=t.defaultColumns;c+=1)i["&:nth-of-type(".concat(t.defaultColumns,"n+").concat(c%t.defaultColumns,")")]={order:c};return a.height=t.defaultHeight,a.margin=-l/2,a["& > *"]=(0,o.Z)({},r["& > *"],i,{margin:l/2,width:"calc(".concat((100/t.defaultColumns).toFixed(2),"% - ").concat(l,"px)")}),(0,o.Z)({},r,a)}var s=(0,d.P$)({values:t.spacing,breakpoints:n.breakpoints.values}),u=(0,m.hB)(n);r=(0,h.Z)(r,(0,d.k9)({theme:n},s,(function(e){var n;if("string"===typeof e&&!Number.isNaN(Number(e))||"number"===typeof e){var r=Number(e);n=(0,m.NA)(u,r)}else n=e;return(0,o.Z)({margin:"calc(0px - (".concat(n," / 2))"),"& > *":{margin:"calc(".concat(n," / 2)")}},t.maxColumnHeight&&{height:"number"===typeof n?Math.ceil(t.maxColumnHeight+y(n)):"calc(".concat(t.maxColumnHeight,"px + ").concat(n,")")})})));var f=(0,d.P$)({values:t.columns,breakpoints:n.breakpoints.values});return r=(0,h.Z)(r,(0,d.k9)({theme:n},f,(function(e){var t=Number(e),n="".concat((100/t).toFixed(2),"%"),r="string"===typeof s&&!Number.isNaN(Number(s))||"number"===typeof s?(0,m.NA)(u,Number(s)):"0px";return{"& > *":{width:"calc(".concat(n," - ").concat(r,")")}}}))),"object"===typeof s&&(r=(0,h.Z)(r,(0,d.k9)({theme:n},s,(function(e,t){if(t){var n=Number(e),r=Object.keys(f).pop(),a=(0,m.NA)(u,n),i="object"===typeof f?f[t]||f[r]:f,o="".concat((100/i).toFixed(2),"%");return{"& > *":{width:"calc(".concat(o," - ").concat(a,")")}}}return null})))),r})),k=v.forwardRef((function(e,t){var n=(0,u.Z)({props:e,name:"MuiMasonry"}),s=n.children,d=n.className,m=n.component,h=void 0===m?"div":m,g=n.columns,k=void 0===g?4:g,M=n.spacing,S=void 0===M?1:M,C=n.defaultColumns,A=n.defaultHeight,J=n.defaultSpacing,L=(0,i.Z)(n,b),Q=v.useRef(),R=v.useState(),H=(0,a.Z)(R,2),P=H[0],z=H[1],F=!P&&A&&void 0!==C&&void 0!==J,_=v.useState(F?C-1:0),E=(0,a.Z)(_,2),I=E[0],O=E[1],G=(0,o.Z)({},n,{spacing:S,columns:k,maxColumnHeight:P,defaultColumns:C,defaultHeight:A,defaultSpacing:J,isSSR:F}),B=function(e){var t=e.classes;return(0,l.Z)({root:["root"]},Z,t)}(G),q=function(e){if(Q.current&&e&&0!==e.length){var t=Q.current,n=Q.current.firstChild,a=t.clientWidth,i=n.clientWidth;if(0!==a&&0!==i){var o=window.getComputedStyle(n),l=y(o.marginLeft),s=y(o.marginRight),u=Math.round(a/(i+l+s)),d=new Array(u).fill(0),m=!1;t.childNodes.forEach((function(e){if(e.nodeType===Node.ELEMENT_NODE&&"line-break"!==e.dataset.class&&!m){var t=window.getComputedStyle(e),n=y(t.marginTop),a=y(t.marginBottom),i=y(t.height)?Math.ceil(y(t.height))+n+a:0;if(0!==i){for(var o=0;o<e.childNodes.length;o+=1){var l=e.childNodes[o];if("IMG"===l.tagName&&0===l.clientHeight){m=!0;break}}if(!m){var c=d.indexOf(Math.min.apply(Math,(0,r.Z)(d)));d[c]+=i;var s=c+1;e.style.order=s}}else m=!0}})),m||c.flushSync((function(){z(Math.max.apply(Math,(0,r.Z)(d))),O(u>0?u-1:0)}))}}};(0,f.Z)((function(){if("undefined"!==typeof ResizeObserver){var e,t=new ResizeObserver((function(){e=window.requestAnimationFrame(q)}));return Q.current&&Q.current.childNodes.forEach((function(e){t.observe(e)})),function(){e&&window.cancelAnimationFrame(e),t&&t.disconnect()}}}),[k,S,s]);var T=(0,p.Z)(t,Q),W=new Array(I).fill("").map((function(e,t){return(0,j.jsx)("span",{"data-class":"line-break",style:(0,o.Z)({},N,{order:t+1})},t)}));return(0,j.jsxs)(w,(0,o.Z)({as:h,className:(0,x.Z)(B.root,d),ref:T,ownerState:G},L,{children:[s,W]}))}))},76348:function(e,t,n){var r=n(4942),a=n(63366),i=n(87462),o=n(72791),l=(n(57441),n(59278)),c=n(94419),s=n(66934),u=n(31402),d=n(72800),m=n(60220),h=n(5951),f=n(80184),p=["children","className","component","componentsProps","max","slotProps","spacing","total","variant"],x={small:-16,medium:null},v=(0,s.ZP)("div",{name:"MuiAvatarGroup",slot:"Root",overridesResolver:function(e,t){return(0,i.Z)((0,r.Z)({},"& .".concat(h.Z.avatar),t.avatar),t.root)}})((function(e){var t,n=e.theme;return t={},(0,r.Z)(t,"& .".concat(d.Z.root),{border:"2px solid ".concat((n.vars||n).palette.background.default),boxSizing:"content-box",marginLeft:-8,"&:last-child":{marginLeft:0}}),(0,r.Z)(t,"display","flex"),(0,r.Z)(t,"flexDirection","row-reverse"),t})),g=(0,s.ZP)(m.Z,{name:"MuiAvatarGroup",slot:"Avatar",overridesResolver:function(e,t){return t.avatar}})((function(e){var t=e.theme;return{border:"2px solid ".concat((t.vars||t).palette.background.default),boxSizing:"content-box",marginLeft:-8,"&:last-child":{marginLeft:0}}})),Z=o.forwardRef((function(e,t){var n,r=(0,u.Z)({props:e,name:"MuiAvatarGroup"}),s=r.children,d=r.className,m=r.component,Z=void 0===m?"div":m,j=r.componentsProps,b=void 0===j?{}:j,y=r.max,N=void 0===y?5:y,w=r.slotProps,k=void 0===w?{}:w,M=r.spacing,S=void 0===M?"medium":M,C=r.total,A=r.variant,J=void 0===A?"circular":A,L=(0,a.Z)(r,p),Q=N<2?2:N,R=(0,i.Z)({},r,{max:N,spacing:S,component:Z,variant:J}),H=function(e){var t=e.classes;return(0,c.Z)({root:["root"],avatar:["avatar"]},h.m,t)}(R),P=o.Children.toArray(s).filter((function(e){return o.isValidElement(e)})),z=C||P.length;z===Q&&(Q+=1),Q=Math.min(z+1,Q);var F=Math.min(P.length,Q-1),_=Math.max(z-Q,z-F,0),E=S&&void 0!==x[S]?x[S]:-S,I=null!=(n=k.additionalAvatar)?n:b.additionalAvatar;return(0,f.jsxs)(v,(0,i.Z)({as:Z,ownerState:R,className:(0,l.Z)(H.root,d),ref:t},L,{children:[_?(0,f.jsxs)(g,(0,i.Z)({ownerState:R,variant:J},I,{className:(0,l.Z)(H.avatar,null==I?void 0:I.className),style:(0,i.Z)({marginLeft:E},null==I?void 0:I.style),children:["+",_]})):null,P.slice(0,F).reverse().map((function(e,t){return o.cloneElement(e,{className:(0,l.Z)(e.props.className,H.avatar),style:(0,i.Z)({marginLeft:t===F-1?void 0:E},e.props.style),variant:e.props.variant||J})}))]}))}));t.Z=Z},38717:function(e,t,n){function r(e){var t,n,a="";if("string"==typeof e||"number"==typeof e)a+=e;else if("object"==typeof e)if(Array.isArray(e))for(t=0;t<e.length;t++)e[t]&&(n=r(e[t]))&&(a&&(a+=" "),a+=n);else for(t in e)e[t]&&(a&&(a+=" "),a+=t);return a}t.Z=function(){for(var e,t,n=0,a="";n<arguments.length;)(e=arguments[n++])&&(t=r(e))&&(a&&(a+=" "),a+=t);return a}}}]);
//# sourceMappingURL=6356.f19261fa.chunk.js.map