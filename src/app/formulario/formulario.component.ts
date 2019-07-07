import { Component, OnInit } from '@angular/core';
import { Persona } from '../persona.model';
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
  showSuccessful: boolean = false;

  constructor(private personasservice: PersonasService) {
    this.personasservice.saludar.subscribe(
      (indice: number) => alert("El indice es: " + indice));
  }

  ngOnInit() {
  }

  onAgregarPersona() {
    let persona1 = new Persona(this.nombreInput, this.apellidoInput);
    this.personasservice.agregarPersona(persona1);
    this.showSuccessful = true;
    //this.loginservice.enviarMensaje("Enviamos persona: " + persona1.nombre);
    //this.personaCreada.emit(persona1);
  }


}
