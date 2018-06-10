import { Component, OnInit, Output, EventEmitter } from '@angular/core';

import { BoardService } from '.././service/board.service';

import { ResponseList } from '../../common/common-service/model/response-list';
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

  private gridApi;
  private gridColumnApi;

  columnDefs = [
    {headerName: '게시판키',   field: 'pkBoard',    hide: true},
    {headerName: '게시판명',   field: 'boardName',  width: 500},
    {headerName: '타입',       field: 'boardName',  width: 100},
    {headerName: '시작일자',   field: 'fromDt',     width: 100},
    {headerName: '종료일자',   field: 'toDt',       width: 100}
  ];

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

  onGridReady(params) {
    this.gridApi = params.api;
    this.gridColumnApi = params.columnApi;
  }

  onSelectionChanged() {
    const selectedRows = this.gridApi.getSelectedRows();

    this.onSelectedItem.emit(selectedRows[0].pkBoard);

    /*selectedRows.forEach(function(selectedRow, index) {

      this.onSelectedItem.emit(selectedRow.pkBoard);
    });*/

  }

}
