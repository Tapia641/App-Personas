import { Persona } from './persona.model';
import { LoginService } from './loginService.service';
import { Injectable } from '@angular/core';

@Injectable()

export class PersonasService {

    constructor(private loginservice: LoginService) {
    }

    personas: Persona[] = [
        new Persona("Juan", "Perez"),
        new Persona("Laura", "Juarez")
    ];

    agregarPersona(persona: Persona) {
        this.loginservice.enviarMensaje("Nombre X:" + persona.nombre);
        this.personas.push(persona);
    }

}