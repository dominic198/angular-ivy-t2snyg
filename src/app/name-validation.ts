import { AbstractControl, ValidationErrors } from "@angular/forms";

export class NameValidation {
  static cannotContanSpaces(control: AbstractControl) : ValidationErrors | null {
        if((control.value as string).indexOf(' ') > 0){
          return {cannotContanSpaces: true}
        }
        return null;
  }
}