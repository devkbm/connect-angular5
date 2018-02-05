import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-board',
  templateUrl: './board.component.html',
  styleUrls: ['./board.component.css']
})
export class BoardComponent implements OnInit {
  fkBoard: string;

  constructor() { }

  ngOnInit() {
    this.fkBoard = '19';
  }

  selectArticle(article, fkBoard) {
    this.fkBoard = fkBoard;
    article.getArticleList(fkBoard);
  }

}
