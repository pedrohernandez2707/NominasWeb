"use strict";(globalThis["webpackChunkquasar_project"]=globalThis["webpackChunkquasar_project"]||[]).push([[72],{4072:(e,o,a)=>{a.r(o),a.d(o,{default:()=>W});var l=a(9835);const i={class:"row"},d={class:"col-xs-4 col-md-4 q-pa-md"},t={class:"col-xs-4 col-md-4 q-pa-md"},n={class:"col-xs-4 col-md-4 q-pa-md"},r={class:"col-xs-4 col-md-4 q-pa-md"},s={style:{height:"500px"}};function u(e,o,a,u,c,m){const p=(0,l.up)("q-input"),v=(0,l.up)("q-select"),h=(0,l.up)("q-btn"),g=(0,l.up)("q-form"),b=(0,l.up)("q-td"),f=(0,l.up)("q-table"),E=(0,l.up)("q-page");return(0,l.wg)(),(0,l.j4)(E,{padding:""},{default:(0,l.w5)((()=>[(0,l.Wm)(g,{onSubmit:e.agregarHoras,class:"q-gutter-md"},{default:(0,l.w5)((()=>[(0,l._)("div",i,[(0,l._)("div",d,[(0,l.Wm)(p,{modelValue:e.periodoActivo,"onUpdate:modelValue":o[0]||(o[0]=o=>e.periodoActivo=o),type:"text",disable:"",label:"Id Periodo"},null,8,["modelValue"])]),(0,l._)("div",t,[(0,l.Wm)(v,{modelValue:e.modelEmpleado,"onUpdate:modelValue":[o[1]||(o[1]=o=>e.modelEmpleado=o),o[2]||(o[2]=o=>{e.getHorasEmpleado(o)})],options:e.optionsEmpleado,label:"Seleccione Empleado",filled:""},null,8,["modelValue","options"])]),(0,l._)("div",n,[(0,l.Wm)(p,{clearable:"",modelValue:e.horasExtras,"onUpdate:modelValue":o[3]||(o[3]=o=>e.horasExtras=o),type:"number",label:"Ingrese Total de Horas Extras"},null,8,["modelValue"])]),(0,l._)("div",r,[(0,l.Wm)(p,{clearable:"",modelValue:e.horasDobles,"onUpdate:modelValue":o[4]||(o[4]=o=>e.horasDobles=o),type:"number",label:"Ingrese Total de Horas Dobles"},null,8,["modelValue"])])]),(0,l._)("div",null,[(0,l.Wm)(h,{label:"Agregar",type:"submit",color:"primary"})])])),_:1},8,["onSubmit"]),(0,l._)("div",s,[(0,l.Wm)(f,{class:"full-height",title:"Horas Empleado",rows:e.horasEmpleadoRows,columns:e.columns,filter:e.filter,pagination:{rowsPerPage:0}},{"body-cell-Eliminar":(0,l.w5)((o=>[(0,l.Wm)(b,{props:o,class:"q-pa-sm"},{default:(0,l.w5)((()=>[(0,l.Wm)(h,{outline:"",size:"sm",color:"red",icon:"delete",label:"Eliminar",onClick:a=>e.bajaHoras(o.row)},null,8,["onClick"])])),_:2},1032,["props"])])),_:1},8,["rows","columns","filter"])])])),_:1})}var c=a(9302),m=a(4136),p=a(8651),v=a(499),h=a(8339),g=function(e,o,a,l){function i(e){return e instanceof a?e:new a((function(o){o(e)}))}return new(a||(a=Promise))((function(a,d){function t(e){try{r(l.next(e))}catch(o){d(o)}}function n(e){try{r(l["throw"](e))}catch(o){d(o)}}function r(e){e.done?a(e.value):i(e.value).then(t,n)}r((l=l.apply(e,o||[])).next())}))};const b=[{name:"IdPeriodo",label:"Id Periodo",field:"id_periodo",align:"center"},{name:"IdEmpleado",label:"Id Empleado",field:"id_empleado",align:"center"},{name:"HorasExtras",label:"Horas Extras",field:"horas_extas",align:"center"},{name:"HorasDobles",label:"Horas Dobles",field:"horas_dobles",align:"center"},{name:"Eliminar",label:"Eliminar",field:"Eliminar",align:"center"}],f=(0,l.aZ)({name:"HorasPage",setup(){const e=(0,c.Z)(),o=(0,h.tv)(),a=(0,v.iH)(null),l=(0,v.iH)(""),i=(0,v.iH)([]),d=(0,v.iH)([]),t=(0,v.iH)(null),n=(0,v.iH)(null),r=(0,v.iH)(null),s=()=>g(this,void 0,void 0,(function*(){yield m.api.get(m.endPoints.EMPLEADOS+"/combo").then((e=>{d.value=e.data})).catch((e=>{(0,p.L1)(e)}))})),u=o=>g(this,void 0,void 0,(function*(){const l=o.value;e.loading.show(),yield m.api.get(m.endPoints.HORAS,{params:{idEmpleado:l,idPeriodo:a.value}}).then((e=>{i.value=e.data})).catch((e=>{(0,p.L1)(e)})).finally((()=>{e.loading.hide()}))})),f=o=>g(this,void 0,void 0,(function*(){const l=yield(0,p.pW)("Confirmacion","Esta seguro de Eliminar?",{});if(!l)return;const i=o.id_empleado;e.loading.show(),yield m.api.delete(m.endPoints.HORAS,{params:{idEmpleado:i,idPeriodo:a.value}}).then((e=>g(this,void 0,void 0,(function*(){yield u({value:i}),(0,p.dF)("Proceso Correcto")})))).catch((e=>{(0,p.L1)(e)})).finally((()=>{e.loading.hide()}))})),E=()=>g(this,void 0,void 0,(function*(){e.loading.show(),yield m.api.get(m.endPoints.PERIODOS+"/activo").then((l=>{if(!l.data[0])return(0,p.x2)("Error",{subtitulo:"No existe un Periodo Activo, debe aperturar el periodo",timeout:1e4}),e.loading.hide(),void o.back();a.value=l.data[0].id})).catch((e=>{(0,p.L1)(e)})).finally((()=>{e.loading.hide()}))})),H=()=>g(this,void 0,void 0,(function*(){if(!a.value||!r.value||!n.value||!t.value)return void(0,p.x2)("Debe Seleccionar todos los campos");const o=yield(0,p.pW)("Confirmacion","Desea Agregar las Horas al Empleado?",{});if(!o)return;const l={idPeriodo:a.value,horasDobles:r.value,horasExtras:n.value,idEmpleado:t.value.value};e.loading.show();yield m.api.post(m.endPoints.HORAS,l).then((e=>g(this,void 0,void 0,(function*(){200===e.status&&((0,p.dF)("Agregado Correctamente"),yield u({value:l.idEmpleado}),n.value=null,r.value=null)})))).catch((e=>{(0,p.L1)(e)}));e.loading.hide()}));return{getPeriodoActivo:E,horasEmpleadoRows:i,columns:b,periodoActivo:a,filter:l,agregarHoras:H,getEmpleados:s,modelEmpleado:t,optionsEmpleado:d,horasExtras:n,horasDobles:r,getHorasEmpleado:u,bajaHoras:f}},created(){this.getPeriodoActivo(),this.getEmpleados()}});var E=a(1639),H=a(9885),y=a(8326),P=a(3119),w=a(6384),x=a(4455),_=a(7580),q=a(7220),A=a(9984),V=a.n(A);const D=(0,E.Z)(f,[["render",u]]),W=D;V()(f,"components",{QPage:H.Z,QForm:y.Z,QInput:P.Z,QSelect:w.Z,QBtn:x.Z,QTable:_.Z,QTd:q.Z})}}]);