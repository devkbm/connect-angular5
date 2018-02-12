import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';

import { Observable } from 'rxjs/Observable';

import { DataService } from '../../common/common-service/data.service';
import { ResponseObject } from '../../common/common-service/model/response-object';
import { ResponseList } from '../../common/common-service/model/response-list';

import { User } from '../model/user-info';
import { UserToken } from '../model/user-token';

@Injectable()
export class LoginService extends DataService {

  constructor(http: HttpClient) {
    super('http://localhost:8090/user/login', http);
  }

  /**
   * @description 로그인 한다.
   * @paramTag 아이디
   * @paramTag 비밀번호
   * @returnType {UserToken} Token 정보
   */
  doLogin(id: string, pwd: string): Observable<UserToken> {    
    const body = {username: id, password: pwd};

    return this.http
      .post(this.API_URI, body, {headers: this.getHttpHeaders()})
      .map(this.responseMap)
      .catch((err) => Observable.throw(err));
  }
}
