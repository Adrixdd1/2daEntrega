import{Empresa} from "./Empresa.js";
import { Apoyos } from "./Apoyos.js";
import { Carrera } from "./Carrera.js";
import { Opinion } from "./Opinion.js";
export class EmpresaEnCatalogo extends Empresa {
    constructor(idEmpresa, nombre, ocupacionPrincipal, descripcion, contacto, paginaWeb,carrerasRelacionadas,opiniones,apoyos) {
        super(idEmpresa, nombre, ocupacionPrincipal, descripcion, contacto, paginaWeb);
        this._opiniones = opiniones;//Opinion[] : Arreglo de objetos tipo Opinion
        this._carrerasRelacionadas = carrerasRelacionadas;//Carrera[] : arreglo de objetos tipo Carrera
        this._apoyos = apoyos;//Apoyos : instancia de Apoyo
    }
    get idEmpresa() {
        return super.idEmpresa;
    }
    // Getter y setter para nombre
    get nombre() {
        return super.nombre;
    }
    set nombre(value) {
        super.nombre = value;
    }

    // Getter y setter para ocupacionPrincipal
    get ocupacionPrincipal() {
        return super.ocupacionPrincipal;
    }
    set ocupacionPrincipal(value) {
        super.ocupacionPrincipal = value;
    }

    // Getter y setter para descripcion
    get descripcion() {
        return super.descripcion;
    }
    set descripcion(value) {
        super.descripcion = value;
    }

    // Getter y setter para contacto
    get contacto() {
        return super.contacto;
    }
    set contacto(value) {
        super.contacto = value;
    }

    // Getter y setter para paginaWeb
    get paginaWeb() {
        return super.paginaWeb;
    }
    set paginaWeb(value) {
        super.paginaWeb = value;
    }

    // Getter y setter para idEmpresa
    get idEmpresa() {
        return super.idEmpresa;
    }
    set idEmpresa(value) {
        super.idEmpresa = value;
    }
    get opiniones() {
        return this._opiniones;
    }
    set opiniones(in_opiniones) {
        this._opiniones = in_opiniones;
    }

    get carrerasRelacionadas() {
        return this._carrerasRelacionadas;
    }
    set carrerasRelacionadas(in_carrerasRelacionadas) {
        this._carrerasRelacionadas = in_carrerasRelacionadas;
    }

    get apoyos() {
        return this._apoyos;
    }
    set apoyos(in_apoyos) {
        this._apoyos = in_apoyos;
    }
    static generarEmpresas() {
        const empresas = [];

        // Información ficticia semirealista para 3 empresas
        const empresasInfo = [
            "1|Empresa A|Tecnología|Empresa líder en desarrollo de software|contacto@empresaA.com|www.empresaA.com",
            "2|Empresa B|Servicios financieros|Ofrecemos soluciones financieras innovadoras|contacto@empresaB.com|www.empresaB.com",
            "3|Empresa C|Educación|Escuela de idiomas reconocida internacionalmente|contacto@empresaC.com|www.empresaC.com"
        ];

        for (let i = 0; i < empresasInfo.length; i++) {
            const info = empresasInfo[i].split("|");
            const idEmpresa = parseInt(info[0]);
            const nombre = info[1];
            const ocupacionPrincipal = info[2];
            const descripcion = info[3];
            const contacto = info[4];
            const paginaWeb = info[5];

            const empresa = new EmpresaEnCatalogo(idEmpresa, nombre, ocupacionPrincipal, descripcion, contacto, paginaWeb, [], [], new Apoyos());

            // Generar opiniones de ejemplo
            for (let j = 0; j < 3; j++) {
                const alumno = `Alumno ${j + 1}`;
                const calificacion = Math.floor(Math.random() * 5) + 1; // Calificación aleatoria entre 1 y 5
                const opinion = `Buena empresa, me gustó mucho trabajar aquí.`;
                empresa.opiniones.push(new Opinion(10,alumno, calificacion, opinion));
            }

            // Generar carreras relacionadas de ejemplo
            const carreras = ["Ingeniería en Sistemas", "Administración de Empresas", "Idiomas"];
            const carrera = carreras[Math.floor(Math.random() * carreras.length)];
            empresa.carrerasRelacionadas.push(new Carrera(carrera, ["Desarrollo de software", "Finanzas", "Enseñanza de idiomas"]));

            // Generar apoyos de ejemplo
            empresa.apoyos.beca = Math.random() < 0.5;
            empresa.apoyos.alimentos = Math.random() < 0.3;
            empresa.apoyos.hospedaje = Math.random() < 0.2;
            empresa.apoyos.transporte = Math.random() < 0.4;
            empresa.apoyos.salario = Math.random() < 0.6;

            empresas.push(empresa);
        }

        return empresas;
    }

    calificacionTotal(){
        let valorTotal=0;
        this._opiniones.forEach(item => {
            valorTotal+=item.calificacion;
        });
        return valorTotal/this._opiniones.length;
    }

    
}