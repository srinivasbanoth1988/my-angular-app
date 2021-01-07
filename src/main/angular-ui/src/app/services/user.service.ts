import { Injectable } from '@angular/core';
import { map } from 'rxjs/operators';
import {Observable, pipe} from "rxjs";
import {HttpClient} from "@angular/common/http";
@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private http: HttpClient){}

  login(email : string, password :string) {
    return this.http.post("/users/authenticate", { username: email, password: password }).
      pipe(map(user => {


      localStorage.setItem('currentUser', email);
      return  user;
    }))





  }
}
