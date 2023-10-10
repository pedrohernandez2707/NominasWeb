"use strict";(globalThis["webpackChunkquasar_project"]=globalThis["webpackChunkquasar_project"]||[]).push([[717],{4717:(e,o,l)=>{l.r(o),l.d(o,{default:()=>Z});var a=l(9835);const i={class:"row"},t={class:"col-xs-4 col-md-4 q-pa-md"},d={class:"col-xs-4 col-md-4 q-pa-md"},n={class:"col-xs-4 col-md-4 q-pa-md"},r={style:{height:"500px"}};function p(e,o,l,p,s,u){const c=(0,a.up)("q-input"),m=(0,a.up)("q-select"),v=(0,a.up)("q-btn"),g=(0,a.up)("q-form"),h=(0,a.up)("q-td"),f=(0,a.up)("q-table"),E=(0,a.up)("q-page");return(0,a.wg)(),(0,a.j4)(E,{padding:""},{default:(0,a.w5)((()=>[(0,a.Wm)(g,{onSubmit:e.agregarAporte,class:"q-gutter-md"},{default:(0,a.w5)((()=>[(0,a._)("div",i,[(0,a._)("div",t,[(0,a.Wm)(c,{modelValue:e.periodoActivo,"onUpdate:modelValue":o[0]||(o[0]=o=>e.periodoActivo=o),type:"text",disable:"",label:"Id Periodo"},null,8,["modelValue"])]),(0,a._)("div",d,[(0,a.Wm)(m,{modelValue:e.modelEmpleado,"onUpdate:modelValue":[o[1]||(o[1]=o=>e.modelEmpleado=o),o[2]||(o[2]=o=>{e.getaporteEmpleado(o)})],options:e.optionsEmpleado,label:"Seleccione Empleado",filled:""},null,8,["modelValue","options"])]),(0,a._)("div",n,[(0,a.Wm)(c,{clearable:"",modelValue:e.aporte,"onUpdate:modelValue":o[3]||(o[3]=o=>e.aporte=o),type:"number",label:"Ingrese Total de Aporte",rules:[e=>e>0||"El número debe ser mayor a 0"]},null,8,["modelValue","rules"])])]),(0,a._)("div",null,[(0,a.Wm)(v,{label:"Agregar",type:"submit",color:"primary"})])])),_:1},8,["onSubmit"]),(0,a._)("div",r,[(0,a.Wm)(f,{class:"full-height",title:"Aporte Solidario Empleado",rows:e.aporteEmpleadoRows,columns:e.columns,filter:e.filter,pagination:{rowsPerPage:0}},{"body-cell-Eliminar":(0,a.w5)((o=>[(0,a.Wm)(h,{props:o,class:"q-pa-sm"},{default:(0,a.w5)((()=>[(0,a.Wm)(v,{outline:"",size:"sm",color:"red",icon:"delete",label:"Eliminar",onClick:l=>e.bajaAporte(o.row)},null,8,["onClick"])])),_:2},1032,["props"])])),_:1},8,["rows","columns","filter"])])])),_:1})}var s=l(9302),u=l(4136),c=l(8651),m=l(499),v=l(8339),g=function(e,o,l,a){function i(e){return e instanceof l?e:new l((function(o){o(e)}))}return new(l||(l=Promise))((function(l,t){function d(e){try{r(a.next(e))}catch(o){t(o)}}function n(e){try{r(a["throw"](e))}catch(o){t(o)}}function r(e){e.done?l(e.value):i(e.value).then(d,n)}r((a=a.apply(e,o||[])).next())}))};const h=[{name:"IdPeriodo",label:"Id Periodo",field:"id_periodo",align:"center"},{name:"IdEmpleado",label:"Id Empleado",field:"id_empleado",align:"center"},{name:"Aporte",label:"Aporte Solidario",field:"total_aporte",align:"center"},{name:"Eliminar",label:"Eliminar",field:"Eliminar",align:"center"}],f=(0,a.aZ)({name:"AportesPage",setup(){const e=(0,s.Z)(),o=(0,v.tv)(),l=(0,m.iH)(null),a=(0,m.iH)(""),i=(0,m.iH)([]),t=(0,m.iH)([]),d=(0,m.iH)(null),n=(0,m.iH)(null),r=()=>g(this,void 0,void 0,(function*(){yield u.api.get(u.endPoints.EMPLEADOS+"/combo").then((e=>{t.value=e.data})).catch((e=>{(0,c.L1)(e)}))})),p=o=>g(this,void 0,void 0,(function*(){const a=o.value;e.loading.show(),yield u.api.get(u.endPoints.APORTES,{params:{idEmpleado:a,idPeriodo:l.value}}).then((e=>{i.value=e.data})).catch((e=>{(0,c.L1)(e)})).finally((()=>{e.loading.hide()}))})),f=o=>g(this,void 0,void 0,(function*(){const a=yield(0,c.pW)("Confirmacion","Esta seguro de Eliminar?",{});if(!a)return;const i=o.id_empleado;e.loading.show(),yield u.api.delete(u.endPoints.APORTES,{params:{idEmpleado:i,idPeriodo:l.value}}).then((e=>g(this,void 0,void 0,(function*(){yield p({value:i}),(0,c.dF)("Proceso Correcto")})))).catch((e=>{(0,c.L1)(e)})).finally((()=>{e.loading.hide()}))})),E=()=>g(this,void 0,void 0,(function*(){e.loading.show(),yield u.api.get(u.endPoints.PERIODOS+"/activo").then((a=>{if(!a.data[0])return(0,c.x2)("Error",{subtitulo:"No existe un Periodo Activo, debe aperturar el periodo",timeout:1e4}),e.loading.hide(),void o.back();l.value=a.data[0].periodo})).catch((e=>{(0,c.L1)(e)})).finally((()=>{e.loading.hide()}))})),b=()=>g(this,void 0,void 0,(function*(){if(!l.value||!n.value||!d.value)return void(0,c.x2)("Debe Seleccionar todos los campos");const o=yield(0,c.pW)("Confirmacion","Desea Reportar los dias al Empleado?",{});if(!o)return;const a={idPeriodo:l.value,aporte:n.value,idEmpleado:d.value.value};e.loading.show();yield u.api.post(u.endPoints.APORTES,a).then((e=>g(this,void 0,void 0,(function*(){200===e.status&&((0,c.dF)("Reportado Correctamente"),yield p({value:a.idEmpleado}),n.value=null)})))).catch((e=>{(0,c.L1)(e)}));e.loading.hide()}));return{getPeriodoActivo:E,aporteEmpleadoRows:i,columns:h,periodoActivo:l,filter:a,agregarAporte:b,getEmpleados:r,modelEmpleado:d,optionsEmpleado:t,aporte:n,getaporteEmpleado:p,bajaAporte:f}},created(){this.getPeriodoActivo(),this.getEmpleados()}});var E=l(1639),b=l(9885),P=l(8326),y=l(3119),w=l(6384),A=l(4455),_=l(7580),q=l(7220),S=l(9984),x=l.n(S);const W=(0,E.Z)(f,[["render",p]]),Z=W;x()(f,"components",{QPage:b.Z,QForm:P.Z,QInput:y.Z,QSelect:w.Z,QBtn:A.Z,QTable:_.Z,QTd:q.Z})}}]);