"use strict";(self.webpackChunk_minimal_kit_cra_js=self.webpackChunk_minimal_kit_cra_js||[]).push([[1561],{6077:function(e,t,r){r.d(t,{cU:function(){return P},i5:function(){return v},A0:function(){return u},ZP:function(){return L},vr:function(){return T}});var n=r(95717),o=r(1413),i=r(66934),s=r(36314),a=r(64554),l=r(80184),c=(0,i.ZP)(a.Z,{shouldForwardProp:function(e){return"rounded"!==e}})((function(e){var t=e.rounded;return{zIndex:9,margin:0,padding:0,display:"flex",alignItems:"center",justifyContent:"center",color:e.theme.palette.primary.main,"& li":{width:18,height:18,opacity:.32,display:"flex",alignItems:"center",justifyContent:"center",cursor:"pointer","&.slick-active":(0,o.Z)({opacity:1},t&&{"& span":{width:16,borderRadius:6}})}}})),d=(0,i.ZP)("span")((function(e){var t=e.theme;return{width:8,height:8,borderRadius:"50%",transition:t.transitions.create(["width"],{easing:t.transitions.easing.sharp,duration:t.transitions.duration.short})}}));function u(e){var t=(null===e||void 0===e?void 0:e.rounded)||!1,r=null===e||void 0===e?void 0:e.sx;return{appendDots:function(n){return(0,l.jsx)(l.Fragment,{children:(0,l.jsx)(c,(0,o.Z)((0,o.Z)({component:"ul",rounded:t,sx:(0,o.Z)({},r)},e),{},{children:n}))})},customPaging:function(){return(0,l.jsx)(s.Z,{component:"div",alignItems:"center",justifyContent:"center",sx:{width:1,height:1},children:(0,l.jsx)(d,{sx:{bgcolor:"currentColor"}})})}}}var p=r(45987),h=r(12065),x=r(13967),f=r(13400),Z=r(27216);function g(e){var t=e.icon,r=void 0===t?"eva:arrow-ios-forward-fill":t,n=e.isRTL;return(0,l.jsx)(Z.Z,{icon:r,sx:(0,o.Z)({transform:" scaleX(-1)"},n&&{transform:" scaleX(1)"})})}function m(e){var t=e.icon,r=void 0===t?"eva:arrow-ios-forward-fill":t,n=e.isRTL;return(0,l.jsx)(Z.Z,{icon:r,sx:(0,o.Z)({},n&&{transform:" scaleX(-1)"})})}var b=["shape","filled","icon","onNext","onPrev","children","leftButtonProps","rightButtonProps","sx"],y=(0,i.ZP)(f.Z,{shouldForwardProp:function(e){return"filled"!==e&&"hasChild"!==e&&"shape"!==e}})((function(e){var t=e.filled,r=e.shape,n=e.hasChild,i=e.theme;return(0,o.Z)((0,o.Z)((0,o.Z)((0,o.Z)({color:"inherit",transition:i.transitions.create("all",{duration:i.transitions.duration.shorter})},"rounded"===r&&{borderRadius:1.5*i.shape.borderRadius}),!t&&{opacity:.48,"&:hover":{opacity:1}}),t&&{color:(0,h.Fq)(i.palette.common.white,.8),backgroundColor:(0,h.Fq)(i.palette.grey[900],.48),"&:hover":{color:i.palette.common.white,backgroundColor:i.palette.grey[900]}}),n&&{zIndex:9,top:"50%",position:"absolute",marginTop:i.spacing(-2.5)})}));function v(e){var t=e.shape,r=void 0===t?"circular":t,n=e.filled,i=void 0!==n&&n,a=e.icon,c=e.onNext,d=e.onPrev,u=e.children,h=e.leftButtonProps,f=e.rightButtonProps,Z=e.sx,v=(0,p.Z)(e,b),j="rtl"===(0,x.Z)().direction;return!!u?(0,l.jsxs)(s.Z,(0,o.Z)((0,o.Z)({sx:Z},v),{},{children:[c&&(0,l.jsx)(y,(0,o.Z)((0,o.Z)({filled:i,shape:r,hasChild:!!u,onClick:d},h),{},{sx:(0,o.Z)({left:16},null===h||void 0===h?void 0:h.sx),children:(0,l.jsx)(g,{icon:a,isRTL:j})})),u,d&&(0,l.jsx)(y,(0,o.Z)((0,o.Z)({filled:i,shape:r,hasChild:!!u,onClick:c},f),{},{sx:(0,o.Z)({right:16},null===f||void 0===f?void 0:f.sx),children:(0,l.jsx)(m,{icon:a,isRTL:j})}))]})):(0,l.jsxs)(s.Z,(0,o.Z)((0,o.Z)({direction:"row",alignItems:"center",display:"inline-flex",sx:Z},v),{},{children:[(0,l.jsx)(y,(0,o.Z)((0,o.Z)({filled:i,shape:r,onClick:d},h),{},{children:(0,l.jsx)(g,{icon:a,isRTL:j})})),(0,l.jsx)(y,(0,o.Z)((0,o.Z)({filled:i,shape:r,onClick:c},f),{},{children:(0,l.jsx)(m,{icon:a,isRTL:j})}))]}))}var j=r(4567),w=r(74744),k=["index","total","onNext","onPrev","icon","sx"],C=(0,i.ZP)(a.Z)((function(e){var t=e.theme;return(0,o.Z)((0,o.Z)({},(0,w.Ls)({opacity:.48,color:t.palette.grey[900]})),{},{zIndex:9,display:"inline-flex",alignItems:"center",position:"absolute",bottom:t.spacing(2),right:t.spacing(2),padding:t.spacing(.25),color:t.palette.common.white,borderRadius:t.shape.borderRadius})})),S=(0,i.ZP)(f.Z)({width:28,height:28,padding:0,opacity:.48,"&:hover":{opacity:1}});function P(e){var t=e.index,r=e.total,n=e.onNext,i=e.onPrev,s=e.icon,a=e.sx,c=(0,p.Z)(e,k),d="rtl"===(0,x.Z)().direction;return(0,l.jsxs)(C,(0,o.Z)((0,o.Z)({sx:a},c),{},{children:[(0,l.jsx)(S,{color:"inherit",onClick:i,children:(0,l.jsx)(g,{icon:s,isRTL:d})}),(0,l.jsxs)(j.Z,{variant:"subtitle2",component:"span",sx:{mx:.25},children:[t+1,"/",r]}),(0,l.jsx)(S,{color:"inherit",onClick:n,children:(0,l.jsx)(m,{icon:s,isRTL:d})})]}))}var R=r(29439),I=r(72791);function T(e){var t=(0,x.Z)(),r=(0,I.useRef)(null),n=(0,I.useState)((null===e||void 0===e?void 0:e.initialSlide)||0),i=(0,R.Z)(n,2),s=i[0],a=i[1],l=(0,I.useState)(void 0),c=(0,R.Z)(l,2),d=c[0],u=c[1],p="rtl"===t.direction,h=(0,o.Z)((0,o.Z)({arrows:!1,dots:!(null===e||void 0===e||!e.customPaging),rtl:p,beforeChange:function(e,t){return a(t)}},e),{},{fade:!(null===e||void 0===e||!e.fade||p)}),f=(0,I.useCallback)((function(){r.current&&u(r.current)}),[]),Z=(0,I.useCallback)((function(){r.current&&r.current.slickPrev()}),[]),g=(0,I.useCallback)((function(){r.current&&r.current.slickNext()}),[]),m=(0,I.useCallback)((function(e){r.current&&r.current.slickGoTo(e)}),[]);return{nav:d,carouselRef:r,currentIndex:s,carouselSettings:h,onPrev:Z,onNext:g,onTogo:m,onSetNav:f,setNav:u,setCurrentIndex:a}}var L=n.Z},3174:function(e,t,r){r.d(t,{Z:function(){return x},Q:function(){return a}});var n=r(79286),o=r.n(n),i=r(13967),s=r(12065);function a(e){var t=(0,i.Z)(),r={show:!0,label:"Total",color:t.palette.text.secondary,fontSize:t.typography.subtitle2.fontSize,fontWeight:t.typography.subtitle2.fontWeight,lineHeight:t.typography.subtitle2.lineHeight},n={offsetY:8,color:t.palette.text.primary,fontSize:t.typography.h3.fontSize,fontWeight:t.typography.h3.fontWeight,lineHeight:t.typography.h3.lineHeight},a={colors:[t.palette.primary.main,t.palette.warning.main,t.palette.info.main,t.palette.error.main,t.palette.success.main,t.palette.warning.dark,t.palette.success.darker,t.palette.info.dark,t.palette.info.darker],chart:{toolbar:{show:!1},zoom:{enabled:!1},foreColor:t.palette.text.disabled,fontFamily:t.typography.fontFamily},states:{hover:{filter:{type:"lighten",value:.04}},active:{filter:{type:"darken",value:.88}}},fill:{opacity:1,gradient:{type:"vertical",shadeIntensity:0,opacityFrom:.4,opacityTo:0,stops:[0,100]}},dataLabels:{enabled:!1},stroke:{width:3,curve:"smooth",lineCap:"round"},grid:{strokeDashArray:3,borderColor:t.palette.divider,xaxis:{lines:{show:!1}}},xaxis:{axisBorder:{show:!1},axisTicks:{show:!1}},markers:{size:0,strokeColors:t.palette.background.paper},tooltip:{theme:!1,x:{show:!0}},legend:{show:!0,fontSize:13,position:"top",horizontalAlign:"right",markers:{radius:12},fontWeight:500,itemMargin:{horizontal:8},labels:{colors:t.palette.text.primary}},plotOptions:{bar:{borderRadius:4,columnWidth:"28%",borderRadiusApplication:"end",borderRadiusWhenStacked:"last"},pie:{donut:{labels:{show:!0,value:n,total:r}}},radialBar:{track:{strokeWidth:"100%",background:(0,s.Fq)(t.palette.grey[500],.16)},dataLabels:{value:n,total:r}},radar:{polygons:{fill:{colors:["transparent"]},strokeColors:t.palette.divider,connectorColors:t.palette.divider}},polarArea:{rings:{strokeColor:t.palette.divider},spokes:{connectorColors:t.palette.divider}}},responsive:[{breakpoint:t.breakpoints.values.sm,options:{plotOptions:{bar:{columnWidth:"40%"}}}},{breakpoint:t.breakpoints.values.md,options:{plotOptions:{bar:{columnWidth:"32%"}}}}]};return o()(a,e)}var l=r(1413),c=r(72791),d=r(13496),u=r(66934),p=r(74744),h=(0,u.ZP)(d.Z)((function(e){var t=e.theme;return{"& .apexcharts-canvas":{"& .apexcharts-tooltip":(0,l.Z)((0,l.Z)({},(0,p.Ls)({color:t.palette.background.default})),{},{color:t.palette.text.primary,boxShadow:t.customShadows.dropdown,borderRadius:1.25*t.shape.borderRadius,"&.apexcharts-theme-light":(0,l.Z)({borderColor:"transparent"},(0,p.Ls)({color:t.palette.background.default}))}),"& .apexcharts-xaxistooltip":(0,l.Z)((0,l.Z)({},(0,p.Ls)({color:t.palette.background.default})),{},{borderColor:"transparent",color:t.palette.text.primary,boxShadow:t.customShadows.dropdown,borderRadius:1.25*t.shape.borderRadius,"&:before":{borderBottomColor:(0,s.Fq)(t.palette.grey[500],.24)},"&:after":{borderBottomColor:(0,s.Fq)(t.palette.background.default,.8)}}),"& .apexcharts-tooltip-title":{textAlign:"center",fontWeight:t.typography.fontWeightBold,backgroundColor:(0,s.Fq)(t.palette.grey[500],.08),color:t.palette.text["light"===t.palette.mode?"secondary":"primary"]},"& .apexcharts-legend":{padding:0},"& .apexcharts-legend-series":{display:"inline-flex !important",alignItems:"center"},"& .apexcharts-legend-marker":{marginRight:8},"& .apexcharts-legend-text":{lineHeight:"18px",textTransform:"capitalize"}}}})),x=(0,c.memo)(h)},11633:function(e,t,r){r.d(t,{Z:function(){return u}});var n=r(1413),o=r(45987),i=r(12065),s=r(64554),a=r(4567),l=r(36314),c=r(80184),d=["title","imgUrl","action","filled","description","sx"];function u(e){var t=e.title,r=e.imgUrl,u=e.action,p=e.filled,h=e.description,x=e.sx,f=(0,o.Z)(e,d);return(0,c.jsxs)(l.Z,(0,n.Z)((0,n.Z)({flexGrow:1,alignItems:"center",justifyContent:"center",sx:(0,n.Z)((0,n.Z)({px:3,height:1},p&&{borderRadius:2,bgcolor:function(e){return(0,i.Fq)(e.palette.grey[500],.04)},border:function(e){return"dashed 1px ".concat((0,i.Fq)(e.palette.grey[500],.08))}}),x)},f),{},{children:[(0,c.jsx)(s.Z,{component:"img",alt:"empty content",src:r||"/assets/icons/empty/ic_content.svg",sx:{width:1,maxWidth:160}}),t&&(0,c.jsx)(a.Z,{variant:"h6",component:"span",sx:{mt:1,color:"text.disabled",textAlign:"center"},children:t}),h&&(0,c.jsx)(a.Z,{variant:"caption",sx:{mt:1,color:"text.disabled",textAlign:"center"},children:h}),u&&u]}))}},32471:function(e,t,r){r.d(t,{Z:function(){return h}});var n=r(1413),o=r(45987),i=r(72791),s=r(87087),a=r(13967),l=r(12065),c=r(64554);function d(){return{"4/3":"calc(100% / 4 * 3)","3/4":"calc(100% / 3 * 4)","6/4":"calc(100% / 6 * 4)","4/6":"calc(100% / 4 * 6)","16/9":"calc(100% / 16 * 9)","9/16":"calc(100% / 9 * 16)","21/9":"calc(100% / 21 * 9)","9/21":"calc(100% / 9 * 21)","1/1":"100%"}[arguments.length>0&&void 0!==arguments[0]?arguments[0]:"1/1"]}var u=r(80184),p=["ratio","overlay","disabledEffect","alt","src","afterLoad","delayTime","threshold","beforeLoad","delayMethod","placeholder","wrapperProps","scrollPosition","effect","visibleByDefault","wrapperClassName","useIntersectionObserver","sx"],h=(0,i.forwardRef)((function(e,t){var r=e.ratio,i=e.overlay,h=e.disabledEffect,x=void 0!==h&&h,f=e.alt,Z=e.src,g=e.afterLoad,m=e.delayTime,b=e.threshold,y=e.beforeLoad,v=e.delayMethod,j=e.placeholder,w=e.wrapperProps,k=e.scrollPosition,C=e.effect,S=void 0===C?"blur":C,P=e.visibleByDefault,R=e.wrapperClassName,I=e.useIntersectionObserver,T=e.sx,L=(0,o.Z)(e,p),D=(0,a.Z)(),F=!!i&&{"&:before":{content:"''",top:0,left:0,width:1,height:1,zIndex:1,position:"absolute",background:i||(0,l.Fq)(D.palette.grey[900],.48)}},z=(0,u.jsx)(c.Z,{component:s.LazyLoadImage,alt:f,src:Z,afterLoad:g,delayTime:m,threshold:b,beforeLoad:y,delayMethod:v,placeholder:j,wrapperProps:w,scrollPosition:k,visibleByDefault:P,effect:x?void 0:S,useIntersectionObserver:I,wrapperClassName:R||"component-image-wrapper",placeholderSrc:x?"/assets/transparent.png":"/assets/placeholder.svg",sx:(0,n.Z)({width:1,height:1,objectFit:"cover",verticalAlign:"bottom"},!!r&&{top:0,left:0,position:"absolute"})});return(0,u.jsx)(c.Z,(0,n.Z)((0,n.Z)({ref:t,component:"span",className:"component-image",sx:(0,n.Z)((0,n.Z)((0,n.Z)({overflow:"hidden",position:"relative",verticalAlign:"bottom",display:"inline-block"},!!r&&{width:1}),{},{"& span.component-image-wrapper":(0,n.Z)({width:1,height:1,verticalAlign:"bottom",backgroundSize:"cover !important"},!!r&&{pt:d(r)})},F),T)},L),{},{children:z}))}))},1382:function(e,t,r){function n(e,t,r){return e?Math.max(0,(1+e)*t-r):0}function o(e,t,r){return null===e[r]?1:null===t[r]||t[r]<e[r]?-1:t[r]>e[r]?1:0}function i(e,t){return"desc"===e?function(e,r){return o(e,r,t)}:function(e,r){return-o(e,r,t)}}r.d(t,{$W:function(){return y},K:function(){return S},et:function(){return f},S_:function(){return A},Z4:function(){return T},hM:function(){return b},fQ:function(){return n},sQ:function(){return i},x6:function(){return c}});var s=r(93433),a=r(29439),l=r(72791);function c(e){var t=(0,l.useState)(!(null===e||void 0===e||!e.defaultDense)),r=(0,a.Z)(t,2),n=r[0],o=r[1],i=(0,l.useState)((null===e||void 0===e?void 0:e.defaultCurrentPage)||0),c=(0,a.Z)(i,2),d=c[0],u=c[1],p=(0,l.useState)((null===e||void 0===e?void 0:e.defaultOrderBy)||"name"),h=(0,a.Z)(p,2),x=h[0],f=h[1],Z=(0,l.useState)((null===e||void 0===e?void 0:e.defaultRowsPerPage)||5),g=(0,a.Z)(Z,2),m=g[0],b=g[1],y=(0,l.useState)((null===e||void 0===e?void 0:e.defaultOrder)||"asc"),v=(0,a.Z)(y,2),j=v[0],w=v[1],k=(0,l.useState)((null===e||void 0===e?void 0:e.defaultSelected)||[]),C=(0,a.Z)(k,2),S=C[0],P=C[1],R=(0,l.useCallback)((function(e){""!==e&&(w(x===e&&"asc"===j?"desc":"asc"),f(e))}),[j,x]),I=(0,l.useCallback)((function(e){var t=S.includes(e)?S.filter((function(t){return t!==e})):[].concat((0,s.Z)(S),[e]);P(t)}),[S]),T=(0,l.useCallback)((function(e){u(0),b(parseInt(e.target.value,10))}),[]),L=(0,l.useCallback)((function(e){o(e.target.checked)}),[]),D=(0,l.useCallback)((function(e,t){P(e?t:[])}),[]),F=(0,l.useCallback)((function(e,t){u(t)}),[]),z=(0,l.useCallback)((function(){u(0)}),[]),A=(0,l.useCallback)((function(e){P([]),d&&e<2&&u(d-1)}),[d]),B=(0,l.useCallback)((function(e){var t=e.totalRows,r=e.totalRowsInPage,n=e.totalRowsFiltered,o=S.length;if(P([]),d)if(o===r)u(d-1);else if(o===n)u(0);else if(o>r){var i=Math.ceil((t-o)/m)-1;u(i)}}),[d,m,S.length]);return{dense:n,order:j,page:d,orderBy:x,rowsPerPage:m,selected:S,onSelectRow:I,onSelectAllRows:D,onSort:R,onChangePage:F,onChangeDense:L,onResetPage:z,onChangeRowsPerPage:T,onUpdatePageDeleteRow:A,onUpdatePageDeleteRows:B,setPage:u,setDense:o,setOrder:w,setOrderBy:f,setSelected:P,setRowsPerPage:b}}var d=r(1413),u=r(9195),p=r(68745),h=r(11633),x=r(80184);function f(e){var t=e.notFound,r=e.sx;return(0,x.jsx)(u.Z,{children:t?(0,x.jsx)(p.Z,{colSpan:12,children:(0,x.jsx)(h.Z,{filled:!0,title:"No Data",sx:(0,d.Z)({py:10},r)})}):(0,x.jsx)(p.Z,{colSpan:12,sx:{p:0}})})}var Z=r(36459),g=r(36314),m=r(47047);function b(e){var t=Object.assign({},((0,Z.Z)(e),e));return(0,x.jsx)(u.Z,(0,d.Z)((0,d.Z)({},t),{},{children:(0,x.jsx)(p.Z,{colSpan:12,children:(0,x.jsxs)(g.Z,{spacing:3,direction:"row",alignItems:"center",children:[(0,x.jsx)(m.Z,{sx:{borderRadius:1.5,width:48,height:48,flexShrink:0}}),(0,x.jsx)(m.Z,{sx:{width:1,height:12}}),(0,x.jsx)(m.Z,{sx:{width:180,height:12}}),(0,x.jsx)(m.Z,{sx:{width:160,height:12}}),(0,x.jsx)(m.Z,{sx:{width:140,height:12}}),(0,x.jsx)(m.Z,{sx:{width:120,height:12}})]})})}))}function y(e){var t=e.emptyRows,r=e.height;return t?(0,x.jsx)(u.Z,{sx:(0,d.Z)({},r&&{height:r*t}),children:(0,x.jsx)(p.Z,{colSpan:9})}):null}var v=r(64554),j=r(13034),w=r(56890),k=r(80720),C={border:0,margin:-1,padding:0,width:"1px",height:"1px",overflow:"hidden",position:"absolute",whiteSpace:"nowrap",clip:"rect(0 0 0 0)"};function S(e){var t=e.order,r=e.orderBy,n=e.rowCount,o=void 0===n?0:n,i=e.headLabel,s=e.numSelected,a=void 0===s?0:s,l=e.onSort,c=e.onSelectAllRows,h=e.sx;return(0,x.jsx)(w.Z,{sx:h,children:(0,x.jsxs)(u.Z,{children:[c&&(0,x.jsx)(p.Z,{padding:"checkbox",children:(0,x.jsx)(j.Z,{indeterminate:!!a&&a<o,checked:!!o&&a===o,onChange:function(e){return c(e.target.checked)}})}),i.map((function(e){return(0,x.jsx)(p.Z,{align:e.align||"left",sortDirection:r===e.id&&t,sx:{width:e.width,minWidth:e.minWidth},children:l?(0,x.jsxs)(k.Z,{hideSortIcon:!0,active:r===e.id,direction:r===e.id?t:"asc",onClick:function(){return l(e.id)},children:[e.label,r===e.id?(0,x.jsx)(v.Z,{sx:(0,d.Z)({},C),children:"desc"===t?"sorted descending":"sorted ascending"}):null]}):e.label},e.id)}))]})})}var P=r(45987),R=r(4567),I=["dense","action","rowCount","numSelected","onSelectAllRows","sx"];function T(e){var t=e.dense,r=e.action,n=e.rowCount,o=e.numSelected,i=e.onSelectAllRows,s=e.sx,a=(0,P.Z)(e,I);return o?(0,x.jsxs)(g.Z,(0,d.Z)((0,d.Z)({direction:"row",alignItems:"center",sx:(0,d.Z)((0,d.Z)({pl:1,pr:2,top:0,left:0,width:1,zIndex:9,height:58,position:"absolute",bgcolor:"primary.lighter"},t&&{height:38}),s)},a),{},{children:[(0,x.jsx)(j.Z,{indeterminate:!!o&&o<n,checked:!!n&&o===n,onChange:function(e){return i(e.target.checked)}}),(0,x.jsxs)(R.Z,{variant:"subtitle2",sx:(0,d.Z)({ml:2,flexGrow:1,color:"primary.main"},t&&{ml:3}),children:[o," selected"]}),r&&r]})):null}var L=r(89891),D=r(25801),F=r(5446),z=["dense","onChangeDense","rowsPerPageOptions","sx"];function A(e){var t=e.dense,r=e.onChangeDense,n=e.rowsPerPageOptions,o=void 0===n?[5,10,25]:n,i=e.sx,s=(0,P.Z)(e,z);return(0,x.jsxs)(v.Z,{sx:(0,d.Z)({position:"relative"},i),children:[(0,x.jsx)(F.Z,(0,d.Z)((0,d.Z)({rowsPerPageOptions:o,component:"div"},s),{},{sx:{borderTopColor:"transparent"}})),r&&(0,x.jsx)(D.Z,{label:"Dense",control:(0,x.jsx)(L.Z,{checked:t,onChange:r}),sx:{pl:2,py:1.5,top:0,position:{sm:"absolute"}}})]})}},81561:function(e,t,r){r.r(t),r.d(t,{default:function(){return je}});var n=r(6907),o=r(13967),i=r(89164),s=r(24308),a=r(11908),l=r(3597),c=r(60720),d=r(1413),u=r(45987),p=r(12065),h=r(36314),x=r(64554),f=r(9585),Z=r(57621),g=r(40986),m=r(17070),b=r(80184),y=["title","subheader","data"];function v(e){var t=e.title,r=e.subheader,n=e.data,o=(0,u.Z)(e,y);return(0,b.jsxs)(Z.Z,(0,d.Z)((0,d.Z)({},o),{},{children:[(0,b.jsx)(f.Z,{title:t,subheader:r}),(0,b.jsx)(h.Z,{spacing:3,sx:{p:3},children:n.map((function(e){return(0,b.jsxs)(h.Z,{children:[(0,b.jsxs)(h.Z,{direction:"row",alignItems:"center",justifyContent:"space-between",sx:{mb:1},children:[(0,b.jsx)(x.Z,{sx:{typography:"overline"},children:e.status}),(0,b.jsx)(x.Z,{sx:{typography:"subtitle1"},children:(0,m.v1)(e.quantity)})]}),(0,b.jsx)(g.Z,{variant:"determinate",value:e.value,color:("Pending"===e.status?"warning":"Canceled"===e.status&&"error")||"success",sx:{height:8,bgcolor:function(e){return(0,p.Fq)(e.palette.grey[500],.16)}}})]},e.status)}))})]}))}var j=r(27938),w=r(60220),k=r(49900),C=r(9145),S=r(80160),P=r(32471),R=r(27216),I=r(6077),T=["title","subheader","list","sx"];function L(e){var t=e.title,r=e.subheader,n=e.list,i=e.sx,s=(0,u.Z)(e,T),a=(0,o.Z)(),l=(0,I.vr)({slidesToShow:4,responsive:[{breakpoint:a.breakpoints.values.lg,settings:{slidesToShow:3}},{breakpoint:a.breakpoints.values.md,settings:{slidesToShow:2}},{breakpoint:a.breakpoints.values.sm,settings:{slidesToShow:1}}]});return(0,b.jsxs)(x.Z,(0,d.Z)((0,d.Z)({sx:(0,d.Z)({py:2},i)},s),{},{children:[(0,b.jsx)(f.Z,{title:t,subheader:r,action:(0,b.jsx)(I.i5,{onNext:l.onNext,onPrev:l.onPrev}),sx:{p:0,mb:3}}),(0,b.jsx)(I.ZP,(0,d.Z)((0,d.Z)({ref:l.carouselRef},l.carouselSettings),{},{children:n.map((function(e){return(0,b.jsx)(D,{item:e},e.id)}))}))]}))}function D(e){var t=e.item,r=t.avatarUrl,n=t.name,o=t.duration,i=t.bookedAt,s=t.guests,a=t.coverUrl,l=t.price,c=t.isHot;return(0,b.jsxs)(j.Z,{sx:{mr:3,borderRadius:2,position:"relative",bgcolor:"background.neutral"},children:[(0,b.jsxs)(h.Z,{spacing:2,sx:{px:2,pb:1,pt:2.5},children:[(0,b.jsxs)(h.Z,{direction:"row",alignItems:"center",spacing:2,children:[(0,b.jsx)(w.Z,{alt:n,src:r}),(0,b.jsx)(k.Z,{primary:n,secondary:(0,C.zM)(i),secondaryTypographyProps:{mt:.5,component:"span",typography:"caption",color:"text.disabled"}})]}),(0,b.jsxs)(h.Z,{spacing:3,direction:"row",alignItems:"center",sx:{color:"text.secondary",typography:"caption"},children:[(0,b.jsxs)(h.Z,{direction:"row",alignItems:"center",children:[(0,b.jsx)(R.Z,{icon:"solar:calendar-date-bold",width:16,sx:{mr:.5}}),o]}),(0,b.jsxs)(h.Z,{direction:"row",alignItems:"center",children:[(0,b.jsx)(R.Z,{icon:"solar:users-group-rounded-bold",width:16,sx:{mr:.5}}),s," Guests"]})]})]}),(0,b.jsxs)(S.Z,{variant:"filled",sx:{right:16,zIndex:9,bottom:16,position:"absolute"},children:[c&&"\ud83d\udd25"," $",l]}),(0,b.jsx)(x.Z,{sx:{p:1,position:"relative"},children:(0,b.jsx)(P.Z,{alt:a,src:a,ratio:"1/1",sx:{borderRadius:1.5}})})]})}var F=r(16386),z=r(79836),A=r(5849),B=r(94721),O=r(82626),W=r(9195),N=r(68745),M=r(53382),q=r(13400),_=r(39281),E=r(47974),H=r(1382),U=r(52115),Q=["title","subheader","tableLabels","tableData"];function Y(e){var t=e.title,r=e.subheader,n=e.tableLabels,o=e.tableData,i=(0,u.Z)(e,Q);return(0,b.jsxs)(Z.Z,(0,d.Z)((0,d.Z)({},i),{},{children:[(0,b.jsx)(f.Z,{title:t,subheader:r,sx:{mb:3}}),(0,b.jsx)(_.Z,{sx:{overflow:"unset"},children:(0,b.jsx)(E.Z,{children:(0,b.jsxs)(z.Z,{sx:{minWidth:960},children:[(0,b.jsx)(H.K,{headLabel:n}),(0,b.jsx)(M.Z,{children:o.map((function(e){return(0,b.jsx)(J,{row:e},e.id)}))})]})})}),(0,b.jsx)(B.Z,{sx:{borderStyle:"dashed"}}),(0,b.jsx)(x.Z,{sx:{p:2,textAlign:"right"},children:(0,b.jsx)(A.Z,{size:"small",color:"inherit",endIcon:(0,b.jsx)(R.Z,{icon:"eva:arrow-ios-forward-fill",width:18,sx:{ml:-.5}}),children:"View All"})})]}))}function J(e){var t=e.row,r="light"===(0,o.Z)().palette.mode,n=(0,U.S)();return(0,b.jsxs)(b.Fragment,{children:[(0,b.jsxs)(W.Z,{children:[(0,b.jsxs)(N.Z,{sx:{display:"flex",alignItems:"center"},children:[(0,b.jsx)(w.Z,{variant:"rounded",alt:t.destination.name,src:t.destination.coverUrl,sx:{mr:2,width:48,height:48}}),t.destination.name]}),(0,b.jsx)(N.Z,{children:(0,b.jsx)(k.Z,{primary:t.customer.name,secondary:t.customer.phoneNumber,primaryTypographyProps:{typography:"body2",noWrap:!0},secondaryTypographyProps:{mt:.5,component:"span",typography:"caption"}})}),(0,b.jsx)(N.Z,{children:(0,b.jsx)(k.Z,{primary:(0,F.Z)(new Date(t.checkIn),"dd MMM yyyy"),secondary:(0,F.Z)(new Date(t.checkIn),"p"),primaryTypographyProps:{typography:"body2",noWrap:!0},secondaryTypographyProps:{mt:.5,component:"span",typography:"caption"}})}),(0,b.jsx)(N.Z,{children:(0,b.jsx)(k.Z,{primary:(0,F.Z)(new Date(t.checkOut),"dd MMM yyyy"),secondary:(0,F.Z)(new Date(t.checkOut),"p"),primaryTypographyProps:{typography:"body2",noWrap:!0},secondaryTypographyProps:{mt:.5,component:"span",typography:"caption"}})}),(0,b.jsx)(N.Z,{children:(0,b.jsx)(S.Z,{variant:r?"soft":"filled",color:("Paid"===t.status?"success":"Pending"===t.status&&"warning")||"error",children:t.status})}),(0,b.jsx)(N.Z,{align:"right",sx:{pr:1},children:(0,b.jsx)(q.Z,{color:n.open?"inherit":"default",onClick:n.onOpen,children:(0,b.jsx)(R.Z,{icon:"eva:more-vertical-fill"})})})]}),(0,b.jsxs)(U.Z,{open:n.open,onClose:n.onClose,arrow:"right-top",sx:{width:160},children:[(0,b.jsxs)(O.Z,{onClick:function(){n.onClose(),console.info("DOWNLOAD",t.id)},children:[(0,b.jsx)(R.Z,{icon:"eva:cloud-download-fill"}),"Download"]}),(0,b.jsxs)(O.Z,{onClick:function(){n.onClose(),console.info("PRINT",t.id)},children:[(0,b.jsx)(R.Z,{icon:"solar:printer-minimalistic-bold"}),"Print"]}),(0,b.jsxs)(O.Z,{onClick:function(){n.onClose(),console.info("SHARE",t.id)},children:[(0,b.jsx)(R.Z,{icon:"solar:share-bold"}),"Share"]}),(0,b.jsx)(B.Z,{sx:{borderStyle:"dashed"}}),(0,b.jsxs)(O.Z,{onClick:function(){n.onClose(),console.info("DELETE",t.id)},sx:{color:"error.main"},children:[(0,b.jsx)(R.Z,{icon:"solar:trash-bin-trash-bold"}),"Delete"]})]})]})}var K=r(31357),G=r.n(K),$=r(3174),X=["title","subheader","chart"];function V(e){var t=e.title,r=e.subheader,n=e.chart,i=(0,u.Z)(e,X),s=(0,o.Z)(),a=n.colors,l=void 0===a?[s.palette.primary.light,s.palette.primary.main]:a,c=n.series,g=n.options,y=G()(c,"value"),v=c.filter((function(e){return"Sold out"===e.label}))[0].value/y*100,j=(0,$.Q)((0,d.Z)({legend:{show:!1},grid:{padding:{top:-32,bottom:-32}},fill:{type:"gradient",gradient:{colorStops:[{offset:0,color:l[0]},{offset:100,color:l[1]}]}},plotOptions:{radialBar:{hollow:{size:"64%"},dataLabels:{name:{offsetY:-16},value:{offsetY:8},total:{label:"Tours",formatter:function(){return(0,m.FK)(y)}}}}}},g));return(0,b.jsxs)(Z.Z,(0,d.Z)((0,d.Z)({},i),{},{children:[(0,b.jsx)(f.Z,{title:t,subheader:r,sx:{mb:8}}),(0,b.jsx)($.Z,{type:"radialBar",series:[v],options:j,height:310}),(0,b.jsx)(h.Z,{spacing:2,sx:{p:5},children:c.map((function(e){return(0,b.jsxs)(h.Z,{spacing:1,direction:"row",alignItems:"center",sx:{typography:"subtitle2"},children:[(0,b.jsx)(x.Z,{sx:(0,d.Z)({width:16,height:16,bgcolor:(0,p.Fq)(s.palette.grey[500],.16),borderRadius:.75},"Sold out"===e.label&&{bgcolor:l[1]})}),(0,b.jsx)(x.Z,{sx:{color:"text.secondary",flexGrow:1},children:e.label}),e.value," Tours"]},e.label)}))})]}))}var ee=r(29439),te=r(72791),re=r(95080),ne=["title","subheader","chart"];function oe(e){var t=e.title,r=e.subheader,n=e.chart,o=(0,u.Z)(e,ne),i=n.categories,s=n.colors,a=n.series,l=n.options,c=(0,U.S)(),p=(0,te.useState)("Year"),h=(0,ee.Z)(p,2),g=h[0],m=h[1],y=(0,$.Q)((0,d.Z)({colors:s,stroke:{show:!0,width:2,colors:["transparent"]},xaxis:{categories:i},tooltip:{y:{formatter:function(e){return"$".concat(e)}}}},l)),v=(0,te.useCallback)((function(e){c.onClose(),m(e)}),[c]);return(0,b.jsxs)(b.Fragment,{children:[(0,b.jsxs)(Z.Z,(0,d.Z)((0,d.Z)({},o),{},{children:[(0,b.jsx)(f.Z,{title:t,subheader:r,action:(0,b.jsxs)(re.Z,{onClick:c.onOpen,sx:{pl:1,py:.5,pr:.5,borderRadius:1,typography:"subtitle2",bgcolor:"background.neutral"},children:[g,(0,b.jsx)(R.Z,{width:16,icon:c.open?"eva:arrow-ios-upward-fill":"eva:arrow-ios-downward-fill",sx:{ml:.5}})]})}),a.map((function(e){return(0,b.jsx)(x.Z,{sx:{mt:3,mx:3},children:e.type===g&&(0,b.jsx)($.Z,{dir:"ltr",type:"bar",series:e.data,options:y,height:364})},e.type)}))]})),(0,b.jsx)(U.Z,{open:c.open,onClose:c.onClose,sx:{width:140},children:a.map((function(e){return(0,b.jsx)(O.Z,{selected:e.type===g,onClick:function(){return v(e.type)},children:e.type},e.type)}))})]})}var ie=r(74744),se=["title","total","percent","color","chart","sx"];function ae(e){var t=e.title,r=e.total,n=e.percent,i=e.color,s=void 0===i?"primary":i,a=e.chart,l=e.sx,c=(0,u.Z)(e,se),f=(0,o.Z)(),Z=a.colors,g=void 0===Z?[f.palette[s].main,f.palette[s].dark]:Z,y=a.series,v=a.options,j=(0,$.Q)((0,d.Z)({colors:[g[1]],fill:{type:"gradient",gradient:{colorStops:[{offset:0,color:g[0]},{offset:100,color:g[1]}]}},chart:{sparkline:{enabled:!0}},xaxis:{labels:{show:!1}},yaxis:{labels:{show:!1}},stroke:{width:4},legend:{show:!1},grid:{show:!1},tooltip:{marker:{show:!1},y:{formatter:function(e){return(0,m.e_)(e)},title:{formatter:function(){return""}}}}},v));return(0,b.jsxs)(h.Z,(0,d.Z)((0,d.Z)({sx:(0,d.Z)((0,d.Z)({},(0,ie.v3)({direction:"135deg",startColor:(0,p.Fq)(f.palette[s].light,.2),endColor:(0,p.Fq)(f.palette[s].main,.2)})),{},{p:3,borderRadius:2,color:"".concat(s,".darker"),backgroundColor:"common.white"},l)},c),{},{children:[(0,b.jsxs)(h.Z,{direction:"row",justifyContent:"space-between",sx:{mb:3},children:[(0,b.jsxs)("div",{children:[(0,b.jsx)(x.Z,{sx:{mb:1,typography:"subtitle2"},children:t}),(0,b.jsx)(x.Z,{sx:{typography:"h3"},children:(0,m.e_)(r)})]}),(0,b.jsxs)("div",{children:[(0,b.jsxs)(h.Z,{spacing:.5,direction:"row",alignItems:"center",justifyContent:"flex-end",children:[(0,b.jsx)(R.Z,{icon:n>=0?"eva:trending-up-fill":"eva:trending-down-fill"}),(0,b.jsxs)(x.Z,{sx:{typography:"subtitle2"},children:[n>0&&"+",(0,m.f2)(n)]})]}),(0,b.jsx)(x.Z,{sx:{mt:.5,opacity:.8,typography:"body2"},children:"than last month "})]})]}),(0,b.jsx)($.Z,{type:"line",series:[{data:y}],options:j,height:118})]}))}var le=["title","total","icon","sx"];function ce(e){var t=e.title,r=e.total,n=e.icon,o=e.sx,i=(0,u.Z)(e,le);return(0,b.jsxs)(Z.Z,(0,d.Z)((0,d.Z)({sx:(0,d.Z)({display:"flex",alignItems:"center",justifyContent:"space-between",p:2,pl:3},o)},i),{},{children:[(0,b.jsxs)(x.Z,{children:[(0,b.jsx)(x.Z,{sx:{mb:1,typography:"h3"},children:(0,m.v1)(r)}),(0,b.jsx)(x.Z,{sx:{color:"text.secondary",typography:"subtitle2"},children:t})]}),(0,b.jsx)(x.Z,{sx:{width:120,height:120,lineHeight:0,borderRadius:"50%",bgcolor:"background.neutral"},children:n})]}))}var de=r(4567),ue=r(38887),pe=["chart"],he={width:106,height:106};function xe(e){var t=e.chart,r=(0,u.Z)(e,pe),n=(0,o.Z)(),i=(0,ue.F)("up","sm"),s=t.colors,a=void 0===s?[[n.palette.primary.light,n.palette.primary.main],[n.palette.warning.light,n.palette.warning.main]]:s,l=t.series,c=t.options,p=(0,$.Q)((0,d.Z)({fill:{type:"gradient",gradient:{colorStops:[{offset:0,color:a[0][0]},{offset:100,color:a[0][1]}]}},chart:{sparkline:{enabled:!0}},grid:{padding:{top:-9,bottom:-9}},legend:{show:!1},plotOptions:{radialBar:{hollow:{size:"64%"},track:{margin:0},dataLabels:{name:{show:!1},value:{offsetY:6,fontSize:n.typography.subtitle2.fontSize}}}}},c)),x=(0,d.Z)((0,d.Z)({},p),{},{fill:{type:"gradient",gradient:{colorStops:[{offset:0,color:a[1][0]},{offset:100,color:a[1][1]}]}}});return(0,b.jsx)(Z.Z,(0,d.Z)((0,d.Z)({},r),{},{children:(0,b.jsx)(h.Z,{direction:{xs:"column",sm:"row"},divider:(0,b.jsx)(B.Z,{orientation:i?"vertical":"horizontal",flexItem:!0,sx:{borderStyle:"dashed"}}),children:l.map((function(e,t){return(0,b.jsxs)(h.Z,{direction:"row",alignItems:"center",justifyContent:"center",spacing:3,sx:{width:1,py:5},children:[(0,b.jsx)($.Z,(0,d.Z)({type:"radialBar",series:[e.percent],options:1===t?x:p},he)),(0,b.jsxs)("div",{children:[(0,b.jsx)(de.Z,{variant:"h4",sx:{mb:.5},children:(0,m.FK)(e.total)}),(0,b.jsx)(de.Z,{variant:"body2",sx:{opacity:.72},children:e.label})]})]},e.label)}))})}))}var fe=r(85771),Ze=r(56694),ge=["title","subheader","list"];function me(e){var t=e.title,r=e.subheader,n=e.list,o=(0,u.Z)(e,ge),i=(0,I.vr)({adaptiveHeight:!0}),s=n.find((function(e,t){return t===i.currentIndex}));return(0,b.jsxs)(Z.Z,(0,d.Z)((0,d.Z)({},o),{},{children:[(0,b.jsx)(f.Z,{title:t,subheader:r,action:(0,b.jsx)(I.i5,{onNext:i.onNext,onPrev:i.onPrev})}),(0,b.jsx)(I.ZP,(0,d.Z)((0,d.Z)({ref:i.carouselRef},i.carouselSettings),{},{children:n.map((function(e){return(0,b.jsx)(be,{item:e},e.id)}))})),(0,b.jsx)(B.Z,{sx:{borderStyle:"dashed"}}),(0,b.jsxs)(h.Z,{spacing:2,direction:"row",alignItems:"center",sx:{p:3},children:[(0,b.jsx)(A.Z,{fullWidth:!0,color:"error",variant:"soft",onClick:function(){return console.info("ACCEPT",null===s||void 0===s?void 0:s.id)},children:"Reject"}),(0,b.jsx)(A.Z,{fullWidth:!0,color:"inherit",variant:"contained",onClick:function(){return console.info("REJECT",null===s||void 0===s?void 0:s.id)},children:"Accept"})]})]}))}function be(e){var t=e.item,r=t.avatarUrl,n=t.name,o=t.description,i=t.rating,s=t.postedAt,a=t.tags;return(0,b.jsxs)(h.Z,{spacing:2,sx:{p:3,position:"relative"},children:[(0,b.jsxs)(h.Z,{direction:"row",alignItems:"center",spacing:2,children:[(0,b.jsx)(w.Z,{alt:n,src:r,sx:{width:48,height:48}}),(0,b.jsx)(k.Z,{primary:n,secondary:"Posted ".concat((0,C.zM)(s)),secondaryTypographyProps:{component:"span",typography:"caption",mt:.5,color:"text.disabled"}})]}),(0,b.jsx)(Ze.Z,{value:i,size:"small",readOnly:!0,precision:.5}),(0,b.jsx)(de.Z,{variant:"body2",children:o}),(0,b.jsx)(h.Z,{direction:"row",flexWrap:"wrap",spacing:1,children:a.map((function(e){return(0,b.jsx)(fe.Z,{size:"small",variant:"soft",label:e},e)}))})]})}var ye=3;function ve(){var e=(0,o.Z)(),t=(0,c.K$)();return(0,b.jsx)(i.Z,{maxWidth:!t.themeStretch&&"xl",children:(0,b.jsxs)(s.Z,{container:!0,spacing:ye,disableEqualOverflow:!0,children:[(0,b.jsx)(s.Z,{xs:12,md:4,children:(0,b.jsx)(ce,{title:"Total Booking",total:714e3,icon:(0,b.jsx)(l.s,{})})}),(0,b.jsx)(s.Z,{xs:12,md:4,children:(0,b.jsx)(ce,{title:"Sold",total:311e3,icon:(0,b.jsx)(l.EY,{})})}),(0,b.jsx)(s.Z,{xs:12,md:4,children:(0,b.jsx)(ce,{title:"Canceled",total:124e3,icon:(0,b.jsx)(l.Qb,{})})}),(0,b.jsxs)(s.Z,{container:!0,xs:12,children:[(0,b.jsxs)(s.Z,{container:!0,xs:12,md:8,children:[(0,b.jsx)(s.Z,{xs:12,md:6,children:(0,b.jsx)(ae,{title:"Total Incomes",total:18765,percent:2.6,chart:{series:[{x:2016,y:111},{x:2017,y:136},{x:2018,y:76},{x:2019,y:108},{x:2020,y:74},{x:2021,y:54},{x:2022,y:57},{x:2023,y:84}]}})}),(0,b.jsx)(s.Z,{xs:12,md:6,children:(0,b.jsx)(v,{title:"Booked",data:a.JJ})}),(0,b.jsx)(s.Z,{xs:12,children:(0,b.jsx)(xe,{chart:{series:[{label:"Sold",percent:72,total:38566},{label:"Pending for payment",percent:64,total:18472}]}})}),(0,b.jsx)(s.Z,{xs:12,children:(0,b.jsx)(oe,{title:"Statistics",subheader:"(+43% Sold | +12% Canceled) than last year",chart:{colors:[e.palette.primary.main,e.palette.error.light],categories:["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep"],series:[{type:"Week",data:[{name:"Sold",data:[10,41,35,151,49,62,69,91,48]},{name:"Canceled",data:[10,34,13,56,77,88,99,77,45]}]},{type:"Month",data:[{name:"Sold",data:[148,91,69,62,49,51,35,41,10]},{name:"Canceled",data:[45,77,99,88,77,56,13,34,10]}]},{type:"Year",data:[{name:"Sold",data:[76,42,29,41,27,138,117,86,63]},{name:"Canceled",data:[80,55,34,114,80,130,15,28,55]}]}]}})})]}),(0,b.jsxs)(s.Z,{xs:12,md:4,children:[(0,b.jsx)(V,{title:"Tours Available",chart:{series:[{label:"Sold out",value:120},{label:"Available",value:66}]}}),(0,b.jsx)(me,{title:"Customer Reviews",subheader:"".concat(a.tT.length," Reviews"),list:a.tT,sx:{mt:ye}})]})]}),(0,b.jsx)(s.Z,{xs:12,children:(0,b.jsx)(L,{title:"Newest Booking",subheader:"12 Booking",list:a.ut})}),(0,b.jsx)(s.Z,{xs:12,children:(0,b.jsx)(Y,{title:"Booking Details",tableData:a.VY,tableLabels:[{id:"destination",label:"Destination"},{id:"customer",label:"Customer"},{id:"checkIn",label:"Check In"},{id:"checkOut",label:"Check Out"},{id:"status",label:"Status"},{id:""}]})})]})})}function je(){return(0,b.jsxs)(b.Fragment,{children:[(0,b.jsx)(n.ql,{children:(0,b.jsx)("title",{children:" Dashboard: Booking"})}),(0,b.jsx)(ve,{})]})}},17070:function(e,t,r){r.d(t,{FK:function(){return i},e_:function(){return s},f2:function(){return a},oe:function(){return c},v1:function(){return l}});var n=r(26098),o=r.n(n);function i(e){return o()(e).format()}function s(e){return d(e?o()(e).format("$0,0.00"):"",".00")}function a(e){return d(e?o()(Number(e)/100).format("0.0%"):"",".0")}function l(e){return d(e?o()(e).format("0.00a"):"",".00")}function c(e){return d(e?o()(e).format("0.0 b"):"",".0")}function d(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:".00";return e.includes(t)?e.replace(t,""):e}}}]);
//# sourceMappingURL=1561.01a82158.chunk.js.map