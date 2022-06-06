import { AfterViewInit, Component, OnInit, VERSION } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent  implements AfterViewInit, OnInit{

  name = 'Angular ' + VERSION.major;
  sh = "0"
  isChecked = false;


  ngAfterViewInit(): void {
    this.isChecked = false;
    this.sh = "1"
   
  }

  ngOnInit() {
    this.sh = "0"
    this.isChecked = false;
  }
 
}