import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { CalendarComponent } from "./app/calendar/calendar.component";
import { ChangeDetectionComponent } from "./app/change-detection/change-detection.component";
import { DynamicComponent } from "./app/dynamic/dynamic.component";
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
     path: 'dynamic',
     component: DynamicComponent
   },
   {
     path: 'change',
     component: ChangeDetectionComponent
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