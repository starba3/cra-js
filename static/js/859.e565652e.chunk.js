"use strict";(self.webpackChunk_minimal_kit_cra_js=self.webpackChunk_minimal_kit_cra_js||[]).push([[859],{76348:function(e,t,n){var o=n(4942),r=n(63366),i=n(87462),a=n(72791),s=(n(57441),n(59278)),c=n(94419),l=n(66934),u=n(31402),d=n(72800),p=n(60220),f=n(5951),m=n(80184),v=["children","className","component","componentsProps","max","slotProps","spacing","total","variant"],Z={small:-16,medium:null},g=(0,l.ZP)("div",{name:"MuiAvatarGroup",slot:"Root",overridesResolver:function(e,t){return(0,i.Z)((0,o.Z)({},"& .".concat(f.Z.avatar),t.avatar),t.root)}})((function(e){var t,n=e.theme;return t={},(0,o.Z)(t,"& .".concat(d.Z.root),{border:"2px solid ".concat((n.vars||n).palette.background.default),boxSizing:"content-box",marginLeft:-8,"&:last-child":{marginLeft:0}}),(0,o.Z)(t,"display","flex"),(0,o.Z)(t,"flexDirection","row-reverse"),t})),b=(0,l.ZP)(p.Z,{name:"MuiAvatarGroup",slot:"Avatar",overridesResolver:function(e,t){return t.avatar}})((function(e){var t=e.theme;return{border:"2px solid ".concat((t.vars||t).palette.background.default),boxSizing:"content-box",marginLeft:-8,"&:last-child":{marginLeft:0}}})),h=a.forwardRef((function(e,t){var n,o=(0,u.Z)({props:e,name:"MuiAvatarGroup"}),l=o.children,d=o.className,p=o.component,h=void 0===p?"div":p,x=o.componentsProps,y=void 0===x?{}:x,w=o.max,S=void 0===w?5:w,C=o.slotProps,E=void 0===C?{}:C,P=o.spacing,T=void 0===P?"medium":P,D=o.total,L=o.variant,M=void 0===L?"circular":L,R=(0,r.Z)(o,v),k=S<2?2:S,N=(0,i.Z)({},o,{max:S,spacing:T,component:h,variant:M}),A=function(e){var t=e.classes;return(0,c.Z)({root:["root"],avatar:["avatar"]},f.m,t)}(N),j=a.Children.toArray(l).filter((function(e){return a.isValidElement(e)})),F=D||j.length;F===k&&(k+=1),k=Math.min(F+1,k);var z=Math.min(j.length,k-1),_=Math.max(F-k,F-z,0),B=T&&void 0!==Z[T]?Z[T]:-T,O=null!=(n=E.additionalAvatar)?n:y.additionalAvatar;return(0,m.jsxs)(g,(0,i.Z)({as:h,ownerState:N,className:(0,s.Z)(A.root,d),ref:t},R,{children:[_?(0,m.jsxs)(b,(0,i.Z)({ownerState:N,variant:M},O,{className:(0,s.Z)(A.avatar,null==O?void 0:O.className),style:(0,i.Z)({marginLeft:B},null==O?void 0:O.style),children:["+",_]})):null,j.slice(0,z).reverse().map((function(e,t){return a.cloneElement(e,{className:(0,s.Z)(e.props.className,A.avatar),style:(0,i.Z)({marginLeft:t===z-1?void 0:B},e.props.style),variant:e.props.variant||M})}))]}))}));t.Z=h},39504:function(e,t,n){n.d(t,{Z:function(){return Z}});var o=n(87462),r=n(63366),i=n(72791),a=n(59278),s=n(94419),c=n(66934),l=n(31402),u=n(75878),d=n(21217);function p(e){return(0,d.Z)("MuiCardContent",e)}(0,u.Z)("MuiCardContent",["root"]);var f=n(80184),m=["className","component"],v=(0,c.ZP)("div",{name:"MuiCardContent",slot:"Root",overridesResolver:function(e,t){return t.root}})((function(){return{padding:16,"&:last-child":{paddingBottom:24}}})),Z=i.forwardRef((function(e,t){var n=(0,l.Z)({props:e,name:"MuiCardContent"}),i=n.className,c=n.component,u=void 0===c?"div":c,d=(0,r.Z)(n,m),Z=(0,o.Z)({},n,{component:u}),g=function(e){var t=e.classes;return(0,s.Z)({root:["root"]},p,t)}(Z);return(0,f.jsx)(v,(0,o.Z)({as:u,className:(0,a.Z)(g.root,i),ownerState:Z,ref:t},d))}))},62633:function(e,t,n){n.d(t,{Z:function(){return E}});var o=n(29439),r=n(4942),i=n(63366),a=n(87462),s=n(72791),c=n(59278),l=n(94419),u=n(12065),d=n(66934),p=n(31402),f=n(48240),m=n(20068),v=n(14036),Z=n(75878),g=n(21217);function b(e){return(0,g.Z)("MuiSpeedDialAction",e)}var h=(0,Z.Z)("MuiSpeedDialAction",["fab","fabClosed","staticTooltip","staticTooltipClosed","staticTooltipLabel","tooltipPlacementLeft","tooltipPlacementRight"]),x=n(80184),y=["className","delay","FabProps","icon","id","open","TooltipClasses","tooltipOpen","tooltipPlacement","tooltipTitle"],w=(0,d.ZP)(f.Z,{name:"MuiSpeedDialAction",slot:"Fab",skipVariantsResolver:!1,overridesResolver:function(e,t){var n=e.ownerState;return[t.fab,!n.open&&t.fabClosed]}})((function(e){var t=e.theme,n=e.ownerState;return(0,a.Z)({margin:8,color:(t.vars||t).palette.text.secondary,backgroundColor:(t.vars||t).palette.background.paper,"&:hover":{backgroundColor:t.vars?t.vars.palette.SpeedDialAction.fabHoverBg:(0,u._4)(t.palette.background.paper,.15)},transition:"".concat(t.transitions.create("transform",{duration:t.transitions.duration.shorter}),", opacity 0.8s"),opacity:1},!n.open&&{opacity:0,transform:"scale(0)"})})),S=(0,d.ZP)("span",{name:"MuiSpeedDialAction",slot:"StaticTooltip",overridesResolver:function(e,t){var n=e.ownerState;return[t.staticTooltip,!n.open&&t.staticTooltipClosed,t["tooltipPlacement".concat((0,v.Z)(n.tooltipPlacement))]]}})((function(e){var t=e.theme,n=e.ownerState;return(0,r.Z)({position:"relative",display:"flex",alignItems:"center"},"& .".concat(h.staticTooltipLabel),(0,a.Z)({transition:t.transitions.create(["transform","opacity"],{duration:t.transitions.duration.shorter}),opacity:1},!n.open&&{opacity:0,transform:"scale(0.5)"},"left"===n.tooltipPlacement&&{transformOrigin:"100% 50%",right:"100%",marginRight:8},"right"===n.tooltipPlacement&&{transformOrigin:"0% 50%",left:"100%",marginLeft:8}))})),C=(0,d.ZP)("span",{name:"MuiSpeedDialAction",slot:"StaticTooltipLabel",overridesResolver:function(e,t){return t.staticTooltipLabel}})((function(e){var t=e.theme;return(0,a.Z)({position:"absolute"},t.typography.body1,{backgroundColor:(t.vars||t).palette.background.paper,borderRadius:(t.vars||t).shape.borderRadius,boxShadow:(t.vars||t).shadows[1],color:(t.vars||t).palette.text.secondary,padding:"4px 16px",wordBreak:"keep-all"})})),E=s.forwardRef((function(e,t){var n=(0,p.Z)({props:e,name:"MuiSpeedDialAction"}),r=n.className,u=n.delay,d=void 0===u?0:u,f=n.FabProps,Z=void 0===f?{}:f,g=n.icon,h=n.id,E=n.open,P=n.TooltipClasses,T=n.tooltipOpen,D=void 0!==T&&T,L=n.tooltipPlacement,M=void 0===L?"left":L,R=n.tooltipTitle,k=(0,i.Z)(n,y),N=(0,a.Z)({},n,{tooltipPlacement:M}),A=function(e){var t=e.open,n=e.tooltipPlacement,o=e.classes,r={fab:["fab",!t&&"fabClosed"],staticTooltip:["staticTooltip","tooltipPlacement".concat((0,v.Z)(n)),!t&&"staticTooltipClosed"],staticTooltipLabel:["staticTooltipLabel"]};return(0,l.Z)(r,b,o)}(N),j=s.useState(D),F=(0,o.Z)(j,2),z=F[0],_=F[1],B={transitionDelay:"".concat(d,"ms")},O=(0,x.jsx)(w,(0,a.Z)({size:"small",className:(0,c.Z)(A.fab,r),tabIndex:-1,role:"menuitem",ownerState:N},Z,{style:(0,a.Z)({},B,Z.style),children:g}));return D?(0,x.jsxs)(S,(0,a.Z)({id:h,ref:t,className:A.staticTooltip,ownerState:N},k,{children:[(0,x.jsx)(C,{style:B,id:"".concat(h,"-label"),className:A.staticTooltipLabel,ownerState:N,children:R}),s.cloneElement(O,{"aria-labelledby":"".concat(h,"-label")})]})):(!E&&z&&_(!1),(0,x.jsx)(m.Z,(0,a.Z)({id:h,ref:t,title:R,placement:M,onClose:function(){_(!1)},onOpen:function(){_(!0)},open:E&&z,classes:P},k,{children:O})))}))},41161:function(e,t,n){n.d(t,{Z:function(){return R}});var o=n(29439),r=n(4942),i=n(63366),a=n(87462),s=n(72791),c=(n(57441),n(59278)),l=n(94419),u=n(66934),d=n(31402),p=n(13967),f=n(48980),m=n(48240),v=n(14036),Z=n(13701),g=n(42071),b=n(98278),h=n(75878),x=n(21217);function y(e){return(0,x.Z)("MuiSpeedDial",e)}var w=(0,h.Z)("MuiSpeedDial",["root","fab","directionUp","directionDown","directionLeft","directionRight","actions","actionsClosed"]),S=n(80184),C=["ref"],E=["ariaLabel","FabProps","children","className","direction","hidden","icon","onBlur","onClose","onFocus","onKeyDown","onMouseEnter","onMouseLeave","onOpen","open","openIcon","TransitionComponent","transitionDuration","TransitionProps"],P=["ref"];function T(e){return"up"===e||"down"===e?"vertical":"right"===e||"left"===e?"horizontal":void 0}var D=(0,u.ZP)("div",{name:"MuiSpeedDial",slot:"Root",overridesResolver:function(e,t){var n=e.ownerState;return[t.root,t["direction".concat((0,v.Z)(n.direction))]]}})((function(e){var t=e.theme,n=e.ownerState;return(0,a.Z)({zIndex:(t.vars||t).zIndex.speedDial,display:"flex",alignItems:"center",pointerEvents:"none"},"up"===n.direction&&(0,r.Z)({flexDirection:"column-reverse"},"& .".concat(w.actions),{flexDirection:"column-reverse",marginBottom:-32,paddingBottom:48}),"down"===n.direction&&(0,r.Z)({flexDirection:"column"},"& .".concat(w.actions),{flexDirection:"column",marginTop:-32,paddingTop:48}),"left"===n.direction&&(0,r.Z)({flexDirection:"row-reverse"},"& .".concat(w.actions),{flexDirection:"row-reverse",marginRight:-32,paddingRight:48}),"right"===n.direction&&(0,r.Z)({flexDirection:"row"},"& .".concat(w.actions),{flexDirection:"row",marginLeft:-32,paddingLeft:48}))})),L=(0,u.ZP)(m.Z,{name:"MuiSpeedDial",slot:"Fab",overridesResolver:function(e,t){return t.fab}})((function(){return{pointerEvents:"auto"}})),M=(0,u.ZP)("div",{name:"MuiSpeedDial",slot:"Actions",overridesResolver:function(e,t){var n=e.ownerState;return[t.actions,!n.open&&t.actionsClosed]}})((function(e){var t=e.ownerState;return(0,a.Z)({display:"flex",pointerEvents:"auto"},!t.open&&{transition:"top 0s linear 0.2s",pointerEvents:"none"})})),R=s.forwardRef((function(e,t){var n=(0,d.Z)({props:e,name:"MuiSpeedDial"}),r=(0,p.Z)(),u={enter:r.transitions.duration.enteringScreen,exit:r.transitions.duration.leavingScreen},m=n.ariaLabel,h=n.FabProps,x=(void 0===h?{}:h).ref,w=n.children,R=n.className,k=n.direction,N=void 0===k?"up":k,A=n.hidden,j=void 0!==A&&A,F=n.icon,z=n.onBlur,_=n.onClose,B=n.onFocus,O=n.onKeyDown,I=n.onMouseEnter,K=n.onMouseLeave,V=n.onOpen,G=n.open,H=n.TransitionComponent,U=void 0===H?f.Z:H,q=n.transitionDuration,J=void 0===q?u:q,Q=n.TransitionProps,W=(0,i.Z)(n.FabProps,C),X=(0,i.Z)(n,E),Y=(0,b.Z)({controlled:G,default:!1,name:"SpeedDial",state:"open"}),$=(0,o.Z)(Y,2),ee=$[0],te=$[1],ne=(0,a.Z)({},n,{open:ee,direction:N}),oe=function(e){var t=e.classes,n=e.open,o=e.direction,r={root:["root","direction".concat((0,v.Z)(o))],fab:["fab"],actions:["actions",!n&&"actionsClosed"]};return(0,l.Z)(r,y,t)}(ne),re=s.useRef();s.useEffect((function(){return function(){clearTimeout(re.current)}}),[]);var ie=s.useRef(0),ae=s.useRef(),se=s.useRef([]);se.current=[se.current[0]];var ce=s.useCallback((function(e){se.current[0]=e}),[]),le=(0,g.Z)(x,ce),ue=function(e,t){return function(n){se.current[e+1]=n,t&&t(n)}};s.useEffect((function(){ee||(ie.current=0,ae.current=void 0)}),[ee]);var de=function(e){"mouseleave"===e.type&&K&&K(e),"blur"===e.type&&z&&z(e),clearTimeout(re.current),"blur"===e.type?re.current=setTimeout((function(){te(!1),_&&_(e,"blur")})):(te(!1),_&&_(e,"mouseLeave"))},pe=function(e){"mouseenter"===e.type&&I&&I(e),"focus"===e.type&&B&&B(e),clearTimeout(re.current),ee||(re.current=setTimeout((function(){if(te(!0),V){V(e,{focus:"focus",mouseenter:"mouseEnter"}[e.type])}})))},fe=m.replace(/^[^a-z]+|[^\w:.-]+/gi,""),me=s.Children.toArray(w).filter((function(e){return s.isValidElement(e)})),ve=me.map((function(e,t){var n=e.props,o=n.FabProps,r=(void 0===o?{}:o).ref,c=n.tooltipPlacement,l=(0,i.Z)(n.FabProps,P),u=c||("vertical"===T(N)?"left":"top");return s.cloneElement(e,{FabProps:(0,a.Z)({},l,{ref:ue(t,r)}),delay:30*(ee?t:me.length-t),open:ee,tooltipPlacement:u,id:"".concat(fe,"-action-").concat(t)})}));return(0,S.jsxs)(D,(0,a.Z)({className:(0,c.Z)(oe.root,R),ref:t,role:"presentation",onKeyDown:function(e){O&&O(e);var t,n,o,r=e.key.replace("Arrow","").toLowerCase(),i=ae.current,a=void 0===i?r:i;if("Escape"===e.key)return te(!1),se.current[0].focus(),void(_&&_(e,"escapeKeyDown"));if(T(r)===T(a)&&void 0!==T(r)){e.preventDefault();var s=r===a?1:-1,c=(t=ie.current+s,n=0,o=se.current.length-1,t<n?n:t>o?o:t);se.current[c].focus(),ie.current=c,ae.current=a}},onBlur:de,onFocus:pe,onMouseEnter:pe,onMouseLeave:de,ownerState:ne},X,{children:[(0,S.jsx)(U,(0,a.Z)({in:!j,timeout:J,unmountOnExit:!0},Q,{children:(0,S.jsx)(L,(0,a.Z)({color:"primary","aria-label":m,"aria-haspopup":"true","aria-expanded":ee,"aria-controls":"".concat(fe,"-actions")},W,{onClick:function(e){W.onClick&&W.onClick(e),clearTimeout(re.current),ee?(te(!1),_&&_(e,"toggle")):(te(!0),V&&V(e,"toggle"))},className:(0,c.Z)(oe.fab,W.className),ref:le,ownerState:ne,children:s.isValidElement(F)&&(0,Z.Z)(F,["SpeedDialIcon"])?s.cloneElement(F,{open:ee}):F}))})),(0,S.jsx)(M,{id:"".concat(fe,"-actions"),role:"menu","aria-orientation":T(N),className:(0,c.Z)(oe.actions,!ee&&oe.actionsClosed),ownerState:ne,children:ve})]}))}))},48980:function(e,t,n){var o=n(87462),r=n(63366),i=n(72791),a=n(18875),s=n(13967),c=n(4999),l=n(42071),u=n(80184),d=["addEndListener","appear","children","easing","in","onEnter","onEntered","onEntering","onExit","onExited","onExiting","style","timeout","TransitionComponent"],p={entering:{transform:"none"},entered:{transform:"none"}},f=i.forwardRef((function(e,t){var n=(0,s.Z)(),f={enter:n.transitions.duration.enteringScreen,exit:n.transitions.duration.leavingScreen},m=e.addEndListener,v=e.appear,Z=void 0===v||v,g=e.children,b=e.easing,h=e.in,x=e.onEnter,y=e.onEntered,w=e.onEntering,S=e.onExit,C=e.onExited,E=e.onExiting,P=e.style,T=e.timeout,D=void 0===T?f:T,L=e.TransitionComponent,M=void 0===L?a.ZP:L,R=(0,r.Z)(e,d),k=i.useRef(null),N=(0,l.Z)(k,g.ref,t),A=function(e){return function(t){if(e){var n=k.current;void 0===t?e(n):e(n,t)}}},j=A(w),F=A((function(e,t){(0,c.n)(e);var o=(0,c.C)({style:P,timeout:D,easing:b},{mode:"enter"});e.style.webkitTransition=n.transitions.create("transform",o),e.style.transition=n.transitions.create("transform",o),x&&x(e,t)})),z=A(y),_=A(E),B=A((function(e){var t=(0,c.C)({style:P,timeout:D,easing:b},{mode:"exit"});e.style.webkitTransition=n.transitions.create("transform",t),e.style.transition=n.transitions.create("transform",t),S&&S(e)})),O=A(C);return(0,u.jsx)(M,(0,o.Z)({appear:Z,in:h,nodeRef:k,onEnter:F,onEntered:z,onEntering:j,onExit:B,onExited:O,onExiting:_,addEndListener:function(e){m&&m(k.current,e)},timeout:D},R,{children:function(e,t){return i.cloneElement(g,(0,o.Z)({style:(0,o.Z)({transform:"scale(0)",visibility:"exited"!==e||h?void 0:"hidden"},p[e],P,g.props.style),ref:N},t))}}))}));t.Z=f},58721:function(e,t,n){n(72791);var o=n(74223),r=n(80184);t.Z=(0,o.Z)((0,r.jsx)("path",{d:"M18.41 16.59L13.82 12l4.59-4.59L17 6l-6 6 6 6zM6 6h2v12H6z"}),"FirstPage")},95722:function(e,t,n){n(72791);var o=n(74223),r=n(80184);t.Z=(0,o.Z)((0,r.jsx)("path",{d:"M5.59 7.41L10.18 12l-4.59 4.59L7 18l6-6-6-6zM16 6h2v12h-2z"}),"LastPage")}}]);
//# sourceMappingURL=859.e565652e.chunk.js.map