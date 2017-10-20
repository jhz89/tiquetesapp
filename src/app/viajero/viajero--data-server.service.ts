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

    //{"apellido":"Loaiza","cedula":"75147236","correo":"carloaiza@gmail.com","nombre":"Carlos","telefono":"3102345675"}       
    let queryString:string = `{"cedula":"${viajeros.cedula}","nombre":"${viajeros.nombre}","apellido":"${viajeros.apellido}","correo":"${viajeros.correo}","telefono":"${viajeros.telefono}"}`;
    
    //`"{cedula:"${viajeros.cedula}","nombre:"${viajeros.nombre}","apellido:"${viajeros.apellido}",correo:"${viajeros.correo}",telefono:"${viajeros.telefono}+"}`;
    this.http.post('http://localhost:8080/tiquetesapp/webresources/entidades.viajero',queryString,{headers: this.headersPost}).subscribe(data => {
      this.loadViajeros();
    });
  }

  /*public loadViajeros(){
    this.headersPost = new Headers({
      'Content-Type':'application/x-www-form-urlencoded',
      'Access-Control-Allow-Origin':'*',
      'auth':'maria',
      'passwd':'seminario',      
    });

    let optionspost = new RequestOptions({
       headers: this.headersPost
    })

    return new Promise ((resolve, reject)=>{
      this.http.get('http://localhost:8080/seminariogrado/webresources/com.sistema.entidades.viajero', optionspost)
      .subscribe(res=>{        
        resolve(res);
      },(err)=>{
        resolve(err);
      });
    });
  }*/ 

    
}
