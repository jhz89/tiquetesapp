import { Component, OnInit } from '@angular/core';
import { Ruta } from '../ruta';
import { RutaDataServiceService } from '../ruta-data-service.service';
import { Viajero } from '../../viajero/viajero';

@Component({
  selector: 'app-agregar-ruta',
  templateUrl: './agregar.component.html',
  styleUrls: ['./agregar.component.css']
})
export class AgregarComponent implements OnInit {

  ruta:Ruta;
  
  
    constructor(private rutaService:RutaDataServiceService) { 
      
    }

  

  ngOnInit() {
    this.ruta = new Ruta("","","","","","","","");    
  }

  onSaveRuta(){            
    this.rutaService.saveRuta(this.ruta);
  }

}
