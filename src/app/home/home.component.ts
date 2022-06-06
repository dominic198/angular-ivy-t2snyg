import { AfterViewInit, Component, OnInit, VERSION } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent  implements AfterViewInit, OnInit{

  name = 'Angular ' + VERSION.major;
  sh = "1"
  isChecked = true;


  ngAfterViewInit(): void {
    this.sh = "1"
    this.isChecked = true;
  }

  ngOnInit() {
    this.sh = "1"
    this.isChecked = true;
  }
 
}