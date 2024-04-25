"use strict";(self.webpackChunkins_app=self.webpackChunkins_app||[]).push([[313],{450:(e,s,a)=>{a.d(s,{A:()=>l});var t=a(5475),r=a(579);const l=e=>{let{root:s,pageName:a}=e;return(0,r.jsx)("div",{className:"main-content-header",children:(0,r.jsx)("div",{className:"card",children:(0,r.jsx)("div",{className:"card-body no-padding",children:(0,r.jsxs)("ol",{className:"breadcrumb ltn no-radius",children:[(0,r.jsx)("li",{className:"text-normal",children:(0,r.jsx)(t.k2,{to:"/dashboard",children:"Main Dashboard"})}),s&&(0,r.jsx)("li",{className:"text-normal",children:(0,r.jsx)(t.k2,{to:"/".concat(s),children:s})}),(0,r.jsx)("li",{className:"active text-lg",children:a})]})})})})}},6181:(e,s,a)=>{a.d(s,{z:()=>n});var t=a(5043),r=a(4743),l=a(4569);function n(){const{token:e}=(0,t.useContext)(l.x),[s,a]=(0,t.useState)(null),[n,c]=(0,t.useState)(!1);return{remove:async s=>{try{c(!0);const t=await r.A.deleteDataApi(s,e);t&&a(t),c(!1)}catch(t){c(!1)}},data:s,loading:n}}},8489:(e,s,a)=>{a.d(s,{L:()=>n});var t=a(5043),r=a(4569),l=a(4743);function n(){const{token:e}=(0,t.useContext)(r.x),[s,a]=(0,t.useState)(null),[n,c]=(0,t.useState)(!1);return{fetch:async s=>{try{c(!0),a(null);const t=await l.A.getDataApi({...s,query:s.query?JSON.parse(s.query):{}},e);t&&a(t),c(!1)}catch(t){c(!1)}},data:s,loading:n}}},2313:(e,s,a)=>{a.r(s),a.d(s,{default:()=>h});var t=a(5043),r=a(3216),l=a(5475),n=a(450),c=a(7198),i=a(2420),d=a(6282),o=a(7172),u=a(8489),m=a(6181),x=a(579);const p="system_users";function h(){var e,s;const a=(0,r.Zp)();let h=(0,t.useRef)(null);const[j,g]=(0,t.useState)({skip:0,take:10,search:""}),{remove:v,data:N,loading:b}=(0,m.z)(),{fetch:y,data:f,loading:k}=(0,u.L)();(0,t.useEffect)((()=>{clearTimeout(h.current),h.current=setTimeout((()=>{y({url:p,query:JSON.stringify(j)})}),500)}),[j,N]);const w=[{title:"User Group Name",dataIndex:"system_users_group",sorter:!0,render:e=>null===e||void 0===e?void 0:e.systemUserGroupName},{title:"User Login ID",dataIndex:"systemUserLoginId",sorter:!0},{title:"User Name",dataIndex:"systemUserName",sorter:!0},{title:"Actions",dataIndex:"actions",key:"actions",render:(e,s)=>(0,x.jsxs)("div",{className:"text-center actions",children:[(0,x.jsx)(l.k2,{to:"/edit-user/".concat(s.id),title:"Edit User",children:(0,x.jsx)("img",{className:"navigicon",src:"assets/apps/images/edit-dark-grey.png"})}),"\xa0\xa0",(0,x.jsx)(i.A,{title:"Delete the user",description:"Are you sure to delete this user?",onConfirm:()=>v({url:p,body:s}),okText:"Yes",cancelText:"No",children:(0,x.jsx)("img",{className:"navigicon",src:"assets/apps/images/lock-dark-grey.png"})}),"\xa0\xa0",(0,x.jsx)(d.A,{content:(0,x.jsxs)(x.Fragment,{children:[(0,x.jsxs)("p",{children:["Created On: 07-Nov-2022 at 18:09 PM",(0,x.jsx)("br",{}),"Created By: Instrowest Pty Ltd (apps@instrowest.com.au)"]}),(0,x.jsxs)("p",{children:["Modified On: 11-Nov-2022 at 18:09 PM",(0,x.jsx)("br",{}),"Modified By: Instrowest Pty Ltd (apps@instrowest.com.au)"]})]}),title:"",trigger:"click",className:"recloginfo",children:(0,x.jsx)("img",{className:"navigicon",src:"assets/apps/images/info-dark-grey.png"})})]})}];return(0,x.jsxs)(x.Fragment,{children:[(0,x.jsx)(n.A,{root:"",pageName:"Users"}),(0,x.jsx)("div",{className:"main-content-body",children:(0,x.jsx)("div",{className:"col-lg-12 col-md-12 col-sm-12 col-xs-12",children:(0,x.jsx)("div",{className:"row",children:(0,x.jsxs)("div",{className:"card",children:[(0,x.jsx)(c.A,{ListName:"List All Users"}),(0,x.jsxs)("div",{className:"card-body",children:[(0,x.jsxs)("div",{className:"dataTables_wrapper form-inline dt-bootstrap no-footer",children:[(0,x.jsx)("div",{className:"clear"}),(0,x.jsx)("div",{className:"col-lg-6 col-md-6 col-sm-6 col-xs-12 no-padding dataTables_length",children:(0,x.jsxs)("label",{children:[(0,x.jsxs)("select",{name:"users-groups_length","aria-controls":"users-groups",className:"fl form-control input-sm",value:j.take,onChange:e=>g({...j,take:Number(e.target.value)}),children:[(0,x.jsx)("option",{value:"10",children:"10"}),(0,x.jsx)("option",{value:"20",children:"20"}),(0,x.jsx)("option",{value:"25",children:"25"}),(0,x.jsx)("option",{value:"50",children:"50"}),(0,x.jsx)("option",{value:"100",children:"100"})]}),(0,x.jsx)("div",{className:"fl rec",children:"records per page."})]})}),(0,x.jsx)("div",{className:"dataTables_filter",children:(0,x.jsxs)("label",{children:["Search Record: ",(0,x.jsx)("input",{type:"search",className:"form-control input-sm",placeholder:"",value:j.search,onChange:e=>g({...j,search:e.target.value})})]})})]}),(0,x.jsx)(o.A,{className:"mainTable",loading:k||b,dataSource:null!==(e=null===f||void 0===f?void 0:f.data)&&void 0!==e?e:[],columns:w,pagination:{showQuickJumper:!0,total:null!==(s=null===f||void 0===f?void 0:f.count)&&void 0!==s?s:0,showTotal:e=>"Showing ".concat(e," records."),onChange:(e,s)=>{g({...j,skip:(e-1)*s,take:s})}}}),(0,x.jsx)("div",{className:"clear"}),(0,x.jsxs)("div",{className:"card-action table-buttons",children:[(0,x.jsxs)("div",{className:"fl",children:[(0,x.jsx)("button",{type:"button",name:"Groups_Delete_Selected",className:"btn btn-danger delete btn-raised text-uppercase ripple",title:"Delete Selected",children:"Delete Selected"}),"\xa0\xa0\xa0"]}),(0,x.jsx)("div",{className:"fl",children:(0,x.jsx)("button",{type:"button",onClick:()=>a("/add-user"),name:"Groups_Add_New",className:"btn btn-success add btn-raised text-uppercase ripple",title:"Add New Group",children:"Add New User"})})]}),(0,x.jsx)("div",{className:"clear"})]})]})})})})]})}}}]);
//# sourceMappingURL=313.51696d1d.chunk.js.map