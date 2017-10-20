import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AgregarComponent } from './agregar/agregar.component';
import { IndexComponent } from './index/index.component';
import { ListaComponent } from './lista/lista.component';
import { ViajeroDataServerService } from './viajero--data-server.service';
import { FormsModule }   from '@angular/forms';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
  ],
  declarations: [AgregarComponent, IndexComponent, ListaComponent],
  providers:[ViajeroDataServerService]
})
export class ViajeroModule { }
