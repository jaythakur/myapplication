import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Router } from '@angular/router';
import { DataService } from '../data.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {

  user = {}
  constructor(private route: ActivatedRoute, private router: Router, private _data: DataService) { }

  ngOnInit() {
  }

  sendMeLogin() {
    this.router.navigate(['login']);
  }

  saveDetail() {
    this._data.register(this.user)
  }
}
