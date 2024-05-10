"use strict";(self.webpackChunkins_app=self.webpackChunkins_app||[]).push([[176],{450:(e,s,a)=>{a.d(s,{A:()=>o});var l=a(5475),r=a(579);const o=e=>{let{root:s,pageName:a}=e;return(0,r.jsx)("div",{className:"main-content-header",children:(0,r.jsx)("div",{className:"card",children:(0,r.jsx)("div",{className:"card-body no-padding",children:(0,r.jsxs)("ol",{className:"breadcrumb ltn no-radius",children:[(0,r.jsx)("li",{className:"text-normal",children:(0,r.jsx)(l.k2,{to:"/dashboard",children:"Main Dashboard"})}),s&&(0,r.jsx)("li",{className:"text-normal",children:(0,r.jsx)(l.k2,{to:"/".concat(s),children:s})}),(0,r.jsx)("li",{className:"active text-lg",children:a})]})})})})}},9306:(e,s,a)=>{a.d(s,{s:()=>d});var l=a(5043),r=a(4569),o=a(4743);function d(e){const{token:s}=(0,l.useContext)(r.x),[a,d]=(0,l.useState)({}),[i,n]=(0,l.useState)(!0);return(0,l.useEffect)((()=>{(async()=>{n(!0);const a=await o.A.getDataApi({...e,query:e.query?JSON.parse(e.query):{}},s);a&&d(a),n(!1)})()}),[e.query]),{data:a,loading:i}}},5676:(e,s,a)=>{a.d(s,{e:()=>d});var l=a(5043),r=a(4743),o=a(4569);function d(){const{token:e}=(0,l.useContext)(o.x),[s,a]=(0,l.useState)(null),[d,i]=(0,l.useState)(!1);return{edit:async(s,l)=>{try{i(!0);const o=await r.A.editDataApi({url:s,body:l},e);o&&a(o),i(!1)}catch(o){i(!1)}},data:s,loading:d}}},1176:(e,s,a)=>{a.r(s),a.d(s,{default:()=>p});var l=a(5043),r=a(3216),o=a(3516),d=a(899),i=a(4307),n=a(9306),t=a(9202),c=a(5158),m=a(5676),u=a(450),h=a(7198),x=a(2145),y=a(579);const j="system_users",N={systemUserGroupId:"",systemUserLoginId:"",systemUserComment:"",systemUserShowNoOfRecordsPerPage:"",systemUserMenuStyle:"",systemUserName:""};function p(){const e=(0,r.Zp)(),{id:s}=(0,r.g)(),a=d.Ik().shape({systemUserGroupId:d.Yj().required("User group is required"),systemUserShowNoOfRecordsPerPage:d.Yj().required("This is required"),systemUserMenuStyle:d.Yj().required("This is required"),systemUserName:d.Yj().required("User name is Required"),systemUserLoginPassword:d.Yj().required("Password is required"),systemUserLoginId:d.Yj().email("Invalid email address").required("Email is Required")}),{fetchSingle:p,data:v,loading:g}=(0,t.K)();(0,l.useEffect)((()=>{p(j,s)}),[s]);const{create:b,data:f,loading:w}=(0,c.Y)(),{edit:U,data:S,loading:q}=(0,m.e)();(0,l.useEffect)((()=>{201==(null===f||void 0===f?void 0:f.status)&&e(-1),200==(null===S||void 0===S?void 0:S.status)&&e(-1)}),[f,S]);const{data:P}=(0,n.s)({url:"system_users_groups",query:JSON.stringify({})});let C=null!==P&&void 0!==P&&P.data?null===P||void 0===P?void 0:P.data.map((e=>({label:e.systemUserGroupName,value:e.id}))):[];const k=[{label:"25",value:"25"},{label:"50",value:"50"},{label:"100",value:"100"},{label:"All",value:"all"}],A=[{label:"Collapsed",value:"collapsed"},{label:"Expanded",value:"expanded"}];return g?(0,y.jsx)(y.Fragment,{children:"loading"}):(0,y.jsxs)(y.Fragment,{children:[(0,y.jsx)(u.A,{root:"users",pageName:"".concat(s?"Edit":"Add"," User")}),(0,y.jsx)("div",{className:"main-content-body",children:(0,y.jsx)("div",{className:"col-lg-12 col-md-12 col-sm-12 col-xs-12",children:(0,y.jsx)("div",{className:"row",children:(0,y.jsxs)("div",{className:"card",children:[(0,y.jsx)(h.A,{ListName:"".concat(s?"Edit":"Add"," User (* indicates mandatory field(s)).")}),(0,y.jsx)("div",{className:"form-horizontal has-validation-callback",children:(0,y.jsx)(o.l1,{initialValues:v||N,validationSchema:a,onSubmit:e=>(e=>{s?e.password&&e.password!==e.confirmPassword?x.oR.error("New Password And Confirm Password Does Not Match"):U(j,e):e.password!==e.confirmPassword?x.oR.error("New Password And Confirm Password Does Not Match"):b(j,e)})(e),children:s=>{let{handleChange:a,handleBlur:l,handleSubmit:r,values:o,errors:d}=s;return(0,y.jsxs)(y.Fragment,{children:[(0,y.jsxs)("div",{className:"card-body",children:[(0,y.jsx)(i.aL,{required:!0,options:C,name:"systemUserGroupId",lable:"System User Group",placeholder:"Select Group"}),(0,y.jsx)(i.cl,{required:!0,name:"systemUserLoginId",lable:"System User Login ID"}),(0,y.jsx)(i.cl,{required:!0,name:"systemUserName",lable:"System User Name"}),(0,y.jsx)(i.aL,{required:!0,options:A,name:"systemUserMenuStyle",placeholder:"Select Menu Style",lable:"Menu Style"}),(0,y.jsx)(i.aL,{required:!0,options:k,name:"systemUserShowNoOfRecordsPerPage",placeholder:"Select No",lable:"Show No. of Records"}),(0,y.jsx)(i.UP,{name:"systemUserComment",lable:"Additional Comment"}),(0,y.jsxs)("div",{className:"form-group",children:[(0,y.jsx)("label",{className:"col-lg-4 col-md-4 col-sm-12 col-xs-12 control-label",children:"\xa0"}),(0,y.jsx)("div",{className:"col-lg-6 col-md-6 col-sm-12 col-xs-12",children:(0,y.jsx)("strong",{className:"red",children:"NOTE: Supply Passwords below only if you want to change."})})]}),(0,y.jsx)(i.ZG,{required:!0,name:"password",lable:"Login Password"}),(0,y.jsx)(i.ZG,{required:!0,name:"confirmPassword",lable:"Confirm Login Password"}),(0,y.jsx)("div",{className:"clear"})]}),(0,y.jsxs)("div",{className:"card-action",children:[(0,y.jsxs)("div",{className:"form-group",children:[(0,y.jsx)("label",{className:"col-lg-4 col-md-4 col-sm-12 col-xs-12 control-label",children:"\xa0"}),(0,y.jsxs)("div",{className:"col-lg-6 col-md-6 col-sm-12 col-xs-12",children:[(0,y.jsx)(i.yp,{loading:w||q,className:"btn-success",value:"Save User",onClick:()=>r()}),(0,y.jsx)(i.yp,{className:"btn-grey",value:"Go Back to List",onClick:()=>e(-1)})]})]}),(0,y.jsx)("div",{className:"clear"})]})]})}})})]})})})})]})}}}]);
//# sourceMappingURL=176.8018f81c.chunk.js.map