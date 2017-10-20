import { Component, OnInit } from '@angular/core';
import { TiqueteDataServiceService } from '../tiquete-data-service.service';

@Component({
  selector: 'app-lista-tiquete',
  templateUrl: './lista.component.html',
  styleUrls: ['./lista.component.css']
})
export class ListaComponent implements OnInit {

  constructor(private TiqueteService:TiqueteDataServiceService) { }

  ngOnInit() {
    this.TiqueteService.loadTiquetes();
  }

}
