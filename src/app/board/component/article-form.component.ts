import { Component, OnInit } from '@angular/core';

import { BoardService } from '.././service/board.service';

import { ResponseObject } from '../../common-layout/model/response-object';
import { Article } from '.././model/article';

@Component({
  selector: 'app-article-form',
  templateUrl: './article-form.component.html',
  styles: ['']
})
export class ArticleFormComponent implements OnInit {

  article: Article;

  constructor(private boardService: BoardService) { }

  ngOnInit() {
    this.article = new Article();
  }

  getArticle(id: number) {
    this.boardService.getArticle(this.article.pkArticle)
      .subscribe(
        (model: ResponseObject<Article>) => {
          if (model.data) {
            this.article = model.data;
          } else {
            this.article = new Article();
          }
        },
        (err) => {},
        () => {}
    );
  }

  private saveBoard(f) {

    this.boardService
      .saveArticle(this.article)
      .subscribe(
        (model: ResponseObject<Article>) => {
          console.log(model);
        },
        (err) => {
          console.log(err);
        },
        () => {
          console.log('완료');
        }
      );
  }

}
