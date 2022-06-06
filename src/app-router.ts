import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { CalendarComponent } from "./app/calendar/calendar.component";
import { HomeComponent } from "./app/home/home.component";
import { ValidationComponent } from "./app/validation/validation.component";

const routes: Routes = [
   {
     path: 'validation',
     component: ValidationComponent
   },
   {
     path: 'home',
     component: HomeComponent
   },
   {
     path: 'calendar',
     component: CalendarComponent
   },
   {
     path: '',
     redirectTo: 'home',
     pathMatch: 'full'
   }
]

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRouter {
}