import { CursosService } from './cursos.service';
import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-cursos',
  templateUrl: './cursos.component.html',
  styleUrls: ['./cursos.component.css']
})
export class CursosComponent implements OnInit {

  nomePortal: string;

  cursos: string[];


  constructor(private CursosService: CursosService) {

    this.nomePortal = 'https://loiane.training/';

    // criando var service conceito de injecao de dependencia fornecer instancia de uma classee
    //

    this.cursos = this.CursosService.getCursos();
     //var servico = new CursosService();
    /*
    for(let i=0; i<this.cursos.length; i++){

      let curso = this.cursos[i];

    }

    */

  }

  ngOnInit(): void {
  }

}
