import { Persona } from './persona.model';
import { LoginService } from './loginService.service';
import { Injectable, EventEmitter } from '@angular/core';

// PARA INJECTA RUN SERVICIO EN OTRO
@Injectable()

export class PersonasService {

    constructor(private loginservice: LoginService) {
    }

    personas: Persona[] = [
        new Persona("Título 1", "Lorem ipsum dolor sit amet consectetur adipisicing elit.")
    ];

    saludar = new EventEmitter<number>();

    agregarPersona(persona: Persona) {
        this.loginservice.enviarMensaje("Nombre X:" + persona.nombre);
        this.personas.push(persona);
    }

}