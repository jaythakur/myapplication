import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map'

@Injectable()
export class AuthenticationService {
    isLogin: boolean = false;

    constructor(private http: HttpClient) { }

    login(username: string, password: string) {
        return this.http.post<any>('http://localhost/crm/api/index.php/User/login', JSON.stringify({ username: username, password: password }))
            .map(user => {
                
                
                // login successful if there's a jwt token in the response
                if (user && user.error_code == 0) {
                    this.isLogin = true;
                    console.log(this.isLogin)
                    // store user details and jwt token in local storage to keep user logged in between page refreshes
                    localStorage.setItem('currentUser', JSON.stringify(user.user));
                }

                return user;
            });
    }

    logout() {
        // remove user from local storage to log user out
        localStorage.removeItem('currentUser');
    }
}