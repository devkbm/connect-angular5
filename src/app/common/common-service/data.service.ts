import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';

import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/do';
import 'rxjs/add/operator/delay';
import 'rxjs/add/observable/throw';

@Injectable()
export class DataService {    

    protected responseMap =  (res: Response) => { return res; };
      
    constructor(protected API_URI: string, protected http: HttpClient) { }

    /**
     * @description HttpHeaders를 가져온다.
     * @returnType {HttpHeaders} 
     */
    protected getHttpHeaders(): HttpHeaders {
        return new HttpHeaders().set('Content-Type', 'application/json');
    }

    /**
     * @description 로그인 후 인증된 HttpHeaders를 가져온다.
     * @returnType {HttpHeaders} 
     */
    protected getAuthorizedHttpHeaders(): HttpHeaders {        
        return new HttpHeaders()
            .set('Content-Type', 'application/json')
            .set('x-auth-token', sessionStorage.getItem('token'));
    }
}