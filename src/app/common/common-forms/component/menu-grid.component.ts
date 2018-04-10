import { Component, OnInit, Input } from '@angular/core';

import { MenuService } from '../../common-service/menu.service';
import { ResponseList } from '../../../common/common-service/model/response-list';
import { MenuGroup } from '../../common-service/menu-group';
import { Menu } from '../../common-service/menu';

@Component({
  selector: 'app-menu-grid',
  templateUrl: './menu-grid.component.html',
  styles: ['']
})
export class MenuGridComponent implements OnInit {

  @Input() menuGroupCode: string;
  searchProgramCode: string;
  menuList: Menu[];
  selectedMenu: Menu;

  constructor(private menuService: MenuService) { }

  ngOnInit() {
  }

  getMenuList() {
    
    this.menuService.getMenuList(this.menuGroupCode)
      .subscribe(
        (model: ResponseList<Menu>) => {
          if (model.data) {
            this.menuList = model.data;
          }
        },
        (err) => {},
        () => {}
    );
  }

}
