import { Component, OnInit, VERSION } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent  {

  name = 'Angular ' + VERSION.major;
  sh = ""
  isChecked = true;

}