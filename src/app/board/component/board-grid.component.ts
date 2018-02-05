import { Component, OnInit, Output, EventEmitter } from '@angular/core';

import { BoardService } from '.././service/board.service';

import { ResponseList } from '../../common-layout/model/response-list';
import { Board } from '.././model/board';

@Component({
  selector: 'app-board-grid',
  templateUrl: './board-grid.component.html',
  styles: ['']
})
export class BoardGridComponent implements OnInit {

  @Output()
  onSelectedItem = new EventEmitter();

  boardList: Board[];

  constructor(private boardService: BoardService) { }

  ngOnInit() { }

  getBoardList() {
    this.boardService.getBoardList()
      .subscribe(
        (model: ResponseList<Board>) => {
          if (model.data) {
            this.boardList = model.data;
          }
        },
        (err) => {},
        () => {}
    );
  }

  selectedChanged(event) {
    console.log(event);
    this.onSelectedItem.emit(event.pkBoard);
  }

}
