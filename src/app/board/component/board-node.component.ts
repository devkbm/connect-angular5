import { Component, Input, Output, EventEmitter } from '@angular/core';
import { BoardHierarchy } from '../model/board-hierarchy';

@Component({
  selector: 'app-board-node',
  templateUrl: './board-node.component.html',
  styles: ['']
})
export class BoardNodeComponent {
  @Input() item: BoardHierarchy;
  @Input() selected: Boolean = false;
  @Output() itemClicked = new EventEmitter();

  itemClick() {
    console.log(this.item);
    this.itemClicked.emit(this.item);
  }
}
