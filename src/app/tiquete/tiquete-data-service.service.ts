import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Http,RequestOptions} from '@angular/http';
import { Tiquete } from './tiquete';
import 'rxjs/add/operator/map';

@Injectable()
export class TiqueteDataServiceService {

  tiqueteList: Array<Tiquete>;

  constructor(private http:HttpClient) { }

  loadTiquetes() {      
    this.http.get('http://localhost:8080/tiquetesapp/webresources/entidades.tiquete').subscribe(data => {
      // Read the result field from the JSON response.
      this.tiqueteList = data as Array<Tiquete>
    });
  }

}
