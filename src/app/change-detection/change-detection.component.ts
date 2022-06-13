import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-change-detection',
  templateUrl: './change-detection.component.html',
  styleUrls: ['./change-detection.component.css']
})
export class ChangeDetectionComponent implements OnInit {

  constructor() { }
  public fruits: string[] = ['apple','orange', 'cherry'];
  ngOnInit() {
  }

  addFruit(fruit:string){
    this.fruits.push(fruit)
  }

}