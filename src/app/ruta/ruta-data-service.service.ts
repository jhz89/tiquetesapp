import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Ruta } from './ruta';
import 'rxjs/add/operator/map';



@Injectable()
export class RutaDataServiceService {

  rutaList: Array<Ruta>;  

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
              
        const body = {
            cantidadasientos: rutas.cantidadasientos,
            destino: rutas.destino,
            fechasalida: rutas.fechasalida,
            idUsuario: {
              idUsuario: rutas.idUsuario
              },            
            origen: rutas.origen,
            placavehiculo: {
              placa: rutas.placavehiculo
              },
            valor: rutas.valor
            };
        
          console.log(body)

        this.http.post('http://localhost:8080/tiquetesapp/webresources/entidades.ruta',body).subscribe(data => {
          this.loadRutas();
        });
      }   

      
      
      

}
