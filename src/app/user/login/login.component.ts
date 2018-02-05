import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

import { LoginService } from '../service/login.service';

import { ResponseObject } from '../../common-layout/model/response-object';
import { User } from '../model/user-info';
import { UserToken } from '../model/user-token';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  userid = '';
  password = '';
  rememberme = false;

  loginSuccess = true;
  responseMessage: string;

  userid_empty = false;
  password_empty = false;

  constructor(
    private loginService: LoginService,
    private route: ActivatedRoute,
    private router: Router
  ) { }

  ngOnInit() {
    const rememberid = localStorage.getItem('rememberUserId');

    if (rememberid) {
      this.userid = rememberid;
      this.rememberme = true;
    }
  }

  private validLogin() {        
    if (this.checkEmptyField('all') === false ) {
      return;
    }

    // this.loginService.getLogin(this.userid, this.password).subscribe(
    this.loginService.doLogin(this.userid, this.password).subscribe(
      (model: UserToken) => {
        console.log(model);
        sessionStorage.setItem('token', model.token);
        /*this.loginSuccess = model.success;
        this.responseMessage = model.message;
        if (this.loginSuccess) {
          sessionStorage.setItem('userId', this.userid);

          if (this.rememberme) {
            localStorage.setItem('rememberUserId', this.userid);
          } else {
            localStorage.removeItem('rememberUserId');
          }

          this.router.navigate(['/home']);
        }*/
        this.router.navigate(['/home']);
      },
      (err) => {
        console.log(err);
        sessionStorage.removeItem('token');
        localStorage.removeItem('rememberUserId');
      },
      () => {        
        console.log(this.responseMessage);
      }
    );
  }

  private checkEmptyField(field: string): boolean {
    let rtn = true;

    if (field === 'userid')
      this.userid === '' ? this.userid_empty = true : this.userid_empty = false;

    if (field === 'password')
      this.password === '' ? this.password_empty = true : this.password_empty = false;

    if (field === 'all') {
      this.userid === '' ? this.userid_empty = true : this.userid_empty = false;
      this.password === '' ? this.password_empty = true : this.password_empty = false;
    }

    if ( this.userid_empty || this.password_empty )
      rtn = false;

    return rtn;
  }

}
