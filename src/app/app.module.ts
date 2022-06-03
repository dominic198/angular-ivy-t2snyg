import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { HelloComponent } from './hello.component';
import { ValidationComponent } from './validation/validation.component';
import { AppRouter } from '../app-router';

@NgModule({
  imports:      [ BrowserModule, FormsModule, AppRouter ],
  declarations: [ AppComponent, HelloComponent, ValidationComponent ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
