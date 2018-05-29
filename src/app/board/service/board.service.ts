import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { Observable } from 'rxjs/Observable';

import { DataService } from '../../common/common-service/data.service';
import { ResponseObject } from '../../common/common-service/model/response-object';
import { ResponseList } from '../../common/common-service/model/response-list';

import { Board } from '../model/board';
import { Article } from '../model/article';
import { HttpHeaders } from '@angular/common/http';
import { DomSanitizer } from '@angular/platform-browser';

@Injectable()
export class BoardService extends DataService {

    constructor(http: HttpClient, private sanitizer: DomSanitizer) {
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
        const url = `${this.API_URI}/boards/articles`;

        let formData = new FormData();

        formData.append('pkArticle',    article.pkArticle.toString());
        formData.append('fkBoard',      article.fkBoard.toString());
        formData.append('ppkArticle',   article.ppkArticle.toString());
        formData.append('title',        article.title);
        formData.append('contents',     article.contents);
        formData.append('pwd',          article.pwd);
        formData.append('hitCnt',       article.hitCnt);
        formData.append('fromdDt',      article.fromdDt);
        formData.append('toDt',         article.toDt);
        formData.append('seq',          article.seq.toString());
        formData.append('depth',        article.depth.toString());
        formData.append('file',         article.file, article.file.name);

        console.log(formData);

        return this.http
            .post(url, formData, {headers: this.getAuthorizedMultiPartHeaders()})
            .map(this.responseMap)
            .catch((err) => Observable.throw(err));
    }

    downloadFile(fileId: string) {
        const url = `http://localhost:8090/file/${fileId}`;

        this.http.get(url, {headers: this.getAuthorizedHttpHeaders()})
        .subscribe(
            (model: ResponseObject<any>) => {
                console.log(model);

                const blob = new Blob([model.data], { type: 'application/octet-stream' });

                this.sanitizer.bypassSecurityTrustResourceUrl(window.URL.createObjectURL(blob));
              },
              (err) => {
                console.log(err);
              },
              () => {
                console.log('완료');
              }
            );

            /**
             // https://stackblitz.com/edit/angular-blob-file-download?file=app%2Fapp.component.ts
             constructor(private sanitizer: DomSanitizer) {  }
                ngOnInit() {
                    const data = 'some text';
                    const blob = new Blob([data], { type: 'application/octet-stream' });

                    this.fileUrl = this.sanitizer.bypassSecurityTrustResourceUrl(window.URL.createObjectURL(blob));
                }
             */
    }

}
