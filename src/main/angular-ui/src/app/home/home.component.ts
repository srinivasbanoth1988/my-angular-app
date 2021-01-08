import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Router} from "@angular/router";

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  currentUser : any;
  constructor(private route: ActivatedRoute,
              private router: Router) {

  }

  ngOnInit(){
    let loggedInUser =  localStorage.getItem('currentUser')
    if(loggedInUser == null) {
      this.router.navigate(['login']);
    } else {
      this.currentUser = loggedInUser;
    }
  }


  logout() {
    localStorage.removeItem('currentUser');
    this.router.navigate(['login']);
  }
}
