"use strict";(globalThis["webpackChunkquasar_project"]=globalThis["webpackChunkquasar_project"]||[]).push([[529],{4529:(e,o,a)=>{a.r(o),a.d(o,{default:()=>x});var l=a(9835);const i={class:"row"},t={class:"col-xs-4 col-md-4 q-pa-md"},d={class:"col-xs-4 col-md-4 q-pa-md"},n={class:"col-xs-4 col-md-4 q-pa-md"},r={style:{height:"500px"}};function s(e,o,a,s,u,p){const c=(0,l.up)("q-input"),m=(0,l.up)("q-select"),v=(0,l.up)("q-btn"),g=(0,l.up)("q-form"),h=(0,l.up)("q-td"),f=(0,l.up)("q-table"),E=(0,l.up)("q-page");return(0,l.wg)(),(0,l.j4)(E,{padding:""},{default:(0,l.w5)((()=>[(0,l.Wm)(g,{onSubmit:e.agregarReporte,class:"q-gutter-md"},{default:(0,l.w5)((()=>[(0,l._)("div",i,[(0,l._)("div",t,[(0,l.Wm)(c,{modelValue:e.periodoActivo,"onUpdate:modelValue":o[0]||(o[0]=o=>e.periodoActivo=o),type:"text",disable:"",label:"Id Periodo"},null,8,["modelValue"])]),(0,l._)("div",d,[(0,l.Wm)(m,{modelValue:e.modelEmpleado,"onUpdate:modelValue":[o[1]||(o[1]=o=>e.modelEmpleado=o),o[2]||(o[2]=o=>{e.getReporteEmpleado(o)})],options:e.optionsEmpleado,label:"Seleccione Empleado",filled:""},null,8,["modelValue","options"])]),(0,l._)("div",n,[(0,l.Wm)(c,{clearable:"",modelValue:e.dias,"onUpdate:modelValue":o[3]||(o[3]=o=>e.dias=o),type:"number",label:"Ingrese Total de Dias a Reportar",rules:[e=>e>0&&e<=30||"El número debe ser mayor a 0 y menor a 31"]},null,8,["modelValue","rules"])])]),(0,l._)("div",null,[(0,l.Wm)(v,{label:"Agregar",type:"submit",color:"primary"})])])),_:1},8,["onSubmit"]),(0,l._)("div",r,[(0,l.Wm)(f,{class:"full-height",title:"Reporte de Horas por Empleado",rows:e.reporteDiasEmpleadoRows,columns:e.columns,filter:e.filter,pagination:{rowsPerPage:0}},{"body-cell-Eliminar":(0,l.w5)((o=>[(0,l.Wm)(h,{props:o,class:"q-pa-sm"},{default:(0,l.w5)((()=>[(0,l.Wm)(v,{outline:"",size:"sm",color:"red",icon:"delete",label:"Eliminar",onClick:a=>e.bajaReporteDia(o.row)},null,8,["onClick"])])),_:2},1032,["props"])])),_:1},8,["rows","columns","filter"])])])),_:1})}var u=a(9302),p=a(4136),c=a(8651),m=a(499),v=a(8339),g=function(e,o,a,l){function i(e){return e instanceof a?e:new a((function(o){o(e)}))}return new(a||(a=Promise))((function(a,t){function d(e){try{r(l.next(e))}catch(o){t(o)}}function n(e){try{r(l["throw"](e))}catch(o){t(o)}}function r(e){e.done?a(e.value):i(e.value).then(d,n)}r((l=l.apply(e,o||[])).next())}))};const h=[{name:"IdPeriodo",label:"Id Periodo",field:"id_periodo",align:"center"},{name:"IdEmpleado",label:"Id Empleado",field:"id_empleado",align:"center"},{name:"DiasReporte",label:"Dias Reportados",field:"reporte_dias",align:"center"},{name:"Eliminar",label:"Eliminar",field:"Eliminar",align:"center"}],f=(0,l.aZ)({name:"ReportePage",setup(){const e=(0,u.Z)(),o=(0,v.tv)(),a=(0,m.iH)(null),l=(0,m.iH)(""),i=(0,m.iH)([]),t=(0,m.iH)([]),d=(0,m.iH)(null),n=(0,m.iH)(null),r=()=>g(this,void 0,void 0,(function*(){yield p.api.get(p.endPoints.EMPLEADOS+"/combo").then((e=>{t.value=e.data})).catch((e=>{(0,c.L1)(e)}))})),s=o=>g(this,void 0,void 0,(function*(){const l=o.value;e.loading.show(),yield p.api.get(p.endPoints.REPORTE_DIAS,{params:{idEmpleado:l,idPeriodo:a.value}}).then((e=>{i.value=e.data})).catch((e=>{(0,c.L1)(e)})).finally((()=>{e.loading.hide()}))})),f=o=>g(this,void 0,void 0,(function*(){const l=yield(0,c.pW)("Confirmacion","Esta seguro de Eliminar?",{});if(!l)return;const i=o.id_empleado;e.loading.show(),yield p.api.delete(p.endPoints.REPORTE_DIAS,{params:{idEmpleado:i,idPeriodo:a.value}}).then((e=>g(this,void 0,void 0,(function*(){yield s({value:i}),(0,c.dF)("Proceso Correcto")})))).catch((e=>{(0,c.L1)(e)})).finally((()=>{e.loading.hide()}))})),E=()=>g(this,void 0,void 0,(function*(){e.loading.show(),yield p.api.get(p.endPoints.PERIODOS+"/activo").then((l=>{if(!l.data[0])return(0,c.x2)("Error",{subtitulo:"No existe un Periodo Activo, debe aperturar el periodo",timeout:1e4}),e.loading.hide(),void o.back();a.value=l.data[0].periodo})).catch((e=>{(0,c.L1)(e)})).finally((()=>{e.loading.hide()}))})),b=()=>g(this,void 0,void 0,(function*(){if(!a.value||!n.value||!d.value)return void(0,c.x2)("Debe Seleccionar todos los campos");const o=yield(0,c.pW)("Confirmacion","Desea Reportar los dias al Empleado?",{});if(!o)return;const l={idPeriodo:a.value,dias:n.value,idEmpleado:d.value.value};e.loading.show();yield p.api.post(p.endPoints.REPORTE_DIAS,l).then((e=>g(this,void 0,void 0,(function*(){200===e.status&&((0,c.dF)("Reportado Correctamente"),yield s({value:l.idEmpleado}),n.value=null)})))).catch((e=>{(0,c.L1)(e)}));e.loading.hide()}));return{getPeriodoActivo:E,reporteDiasEmpleadoRows:i,columns:h,periodoActivo:a,filter:l,agregarReporte:b,getEmpleados:r,modelEmpleado:d,optionsEmpleado:t,dias:n,getReporteEmpleado:s,bajaReporteDia:f}},created(){this.getPeriodoActivo(),this.getEmpleados()}});var E=a(1639),b=a(9885),P=a(8326),y=a(3119),R=a(6384),w=a(4455),_=a(7580),q=a(7220),D=a(9984),A=a.n(D);const I=(0,E.Z)(f,[["render",s]]),x=I;A()(f,"components",{QPage:b.Z,QForm:P.Z,QInput:y.Z,QSelect:R.Z,QBtn:w.Z,QTable:_.Z,QTd:q.Z})}}]);