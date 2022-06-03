import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { ValidationComponent } from "./app/validation/validation.component";

const routes: Routes = [
   {
     path: 'validation',
     component: ValidationComponent
   },
   {
     path: '',
     redirectTo: 'validation',
     pathMatch: 'full'
   }
]

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRouter {
}