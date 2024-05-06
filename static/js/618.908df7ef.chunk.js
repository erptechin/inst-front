"use strict";(self.webpackChunkins_app=self.webpackChunkins_app||[]).push([[618],{450:(a,e,t)=>{t.d(e,{A:()=>r});var s=t(5475),l=t(579);const r=a=>{let{root:e,pageName:t}=a;return(0,l.jsx)("div",{className:"main-content-header",children:(0,l.jsx)("div",{className:"card",children:(0,l.jsx)("div",{className:"card-body no-padding",children:(0,l.jsxs)("ol",{className:"breadcrumb ltn no-radius",children:[(0,l.jsx)("li",{className:"text-normal",children:(0,l.jsx)(s.k2,{to:"/dashboard",children:"Main Dashboard"})}),e&&(0,l.jsx)("li",{className:"text-normal",children:(0,l.jsx)(s.k2,{to:"/".concat(e),children:e})}),(0,l.jsx)("li",{className:"active text-lg",children:t})]})})})})}},2945:(a,e,t)=>{t.d(e,{z2:()=>l.z,YK:()=>s.Y});t(4569),t(9306),t(8489),t(9202);var s=t(5158),l=(t(5676),t(6181));t(5043),t(4743);t(7681)},6181:(a,e,t)=>{t.d(e,{z:()=>n});var s=t(5043),l=t(4743),r=t(4569);function n(){const{token:a}=(0,s.useContext)(r.x),[e,t]=(0,s.useState)(null),[n,c]=(0,s.useState)(!1);return{remove:async e=>{try{c(!0);const s=await l.A.deleteDataApi(e,a);s&&t(s),c(!1)}catch(s){c(!1)}},data:e,loading:n}}},9306:(a,e,t)=>{t.d(e,{s:()=>n});var s=t(5043),l=t(4569),r=t(4743);function n(a){const{token:e}=(0,s.useContext)(l.x),[t,n]=(0,s.useState)({}),[c,i]=(0,s.useState)(!0);return(0,s.useEffect)((()=>{(async()=>{i(!0);const t=await r.A.getDataApi({...a,query:a.query?JSON.parse(a.query):{}},e);t&&n(t),i(!1)})()}),[a.query]),{data:t,loading:c}}},8489:(a,e,t)=>{t.d(e,{L:()=>n});var s=t(5043),l=t(4569),r=t(4743);function n(){const{token:a}=(0,s.useContext)(l.x),[e,t]=(0,s.useState)(null),[n,c]=(0,s.useState)(!1);return{fetch:async e=>{try{c(!0),t(null);const s=await r.A.getDataApi({...e,query:e.query?JSON.parse(e.query):{}},a);s&&t(s),c(!1)}catch(s){c(!1)}},data:e,loading:n}}},9202:(a,e,t)=>{t.d(e,{K:()=>n});var s=t(5043),l=t(4743),r=t(4569);function n(){const{token:a}=(0,s.useContext)(r.x),[e,t]=(0,s.useState)(null),[n,c]=(0,s.useState)(!1);return{fetchSingle:async(e,s)=>{try{c(!0),t(null);const r=await l.A.getSingleDataApi({url:e,id:s},a);r&&t(r),c(!1)}catch(r){c(!1)}},data:e,loading:n}}},5676:(a,e,t)=>{t.d(e,{e:()=>n});var s=t(5043),l=t(4743),r=t(4569);function n(){const{token:a}=(0,s.useContext)(r.x),[e,t]=(0,s.useState)(null),[n,c]=(0,s.useState)(!1);return{edit:async(e,s)=>{try{c(!0);const r=await l.A.editDataApi({url:e,body:s},a);r&&t(r),c(!1)}catch(r){c(!1)}},data:e,loading:n}}},6618:(a,e,t)=>{t.r(e),t.d(e,{default:()=>j});var s=t(5043),l=t(3216),r=t(3516),n=t(899),c=t(4307),i=t(450),d=t(7198),o=t(9202),u=t(5676),m=t(2945),h=t(579);const x="products",p={partNo:"",partTitle:"",partSerialNo:""};function j(){const a=(0,l.Zp)(),{id:e}=(0,l.g)(),t=n.Ik().shape({partNo:n.Yj().required("Part No is required"),partTitle:n.Yj().required("Title is required"),partSerialNo:n.Yj().required("This is required")}),{fetchSingle:j,data:N,loading:v}=(0,o.K)();(0,s.useEffect)((()=>{j(x,e)}),[e]);const{create:g,data:y,loading:S}=(0,m.YK)(),{edit:b,data:f,loading:k}=(0,u.e)();return(0,s.useEffect)((()=>{201==(null===y||void 0===y?void 0:y.status)&&a(-1),200==(null===f||void 0===f?void 0:f.status)&&a(-1)}),[y,f]),v?(0,h.jsx)(h.Fragment,{children:"loading"}):(0,h.jsxs)(h.Fragment,{children:[(0,h.jsx)(i.A,{root:"products",pageName:"".concat(e?"Edit":"Add"," Product")}),(0,h.jsx)("div",{className:"main-content-body",children:(0,h.jsx)("div",{className:"col-lg-12 col-md-12 col-sm-12 col-xs-12",children:(0,h.jsx)("div",{className:"row",children:(0,h.jsxs)("div",{className:"card",children:[(0,h.jsx)(d.A,{ListName:"".concat(e?"Edit":"Add New"," Product (* indicates mandatory field(s)).")}),(0,h.jsx)("div",{className:"form-horizontal has-validation-callback",children:(0,h.jsx)(r.l1,{initialValues:N||p,validationSchema:t,onSubmit:a=>(a=>{e?b(x,a):g(x,a)})(a),children:e=>{let{handleChange:t,handleBlur:s,handleSubmit:l,values:r,errors:n}=e;return(0,h.jsxs)(h.Fragment,{children:[(0,h.jsxs)("div",{className:"card-body",children:[(0,h.jsx)(c.cl,{required:!0,name:"partNo",lable:"Part No",placeholder:""}),(0,h.jsx)(c.cl,{required:!0,name:"partTitle",lable:"Part Title",placeholder:""}),(0,h.jsx)(c.cl,{required:!0,name:"partSerialNo",lable:"Part Serial",placeholder:""}),(0,h.jsx)("div",{className:"clear"})]}),(0,h.jsxs)("div",{className:"card-action",children:[(0,h.jsx)("label",{htmlFor:"AddGroup_Submit",className:"col-lg-4 col-md-4 col-sm-12 col-xs-12 control-label",children:"\xa0"}),(0,h.jsxs)("div",{className:"col-lg-8 col-md-8 col-sm-12 col-xs-12 no-padding mb-3",children:[(0,h.jsx)(c.yp,{loading:S||k,className:"btn-success",value:"Save Product",onClick:()=>l()}),(0,h.jsx)(c.yp,{className:"btn-grey",value:"Go Back to List",onClick:()=>a(-1)})]})]}),(0,h.jsx)("div",{className:"clear"})]})}})})]})})})})]})}}}]);
//# sourceMappingURL=618.908df7ef.chunk.js.map