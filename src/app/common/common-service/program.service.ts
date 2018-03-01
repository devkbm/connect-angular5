import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import { Observable } from 'rxjs/Observable';

import { DataService } from '../../common/common-service/data.service';
import { ResponseObject } from '../../common/common-service/model/response-object';
import { ResponseList } from '../../common/common-service/model/response-list';

import { Program } from './Program';

@Injectable()
export class ProgramService extends DataService {

  constructor(http: HttpClient) {
    super('http://localhost:8090/program', http);
  }

  getProgramList(): Observable<ResponseList<Program>> {
    const url = `${this.API_URI}`;
    return this.http.get(url, {headers: this.getAuthorizedHttpHeaders()})
      .catch((err) => Observable.throw(err));
  }

  getProgram(id: string): Observable<ResponseObject<Program>> {
    const url = `${this.API_URI}/${id}`;
    return this.http.get(url, {headers: this.getAuthorizedHttpHeaders()})
      .catch((err) => Observable.throw(err));
  }

  registerProgram(program: Program): Observable<ResponseObject<Program>> {
    const url = `${this.API_URI}/${program.programCode}`;
    return this.http
      .post(url, program, {headers: this.getAuthorizedHttpHeaders()})
      .catch((err) => Observable.throw(err));
  }

}
