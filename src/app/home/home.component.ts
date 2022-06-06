import { AfterViewChecked, AfterViewInit, Component, OnInit, VERSION } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent  implements OnInit{

  name = 'Angular ' + VERSION.major;
  sh;
  isChecked:boolean;

  ngOnInit() {
    this.sh = "1";
    this.isChecked = true;
  }

}