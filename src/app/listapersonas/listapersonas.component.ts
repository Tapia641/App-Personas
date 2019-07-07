import { Component, OnInit, Input } from '@angular/core';
import { Persona } from '../persona.model';

@Component({
  selector: 'app-listapersonas',
  templateUrl: './listapersonas.component.html',
  styleUrls: ['./listapersonas.component.css']
})
export class ListapersonasComponent implements OnInit {
  
  // RECIBIR INFORMACION DEL COMPONENTE PADRE
  @Input() persona: Persona;
  @Input() indice: number;

  constructor() { }

  ngOnInit() {
  }

}
