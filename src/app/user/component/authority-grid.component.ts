import { Component, OnInit, Input } from '@angular/core';

import { UserService } from '.././service/user.service';

import { ResponseList } from '../../common-layout/model/response-list';
import { Authority } from '../model/authority-info';

@Component({
  selector: 'app-authority-grid',
  templateUrl: './authority-grid.component.html',
  styles: ['']
})
export class AuthorityGridComponent implements OnInit {

  searchTitle: string;
  authorityList: Authority[];

  constructor(private userService: UserService) { }

  ngOnInit() {
  }

  getAuthorityList() {
    this.userService.getAuthorityList()
      .subscribe(
        (model: ResponseList<Authority>) => {
          if (model.data) {
            this.authorityList = model.data;
          }
        },
        (err) => {},
        () => {}
    );
  }

}
