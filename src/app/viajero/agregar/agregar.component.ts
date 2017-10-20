import { Component, OnInit } from '@angular/core';
import { Viajero } from '../viajero';
import { ViajeroDataServerService } from '../viajero--data-server.service';


@Component({
  selector: 'app-agregar',
  templateUrl: './agregar.component.html',
  styleUrls: ['./agregar.component.css']
})
export class AgregarComponent implements OnInit {

  viajero:Viajero;

  constructor(private viajeroService:ViajeroDataServerService) { 
    
  }

  ngOnInit() {
    this.viajero = new Viajero("","","","","");
    //this.viajeroService.saveViajeros(this.viajero);
  }

  onNewViajero(){
    
  }

  onSaveViajero(){            
    this.viajeroService.saveViajeros(this.viajero);
  }

}
