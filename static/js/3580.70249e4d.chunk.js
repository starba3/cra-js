"use strict";(self.webpackChunk_minimal_kit_cra_js=self.webpackChunk_minimal_kit_cra_js||[]).push([[3580],{50933:function(e,r,n){n.d(r,{Z:function(){return x}});var t=n(1413),o=n(45987),i=n(64554),l=n(50533),a=n(36314),s=n(4567),c=n(93517),d=n(83854),p=n(80184);function u(e){var r=e.link,n=e.activeLast,o=e.disabled,a=r.name,s=r.href,c=r.icon,u=(0,t.Z)({typography:"body2",alignItems:"center",color:"text.primary",display:"inline-flex"},o&&!n&&{cursor:"default",pointerEvents:"none",color:"text.disabled"}),h=(0,p.jsxs)(p.Fragment,{children:[c&&(0,p.jsx)(i.Z,{component:"span",sx:{mr:1,display:"inherit","& svg":{width:20,height:20}},children:c}),a]});return s?(0,p.jsx)(l.Z,{component:d.r,href:s,sx:u,children:h}):(0,p.jsxs)(i.Z,{sx:u,children:[" ",h," "]})}var h=["links","action","heading","moreLink","activeLast","sx"];function x(e){var r=e.links,n=e.action,d=e.heading,x=e.moreLink,m=e.activeLast,g=e.sx,Z=(0,o.Z)(e,h),j=r[r.length-1].name;return(0,p.jsxs)(i.Z,{sx:(0,t.Z)({},g),children:[(0,p.jsxs)(a.Z,{direction:"row",alignItems:"center",children:[(0,p.jsxs)(i.Z,{sx:{flexGrow:1},children:[d&&(0,p.jsx)(s.Z,{variant:"h4",gutterBottom:!0,children:d}),!!r.length&&(0,p.jsx)(c.Z,(0,t.Z)((0,t.Z)({separator:(0,p.jsx)(f,{})},Z),{},{children:r.map((function(e){return(0,p.jsx)(u,{link:e,activeLast:m,disabled:e.name===j},e.name||"")}))}))]}),n&&(0,p.jsxs)(i.Z,{sx:{flexShrink:0},children:[" ",n," "]})]}),!!x&&(0,p.jsx)(i.Z,{sx:{mt:2},children:x.map((function(e){return(0,p.jsx)(l.Z,{href:e,variant:"body2",target:"_blank",rel:"noopener",sx:{display:"table"},children:e},e)}))})]})}function f(){return(0,p.jsx)(i.Z,{component:"span",sx:{width:4,height:4,borderRadius:"50%",bgcolor:"text.disabled"}})}},32471:function(e,r,n){n.d(r,{Z:function(){return h}});var t=n(1413),o=n(45987),i=n(72791),l=n(87087),a=n(13967),s=n(12065),c=n(64554);function d(){return{"4/3":"calc(100% / 4 * 3)","3/4":"calc(100% / 3 * 4)","6/4":"calc(100% / 6 * 4)","4/6":"calc(100% / 4 * 6)","16/9":"calc(100% / 16 * 9)","9/16":"calc(100% / 9 * 16)","21/9":"calc(100% / 21 * 9)","9/21":"calc(100% / 9 * 21)","1/1":"100%"}[arguments.length>0&&void 0!==arguments[0]?arguments[0]:"1/1"]}var p=n(80184),u=["ratio","overlay","disabledEffect","alt","src","afterLoad","delayTime","threshold","beforeLoad","delayMethod","placeholder","wrapperProps","scrollPosition","effect","visibleByDefault","wrapperClassName","useIntersectionObserver","sx"],h=(0,i.forwardRef)((function(e,r){var n=e.ratio,i=e.overlay,h=e.disabledEffect,x=void 0!==h&&h,f=e.alt,m=e.src,g=e.afterLoad,Z=e.delayTime,j=e.threshold,v=e.beforeLoad,b=e.delayMethod,y=e.placeholder,w=e.wrapperProps,R=e.scrollPosition,k=e.effect,F=void 0===k?"blur":k,U=e.visibleByDefault,q=e.wrapperClassName,C=e.useIntersectionObserver,I=e.sx,L=(0,o.Z)(e,u),D=(0,a.Z)(),A=!!i&&{"&:before":{content:"''",top:0,left:0,width:1,height:1,zIndex:1,position:"absolute",background:i||(0,s.Fq)(D.palette.grey[900],.48)}},P=(0,p.jsx)(c.Z,{component:l.LazyLoadImage,alt:f,src:m,afterLoad:g,delayTime:Z,threshold:j,beforeLoad:v,delayMethod:b,placeholder:y,wrapperProps:w,scrollPosition:R,visibleByDefault:U,effect:x?void 0:F,useIntersectionObserver:C,wrapperClassName:q||"component-image-wrapper",placeholderSrc:x?"/assets/transparent.png":"/assets/placeholder.svg",sx:(0,t.Z)({width:1,height:1,objectFit:"cover",verticalAlign:"bottom"},!!n&&{top:0,left:0,position:"absolute"})});return(0,p.jsx)(c.Z,(0,t.Z)((0,t.Z)({ref:r,component:"span",className:"component-image",sx:(0,t.Z)((0,t.Z)((0,t.Z)({overflow:"hidden",position:"relative",verticalAlign:"bottom",display:"inline-block"},!!n&&{width:1}),{},{"& span.component-image-wrapper":(0,t.Z)({width:1,height:1,verticalAlign:"bottom",backgroundSize:"cover !important"},!!n&&{pt:d(n)})},A),I)},L),{},{children:P}))}))},96972:function(e,r,n){n.d(r,{GV:function(){return j},gq:function(){return U},ab:function(){return L},un:function(){return C}});var t=n(12065),o=n(64554),i=n(27938),l=n(4567),a=n(17070),s=n(18197),c=n(80184);function d(e){var r=e.fileRejections;return r.length?(0,c.jsx)(i.Z,{variant:"outlined",sx:{py:1,px:2,mt:3,textAlign:"left",borderStyle:"dashed",borderColor:"error.main",bgcolor:function(e){return(0,t.Fq)(e.palette.error.main,.08)}},children:r.map((function(e){var r=e.file,n=e.errors,t=(0,s.ht)(r),i=t.path,d=t.size;return(0,c.jsxs)(o.Z,{sx:{my:1},children:[(0,c.jsxs)(l.Z,{variant:"subtitle2",noWrap:!0,children:[i," - ",d?(0,a.oe)(d):""]}),n.map((function(e){return(0,c.jsxs)(o.Z,{component:"span",sx:{typography:"caption"},children:["- ",e.message]},e.code)}))]},i)}))}):null}var p=n(1413),u=n(83791),h=n(45358),x=n(36314),f=n(13400),m=n(49900),g=n(27216),Z=n(82486);function j(e){var r=e.thumbnail,n=e.files,o=e.onRemove,i=e.sx;return(0,c.jsx)(u.M,{initial:!1,children:null===n||void 0===n?void 0:n.map((function(e){var n=(0,s.ht)(e),l=n.key,d=n.name,u=void 0===d?"":d,j=n.size,v=void 0===j?0:j,b="string"===typeof e;return r?(0,c.jsxs)(x.Z,(0,p.Z)((0,p.Z)({component:h.m.div},(0,Z.EU)().inUp),{},{alignItems:"center",display:"inline-flex",justifyContent:"center",sx:(0,p.Z)({m:.5,width:80,height:80,borderRadius:1.25,overflow:"hidden",position:"relative",border:function(e){return"solid 1px ".concat((0,t.Fq)(e.palette.grey[500],.16))}},i),children:[(0,c.jsx)(s.ZP,{tooltip:!0,imageView:!0,file:e,sx:{position:"absolute"},imgSx:{position:"absolute"}}),o&&(0,c.jsx)(f.Z,{size:"small",onClick:function(){return o(e)},sx:{p:.5,top:4,right:4,position:"absolute",color:"common.white",bgcolor:function(e){return(0,t.Fq)(e.palette.grey[900],.48)},"&:hover":{bgcolor:function(e){return(0,t.Fq)(e.palette.grey[900],.72)}}},children:(0,c.jsx)(g.Z,{icon:"mingcute:close-line",width:14})})]}),l):(0,c.jsxs)(x.Z,(0,p.Z)((0,p.Z)({component:h.m.div},(0,Z.EU)().inUp),{},{spacing:2,direction:"row",alignItems:"center",sx:(0,p.Z)({my:1,py:1,px:1.5,borderRadius:1,border:function(e){return"solid 1px ".concat((0,t.Fq)(e.palette.grey[500],.16))}},i),children:[(0,c.jsx)(s.ZP,{file:e}),(0,c.jsx)(m.Z,{primary:b?e:u,secondary:b?"":(0,a.oe)(v),secondaryTypographyProps:{component:"span",typography:"caption"}}),o&&(0,c.jsx)(f.Z,{size:"small",onClick:function(){return o(e)},children:(0,c.jsx)(g.Z,{icon:"mingcute:close-line",width:16})})]}),l)}))})}var v=n(32471);function b(e){var r=e.imgUrl,n=void 0===r?"":r;return(0,c.jsx)(o.Z,{sx:{p:1,top:0,left:0,width:1,height:1,position:"absolute"},children:(0,c.jsx)(v.Z,{alt:"file preview",src:n,sx:{width:1,height:1,borderRadius:1}})})}var y=n(45987),w=n(80788),R=n(5849),k=n(3597),F=["disabled","multiple","error","helperText","file","onDelete","files","thumbnail","onUpload","onRemove","onRemoveAll","sx"];function U(e){var r=e.disabled,n=e.multiple,i=void 0!==n&&n,a=e.error,s=e.helperText,u=e.file,h=e.onDelete,m=e.files,Z=e.thumbnail,v=e.onUpload,U=e.onRemove,q=e.onRemoveAll,C=e.sx,I=(0,y.Z)(e,F),L=(0,w.uI)((0,p.Z)({multiple:i,disabled:r},I)),D=L.getRootProps,A=L.getInputProps,P=L.isDragActive,z=L.isDragReject,S=L.fileRejections,O=!!u&&!i,T=!!m&&i&&!!m.length,_=z||!!a,E=(0,c.jsxs)(x.Z,{spacing:3,alignItems:"center",justifyContent:"center",flexWrap:"wrap",children:[(0,c.jsx)(k.A2,{sx:{width:1,maxWidth:200}}),(0,c.jsxs)(x.Z,{spacing:1,sx:{textAlign:"center"},children:[(0,c.jsx)(l.Z,{variant:"h6",children:"Drop or Select file"}),(0,c.jsxs)(l.Z,{variant:"body2",sx:{color:"text.secondary"},children:["Drop files here or click",(0,c.jsx)(o.Z,{component:"span",sx:{mx:.5,color:"primary.main",textDecoration:"underline"},children:"browse"}),"thorough your machine"]})]})]}),N=(0,c.jsx)(b,{imgUrl:"string"===typeof u?u:null===u||void 0===u?void 0:u.preview}),B=O&&h&&(0,c.jsx)(f.Z,{size:"small",onClick:h,sx:{top:16,right:16,zIndex:9,position:"absolute",color:function(e){return(0,t.Fq)(e.palette.common.white,.8)},bgcolor:function(e){return(0,t.Fq)(e.palette.grey[900],.72)},"&:hover":{bgcolor:function(e){return(0,t.Fq)(e.palette.grey[900],.48)}}},children:(0,c.jsx)(g.Z,{icon:"mingcute:close-line",width:18})}),M=T&&(0,c.jsxs)(c.Fragment,{children:[(0,c.jsx)(o.Z,{sx:{my:3},children:(0,c.jsx)(j,{files:m,thumbnail:Z,onRemove:U})}),(0,c.jsxs)(x.Z,{direction:"row",justifyContent:"flex-end",spacing:1.5,children:[q&&(0,c.jsx)(R.Z,{color:"inherit",variant:"outlined",size:"small",onClick:q,children:"Remove All"}),v&&(0,c.jsx)(R.Z,{size:"small",variant:"contained",onClick:v,startIcon:(0,c.jsx)(g.Z,{icon:"eva:cloud-upload-fill"}),children:"Upload"})]})]});return(0,c.jsxs)(o.Z,{sx:(0,p.Z)({width:1,position:"relative"},C),children:[(0,c.jsxs)(o.Z,(0,p.Z)((0,p.Z)({},D()),{},{sx:(0,p.Z)((0,p.Z)((0,p.Z)((0,p.Z)({p:5,outline:"none",borderRadius:1,cursor:"pointer",overflow:"hidden",position:"relative",bgcolor:function(e){return(0,t.Fq)(e.palette.grey[500],.08)},border:function(e){return"1px dashed ".concat((0,t.Fq)(e.palette.grey[500],.2))},transition:function(e){return e.transitions.create(["opacity","padding"])},"&:hover":{opacity:.72}},P&&{opacity:.72}),r&&{opacity:.48,pointerEvents:"none"}),_&&{color:"error.main",borderColor:"error.main",bgcolor:function(e){return(0,t.Fq)(e.palette.error.main,.08)}}),O&&{padding:"24% 0"}),children:[(0,c.jsx)("input",(0,p.Z)({},A())),O?N:E]})),B,s&&s,(0,c.jsx)(d,{fileRejections:S}),M]})}var q=["placeholder","error","disabled","sx"];function C(e){var r=e.placeholder,n=e.error,i=e.disabled,l=e.sx,a=(0,y.Z)(e,q),s=(0,w.uI)((0,p.Z)({disabled:i},a)),d=s.getRootProps,u=s.getInputProps,h=s.isDragActive,x=s.isDragReject||n;return(0,c.jsxs)(o.Z,(0,p.Z)((0,p.Z)({},d()),{},{sx:(0,p.Z)((0,p.Z)((0,p.Z)((0,p.Z)({m:.5,width:64,height:64,flexShrink:0,display:"flex",borderRadius:1,cursor:"pointer",alignItems:"center",color:"text.disabled",justifyContent:"center",bgcolor:function(e){return(0,t.Fq)(e.palette.grey[500],.08)},border:function(e){return"dashed 1px ".concat((0,t.Fq)(e.palette.grey[500],.16))}},h&&{opacity:.72}),i&&{opacity:.48,pointerEvents:"none"}),x&&{color:"error.main",borderColor:"error.main",bgcolor:function(e){return(0,t.Fq)(e.palette.error.main,.08)}}),{},{"&:hover":{opacity:.72}},l),children:[(0,c.jsx)("input",(0,p.Z)({},u())),r||(0,c.jsx)(g.Z,{icon:"eva:cloud-upload-fill",width:28})]}))}var I=["error","file","disabled","helperText","sx"];function L(e){var r=e.error,n=e.file,i=e.disabled,a=e.helperText,s=e.sx,u=(0,y.Z)(e,I),h=(0,w.uI)((0,p.Z)({multiple:!1,disabled:i,accept:{"image/*":[]}},u)),f=h.getRootProps,m=h.getInputProps,Z=h.isDragActive,j=h.isDragReject,b=h.fileRejections,R=!!n,k=j||!!r,F="string"===typeof n?n:null===n||void 0===n?void 0:n.preview,U=R&&(0,c.jsx)(v.Z,{alt:"avatar",src:F,sx:{width:1,height:1,borderRadius:"50%"}}),q=(0,c.jsxs)(x.Z,{alignItems:"center",justifyContent:"center",spacing:1,className:"upload-placeholder",sx:(0,p.Z)((0,p.Z)({top:0,left:0,width:1,height:1,zIndex:9,borderRadius:"50%",position:"absolute",color:"text.disabled",bgcolor:function(e){return(0,t.Fq)(e.palette.grey[500],.08)},transition:function(e){return e.transitions.create(["opacity"],{duration:e.transitions.duration.shorter})},"&:hover":{opacity:.72}},k&&{color:"error.main",bgcolor:function(e){return(0,t.Fq)(e.palette.error.main,.08)}}),R&&{zIndex:9,opacity:0,color:"common.white",bgcolor:function(e){return(0,t.Fq)(e.palette.grey[900],.64)}}),children:[(0,c.jsx)(g.Z,{icon:"solar:camera-add-bold",width:32}),(0,c.jsx)(l.Z,{variant:"caption",children:n?"Update photo":"Upload photo"})]}),C=(0,c.jsxs)(o.Z,{sx:{width:1,height:1,overflow:"hidden",borderRadius:"50%",position:"relative"},children:[U,q]});return(0,c.jsxs)(c.Fragment,{children:[(0,c.jsxs)(o.Z,(0,p.Z)((0,p.Z)({},f()),{},{sx:(0,p.Z)((0,p.Z)((0,p.Z)((0,p.Z)((0,p.Z)({p:1,m:"auto",width:144,height:144,cursor:"pointer",overflow:"hidden",borderRadius:"50%",border:function(e){return"1px dashed ".concat((0,t.Fq)(e.palette.grey[500],.2))}},Z&&{opacity:.72}),i&&{opacity:.48,pointerEvents:"none"}),k&&{borderColor:"error.main"}),R&&(0,p.Z)((0,p.Z)({},k&&{bgcolor:function(e){return(0,t.Fq)(e.palette.error.main,.08)}}),{},{"&:hover .upload-placeholder":{opacity:1}})),s),children:[(0,c.jsx)("input",(0,p.Z)({},m())),C]})),a&&a,(0,c.jsx)(d,{fileRejections:b})]})}},53580:function(e,r,n){n.r(r),n.d(r,{default:function(){return R}});var t=n(6907),o=n(93433),i=n(29439),l=n(72791),a=n(64554),s=n(57621),c=n(36314),d=n(89891),p=n(89164),u=n(9585),h=n(4567),x=n(39504),f=n(25801),m=n(38072),g=n(17070),Z=n(22459),j=n(27216),v=n(50933),b=n(96972),y=n(80184);function w(){var e=(0,Z.k)(),r=(0,l.useState)([]),n=(0,i.Z)(r,2),t=n[0],w=n[1],R=(0,l.useState)(null),k=(0,i.Z)(R,2),F=k[0],U=k[1],q=(0,l.useState)(null),C=(0,i.Z)(q,2),I=C[0],L=C[1],D=(0,l.useCallback)((function(e){var r=e[0];r&&U(Object.assign(r,{preview:URL.createObjectURL(r)}))}),[]),A=(0,l.useCallback)((function(e){var r=e[0];r&&L(Object.assign(r,{preview:URL.createObjectURL(r)}))}),[]),P=(0,l.useCallback)((function(e){w([].concat((0,o.Z)(t),(0,o.Z)(e.map((function(e){return Object.assign(e,{preview:URL.createObjectURL(e)})})))))}),[t]);return(0,y.jsxs)(y.Fragment,{children:[(0,y.jsx)(a.Z,{sx:{py:5,bgcolor:function(e){return"light"===e.palette.mode?"grey.200":"grey.800"}},children:(0,y.jsx)(p.Z,{children:(0,y.jsx)(v.Z,{heading:"Upload",links:[{name:"Components",href:m.H.components},{name:"Upload"}],moreLink:["https://react-dropzone.js.org/#section-basic-example"]})})}),(0,y.jsx)(p.Z,{sx:{my:10},children:(0,y.jsxs)(c.Z,{spacing:5,children:[(0,y.jsxs)(s.Z,{children:[(0,y.jsx)(u.Z,{title:"Upload Multi File",action:(0,y.jsx)(f.Z,{control:(0,y.jsx)(d.Z,{checked:e.value,onClick:e.onToggle}),label:"Show Thumbnail"})}),(0,y.jsx)(x.Z,{children:(0,y.jsx)(b.gq,{multiple:!0,thumbnail:e.value,files:t,onDrop:P,onRemove:function(e){var r=t.filter((function(r){return r!==e}));w(r)},onRemoveAll:function(){w([])},onUpload:function(){return console.info("ON UPLOAD")}})})]}),(0,y.jsxs)(s.Z,{children:[(0,y.jsx)(u.Z,{title:"Upload Single File"}),(0,y.jsx)(x.Z,{children:(0,y.jsx)(b.gq,{file:F,onDrop:D,onDelete:function(){return U(null)}})})]}),(0,y.jsxs)(s.Z,{children:[(0,y.jsx)(u.Z,{title:"Upload Avatar"}),(0,y.jsx)(x.Z,{children:(0,y.jsx)(b.ab,{file:I,onDrop:A,helperText:(0,y.jsxs)(h.Z,{variant:"caption",sx:{mt:3,mx:"auto",display:"block",textAlign:"center",color:"text.disabled"},children:["Allowed *.jpeg, *.jpg, *.png, *.gif",(0,y.jsx)("br",{})," max size of ",(0,g.oe)(3145728)]})})})]}),(0,y.jsxs)(s.Z,{children:[(0,y.jsx)(u.Z,{title:"Upload Box"}),(0,y.jsx)(x.Z,{children:(0,y.jsxs)(c.Z,{direction:"row",spacing:2,children:[(0,y.jsx)(b.un,{}),(0,y.jsx)(b.un,{placeholder:(0,y.jsxs)(c.Z,{spacing:.5,alignItems:"center",children:[(0,y.jsx)(j.Z,{icon:"eva:cloud-upload-fill",width:40}),(0,y.jsx)(h.Z,{variant:"body2",children:"Upload file"})]}),sx:{flexGrow:1,height:"auto",py:2.5,mb:3}})]})})]})]})})]})}function R(){return(0,y.jsxs)(y.Fragment,{children:[(0,y.jsx)(t.ql,{children:(0,y.jsx)("title",{children:" Extra: Upload"})}),(0,y.jsx)(w,{})]})}},17070:function(e,r,n){n.d(r,{FK:function(){return i},e_:function(){return l},f2:function(){return a},oe:function(){return c},v1:function(){return s}});var t=n(26098),o=n.n(t);function i(e){return o()(e).format()}function l(e){return d(e?o()(e).format("SAR0,0.00"):"",".00")}function a(e){return d(e?o()(Number(e)/100).format("0.0%"):"",".0")}function s(e){return d(e?o()(e).format("0.00a"):"",".00")}function c(e){return d(e?o()(e).format("0.0 b"):"",".0")}function d(e){var r=arguments.length>1&&void 0!==arguments[1]?arguments[1]:".00";return e.includes(r)?e.replace(r,""):e}}}]);
//# sourceMappingURL=3580.70249e4d.chunk.js.map