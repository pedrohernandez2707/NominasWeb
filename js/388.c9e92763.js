"use strict";(globalThis["webpackChunkquasar_project"]=globalThis["webpackChunkquasar_project"]||[]).push([[388],{5388:(e,o,a)=>{a.r(o),a.d(o,{default:()=>$});var l=a(9835),t=a(6970);const i={class:"row"},n={class:"col-xs-4 col-md-4 q-pa-md"},d={class:"col-xs-4 col-md-4 q-pa-md"},s={class:"col-xs-4 col-md- q-pa-md"},r={style:{height:"500px"}};function u(e,o,a,u,c,m){const p=(0,l.up)("q-select"),b=(0,l.up)("q-btn"),f=(0,l.up)("q-form"),v=(0,l.up)("q-td"),h=(0,l.up)("q-item-section"),g=(0,l.up)("q-item"),y=(0,l.up)("q-list"),x=(0,l.up)("q-menu"),w=(0,l.up)("q-icon"),P=(0,l.up)("q-input"),_=(0,l.up)("q-table"),H=(0,l.up)("q-page");return(0,l.wg)(),(0,l.j4)(H,{padding:""},{default:(0,l.w5)((()=>[(0,l.Wm)(f,{onSubmit:e.agregarPeriodo,class:"q-gutter-md"},{default:(0,l.w5)((()=>[(0,l._)("div",i,[(0,l._)("div",n,[(0,l.Wm)(p,{modelValue:e.periodo,"onUpdate:modelValue":o[0]||(o[0]=o=>e.periodo=o),options:e.periodos,label:"Periodo",filled:""},null,8,["modelValue","options"])]),(0,l._)("div",d,[(0,l.Wm)(p,{modelValue:e.mes,"onUpdate:modelValue":o[1]||(o[1]=o=>e.mes=o),options:e.meses,label:"Mes",filled:""},null,8,["modelValue","options"])]),(0,l._)("div",s,[(0,l.Wm)(p,{modelValue:e.año,"onUpdate:modelValue":o[2]||(o[2]=o=>e.año=o),options:e.años,label:"Año",filled:""},null,8,["modelValue","options"])])]),(0,l._)("div",null,[(0,l.Wm)(b,{label:"Activar",type:"submit",color:"primary"})])])),_:1},8,["onSubmit"]),(0,l._)("div",r,[(0,l.Wm)(_,{class:"full-height",title:"Historial Periodos",rows:e.periodosRows,columns:e.columns,filter:e.filter,pagination:{rowsPerPage:0}},{"body-cell-Accion":(0,l.w5)((o=>[(0,l.Wm)(v,{props:o,class:"q-pa-sm"},{default:(0,l.w5)((()=>[(0,l.Wm)(b,{outline:"",size:"sm",color:"A"==o.row.estado?"positive":"indigo",icon:"A"==o.row.estado?"task":"print",label:"A"==o.row.estado?"Generar":"",onClick:a=>e.generarNomina(o.row)},null,8,["color","icon","label","onClick"])])),_:2},1032,["props"])])),"body-cell":(0,l.w5)((o=>[(0,l.Wm)(v,{props:o},{default:(0,l.w5)((()=>[(0,l.Uk)((0,t.zw)(o.value),1)])),_:2},1032,["props"]),"A"===o.row.estado?((0,l.wg)(),(0,l.j4)(x,{key:0,"touch-position":"","context-menu":""},{default:(0,l.w5)((()=>[(0,l.Wm)(y,{dense:"",style:{"min-width":"100px"}},{default:(0,l.w5)((()=>[(0,l.Wm)(g,{clickable:"",onClick:a=>e.cerrarPeriodo(o.row.id)},{default:(0,l.w5)((()=>[(0,l.Wm)(h,null,{default:(0,l.w5)((()=>[(0,l.Uk)("Cerrar Periodo")])),_:1})])),_:2},1032,["onClick"])])),_:2},1024)])),_:2},1024)):(0,l.kq)("",!0)])),"top-right":(0,l.w5)((()=>[(0,l.Wm)(P,{for:"pos-buscar-detalles",borderless:"",dense:"",modelValue:e.filter,"onUpdate:modelValue":o[3]||(o[3]=o=>e.filter=o),placeholder:"Buscar Empleados",clearable:""},{append:(0,l.w5)((()=>[(0,l.Wm)(w,{name:"search"})])),_:1},8,["modelValue"])])),_:1},8,["rows","columns","filter"])])])),_:1})}var c=a(4376),m=a(9302),p=a(4136),b=a(8651),f=a(499),v=a(1893),h=a(1842),g=a(606),y=a.n(g),x=a(2718),w=function(e,o,a,l){function t(e){return e instanceof a?e:new a((function(o){o(e)}))}return new(a||(a=Promise))((function(a,i){function n(e){try{s(l.next(e))}catch(o){i(o)}}function d(e){try{s(l["throw"](e))}catch(o){i(o)}}function s(e){e.done?a(e.value):t(e.value).then(n,d)}s((l=l.apply(e,o||[])).next())}))};v.vfs={},v.jszip=y(),v.DynamicContent={content:{widths:"100%"}},v.fonts={Roboto:{normal:"https://cdnjs.cloudflare.com/ajax/libs/pdfmake/0.1.66/fonts/Roboto/Roboto-Regular.ttf",bold:"https://cdnjs.cloudflare.com/ajax/libs/pdfmake/0.1.66/fonts/Roboto/Roboto-Medium.ttf",italics:"https://cdnjs.cloudflare.com/ajax/libs/pdfmake/0.1.66/fonts/Roboto/Roboto-Italic.ttf",bolditalics:"https://cdnjs.cloudflare.com/ajax/libs/pdfmake/0.1.66/fonts/Roboto/Roboto-MediumItalic.ttf"}},v.vfs=h.I.vfs;const P=[{name:"Id",label:"Id",field:"id",align:"center"},{name:"Periodo",label:"Periodo",field:"periodo",align:"center"},{name:"Descripcion",label:"Descripcion",field:"descripcion",align:"center"},{name:"Mes",label:"Mes",field:"mes",align:"center"},{name:"Año",label:"Año",field:"año",align:"center"},{name:"Estado",label:"Estado",field:"estado",align:"center"},{name:"Fecha Creacion",label:"Fecha Creacion",field:"fecha",align:"center",format:(e,o)=>`${c.ZP.formatDate(e,"DD-MMMM-YYYY")}`},{name:"Accion",label:"Accion",field:"Accion",align:"center"}],_=(0,l.aZ)({name:"UsuariosPage",setup(){const e=(0,m.Z)(),o=(0,f.iH)(null),a=(0,f.iH)(null),l=(0,f.iH)([{value:1,label:"Primera Quincena"},{value:2,label:"Segunda Quincena"},{value:3,label:"Bono 14"},{value:4,label:"Aguinaldo"},{value:5,label:"Otros"}]),t=(0,f.iH)([{value:1,label:"Enero"},{value:2,label:"Febrero"},{value:3,label:"Marzo"},{value:4,label:"Abril"},{value:5,label:"Mayo"},{value:6,label:"Junio"},{value:7,label:"Julio"},{value:8,label:"Agosto"},{value:9,label:"Septiembre"},{value:10,label:"Octubre"},{value:11,label:"Noviembre"},{value:12,label:"Diciembre"}]),i=(0,f.iH)(""),n=(0,f.iH)(null),d=(0,f.iH)([{value:2022,label:"2022"},{value:2023,label:"2023"},{value:2024,label:"2024"},{value:2025,label:"2025"},{value:2026,label:"2026"},{value:2027,label:"2027"},{value:2028,label:"2028"}]),s=(0,f.iH)([]),r=()=>w(this,void 0,void 0,(function*(){e.loading.show(),yield p.api.get(p.endPoints.PERIODOS).then((e=>{s.value=e.data})).catch((e=>{(0,b.L1)(e)})).finally((()=>{e.loading.hide()}))})),u=()=>w(this,void 0,void 0,(function*(){if(!o.value||!n.value||!a.value)return void(0,b.x2)("Debe Seleccionar todos los campos");if(7!==o.value.value&&3===a.value.value)return void(0,b.x2)("El periodo de Bono 14 solo puede ser generado en el mes de Julio");if(12!==o.value.value&&4===a.value.value)return void(0,b.x2)("El periodo de Aguinaldo solo puede ser generado en el mes de Diciembre");const l=yield(0,b.pW)("Confirmacion","Desea Agregar el Periodo Activo?",{});if(!l)return;const t={mes:o.value.value,anio:n.value.value,periodo:a.value.value};e.loading.show();yield p.api.post(p.endPoints.PERIODOS,t).then((e=>w(this,void 0,void 0,(function*(){200===e.status&&(yield r(),(0,b.dF)("Agregado Correctamente"))})))).catch((e=>{(0,b.L1)(e)}));e.loading.hide()})),c=o=>w(this,void 0,void 0,(function*(){if("G"===o.estado)return void(yield h(o));const a=yield(0,b.pW)("Confirmacion","Esta seguro de Generar la Nomina?",{});a&&(e.loading.show(),yield p.api.post(p.endPoints.NOMINA,{idPeriodo:o.id}).then((e=>w(this,void 0,void 0,(function*(){200===e.status&&(yield h(o))})))).catch((e=>{(0,b.L1)(e)})),e.loading.hide())})),h=e=>w(this,void 0,void 0,(function*(){yield p.api.get(p.endPoints.NOMINA,{params:{idPeriodo:e.id}}).then((e=>{if(!e.data)return void(0,b.x2)("No existen Datos para este Periodo");(0,x.R7)();const o=e.data[0],a=o.descripcion,l=`${o.mes} / ${o.año}`,t={documentTitle:"Reporte_Nomina.pdf",pageOrientation:"landscape",content:[{text:"Reporte de Nominas",style:"header"},{text:a,style:"subheader"},{text:l,style:"subheader"},{text:"",style:"subheader"},{table:{headerRows:1,widths:["auto","auto","auto","auto","auto","auto","auto","auto","auto","auto","auto"],body:[[{text:"Empleado",style:"tableHeader"},{text:"Departamento",style:"tableHeader"},{text:"Puesto",style:"tableHeader"},{text:"Salario",style:"tableHeader"},{text:"Horas Extras",style:"tableHeader"},{text:"Comisiones",style:"tableHeader"},{text:"Bonificaciones",style:"tableHeader"},{text:"Horas Dobles",style:"tableHeader"},{text:"Bono de Ley",style:"tableHeader"},{text:"Prestamos",style:"tableHeader"},{text:"Total a Pagar",style:"tableHeader"}],...e.data.map((e=>[`${e.empleado_id} - ${e.nombre_empleado}`,e.departamento,e.puesto,`Q. ${e.sueldo.toFixed(2)}`,`Q. ${e.horas_extras.toFixed(2)}`,`Q. ${e.horas_dobles.toFixed(2)}`,`Q. ${e.comisiones.toFixed(2)}`,`Q. ${e.bonificaciones.toFixed(2)}`,`Q. ${e.bono_ley.toFixed(2)}`,`Q. ${e.prestamos_empleado.toFixed(2)}`,`Q. ${e.total_a_pagar.toFixed(2)}`]))]}}],styles:{header:{fontSize:18,bold:!0,alignment:"center"},tableHeader:{bold:!0,fontSize:10,color:"black"},subheader:{fontSize:12,alignment:"center",margin:[0,5,0,0]}},defaultStyle:{fontSize:10}};v.createPdf(t).open()})).catch((e=>{(0,b.L1)(e)}))})),g=o=>w(this,void 0,void 0,(function*(){const a=yield(0,b.pW)("Confirmacion","Esta seguro de cerrar el periodo de nominas?",{});a&&(e.loading.show(),yield p.api.post(p.endPoints.PERIODOS+"/cerrar",{periodo:o}).then((e=>w(this,void 0,void 0,(function*(){yield r()})))).catch((e=>{(0,b.L1)(e)})),e.loading.hide())}));return{cerrarPeriodo:g,generarNomina:c,imprimirNomina:h,getPeriodos:r,periodosRows:s,columns:P,meses:t,mes:o,periodo:a,periodos:l,filter:i,año:n,años:d,agregarPeriodo:u}},created(){this.getPeriodos()}});var H=a(1639),Q=a(9885),A=a(8326),q=a(6384),k=a(4455),R=a(7580),W=a(7220),D=a(6362),S=a(3246),Z=a(490),C=a(1233),I=a(3119),M=a(2857),j=a(9984),E=a.n(j);const F=(0,H.Z)(_,[["render",u]]),$=F;E()(_,"components",{QPage:Q.Z,QForm:A.Z,QSelect:q.Z,QBtn:k.Z,QTable:R.Z,QTd:W.Z,QMenu:D.Z,QList:S.Z,QItem:Z.Z,QItemSection:C.Z,QInput:I.Z,QIcon:M.Z})}}]);