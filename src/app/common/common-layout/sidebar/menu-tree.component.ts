import { Component, Input, OnInit } from '@angular/core';
import { MenuService } from '../../common-service/menu.service';
import { AppAlarmService } from '../../common-service/app-alarm.service';
import { MenuGroup } from '../../common-service/menu-group';
import { ResponseObject } from '../../common-service/model/response-object';
import { Menu } from '../../common-service/menu';
import { MenuHierarchy } from '../../common-service/menu-hierarchy';
import { ResponseList } from '../../common-service/model/response-list';

@Component({
  selector: 'app-menu-tree',
  templateUrl: './menu-tree.component.html',
  styles: ['']
})
export class MenuTreeComponent implements OnInit {

  @Input() menuGroupCode: String;
  items: MenuHierarchy[];

  constructor(private menuService: MenuService,
              private appAlarmService: AppAlarmService) { }

  ngOnInit() {
    // this.items = new MenuHierarchy()[];
    this.menuGroupCode = 'GROUP';
    console.log('MenuTreeComponent init');
  }

  private getMenu() {
    this.menuService
      .getMenuHierarchy(this.menuGroupCode)
      .subscribe(
        (model: ResponseList<MenuHierarchy>) => {
          console.log(model);
          if ( model.total > 0 ) {
            this.items = model.data;
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
