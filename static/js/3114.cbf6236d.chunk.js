"use strict";(self.webpackChunk_minimal_kit_cra_js=self.webpackChunk_minimal_kit_cra_js||[]).push([[3114],{83136:function(e,n,t){t.r(n),t.d(n,{default:function(){return C}});var r=t(6907),o=t(74165),a=t(15861),s=t(29439),i=t(72791),l=t(57621),c=t(79836),u=t(89164),d=t(53382),p=t(39281),h=t(38072),m=t(47974),x=t(60720),y=t(69931),f=t(50933),g=t(13496),T=t(80184),w=function(e){var n=e.data,t=(0,y.nt)().t,r=function(e){return t(e)},o=n.map((function(e){return e.zeroToThirty})),a=n.map((function(e){return e.thirtyOneToSixty})),s=n.map((function(e){return e.sixtyOneToNinety})),i=n.map((function(e){return e.ninetyOneToOneTwenty})),l=n.map((function(e){return e.oneTwentyOnePlus})),c=o.reduce((function(e,n){return e+n}),0),u=a.reduce((function(e,n){return e+n}),0),d=s.reduce((function(e,n){return e+n}),0),p=i.reduce((function(e,n){return e+n}),0),h=l.reduce((function(e,n){return e+n}),0),m={labels:[r("zeroToThirty"),r("thirtyOneToSixty"),r("sixtyOneToNinety"),r("ninetyOneToOneTwenty"),r("oneTwentyOnePlus")]},x=[c,u,d,p,h];return(0,T.jsx)(g.Z,{options:m,series:x,type:"donut",width:"380"})},Z=t(1382),P=t(91590),v=t(9195),j=t(68745);function O(e){var n=e.row,t=e.selected,r=e.isPercentage,o=n.customerNameEn,a=n.customerNameAr,s=n.zeroToThirty,i=n.thirtyOneToSixty,l=n.sixtyOneToNinety,c=n.ninetyOneToOneTwenty,u=n.oneTwentyOnePlus,d=s+i+l+c+u;return(0,T.jsxs)(v.Z,{hover:!0,selected:t,children:[(0,T.jsx)(j.Z,{children:o}),(0,T.jsx)(j.Z,{children:a}),(0,T.jsx)(j.Z,{children:r?"100%":d}),(0,T.jsxs)(j.Z,{children:[r?(s/d*100).toFixed(2):s," "]}),(0,T.jsxs)(j.Z,{children:[r?(i/d*100).toFixed(2):i," "]}),(0,T.jsxs)(j.Z,{children:[r?(l/d*100).toFixed(2):l," "]}),(0,T.jsxs)(j.Z,{children:[r?(c/d*100).toFixed(2):c," "]}),(0,T.jsxs)(j.Z,{children:[r?(u/d*100).toFixed(2):u," "]})]})}var b={name:"",startDate:null,endDate:null};function S(){var e=(0,x.K$)(),n=(0,Z.x6)({defaultOrderBy:"issueInvoiceDate"}),t=(0,i.useState)([]),r=(0,s.Z)(t,2),g=r[0],v=r[1];(0,i.useEffect)((function(){var e=function(){var e=(0,a.Z)((0,o.Z)().mark((function e(){var n;return(0,o.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,(0,P._d)();case 3:n=(n=e.sent).map((function(e,n){return e.id=n,e})),v(n),e.next=11;break;case 8:e.prev=8,e.t0=e.catch(0),console.error("Error fetching data:",e.t0);case 11:case"end":return e.stop()}}),e,null,[[0,8]])})));return function(){return e.apply(this,arguments)}}();e()}),[]);var j=(0,i.useState)(b),S=(0,s.Z)(j,2),C=S[0],N=(S[1],(0,y.nt)().t),k=function(e){return N(e)},R=!(!C.startDate||!C.endDate)&&C.startDate.getTime()>C.endDate.getTime(),z=function(e){var n=e.inputData;e.comparator,e.filters,e.dateError;return n}({inputData:g,comparator:(0,Z.sQ)(n.order,n.orderBy),filters:C,dateError:R}),B=(z.slice(n.page*n.rowsPerPage,n.page*n.rowsPerPage+n.rowsPerPage),n.dense?56:76),D=!!C.name||!!C.startDate&&!!C.endDate,I=!z.length&&D||!z.length,_=[{id:"customerNameEn",label:k("nameEnglish")},{id:"customerNameAr",label:k("nameArabic")},{id:"balance",label:k("balance")},{id:"zeroToThirty",label:k("zeroToThirty")},{id:"thirtyOneToSixty",label:k("thirtyOneToSixty")},{id:"sixtyOneToNinety",label:k("sixtyOneToNinety")},{id:"ninetyOneToOneTwenty",label:k("ninetyOneToOneTwenty")},{id:"oneTwentyOnePlus",label:k("oneTwentyOnePlus")}],A=function(){return g.reduce((function(e,n){return e+n.zeroToThirty}),0)},E=function(){return g.reduce((function(e,n){return e+n.thirtyOneToSixty}),0)},M=function(){return g.reduce((function(e,n){return e+n.sixtyOneToNinety}),0)},F=function(){return g.reduce((function(e,n){return e+n.ninetyOneToOneTwenty}),0)},W=function(){return g.reduce((function(e,n){return e+n.oneTwentyOnePlus}),0)},L={customerNameEn:"Total",customerNameAr:"",zeroToThirty:A(),thirtyOneToSixty:E(),sixtyOneToNinety:M(),ninetyOneToOneTwenty:F(),oneTwentyOnePlus:W()},q={customerNameEn:"Percentage",customerNameAr:"",zeroToThirty:A(),thirtyOneToSixty:E(),sixtyOneToNinety:M(),ninetyOneToOneTwenty:F(),oneTwentyOnePlus:W()};return(0,T.jsxs)(u.Z,{maxWidth:!e.themeStretch&&"lg",children:[(0,T.jsx)(f.Z,{heading:k("aging"),links:[{name:k("app"),href:h.H.dashboard.root},{name:k("reports")},{name:k("aging")}],sx:{mb:{xs:3,md:5}}}),(0,T.jsxs)(l.Z,{sx:{mb:3},children:[(0,T.jsx)(p.Z,{sx:{position:"relative",overflow:"unset"},children:(0,T.jsx)(m.Z,{children:(0,T.jsxs)(c.Z,{size:n.dense?"small":"medium",sx:{minWidth:800},children:[(0,T.jsx)(Z.K,{order:n.order,orderBy:n.orderBy,headLabel:_,rowCount:g.length,numSelected:n.selected.length,onSort:n.onSort}),(0,T.jsxs)(d.Z,{children:[z.slice(n.page*n.rowsPerPage,n.page*n.rowsPerPage+n.rowsPerPage).map((function(e,t){return(0,T.jsx)(O,{row:e,selected:n.selected.includes(e.id)},t.id)})),(0,T.jsx)(O,{row:L,selected:n.selected.includes(999)},999),(0,T.jsx)(O,{row:q,selected:n.selected.includes(999),isPercentage:!0},999),(0,T.jsx)(Z.$W,{height:B,emptyRows:(0,Z.fQ)(n.page,n.rowsPerPage,g.length)}),(0,T.jsx)(Z.et,{notFound:I})]})]})})}),(0,T.jsx)(Z.S_,{count:z.length,page:n.page,rowsPerPage:n.rowsPerPage,onPageChange:n.onChangePage,onRowsPerPageChange:n.onChangeRowsPerPage,dense:n.dense,onChangeDense:n.onChangeDense})]}),(0,T.jsx)(l.Z,{sx:{display:"flex",justifyContent:"center",mb:3},children:(0,T.jsx)(w,{data:z})})]})}function C(){return(0,T.jsxs)(T.Fragment,{children:[(0,T.jsx)(r.ql,{children:(0,T.jsx)("title",{children:" Aging Report"})}),(0,T.jsx)(S,{})]})}},93517:function(e,n,t){t.d(n,{Z:function(){return B}});var r=t(93433),o=t(29439),a=t(4942),s=t(87462),i=t(63366),l=t(72791),c=(t(57441),t(59278)),u=t(94419),d=t(26912),p=t(66934),h=t(31402),m=t(4567),x=t(12065),y=t(74223),f=t(80184),g=(0,y.Z)((0,f.jsx)("path",{d:"M6 10c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2zm12 0c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2zm-6 0c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2z"}),"MoreHoriz"),T=t(95080),w=["slots","slotProps"],Z=(0,p.ZP)(T.Z)((function(e){var n=e.theme;return(0,s.Z)({display:"flex",marginLeft:"calc(".concat(n.spacing(1)," * 0.5)"),marginRight:"calc(".concat(n.spacing(1)," * 0.5)")},"light"===n.palette.mode?{backgroundColor:n.palette.grey[100],color:n.palette.grey[700]}:{backgroundColor:n.palette.grey[700],color:n.palette.grey[100]},{borderRadius:2,"&:hover, &:focus":(0,s.Z)({},"light"===n.palette.mode?{backgroundColor:n.palette.grey[200]}:{backgroundColor:n.palette.grey[600]}),"&:active":(0,s.Z)({boxShadow:n.shadows[0]},"light"===n.palette.mode?{backgroundColor:(0,x._4)(n.palette.grey[200],.12)}:{backgroundColor:(0,x._4)(n.palette.grey[600],.12)})})})),P=(0,p.ZP)(g)({width:24,height:16});var v=function(e){var n=e.slots,t=void 0===n?{}:n,r=e.slotProps,o=void 0===r?{}:r,a=(0,i.Z)(e,w),l=e;return(0,f.jsx)("li",{children:(0,f.jsx)(Z,(0,s.Z)({focusRipple:!0},a,{ownerState:l,children:(0,f.jsx)(P,(0,s.Z)({as:t.CollapsedIcon,ownerState:l},o.collapsedIcon))}))})},j=t(75878),O=t(21217);function b(e){return(0,O.Z)("MuiBreadcrumbs",e)}var S=(0,j.Z)("MuiBreadcrumbs",["root","ol","li","separator"]),C=["children","className","component","slots","slotProps","expandText","itemsAfterCollapse","itemsBeforeCollapse","maxItems","separator"],N=(0,p.ZP)(m.Z,{name:"MuiBreadcrumbs",slot:"Root",overridesResolver:function(e,n){return[(0,a.Z)({},"& .".concat(S.li),n.li),n.root]}})({}),k=(0,p.ZP)("ol",{name:"MuiBreadcrumbs",slot:"Ol",overridesResolver:function(e,n){return n.ol}})({display:"flex",flexWrap:"wrap",alignItems:"center",padding:0,margin:0,listStyle:"none"}),R=(0,p.ZP)("li",{name:"MuiBreadcrumbs",slot:"Separator",overridesResolver:function(e,n){return n.separator}})({display:"flex",userSelect:"none",marginLeft:8,marginRight:8});function z(e,n,t,r){return e.reduce((function(o,a,s){return s<e.length-1?o=o.concat(a,(0,f.jsx)(R,{"aria-hidden":!0,className:n,ownerState:r,children:t},"separator-".concat(s))):o.push(a),o}),[])}var B=l.forwardRef((function(e,n){var t=(0,h.Z)({props:e,name:"MuiBreadcrumbs"}),a=t.children,p=t.className,m=t.component,x=void 0===m?"nav":m,y=t.slots,g=void 0===y?{}:y,T=t.slotProps,w=void 0===T?{}:T,Z=t.expandText,P=void 0===Z?"Show path":Z,j=t.itemsAfterCollapse,O=void 0===j?1:j,S=t.itemsBeforeCollapse,R=void 0===S?1:S,B=t.maxItems,D=void 0===B?8:B,I=t.separator,_=void 0===I?"/":I,A=(0,i.Z)(t,C),E=l.useState(!1),M=(0,o.Z)(E,2),F=M[0],W=M[1],L=(0,s.Z)({},t,{component:x,expanded:F,expandText:P,itemsAfterCollapse:O,itemsBeforeCollapse:R,maxItems:D,separator:_}),q=function(e){var n=e.classes;return(0,u.Z)({root:["root"],li:["li"],ol:["ol"],separator:["separator"]},b,n)}(L),H=(0,d.y)({elementType:g.CollapsedIcon,externalSlotProps:w.collapsedIcon,ownerState:L}),K=l.useRef(null),Q=l.Children.toArray(a).filter((function(e){return l.isValidElement(e)})).map((function(e,n){return(0,f.jsx)("li",{className:q.li,children:e},"child-".concat(n))}));return(0,f.jsx)(N,(0,s.Z)({ref:n,component:x,color:"text.secondary",className:(0,c.Z)(q.root,p),ownerState:L},A,{children:(0,f.jsx)(k,{className:q.ol,ref:K,ownerState:L,children:z(F||D&&Q.length<=D?Q:function(e){return R+O>=e.length?e:[].concat((0,r.Z)(e.slice(0,R)),[(0,f.jsx)(v,{"aria-label":P,slots:{CollapsedIcon:g.CollapsedIcon},slotProps:{collapsedIcon:H},onClick:function(){W(!0);var e=K.current.querySelector("a[href],button,[tabindex]");e&&e.focus()}},"ellipsis")],(0,r.Z)(e.slice(e.length-O,e.length)))}(Q),q.separator,_,L)})}))}))}}]);
//# sourceMappingURL=3114.cbf6236d.chunk.js.map