export class Opinion {
    constructor(fecha, usuario, calificacion, opinion) {
        this._fecha = fecha;
        this._usuario = usuario;
        this._calificacion = calificacion;
        this._opinion = opinion;
    }
    get fecha() {
        return this._fecha;
    }
    set fecha(in_fecha) {
        this._fecha = in_fecha;
    }

    get usuario() {
        return this._usuario;
    }
    set usuario(in_usuario) {
        this._usuario = in_usuario;
    }

    get calificacion() {
        return this._calificacion;
    }
    set calificacion(in_calificacion) {
        this._calificacion = in_calificacion;
    }

    get opinion() {
        return this._opinion;
    }
    set opinion(in_opinion) {
        this._opinion = in_opinion;
    }

  }