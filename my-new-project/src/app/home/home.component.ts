import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';
import { UserService } from '../_services/index';
import { User } from '../_models/index';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  itemCount : number = 4;
  btnTxt : string = 'Add an item';
  goalText = "My first life goal";
  goals = [];

  currentUser: User;
    users: User[] = [];

    constructor(private router: Router, private _data: DataService, private userService: UserService) {
        this.currentUser = JSON.parse(localStorage.getItem('currentUser'));
        if(!this.currentUser) { this.router.navigate(['login']); }
    }

  ngOnInit() {
    this._data.goal.subscribe(res => this.goals = res);
    this.itemCount = this.goals.length;
    this._data.changeGoal(this.goals);
  }

  addItem() {
    this.goals.push(this.goalText);
    this.goalText = '';
    this.itemCount = this.goals.length;
    this._data.changeGoal(this.goals);
  }

  removeItem(i) {
    this.goals.splice(i, 1);
    this.itemCount = this.goals.length;
    this._data.changeGoal(this.goals);
  }

}
