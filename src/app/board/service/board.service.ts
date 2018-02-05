import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/do';
import 'rxjs/add/operator/delay';
import 'rxjs/add/observable/throw';

import { ResponseObject } from '../../common-layout/model/response-object';
import { ResponseList } from '../../common-layout/model/response-list';
import { Board } from '../model/board';
import { Article } from '../model/article';
import { HttpHeaders } from '@angular/common/http';

@Injectable()
export class BoardService {

    private API_URI = 'http://localhost:8090/grw';    

    constructor(private http: HttpClient) { }

    getHttpHeaders(): HttpHeaders {
        return new HttpHeaders().set('x-auth-token', sessionStorage.getItem('token'));
    }

    getBoardList(): Observable<ResponseList<Board>> {
        const url = `${this.API_URI}/boards`;
        return this.http.get(url, {headers: this.getHttpHeaders()})
            .map((response: Response) => {
                return response;
            })
            .catch((err) => Observable.throw(err));
    }

    getBoard(id: number): Observable<ResponseObject<Board>> {
        const url = `${this.API_URI}/boards/${id}`;
        console.log(this.getHttpHeaders());
        return this.http.get(url, {headers: this.getHttpHeaders()})
            .map((response: Response) => {
                return response;
            })
            .catch((err) => Observable.throw(err));
    }

    saveBoard(board: Board): Observable<ResponseObject<Board>> {
        const url = `${this.API_URI}/boards/${board.pkBoard}`;

        return this.http
            .post(url, board, {headers: this.getHttpHeaders()})
            .map((res: Response) => {
                return res;
            })
            .catch((err) => Observable.throw(err));
    }

    deleteBoard(board: Board): Observable<ResponseObject<Board>> {
        const url = `${this.API_URI}/boards/${board.pkBoard}`;

        return this.http
            .delete(url, {headers: this.getHttpHeaders()})
            .map((res: Response) => {
                return res;
            })
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

        return this.http.get(url, {headers: this.getHttpHeaders()})
            .map((response: Response) => {
                return response;
            })
            .catch((err) => Observable.throw(err));
    }

    getArticle(id: number): Observable<ResponseObject<Article>> {
        const url = `${this.API_URI}/boards/articles/${id}`;
        return this.http.get(url, {headers: this.getHttpHeaders()})
            .map((response: Response) => {
                return response;
            })
            .catch((err) => Observable.throw(err));
    }

    saveArticle(article: Article): Observable<ResponseObject<Article>> {
        const url = `${this.API_URI}/boards/articles/${article.pkArticle}`;

        return this.http
            .post(url, article, {headers: this.getHttpHeaders()})
            .map((res: Response) => {
                return res;
            })
            .catch((err) => Observable.throw(err));
    }

}
