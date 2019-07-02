import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';


// FUNCIONA COMO EVENT
import { FormsModule } from "@angular/forms";
import { FormularioComponent } from './formulario/formulario.component';
import { ListapersonasComponent } from './listapersonas/listapersonas.component';

@NgModule({
  declarations: [
    AppComponent,
    FormularioComponent,
    ListapersonasComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
