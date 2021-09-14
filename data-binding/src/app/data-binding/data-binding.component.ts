import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-data-binding',
  templateUrl: './data-binding.component.html',
  styleUrls: ['./data-binding.component.css']
})
export class DataBindingComponent implements OnInit {
 //poderá tipar a variavel url: string "http://loiane.com"
  url = "http://loiane.com";

  cursoAngular: boolean = true;

  urlimagem = 'https://as1.ftcdn.net/v2/jpg/01/57/07/24/1000_F_157072459_A92stYXn58jhfD9MGt9R54b5jAMzdgsd.jpg';
  // abaixo poderia definir uma funcao getValor () ou somente getValor
 urlimagem2 = 'https://image.freepik.com/fotos-gratis/fundo-azul-de-tecnologia-de-dados-com-midia-remixada-por-hacker_53876-108534.jpg';

 urlvideo = 'https://www.youtube.com/watch?v=9qWsF-vepUY&ab_channel=RafaellaBallerini';

 getValor(){

    return 1;

  }

  getCurtirCurso(){

    return true;

  }

  constructor() { }

  ngOnInit(): void {
  }

}
