import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Router } from '@angular/router';
import { AlertService, AuthenticationService } from '../_services/index';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  model: any = {};
  loading = false;
  returnUrl: string;
  isLogin: boolean = false;
  constructor(private route: ActivatedRoute, private router: Router, private authenticationService: AuthenticationService,
    private alertService: AlertService) { }

  ngOnInit() {
    // reset login status
    this.authenticationService.logout();

    // get return url from route parameters or default to '/'
    this.returnUrl = this.route.snapshot.queryParams['returnUrl'] || '/dashboard';
  }

  sendMeRegister() {
    this.router.navigate(['register']);
  }

  login() {
    this.authenticationService.login(this.model.username, this.model.password)
            .subscribe(
                data => {
                    this.isLogin = true;
                    this.router.navigate([this.returnUrl]);
                    
                },
                error => {
                    this.alertService.error(error);
                    this.loading = false;
                });
  }

}
