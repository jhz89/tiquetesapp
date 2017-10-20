import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Http, Headers, RequestOptions} from '@angular/http';
import { Ruta } from './ruta';
import 'rxjs/add/operator/map';

@Injectable()
export class RutaDataServiceService {

  rutaList: Array<Ruta>;
  headers: Headers;
  headersPost: HttpHeaders;
  options: RequestOptions;

  constructor(private http: HttpClient) { 
    console.log('Hello RutaDataServiceService Provider'); 
  }

  loadRutas() {      
    this.http.get('http://localhost:8080/tiquetesapp/webresources/entidades.ruta').subscribe(data => {
      // Read the result field from the JSON response.
      this.rutaList = data as Array<Ruta>
    });
  }

  saveRuta(rutas:Ruta){
    
        this.headersPost = new HttpHeaders({
          'Content-Type':'application/json',            
        });
    
        //{"apellido":"Loaiza","cedula":"75147236","correo":"carloaiza@gmail.com","nombre":"Carlos","telefono":"3102345675"} 
        //`{"destino":"${rutas.destino}","fechasalida":"${rutas.fechasalida}","placavheiculo":"${rutas.placavehiculo}","valor":"${rutas.valor}","origen":"${rutas.origer}","idUsuario":"${rutas.idUsuario.cedula}"}` 
        //`{"destino":"Cali","fechasalida":"18-10-2017","placavheiculo":"XMA962","valor":"40000","origen":"Manizales","idUsuario":"1"}
        //{"destino":"${rutas.destino}","fechasalida":"${rutas.fechasalida}","placavheiculo":"${rutas.placavehiculo}","valor":"${rutas.valor}","origen":"${rutas.origer}","idUsuario":"${rutas.idUsuario}"}     
        let queryString:string = `{"cantidadasientos":"15","destino":"Cali","fechasalida":"18-10-2017","idUsuario":"1","idruta":"8","origen":"Manizales","placavehiculo":"XMA962","valor":"40000"}`;        
        this.http.post('http://localhost:8080/tiquetesapp/webresources/entidades.ruta',queryString,{headers: this.headersPost}).subscribe(data => {
          this.loadRutas();
        });
      }   
      
      

}
