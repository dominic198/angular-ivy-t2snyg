import { AfterViewInit, Component, OnInit, VERSION } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent  implements AfterViewInit{

  ngAfterViewInit(): void {
    this.sh = "0"
    this.isChecked = true;
  }

  name = 'Angular ' + VERSION.major;
  sh = ""
  isChecked = true;

}