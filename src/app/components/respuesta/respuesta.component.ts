import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Pregunta } from 'src/app/models/pregunta';
import { PreguntaService } from 'src/app/services/pregunta.service';

@Component({
  selector: 'app-respuesta',
  templateUrl: './respuesta.component.html',
  styleUrls: ['./respuesta.component.css']
})
export class RespuestaComponent {

  listPreguntas!: Pregunta[];
  respestasUsuario!:  any[]

  constructor(private preguntaService: PreguntaService, private router: Router){}

  ngOnInit(): void{
    this.listPreguntas = this.preguntaService.preguntas;
    this.respestasUsuario = this.preguntaService.respuestasUsuario;
  }

  volver() {
    this.preguntaService.respuestasUsuario = [];
    this.router.navigate(['/'])
  }

}
