import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { Observable } from 'rxjs/Observable';

import { DataService } from '../../common/common-service/data.service';
import { ResponseObject } from '../../common/common-service/model/response-object';
import { ResponseList } from '../../common/common-service/model/response-list';

import { Board } from '../model/board';
import { Article } from '../model/article';
import { HttpHeaders } from '@angular/common/http';

@Injectable()
export class BoardService extends DataService {

    constructor(http: HttpClient) {
        super('http://localhost:8090/grw', http);
    }
    
    getBoardList(): Observable<ResponseList<Board>> {
        const url = `${this.API_URI}/boards`;
        return this.http.get(url, {headers: this.getAuthorizedHttpHeaders()})
            .map(this.responseMap)
            .catch((err) => Observable.throw(err));
    }

    getBoard(id: number): Observable<ResponseObject<Board>> {
        const url = `${this.API_URI}/boards/${id}`;
        console.log(this.getHttpHeaders());
        return this.http.get(url, {headers: this.getAuthorizedHttpHeaders()})
            .map(this.responseMap)
            .catch((err) => Observable.throw(err));
    }

    saveBoard(board: Board): Observable<ResponseObject<Board>> {
        const url = `${this.API_URI}/boards/${board.pkBoard}`;

        return this.http
            .post(url, board, {headers: this.getAuthorizedHttpHeaders()})
            .map(this.responseMap)
            .catch((err) => Observable.throw(err));
    }

    deleteBoard(board: Board): Observable<ResponseObject<Board>> {
        const url = `${this.API_URI}/boards/${board.pkBoard}`;

        return this.http
            .delete(url, {headers: this.getAuthorizedHttpHeaders()})
            .map(this.responseMap)
            .catch((err) => Observable.throw(err));
    }

    getArticleList(fkBoard: string, title?: string, contents?: string): Observable<ResponseList<Article>> {
        let url = `${this.API_URI}/boards/${fkBoard}/articles`;

        if ( title !== undefined ) {
            url = url + '&title=' + title;
        }

        if ( contents !== undefined ) {
            url = url + '&contents=' + contents;
        }

        return this.http.get(url, {headers: this.getAuthorizedHttpHeaders()})
            .map(this.responseMap)
            .catch((err) => Observable.throw(err));
    }

    getArticle(id: number): Observable<ResponseObject<Article>> {
        const url = `${this.API_URI}/boards/articles/${id}`;
        return this.http.get(url, {headers: this.getAuthorizedHttpHeaders()})
            .map(this.responseMap)
            .catch((err) => Observable.throw(err));
    }

    saveArticle(article: Article): Observable<ResponseObject<Article>> {
        const url = `${this.API_URI}/boards/articles/${article.pkArticle}`;

        return this.http
            .post(url, article, {headers: this.getAuthorizedHttpHeaders()})
            .map(this.responseMap)
            .catch((err) => Observable.throw(err));
    }

}
