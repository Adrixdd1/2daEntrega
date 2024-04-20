//Clase generadora de objetos para el DOOM

export function selectEmpresas(empresas){
    let select= document.createElement("select");
    let cuerpoSelect ="";
    for(let i=0;i<empresas.length;i++){
        cuerpoSelect = "<option value='"+i+"'>"+empresas[i]._nombre+"</option>"
        select.innerHTML+= cuerpoSelect ;
    }
    select.id="cboEmpresas";
    return select;
}

export function cargarEmpresa(empresa) {
    document.getElementById("nombreEmpresa").innerText = empresa._nombre;
    document.getElementById("informacionEmpresa").innerText = empresa._descripcion;

    let opinionGeneral=document.getElementById("opGeneral");
    let opinionesContainer = document.getElementById("contenedorOpiniones");
    opinionesContainer.innerHTML = ""; // Limpiamos el contenido anterior
    let valorOpGeneral=4;
    opinionGeneral.innerHTML=generarEstrellas(valorOpGeneral);
        empresa._opiniones.forEach(opinion => {
        console.log(opinion);
        let opinionElement = document.createElement("div");
        opinionElement.classList.add("opinion");

        let calificacionContainer = document.createElement("div");
        calificacionContainer.classList.add("calificacion");
        calificacionContainer.innerHTML = generarEstrellas(opinion._calificacion); // Generar estrellas basadas en la calificación

        let textoOpinion = document.createElement("p");
        textoOpinion.innerText = opinion._opinion;

        opinionElement.appendChild(calificacionContainer);
        opinionElement.appendChild(textoOpinion);
        opinionesContainer.appendChild(opinionElement);
    });
}

function generarEstrellas(calificacion) {
    let estrellasHTML = "";
    for (let i = 1; i <= 5; i++) {
        if (i <= calificacion) {
            estrellasHTML += "<i class='bi bi-star-fill'></i>"; // Estrella llena
        } else {
            estrellasHTML += "<i class='bi bi-star'></i>"; // Estrella vacía
        }
    }
    return estrellasHTML;
}












/*export function cargarEmpresa(empresa){
    document.getElementById("nombreEmpresa").innerText=empresa._nombre;
    document.getElementById("informacionEmpresa").innerText=empresa._descripción;
    //$("#opGeneral").val(empresa.getCalificacion());
    cargarOpiniones(empresa._opiniones);
}
function cargarOpiniones(op){
    let texto="<div>";
    for(let i=0;i<op.length;i++){
        texto+="<div class='opiniones-container'>";
        texto+="<h6>calificación:"+op[i].valor+"</h6>";
        texto+="<p>calificación:"+op[i].opinion+"</p>";
        texto+="</div>";
    }
    document.getElementById("contenedorOpiniones").innerHTML = texto+"</div>";
}*/