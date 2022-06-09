import { Component, OnInit, Input, OnChanges, ChangeDetectionStrategy, SimpleChanges } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { jsonFormControls, jsonFormData } from '../../dynamic/dynamic.component';

@Component({
  selector: 'app-form-data',
  templateUrl: './form-data.component.html',
  styleUrls: ['./form-data.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class FormDataComponent implements OnInit, OnChanges {

  @Input() formData : jsonFormData;

  constructor(private fb: FormBuilder) { }
  public myForm: FormGroup = this.fb.group({});

  ngOnInit() {
  }

  ngOnChanges(changes: SimpleChanges) {
     if(!changes.formData.firstChange){
       this.createForm(this.formData.controls)
     }
  }

  createForm(controls: jsonFormControls[]){
    console.log(controls);
    for(let control of controls){
       if(control.)
    }
  }

}