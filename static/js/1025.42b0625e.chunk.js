(self.webpackChunk_minimal_kit_cra_js=self.webpackChunk_minimal_kit_cra_js||[]).push([[1025],{64417:function(e,r,n){"use strict";n.r(r),n.d(r,{default:function(){return _}});var o=n(6907),i=n(89164),t=n(38072),s=n(60720),a=n(50933),l=n(74165),c=n(15861),u=n(72791),d=n(8007),v=n(61134),m=n(44695),x=n(12258),h=n(57621),p=n(36314),b=n(19208),f=(n(11908),n(22459)),j=n(39231),g=(n(87151),n(17070),n(27216)),Z=n(80184);var C=n(94721),y=n(13400),P=n(4567),w=n(38887),q=n(20302),N=n(16568),D=n(44070);function O(){var e,r=(0,v.Gc)(),n=r.watch,o=r.setValue,i=r.formState.errors,t=(0,q.J)(),s=(0,q.Z)(),a=(0,w.F)("up","md"),l=n(),c=(l.customerId,l.customerCode,l.salesPerson),u=l.customerObj,d=l.salesPersonObj;console.log("values",l);var m=(0,f.k)(),x=(0,f.k)();return(0,Z.jsxs)(Z.Fragment,{children:[(0,Z.jsxs)(p.Z,{spacing:{xs:3,md:5},direction:{xs:"column",md:"row"},divider:(0,Z.jsx)(C.Z,{flexItem:!0,orientation:a?"vertical":"horizontal",sx:{borderStyle:"dashed"}}),sx:{p:3},children:[(0,Z.jsxs)(p.Z,{sx:{width:1},children:[(0,Z.jsxs)(p.Z,{direction:"row",alignItems:"center",sx:{mb:1},children:[(0,Z.jsx)(P.Z,{variant:"h6",sx:{color:"text.disabled",flexGrow:1},children:"Customer:"}),(0,Z.jsx)(y.Z,{onClick:m.onTrue,children:(0,Z.jsx)(g.Z,{icon:"solar:pen-bold"})})]}),(0,Z.jsxs)(p.Z,{spacing:1,children:[(0,Z.jsxs)(P.Z,{variant:"subtitle2",children:["Code: ",null===u||void 0===u?void 0:u.customerCode]}),(0,Z.jsxs)(P.Z,{variant:"body2",children:["Name English: ",null===u||void 0===u?void 0:u.customerNameEn]}),(0,Z.jsxs)(P.Z,{variant:"body2",children:["Name Arabic:  ",null===u||void 0===u?void 0:u.customerNameAr]})]})]}),(0,Z.jsxs)(p.Z,{sx:{width:1},children:[(0,Z.jsxs)(p.Z,{direction:"row",alignItems:"center",sx:{mb:1},children:[(0,Z.jsx)(P.Z,{variant:"h6",sx:{color:"text.disabled",flexGrow:1},children:"Sales Person:"}),(0,Z.jsx)(y.Z,{onClick:x.onTrue,children:(0,Z.jsx)(g.Z,{icon:s?"solar:pen-bold":"mingcute:add-line"})})]}),s?(0,Z.jsx)(p.Z,{spacing:1,children:(0,Z.jsx)(P.Z,{variant:"subtitle2",children:null===d||void 0===d?void 0:d.username})}):(0,Z.jsx)(P.Z,{typography:"caption",sx:{color:"error.main"},children:null===(e=i.salesPeople)||void 0===e?void 0:e.message})]})]}),(0,Z.jsx)(N.Z,{title:"Customers",open:m.value,onClose:m.onFalse,selected:function(e){return(null===q.J||void 0===q.J?void 0:q.J.id)===e},onSelect:function(e){o("customerObj",e),o("customerId",e.id),o("customerCode",e.customerCode)},list:t}),(0,Z.jsx)(D.Z,{title:"Sales",open:x.value,onClose:x.onFalse,selected:function(e){return(null===c||void 0===c?void 0:c.id)===e},onSelect:function(e){o("salesPersonObj",e),o("salesPerson",e.username)},list:s})]})}var k=n(53106);function S(){var e=(0,v.Gc)(),r=e.control,n=(0,e.watch)();return(0,Z.jsxs)(Z.Fragment,{children:[(0,Z.jsxs)(p.Z,{spacing:2,direction:{xs:"column",sm:"row"},sx:{p:3,bgcolor:"background.neutral"},children:[(0,Z.jsx)(j.au,{name:"invoiceNumber",label:"Invoice number",value:n.invoiceNumber}),(0,Z.jsx)(v.Qr,{name:"createDate",control:r,render:function(e){var r=e.field,n=e.fieldState.error;return(0,Z.jsx)(k.M,{label:"Date create",value:r.value,onChange:function(e){r.onChange(e)},slotProps:{textField:{fullWidth:!0,error:!!n,helperText:null===n||void 0===n?void 0:n.message}}})}}),(0,Z.jsx)(v.Qr,{name:"deliveryDate",control:r,render:function(e){var r=e.field,n=e.fieldState.error;return(0,Z.jsx)(k.M,{label:"Deliver date",value:r.value,onChange:function(e){r.onChange(e)},slotProps:{textField:{fullWidth:!0,error:!!n,helperText:null===n||void 0===n?void 0:n.message}}})}}),(0,Z.jsx)(j.au,{name:"invoiceAmount",label:"Ammount",value:n.invoiceAmount,type:"number"})]}),(0,Z.jsxs)(p.Z,{spacing:2,direction:{xs:"column",sm:"row"},sx:{p:3,bgcolor:"background.neutral"},children:[(0,Z.jsx)(j.au,{name:"currency",label:"Currency",value:n.currency}),(0,Z.jsx)(j.au,{name:"region",label:"Region",value:n.region}),(0,Z.jsx)(j.au,{name:"customerPO",label:"PO Number",value:n.customerPO}),(0,Z.jsx)(j.au,{name:"poValue",label:"PO Value",value:n.poValue,type:"number"}),(0,Z.jsx)(j.au,{name:"contractNo",label:"Contract",value:n.contractNo})]})]})}function I(e){var r=e.currentInvoice,n=(0,b.tv)(),o=(0,f.k)(),i=(0,f.k)(),s=d.Ry().shape({customerId:d.nK().nullable().required("Customer is required"),createDate:d.nK().nullable().required("Create date is required"),deliveryDate:d.nK().nullable().required("Delivery date is required"),invoiceNumber:d.Z_().required("Invoice number is required"),invoiceAmount:d.hT().required("Invoice amount is required"),currency:d.Z_().required("Currency is required"),customerCode:d.Z_().required("Customer code is required"),region:d.Z_().required("Region is required"),customerPO:d.Z_().required("Customer PO number is required"),poValue:d.Rx().required("PO value is required"),contractNo:d.Z_().required("contractNo is required"),salesPerson:d.Z_().required("salesPerson is required")}),a=(0,u.useMemo)((function(){return{customerObj:{},salesPersonObj:{},invoiceNumber:null===r||void 0===r?void 0:r.invoiceNumber,createDate:(null===r||void 0===r?void 0:r.createDate)||new Date,invoiceAmount:null===r||void 0===r?void 0:r.invoiceAmount,currency:null===r||void 0===r?void 0:r.currency,customerId:null===r||void 0===r?void 0:r.customerId,customerCode:null===r||void 0===r?void 0:r.customerCode,region:null===r||void 0===r?void 0:r.region,customerPO:null===r||void 0===r?void 0:r.customerPO,poValue:null===r||void 0===r?void 0:r.poValue,contractNo:null===r||void 0===r?void 0:r.contractNo,salesPerson:null===r||void 0===r?void 0:r.salesPerson,deliveryDate:(null===r||void 0===r?void 0:r.deliveryDate)||new Date}}),[r]),g=(0,v.cI)({resolver:(0,m.X)(s),defaultValues:a}),C=g.reset,y=g.watch,P=g.handleSubmit,w=g.formState.isSubmitting,q=(P(function(){var e=(0,c.Z)((0,l.Z)().mark((function e(r){return(0,l.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return console.info("Draft DATA",JSON.stringify(r)),o.onTrue(),e.prev=2,e.next=5,new Promise((function(e){return setTimeout(e,500)}));case 5:C(),o.onFalse(),n.push(t.H.dashboard.invoice.root),console.info("DATA",JSON.stringify(r,null,2)),e.next=15;break;case 11:e.prev=11,e.t0=e.catch(2),console.error(e.t0),o.onFalse();case 15:case"end":return e.stop()}}),e,null,[[2,11]])})));return function(r){return e.apply(this,arguments)}}()),P(function(){var e=(0,c.Z)((0,l.Z)().mark((function e(r){var o,s,a,c,u,d,v,m,x,h,p,b,f,j;return(0,l.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return i.onTrue(),e.prev=1,e.next=4,new Promise((function(e){return setTimeout(e,500)}));case 4:o=y(),s=o.invoiceNumber,a=o.createDate,c=o.invoiceAmount,u=o.currency,d=o.customerCode,v=o.region,m=o.customerPO,x=o.poValue,h=o.contractNo,p=o.salesPerson,b=o.deliveryDate,f={invoiceNo:s,issueInvoiceDate:a,invoiceAmount:c,currency:u,customerCode:d,region:v,customerPO:m,poValue:x,contractNo:h,salesTakerUsername:p,deliveryDate:b},C(),i.onFalse(),j=t.H.dashboard.invoice.root,console.log(f),fetch("https://invoicecollectionsystemapi.azurewebsites.net/api/Invoices",{method:"POST",headers:{Accept:"application.json","Content-Type":"application/json"},body:JSON.stringify(f),Cache:"default"}).then((function(e){return e.json()})).then((function(e){console.log(e)})).catch((function(e){console.log(e),j=""})),j&&n.replace(j),e.next=18;break;case 14:e.prev=14,e.t0=e.catch(1),console.error("Error:",e.t0),i.onFalse();case 18:case"end":return e.stop()}}),e,null,[[1,14]])})));return function(r){return e.apply(this,arguments)}}()));return(0,Z.jsxs)(j.ZP,{methods:g,onSubmit:q,children:[(0,Z.jsxs)(h.Z,{children:[(0,Z.jsx)(O,{}),(0,Z.jsx)(S,{})]}),(0,Z.jsx)(p.Z,{justifyContent:"flex-end",direction:"row",spacing:2,sx:{mt:3},children:(0,Z.jsxs)(x.Z,{size:"large",variant:"contained",loading:i.value&&w,type:"submit",children:[r?"Update":"Create"," & Send"]})})]})}function A(){var e=(0,s.K$)();return(0,Z.jsxs)(i.Z,{maxWidth:!e.themeStretch&&"lg",children:[(0,Z.jsx)(a.Z,{heading:"Create a new invoice",links:[{name:"Dashboard",href:t.H.dashboard.root},{name:"Invoice",href:t.H.dashboard.invoice.root},{name:"New Invoice"}],sx:{mb:{xs:3,md:5}}}),(0,Z.jsx)(I,{})]})}function _(){return(0,Z.jsxs)(Z.Fragment,{children:[(0,Z.jsx)(o.ql,{children:(0,Z.jsx)("title",{children:" Dashboard: Create a new invoice"})}),(0,Z.jsx)(A,{})]})}},58645:function(e){e.exports=function(e,r){for(var n,o=-1,i=e.length;++o<i;){var t=r(e[o]);void 0!==t&&(n=void 0===n?t:n+t)}return n}},87151:function(e,r,n){var o=n(58645),i=n(2100);e.exports=function(e){return e&&e.length?o(e,i):0}}}]);
//# sourceMappingURL=1025.42b0625e.chunk.js.map