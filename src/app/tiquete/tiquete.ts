import { Ruta } from '../ruta/ruta';
import { Viajero } from '../viajero/viajero';

export class Tiquete {
    constructor(
        public idTiquete:string,
        public fechareserva:string,
        public idruta:Ruta,
        public idviajero:Viajero,
        public fechacompra:string,
        public idusuario:string,
    ){}
}