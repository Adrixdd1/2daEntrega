import { Apoyos } from "./Apoyos.js";
import { Carrera } from "./Carrera.js";
import { EmpresaEnCatalogo } from "./EmpresaEnCatalogo.js";
import { Opinion } from "./Opinion.js";
import { guardarEnLocal,recuperarDeLocal,get10Empresas } from "./ls.js";
import { cargarEmpresa, selectEmpresas } from "./vistas.js";
let empresas=[];
if(!recuperarDeLocal("empresas")){
    guardarEnLocal("empresas",JSON.stringify(EmpresaEnCatalogo.generarEmpresas()));
}else{
    localStorage.clear();
    empresas=(EmpresaEnCatalogo.generarEmpresas());
    console.log(empresas)
    guardarEnLocal("empresas",JSON.stringify(empresas));
    empresas=JSON.parse(recuperarDeLocal("empresas"));
    console.log(empresas)
    empresas.map(item => {
        item=new EmpresaEnCatalogo(item._idEmpresa,item._nombre,item._ocupacionPrincipal,item._descripcion,item._contacto,item._paginaWeb,item._carrerasRelacionadas.map(item2=>{item2=new Carrera(item2._nombreCarrera,item2._ramasLaborales)}),item._opiniones.map(item3=>{item3=new Opinion(item3._fecha,item3._usuario,item3._caficacion,item3._opinion)}),new Apoyos(item._apoyos._beca,item._apoyos._alimentos,
            item._apoyos._hospedaje,
            item._apoyos._transporte,
            item._apoyos._salario));
    });
}

window.onload=function(){
    //console.log(empresas);
    document.body.appendChild(selectEmpresas(empresas));
    $("#cboEmpresas").on("change",function(){
        cargarEmpresa(empresas[$(this).val()]);
        $("#dejarOpinion").css("display","");
    });
}

