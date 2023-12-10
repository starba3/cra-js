"use strict";(self.webpackChunk_minimal_kit_cra_js=self.webpackChunk_minimal_kit_cra_js||[]).push([[3931],{13931:function(e,n,t){t.r(n),t.d(n,{default:function(){return Ze}});var r=t(6907),i=t(4942),s=t(1413),o=t(74165),a=t(15861),l=t(29439),c=t(72791),d=t(31357),u=t.n(d),x=t(69931),h=t(13967),p=t(4567),f=t(57621),Z=t(79836),j=t(36314),m=t(5849),g=t(94721),v=t(89164),b=t(53382),w=t(13400),y=t(39281),C=t(56890),k=t(9195),D=t(68745),S=t(48550),P=t(5574),I=t(97123),F=t(39157),R=t(65661),O=t(63515),W=t(62711),E=t(56125),A=t(13239),T=t(38072),N=t(19208),L=t(83854),q=t(22459),z=t(9145),_=t(27216),B=t(47974),M=t(3352),V=t(60720),H=t(50933),Q=t(1382),U=t(91617),K=t(41557),$=t(62633),G=t(49088),J=t(10370),X=t(16386),Y=t(50533),ee=t(60220),ne=t(82626),te=t(13034),re=t(49900),ie=t(52115),se=t(80184);function oe(e){var n=e.row,t=e.selected,r=e.onSelectRow,i=e.onViewRow,s=(e.onEditRow,e.onDeleteRow),o=e.handleOpenInquiry,a=(n.id,n.invoiceNo),l=n.issueInvoiceDate,c=n.invoiceAmount,d=n.daysToCollected,u=n.customerNameAr,h=n.customerNameEn,f=n.paidStatus,Z=n.department,j=(0,x.nt)(),v=j.t,b="ar"===j.currentLang.value?u:h,y=function(e){return v(e)},C=(0,q.k)(),S=(0,ie.S)();return(0,se.jsxs)(se.Fragment,{children:[(0,se.jsxs)(k.Z,{hover:!0,selected:t,children:[(0,se.jsx)(D.Z,{padding:"checkbox",children:(0,se.jsx)(te.Z,{checked:t,onClick:r})}),(0,se.jsxs)(D.Z,{sx:{display:"flex",alignItems:"center"},children:[(0,se.jsx)(ee.Z,{alt:b,sx:{mr:2},children:b.charAt(0).toUpperCase()}),(0,se.jsx)(re.Z,{disableTypography:!0,primary:(0,se.jsx)(p.Z,{variant:"body2",noWrap:!0,children:b}),secondary:(0,se.jsx)(Y.Z,{noWrap:!0,variant:"body2",onClick:i,sx:{color:"text.disabled",cursor:"pointer"},children:a})})]}),(0,se.jsx)(D.Z,{children:(0,se.jsx)(re.Z,{primary:(0,X.Z)(new Date(l),"dd MMM yyyy"),secondary:(0,X.Z)(new Date(l),"p"),primaryTypographyProps:{typography:"body2",noWrap:!0},secondaryTypographyProps:{mt:.5,component:"span",typography:"caption"}})}),(0,se.jsx)(D.Z,{children:d}),(0,se.jsxs)(D.Z,{children:["$",c]}),(0,se.jsx)(D.Z,{align:"center",children:f}),(0,se.jsx)(D.Z,{align:"center",children:Z}),(0,se.jsx)(D.Z,{align:"right",sx:{px:1},children:(0,se.jsx)(w.Z,{color:S.open?"inherit":"default",onClick:S.onOpen,children:(0,se.jsx)(_.Z,{icon:"eva:more-vertical-fill"})})})]}),(0,se.jsxs)(ie.Z,{open:S.open,onClose:S.onClose,arrow:"right-top",sx:{width:160},children:[(0,se.jsxs)(ne.Z,{onClick:function(){i(),S.onClose()},children:[(0,se.jsx)(_.Z,{icon:"solar:eye-bold"}),y("view")]}),(0,se.jsxs)(ne.Z,{onClick:function(){o(),S.onClose()},children:[(0,se.jsx)(_.Z,{icon:"bx:file"}),y("inquiry")]}),(0,se.jsx)(g.Z,{sx:{borderStyle:"solid"}}),(0,se.jsxs)(ne.Z,{onClick:function(){C.onTrue(),S.onClose()},sx:{color:"error.main"},children:[(0,se.jsx)(_.Z,{icon:"solar:trash-bin-trash-bold"}),y("delete")]})]}),(0,se.jsx)(M.Q,{open:C.value,onClose:C.onFalse,title:y("delete"),content:y("deleteComfirmationMessage"),action:(0,se.jsx)(m.Z,{variant:"contained",color:"error",onClick:function(){console.log("Delete clicked"),s(),C.onFalse()},children:y("delete")})})]})}var ae=t(53106),le=t(62861),ce=t(68096),de=t(63466),ue=t(77196),xe=t(58406);function he(e){var n=e.filters,t=e.onFilters,r=e.dateError,i=e.serviceOptions,s=e.paidStatusOptions,o=(0,ie.S)(),a=(0,x.nt)().t,l=function(e){return a(e)},d=(0,c.useCallback)((function(e){t("name",e.target.value)}),[t]),u=(0,c.useCallback)((function(e){t("service","string"===typeof e.target.value?e.target.value.split(","):e.target.value)}),[t]),h=(0,c.useCallback)((function(e){t("paidStatus","string"===typeof e.target.value?e.target.value.split(","):e.target.value)}),[t]),p=(0,c.useCallback)((function(e){t("startDate",e)}),[t]),f=(0,c.useCallback)((function(e){t("endDate",e)}),[t]);return(0,se.jsxs)(se.Fragment,{children:[(0,se.jsxs)(j.Z,{spacing:2,alignItems:{xs:"flex-end",md:"center"},direction:{xs:"column",md:"row"},sx:{p:2.5,pr:{xs:2.5,md:1}},children:[(0,se.jsxs)(ce.Z,{sx:{flexShrink:0,width:{xs:1,md:180}},children:[(0,se.jsx)(le.Z,{children:l("departments")}),(0,se.jsx)(xe.Z,{multiple:!0,value:n.service,onChange:u,input:(0,se.jsx)(ue.Z,{label:l("departments")}),renderValue:function(e){return e.map((function(e){return e})).join(", ")},sx:{textTransform:"capitalize"},children:i.map((function(e){return(0,se.jsxs)(ne.Z,{value:e,children:[(0,se.jsx)(te.Z,{disableRipple:!0,size:"small",checked:n.service.includes(e)}),e]},e)}))})]}),(0,se.jsxs)(ce.Z,{sx:{flexShrink:0,width:{xs:1,md:180}},children:[(0,se.jsx)(le.Z,{children:l("paidStatus")}),(0,se.jsx)(xe.Z,{multiple:!0,value:n.paidStatus,onChange:h,input:(0,se.jsx)(ue.Z,{label:l("paidStatus")}),renderValue:function(e){return e.map((function(e){return e})).join(", ")},sx:{textTransform:"capitalize"},children:s.map((function(e){return(0,se.jsxs)(ne.Z,{value:e,children:[(0,se.jsx)(te.Z,{disableRipple:!0,size:"small",checked:n.paidStatus.includes(e)}),e]},e)}))})]}),(0,se.jsx)(ae.M,{label:l("startDate"),value:n.startDate,onChange:p,slotProps:{textField:{fullWidth:!0}},sx:{maxWidth:{md:180}}}),(0,se.jsx)(ae.M,{label:l("startDate"),value:n.endDate,onChange:f,slotProps:{textField:{fullWidth:!0,error:r}},sx:{maxWidth:{md:180}}}),(0,se.jsx)(j.Z,{direction:"row",alignItems:"center",spacing:2,flexGrow:1,sx:{width:1},children:(0,se.jsx)(S.Z,{fullWidth:!0,value:n.name,onChange:d,placeholder:l("searchInvoiceNamePlaceHolder"),InputProps:{startAdornment:(0,se.jsx)(de.Z,{position:"start",children:(0,se.jsx)(_.Z,{icon:"eva:search-fill",sx:{color:"text.disabled"}})})}})})]}),(0,se.jsxs)(ie.Z,{open:o.open,onClose:o.onClose,arrow:"right-top",sx:{width:140},children:[(0,se.jsxs)(ne.Z,{onClick:function(){o.onClose()},children:[(0,se.jsx)(_.Z,{icon:"solar:printer-minimalistic-bold"}),l("print")]}),(0,se.jsxs)(ne.Z,{onClick:function(){o.onClose()},children:[(0,se.jsx)(_.Z,{icon:"solar:import-bold"}),l("import")]}),(0,se.jsxs)(ne.Z,{onClick:function(){o.onClose()},children:[(0,se.jsx)(_.Z,{icon:"solar:export-bold"}),l("export")]})]})]})}var pe={name:"",service:[],paidStatus:[],status:"all",startDate:null,endDate:null};function fe(){var e=(0,h.Z)(),n=(0,V.K$)(),t=(0,N.tv)(),r=(0,Q.x6)({defaultOrderBy:"issueInvoiceDate"}),d=(0,q.k)(),X=(0,x.nt)().t,Y=function(e){return X(e)},ee=(0,c.useState)([]),ne=(0,l.Z)(ee,2),te=ne[0],re=ne[1],ie=(0,c.useState)(!1),ae=(0,l.Z)(ie,2),le=ae[0],ce=ae[1],de=(0,c.useState)(pe),ue=(0,l.Z)(de,2),xe=ue[0],fe=ue[1],Ze=c.useState(!1),je=(0,l.Z)(Ze,2),me=je[0],ge=je[1],ve=(0,c.useState)(!1),be=(0,l.Z)(ve,2),we=(be[0],be[1],(0,c.useState)([""])),ye=(0,l.Z)(we,2),Ce=(ye[0],ye[1],(0,c.useState)(!1)),ke=(0,l.Z)(Ce,2),De=ke[0],Se=ke[1],Pe=(0,c.useState)(!1),Ie=(0,l.Z)(Pe,2),Fe=Ie[0],Re=Ie[1],Oe=(0,c.useState)(""),We=(0,l.Z)(Oe,2),Ee=We[0],Ae=We[1],Te=(0,c.useState)(!1),Ne=(0,l.Z)(Te,2),Le=Ne[0],qe=Ne[1],ze=(0,c.useState)(!1),_e=(0,l.Z)(ze,2),Be=_e[0],Me=_e[1],Ve=(0,c.useState)(0),He=(0,l.Z)(Ve,2),Qe=He[0],Ue=He[1],Ke=(0,c.useState)({}),$e=(0,l.Z)(Ke,2),Ge=$e[0],Je=$e[1];(0,c.useEffect)((function(){var e=function(){var e=(0,a.Z)((0,o.Z)().mark((function e(){var n;return(0,o.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,(0,U.qL)();case 3:n=e.sent,re(n),e.next=10;break;case 7:e.prev=7,e.t0=e.catch(0),console.error("Error fetching invoices:",e.t0);case 10:case"end":return e.stop()}}),e,null,[[0,7]])})));return function(){return e.apply(this,arguments)}}();e()}),[le]),(0,c.useEffect)((function(){var e=function(){var e=(0,a.Z)((0,o.Z)().mark((function e(){var n;return(0,o.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(e.prev=0,!Qe){e.next=8;break}return e.next=4,(0,U.DW)(Qe);case 4:n=e.sent,Je(n),e.next=9;break;case 8:Je({});case 9:e.next=14;break;case 11:e.prev=11,e.t0=e.catch(0),console.error("Error fetching invoices:",e.t0);case 14:case"end":return e.stop()}}),e,null,[[0,11]])})));return function(){return e.apply(this,arguments)}}();e()}),[Qe]);var Xe=!(!xe.startDate||!xe.endDate)&&xe.startDate.getTime()>xe.endDate.getTime(),Ye=function(e){var n=e.inputData,t=e.comparator,r=e.filters,i=e.dateError,s=r.name,o=r.status,a=r.service,l=r.startDate,c=r.paidStatus,d=r.endDate,u=n.map((function(e,n){return[e,n]}));u.sort((function(e,n){var r=t(e[0],n[0]);return 0!==r?r:e[1]-n[1]})),n=u.map((function(e){return e[0]})),s&&(n=n.filter((function(e){return-1!==e.customerNameEn.toLowerCase().indexOf(s.toLowerCase())||-1!==e.invoiceNo.toLowerCase().indexOf(s.toLowerCase())})));"all"!==o&&(n=n.filter((function(e){return e.status===o})));a.length&&(n=n.filter((function(e){return a.includes("All")||a.includes(e.department)})));c.length&&(n=n.filter((function(e){return c.includes("All")||c.map((function(e){return e.toLowerCase()})).includes(e.paidStatus)})));i||l&&d&&(n=n.filter((function(e){return(0,z.IO)(e.issueInvoiceDate)>=(0,z.IO)(l)&&(0,z.IO)(e.issueInvoiceDate)<=(0,z.IO)(d)})));return n}({inputData:te,comparator:(0,Q.sQ)(r.order,r.orderBy),filters:xe,dateError:Xe}),en=Ye.slice(r.page*r.rowsPerPage,r.page*r.rowsPerPage+r.rowsPerPage),nn=r.dense?56:76,tn=!!xe.name||!!xe.service.length||"all"!==xe.status||!!xe.startDate&&!!xe.endDate,rn=[{id:"invoiceNumber",label:Y("invoiceNumber")},{id:"issueInvoiceDate",label:Y("issueInvoiceDate")},{id:"daysToCollected",label:Y("daysToCollected")},{id:"invoiceAmount",label:Y("invoiceAmount")},{id:"paidStatus",label:Y("paidStatus"),align:"center"},{id:"department",label:Y("department"),align:"center"},{id:""}],sn=!Ye.length&&tn||!Ye.length,on=function(e){return te.filter((function(n){return n.paidStatus===e})).length},an=function(e){return u()(te.filter((function(n){return n.paidStatus===e})),"invoiceAmount")},ln=function(e){return on(e)/te.length*100},cn=(0,c.useCallback)((function(e,n){r.onResetPage(),fe((function(t){return(0,s.Z)((0,s.Z)({},t),{},(0,i.Z)({},e,n))}))}),[r]),dn=(0,c.useCallback)((function(){var e=te.filter((function(e){return!r.selected.includes(e.id)}));re(e),r.onUpdatePageDeleteRows({totalRows:te.length,totalRowsInPage:en.length,totalRowsFiltered:Ye.length})}),[Ye.length,en.length,r,te]),un=(0,c.useCallback)((function(e){t.push(T.H.dashboard.invoice.edit(e))}),[t]),xn=(0,c.useCallback)((function(e){t.push(T.H.dashboard.invoice.details(e))}),[t]),hn=((0,c.useCallback)((function(e,n){cn("paidStatus",n)}),[cn]),(0,c.useCallback)((function(){fe(pe)}),[])),pn=function(){ge(!1),Re(!1)};return(0,se.jsxs)(se.Fragment,{children:[(0,se.jsxs)(v.Z,{maxWidth:!n.themeStretch&&"lg",children:[(0,se.jsx)(H.Z,{heading:Y("list"),links:[{name:Y("app"),href:T.H.dashboard.root},{name:Y("invoice")},{name:Y("list")}],action:(0,se.jsxs)(j.Z,{direction:"row",divider:(0,se.jsx)(g.Z,{orientation:"vertical",flexItem:!0,sx:{borderStyle:"dashed"}}),sx:{py:2},children:[(0,se.jsx)(m.Z,{component:L.r,href:T.H.dashboard.invoice.new,variant:"contained",startIcon:(0,se.jsx)(_.Z,{icon:"mingcute:add-line"}),children:Y("newInvoice")}),(0,se.jsx)(m.Z,{component:L.r,variant:"contained",color:"primary",onClick:function(){ge(!0)},startIcon:(0,se.jsx)(_.Z,{icon:"solar:import-bold"}),children:Y("import")})]}),sx:{mb:{xs:3,md:5}}}),(0,se.jsx)(f.Z,{sx:{mb:{xs:3,md:5}},children:(0,se.jsx)(B.Z,{children:(0,se.jsxs)(j.Z,{direction:"row",divider:(0,se.jsx)(g.Z,{orientation:"vertical",flexItem:!0,sx:{borderStyle:"dashed"}}),sx:{py:2},children:[(0,se.jsx)(G.Z,{title:Y("total"),total:te.length,percent:100,price:u()(te,"invoiceAmount"),icon:"solar:bill-list-bold-duotone",color:e.palette.info.main}),(0,se.jsx)(G.Z,{title:Y("paid"),total:on("paid"),percent:ln("paid"),price:an("paid"),icon:"solar:file-check-bold-duotone",color:e.palette.success.main}),(0,se.jsx)(G.Z,{title:Y("unpaid"),total:on("unpaid"),percent:ln("unpaid"),price:an("unpaid"),icon:"solar:sort-by-time-bold-duotone",color:e.palette.warning.main})]})})}),(0,se.jsxs)(f.Z,{children:[(0,se.jsx)(he,{filters:xe,onFilters:cn,dateError:Xe,serviceOptions:(0,K.b)().map((function(e){return e})),paidStatusOptions:(0,$.O)().map((function(e){return e}))}),tn&&(0,se.jsx)(J.Z,{filters:xe,onFilters:cn,onResetFilters:hn,results:Ye.length,sx:{p:2.5,pt:0}}),(0,se.jsx)(y.Z,{sx:{position:"relative",overflow:"unset"},children:(0,se.jsx)(B.Z,{children:(0,se.jsxs)(Z.Z,{size:r.dense?"small":"medium",sx:{minWidth:800},children:[(0,se.jsx)(Q.K,{order:r.order,orderBy:r.orderBy,headLabel:rn,rowCount:te.length,numSelected:r.selected.length,onSort:r.onSort,onSelectAllRows:function(e){return r.onSelectAllRows(e,te.map((function(e){return e.id})))}}),(0,se.jsxs)(b.Z,{children:[Ye.slice(r.page*r.rowsPerPage,r.page*r.rowsPerPage+r.rowsPerPage).map((function(e){return(0,se.jsx)(oe,{row:e,selected:r.selected.includes(e.id),onSelectRow:function(){return r.onSelectRow(e.id)},onViewRow:function(){return xn(e.id)},onEditRow:function(){return un(e.id)},onDeleteRow:function(){return function(e){var n=!0,t=function(){var t=(0,a.Z)((0,o.Z)().mark((function t(){var r;return(0,o.Z)().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,(0,U.Wu)(e);case 3:n=t.sent,t.next=9;break;case 6:t.prev=6,t.t0=t.catch(0),console.error("Error fetching invoices:",t.t0);case 9:if(console.log("Success status: ",n),!n){t.next=22;break}return t.prev=11,t.next=14,(0,U.qL)();case 14:r=t.sent,re(r),t.next=21;break;case 18:t.prev=18,t.t1=t.catch(11),console.error("Error fetching invoices:",t.t1);case 21:ce(!le);case 22:case"end":return t.stop()}}),t,null,[[0,6],[11,18]])})));return function(){return t.apply(this,arguments)}}();t()}(e.id)},handleOpenInquiry:function(){return n=e.id,Ue(n),void Me(!0);var n}},e.id)})),(0,se.jsx)(Q.$W,{height:nn,emptyRows:(0,Q.fQ)(r.page,r.rowsPerPage,te.length)}),(0,se.jsx)(Q.et,{notFound:sn})]})]})})}),(0,se.jsx)(Q.S_,{count:Ye.length,page:r.page,rowsPerPage:r.rowsPerPage,onPageChange:r.onChangePage,onRowsPerPageChange:r.onChangeRowsPerPage,dense:r.dense,onChangeDense:r.onChangeDense})]})]}),(0,se.jsx)(M.Q,{open:d.value,onClose:d.onFalse,title:Y("delete"),content:(0,se.jsxs)(se.Fragment,{children:["Are you sure want to delete ",(0,se.jsxs)("strong",{children:[" ",r.selected.length," "]})," items?"]}),action:(0,se.jsx)(m.Z,{variant:"contained",color:"error",onClick:function(){dn(),d.onFalse()},children:"Delete"})}),(0,se.jsxs)(P.Z,{open:me,onClose:pn,children:[(0,se.jsx)(R.Z,{children:"File upload"}),(0,se.jsxs)(F.Z,{children:[(0,se.jsx)(S.Z,{autoFocus:!0,required:!0,margin:"dense",id:"file",label:Y("importFile"),type:"file",fullWidth:!0,variant:"standard",inputProps:{accept:".xls, .xlsx"}}),(0,se.jsx)(E.Z,{in:Fe,children:(0,se.jsx)(O.Z,{severity:De?"error":"success",action:(0,se.jsx)(w.Z,{"aria-label":"close",color:"inherit",size:"small",onClick:function(){Re(!1)},children:(0,se.jsx)(W.JO,{icon:"ic:baseline-close"})}),sx:{mb:2},children:Ee})}),Le&&(0,se.jsx)(A.Z,{})]}),(0,se.jsxs)(I.Z,{children:[(0,se.jsx)(m.Z,{onClick:pn,children:Y("cancel")}),(0,se.jsx)(m.Z,{onClick:function(){console.log("Loading:",Le);var e=new FormData,n=document.querySelector("#file").files[0];if(n){qe(!0),e.append("file",n);try{console.log("Loading",Le);var t=(0,U.OX)();console.log("Url",t),fetch(t,{mode:"cors",method:"POST",headers:{Accept:"application/json"},body:e,Cache:"default"}).then(function(){var e=(0,a.Z)((0,o.Z)().mark((function e(n){var t;return(0,o.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,new Promise((function(e){return setTimeout(e,3e3)}));case 2:if(n.ok){e.next=9;break}if(400!==n.status&&415!==n.status){e.next=8;break}return e.next=6,n.text();case 6:throw t=e.sent,new Error("Bad Request: ".concat(t));case 8:throw new Error("Network response was not ok");case 9:return e.abrupt("return",n.text());case 10:case"end":return e.stop()}}),e)})));return function(n){return e.apply(this,arguments)}}()).then((function(e){Se(!1),Ae(e)})).catch((function(e){console.error("Fetch Error:",e),Ae("Invalid Data, check the file and try again"),Se(!0)}))}catch(r){}finally{qe(!1)}}else Se(!0),Ae("No file selecetd.");Re(!0)},children:Y("import")})]})]}),(0,se.jsxs)(P.Z,{open:Be,maxWidth:!1,color:"#ef5350",keepMounted:!0,onClose:pn,children:[(0,se.jsx)(R.Z,{children:Y("invoiceInquiry")}),(0,se.jsxs)(F.Z,{children:[(0,se.jsxs)(j.Z,{flexDirection:"row",justifyContent:"space-between",alignItems:"center",children:[(0,se.jsx)(p.Z,{children:Y("invoiceNumber")}),(0,se.jsx)(p.Z,{children:Y("createdBy")}),(0,se.jsx)(p.Z,{children:Y("creationDate")})]}),Object.prototype.hasOwnProperty.call(Ge,"invoiceData")&&(0,se.jsxs)(j.Z,{flexDirection:"row",justifyContent:"space-between",alignItems:"center",children:[(0,se.jsx)(p.Z,{children:Ge.invoiceData.invoiceNO}),(0,se.jsx)(p.Z,{children:Ge.invoiceData.createdBy}),(0,se.jsx)(p.Z,{children:Ge.invoiceData.createdDate.substring(0,Ge.invoiceData.createdDate.indexOf("T"))})]}),(0,se.jsxs)(y.Z,{sx:{position:"relative",overflow:"unset"},children:[(0,se.jsx)(C.Z,{children:(0,se.jsxs)(k.Z,{children:[(0,se.jsx)(D.Z,{children:Y("property")}),(0,se.jsx)(D.Z,{align:"right",children:Y("oldValue")}),(0,se.jsx)(D.Z,{align:"right",children:Y("newValue")}),(0,se.jsx)(D.Z,{align:"right",children:Y("lastUpdated")}),(0,se.jsx)(D.Z,{align:"right",children:Y("updatedBy")})]})}),(0,se.jsx)(b.Z,{children:Object.prototype.hasOwnProperty.call(Ge,"logs")&&Ge.logs.map((function(e){return(0,se.jsxs)(k.Z,{sx:{"&:last-child td, &:last-child th":{border:0}},children:[(0,se.jsx)(D.Z,{component:"th",scope:"row",children:e.propertyName}),(0,se.jsx)(D.Z,{align:"right",children:e.oldValue}),(0,se.jsx)(D.Z,{align:"right",children:e.newValue}),(0,se.jsx)(D.Z,{align:"right",children:e.dateModified.substring(0,e.dateModified.indexOf("T"))}),(0,se.jsx)(D.Z,{align:"right",children:e.modifiedBy})]},e.name)}))})]})]}),(0,se.jsx)(I.Z,{children:(0,se.jsx)(m.Z,{onClick:function(){return Me(!1)},children:Y("close")})})]})]})}function Ze(){return(0,se.jsxs)(se.Fragment,{children:[(0,se.jsx)(r.ql,{children:(0,se.jsx)("title",{children:" Dashboard: Invoice List"})}),(0,se.jsx)(fe,{})]})}},49088:function(e,n,t){t.d(n,{Z:function(){return x}});var r=t(69931),i=t(12065),s=t(64554),o=t(36314),a=t(4567),l=t(13239),c=t(17070),d=t(27216),u=t(80184);function x(e){var n,t=e.title,x=e.total,h=e.icon,p=e.color,f=e.percent,Z=e.price,j=(0,r.nt)().t;return(0,u.jsxs)(o.Z,{spacing:2.5,direction:"row",alignItems:"center",justifyContent:"center",sx:{width:1,minWidth:200},children:[(0,u.jsxs)(o.Z,{alignItems:"center",justifyContent:"center",sx:{position:"relative"},children:[(0,u.jsx)(d.Z,{icon:h,width:32,sx:{color:p,position:"absolute"}}),(0,u.jsx)(l.Z,{variant:"determinate",value:f,size:56,thickness:2,sx:{color:p,opacity:.48}}),(0,u.jsx)(l.Z,{variant:"determinate",value:100,size:56,thickness:3,sx:{top:0,left:0,opacity:.48,position:"absolute",color:function(e){return(0,i.Fq)(e.palette.grey[500],.16)}}})]}),(0,u.jsxs)(o.Z,{spacing:.5,children:[(0,u.jsx)(a.Z,{variant:"subtitle1",children:t}),(0,u.jsxs)(s.Z,{component:"span",sx:{color:"text.disabled",typography:"body2"},children:[(0,c.v1)(x)," ",(n="invoices",j(n))]}),(0,u.jsx)(a.Z,{variant:"subtitle2",children:(0,c.e_)(Z)})]})]})}},10370:function(e,n,t){t.d(n,{Z:function(){return f}});var r=t(1413),i=t(45987),s=t(64554),o=t(85771),a=t(27938),l=t(5849),c=t(36314),d=t(27216),u=t(25265),x=t(80184),h=["filters","onFilters","onResetFilters","results"],p=["label","children","sx"];function f(e){var n=e.filters,t=e.onFilters,a=e.onResetFilters,p=e.results,f=(0,i.Z)(e,h),j=(0,u.l2)(n.startDate,n.endDate);return(0,x.jsxs)(c.Z,(0,r.Z)((0,r.Z)({spacing:1.5},f),{},{children:[(0,x.jsxs)(s.Z,{sx:{typography:"body2"},children:[(0,x.jsx)("strong",{children:p}),(0,x.jsx)(s.Z,{component:"span",sx:{color:"text.secondary",ml:.25},children:"results found"})]}),(0,x.jsxs)(c.Z,{flexGrow:1,spacing:1,direction:"row",flexWrap:"wrap",alignItems:"center",children:[!!n.service.length&&(0,x.jsx)(Z,{label:"Service:",children:n.service.map((function(e){return(0,x.jsx)(o.Z,{label:e,size:"small",onDelete:function(){return function(e){var r=n.service.filter((function(n){return n!==e}));t("service",r)}(e)}},e)}))}),"all"!==n.status&&(0,x.jsx)(Z,{label:"Status:",children:(0,x.jsx)(o.Z,{size:"small",label:n.status,onDelete:function(){t("status","all")}})}),n.startDate&&n.endDate&&(0,x.jsx)(Z,{label:"Date:",children:(0,x.jsx)(o.Z,{size:"small",label:j,onDelete:function(){t("startDate",null),t("endDate",null)}})}),(0,x.jsx)(l.Z,{color:"error",onClick:a,startIcon:(0,x.jsx)(d.Z,{icon:"solar:trash-bin-trash-bold"}),children:"Clear"})]})]}))}function Z(e){var n=e.label,t=e.children,o=e.sx,l=(0,i.Z)(e,p);return(0,x.jsxs)(c.Z,(0,r.Z)((0,r.Z)({component:a.Z,variant:"outlined",spacing:1,direction:"row",sx:(0,r.Z)({p:1,borderRadius:1,overflow:"hidden",borderStyle:"dashed"},o)},l),{},{children:[(0,x.jsx)(s.Z,{component:"span",sx:{typography:"subtitle2"},children:n}),(0,x.jsx)(c.Z,{spacing:1,direction:"row",flexWrap:"wrap",children:t})]}))}},17070:function(e,n,t){t.d(n,{FK:function(){return s},e_:function(){return o},f2:function(){return a},oe:function(){return c},v1:function(){return l}});var r=t(26098),i=t.n(r);function s(e){return i()(e).format()}function o(e){return d(e?i()(e).format("SAR0,0.00"):"",".00")}function a(e){return d(e?i()(Number(e)/100).format("0.0%"):"",".0")}function l(e){return d(e?i()(e).format("0.00a"):"",".00")}function c(e){return d(e?i()(e).format("0.0 b"):"",".0")}function d(e){var n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:".00";return e.includes(n)?e.replace(n,""):e}}}]);
//# sourceMappingURL=3931.53838376.chunk.js.map