//define los atributos de una carrera de la universidad; su nombre y sus ramas laborales .

export class Carrera {
    constructor(nombreCarrera, ramasLaborales) {
        this._nombreCarrera = nombreCarrera;//String : el nombre se guarda como una cadena 
        this._ramasLaborales = ramasLaborales;//String[] : Arreglo de cadenas
    }
    get nombreCarrera() {
        return this._nombreCarrera;
    }
    set nombreCarrera(in_nombreCarrera) {
        this._nombreCarrera = in_nombreCarrera;
    }

    get ramasLaborales() {
        return this._ramasLaborales;
    }
    set ramasLaborales(in_ramasLaborales) {
        this._ramasLaborales = in_ramasLaborales;
    }

  }
