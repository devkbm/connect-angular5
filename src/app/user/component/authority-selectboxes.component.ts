import { Component, OnInit } from '@angular/core';
import { Authority } from '../model/authority-info';
import { UserService } from '../service/user.service';
import { ResponseList } from '../../common-layout/model/response-list';

@Component({
  selector: 'app-authority-selectboxes',
  templateUrl: './authority-selectboxes.component.html',
  styles: ['']
})
export class AuthoritySelectboxesComponent implements OnInit {

  private authList: Authority[];
  
  constructor(private userService: UserService) { }

  ngOnInit() {
    this.getAuthorityList();
  }

  private getAuthorityList() {
    this.userService
      .getAuthorityList()
      .subscribe(
        (model: ResponseList<Authority>) => {
          if (model.total > 0) {
            this.authList = model.data;
          } 
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
