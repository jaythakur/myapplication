import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'app';
  isLogin: boolean = false;
  currentUser: any;

    constructor() {
        this.currentUser = JSON.parse(localStorage.getItem('currentUser'));
        if(!this.currentUser) { this.isLogin= false;} else { this.isLogin = true; }
        
    }

}
