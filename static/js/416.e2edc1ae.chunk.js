(self.webpackChunk_minimal_kit_cra_js=self.webpackChunk_minimal_kit_cra_js||[]).push([[416],{32471:function(e,n,r){"use strict";r.d(n,{Z:function(){return h}});var t=r(1413),o=r(45987),a=r(72791),i=r(87087),s=r(13967),c=r(12065),l=r(64554);function d(){return{"4/3":"calc(100% / 4 * 3)","3/4":"calc(100% / 3 * 4)","6/4":"calc(100% / 6 * 4)","4/6":"calc(100% / 4 * 6)","16/9":"calc(100% / 16 * 9)","9/16":"calc(100% / 9 * 16)","21/9":"calc(100% / 21 * 9)","9/21":"calc(100% / 9 * 21)","1/1":"100%"}[arguments.length>0&&void 0!==arguments[0]?arguments[0]:"1/1"]}var p=r(80184),u=["ratio","overlay","disabledEffect","alt","src","afterLoad","delayTime","threshold","beforeLoad","delayMethod","placeholder","wrapperProps","scrollPosition","effect","visibleByDefault","wrapperClassName","useIntersectionObserver","sx"],h=(0,a.forwardRef)((function(e,n){var r=e.ratio,a=e.overlay,h=e.disabledEffect,f=void 0!==h&&h,m=e.alt,x=e.src,v=e.afterLoad,g=e.delayTime,j=e.threshold,b=e.beforeLoad,y=e.delayMethod,Z=e.placeholder,w=e.wrapperProps,C=e.scrollPosition,k=e.effect,_=void 0===k?"blur":k,S=e.visibleByDefault,M=e.wrapperClassName,T=e.useIntersectionObserver,L=e.sx,P=(0,o.Z)(e,u),I=(0,s.Z)(),U=!!a&&{"&:before":{content:"''",top:0,left:0,width:1,height:1,zIndex:1,position:"absolute",background:a||(0,c.Fq)(I.palette.grey[900],.48)}},A=(0,p.jsx)(l.Z,{component:i.LazyLoadImage,alt:m,src:x,afterLoad:v,delayTime:g,threshold:j,beforeLoad:b,delayMethod:y,placeholder:Z,wrapperProps:w,scrollPosition:C,visibleByDefault:S,effect:f?void 0:_,useIntersectionObserver:T,wrapperClassName:M||"component-image-wrapper",placeholderSrc:f?"/assets/transparent.png":"/assets/placeholder.svg",sx:(0,t.Z)({width:1,height:1,objectFit:"cover",verticalAlign:"bottom"},!!r&&{top:0,left:0,position:"absolute"})});return(0,p.jsx)(l.Z,(0,t.Z)((0,t.Z)({ref:n,component:"span",className:"component-image",sx:(0,t.Z)((0,t.Z)((0,t.Z)({overflow:"hidden",position:"relative",verticalAlign:"bottom",display:"inline-block"},!!r&&{width:1}),{},{"& span.component-image-wrapper":(0,t.Z)({width:1,height:1,verticalAlign:"bottom",backgroundSize:"cover !important"},!!r&&{pt:d(r)})},U),L)},P),{},{children:A}))}))},90416:function(e,n,r){"use strict";r.r(n),r.d(n,{default:function(){return F}});var t=r(6907),o=r(45812),a=r.n(o),i=r(50533),s=r(36314),c=r(94721),l=r(89164),d=r(64554),p=r(4567),u=r(1413),h=r(45358),f=r(66934),m=r(12065),x=r(38887),v=r(74744),g=r(82486),j=r(80184),b=(0,f.ZP)("div")((function(e){return{position:"relative",padding:e.theme.spacing(10,0)}})),y=(0,f.ZP)("div")((function(e){var n=e.theme;return(0,u.Z)({top:0,left:0,right:0,bottom:0,zIndex:-1,position:"absolute",transform:"scaleX(-1)"},(0,v.v3)({color:(0,m.Fq)(n.palette.background.default,.9),imgUrl:"/assets/background/overlay_4.jpg"}))}));function Z(){var e=(0,x.F)("up","md");return(0,j.jsxs)(b,{children:[(0,j.jsxs)(l.Z,{component:g.NM,sx:{display:{md:"flex"},justifyContent:{md:"space-between"}},children:[(0,j.jsxs)(s.Z,{spacing:3,children:[(0,j.jsx)(h.m.div,{variants:(0,g.EU)().inUp,children:(0,j.jsx)(p.Z,{variant:"h3",component:"h1",children:"Components"})}),(0,j.jsx)(h.m.div,{variants:(0,g.EU)().inUp,children:(0,j.jsxs)(p.Z,{sx:{color:"text.secondary"},children:["With huge resource pack making deployment",(0,j.jsx)("br",{})," easy and expanding more effectively"]})})]}),e&&(0,j.jsx)(h.m.div,{variants:(0,g.EU)().inDown,children:(0,j.jsx)(d.Z,{component:"img",alt:"illustrations characters",src:"/assets/illustrations/characters/character_7.png",sx:{maxWidth:320}})})]}),(0,j.jsx)(y,{})]})}var w=r(27938),C=r(66647),k=r(32471),_=r(83854);function S(e){var n=e.item,r=n.name,t=n.icon,o=n.href;return(0,j.jsxs)(w.Z,{component:_.r,href:o,variant:"outlined",sx:{overflow:"hidden",textDecoration:"none",borderColor:function(e){return(0,m.Fq)(e.palette.grey[500],.08)}},children:[(0,j.jsx)(C.Z,{component:h.m.div,whileHover:"hover",sx:{p:2.5,borderRadius:0,color:"text.secondary",bgcolor:function(e){return(0,m.Fq)(e.palette.grey[500],.04)}},children:(0,j.jsx)(h.m.div,{variants:(0,g.U6)(1.1),transition:(0,g.BN)(),children:(0,j.jsx)(k.Z,{alt:r,src:t})})}),(0,j.jsx)(p.Z,{variant:"subtitle2",sx:{p:2,textAlign:"center"},children:r})]})}var M=r(81580),T=function(e,n){return"/components/".concat(e,"/").concat((0,M.o)(n))},L=["Colors","Typography","Shadows","Grid","Icons"].map((function(e){return{name:e,href:T("foundation",e),icon:"/assets/icons/components/ic_".concat((0,M.f)(e),".svg")}})),P=["Accordion","Alert","Autocomplete","Avatar","Badge","Breadcrumbs","Buttons","Checkbox","Chip","Dialog","List","Menu","Pagination","Pickers","Popover","Progress","Radio Button","Rating","Slider","Stepper","Switch","Table","Tabs","Textfield","Timeline","Tooltip","Transfer List","Tree View","Data Grid"].map((function(e){return{name:e,href:T("mui",e),icon:"/assets/icons/components/ic_".concat((0,M.f)(e),".svg")}})),I=["Chart","Map","Editor","Copy to clipboard","Upload","Carousel","Multi language","Animate","Mega Menu","Form Validation","Lightbox","Image","Label","Scroll","Scroll Progress","Snackbar","Text Max Line","Navigation Bar","Organization Chart","Markdown"].map((function(e){return{name:e,href:T("extra",e),icon:"/assets/icons/components/ic_extra_".concat((0,M.f)(e),".svg")}}));function U(){return(0,j.jsxs)(j.Fragment,{children:[(0,j.jsx)(Z,{}),(0,j.jsxs)(l.Z,{sx:{pt:10,pb:15},children:[(0,j.jsxs)(s.Z,{spacing:3,children:[(0,j.jsxs)(s.Z,{spacing:1,children:[(0,j.jsx)(p.Z,{variant:"h5",children:"Foundation"}),(0,j.jsx)(p.Z,{variant:"body2",sx:{color:"text.secondary"},children:"Colors, Typography, Shadows\u2026"})]}),(0,j.jsx)(A,{children:L.map((function(e){return(0,j.jsx)(S,{item:e},e.name)}))})]}),(0,j.jsx)(c.Z,{sx:{borderStyle:"dashed",my:8}}),(0,j.jsxs)(s.Z,{spacing:3,children:[(0,j.jsxs)(s.Z,{spacing:1,children:[(0,j.jsx)(p.Z,{variant:"h5",children:"MUI"}),(0,j.jsxs)(p.Z,{variant:"body2",sx:{color:"text.secondary"},children:["Components from"," ",(0,j.jsx)(i.Z,{href:"https://mui.com/components/",target:"_blank",rel:"noopener",children:"Material UI"}),"."]}),(0,j.jsx)(p.Z,{variant:"caption",sx:{color:"text.secondary"},children:(0,j.jsxs)("i",{children:["Some advanced components from MUI X will not be included. So you need to purchase a separate",(0,j.jsx)(i.Z,{href:"https://mui.com/pricing/",target:"_blank",rel:"noopener",sx:{ml:.5},children:"license"}),"."]})})]}),(0,j.jsx)(A,{children:a()(P,["name"],["asc"]).map((function(e){return(0,j.jsx)(S,{item:e},e.name)}))})]}),(0,j.jsx)(c.Z,{sx:{borderStyle:"dashed",my:8}}),(0,j.jsxs)(s.Z,{spacing:3,children:[(0,j.jsxs)(s.Z,{spacing:1,children:[(0,j.jsx)(p.Z,{variant:"h5",children:"Extra Components"}),(0,j.jsx)(p.Z,{variant:"body2",sx:{color:"text.secondary"},children:"Some custom components / use 3rd party dependencies (chart, map, editor\u2026)."})]}),(0,j.jsx)(A,{children:I.map((function(e){return(0,j.jsx)(S,{item:e},e.name)}))})]})]})]})}function A(e){var n=e.children;return(0,j.jsx)(d.Z,{display:"grid",gridTemplateColumns:{xs:"repeat(2, 1fr)",sm:"repeat(3, 1fr)",md:"repeat(4, 1fr)",lg:"repeat(6, 1fr)"},gap:2.5,children:n})}function F(){return(0,j.jsxs)(j.Fragment,{children:[(0,j.jsx)(t.ql,{children:(0,j.jsx)("title",{children:" Components"})}),(0,j.jsx)(U,{})]})}},53849:function(e,n,r){var t=r(87927),o=r(21473);e.exports=function(e,n){var r=-1,a=o(e)?Array(e.length):[];return t(e,(function(e,t,o){a[++r]=n(e,t,o)})),a}},93226:function(e,n,r){var t=r(68950),o=r(98667),a=r(56025),i=r(53849),s=r(19179),c=r(16194),l=r(94480),d=r(2100),p=r(93629);e.exports=function(e,n,r){n=n.length?t(n,(function(e){return p(e)?function(n){return o(n,1===e.length?e[0]:e)}:e})):[d];var u=-1;n=t(n,c(a));var h=i(e,(function(e,r,o){return{criteria:t(n,(function(n){return n(e)})),index:++u,value:e}}));return s(h,(function(e,n){return l(e,n,r)}))}},19179:function(e){e.exports=function(e,n){var r=e.length;for(e.sort(n);r--;)e[r]=e[r].value;return e}},88558:function(e,n,r){var t=r(70152);e.exports=function(e,n){if(e!==n){var r=void 0!==e,o=null===e,a=e===e,i=t(e),s=void 0!==n,c=null===n,l=n===n,d=t(n);if(!c&&!d&&!i&&e>n||i&&s&&l&&!c&&!d||o&&s&&l||!r&&l||!a)return 1;if(!o&&!i&&!d&&e<n||d&&r&&a&&!o&&!i||c&&r&&a||!s&&a||!l)return-1}return 0}},94480:function(e,n,r){var t=r(88558);e.exports=function(e,n,r){for(var o=-1,a=e.criteria,i=n.criteria,s=a.length,c=r.length;++o<s;){var l=t(a[o],i[o]);if(l)return o>=c?l:l*("desc"==r[o]?-1:1)}return e.index-n.index}},45812:function(e,n,r){var t=r(93226),o=r(93629);e.exports=function(e,n,r,a){return null==e?[]:(o(n)||(n=null==n?[]:[n]),o(r=a?void 0:r)||(r=null==r?[]:[r]),t(e,n,r))}}}]);
//# sourceMappingURL=416.e2edc1ae.chunk.js.map