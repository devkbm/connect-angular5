import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/do';
import 'rxjs/add/operator/delay';
import 'rxjs/add/observable/throw';

import { ResponseObject } from '../../common-layout/model/response-object';
import { ResponseList } from '../../common-layout/model/response-list';
import { User } from '../model/user-info';
import { Authority } from '../model/authority-info';

@Injectable()
export class UserService {

  private API_URI = 'http://localhost:8090/user';

  private API_URI2 = 'http://localhost:8090/authority';

  constructor(private http: HttpClient) { }

  getHttpHeaders(): HttpHeaders {
    return new HttpHeaders().set('x-auth-token', sessionStorage.getItem('token'));
  }

  checkUser(id: string): Observable<ResponseObject<User>> {
    const url = `${this.API_URI}/${id}/check`;
    return this.http.get(url, {headers: this.getHttpHeaders()})
      .map((response: Response) => {
        return response;
      })
      .catch((err) => Observable.throw(err));
  }

  getUser(id: string): Observable<ResponseObject<User>> {
    const url = `${this.API_URI}/${id}`;
    return this.http.get(url, {headers: this.getHttpHeaders()})
      .map((response: Response) => {
        return response;
      })
      .catch((err) => Observable.throw(err));
  }

  getUserList(): Observable<ResponseList<User>> {
    const url = `${this.API_URI}`;
    return this.http.get(url, {headers: this.getHttpHeaders()})
      .map((response: Response) => {
        return response;
      })
      .catch((err) => Observable.throw(err));
  }

  registerUser(user: User): Observable<ResponseObject<User>> {
    return this.http
      .post(this.API_URI + '/' + user.userId, user, {headers: this.getHttpHeaders()})
      .map((res: Response) => {
        return res;
      })
      .catch((err) => Observable.throw(err));
  }

  deleteUser(user: User): Observable<ResponseObject<User>> {
    return this.http
    .delete(this.API_URI + '/' + user.userId, {headers: this.getHttpHeaders()})
    .map((res: Response) => {
      return res;
    })
    .catch((err) => Observable.throw(err));
  }

  initializePassword(user: User): Observable<ResponseObject<String>> {
    return this.http
      .post(this.API_URI+ '/' + user.userId + '/initPassword', user, {headers: this.getHttpHeaders()})
      .map((res: Response) => {
        return res;
      })
      .catch((err) => Observable.throw(err));
  }

  getAuthorityList(): Observable<ResponseList<Authority>> {
    const url = `${this.API_URI2}`;
    return this.http.get(url, {headers: this.getHttpHeaders()})
      .map((response: Response) => {
        return response;
      })
      .catch((err) => Observable.throw(err));
  }

  getAuthority(id: string): Observable<ResponseObject<Authority>> {
    const url = `${this.API_URI2}/${id}`;
    return this.http.get(url, {headers: this.getHttpHeaders()})
      .map((response: Response) => {
        return response;
      })
      .catch((err) => Observable.throw(err));
  }

  registerAuthority(authority: Authority): Observable<ResponseObject<Authority>> {
    return this.http
      .post(this.API_URI2, authority, {headers: this.getHttpHeaders()})
      .map((res: Response) => {
        return res;
      })
      .catch((err) => Observable.throw(err));
  }
}
