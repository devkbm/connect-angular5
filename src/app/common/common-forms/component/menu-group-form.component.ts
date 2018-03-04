import { Component, OnInit } from '@angular/core';
import { MenuService } from '../../common-service/menu.service';
import { AppAlarmService } from '../../common-service/app-alarm.service';
import { MenuGroup } from '../../common-service/menu-group';
import { ResponseObject } from '../../common-service/model/response-object';

@Component({
  selector: 'app-menu-group-form',
  templateUrl: './menu-group-form.component.html',
  styles: ['']
})
export class MenuGroupFormComponent implements OnInit {

  menuGroup: MenuGroup;

  constructor(private menuService: MenuService,
              private appAlarmService: AppAlarmService) { }

  ngOnInit() {
    this.menuGroup = new MenuGroup();
  }

  private getMenuGroup(menuGroupCode: string) {
    this.menuService
      .getMenuGroup(menuGroupCode)
      .subscribe(
        (model: ResponseObject<MenuGroup>) => {
          if ( model.total > 0 ) {
            this.menuGroup = model.data;
          } else {
            this.menuGroup = new MenuGroup();
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

  private submitMenuGroup() {
    this.menuService
      .registerMenuGroup(this.menuGroup)
      .subscribe(
        (model: ResponseObject<MenuGroup>) => {
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

  private onValueChange(value) {
    console.log(value);
  }

}
