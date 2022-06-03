import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { ValidationComponent } from "./app/validation/validation.component";

const routes: Routes = [
   {
     path: 'vallidation',
     component: ValidationComponent
   }
]

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRouter {
}