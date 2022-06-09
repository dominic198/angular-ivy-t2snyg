import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

interface dataVal {
  id: string;
  Label: string;
  Type: string;
  Value: string;
}

export interface jsonFormControls {
  id: string;
  Label?: string;
  Type?: string;
  Value?: string;
  data?: dataVal [],
  isGroup: boolean,
}

export interface jsonFormData {
  controls: jsonFormControls[]
}

@Component({
  selector: 'app-dynamic',
  templateUrl: './dynamic.component.html',
  styleUrls: ['./dynamic.component.css']
})
export class DynamicComponent implements OnInit {

  constructor(private http: HttpClient) { }

  public formData: jsonFormData = {
    controls: []
  }

  ngOnInit() {
    this.http.get('/assets/data.json')
    .subscribe((data: jsonFormData) => {
      this.formData = data;
    })
  }

}