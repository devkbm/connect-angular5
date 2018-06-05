import { Component, OnInit, Input } from '@angular/core';

import { BoardService } from '.././service/board.service';

import { ResponseList } from '../../common/common-service/model/response-list';
import { Article } from '.././model/article';

@Component({
  selector: 'app-article-grid',
  templateUrl: './article-grid.component.html',
  styles: ['']
})
export class ArticleGridComponent implements OnInit {

  @Input()
  fkBoardInput: string;

  searchTitle: string;

  articleList: Article[];

  columnDefs = [
    {headerName: '키값',       field: 'pkArticle',  hide: true},
    {headerName: '게시글',     field: 'title'},
    {headerName: '시작일자',   field: 'fromDt',     width: 100},
    {headerName: '종료일자',   field: 'toDt',       width: 100}
  ];

  constructor(private boardService: BoardService) { }

  ngOnInit() {
  }

  getArticleList(fkBoard: string) {
    this.boardService.getArticleList(fkBoard)
      .subscribe(
        (model: ResponseList<Article>) => {
          if (model.data) {
            this.articleList = model.data;
          }
        },
        (err) => {},
        () => {}
    );
  }

}
