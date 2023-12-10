"use strict";(self.webpackChunk_minimal_kit_cra_js=self.webpackChunk_minimal_kit_cra_js||[]).push([[7343],{50933:function(e,n,t){t.d(n,{Z:function(){return f}});var i=t(1413),r=t(45987),o=t(64554),a=t(50533),c=t(36314),l=t(4567),s=t(93517),d=t(83854),u=t(80184);function h(e){var n=e.link,t=e.activeLast,r=e.disabled,c=n.name,l=n.href,s=n.icon,h=(0,i.Z)({typography:"body2",alignItems:"center",color:"text.primary",display:"inline-flex"},r&&!t&&{cursor:"default",pointerEvents:"none",color:"text.disabled"}),x=(0,u.jsxs)(u.Fragment,{children:[s&&(0,u.jsx)(o.Z,{component:"span",sx:{mr:1,display:"inherit","& svg":{width:20,height:20}},children:s}),c]});return l?(0,u.jsx)(a.Z,{component:d.r,href:l,sx:h,children:x}):(0,u.jsxs)(o.Z,{sx:h,children:[" ",x," "]})}var x=["links","action","heading","moreLink","activeLast","sx"];function f(e){var n=e.links,t=e.action,d=e.heading,f=e.moreLink,m=e.activeLast,Z=e.sx,v=(0,r.Z)(e,x),j=n[n.length-1].name;return(0,u.jsxs)(o.Z,{sx:(0,i.Z)({},Z),children:[(0,u.jsxs)(c.Z,{direction:"row",alignItems:"center",children:[(0,u.jsxs)(o.Z,{sx:{flexGrow:1},children:[d&&(0,u.jsx)(l.Z,{variant:"h4",gutterBottom:!0,children:d}),!!n.length&&(0,u.jsx)(s.Z,(0,i.Z)((0,i.Z)({separator:(0,u.jsx)(p,{})},v),{},{children:n.map((function(e){return(0,u.jsx)(h,{link:e,activeLast:m,disabled:e.name===j},e.name||"")}))}))]}),t&&(0,u.jsxs)(o.Z,{sx:{flexShrink:0},children:[" ",t," "]})]}),!!f&&(0,u.jsx)(o.Z,{sx:{mt:2},children:f.map((function(e){return(0,u.jsx)(a.Z,{href:e,variant:"body2",target:"_blank",rel:"noopener",sx:{display:"table"},children:e},e)}))})]})}function p(){return(0,u.jsx)(o.Z,{component:"span",sx:{width:4,height:4,borderRadius:"50%",bgcolor:"text.disabled"}})}},87343:function(e,n,t){t.r(n),t.d(n,{default:function(){return O}});var i=t(6907),r=t(64554),o=t(36314),a=t(89164),c=t(38072),l=t(50933),s=t(31562),d=t(93433),u=t(29439),h=t(72791),x=t(43236),f=t(57621),p=t(5849),m=t(13034),Z=t(24308),v=t(57064),j=t(49900),b=t(76278),g=t(27216),k=t(80184);function y(e,n){return e.filter((function(e){return-1===n.indexOf(e)}))}function w(e,n){return e.filter((function(e){return-1!==n.indexOf(e)}))}function C(){var e=(0,h.useState)([]),n=(0,u.Z)(e,2),t=n[0],i=n[1],r=(0,h.useState)([0,1,2,3]),o=(0,u.Z)(r,2),a=o[0],c=o[1],l=(0,h.useState)([4,5,6,7]),s=(0,u.Z)(l,2),C=s[0],z=s[1],I=w(t,a),S=w(t,C),R=function(e){return function(){var n=t.indexOf(e),r=(0,d.Z)(t);-1===n?r.push(e):r.splice(n,1),i(r)}},F=function(e){return(0,k.jsx)(f.Z,{sx:{width:200,height:220,overflow:"auto",borderRadius:1.5},children:(0,k.jsx)(x.Z,{dense:!0,component:"div",role:"list",children:e.map((function(e){var n="transfer-list-item-".concat(e,"-label");return(0,k.jsxs)(b.Z,{role:"listitem",onClick:R(e),children:[(0,k.jsx)(v.Z,{children:(0,k.jsx)(m.Z,{checked:-1!==t.indexOf(e),tabIndex:-1,disableRipple:!0,inputProps:{"aria-labelledby":n}})}),(0,k.jsx)(j.Z,{id:n,primary:"List item ".concat(e+1)})]},e)}))})})};return(0,k.jsxs)(Z.Z,{container:!0,justifyContent:"center",alignItems:"center",sx:{width:"auto",py:3},children:[(0,k.jsx)(Z.Z,{children:F(a)}),(0,k.jsxs)(Z.Z,{container:!0,direction:"column",alignItems:"center",sx:{p:3},children:[(0,k.jsx)(p.Z,{color:"inherit",variant:"outlined",size:"small",onClick:function(){z(C.concat(a)),c([])},disabled:0===a.length,"aria-label":"move all right",sx:{my:1},children:(0,k.jsx)(g.Z,{icon:"eva:arrowhead-right-fill",width:18})}),(0,k.jsx)(p.Z,{color:"inherit",variant:"outlined",size:"small",onClick:function(){z(C.concat(I)),c(y(a,I)),i(y(t,I))},disabled:0===I.length,"aria-label":"move selected right",sx:{my:1},children:(0,k.jsx)(g.Z,{icon:"eva:arrow-ios-forward-fill",width:18})}),(0,k.jsx)(p.Z,{color:"inherit",variant:"outlined",size:"small",onClick:function(){c(a.concat(S)),z(y(C,S)),i(y(t,S))},disabled:0===S.length,"aria-label":"move selected left",sx:{my:1},children:(0,k.jsx)(g.Z,{icon:"eva:arrow-ios-back-fill",width:18})}),(0,k.jsx)(p.Z,{color:"inherit",variant:"outlined",size:"small",onClick:function(){c(a.concat(C)),z([])},disabled:0===C.length,"aria-label":"move all left",sx:{my:1},children:(0,k.jsx)(g.Z,{icon:"eva:arrowhead-left-fill",width:18})})]}),(0,k.jsx)(Z.Z,{children:F(C)})]})}var z=t(94721),I=t(9585);function S(e,n){return e.filter((function(e){return-1===n.indexOf(e)}))}function R(e,n){return e.filter((function(e){return-1!==n.indexOf(e)}))}function F(){var e=(0,h.useState)([]),n=(0,u.Z)(e,2),t=n[0],i=n[1],r=(0,h.useState)([0,1,2,3]),o=(0,u.Z)(r,2),a=o[0],c=o[1],l=(0,h.useState)([4,5,6,7]),s=(0,u.Z)(l,2),y=s[0],w=s[1],C=R(t,a),F=R(t,y),L=function(e){return function(){var n=t.indexOf(e),r=(0,d.Z)(t);-1===n?r.push(e):r.splice(n,1),i(r)}},O=function(e){return R(t,e).length},P=function(e){return function(){var n,r;O(e)===e.length?i(S(t,e)):i((n=t,r=e,[].concat((0,d.Z)(n),(0,d.Z)(S(r,n)))))}},B=function(e,n){return(0,k.jsxs)(f.Z,{sx:{borderRadius:1.5},children:[(0,k.jsx)(I.Z,{avatar:(0,k.jsx)(m.Z,{onClick:P(n),checked:O(n)===n.length&&0!==n.length,indeterminate:O(n)!==n.length&&0!==O(n),disabled:0===n.length,inputProps:{"aria-label":"all items selected"}}),title:e,subheader:"".concat(O(n),"/").concat(n.length," selected"),sx:{p:2}}),(0,k.jsx)(z.Z,{}),(0,k.jsx)(x.Z,{dense:!0,component:"div",role:"list",sx:{width:200,height:220,overflow:"auto"},children:n.map((function(e){var n="transfer-list-all-item-".concat(e,"-label");return(0,k.jsxs)(b.Z,{role:"listitem",onClick:L(e),children:[(0,k.jsx)(v.Z,{children:(0,k.jsx)(m.Z,{disableRipple:!0,checked:-1!==t.indexOf(e),tabIndex:-1,inputProps:{"aria-labelledby":n}})}),(0,k.jsx)(j.Z,{id:n,primary:"List item ".concat(e+1)})]},e)}))})]})};return(0,k.jsxs)(Z.Z,{container:!0,justifyContent:"center",alignItems:"center",sx:{width:"auto",p:3},children:[(0,k.jsx)(Z.Z,{children:B("Choices",a)}),(0,k.jsxs)(Z.Z,{container:!0,direction:"column",alignItems:"center",sx:{p:3},children:[(0,k.jsx)(p.Z,{color:"inherit",variant:"outlined",size:"small",onClick:function(){w(y.concat(C)),c(S(a,C)),i(S(t,C))},disabled:0===C.length,"aria-label":"move selected right",sx:{my:1},children:(0,k.jsx)(g.Z,{icon:"eva:arrow-ios-forward-fill",width:18})}),(0,k.jsx)(p.Z,{color:"inherit",variant:"outlined",size:"small",onClick:function(){c(a.concat(F)),w(S(y,F)),i(S(t,F))},disabled:0===F.length,"aria-label":"move selected left",sx:{my:1},children:(0,k.jsx)(g.Z,{icon:"eva:arrow-ios-back-fill",width:18})})]}),(0,k.jsx)(Z.Z,{children:B("Chosen",y)})]})}function L(){return(0,k.jsxs)(k.Fragment,{children:[(0,k.jsx)(r.Z,{sx:{py:5,bgcolor:function(e){return"light"===e.palette.mode?"grey.200":"grey.800"}},children:(0,k.jsx)(a.Z,{children:(0,k.jsx)(l.Z,{heading:"Transfer List",links:[{name:"Components",href:c.H.components},{name:"Transfer List"}],moreLink:["https://mui.com/components/transfer-list"]})})}),(0,k.jsx)(a.Z,{sx:{my:10},children:(0,k.jsxs)(o.Z,{spacing:3,children:[(0,k.jsx)(s.Z,{title:"Simple",children:(0,k.jsx)(C,{})}),(0,k.jsx)(s.Z,{title:"Enhanced",children:(0,k.jsx)(F,{})})]})})]})}function O(){return(0,k.jsxs)(k.Fragment,{children:[(0,k.jsx)(i.ql,{children:(0,k.jsx)("title",{children:" MUI: Transfer List"})}),(0,k.jsx)(L,{})]})}},31562:function(e,n,t){t.d(n,{Z:function(){return u}});var i=t(1413),r=t(45987),o=t(12065),a=t(27938),c=t(9585),l=t(36314),s=t(80184),d=["title","sx","children"];function u(e){var n=e.title,t=e.sx,u=e.children,h=(0,r.Z)(e,d);return(0,s.jsxs)(a.Z,{variant:"outlined",sx:{borderRadius:1.5,borderStyle:"dashed",bgcolor:function(e){return(0,o.Fq)(e.palette.grey[500],.04)}},children:[n&&(0,s.jsx)(c.Z,{title:n}),(0,s.jsx)(l.Z,(0,i.Z)((0,i.Z)({spacing:3,direction:"row",alignItems:"center",justifyContent:"center",flexWrap:"wrap",sx:(0,i.Z)({p:5,minHeight:180},t)},h),{},{children:u}))]})}},13034:function(e,n,t){t.d(n,{Z:function(){return C}});var i=t(4942),r=t(63366),o=t(87462),a=t(72791),c=t(59278),l=t(94419),s=t(12065),d=t(97278),u=t(74223),h=t(80184),x=(0,u.Z)((0,h.jsx)("path",{d:"M19 5v14H5V5h14m0-2H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2z"}),"CheckBoxOutlineBlank"),f=(0,u.Z)((0,h.jsx)("path",{d:"M19 3H5c-1.11 0-2 .9-2 2v14c0 1.1.89 2 2 2h14c1.11 0 2-.9 2-2V5c0-1.1-.89-2-2-2zm-9 14l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"}),"CheckBox"),p=(0,u.Z)((0,h.jsx)("path",{d:"M19 3H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm-2 10H7v-2h10v2z"}),"IndeterminateCheckBox"),m=t(14036),Z=t(31402),v=t(66934),j=t(64178),b=["checkedIcon","color","icon","indeterminate","indeterminateIcon","inputProps","size","className"],g=(0,v.ZP)(d.Z,{shouldForwardProp:function(e){return(0,v.FO)(e)||"classes"===e},name:"MuiCheckbox",slot:"Root",overridesResolver:function(e,n){var t=e.ownerState;return[n.root,t.indeterminate&&n.indeterminate,"default"!==t.color&&n["color".concat((0,m.Z)(t.color))]]}})((function(e){var n,t=e.theme,r=e.ownerState;return(0,o.Z)({color:(t.vars||t).palette.text.secondary},!r.disableRipple&&{"&:hover":{backgroundColor:t.vars?"rgba(".concat("default"===r.color?t.vars.palette.action.activeChannel:t.vars.palette.primary.mainChannel," / ").concat(t.vars.palette.action.hoverOpacity,")"):(0,s.Fq)("default"===r.color?t.palette.action.active:t.palette[r.color].main,t.palette.action.hoverOpacity),"@media (hover: none)":{backgroundColor:"transparent"}}},"default"!==r.color&&(n={},(0,i.Z)(n,"&.".concat(j.Z.checked,", &.").concat(j.Z.indeterminate),{color:(t.vars||t).palette[r.color].main}),(0,i.Z)(n,"&.".concat(j.Z.disabled),{color:(t.vars||t).palette.action.disabled}),n))})),k=(0,h.jsx)(f,{}),y=(0,h.jsx)(x,{}),w=(0,h.jsx)(p,{}),C=a.forwardRef((function(e,n){var t,i,s=(0,Z.Z)({props:e,name:"MuiCheckbox"}),d=s.checkedIcon,u=void 0===d?k:d,x=s.color,f=void 0===x?"primary":x,p=s.icon,v=void 0===p?y:p,C=s.indeterminate,z=void 0!==C&&C,I=s.indeterminateIcon,S=void 0===I?w:I,R=s.inputProps,F=s.size,L=void 0===F?"medium":F,O=s.className,P=(0,r.Z)(s,b),B=z?S:v,_=z?S:u,H=(0,o.Z)({},s,{color:f,indeterminate:z,size:L}),N=function(e){var n=e.classes,t=e.indeterminate,i=e.color,r=e.size,a={root:["root",t&&"indeterminate","color".concat((0,m.Z)(i)),"size".concat((0,m.Z)(r))]},c=(0,l.Z)(a,j.y,n);return(0,o.Z)({},n,c)}(H);return(0,h.jsx)(g,(0,o.Z)({type:"checkbox",inputProps:(0,o.Z)({"data-indeterminate":z},R),icon:a.cloneElement(B,{fontSize:null!=(t=B.props.fontSize)?t:L}),checkedIcon:a.cloneElement(_,{fontSize:null!=(i=_.props.fontSize)?i:L}),ownerState:H,ref:n,className:(0,c.Z)(N.root,O)},P,{classes:N}))}))},97278:function(e,n,t){t.d(n,{Z:function(){return g}});var i=t(29439),r=t(63366),o=t(87462),a=t(72791),c=t(59278),l=t(94419),s=t(14036),d=t(66934),u=t(98278),h=t(52930),x=t(95080),f=t(75878),p=t(21217);function m(e){return(0,p.Z)("PrivateSwitchBase",e)}(0,f.Z)("PrivateSwitchBase",["root","checked","disabled","input","edgeStart","edgeEnd"]);var Z=t(80184),v=["autoFocus","checked","checkedIcon","className","defaultChecked","disabled","disableFocusRipple","edge","icon","id","inputProps","inputRef","name","onBlur","onChange","onFocus","readOnly","required","tabIndex","type","value"],j=(0,d.ZP)(x.Z)((function(e){var n=e.ownerState;return(0,o.Z)({padding:9,borderRadius:"50%"},"start"===n.edge&&{marginLeft:"small"===n.size?-3:-12},"end"===n.edge&&{marginRight:"small"===n.size?-3:-12})})),b=(0,d.ZP)("input")({cursor:"inherit",position:"absolute",opacity:0,width:"100%",height:"100%",top:0,left:0,margin:0,padding:0,zIndex:1}),g=a.forwardRef((function(e,n){var t=e.autoFocus,a=e.checked,d=e.checkedIcon,x=e.className,f=e.defaultChecked,p=e.disabled,g=e.disableFocusRipple,k=void 0!==g&&g,y=e.edge,w=void 0!==y&&y,C=e.icon,z=e.id,I=e.inputProps,S=e.inputRef,R=e.name,F=e.onBlur,L=e.onChange,O=e.onFocus,P=e.readOnly,B=e.required,_=void 0!==B&&B,H=e.tabIndex,N=e.type,q=e.value,E=(0,r.Z)(e,v),M=(0,u.Z)({controlled:a,default:Boolean(f),name:"SwitchBase",state:"checked"}),V=(0,i.Z)(M,2),T=V[0],G=V[1],U=(0,h.Z)(),W=p;U&&"undefined"===typeof W&&(W=U.disabled);var A="checkbox"===N||"radio"===N,D=(0,o.Z)({},e,{checked:T,disabled:W,disableFocusRipple:k,edge:w}),J=function(e){var n=e.classes,t=e.checked,i=e.disabled,r=e.edge,o={root:["root",t&&"checked",i&&"disabled",r&&"edge".concat((0,s.Z)(r))],input:["input"]};return(0,l.Z)(o,m,n)}(D);return(0,Z.jsxs)(j,(0,o.Z)({component:"span",className:(0,c.Z)(J.root,x),centerRipple:!0,focusRipple:!k,disabled:W,tabIndex:null,role:void 0,onFocus:function(e){O&&O(e),U&&U.onFocus&&U.onFocus(e)},onBlur:function(e){F&&F(e),U&&U.onBlur&&U.onBlur(e)},ownerState:D,ref:n},E,{children:[(0,Z.jsx)(b,(0,o.Z)({autoFocus:t,checked:a,defaultChecked:f,className:J.input,disabled:W,id:A?z:void 0,name:R,onChange:function(e){if(!e.nativeEvent.defaultPrevented){var n=e.target.checked;G(n),L&&L(e,n)}},readOnly:P,ref:S,required:_,ownerState:D,tabIndex:H,type:N},"checkbox"===N&&void 0===q?{}:{value:q},I)),T?d:C]}))}))}}]);
//# sourceMappingURL=7343.58298cc9.chunk.js.map