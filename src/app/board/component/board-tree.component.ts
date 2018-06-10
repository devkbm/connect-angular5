import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { BoardService } from '../service/board.service';
import { ResponseList } from '../../common/common-service/model/response-list';
import { BoardHierarchy } from '../model/board-hierarchy';

@Component({
  selector: 'app-board-tree',
  templateUrl: './board-tree.component.html',
  styles: ['']
})
export class BoardTreeComponent implements OnInit {

  items: BoardHierarchy[];

  @Output() itemClicked = new EventEmitter();

  constructor(private boardService: BoardService) { }

  ngOnInit() {
    console.log('BoardTreeComponent init');
  }

  getboardHierarchy() {
    this.boardService
      .getBoardHierarchy()
      .subscribe(
        (model: ResponseList<BoardHierarchy>) => {
            if ( model.total > 0 ) {
              this.items = model.data;
            } else {
              this.items = null;
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

  selectItem(value) {
    this.itemClicked.emit(value.pkBoard);
  }

}
