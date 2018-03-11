import { Component, Input, OnInit } from '@angular/core';
import { MenuService } from '../../common-service/menu.service';
import { AppAlarmService } from '../../common-service/app-alarm.service';
import { MenuGroup } from '../../common-service/menu-group';
import { ResponseObject } from '../../common-service/model/response-object';
import { Menu } from '../../common-service/menu';
import { MenuHierarchy } from '../../common-service/menu-hierarchy';

@Component({
  selector: 'app-menu-tree',
  templateUrl: './menu-tree.component.html',
  styles: ['']
})
export class MenuTreeComponent implements OnInit {

  @Input() menuGroupCode: String;
  item: MenuHierarchy;

  constructor(private menuService: MenuService,
              private appAlarmService: AppAlarmService) { }

  ngOnInit() {
    this.item = new MenuHierarchy();
    console.log('MenuTreeComponent init');
  }

  private getMenu() {
    this.menuService
      .getMenuHierarchy(this.menuGroupCode)
      .subscribe(
        (model: ResponseObject<MenuHierarchy>) => {
          console.log(model);
          if ( model.total > 0 ) {
            this.item = model.data;
          } else {
            this.item = new MenuHierarchy();
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

  private onValueChange(value) {
    console.log(value);
  }

}
