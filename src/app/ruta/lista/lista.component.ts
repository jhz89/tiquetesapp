import { Component, OnInit } from '@angular/core';
import { RutaDataServiceService } from '../ruta-data-service.service'
import { Ruta } from '../ruta';

@Component({
  selector: 'app-lista-ruta',
  templateUrl: './lista.component.html',
  styleUrls: ['./lista.component.css']
})
export class ListaComponent implements OnInit {

  constructor(private RutaService:RutaDataServiceService ) { }

  ngOnInit() {
    console.log("Rutas");
    this.RutaService.loadRutas();
  }

}
