import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { PersonaComponent } from './persona/persona.component';
import { PersonasComponent } from './personas/personas.component';


// FUNCIONA COMO EVENT
import { FormsModule } from "@angular/forms";

@NgModule({
  declarations: [
    AppComponent,
    PersonaComponent,
    PersonasComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
