"use strict";(self.webpackChunk_minimal_kit_cra_js=self.webpackChunk_minimal_kit_cra_js||[]).push([[2464],{50933:function(e,n,i){i.d(n,{Z:function(){return u}});var s=i(1413),t=i(45987),r=i(64554),l=i(50533),c=i(36314),o=i(4567),a=i(93517),d=i(83854),x=i(80184);function m(e){var n=e.link,i=e.activeLast,t=e.disabled,c=n.name,o=n.href,a=n.icon,m=(0,s.Z)({typography:"body2",alignItems:"center",color:"text.primary",display:"inline-flex"},t&&!i&&{cursor:"default",pointerEvents:"none",color:"text.disabled"}),h=(0,x.jsxs)(x.Fragment,{children:[a&&(0,x.jsx)(r.Z,{component:"span",sx:{mr:1,display:"inherit","& svg":{width:20,height:20}},children:a}),c]});return o?(0,x.jsx)(l.Z,{component:d.r,href:o,sx:m,children:h}):(0,x.jsxs)(r.Z,{sx:m,children:[" ",h," "]})}var h=["links","action","heading","moreLink","activeLast","sx"];function u(e){var n=e.links,i=e.action,d=e.heading,u=e.moreLink,Z=e.activeLast,f=e.sx,b=(0,t.Z)(e,h),p=n[n.length-1].name;return(0,x.jsxs)(r.Z,{sx:(0,s.Z)({},f),children:[(0,x.jsxs)(c.Z,{direction:"row",alignItems:"center",children:[(0,x.jsxs)(r.Z,{sx:{flexGrow:1},children:[d&&(0,x.jsx)(o.Z,{variant:"h4",gutterBottom:!0,children:d}),!!n.length&&(0,x.jsx)(a.Z,(0,s.Z)((0,s.Z)({separator:(0,x.jsx)(j,{})},b),{},{children:n.map((function(e){return(0,x.jsx)(m,{link:e,activeLast:Z,disabled:e.name===p},e.name||"")}))}))]}),i&&(0,x.jsxs)(r.Z,{sx:{flexShrink:0},children:[" ",i," "]})]}),!!u&&(0,x.jsx)(r.Z,{sx:{mt:2},children:u.map((function(e){return(0,x.jsx)(l.Z,{href:e,variant:"body2",target:"_blank",rel:"noopener",sx:{display:"table"},children:e},e)}))})]})}function j(){return(0,x.jsx)(r.Z,{component:"span",sx:{width:4,height:4,borderRadius:"50%",bgcolor:"text.disabled"}})}},82464:function(e,n,i){i.r(n),i.d(n,{default:function(){return g}});var s=i(6907),t=i(29439),r=i(72791),l=i(16002),c=i(64554),o=i(13034),a=i(89164),d=i(79012),x=i(68096),m=i(25801),h=i(38072),u=i(27216),j=i(50933),Z=i(31562),f=i(80184),b=["default","primary","secondary","info","success","warning","error"],p=["top","start","bottom","end"];function k(){var e=(0,r.useState)([!0,!1]),n=(0,t.Z)(e,2),i=n[0],s=n[1];return(0,f.jsxs)(f.Fragment,{children:[(0,f.jsx)(c.Z,{sx:{py:5,bgcolor:function(e){return"light"===e.palette.mode?"grey.200":"grey.800"}},children:(0,f.jsx)(a.Z,{children:(0,f.jsx)(j.Z,{heading:"Checkboxes",links:[{name:"Components",href:h.H.components},{name:"Checkboxes"}],moreLink:["https://mui.com/components/checkboxes"]})})}),(0,f.jsx)(a.Z,{sx:{my:10},children:(0,f.jsxs)(l.ZP,{columns:{xs:1,md:2},spacing:3,children:[(0,f.jsxs)(Z.Z,{title:"Basic",children:[(0,f.jsx)(o.Z,{size:"medium"}),(0,f.jsx)(o.Z,{size:"medium",defaultChecked:!0}),(0,f.jsx)(o.Z,{size:"medium",defaultChecked:!0,indeterminate:!0}),(0,f.jsx)(o.Z,{size:"medium",disabled:!0}),(0,f.jsx)(o.Z,{size:"medium",disabled:!0,defaultChecked:!0}),(0,f.jsx)(o.Z,{size:"medium",disabled:!0,indeterminate:!0})]}),(0,f.jsxs)(Z.Z,{title:"Size & Custom Icon",children:[(0,f.jsx)(m.Z,{label:"Normal",control:(0,f.jsx)(o.Z,{size:"medium",defaultChecked:!0})}),(0,f.jsx)(m.Z,{label:"Small",control:(0,f.jsx)(o.Z,{size:"small",defaultChecked:!0})}),(0,f.jsx)(m.Z,{control:(0,f.jsx)(o.Z,{color:"info",size:"small",icon:(0,f.jsx)(u.Z,{icon:"solar:heart-bold"}),checkedIcon:(0,f.jsx)(u.Z,{icon:"solar:heart-bold"})}),label:"Custom icon"}),(0,f.jsx)(m.Z,{control:(0,f.jsx)(o.Z,{color:"error",size:"small",icon:(0,f.jsx)(u.Z,{icon:"eva:award-fill"}),checkedIcon:(0,f.jsx)(u.Z,{icon:"eva:award-fill"})}),label:"Custom icon"})]}),(0,f.jsx)(Z.Z,{title:"Placement",children:(0,f.jsx)(x.Z,{component:"fieldset",children:(0,f.jsx)(d.Z,{"aria-label":"position",row:!0,children:p.map((function(e){return(0,f.jsx)(m.Z,{value:e,label:e,labelPlacement:e,control:(0,f.jsx)(o.Z,{size:"medium"}),sx:{textTransform:"capitalize"}},e)}))})})}),(0,f.jsxs)(Z.Z,{title:"Colors",children:[(0,f.jsxs)(d.Z,{children:[b.map((function(e){return(0,f.jsx)(m.Z,{control:(0,f.jsx)(o.Z,{size:"medium",defaultChecked:!0,color:e}),label:e,sx:{textTransform:"capitalize"}},e)})),(0,f.jsx)(m.Z,{disabled:!0,control:(0,f.jsx)(o.Z,{size:"medium",defaultChecked:!0,color:"error"}),label:"Disabled"})]}),(0,f.jsx)(x.Z,{component:"fieldset",children:(0,f.jsxs)(d.Z,{children:[b.map((function(e){return(0,f.jsx)(m.Z,{control:(0,f.jsx)(o.Z,{size:"medium",defaultChecked:!0,indeterminate:!0,color:e}),label:e,sx:{textTransform:"capitalize"}},e)})),(0,f.jsx)(m.Z,{disabled:!0,control:(0,f.jsx)(o.Z,{size:"medium",defaultChecked:!0,indeterminate:!0,color:"error"}),label:"Disabled"})]})})]}),(0,f.jsx)(Z.Z,{title:"Indeterminate",children:(0,f.jsxs)("div",{children:[(0,f.jsx)(m.Z,{label:"Parent",control:(0,f.jsx)(o.Z,{size:"medium",checked:i[0]&&i[1],indeterminate:i[0]!==i[1],onChange:function(e){s([e.target.checked,e.target.checked])}})}),(0,f.jsxs)("div",{children:[(0,f.jsx)(m.Z,{label:"Child 1",control:(0,f.jsx)(o.Z,{size:"medium",checked:i[0],onChange:function(e){s([e.target.checked,i[1]])}})}),(0,f.jsx)(m.Z,{label:"Child 2",control:(0,f.jsx)(o.Z,{size:"medium",checked:i[1],onChange:function(e){s([i[0],e.target.checked])}})})]})]})})]})})]})}function g(){return(0,f.jsxs)(f.Fragment,{children:[(0,f.jsx)(s.ql,{children:(0,f.jsx)("title",{children:" MUI: Checkbox"})}),(0,f.jsx)(k,{})]})}},31562:function(e,n,i){i.d(n,{Z:function(){return x}});var s=i(1413),t=i(45987),r=i(12065),l=i(27938),c=i(9585),o=i(36314),a=i(80184),d=["title","sx","children"];function x(e){var n=e.title,i=e.sx,x=e.children,m=(0,t.Z)(e,d);return(0,a.jsxs)(l.Z,{variant:"outlined",sx:{borderRadius:1.5,borderStyle:"dashed",bgcolor:function(e){return(0,r.Fq)(e.palette.grey[500],.04)}},children:[n&&(0,a.jsx)(c.Z,{title:n}),(0,a.jsx)(o.Z,(0,s.Z)((0,s.Z)({spacing:3,direction:"row",alignItems:"center",justifyContent:"center",flexWrap:"wrap",sx:(0,s.Z)({p:5,minHeight:180},i)},m),{},{children:x}))]})}}}]);
//# sourceMappingURL=2464.ef4850c2.chunk.js.map