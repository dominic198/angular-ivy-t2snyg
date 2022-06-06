import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { HelloComponent } from './hello.component';
import { ValidationComponent } from './validation/validation.component';
import { AppRouter } from '../app-router';
import { HomeComponent } from './home/home.component';
import { CalendarComponent } from './calendar/calendar.component';

@NgModule({
  imports:      [ BrowserModule, FormsModule, AppRouter, ReactiveFormsModule ],
  declarations: [ AppComponent, 
    HelloComponent, 
    ValidationComponent,
    HomeComponent,
    CalendarComponent
  ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
