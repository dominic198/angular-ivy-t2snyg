import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { NameValidation } from '../name-validation';

@Component({
  selector: 'app-validation',
  templateUrl: './validation.component.html',
  styleUrls: ['./validation.component.css']
})
export class ValidationComponent implements OnInit {
  public myForm: FormGroup;

  constructor(private fb: FormBuilder) { 
    this.myForm = this.fb.group({
      name: ['',[Validators.required, Validators.minLength(3), NameValidation.cannotContanSpaces]]
    })
  }

  ngOnInit() {
  }

  get f(){
    return this.myForm.controls;
  }

  onSubmit(){
    console.log(this.myForm.value)
  }

  addControl(){
    this.myForm.addControl('address', this.fb.group({
      city: ['chennai',Validators.required],
      state: ['TamilNadu', Validators.required]
    }))
  }
}