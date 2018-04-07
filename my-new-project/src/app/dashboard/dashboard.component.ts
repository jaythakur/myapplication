import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Router } from '@angular/router';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {
  currentUser: any
  profile_dropdown = '';
  constructor(
    private route: ActivatedRoute,
    private router: Router
  ) {
        this.currentUser = JSON.parse(localStorage.getItem('currentUser'));
        if(!this.currentUser) { this.router.navigate(['']); }
   }

  ngOnInit() {
  }
 
  showProfileMenu() {
    this.profile_dropdown = 'show';
  }

}
