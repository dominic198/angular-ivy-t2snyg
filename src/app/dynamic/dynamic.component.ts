import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-dynamic',
  templateUrl: './dynamic.component.html',
  styleUrls: ['./dynamic.component.css']
})
export class DynamicComponent implements OnInit {

  constructor(private http: HttpClient) { }

  ngOnInit() {
    this.http.get('/assets/data.json')
    .subscribe((data:any) => {
      console.log(data);
    })
  }

}