import { Component, OnInit, OnChanges,  DoCheck, AfterContentInit, AfterContentChecked, AfterViewChecked, AfterViewInit, OnDestroy, SimpleChanges, Input } from '@angular/core';

@Component({
  selector: 'app-ciclo',
  templateUrl: './ciclo.component.html',
  styleUrls: ['./ciclo.component.css']
})
export class CicloComponent implements OnInit, OnChanges, DoCheck, AfterContentInit, AfterContentChecked, AfterViewInit, AfterViewChecked, OnDestroy  {

   @Input() valorInicial: number = 10;
  constructor() {

    this.log('constructor');

   }
  ngOnChanges(): void {
    //throw new Error('Method not implemented.');
  }
  ngAfterContentChecked(): void {
    //throw new Error('Method not implemented.');
  }
  ngOnDestroy(): void {
    //throw new Error('Method not implemented.');
  }

   ngOnInit() : void {
    this.log('ngOnInit');
  }

  ngOnchanges() : void{

    this.log('ngOnChanges');

   }

  ngDoCheck() : void {

    this.log('ngDoCheck');
  }

  ngAfterContentInit() : void {

    this.log('ngAfterContentInit');

  }
  NgAfterContentChecked(): void {

    this.log('NgAfterContentChecked');

  }
  ngAfterViewInit() : void {

    this.log('ngAfterViewInit');

  }
  ngAfterViewChecked() : void {

    this.log('ngAfterViewChecked');
  }

// ngOnDestroy(){

   ///this.log('ngOnDestroy');
 //}

  private log(hook: string){

    console.log(hook);

  }

}
