import { Viajero } from '../viajero/viajero';

export class Ruta {
    constructor(
    public idruta:string,
    public destino:string,
    public fechasalida:string,
    public placavehiculo:string,
    public valor:string,
    public cantidadasientos:string,
    public origer:string,
    public idUsuario:string,        
    ){}
}

