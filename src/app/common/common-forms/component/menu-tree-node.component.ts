import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-menu-tree-node',
  templateUrl: './menu-tree-node.component.html',
  styles: ['']
})
export class MenuTreeNodeComponent {
  @Input() item: any;
  @Input() selected: Boolean = false;
}
