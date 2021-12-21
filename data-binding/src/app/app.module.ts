import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
// alterado abaixo conforme erro Can’t bind to ‘ngModel’ since it isn’t a known property of ‘input’.
// importado os modulos conforme site https://www.angularjswiki.com/angular/
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';

import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DataBindingComponent } from './data-binding/data-binding.component';

@NgModule({
  declarations: [
    AppComponent,
    DataBindingComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
     // alterado abaixo conforme erro Can’t bind to ‘ngModel’ since it isn’t a known property of ‘input’.
     // importado os modulos conforme site https://www.angularjswiki.com/angular/
    FormsModule,
    CommonModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
