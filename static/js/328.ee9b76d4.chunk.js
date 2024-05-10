"use strict";(self.webpackChunkins_app=self.webpackChunkins_app||[]).push([[328],{450:(e,l,a)=>{a.d(l,{A:()=>i});var s=a(5475),r=a(579);const i=e=>{let{root:l,pageName:a}=e;return(0,r.jsx)("div",{className:"main-content-header",children:(0,r.jsx)("div",{className:"card",children:(0,r.jsx)("div",{className:"card-body no-padding",children:(0,r.jsxs)("ol",{className:"breadcrumb ltn no-radius",children:[(0,r.jsx)("li",{className:"text-normal",children:(0,r.jsx)(s.k2,{to:"/dashboard",children:"Main Dashboard"})}),l&&(0,r.jsx)("li",{className:"text-normal",children:(0,r.jsx)(s.k2,{to:"/".concat(l),children:l})}),(0,r.jsx)("li",{className:"active text-lg",children:a})]})})})})}},5676:(e,l,a)=>{a.d(l,{e:()=>d});var s=a(5043),r=a(4743),i=a(4569);function d(){const{token:e}=(0,s.useContext)(i.x),[l,a]=(0,s.useState)(null),[d,c]=(0,s.useState)(!1);return{edit:async(l,s)=>{try{c(!0);const i=await r.A.editDataApi({url:l,body:s},e);i&&a(i),c(!1)}catch(i){c(!1)}},data:l,loading:d}}},1328:(e,l,a)=>{a.r(l),a.d(l,{default:()=>b});var s=a(5043),r=a(3216),i=a(3516),d=a(899),c=a(4307),n=a(450),o=a(7198),p=a(9202),t=a(5158),u=a(5676),m=a(579);const h="suppliers",x={supplierType:"",supplierName:"",supplierAddress:"",supplierSuburb:"",supplierState:"",supplierCountry:"",supplierPostalCode:"",supplierEmailAddress:"",supplierPhoneNumber:"",supplierMobileNumber:""};function b(){const e=(0,r.Zp)(),{id:l}=(0,r.g)(),a=d.Ik().shape({supplierType:d.Yj().required("User namr is required"),supplierName:d.Yj().required("Name is required")}),{fetchSingle:b,data:j,loading:N}=(0,p.K)();(0,s.useEffect)((()=>{b(h,l)}),[l]);const{create:v,data:S,loading:g}=(0,t.Y)(),{edit:y,data:f,loading:A}=(0,u.e)();if((0,s.useEffect)((()=>{201==(null===S||void 0===S?void 0:S.status)&&e(-1),200==(null===f||void 0===f?void 0:f.status)&&e(-1)}),[S,f]),N)return(0,m.jsx)(m.Fragment,{children:"loading"});const k=[{label:"Local",value:"local"},{label:"Overseas",value:"overseas"}];return(0,m.jsxs)(m.Fragment,{children:[(0,m.jsx)(n.A,{root:"suppliers",pageName:"".concat(l?"Edit":"Add"," Suppliers")}),(0,m.jsx)("div",{className:"main-content-body",children:(0,m.jsx)("div",{className:"col-lg-12 col-md-12 col-sm-12 col-xs-12",children:(0,m.jsx)("div",{className:"row",children:(0,m.jsxs)("div",{className:"card",children:[(0,m.jsx)(o.A,{ListName:"".concat(l?"Edit":"Add New"," Supplier (* indicates mandatory field(s)).")}),(0,m.jsx)("div",{className:"form-horizontal has-validation-callback",children:(0,m.jsx)(i.l1,{initialValues:j||x,validationSchema:a,onSubmit:e=>(e=>{l?y(h,e):v(h,e)})(e),children:l=>{let{handleChange:a,handleBlur:s,handleSubmit:r,values:i,errors:d}=l;return(0,m.jsxs)(m.Fragment,{children:[(0,m.jsxs)("div",{className:"card-body",children:[(0,m.jsx)(c.aL,{required:!0,options:k,name:"supplierType",lable:"Supplier Type",placeholder:"Select One"}),(0,m.jsx)(c.cl,{required:!0,name:"supplierName",lable:"Supplier Name",placeholder:""}),(0,m.jsx)(c.UP,{name:"supplierAddress",lable:"Supplier Address",placeholder:""}),(0,m.jsx)(c.cl,{name:"supplierSuburb",lable:"Supplier Suburb",placeholder:""}),(0,m.jsx)(c.cl,{name:"supplierState",lable:"Supplier State",placeholder:""}),(0,m.jsx)(c.cl,{name:"supplierCountry",lable:"Supplier Country",placeholder:""}),(0,m.jsx)(c.cl,{name:"supplierPostalCode",lable:"Supplier Postal Code",placeholder:""}),(0,m.jsx)(c.cl,{name:"supplierEmailAddress",lable:"Supplier Email ID",placeholder:""}),(0,m.jsx)(c.cl,{name:"supplierPhoneNumber",lable:"Supplier Phone No.",placeholder:""}),(0,m.jsx)(c.cl,{name:"supplierMobileNumber",lable:"Supplier Mobile No.",placeholder:""}),(0,m.jsx)("div",{className:"clear"})]}),(0,m.jsxs)("div",{className:"card-action",children:[(0,m.jsx)("label",{htmlFor:"AddGroup_Submit",className:"col-lg-4 col-md-4 col-sm-12 col-xs-12 control-label",children:"\xa0"}),(0,m.jsxs)("div",{className:"col-lg-8 col-md-8 col-sm-12 col-xs-12 no-padding mt-3 mb-3",children:[(0,m.jsx)(c.yp,{loading:g||A,className:"btn-success",value:"Save Supplier",onClick:()=>r()}),(0,m.jsx)(c.yp,{className:"btn-grey",value:"Go Back to List",onClick:()=>e(-1)})]})]}),(0,m.jsx)("div",{className:"clear"})]})}})})]})})})})]})}}}]);
//# sourceMappingURL=328.ee9b76d4.chunk.js.map