import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import { Observable } from 'rxjs/Observable';

import { DataService } from '../../common/common-service/data.service';
import { ResponseObject } from '../../common/common-service/model/response-object';
import { ResponseList } from '../../common/common-service/model/response-list';

import { User } from '../model/user-info';
import { Authority } from '../model/authority-info';
import { UserNotFoundError } from '../error/user-not-found-error';

@Injectable()
export class UserService extends DataService {

  private API_URI2 = 'http://localhost:8090/authority';

  constructor(http: HttpClient) {
    super('http://localhost:8090/user', http);
  }

  checkUser(id: string): Observable<ResponseObject<User>> {
    const url = `${this.API_URI}/${id}/check`;
    return this.http.get(url, {headers: this.getAuthorizedHttpHeaders()})
      .catch((err) => Observable.throw(new UserNotFoundError(err)));
  }

  getUser(id: string): Observable<ResponseObject<User>> {
    const url = `${this.API_URI}/${id}`;
    return this.http.get(url, {headers: this.getAuthorizedHttpHeaders()})
      .catch((err) => Observable.throw(err));
  }

  getUserList(): Observable<ResponseList<User>> {
    const url = `${this.API_URI}`;
    return this.http.get(url, {headers: this.getAuthorizedHttpHeaders()})
      // .map(this.responseMap)
      .catch((err) => Observable.throw(err));
  }

  registerUser(user: User): Observable<ResponseObject<User>> {
    return this.http
      .post(this.API_URI + '/' + user.userId, user, {headers: this.getAuthorizedHttpHeaders()})
      .catch((err) => Observable.throw(err));
  }

  deleteUser(user: User): Observable<ResponseObject<User>> {
    return this.http
    .delete(this.API_URI + '/' + user.userId, {headers: this.getAuthorizedHttpHeaders()})
    .catch((err) => Observable.throw(err));
  }

  initializePassword(user: User): Observable<ResponseObject<String>> {
    return this.http
      .post(this.API_URI + '/' + user.userId + '/initPassword', user, {headers: this.getAuthorizedHttpHeaders()})
      .catch((err) => Observable.throw(err));
  }

  getAuthorityList(): Observable<ResponseList<Authority>> {
    const url = `${this.API_URI2}`;
    return this.http.get(url, {headers: this.getAuthorizedHttpHeaders()})
      .catch((err) => Observable.throw(err));
  }

  getAuthority(id: string): Observable<ResponseObject<Authority>> {
    const url = `${this.API_URI2}/${id}`;
    return this.http.get(url, {headers: this.getAuthorizedHttpHeaders()})
      .catch((err) => Observable.throw(err));
  }

  registerAuthority(authority: Authority): Observable<ResponseObject<Authority>> {
    return this.http
      .post(this.API_URI2, authority, {headers: this.getAuthorizedHttpHeaders()})
      .catch((err) => Observable.throw(err));
  }
}
