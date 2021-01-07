import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormControl, FormGroup, NgForm, Validators} from "@angular/forms";
import {UserService} from "../services/user.service";
import {ActivatedRoute, Router} from "@angular/router";
import { first } from 'rxjs/operators';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  loginFrom = new FormGroup({
    password: new FormControl('', [Validators.required, Validators.minLength(6)]),
    email: new FormControl('', [Validators.required, Validators.email])
  });

  submitted =  false;
  constructor(private formBuilder: FormBuilder, private userService : UserService,
  private route: ActivatedRoute,
  private router: Router,
  ) { }

  ngOnInit(): void {
    this.loginFrom = this.formBuilder.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(6)]],
    });
  }

  login() {
    this.submitted=true;
    if (this.loginFrom.invalid) {
      return;
    }

    this.userService.login(this.loginFrom.get('email')?.value,this.loginFrom.get('password')?.value)

      .subscribe(
        data => {
          this.router.navigate(['home']);
        },
        error => {


        });;

  }
}
