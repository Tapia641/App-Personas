import { Component, OnInit, Input } from '@angular/core';
import { Persona } from '../persona.model';
import { PersonasService } from '../personas.service';

@Component({
  selector: 'app-listapersonas',
  templateUrl: './listapersonas.component.html',
  styleUrls: ['./listapersonas.component.css']
})
export class ListapersonasComponent implements OnInit {
  
  // RECIBIR INFORMACION DEL COMPONENTE PADRE
  @Input() persona: Persona;
  @Input() indice: number;

  constructor(private personasservice:PersonasService) { }

  ngOnInit() {
  }

  emitirSaludo(){
    this.personasservice.saludar.emit(this.indice);
  }

}
