import { Component, OnInit } from '@angular/core';
import { AuthService } from '../auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {

  regiserUserData = {}

  constructor(private authService: AuthService, private router: Router) { }

  ngOnInit() {
  }

  regiserUser(){
    this.authService.registerUser(this.regiserUserData)
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
