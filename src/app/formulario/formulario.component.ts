import { Component, OnInit } from '@angular/core';
import { Persona } from '../persona.model';
import { LoginService } from '../loginService.service';
import { PersonasService } from '../personas.service';

@Component({
  selector: 'app-formulario',
  templateUrl: './formulario.component.html',
  styleUrls: ['./formulario.component.css'],
})

export class FormularioComponent implements OnInit {

  // ENVIA INFORMACION AL COMPONENTE PADRE
  // OBJETO QUE EMITIRA UN EVENTO
  //@Output() personaCreada = new EventEmitter<Persona>();

  nombreInput: string;
  apellidoInput: string;

  constructor(private personaservice: PersonasService) { }

  ngOnInit() {
  }

  onAgregarPersona() {
    let persona1 = new Persona(this.nombreInput, this.apellidoInput);
    this.personaservice.agregarPersona(persona1);
    //this.loginservice.enviarMensaje("Enviamos persona: " + persona1.nombre);
    //this.personaCreada.emit(persona1);
  }

}
