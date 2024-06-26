"use strict";(self.webpackChunkins_app=self.webpackChunkins_app||[]).push([[969],{450:(e,s,a)=>{a.d(s,{A:()=>r});var t=a(5475),l=a(579);const r=e=>{let{root:s,pageName:a}=e;return(0,l.jsx)("div",{className:"main-content-header",children:(0,l.jsx)("div",{className:"card",children:(0,l.jsx)("div",{className:"card-body no-padding",children:(0,l.jsxs)("ol",{className:"breadcrumb ltn no-radius",children:[(0,l.jsx)("li",{className:"text-normal",children:(0,l.jsx)(t.k2,{to:"/dashboard",children:"Main Dashboard"})}),s&&(0,l.jsx)("li",{className:"text-normal",children:(0,l.jsx)(t.k2,{to:"/".concat(s),children:s})}),(0,l.jsx)("li",{className:"active text-lg",children:a})]})})})})}},6181:(e,s,a)=>{a.d(s,{z:()=>n});var t=a(5043),l=a(4743),r=a(4569);function n(){const{token:e}=(0,t.useContext)(r.x),[s,a]=(0,t.useState)(null),[n,i]=(0,t.useState)(!1);return{remove:async s=>{try{i(!0);const t=await l.A.deleteDataApi(s,e);t&&a(t),i(!1)}catch(t){i(!1)}},data:s,loading:n}}},8489:(e,s,a)=>{a.d(s,{L:()=>n});var t=a(5043),l=a(4569),r=a(4743);function n(){const{token:e}=(0,t.useContext)(l.x),[s,a]=(0,t.useState)(null),[n,i]=(0,t.useState)(!1);return{fetch:async s=>{try{i(!0),a(null);const t=await r.A.getDataApi({...s,query:s.query?JSON.parse(s.query):{}},e);t&&a(t),i(!1)}catch(t){i(!1)}},data:s,loading:n}}},9969:(e,s,a)=>{a.r(s),a.d(s,{default:()=>h});var t=a(5043),l=a(3216),r=a(5475),n=a(7198),i=a(450),c=a(2420),d=a(6282),o=a(7172),p=a(8489),u=a(6181),m=a(579);const x="suppliers";function h(){var e,s;const a=(0,l.Zp)();let h=(0,t.useRef)(null);const[j,N]=(0,t.useState)({skip:0,take:10,search:""}),{remove:g,data:v,loading:b}=(0,u.z)(),{fetch:y,data:f,loading:k}=(0,p.L)();(0,t.useEffect)((()=>{clearTimeout(h.current),h.current=setTimeout((()=>{y({url:x,query:JSON.stringify(j)})}),500)}),[j,v]);const A=[{title:"Supplier Type",dataIndex:"supplierType",sorter:!0},{title:"Supplier Name",dataIndex:"supplierName",sorter:!0},{title:"Actions",dataIndex:"actions",key:"actions",render:(e,s)=>(0,m.jsxs)("div",{className:"text-center actions",children:[(0,m.jsx)(r.k2,{to:"/edit-supplier/".concat(s.id),title:"Edit Customer",children:(0,m.jsx)("img",{className:"navigicon",src:"assets/apps/images/edit-dark-grey.png"})}),"\xa0\xa0",(0,m.jsx)(c.A,{title:"Delete the supplier",description:"Are you sure to delete this supplier?",onConfirm:()=>g({url:x,body:s}),okText:"Yes",cancelText:"No",children:(0,m.jsx)("img",{className:"navigicon",src:"assets/apps/images/lock-dark-grey.png"})}),"\xa0\xa0",(0,m.jsx)(d.A,{content:(0,m.jsxs)(m.Fragment,{children:[(0,m.jsxs)("p",{children:["Created On: 07-Nov-2022 at 18:09 PM",(0,m.jsx)("br",{}),"Created By: Instrowest Pty Ltd (apps@instrowest.com.au)"]}),(0,m.jsxs)("p",{children:["Modified On: 11-Nov-2022 at 18:09 PM",(0,m.jsx)("br",{}),"Modified By: Instrowest Pty Ltd (apps@instrowest.com.au)"]})]}),title:"",trigger:"click",className:"recloginfo",children:(0,m.jsx)("img",{className:"navigicon",src:"assets/apps/images/info-dark-grey.png"})})]})}];return(0,m.jsxs)(m.Fragment,{children:[(0,m.jsx)(i.A,{root:"",pageName:"Suppliers"}),(0,m.jsx)("div",{className:"main-content-body",children:(0,m.jsx)("div",{className:"col-lg-12 col-md-12 col-sm-12 col-xs-12",children:(0,m.jsx)("div",{className:"row",children:(0,m.jsxs)("div",{className:"card",children:[(0,m.jsx)(n.A,{ListName:"List All Suppliers"}),(0,m.jsxs)("div",{className:"card-body",children:[(0,m.jsxs)("div",{className:"dataTables_wrapper form-inline dt-bootstrap no-footer",children:[(0,m.jsx)("div",{className:"clear"}),(0,m.jsx)("div",{className:"col-lg-6 col-md-6 col-sm-6 col-xs-12 no-padding dataTables_length",children:(0,m.jsxs)("label",{children:[(0,m.jsxs)("select",{name:"users-groups_length","aria-controls":"users-groups",className:"fl form-control input-sm",value:j.take,onChange:e=>N({...j,take:Number(e.target.value)}),children:[(0,m.jsx)("option",{value:"10",children:"10"}),(0,m.jsx)("option",{value:"20",children:"20"}),(0,m.jsx)("option",{value:"25",children:"25"}),(0,m.jsx)("option",{value:"50",children:"50"}),(0,m.jsx)("option",{value:"100",children:"100"})]}),(0,m.jsx)("div",{className:"fl rec",children:"records per page."})]})}),(0,m.jsx)("div",{className:"dataTables_filter",children:(0,m.jsxs)("label",{children:["Search Record: ",(0,m.jsx)("input",{type:"search",className:"form-control input-sm",placeholder:"",value:j.search,onChange:e=>N({...j,search:e.target.value})})]})})]}),(0,m.jsx)(o.A,{className:"mainTable",loading:k||b,dataSource:null!==(e=null===f||void 0===f?void 0:f.data)&&void 0!==e?e:[],columns:A,pagination:{showQuickJumper:!0,total:null!==(s=null===f||void 0===f?void 0:f.count)&&void 0!==s?s:0,showTotal:e=>"Showing ".concat(e," records."),onChange:(e,s)=>{N({...j,skip:(e-1)*s,take:s})}}}),(0,m.jsx)("div",{className:"clear"}),(0,m.jsx)("div",{className:"card-action table-buttons",children:(0,m.jsxs)("div",{id:"Delete_Buttons",className:"fl",children:[(0,m.jsx)("button",{type:"button",id:"Orders_Delete_Selected",name:"Orders_Delete_Selected",className:"btn btn-danger ink-reaction text-uppercase",title:"Delete Selected",children:"Delete Selected"}),"\xa0\xa0\xa0",(0,m.jsx)("button",{onClick:()=>a("/add-supplier"),type:"button",id:"Orders_Add_New",name:"Orders_Add_New",className:"btn btn-success btn-raised save text-uppercase white ripple",title:"Add New Order",children:"Add Supplier"}),"\xa0\xa0\xa0",(0,m.jsx)("button",{type:"button",id:"Orders_Add_New",name:"Orders_Add_New",className:"btn btn-info add btn-raised text-uppercase ripple exportallbtn",title:"Add New Order",children:"Export All Supplier"})]})}),(0,m.jsx)("div",{className:"clear"})]})]})})})})]})}}}]);
//# sourceMappingURL=969.d9bedebe.chunk.js.map