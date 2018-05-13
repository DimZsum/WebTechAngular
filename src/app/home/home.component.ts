import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  itemCount;
  btnText = 'Add an item';
  goalText = 'My first life goal';
  goals = [];

  constructor() {
  }

  ngOnInit() {
    this.itemCount = this.goals.length;
  }

  addItem() {
    this.goals.push(this.goalText);
    this.goalText = '';
    this.itemCount = this.goals.length;
  }
  increaseItemCount(){
    this.itemCount++;
  }
  changeGoalText(){
    this.goalText = 'This is a test';
  }

}
