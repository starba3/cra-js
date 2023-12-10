"use strict";(self.webpackChunk_minimal_kit_cra_js=self.webpackChunk_minimal_kit_cra_js||[]).push([[1976],{25028:function(e,t,r){r.d(t,{Z:function(){return g}});var n=r(87462),o=r(63366),i=r(72791),s=(r(57441),r(98301)),a=r(43236),l=r(57137).Z,u=r(42071),c=r(40162),p=r(80184),d=["actions","autoFocus","autoFocusItem","children","className","disabledItemsFocusable","disableListWrap","onKeyDown","variant"];function f(e,t,r){return e===t?e.firstChild:t&&t.nextElementSibling?t.nextElementSibling:r?null:e.firstChild}function v(e,t,r){return e===t?r?e.firstChild:e.lastChild:t&&t.previousElementSibling?t.previousElementSibling:r?null:e.lastChild}function m(e,t){if(void 0===t)return!0;var r=e.innerText;return void 0===r&&(r=e.textContent),0!==(r=r.trim().toLowerCase()).length&&(t.repeating?r[0]===t.keys[0]:0===r.indexOf(t.keys.join("")))}function h(e,t,r,n,o,i){for(var s=!1,a=o(e,t,!!t&&r);a;){if(a===e.firstChild){if(s)return!1;s=!0}var l=!n&&(a.disabled||"true"===a.getAttribute("aria-disabled"));if(a.hasAttribute("tabindex")&&m(a,i)&&!l)return a.focus(),!0;a=o(e,a,r)}return!1}var g=i.forwardRef((function(e,t){var r=e.actions,g=e.autoFocus,b=void 0!==g&&g,y=e.autoFocusItem,P=void 0!==y&&y,Z=e.children,M=e.className,w=e.disabledItemsFocusable,C=void 0!==w&&w,F=e.disableListWrap,k=void 0!==F&&F,x=e.onKeyDown,S=e.variant,D=void 0===S?"selectedMenu":S,E=(0,o.Z)(e,d),I=i.useRef(null),T=i.useRef({keys:[],repeating:!0,previousKeyMatched:!0,lastTime:null});(0,c.Z)((function(){b&&I.current.focus()}),[b]),i.useImperativeHandle(r,(function(){return{adjustStyleForScrollbar:function(e,t){var r=!I.current.style.width;if(e.clientHeight<I.current.clientHeight&&r){var n="".concat(l((0,s.Z)(e)),"px");I.current.style["rtl"===t.direction?"paddingLeft":"paddingRight"]=n,I.current.style.width="calc(100% + ".concat(n,")")}return I.current}}}),[]);var L=(0,u.Z)(I,t),R=-1;i.Children.forEach(Z,(function(e,t){i.isValidElement(e)?(e.props.disabled||("selectedMenu"===D&&e.props.selected||-1===R)&&(R=t),R===t&&(e.props.disabled||e.props.muiSkipListHighlight||e.type.muiSkipListHighlight)&&(R+=1)>=Z.length&&(R=-1)):R===t&&(R+=1)>=Z.length&&(R=-1)}));var K=i.Children.map(Z,(function(e,t){if(t===R){var r={};return P&&(r.autoFocus=!0),void 0===e.props.tabIndex&&"selectedMenu"===D&&(r.tabIndex=0),i.cloneElement(e,r)}return e}));return(0,p.jsx)(a.Z,(0,n.Z)({role:"menu",ref:L,className:M,onKeyDown:function(e){var t=I.current,r=e.key,n=(0,s.Z)(t).activeElement;if("ArrowDown"===r)e.preventDefault(),h(t,n,k,C,f);else if("ArrowUp"===r)e.preventDefault(),h(t,n,k,C,v);else if("Home"===r)e.preventDefault(),h(t,null,k,C,f);else if("End"===r)e.preventDefault(),h(t,null,k,C,v);else if(1===r.length){var o=T.current,i=r.toLowerCase(),a=performance.now();o.keys.length>0&&(a-o.lastTime>500?(o.keys=[],o.repeating=!0,o.previousKeyMatched=!0):o.repeating&&i!==o.keys[0]&&(o.repeating=!1)),o.lastTime=a,o.keys.push(i);var l=n&&!o.repeating&&m(n,o);o.previousKeyMatched&&(l||h(t,n,!1,C,f,o))?e.preventDefault():o.previousKeyMatched=!1}x&&x(e)},tabIndex:b?0:-1},E,{children:K}))}))},31976:function(e,t,r){r.d(t,{Z:function(){return F}});var n=r(87462),o=r(63366),i=r(72791),s=(r(57441),r(59278)),a=r(94419),l=r(26912),u=r(25028),c=r(15473),p=r(66934),d=r(13967),f=r(31402),v=r(75878),m=r(21217);function h(e){return(0,m.Z)("MuiMenu",e)}(0,v.Z)("MuiMenu",["root","paper","list"]);var g=r(80184),b=["onEntering"],y=["autoFocus","children","className","disableAutoFocusItem","MenuListProps","onClose","open","PaperProps","PopoverClasses","transitionDuration","TransitionProps","variant","slots","slotProps"],P={vertical:"top",horizontal:"right"},Z={vertical:"top",horizontal:"left"},M=(0,p.ZP)(c.ZP,{shouldForwardProp:function(e){return(0,p.FO)(e)||"classes"===e},name:"MuiMenu",slot:"Root",overridesResolver:function(e,t){return t.root}})({}),w=(0,p.ZP)(c.XS,{name:"MuiMenu",slot:"Paper",overridesResolver:function(e,t){return t.paper}})({maxHeight:"calc(100% - 96px)",WebkitOverflowScrolling:"touch"}),C=(0,p.ZP)(u.Z,{name:"MuiMenu",slot:"List",overridesResolver:function(e,t){return t.list}})({outline:0}),F=i.forwardRef((function(e,t){var r,u,c=(0,f.Z)({props:e,name:"MuiMenu"}),p=c.autoFocus,v=void 0===p||p,m=c.children,F=c.className,k=c.disableAutoFocusItem,x=void 0!==k&&k,S=c.MenuListProps,D=void 0===S?{}:S,E=c.onClose,I=c.open,T=c.PaperProps,L=void 0===T?{}:T,R=c.PopoverClasses,K=c.transitionDuration,N=void 0===K?"auto":K,j=c.TransitionProps,_=(void 0===j?{}:j).onEntering,A=c.variant,H=void 0===A?"selectedMenu":A,O=c.slots,z=void 0===O?{}:O,W=c.slotProps,V=void 0===W?{}:W,U=(0,o.Z)(c.TransitionProps,b),X=(0,o.Z)(c,y),q=(0,d.Z)(),B="rtl"===q.direction,G=(0,n.Z)({},c,{autoFocus:v,disableAutoFocusItem:x,MenuListProps:D,onEntering:_,PaperProps:L,transitionDuration:N,TransitionProps:U,variant:H}),J=function(e){var t=e.classes;return(0,a.Z)({root:["root"],paper:["paper"],list:["list"]},h,t)}(G),Q=v&&!x&&I,Y=i.useRef(null),$=-1;i.Children.map(m,(function(e,t){i.isValidElement(e)&&(e.props.disabled||("selectedMenu"===H&&e.props.selected||-1===$)&&($=t))}));var ee=null!=(r=z.paper)?r:w,te=null!=(u=V.paper)?u:L,re=(0,l.y)({elementType:z.root,externalSlotProps:V.root,ownerState:G,className:[J.root,F]}),ne=(0,l.y)({elementType:ee,externalSlotProps:te,ownerState:G,className:J.paper});return(0,g.jsx)(M,(0,n.Z)({onClose:E,anchorOrigin:{vertical:"bottom",horizontal:B?"right":"left"},transformOrigin:B?P:Z,slots:{paper:ee,root:z.root},slotProps:{root:re,paper:ne},open:I,ref:t,transitionDuration:N,TransitionProps:(0,n.Z)({onEntering:function(e,t){Y.current&&Y.current.adjustStyleForScrollbar(e,q),_&&_(e,t)}},U),ownerState:G},X,{classes:R,children:(0,g.jsx)(C,(0,n.Z)({onKeyDown:function(e){"Tab"===e.key&&(e.preventDefault(),E&&E(e,"tabKeyDown"))},actions:Y,autoFocus:v&&(-1===$||x),autoFocusItem:Q,variant:H},D,{className:(0,s.Z)(J.list,D.className),children:m}))}))}))}}]);
//# sourceMappingURL=1976.d74224cd.chunk.js.map