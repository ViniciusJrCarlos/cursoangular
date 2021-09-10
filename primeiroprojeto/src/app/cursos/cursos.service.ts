import { Injectable } from '@angular/core';

// servico do injectable é uma classe e um decorator de injecao de classe

@Injectable({
  providedIn: 'root'
})
export class CursosService {

  constructor() { }

  getCursos(){

    return ['java', 'php', 'angular'];

  }
}
