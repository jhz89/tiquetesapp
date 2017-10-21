import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Http,RequestOptions} from '@angular/http';
import { Viajero } from './viajero';
import 'rxjs/add/operator/map';

@Injectable()
export class ViajeroDataServerService {
  
  viajeroList: Array<Viajero>;
  headers: Headers;
  headersPost: HttpHeaders;
  options: RequestOptions;  

  constructor(private http: HttpClient) { 
    console.log('Hello ProductServicesProvider Provider');   
  }

  loadViajeros() {      
    this.http.get('http://localhost:8080/tiquetesapp/webresources/entidades.viajero').subscribe(data => {
      // Read the result field from the JSON response.
      this.viajeroList = data as Array<Viajero>
    });
  }

  saveViajeros(viajeros:Viajero){

    this.headersPost = new HttpHeaders({
      'Content-Type':'application/json',            
    });

    let queryString:string = `{"cedula":"${viajeros.cedula}","nombre":"${viajeros.nombre}","apellido":"${viajeros.apellido}","correo":"${viajeros.correo}","telefono":"${viajeros.telefono}"}`;
        
    this.http.post('http://localhost:8080/tiquetesapp/webresources/entidades.viajero',queryString,{headers: this.headersPost}).subscribe(data => {
      this.loadViajeros();
    });
  }
    
}
