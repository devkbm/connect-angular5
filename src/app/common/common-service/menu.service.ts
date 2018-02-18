import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import { Observable } from 'rxjs/Observable';

import { DataService } from '../../common/common-service/data.service';
import { ResponseObject } from '../../common/common-service/model/response-object';
import { ResponseList } from '../../common/common-service/model/response-list';

import { MenuGroup } from './menu-group';
import { Menu } from './menu';

@Injectable()
export class MenuService extends DataService {

  constructor(http: HttpClient) {
    super('http://localhost:8090/menugroup', http);
  }

  getMenuGroupList(): Observable<ResponseList<MenuGroup>> {
    const url = `${this.API_URI}`;
    return this.http.get(url, {headers: this.getAuthorizedHttpHeaders()})
      .catch((err) => Observable.throw(err));
  }

  getMenuGroup(id: string): Observable<ResponseObject<MenuGroup>> {
    const url = `${this.API_URI}/${id}`;
    return this.http.get(url, {headers: this.getAuthorizedHttpHeaders()})
      .catch((err) => Observable.throw(err));
  }

  registerMenuGroup(menuGroup: MenuGroup): Observable<ResponseObject<MenuGroup>> {
    return this.http
      .post(this.API_URI + '/' + menuGroup.menuGroupCode, menuGroup, {headers: this.getAuthorizedHttpHeaders()})
      .catch((err) => Observable.throw(err));
  }

  getMenu(menu: Menu): Observable<ResponseObject<Menu>> {
    const url = `${this.API_URI}/${menu.menuGroupCode}/menu/${menu.menuCode}`;
    return this.http.get(url, {headers: this.getAuthorizedHttpHeaders()})
      .catch((err) => Observable.throw(err));
  }

  registerMenu(menu: Menu): Observable<ResponseObject<Menu>> {
    const url = `${this.API_URI}/${menu.menuGroupCode}/menu/${menu.menuCode}`;
    return this.http
      .post(url, menu, {headers: this.getAuthorizedHttpHeaders()})
      .catch((err) => Observable.throw(err));
  }

}
