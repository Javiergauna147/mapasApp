import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialModule } from './material.module';
import { ReactiveFormsModule } from '@angular/forms';


import { MapaComponent } from './components/mapa/mapa.component';
import { MapaEditarComponent } from './components/mapa/mapa-editar.component';

/**
 * Importanción para angular google maps
*/
import { AgmCoreModule } from '@agm/core';


@NgModule({
  declarations: [
    AppComponent,
    MapaComponent,
    MapaEditarComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MaterialModule,
    ReactiveFormsModule,

    AgmCoreModule.forRoot({
      apiKey: 'AIzaSyD9He2vKQMlBnlJr83dX4BIHwktBZg_yps'
    })

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
