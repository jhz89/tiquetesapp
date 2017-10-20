import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IndexComponent } from './index/index.component';
import { ListaComponent } from './lista/lista.component';
import { RutaDataServiceService } from '../ruta/ruta-data-service.service';
import { AgregarComponent } from './agregar/agregar.component';
import { FormsModule }   from '@angular/forms';

@NgModule({
  imports: [
    CommonModule,
    FormsModule
  ],
  declarations: [IndexComponent, ListaComponent, AgregarComponent],
  providers:[RutaDataServiceService]
})
export class RutaModule { }
