(self.webpackChunk_minimal_kit_cra_js=self.webpackChunk_minimal_kit_cra_js||[]).push([[4937],{50933:function(t,n,e){"use strict";e.d(n,{Z:function(){return p}});var r=e(1413),s=e(45987),i=e(64554),o=e(50533),a=e(36314),c=e(4567),l=e(93517),u=e(83854),d=e(80184);function h(t){var n=t.link,e=t.activeLast,s=t.disabled,a=n.name,c=n.href,l=n.icon,h=(0,r.Z)({typography:"body2",alignItems:"center",color:"text.primary",display:"inline-flex"},s&&!e&&{cursor:"default",pointerEvents:"none",color:"text.disabled"}),x=(0,d.jsxs)(d.Fragment,{children:[l&&(0,d.jsx)(i.Z,{component:"span",sx:{mr:1,display:"inherit","& svg":{width:20,height:20}},children:l}),a]});return c?(0,d.jsx)(o.Z,{component:u.r,href:c,sx:h,children:x}):(0,d.jsxs)(i.Z,{sx:h,children:[" ",x," "]})}var x=["links","action","heading","moreLink","activeLast","sx"];function p(t){var n=t.links,e=t.action,u=t.heading,p=t.moreLink,m=t.activeLast,Z=t.sx,b=(0,s.Z)(t,x),f=n[n.length-1].name;return(0,d.jsxs)(i.Z,{sx:(0,r.Z)({},Z),children:[(0,d.jsxs)(a.Z,{direction:"row",alignItems:"center",children:[(0,d.jsxs)(i.Z,{sx:{flexGrow:1},children:[u&&(0,d.jsx)(c.Z,{variant:"h4",gutterBottom:!0,children:u}),!!n.length&&(0,d.jsx)(l.Z,(0,r.Z)((0,r.Z)({separator:(0,d.jsx)(v,{})},b),{},{children:n.map((function(t){return(0,d.jsx)(h,{link:t,activeLast:m,disabled:t.name===f},t.name||"")}))}))]}),e&&(0,d.jsxs)(i.Z,{sx:{flexShrink:0},children:[" ",e," "]})]}),!!p&&(0,d.jsx)(i.Z,{sx:{mt:2},children:p.map((function(t){return(0,d.jsx)(o.Z,{href:t,variant:"body2",target:"_blank",rel:"noopener",sx:{display:"table"},children:t},t)}))})]})}function v(){return(0,d.jsx)(i.Z,{component:"span",sx:{width:4,height:4,borderRadius:"50%",bgcolor:"text.disabled"}})}},91617:function(t,n,e){"use strict";e.d(n,{Ag:function(){return x},DW:function(){return j},ES:function(){return d},G_:function(){return f},OX:function(){return Z},ZN:function(){return b},iJ:function(){return m},kT:function(){return v},qL:function(){return a},zJ:function(){return l}});var r=e(74165),s=e(15861),i=e(38072),o="https://invoicecollectionsystemapi.azurewebsites.net";function a(){return c.apply(this,arguments)}function c(){return(c=(0,s.Z)((0,r.Z)().mark((function t(){var n;return(0,r.Z)().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return n=[],t.next=3,fetch("".concat(o,"/api/invoices"),{mode:"cors"}).then((function(t){return t.json()})).then((function(t){n=t})).catch((function(t){return console.log()}));case 3:return t.abrupt("return",n);case 4:case"end":return t.stop()}}),t)})))).apply(this,arguments)}function l(t){return u.apply(this,arguments)}function u(){return(u=(0,s.Z)((0,r.Z)().mark((function t(n){var e;return(0,r.Z)().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return e=[],t.next=3,fetch("".concat(o,"/api/Invoices/Department/").concat(n),{mode:"cors"}).then((function(t){return t.json()})).then((function(t){e=t})).catch((function(t){return console.log()}));case 3:return t.abrupt("return",e);case 4:case"end":return t.stop()}}),t)})))).apply(this,arguments)}function d(t){return h.apply(this,arguments)}function h(){return(h=(0,s.Z)((0,r.Z)().mark((function t(n){var e,s;return(0,r.Z)().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return e=[],s="",s=n?"".concat(o,"/api/Invoices/GetInvoicesBySalesConfirmation?salesConfirm=").concat(n):"".concat(o,"/api/Invoices/NotConfirmedBySales"),t.next=5,fetch(s,{mode:"cors"}).then((function(t){return t.json()})).then((function(t){e=t})).catch((function(t){return console.log()}));case 5:return t.abrupt("return",e);case 6:case"end":return t.stop()}}),t)})))).apply(this,arguments)}function x(t){return p.apply(this,arguments)}function p(){return(p=(0,s.Z)((0,r.Z)().mark((function t(n){var e,s;return(0,r.Z)().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,fetch("".concat(o,"/api/invoices/").concat(n),{mode:"cors"});case 3:if(!(e=t.sent).ok){t.next=9;break}return t.next=7,e.json();case 7:return s=t.sent,t.abrupt("return",s);case 9:console.error("Failed to fetch invoice: ".concat(e.status," - ").concat(e.statusText)),t.next=15;break;case 12:t.prev=12,t.t0=t.catch(0),console.error(t.t0);case 15:return t.abrupt("return",{});case 16:case"end":return t.stop()}}),t,null,[[0,12]])})))).apply(this,arguments)}function v(t,n){var e="";switch(t){case-1:case 0:e="".concat(o,"/api/Invoices/").concat(n,"/Edit/Operation");break;case 1:e="".concat(o,"/api/Invoices/").concat(n,"/Edit/installation");break;case 2:e="".concat(o,"/api/Invoices/").concat(n,"/Edit/Sales");break;case 3:e="".concat(o,"/api/Invoices/").concat(n,"/Edit/Collection");break;case 4:e="".concat(o,"/api/Invoices/").concat(n,"/Edit/TenderAndContracts")}return e}function m(t){var n="";switch(t){case-1:case 0:n=i.H.departments.operation.list;break;case 1:n=i.H.departments.installation.list;break;case 2:n=i.H.departments.sales.list;break;case 3:n=i.H.departments.collection.list;break;case 4:n=i.H.departments.tenderAndConract.list}return n}function Z(){return"".concat(o,"/api/ExcelImport/import-invoices")}function b(t){return"".concat(o,"/api/Attachments/").concat(t)}function f(){return y.apply(this,arguments)}function y(){return(y=(0,s.Z)((0,r.Z)().mark((function t(){var n;return(0,r.Z)().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return n=[],t.next=3,fetch("".concat(o,"/api/CollectionData"),{mode:"cors"}).then((function(t){return t.json()})).then((function(t){n=t})).catch((function(t){return console.log()}));case 3:return t.abrupt("return",n);case 4:case"end":return t.stop()}}),t)})))).apply(this,arguments)}function j(t){return g.apply(this,arguments)}function g(){return(g=(0,s.Z)((0,r.Z)().mark((function t(n){var e;return(0,r.Z)().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return e={},console.log("".concat(o,"/api/Invoices/").concat(n,"/Inquiry")),t.next=4,fetch("".concat(o,"/api/Invoices/").concat(n,"/Inquiry"),{mode:"cors"}).then((function(t){return t.json()})).then((function(t){e=t})).catch((function(t){return console.log()}));case 4:return t.abrupt("return",e);case 5:case"end":return t.stop()}}),t)})))).apply(this,arguments)}},10826:function(t,n,e){"use strict";e.d(n,{Z:function(){return j}});var r=e(29439),s=e(72791),i=e(66934),o=e(64554),a=e(57621),c=e(79836),l=e(36314),u=e(94721),d=e(9195),h=e(56890),x=e(68745),p=e(53382),v=e(24308),m=e(4567),Z=e(39281),b=(e(17070),e(80160)),f=e(47974),y=(e(51175),e(80184));(0,i.ZP)(d.Z)((function(t){var n=t.theme;return{"& td":{textAlign:"right",borderBottom:"none",paddingTop:n.spacing(1),paddingBottom:n.spacing(1)}}}));function j(t){var n=t.invoice,e=(0,s.useState)(n),i=(0,r.Z)(e,2),j=i[0],g=(i[1],(0,y.jsxs)(y.Fragment,{children:[(0,y.jsx)(m.Z,{variant:"h6",gutterBottom:!0,children:"Notes"}),(0,y.jsx)(Z.Z,{sx:{overflow:"unset",mt:5},children:(0,y.jsx)(f.Z,{children:(0,y.jsxs)(c.Z,{sx:{minWidth:960},children:[(0,y.jsx)(h.Z,{children:(0,y.jsxs)(d.Z,{children:[(0,y.jsx)(x.Z,{width:40,children:"#"}),(0,y.jsx)(x.Z,{sx:{typography:"subtitle2"},children:"Note"})]})}),(0,y.jsx)(p.Z,{children:null===j||void 0===j?void 0:j.notes.map((function(t,n){return(0,y.jsxs)(d.Z,{children:[(0,y.jsx)(x.Z,{children:n+1}),(0,y.jsx)(x.Z,{children:(0,y.jsx)(m.Z,{variant:"subtitle2",children:t.noteText})})]},n)}))})]})})})]})),k=(0,y.jsxs)(y.Fragment,{children:[(0,y.jsx)(m.Z,{variant:"h6",gutterBottom:!0,children:"Attachments"}),(0,y.jsx)(Z.Z,{sx:{overflow:"unset",mt:5,mb:7},children:(0,y.jsx)(f.Z,{children:(0,y.jsxs)(c.Z,{sx:{minWidth:960},children:[(0,y.jsx)(h.Z,{children:(0,y.jsxs)(d.Z,{children:[(0,y.jsx)(x.Z,{width:40,children:"#"}),(0,y.jsx)(x.Z,{sx:{typography:"subtitle2"},children:"Name"})]})}),(0,y.jsx)(p.Z,{children:null===j||void 0===j?void 0:j.attachments.map((function(t,n){return(0,y.jsxs)(d.Z,{children:[(0,y.jsx)(x.Z,{children:n+1}),(0,y.jsx)(x.Z,{children:(0,y.jsxs)(m.Z,{variant:"subtitle2",children:[" ",(0,y.jsx)("a",{target:"_blank",rel:"noreferrer",href:t.attachmentPath,children:t.fileName})," "]})})]},n)}))})]})})})]});v.Z,v.Z,m.Z,m.Z,v.Z,m.Z,m.Z;return(0,y.jsxs)(a.Z,{sx:{pt:5,px:5},children:[(0,y.jsxs)(o.Z,{rowGap:5,display:"grid",alignItems:"center",gridTemplateColumns:{xs:"repeat(1, 1fr)",sm:"repeat(2, 1fr)"},children:[(0,y.jsx)(o.Z,{component:"img",alt:"logo",src:"/logo/logo_single.svg",sx:{width:48,height:48}}),(0,y.jsx)(l.Z,{spacing:1,alignItems:{xs:"flex-start",md:"flex-end"},children:(0,y.jsx)(b.Z,{variant:"soft",color:"default",children:j.department})}),(0,y.jsxs)(l.Z,{sx:{typography:"body2"},children:[(0,y.jsx)(m.Z,{variant:"subtitle2",sx:{mb:1},children:"Issue Date:"}),null===j||void 0===j?void 0:j.issueInvoiceDate]}),(0,y.jsxs)(l.Z,{sx:{typography:"body2"},children:[(0,y.jsx)(m.Z,{variant:"subtitle2",sx:{mb:1},children:"Amount"}),null===j||void 0===j?void 0:j.invoiceAmount]}),(0,y.jsxs)(l.Z,{sx:{typography:"body2"},children:[(0,y.jsx)(m.Z,{variant:"subtitle2",sx:{mb:1},children:"Currency"}),null===j||void 0===j?void 0:j.currency]}),(0,y.jsxs)(l.Z,{sx:{typography:"body2"},children:[(0,y.jsx)(m.Z,{variant:"subtitle2",sx:{mb:1},children:"Customer Code"}),null===j||void 0===j?void 0:j.customerCode]}),(0,y.jsxs)(l.Z,{sx:{typography:"body2"},children:[(0,y.jsx)(m.Z,{variant:"subtitle2",sx:{mb:1},children:"Name English"}),null===j||void 0===j?void 0:j.customerNameEn]}),(0,y.jsxs)(l.Z,{sx:{typography:"body2"},children:[(0,y.jsx)(m.Z,{variant:"subtitle2",sx:{mb:1},children:"Name Arabic"}),null===j||void 0===j?void 0:j.customerNameEn]}),(0,y.jsxs)(l.Z,{sx:{typography:"body2"},children:[(0,y.jsx)(m.Z,{variant:"subtitle2",sx:{mb:1},children:"Po Number"}),null===j||void 0===j?void 0:j.customerPO]}),(0,y.jsxs)(l.Z,{sx:{typography:"body2"},children:[(0,y.jsx)(m.Z,{variant:"subtitle2",sx:{mb:1},children:"PO Value"}),null===j||void 0===j?void 0:j.poValue]}),(0,y.jsxs)(l.Z,{sx:{typography:"body2"},children:[(0,y.jsx)(m.Z,{variant:"subtitle2",sx:{mb:1},children:"Region"}),null===j||void 0===j?void 0:j.region]}),(0,y.jsxs)(l.Z,{sx:{typography:"body2"},children:[(0,y.jsx)(m.Z,{variant:"subtitle2",sx:{mb:1},children:"Contract Number"}),null===j||void 0===j?void 0:j.contractNo]}),(0,y.jsxs)(l.Z,{sx:{typography:"body2"},children:[(0,y.jsx)(m.Z,{variant:"subtitle2",sx:{mb:1},children:"Delivery Date"}),null===j||void 0===j?void 0:j.deliveryDate]}),(0,y.jsxs)(l.Z,{sx:{typography:"body2"},children:[(0,y.jsx)(m.Z,{variant:"subtitle2",sx:{mb:1},children:"Installation Date"}),null===j||void 0===j?void 0:j.installationDate]}),(0,y.jsxs)(l.Z,{sx:{typography:"body2"},children:[(0,y.jsx)(m.Z,{variant:"subtitle2",sx:{mb:1},children:"Department"}),null===j||void 0===j?void 0:j.department]}),(0,y.jsxs)(l.Z,{sx:{typography:"body2"},children:[(0,y.jsx)(m.Z,{variant:"subtitle2",sx:{mb:1},children:"Installation Status"}),null===j||void 0===j?void 0:j.installationStatus]}),(0,y.jsxs)(l.Z,{sx:{typography:"body2"},children:[(0,y.jsx)(m.Z,{variant:"subtitle2",sx:{mb:1},children:"Days To Collected"}),null===j||void 0===j?void 0:j.daysToCollected]}),(0,y.jsxs)(l.Z,{sx:{typography:"body2"},children:[(0,y.jsx)(m.Z,{variant:"subtitle2",sx:{mb:1},children:"Acknowledge Status"}),null===j||void 0===j?void 0:j.acknowledgeStatus]}),(0,y.jsxs)(l.Z,{sx:{typography:"body2"},children:[(0,y.jsx)(m.Z,{variant:"subtitle2",sx:{mb:1},children:"Collection Source"}),null===j||void 0===j?void 0:j.collectionSource]}),(0,y.jsxs)(l.Z,{sx:{typography:"body2"},children:[(0,y.jsx)(m.Z,{variant:"subtitle2",sx:{mb:1},children:"Claim Status"}),null===j||void 0===j?void 0:j.claimStatus]}),(0,y.jsxs)(l.Z,{sx:{typography:"body2"},children:[(0,y.jsx)(m.Z,{variant:"subtitle2",sx:{mb:1},children:"Claims Detail Status"}),null===j||void 0===j?void 0:j.claimsDetailStatus]}),(0,y.jsxs)(l.Z,{sx:{typography:"body2"},children:[(0,y.jsx)(m.Z,{variant:"subtitle2",sx:{mb:1},children:"Sales Confirm"}),null===j||void 0===j?void 0:j.salesConfirm]}),(0,y.jsxs)(l.Z,{sx:{typography:"body2"},children:[(0,y.jsx)(m.Z,{variant:"subtitle2",sx:{mb:1},children:"Created By"}),null===j||void 0===j?void 0:j.createdBy]}),(0,y.jsxs)(l.Z,{sx:{typography:"body2"},children:[(0,y.jsx)(m.Z,{variant:"subtitle2",sx:{mb:1},children:"Sales Taker"}),null===j||void 0===j?void 0:j.salesTakerName]}),(0,y.jsxs)(l.Z,{sx:{typography:"body2"},children:[(0,y.jsx)(m.Z,{variant:"subtitle2",sx:{mb:1},children:"Collector Name"}),null===j||void 0===j?void 0:j.collectorName]}),(0,y.jsxs)(l.Z,{sx:{typography:"body2",mb:3},children:[(0,y.jsx)(m.Z,{variant:"subtitle2",sx:{mb:1},children:"Responsible Engineer Name"}),null===j||void 0===j?void 0:j.responsibleEngineerName]})]}),g,(0,y.jsx)(u.Z,{sx:{mt:5,borderStyle:"dashed",mb:3}}),k]})}},51175:function(t,n,e){"use strict";e(72791);var r=e(96851);e(38072),e(19208),e(22459),e(27216),e(17070),e(80184);r.Zx.register({family:"Roboto",fonts:[{src:"/fonts/Roboto-Regular.ttf"},{src:"/fonts/Roboto-Bold.ttf"}]})},42480:function(){}}]);
//# sourceMappingURL=4937.38d228c2.chunk.js.map