import { Component, OnInit, Input } from '@angular/core';

import { MenuService } from '../../common-service/menu.service';
import { ResponseList } from '../../../common/common-service/model/response-list';
import { MenuGroup } from '../../common-service/menu-group';


@Component({
  selector: 'app-menu-group-grid',
  templateUrl: './menu-group-grid.component.html',
  styles: ['']
})
export class MenuGroupGridComponent implements OnInit {

  searchProgramCode: string;
  menuGroupList: MenuGroup[];
  selectedMenuGroup: MenuGroup;

  constructor(private menuService: MenuService) { }

  ngOnInit() {
  }

  getMenuGroupList() {
    this.menuService.getMenuGroupList()
      .subscribe(
        (model: ResponseList<MenuGroup>) => {
          if (model.data) {
            this.menuGroupList = model.data;
          }
        },
        (err) => {},
        () => {}
    );
  }

}
