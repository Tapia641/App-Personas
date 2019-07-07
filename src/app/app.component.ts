import { Component, OnInit } from '@angular/core';
import { Persona } from './persona.model';
import { PersonasService } from './personas.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {

  titulo = 'Listado de personas.';

  // ARREGLO DE TIPO PERSONA
  personas: Persona[] = [];

  constructor(private personasservice: PersonasService) {
  }

  ngOnInit(): void {
    this.personas = this.personasservice.personas;
  }

  onPersonaAgregada(persona: Persona) {
    //this.personas.push(persona);
    this.personasservice.agregarPersona(persona);
  }


}
