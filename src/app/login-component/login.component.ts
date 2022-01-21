import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserLogin } from '../models/user';
import { LoginService } from '../services/login.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  loginUserData: UserLogin = {username: null, password: null};

  constructor(private loginService: LoginService, private router: Router) { }

  ngOnInit(): void {
  }

  public loginUser() {
    console.log(this.loginUserData);
    this.loginService.loginUser(this.loginUserData).subscribe(
      res => {
        console.log(res)
        this.navToTransaction();
      },
      error => console.log(error)
    )
  }

  private navToTransaction(){
    this.router.navigate(['transaction']);
  }

}
