import { Injectable } from '@angular/core';
import { Pregunta } from '../models/pregunta';
import { Respuesta } from '../models/respuesta';

@Injectable({
  providedIn: 'root'
})
export class PreguntaService {
  indexPregunta = 0;
  opcionSeleccionada!: Respuesta | null;
  deshabilitarBtn = true;
  pregConfirmada = false;
  indexRespuesta = 0;
  respuestasUsuario: Array<number> = [];

  public preguntas: Pregunta[] = [
    new Pregunta('Cual es la capital de Argentina', [
      new Respuesta('Buenos Aires', 1),
      new Respuesta('Montivideo', 0),
      new Respuesta('Santiago', 0),
      new Respuesta('Lima', 0),
    ]),

    new Pregunta('Cual es la capital de Colombia', [
      new Respuesta('Buenos Aires', 0),
      new Respuesta('Bogota', 1),
      new Respuesta('Santiago', 0),
      new Respuesta('Lima', 0),
    ]),

    new Pregunta('Cual es la capital de Egipto', [
      new Respuesta('Buenos Aires', 0),
      new Respuesta('Montivideo', 0),
      new Respuesta('Santiago', 0),
      new Respuesta('El cario', 1),
    ]),
  ]

  constructor() { }

  getPreguntas() {
    return this.preguntas.slice();
  }
}
