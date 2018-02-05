import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';

import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/do';
import 'rxjs/add/operator/delay';
import 'rxjs/add/observable/throw';

import { ResponseObject } from '../../common-layout/model/response-object';
import { User } from '../model/user-info';
import { UserToken } from '../model/user-token';

@Injectable()
export class LoginService {

  private API_URI = 'http://localhost:8090/user/login';
  private API_URI2 = 'http://localhost:8090/auth/login';

  constructor(private http: HttpClient) {
  }

  /**
   * @description 로그인 한다.
   * @paramTag 사용자 아이디
   * @paramTag 비밀번호
   * @returnType {ResponseObject} 유저정보
   */
  getLogin(id: string, pwd: string): Observable<ResponseObject<User>> {
    const url = `${this.API_URI}?id=${id}&pwd=${pwd}`;
    return this.http.get(url)
      .map((response: Response) => {
        return response;
      })
      .catch((err) => Observable.throw(err));
  }

  /**
   * @description 로그인 한다.
   * @paramTag 아이디
   * @paramTag 비밀번호
   * @returnType {UserToken} Token 정보
   */
  doLogin(id: string, pwd: string): Observable<UserToken> {
    const header = new HttpHeaders().set('Content-Type', 'application/json');
    const body = {username: id, password: pwd};

    return this.http
      .post(this.API_URI, body, {headers: header})
      .map((res: Response) => {
        return res;
      })
      .catch((err) => Observable.throw(err));
  }
}
