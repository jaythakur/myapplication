import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Http , Response } from '@angular/http';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';
import 'rxjs/add/operator/map'

@Injectable()
export class DataService {

  private goals = new BehaviorSubject<any>(['The initial goal', 'Another silly life goal']);
  goal = this.goals.asObservable();

  constructor(private http:HttpClient) { }

  changeGoal(goal) {
    this.goals.next(goal);
  }

  register(userInfo) {
   
    return this.http.post('http://localhost/crm/api/index.php/User/register', JSON.stringify({
      data:userInfo
    }));
  }

}
