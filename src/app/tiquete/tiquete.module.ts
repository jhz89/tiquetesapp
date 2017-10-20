import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IndexComponent } from './index/index.component';
import { ListaComponent } from './lista/lista.component';
import { TiqueteDataServiceService } from './tiquete-data-service.service';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [IndexComponent, ListaComponent],
  providers:[TiqueteDataServiceService]
})
export class TiqueteModule { }
