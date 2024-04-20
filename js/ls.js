/*
    clase de comunicación con el localStorage 
*/

export function guardarEnLocal(key, value){
    localStorage.setItem(key,value);
}
export function recuperarDeLocal(key){
    let dato=localStorage.getItem(key);
    return dato;
}
export function get10Empresas(){
    empresas=[];

    return empresas;
}
