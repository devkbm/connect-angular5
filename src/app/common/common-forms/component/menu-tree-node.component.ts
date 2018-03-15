import { Component, Input } from '@angular/core';
import { MenuHierarchy } from '../../common-service/menu-hierarchy';

@Component({
  selector: 'app-menu-tree-node',
  templateUrl: './menu-tree-node.component.html',
  styles: ['']
})
export class MenuTreeNodeComponent {
  @Input() item: MenuHierarchy;
  @Input() selected: Boolean = false;
}
