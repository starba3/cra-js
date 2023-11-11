"use strict";(self.webpackChunk_minimal_kit_cra_js=self.webpackChunk_minimal_kit_cra_js||[]).push([[3111],{43111:function(e,n,t){t.r(n),t.d(n,{default:function(){return ue}});var r=t(6907),o=t(4942),s=t(1413),i=t(74165),a=t(15861),l=t(29439),c=t(31357),d=t.n(c),u=t(72791),x=t(13967),h=t(57621),p=t(79836),m=t(36314),f=t(5849),g=t(94721),j=t(20068),Z=t(89164),w=t(53382),b=t(13400),v=t(39281),C=t(38072),D=t(19208),y=(t(83854),t(22459)),k=t(9145),P=(t(80160),t(27216)),S=t(47974),R=t(3352),I=t(60720),F=t(50933),A=t(1382),E=t(41557),O=t(69426),W=t(49088),N=t(45987),_=t(64554),T=t(85771),L=t(27938),B=t(25265),M=t(80184),H=["filters","onFilters","onResetFilters","results"],Q=["label","children","sx"];function z(e){var n=e.filters,t=e.onFilters,r=e.onResetFilters,o=e.results,i=(0,N.Z)(e,H),a=(0,B.l2)(n.startDate,n.endDate);return(0,M.jsxs)(m.Z,(0,s.Z)((0,s.Z)({spacing:1.5},i),{},{children:[(0,M.jsxs)(_.Z,{sx:{typography:"body2"},children:[(0,M.jsx)("strong",{children:o}),(0,M.jsx)(_.Z,{component:"span",sx:{color:"text.secondary",ml:.25},children:"results found"})]}),(0,M.jsxs)(m.Z,{flexGrow:1,spacing:1,direction:"row",flexWrap:"wrap",alignItems:"center",children:[n.startDate&&n.endDate&&(0,M.jsx)(U,{label:"Date:",children:(0,M.jsx)(T.Z,{size:"small",label:a,onDelete:function(){t("startDate",null),t("endDate",null)}})}),(0,M.jsx)(f.Z,{color:"error",onClick:r,startIcon:(0,M.jsx)(P.Z,{icon:"solar:trash-bin-trash-bold"}),children:"Clear"})]})]}))}function U(e){var n=e.label,t=e.children,r=e.sx,o=(0,N.Z)(e,Q);return(0,M.jsxs)(m.Z,(0,s.Z)((0,s.Z)({component:L.Z,variant:"outlined",spacing:1,direction:"row",sx:(0,s.Z)({p:1,borderRadius:1,overflow:"hidden",borderStyle:"dashed"},r)},o),{},{children:[(0,M.jsx)(_.Z,{component:"span",sx:{typography:"subtitle2"},children:n}),(0,M.jsx)(m.Z,{spacing:1,direction:"row",flexWrap:"wrap",children:t})]}))}var V=t(91617),$=t(16386),G=t(50533),K=t(60220),q=t(82626),J=t(9195),X=t(13034),Y=t(68745),ee=t(4567),ne=t(49900),te=(t(17070),t(52115));function re(e){var n=e.row,t=e.selected,r=e.onSelectRow,o=e.onViewRow,s=e.onEditRow,i=e.onDeleteRow,a=n.invoiceNo,l=n.issueInvoiceDate,c=n.invoiceAmount,d=n.region,u=n.customerNameEn,x=n.customerNameAr,h=(0,y.k)(),p=(0,te.S)();return(0,M.jsxs)(M.Fragment,{children:[(0,M.jsxs)(J.Z,{hover:!0,selected:t,children:[(0,M.jsx)(Y.Z,{padding:"checkbox",children:(0,M.jsx)(X.Z,{checked:t,onClick:r})}),(0,M.jsxs)(Y.Z,{sx:{display:"flex",alignItems:"center"},children:[(0,M.jsx)(K.Z,{alt:u,sx:{mr:2},children:u.charAt(0).toUpperCase()}),(0,M.jsx)(ne.Z,{disableTypography:!0,primary:(0,M.jsx)(ee.Z,{variant:"body2",noWrap:!0,children:u}),secondary:(0,M.jsx)(G.Z,{noWrap:!0,variant:"body2",onClick:o,sx:{color:"text.disabled",cursor:"pointer"},children:a})})]}),(0,M.jsx)(Y.Z,{children:(0,M.jsx)(ne.Z,{primary:(0,$.Z)(new Date(l),"dd MMM yyyy"),secondary:(0,$.Z)(new Date(l),"p"),primaryTypographyProps:{typography:"body2",noWrap:!0},secondaryTypographyProps:{mt:.5,component:"span",typography:"caption"}})}),(0,M.jsxs)(Y.Z,{children:["$",c]}),(0,M.jsx)(Y.Z,{align:"center",children:d}),(0,M.jsx)(Y.Z,{align:"center",children:x}),(0,M.jsx)(Y.Z,{align:"right",sx:{px:1},children:(0,M.jsx)(b.Z,{color:p.open?"inherit":"default",onClick:p.onOpen,children:(0,M.jsx)(P.Z,{icon:"eva:more-vertical-fill"})})})]}),(0,M.jsxs)(te.Z,{open:p.open,onClose:p.onClose,arrow:"right-top",sx:{width:160},children:[(0,M.jsxs)(q.Z,{onClick:function(){o(),p.onClose()},children:[(0,M.jsx)(P.Z,{icon:"solar:eye-bold"}),"View"]}),(0,M.jsxs)(q.Z,{onClick:function(){s(),p.onClose()},children:[(0,M.jsx)(P.Z,{icon:"solar:pen-bold"}),"Edit"]})]}),(0,M.jsx)(R.Q,{open:h.value,onClose:h.onFalse,title:"Delete",content:"Are you sure want to delete?",action:(0,M.jsx)(f.Z,{variant:"contained",color:"error",onClick:i,children:"Delete"})})]})}var oe=t(53106),se=t(48550),ie=t(63466);function ae(e){var n=e.filters,t=e.onFilters,r=e.dateError,o=(0,te.S)(),s=(0,u.useCallback)((function(e){t("name",e.target.value)}),[t]),i=(0,u.useCallback)((function(e){t("startDate",e)}),[t]),a=(0,u.useCallback)((function(e){t("endDate",e)}),[t]);return(0,M.jsxs)(M.Fragment,{children:[(0,M.jsxs)(m.Z,{spacing:2,alignItems:{xs:"flex-end",md:"center"},direction:{xs:"column",md:"row"},sx:{p:2.5,pr:{xs:2.5,md:1}},children:[(0,M.jsx)(oe.M,{label:"Start date",value:n.startDate,onChange:i,slotProps:{textField:{fullWidth:!0}},sx:{maxWidth:{md:180}}}),(0,M.jsx)(oe.M,{label:"End date",value:n.endDate,onChange:a,slotProps:{textField:{fullWidth:!0,error:r}},sx:{maxWidth:{md:180}}}),(0,M.jsxs)(m.Z,{direction:"row",alignItems:"center",spacing:2,flexGrow:1,sx:{width:1},children:[(0,M.jsx)(se.Z,{fullWidth:!0,value:n.name,onChange:s,placeholder:"Search customer or invoice number...",InputProps:{startAdornment:(0,M.jsx)(ie.Z,{position:"start",children:(0,M.jsx)(P.Z,{icon:"eva:search-fill",sx:{color:"text.disabled"}})})}}),(0,M.jsx)(b.Z,{onClick:o.onOpen,children:(0,M.jsx)(P.Z,{icon:"eva:more-vertical-fill"})})]})]}),(0,M.jsxs)(te.Z,{open:o.open,onClose:o.onClose,arrow:"right-top",sx:{width:140},children:[(0,M.jsxs)(q.Z,{onClick:function(){o.onClose()},children:[(0,M.jsx)(P.Z,{icon:"solar:printer-minimalistic-bold"}),"Print"]}),(0,M.jsxs)(q.Z,{onClick:function(){o.onClose()},children:[(0,M.jsx)(P.Z,{icon:"solar:import-bold"}),"Import"]}),(0,M.jsxs)(q.Z,{onClick:function(){o.onClose()},children:[(0,M.jsx)(P.Z,{icon:"solar:export-bold"}),"Export"]})]})]})}var le=[{id:"invoiceNumber",label:"Invoice Number"},{id:"issueInvoiceDate",label:"Issue Date"},{id:"invoiceAmount",label:"Amount"},{id:"region",label:"Region",align:"center"},{id:"customerNameAr",label:"Name Arabic",align:"center"},{id:""}],ce={name:"",startDate:null,endDate:null};function de(e){var n=e.department,t=e.salesStatus,r=(0,x.Z)(),c=(0,I.K$)(),N=(0,D.tv)(),_=(0,A.x6)({defaultOrderBy:"issueInvoiceDate"}),T=(0,y.k)(),L=(0,u.useState)([]),B=(0,l.Z)(L,2),H=B[0],Q=B[1];(0,u.useEffect)((function(){var e=function(){var e=(0,a.Z)((0,i.Z)().mark((function e(){var r,o,s;return(0,i.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(e.prev=0,console.log("Department:",n),!n){e.next=10;break}return r=-1===n?0:n,e.next=6,(0,V.zJ)(r);case 6:o=e.sent,Q(o),e.next=14;break;case 10:return e.next=12,(0,V.ES)(Boolean(t));case 12:s=e.sent,Q(s);case 14:e.next=19;break;case 16:e.prev=16,e.t0=e.catch(0),console.error("Error fetching invoices:",e.t0);case 19:case"end":return e.stop()}}),e,null,[[0,16]])})));return function(){return e.apply(this,arguments)}}();e()}),[n,t]);var U=(0,u.useState)(ce),$=(0,l.Z)(U,2),G=$[0],K=$[1],q=!(!G.startDate||!G.endDate)&&G.startDate.getTime()>G.endDate.getTime(),J=function(e){var n=e.inputData,t=e.comparator,r=e.filters,o=e.dateError,s=r.name,i=(r.status,r.service,r.startDate),a=(r.paidStatus,r.endDate),l=n.map((function(e,n){return[e,n]}));l.sort((function(e,n){var r=t(e[0],n[0]);return 0!==r?r:e[1]-n[1]})),n=l.map((function(e){return e[0]})),s&&(n=n.filter((function(e){return-1!==e.customerNameEn.toLowerCase().indexOf(s.toLowerCase())||-1!==e.invoiceNo.toLowerCase().indexOf(s.toLowerCase())||-1!==e.customerNameAr.indexOf(s)})));o||i&&a&&(n=n.filter((function(e){return(0,k.IO)(e.issueInvoiceDate)>=(0,k.IO)(i)&&(0,k.IO)(e.issueInvoiceDate)<=(0,k.IO)(a)})));return n}({inputData:H,comparator:(0,A.sQ)(_.order,_.orderBy),filters:G,dateError:q}),X=J.slice(_.page*_.rowsPerPage,_.page*_.rowsPerPage+_.rowsPerPage),Y=_.dense?56:76,ee=!!G.name||!!G.startDate&&!!G.endDate,ne=!J.length&&ee||!J.length,te=function(e){return H.filter((function(n){return n.paidStatus===e})).length},oe=(H.length,te("paid"),te("unpaid"),(0,u.useCallback)((function(e,n){_.onResetPage(),K((function(t){return(0,s.Z)((0,s.Z)({},t),{},(0,o.Z)({},e,n))}))}),[_])),se=(0,u.useCallback)((function(e){var n=H.filter((function(n){return n.id!==e}));Q(n),_.onUpdatePageDeleteRow(X.length)}),[X.length,_,H]),ie=(0,u.useCallback)((function(){var e=H.filter((function(e){return!_.selected.includes(e.id)}));Q(e),_.onUpdatePageDeleteRows({totalRows:H.length,totalRowsInPage:X.length,totalRowsFiltered:J.length})}),[J.length,X.length,_,H]),de=(0,u.useCallback)((function(e){N.push(C.H.dashboard.invoice.editOperation(e))}),[N]),ue=(0,u.useCallback)((function(e){N.push(C.H.dashboard.invoice.details(e))}),[N]),xe=((0,u.useCallback)((function(e,n){oe("paidStatus",n)}),[oe]),(0,u.useCallback)((function(){K(ce)}),[])),he=function(e,n){var t="";if(e)switch(e){case-1:t="Operation";break;case 1:t="Installation";break;case 2:t="Sales";break;case 3:t="collection";break;case 4:t="Tender And Contract"}else switch(n){case 0:t="Confirm Invoices";break;case 1:t="Assign Engineer";break;case 2:t="Assign Collector"}return t}(n,t);return(0,M.jsxs)(M.Fragment,{children:[(0,M.jsxs)(Z.Z,{maxWidth:!c.themeStretch&&"lg",children:[(0,M.jsx)(F.Z,{heading:he,links:[{name:"Dashboard",href:C.H.dashboard.root},{name:"Invoice",href:C.H.dashboard.invoice.root},{name:"List"}],sx:{mb:{xs:3,md:5}}}),(0,M.jsx)(h.Z,{sx:{mb:{xs:3,md:5}},children:(0,M.jsx)(S.Z,{children:(0,M.jsx)(m.Z,{direction:"row",divider:(0,M.jsx)(g.Z,{orientation:"vertical",flexItem:!0,sx:{borderStyle:"dashed"}}),sx:{py:2},children:(0,M.jsx)(W.Z,{title:"Total",total:H.length,percent:100,price:d()(H,"invoiceAmount"),icon:"solar:bill-list-bold-duotone",color:r.palette.info.main})})})}),(0,M.jsxs)(h.Z,{children:[(0,M.jsx)(ae,{filters:G,onFilters:oe,dateError:q,serviceOptions:(0,E.b)().map((function(e){return e})),paidStatusOptions:(0,O.O)().map((function(e){return e}))}),ee&&(0,M.jsx)(z,{filters:G,onFilters:oe,onResetFilters:xe,results:J.length,sx:{p:2.5,pt:0}}),(0,M.jsxs)(v.Z,{sx:{position:"relative",overflow:"unset"},children:[(0,M.jsx)(A.Z4,{dense:_.dense,numSelected:_.selected.length,rowCount:H.length,onSelectAllRows:function(e){return _.onSelectAllRows(e,H.map((function(e){return e.id})))},action:(0,M.jsxs)(m.Z,{direction:"row",children:[(0,M.jsx)(j.Z,{title:"Sent",children:(0,M.jsx)(b.Z,{color:"primary",children:(0,M.jsx)(P.Z,{icon:"iconamoon:send-fill"})})}),(0,M.jsx)(j.Z,{title:"Download",children:(0,M.jsx)(b.Z,{color:"primary",children:(0,M.jsx)(P.Z,{icon:"eva:download-outline"})})}),(0,M.jsx)(j.Z,{title:"Print",children:(0,M.jsx)(b.Z,{color:"primary",children:(0,M.jsx)(P.Z,{icon:"solar:printer-minimalistic-bold"})})}),(0,M.jsx)(j.Z,{title:"Delete",children:(0,M.jsx)(b.Z,{color:"primary",onClick:T.onTrue,children:(0,M.jsx)(P.Z,{icon:"solar:trash-bin-trash-bold"})})})]})}),(0,M.jsx)(S.Z,{children:(0,M.jsxs)(p.Z,{size:_.dense?"small":"medium",sx:{minWidth:800},children:[(0,M.jsx)(A.K,{order:_.order,orderBy:_.orderBy,headLabel:le,rowCount:H.length,numSelected:_.selected.length,onSort:_.onSort,onSelectAllRows:function(e){return _.onSelectAllRows(e,H.map((function(e){return e.id})))}}),(0,M.jsxs)(w.Z,{children:[J.slice(_.page*_.rowsPerPage,_.page*_.rowsPerPage+_.rowsPerPage).map((function(e){return(0,M.jsx)(re,{row:e,selected:_.selected.includes(e.id),onSelectRow:function(){return _.onSelectRow(e.id)},onViewRow:function(){return ue(e.id)},onEditRow:function(){return de(e.id)},onDeleteRow:function(){return se(e.id)}},e.id)})),(0,M.jsx)(A.$W,{height:Y,emptyRows:(0,A.fQ)(_.page,_.rowsPerPage,H.length)}),(0,M.jsx)(A.et,{notFound:ne})]})]})})]}),(0,M.jsx)(A.S_,{count:J.length,page:_.page,rowsPerPage:_.rowsPerPage,onPageChange:_.onChangePage,onRowsPerPageChange:_.onChangeRowsPerPage,dense:_.dense,onChangeDense:_.onChangeDense})]})]}),(0,M.jsx)(R.Q,{open:T.value,onClose:T.onFalse,title:"Delete",content:(0,M.jsxs)(M.Fragment,{children:["Are you sure want to delete ",(0,M.jsxs)("strong",{children:[" ",_.selected.length," "]})," items?"]}),action:(0,M.jsx)(f.Z,{variant:"contained",color:"error",onClick:function(){ie(),T.onFalse()},children:"Delete"})})]})}function ue(e){var n=e.id,t=e.salesStatus;console.log(n);var o=n?(0,M.jsx)(de,{department:n}):(0,M.jsx)(de,{salesStatus:t});return(0,M.jsxs)(M.Fragment,{children:[(0,M.jsx)(r.ql,{children:(0,M.jsx)("title",{children:" Dashboard: Invoice List"})}),o]})}}}]);
//# sourceMappingURL=3111.9e5abbad.chunk.js.map