import { MeuFormModule } from './meu-form/meu-form.module';
//import { MeuFormComponent } from './meu-form/meu-form.component';
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
//import { HttpModule } from '@angular/http';
//import { Bui } from '@angular-devkit/build-angular';
// alterado abaixo conforme erro Can’t bind to ‘ngModel’ since it isn’t a known property of ‘input’.
// importado os modulos conforme site https://www.angularjswiki.com/angular/
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';

import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DataBindingComponent } from './data-binding/data-binding.component';
import { InputPropertyComponent } from './input-property/input-property.component';
import { OutputPropertyComponent } from './output-property/output-property.component';

@NgModule({
  declarations: [
    AppComponent,
    DataBindingComponent,
    InputPropertyComponent,
    OutputPropertyComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
     // alterado abaixo conforme erro Can’t bind to ‘ngModel’ since it isn’t a known property of ‘input’.
     // importado os modulos conforme site https://www.angularjswiki.com/angular/
    FormsModule,
    CommonModule,
    ReactiveFormsModule,
    MeuFormModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
