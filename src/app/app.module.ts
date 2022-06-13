import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { HelloComponent } from './hello.component';
import { ValidationComponent } from './validation/validation.component';
import { AppRouter } from '../app-router';
import { HomeComponent } from './home/home.component';
import { CalendarComponent } from './calendar/calendar.component';
import { HeaderComponent } from './header/header.component';
import { DynamicComponent } from './dynamic/dynamic.component';
import { HttpClientModule } from '@angular/common/http';
import { FormDataComponent } from './components/form-data/form-data.component';
import { ChangeDetectionComponent } from './change-detection/change-detection.component';
import { ListComponent } from './components/list/list.component';

@NgModule({
  imports:      [ BrowserModule, FormsModule, AppRouter, ReactiveFormsModule, HttpClientModule ],
  declarations: [ AppComponent, 
    HelloComponent, 
    ValidationComponent,
    HomeComponent,
    CalendarComponent,
    HeaderComponent,
    DynamicComponent,
    FormDataComponent,
    ChangeDetectionComponent,
    ListComponent
  ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
