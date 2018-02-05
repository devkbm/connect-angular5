import { Component, OnInit, Output, EventEmitter } from '@angular/core';

import { UserService } from '../service/user.service';
import { AppAlarmService } from '../../common-layout/app-alarm.service';

import { ResponseObject } from '../../common-layout/model/response-object';
import { User } from '../model/user-info';

import { AuthoritySelectboxesComponent } from './authority-selectboxes.component';

@Component({
  selector: 'app-user-form',
  templateUrl: './user-form.component.html',
  styles: ['']
})
export class UserFormComponent implements OnInit {

  private user: User;
  private passwordConfirm: String;
  private isValidPassword: boolean;
  private isPasswordEmpty: boolean;
  private isPasswordConfirmEmpty: boolean;

  @Output() messageChanged: EventEmitter<string> = new EventEmitter();

  constructor(private userService: UserService,
              private appAlarmService: AppAlarmService) { }

  ngOnInit() {
    this.user = new User();
  }

  private getUser() {
    this.userService
      .getUser(this.user.userId)
      .subscribe(
        (model: ResponseObject<User>) => {
          if (model.total > 0) {
            this.user = model.data;
          } else {
            this.user = new User();
          }
          this.appAlarmService.changeMessage(model.message);
        },
        (err) => {
          console.log(err);
          this.user = new User();
        },
        () => {
          console.log('완료');
        }
      );
  }

  private registerUser() {
    if ( this.isValidPassword !== true ) {
      return;
    }

    this.userService
      .registerUser(this.user)
      .subscribe(
        (model: ResponseObject<User>) => {
          console.log(model);
        },
        (err) => {
          console.log(err);
        },
        () => {
          console.log('완료');
        }
      );
  }

  private deleteUser() {
    this.userService
      .deleteUser(this.user)
      .subscribe(
        (model: ResponseObject<User>) => {
          console.log(model);
        },
        (err) => {
          console.log(err);
        },
        () => {
          console.log('완료');
        }
      );
  }

  private checkUser() {
    this.userService
      .checkUser(this.user.userId)
      .subscribe(
        (model: ResponseObject<User>) => {
          console.log(model);
          this.appAlarmService.changeMessage(model.message);
        },
        (err) => {
          console.log(err);
        },
        () => {
          console.log('완료');
        }
      );
  }

  private validPassword(checkPassword: String) {
    this.user.password === checkPassword ? this.isValidPassword = true : this.isValidPassword = false;
  }

  private checkEmptyPassword() {
    this.user.password === '' ? this.isPasswordEmpty = true : this.isPasswordEmpty = false;
  }

  private checkEmptyPasswordConfirm() {
    this.passwordConfirm === '' ? this.isPasswordConfirmEmpty = true : this.isPasswordConfirmEmpty = false;
  }

}
