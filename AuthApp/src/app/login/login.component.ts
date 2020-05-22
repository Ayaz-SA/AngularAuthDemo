import { Component, OnInit } from '@angular/core';
import { AuthService } from '../auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  loginUserData = {}
  constructor(private authService: AuthService, private router: Router) { }

  ngOnInit() {
  }

  loginUser(){
    this.authService.loginUser(this.loginUserData)
      .subscribe(
        res => {
          console.log(res)
          localStorage.setItem('token', res['token'])
          this.router.navigate(['/special'])
        },
        err => console.log(err)
      );
  }
}
