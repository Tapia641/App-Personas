import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';


// FUNCIONA COMO EVENT
import { FormsModule } from "@angular/forms";
import { FormularioComponent } from './formulario/formulario.component';
import { ListapersonasComponent } from './listapersonas/listapersonas.component';
import { LoginService } from './loginService.service';
import { PersonasService } from './personas.service';
import { LoginComponent } from "./login/login.component";

@NgModule({
  declarations: [
    AppComponent,
    FormularioComponent,
    ListapersonasComponent,
    LoginComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
  ],
  providers: [LoginService, PersonasService],
  bootstrap: [AppComponent]
})
export class AppModule { }
