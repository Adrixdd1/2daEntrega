/*
    define los apoyos que la empresa suele proporcionar a los alumnos que realizan estancias con ellos
*/

export class Apoyos {
    constructor(beca, alimentos, hospedaje , transporte , salario) {
        //todos los atributos son booleanos
        this._beca = beca;
        this._alimentos = alimentos;
        this._hospedaje = hospedaje;
        this._transporte = transporte;
        this._salario = salario;
    }
    get beca() {
        return this._beca;
    }
    set beca(in_beca) {
        this._beca = in_beca;
    }

    get alimentos() {
        return this._alimentos;
    }
    set alimentos(in_alimentos) {
        this._alimentos = in_alimentos;
    }

    get hospedaje() {
        return this._hospedaje;
    }
    set hospedaje(in_hospedaje) {
        this._hospedaje = in_hospedaje;
    }

    get transporte() {
        return this._transporte;
    }
    set transporte(in_transporte) {
        this._transporte = in_transporte;
    }

    get salario() {
        return this._salario;
    }
    set salario(in_salario) {
        this._salario = in_salario;
    }

  }