import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-data-binding',
  templateUrl: './data-binding.component.html',
  styleUrls: ['./data-binding.component.css']
})
export class DataBindingComponent implements OnInit {


  constructor() { }

  ngOnInit() {
  }


 //poderá tipar a variavel url: string "http://loiane.com"
  url = "http://loiane.com";

  cursoAngular: boolean = true;

  urlimagem = 'https://as1.ftcdn.net/v2/jpg/01/57/07/24/1000_F_157072459_A92stYXn58jhfD9MGt9R54b5jAMzdgsd.jpg';
  // abaixo poderia definir uma funcao getValor () ou somente getValor
 urlimagem2 = 'https://image.freepik.com/fotos-gratis/fundo-azul-de-tecnologia-de-dados-com-midia-remixada-por-hacker_53876-108534.jpg';

 urlvideo = 'https://www.youtube.com/watch?v=9qWsF-vepUY';

 // aqui se trata de uma funcao
 //function getValo()

 valorAtual: string = '';
 valorSalvo: string = '';
 valorAtual2: string = '';

 //valor = '';
 isMouseOver: boolean = false;
 valor: string= 'kkkk';
 nomeDoCurso: string = "Angular";
 valorInicial = 15;
 getValor(){

    return 1;

  }

  getCurtirCurso(){

    return true;

  }

  botaoClicado(){

    alert('FELIZ DIA DAS CRIANÇAS!');

  }

  onKeyUp(evento: KeyboardEvent){

    this.valorAtual = ((<HTMLInputElement>evento.target).value);
    //console.log((<HTMLInputElement>evento.target).value);
  }
  salvarValor(){

    this.valorSalvo = this.valor;

  }

  OnKeyUp2(evento2: KeyboardEvent){

    this.valorAtual2 = (<HTMLInputElement>evento2.target).value;


  }



 // salvarValor(){

   // this.valorSalvo = valor;

  //}

  onMudouValor(evento: any){

    console.log(evento.novoValor);

  }

}
