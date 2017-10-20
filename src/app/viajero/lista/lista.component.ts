import { Component, OnInit } from '@angular/core';
import { ViajeroDataServerService } from '../viajero--data-server.service';
import { Viajero } from '../viajero';

@Component({
  selector: 'app-lista',
  templateUrl: './lista.component.html',
  styleUrls: ['./lista.component.css']
})
export class ListaComponent implements OnInit {

  constructor(private viajeroService:ViajeroDataServerService) { }

  ngOnInit() {
    console.log("hi list");
    this.viajeroService.loadViajeros();
  }
  

}
