import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { ViajeroModule } from './viajero/viajero.module';
import { AgregarComponent as AgregarViajero} from './viajero/agregar/agregar.component';
import { RouterModule, Routes } from '@angular/router';
import { MenuComponent } from './menu/menu.component';
import { OpcionesComponent } from './opciones/opciones.component';
import { IndexComponent } from './viajero/index/index.component';
import {HttpClientModule} from '@angular/common/http';
import { FormsModule }   from '@angular/forms';
import { HttpModule }    from '@angular/http';
import { RutaModule } from './ruta/ruta.module';
import { IndexComponent as IndexRuta } from './ruta/index/index.component';
import { TiqueteModule } from './tiquete/tiquete.module';
import { IndexComponent as IndexTiquete } from './tiquete/index/index.component';
import { HomeComponent } from './home/home.component';


const appRoutes: Routes = [
  { path: 'viajero/index', component: IndexComponent  },
  { path: 'ruta/index', component: IndexRuta  },
  { path: 'tiquete/index', component: IndexTiquete },
  { path: 'home', component: HomeComponent }
    
];




@NgModule({
  declarations: [
    AppComponent,
    MenuComponent,
    OpcionesComponent,
    HomeComponent,    
  ],
  imports: [
    HttpModule,
    BrowserModule,
    FormsModule,
    ViajeroModule,
    RutaModule,
    TiqueteModule,
    HttpClientModule,
    RouterModule.forRoot(
      appRoutes
    )    
  ],
  
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

