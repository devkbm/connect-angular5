import { Component, OnInit, Input } from '@angular/core';

import { BoardService } from '.././service/board.service';

import { ResponseList } from '../../common-layout/model/response-list';
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
