"use strict";(globalThis["webpackChunkquasar_project"]=globalThis["webpackChunkquasar_project"]||[]).push([[467],{1467:(e,a,l)=>{l.r(a),l.d(a,{default:()=>V});var t=l(9835),n=l(6970);const o=(0,t._)("div",{class:"text-center q-pt-lg"},[(0,t._)("div",{class:"col text-h6 ellipsis"}," Inicio de Sesión ")],-1);function s(e,a,l,s,i,u){const r=(0,t.up)("q-img"),d=(0,t.up)("q-avatar"),p=(0,t.up)("q-card-section"),m=(0,t.up)("q-select"),c=(0,t.up)("q-icon"),f=(0,t.up)("q-input"),w=(0,t.up)("q-spinner-gears"),g=(0,t.up)("q-btn"),v=(0,t.up)("q-form"),h=(0,t.up)("q-card"),b=(0,t.up)("q-page"),y=(0,t.up)("q-page-container"),q=(0,t.up)("q-layout");return(0,t.wg)(),(0,t.j4)(q,null,{default:(0,t.w5)((()=>[(0,t.Wm)(y,null,{default:(0,t.w5)((()=>[(0,t.Wm)(b,{class:"flex bg-image flex-center"},{default:(0,t.w5)((()=>[(0,t.Wm)(h,{style:(0,n.j5)(e.$q.screen.lt.sm?{width:"80%"}:{width:"30%"})},{default:(0,t.w5)((()=>[(0,t.Wm)(p,null,{default:(0,t.w5)((()=>[(0,t.Wm)(d,{size:"110px",class:"absolute-center"},{default:(0,t.w5)((()=>[e.Url?((0,t.wg)(),(0,t.j4)(r,{key:0,src:e.Url,alt:"Fotografia de Empleado",style:{"max-width":"150px",height:"150px"},fit:"fill"},null,8,["src"])):(0,t.kq)("",!0)])),_:1})])),_:1}),(0,t.Wm)(p,null,{default:(0,t.w5)((()=>[o])),_:1}),(0,t.Wm)(p,null,{default:(0,t.w5)((()=>[(0,t.Wm)(v,{class:"q-gutter-md",onSubmit:e.onSubmit},{default:(0,t.w5)((()=>[(0,t.Wm)(m,{label:"Seleccione la Empresa",filled:"",modelValue:e.modelEmpresa,"onUpdate:modelValue":[a[0]||(a[0]=a=>e.modelEmpresa=a),a[1]||(a[1]=a=>{e.selectEmpresa(a)})],options:e.optionsEmpresa,rules:[e=>!!e||"Campo obligatorio"]},null,8,["modelValue","options","rules"]),(0,t.Wm)(f,{rounded:"",filled:"",type:"email",modelValue:e.username,"onUpdate:modelValue":a[2]||(a[2]=a=>e.username=a),label:"Usuario","lazy-rules":"",rules:[e=>!!e||"Campo obligatorio",e=>/.+@.+\..+/.test(e)||"Ingresa un Correo Valido"]},{append:(0,t.w5)((()=>[(0,t.Wm)(c,{name:"person"})])),_:1},8,["modelValue","rules"]),(0,t.Wm)(f,{rounded:"",type:e.isPwd?"password":"text",filled:"",modelValue:e.password,"onUpdate:modelValue":a[4]||(a[4]=a=>e.password=a),label:"Contraseña","lazy-rules":"",rules:[e=>!!e||"Campo obligatorio"]},{append:(0,t.w5)((()=>[(0,t.Wm)(c,{name:e.isPwd?"visibility_off":"visibility",class:"cursor-pointer",onClick:a[3]||(a[3]=a=>e.isPwd=!e.isPwd)},null,8,["name"])])),_:1},8,["type","modelValue","rules"]),(0,t._)("div",null,[(0,t.Wm)(g,{loading:e.loading,color:"indigo",type:"submit",size:"md"},{loading:(0,t.w5)((()=>[(0,t.Wm)(w,{class:"on-left"})])),default:(0,t.w5)((()=>[(0,t.Uk)(" Ingresar ")])),_:1},8,["loading"])])])),_:1},8,["onSubmit"])])),_:1})])),_:1},8,["style"])])),_:1})])),_:1})])),_:1})}var i=l(4136),u=l(8651),r=l(499),d=l(8339),p=l(2718),m=function(e,a,l,t){function n(e){return e instanceof l?e:new l((function(a){a(e)}))}return new(l||(l=Promise))((function(l,o){function s(e){try{u(t.next(e))}catch(a){o(a)}}function i(e){try{u(t["throw"](e))}catch(a){o(a)}}function u(e){e.done?l(e.value):n(e.value).then(s,i)}u((t=t.apply(e,a||[])).next())}))};const c=(0,t.aZ)({setup(){const e=(0,r.iH)([]),a=(0,r.iH)(null),l=(0,r.iH)(""),t=(0,r.iH)(""),n=(0,r.iH)(!1),o=(0,d.tv)(),s=(0,r.iH)(!0),c=(0,r.iH)(""),f=()=>m(this,void 0,void 0,(function*(){yield i.api.get(i.endPoints.EMPRESAS).then((a=>{e.value=a.data})).catch((e=>{(0,u.L1)(e)}))})),w=e=>{e&&(c.value=e.url)},g=()=>{v()},v=()=>m(this,void 0,void 0,(function*(){n.value=!0,yield i.api.post(i.endPoints.LOGIN,{idEmpresa:a.value.value,email:l.value,pass:t.value},{}).then((e=>{const a=e.data.data.token,t=e.data.data.nombre,s=e.data.data.rol;a?((0,p.Fr)(a,t,s,l.value,c.value),n.value=!1,o.push("/home")):(0,u.wp)("Alerta","No se pudo iniciar sesion, contante al administrador",{})})).catch((e=>{(0,u.L1)(e,{mensaje:e.response.data.mensaje})})).finally((()=>{n.value=!1}))}));return{username:l,password:t,getEmpresas:f,optionsEmpresa:e,modelEmpresa:a,onSubmit:g,loading:n,isPwd:s,Url:c,selectEmpresa:w}},created(){this.getEmpresas()}});var f=l(1639),w=l(7605),g=l(2133),v=l(9885),h=l(4458),b=l(3190),y=l(1357),q=l(335),_=l(8326),W=l(6384),Z=l(3119),E=l(2857),Q=l(4455),x=l(9120),C=l(9984),P=l.n(C);const S=(0,f.Z)(c,[["render",s]]),V=S;P()(c,"components",{QLayout:w.Z,QPageContainer:g.Z,QPage:v.Z,QCard:h.Z,QCardSection:b.Z,QAvatar:y.Z,QImg:q.Z,QForm:_.Z,QSelect:W.Z,QInput:Z.Z,QIcon:E.Z,QBtn:Q.Z,QSpinnerGears:x.Z})}}]);