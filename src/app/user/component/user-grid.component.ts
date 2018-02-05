import { Component, OnInit, Input } from '@angular/core';

import { UserService } from '.././service/user.service';

import { ResponseList } from '../../common-layout/model/response-list';
import { User } from '.././model/user-info';
import { ResponseObject } from '../../common-layout/model/response-object';

@Component({
  selector: 'app-user-grid',
  templateUrl: './user-grid.component.html',
  styles: ['']
})
export class UserGridComponent implements OnInit {

  searchTitle: string;
  userList: User[];

  constructor(private userService: UserService) { }

  ngOnInit() {
  }

  getArticleList() {
    this.userService.getUserList()
      .subscribe(
        (model: ResponseList<User>) => {
          if (model.data) {
            this.userList = model.data;
          }
        },
        (err) => {},
        () => {}
    );
  }

  private initPassword(user : User) {
    this.userService
      .initializePassword(user)
      .subscribe(
        (model: ResponseObject<String>) => {
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

}
