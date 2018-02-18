import { Component, OnInit } from '@angular/core';
import { AppAlarmService } from '../../common-service/app-alarm.service';
import { MenuService } from '../../common-service/menu.service';
import { MenuGroup } from '../../common-service/menu-group';
import { ResponseObject } from '../../common-service/model/response-object';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  title = 'Connect';

  menuGroupList: MenuGroup[];

  constructor(private menuService: MenuService,
              private appAlarmService: AppAlarmService) { }

  ngOnInit() {
    const stringMenuGroupList = sessionStorage.getItem('menuGroupList');
    this.menuGroupList = JSON.parse(stringMenuGroupList);
    console.log(this.menuGroupList);
  }

  private getMenuGroup(menuGroupCode: string) {
    this.menuService
      .getMenuGroup(menuGroupCode)
      .subscribe(
        (model: ResponseObject<MenuGroup>) => {
          if ( model.total > 0 ) {

          } else {

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
