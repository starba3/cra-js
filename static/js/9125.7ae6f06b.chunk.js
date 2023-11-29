"use strict";(self.webpackChunk_minimal_kit_cra_js=self.webpackChunk_minimal_kit_cra_js||[]).push([[9125],{79125:function(e,n,t){t.r(n),t.d(n,{default:function(){return be}});var r=t(6907),o=t(4942),s=t(1413),a=t(74165),i=t(15861),c=t(29439),l=t(31357),u=t.n(l),d=t(72791),h=t(57689),p=t(13967),x=t(64554),f=t(57621),m=t(79836),g=t(36314),Z=t(5849),j=t(94721),v=t(63515),w=t(89164),b=t(53382),C=t(13400),y=t(39281),k=t(77196),D=t(82626),S=t(58406),P=t(62711),R=t(56125),I=t(5574),A=t(97123),E=t(39157),F=t(65661),O=t(38072),N=t(19208),W=(t(83854),t(22459)),T=t(9145),B=(t(80160),t(27216)),U=t(47974),_=t(3352),z=t(60720),L=t(50933),H=t(1382),M=t(41557),Q=t(69426),V="https://invoicecollectionsystemapi.azurewebsites.net";function J(e){return $.apply(this,arguments)}function $(){return($=(0,i.Z)((0,a.Z)().mark((function e(n){var t;return(0,a.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t=[],e.next=3,fetch("".concat(V,"/api/User/UsersNameByRole/").concat(n),{mode:"cors"}).then((function(e){return e.json()})).then((function(e){t=e})).catch((function(e){return console.log()}));case 3:return e.abrupt("return",t);case 4:case"end":return e.stop()}}),e)})))).apply(this,arguments)}var G=t(49088),K=t(45987),q=t(85771),X=t(27938),Y=t(25265),ee=t(80184),ne=["filters","onFilters","onResetFilters","results"],te=["label","children","sx"];function re(e){var n=e.filters,t=e.onFilters,r=e.onResetFilters,o=e.results,a=(0,K.Z)(e,ne),i=(0,Y.l2)(n.startDate,n.endDate);return(0,ee.jsxs)(g.Z,(0,s.Z)((0,s.Z)({spacing:1.5},a),{},{children:[(0,ee.jsxs)(x.Z,{sx:{typography:"body2"},children:[(0,ee.jsx)("strong",{children:o}),(0,ee.jsx)(x.Z,{component:"span",sx:{color:"text.secondary",ml:.25},children:"results found"})]}),(0,ee.jsxs)(g.Z,{flexGrow:1,spacing:1,direction:"row",flexWrap:"wrap",alignItems:"center",children:[n.startDate&&n.endDate&&(0,ee.jsx)(oe,{label:"Date:",children:(0,ee.jsx)(q.Z,{size:"small",label:i,onDelete:function(){t("startDate",null),t("endDate",null)}})}),(0,ee.jsx)(Z.Z,{color:"error",onClick:r,startIcon:(0,ee.jsx)(B.Z,{icon:"solar:trash-bin-trash-bold"}),children:"Clear"})]})]}))}function oe(e){var n=e.label,t=e.children,r=e.sx,o=(0,K.Z)(e,te);return(0,ee.jsxs)(g.Z,(0,s.Z)((0,s.Z)({component:X.Z,variant:"outlined",spacing:1,direction:"row",sx:(0,s.Z)({p:1,borderRadius:1,overflow:"hidden",borderStyle:"dashed"},r)},o),{},{children:[(0,ee.jsx)(x.Z,{component:"span",sx:{typography:"subtitle2"},children:n}),(0,ee.jsx)(g.Z,{spacing:1,direction:"row",flexWrap:"wrap",children:t})]}))}var se=t(91617),ae=(t(763),t(16386)),ie=t(50533),ce=t(60220),le=t(9195),ue=t(13034),de=t(68745),he=t(4567),pe=t(49900),xe=(t(17070),t(52115));function fe(e){var n=e.row,t=e.selected,r=e.salesStatus,o=e.onSelectRow,s=e.onViewRow,a=e.onEditRow,i=e.onDeleteRow,c=e.handleOpen,l=e.handleConfirmAndReject,u=n.id,d=n.invoiceNo,h=n.issueInvoiceDate,p=n.invoiceAmount,x=n.region,f=n.customerNameEn,m=n.customerNameAr,g=(n.sales,(0,W.k)()),j=(0,xe.S)(),v=void 0===r?(0,ee.jsxs)(D.Z,{onClick:function(){a(),j.onClose()},children:[(0,ee.jsx)(B.Z,{icon:"solar:pen-bold"}),"Edit"]}):null,w=0===r?(0,ee.jsx)(de.Z,{children:(0,ee.jsx)(Z.Z,{variant:"contained",color:"success",onClick:function(){return l(u,"Confirm")},children:"Accept"})}):null,b=0===r?(0,ee.jsx)(de.Z,{children:(0,ee.jsx)(Z.Z,{variant:"contained",color:"error",onClick:function(){return l(u,"Reject")},children:"Reject"})}):null,y=r>0?(0,ee.jsx)(de.Z,{children:(0,ee.jsxs)(Z.Z,{variant:"contained",color:"success",onClick:function(){return c(u)},children:["Assign ",1===r?"Engineer":"Collector"]})}):null;return(0,ee.jsxs)(ee.Fragment,{children:[(0,ee.jsxs)(le.Z,{hover:!0,selected:t,children:[(0,ee.jsx)(de.Z,{padding:"checkbox",children:(0,ee.jsx)(ue.Z,{checked:t,onClick:o})}),(0,ee.jsxs)(de.Z,{sx:{display:"flex",alignItems:"center"},children:[(0,ee.jsx)(ce.Z,{alt:f,sx:{mr:2},children:f.charAt(0).toUpperCase()}),(0,ee.jsx)(pe.Z,{disableTypography:!0,primary:(0,ee.jsx)(he.Z,{variant:"body2",noWrap:!0,children:f}),secondary:(0,ee.jsx)(ie.Z,{noWrap:!0,variant:"body2",onClick:s,sx:{color:"text.disabled",cursor:"pointer"},children:d})})]}),(0,ee.jsx)(de.Z,{children:(0,ee.jsx)(pe.Z,{primary:(0,ae.Z)(new Date(h),"dd MMM yyyy"),secondary:(0,ae.Z)(new Date(h),"p"),primaryTypographyProps:{typography:"body2",noWrap:!0},secondaryTypographyProps:{mt:.5,component:"span",typography:"caption"}})}),(0,ee.jsxs)(de.Z,{children:["$",p]}),(0,ee.jsx)(de.Z,{align:"center",children:x}),(0,ee.jsx)(de.Z,{align:"center",children:m}),w,b,y,(0,ee.jsx)(de.Z,{align:"right",sx:{px:1},children:(0,ee.jsx)(C.Z,{color:j.open?"inherit":"default",onClick:j.onOpen,children:(0,ee.jsx)(B.Z,{icon:"eva:more-vertical-fill"})})})]}),(0,ee.jsxs)(xe.Z,{open:j.open,onClose:j.onClose,arrow:"right-top",sx:{width:160},children:[(0,ee.jsxs)(D.Z,{onClick:function(){s(),j.onClose()},children:[(0,ee.jsx)(B.Z,{icon:"solar:eye-bold"}),"View"]}),v]}),(0,ee.jsx)(_.Q,{open:g.value,onClose:g.onFalse,title:"Delete",content:"Are you sure want to delete?",action:(0,ee.jsx)(Z.Z,{variant:"contained",color:"error",onClick:i,children:"Delete"})})]})}var me=t(53106),ge=t(48550),Ze=t(63466);function je(e){var n=e.filters,t=e.onFilters,r=e.dateError,o=(0,xe.S)(),s=(0,d.useCallback)((function(e){t("name",e.target.value)}),[t]),a=(0,d.useCallback)((function(e){t("startDate",e)}),[t]),i=(0,d.useCallback)((function(e){t("endDate",e)}),[t]);return(0,ee.jsxs)(ee.Fragment,{children:[(0,ee.jsxs)(g.Z,{spacing:2,alignItems:{xs:"flex-end",md:"center"},direction:{xs:"column",md:"row"},sx:{p:2.5,pr:{xs:2.5,md:1}},children:[(0,ee.jsx)(me.M,{label:"Start date",value:n.startDate,onChange:a,slotProps:{textField:{fullWidth:!0}},sx:{maxWidth:{md:180}}}),(0,ee.jsx)(me.M,{label:"End date",value:n.endDate,onChange:i,slotProps:{textField:{fullWidth:!0,error:r}},sx:{maxWidth:{md:180}}}),(0,ee.jsxs)(g.Z,{direction:"row",alignItems:"center",spacing:2,flexGrow:1,sx:{width:1},children:[(0,ee.jsx)(ge.Z,{fullWidth:!0,value:n.name,onChange:s,placeholder:"Search customer or invoice number...",InputProps:{startAdornment:(0,ee.jsx)(Ze.Z,{position:"start",children:(0,ee.jsx)(B.Z,{icon:"eva:search-fill",sx:{color:"text.disabled"}})})}}),(0,ee.jsx)(C.Z,{onClick:o.onOpen,children:(0,ee.jsx)(B.Z,{icon:"eva:more-vertical-fill"})})]})]}),(0,ee.jsxs)(xe.Z,{open:o.open,onClose:o.onClose,arrow:"right-top",sx:{width:140},children:[(0,ee.jsxs)(D.Z,{onClick:function(){o.onClose()},children:[(0,ee.jsx)(B.Z,{icon:"solar:printer-minimalistic-bold"}),"Print"]}),(0,ee.jsxs)(D.Z,{onClick:function(){o.onClose()},children:[(0,ee.jsx)(B.Z,{icon:"solar:import-bold"}),"Import"]}),(0,ee.jsxs)(D.Z,{onClick:function(){o.onClose()},children:[(0,ee.jsx)(B.Z,{icon:"solar:export-bold"}),"Export"]})]})]})}var ve={name:"",startDate:null,endDate:null};function we(e){var n=e.department,t=e.salesStatus,r=(0,p.Z)(),l=((0,h.s0)(),(0,z.K$)()),B=(0,N.tv)(),V=(0,H.x6)({defaultOrderBy:"issueInvoiceDate"}),$=(0,W.k)(),K=(0,d.useState)([]),q=(0,c.Z)(K,2),X=q[0],Y=q[1],ne=(0,d.useState)([]),te=(0,c.Z)(ne,2),oe=te[0],ae=te[1],ie=(0,d.useState)(!1),ce=(0,c.Z)(ie,2),le=ce[0],ue=ce[1];(0,d.useEffect)((function(){var e="";1===t?e="installation":3===t&&(e="collection");var r=function(){var e=(0,i.Z)((0,a.Z)().mark((function e(){var r,o,s;return(0,a.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(e.prev=0,console.log("Department:",n),console.log("salesStatus:",t),void 0===n){e.next=11;break}return r=-1===n?0:n,e.next=7,(0,se.zJ)(r);case 7:o=e.sent,ae(o),e.next=15;break;case 11:return e.next=13,(0,se.ES)(Boolean(t));case 13:s=e.sent,ae(s);case 15:e.next=20;break;case 17:e.prev=17,e.t0=e.catch(0),console.error("Error fetching invoices:",e.t0);case 20:case"end":return e.stop()}}),e,null,[[0,17]])})));return function(){return e.apply(this,arguments)}}(),o=function(){var n=(0,i.Z)((0,a.Z)().mark((function n(){var t;return(0,a.Z)().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:if(n.prev=0,console.log("Role:",e),!e){n.next=9;break}return n.next=5,J(e);case 5:t=n.sent,console.log(t),Pe(t.length?t[0].username:""),Y(t);case 9:n.next=14;break;case 11:n.prev=11,n.t0=n.catch(0),console.error("Error fetching users list:",n.t0);case 14:case"end":return n.stop()}}),n,null,[[0,11]])})));return function(){return n.apply(this,arguments)}}();r(),o()}),[n,t,le]);var de=(0,d.useState)(ve),he=(0,c.Z)(de,2),pe=he[0],xe=he[1],me=(0,d.useState)(void 0===n),ge=(0,c.Z)(me,2),Ze=ge[0],we=(ge[1],(0,d.useState)(!1)),be=(0,c.Z)(we,2),Ce=be[0],ye=be[1],ke=(0,d.useState)(""),De=(0,c.Z)(ke,2),Se=De[0],Pe=De[1],Re=(0,d.useState)(0),Ie=(0,c.Z)(Re,2),Ae=Ie[0],Ee=Ie[1],Fe=(0,d.useState)(!1),Oe=(0,c.Z)(Fe,2),Ne=Oe[0],We=Oe[1],Te=(0,d.useState)("Success"),Be=(0,c.Z)(Te,2),Ue=Be[0],_e=Be[1],ze=!(!pe.startDate||!pe.endDate)&&pe.startDate.getTime()>pe.endDate.getTime(),Le=function(e){var n=e.inputData,t=e.comparator,r=e.filters,o=e.dateError,s=r.name,a=(r.status,r.service,r.startDate),i=(r.paidStatus,r.endDate),c=n.map((function(e,n){return[e,n]}));c.sort((function(e,n){var r=t(e[0],n[0]);return 0!==r?r:e[1]-n[1]})),n=c.map((function(e){return e[0]})),s&&(n=n.filter((function(e){return-1!==e.customerNameEn.toLowerCase().indexOf(s.toLowerCase())||-1!==e.invoiceNo.toLowerCase().indexOf(s.toLowerCase())||-1!==e.customerNameAr.indexOf(s)})));o||a&&i&&(n=n.filter((function(e){return(0,T.IO)(e.issueInvoiceDate)>=(0,T.IO)(a)&&(0,T.IO)(e.issueInvoiceDate)<=(0,T.IO)(i)})));return n}({inputData:oe,comparator:(0,H.sQ)(V.order,V.orderBy),filters:pe,dateError:ze}),He=Le.slice(V.page*V.rowsPerPage,V.page*V.rowsPerPage+V.rowsPerPage),Me=function(){ye(!1)},Qe=V.dense?56:76,Ve=!!pe.name||!!pe.startDate&&!!pe.endDate,Je=!Le.length&&Ve||!Le.length,$e=[{id:"invoiceNumber",label:"Invoice Number"},{id:"issueInvoiceDate",label:"Issue Date"},{id:"invoiceAmount",label:"Amount"},{id:"region",label:"Region",align:"center"},{id:"customerNameAr",label:"Name Arabic",align:"center"},{id:"6",label:""}],Ge=(0,d.useCallback)((function(e,n){V.onResetPage(),xe((function(t){return(0,s.Z)((0,s.Z)({},t),{},(0,o.Z)({},e,n))}))}),[V]),Ke=(0,d.useCallback)((function(e){var n=oe.filter((function(n){return n.id!==e}));ae(n),V.onUpdatePageDeleteRow(He.length)}),[He.length,V,oe]),qe=(0,d.useCallback)((function(){var e=oe.filter((function(e){return!V.selected.includes(e.id)}));ae(e),V.onUpdatePageDeleteRows({totalRows:oe.length,totalRowsInPage:He.length,totalRowsFiltered:Le.length})}),[Le.length,He.length,V,oe]),Xe=(0,d.useCallback)((function(e){B.push(O.H.dashboard.invoice.editOperation(e))}),[B]),Ye=(0,d.useCallback)((function(e){B.push(O.H.dashboard.invoice.details(e))}),[B]),en=((0,d.useCallback)((function(e,n){Ge("paidStatus",n)}),[Ge]),(0,d.useCallback)((function(){xe(ve)}),[])),nn=((0,d.useCallback)((function(){xe(ve)}),[]),function(e,n){var t="";if(e)switch(e){case-1:t="Operation";break;case 1:t="Installation";break;case 2:t="Sales";break;case 3:t="collection";break;case 4:t="Tender And Contract"}else switch(n){case 0:t="Confirm Invoices";break;case 1:t="Assign Engineer";break;case 2:t="Assign Collector"}return t}(n,t));Ze&&0===t&&($e.push({id:"7",label:""}),$e.push({id:"8",label:""})),Ze&&t>0&&$e.push({id:"7",label:""});var tn=function(){var e=(0,i.Z)((0,a.Z)().mark((function e(n,t){return(0,a.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:try{console.log("https://invoicecollectionsystemapi.azurewebsites.net/api/Invoices/".concat(n,"/").concat(t,"BySales")),O.H.departments.sales.confirm_invoices,fetch("https://invoicecollectionsystemapi.azurewebsites.net/api/Invoices/".concat(n,"/").concat(t,"BySales"),{method:"PATCH",headers:{Accept:"application/json","Content-Type":"application/json"},Cache:"default"}).then((function(e){if(e.ok){if(ue(!le),204===e.status)return null;if(200===e.status)return e.json();throw new Error("Unexpected status code: ".concat(e.status))}throw new Error("Network response was not ok")})).then((function(e){_e("Success")})).catch((function(e){console.log(e),_e(e)}))}catch(r){console.error("Error:",r)}finally{We(!0)}case 1:case"end":return e.stop()}}),e)})));return function(n,t){return e.apply(this,arguments)}}(),rn=function(){var e=(0,i.Z)((0,a.Z)().mark((function e(){var n,r,o;return(0,a.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:try{n=1===t?"setResponsibleEngineerByUsername":"setCollectorByUsername",r="https://invoicecollectionsystemapi.azurewebsites.net/api/Invoices/".concat(Ae,"/").concat(n),console.log(r),o={userName:Se},console.log(o),ye(!1),fetch(r,{method:"PATCH",headers:{Accept:"application/json","Content-Type":"application/json"},body:JSON.stringify(o),Cache:"default"}).then((function(e){if(e.ok){if(204===e.status)return null;if(200===e.status)return e.json();throw new Error("Unexpected status code: ".concat(e.status))}throw new Error("Network response was not ok")})).then((function(e){_e("Success")})).catch((function(e){console.log(e),_e(e)}))}catch(s){console.error("Error:",s)}finally{We(!0)}case 1:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();return(0,ee.jsxs)(ee.Fragment,{children:[(0,ee.jsxs)(w.Z,{maxWidth:!l.themeStretch&&"lg",children:[(0,ee.jsx)(L.Z,{heading:nn,links:[{name:"Dashboard",href:O.H.dashboard.root},{name:"Invoice",href:O.H.dashboard.invoice.root},{name:"List"}],sx:{mb:{xs:3,md:5}}}),(0,ee.jsx)(f.Z,{sx:{mb:{xs:3,md:5}},children:(0,ee.jsx)(U.Z,{children:(0,ee.jsx)(g.Z,{direction:"row",divider:(0,ee.jsx)(j.Z,{orientation:"vertical",flexItem:!0,sx:{borderStyle:"dashed"}}),sx:{py:2},children:(0,ee.jsx)(G.Z,{title:"Total",total:oe.length,percent:100,price:u()(oe,"invoiceAmount"),icon:"solar:bill-list-bold-duotone",color:r.palette.info.main})})})}),(0,ee.jsxs)(f.Z,{children:[(0,ee.jsx)(je,{filters:pe,onFilters:Ge,dateError:ze,serviceOptions:(0,M.b)().map((function(e){return e})),paidStatusOptions:(0,Q.O)().map((function(e){return e}))}),Ve&&(0,ee.jsx)(re,{filters:pe,onFilters:Ge,onResetFilters:en,results:Le.length,sx:{p:2.5,pt:0}}),(0,ee.jsx)(y.Z,{sx:{position:"relative",overflow:"unset"},children:(0,ee.jsx)(U.Z,{children:(0,ee.jsxs)(m.Z,{size:V.dense?"small":"medium",sx:{minWidth:800},children:[(0,ee.jsx)(H.K,{order:V.order,orderBy:V.orderBy,headLabel:$e,rowCount:oe.length,numSelected:V.selected.length,onSort:V.onSort,onSelectAllRows:function(e){return V.onSelectAllRows(e,oe.map((function(e){return e.id})))}}),(0,ee.jsxs)(b.Z,{children:[Le.slice(V.page*V.rowsPerPage,V.page*V.rowsPerPage+V.rowsPerPage).map((function(e){return(0,ee.jsx)(fe,{row:e,salesStatus:t,selected:V.selected.includes(e.id),onSelectRow:function(){return V.onSelectRow(e.id)},onViewRow:function(){return Ye(e.id)},onEditRow:function(){return Xe(e.id)},onDeleteRow:function(){return Ke(e.id)},handleOpen:function(e){return function(e){Ee(e),ye(!0)}(e)},handleConfirmAndReject:function(e,n){return tn(e,n)}},e.id)})),(0,ee.jsx)(H.$W,{height:Qe,emptyRows:(0,H.fQ)(V.page,V.rowsPerPage,oe.length)}),(0,ee.jsx)(H.et,{notFound:Je})]})]})})}),(0,ee.jsx)(H.S_,{count:Le.length,page:V.page,rowsPerPage:V.rowsPerPage,onPageChange:V.onChangePage,onRowsPerPageChange:V.onChangeRowsPerPage,dense:V.dense,onChangeDense:V.onChangeDense})]}),(0,ee.jsx)(x.Z,{sx:{width:"50%",flex:1,marginLeft:"auto",marginTop:"10px"},children:(0,ee.jsx)(R.Z,{in:Ne,children:(0,ee.jsx)(v.Z,{severity:"Success"===Ue?"success":"error",action:(0,ee.jsx)(C.Z,{"aria-label":"close",color:"inherit",size:"small",onClick:function(){We(!1)},children:(0,ee.jsx)(P.JO,{icon:"ic:round-close"})}),sx:{mb:2},children:Ue})})})]}),(0,ee.jsx)(_.Q,{open:$.value,onClose:$.onFalse,title:"Delete",content:(0,ee.jsxs)(ee.Fragment,{children:["Are you sure want to delete ",(0,ee.jsxs)("strong",{children:[" ",V.selected.length," "]})," items?"]}),action:(0,ee.jsx)(Z.Z,{variant:"contained",color:"error",onClick:function(){qe(),$.onFalse()},children:"Delete"})}),(0,ee.jsxs)(I.Z,{open:Ce,color:"#ef5350",keepMounted:!0,onClose:Me,children:[(0,ee.jsx)(F.Z,{children:"Assign User"}),(0,ee.jsx)(E.Z,{children:(0,ee.jsx)(S.Z,{value:X.length?X[0].username:"",onChange:function(e){console.log(e.target.value),Pe(e.target.value)},input:(0,ee.jsx)(k.Z,{label:""}),renderValue:function(e){return e},sx:{textTransform:"capitalize",fullWidth:!0},children:X.map((function(e){return(0,ee.jsx)(D.Z,{value:e.username,children:e.username},e.id)}))})}),(0,ee.jsxs)(A.Z,{children:[(0,ee.jsx)(Z.Z,{onClick:Me,children:"Close"}),(0,ee.jsx)(Z.Z,{onClick:rn,children:"Save"})]})]})]})}function be(e){var n=e.id,t=e.salesStatus;console.log(n);var o=n?(0,ee.jsx)(we,{department:n}):(0,ee.jsx)(we,{salesStatus:t});return(0,ee.jsxs)(ee.Fragment,{children:[(0,ee.jsx)(r.ql,{children:(0,ee.jsx)("title",{children:" Dashboard: Invoice List"})}),o]})}}}]);
//# sourceMappingURL=9125.7ae6f06b.chunk.js.map