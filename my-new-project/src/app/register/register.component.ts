import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Router } from '@angular/router';
import { DataService } from '../data.service';
import { AlertService, UserService } from '../_services/index';
@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {

  user = {}
  responseStatus:Object= [];
  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private _data: DataService,
    private alertService: AlertService,
    private userService: UserService
  ) { }

  ngOnInit() {
  }

  sendMeLogin() {
    this.router.navigate(['login']);
  }

  createUser() {
    this.userService.create(this.user).subscribe(
      data => { this.user = ''; this.sendMeLogin() },
      err => console.log(err),
      () => console.log('Request Completed')
   ); 
  }

 z
}
