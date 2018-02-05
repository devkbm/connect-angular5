import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CommonLayoutComponent } from './common-layout.component';
import { TestComponent } from '../test/test/test.component';
import { Test2Component } from '../test/test2/test2.component';
import { UserFormComponent } from '../user/component/user-form.component';
import { UserGridComponent } from '../user/component/user-grid.component';
import { BoardFormComponent } from '../board/component/board-form.component';
import { BoardGridComponent } from '../board/component/board-grid.component';
import { BoardTreeComponent } from '../board/component/board-tree.component';
import { ArticleGridComponent } from '../board/component/article-grid.component';
import { BoardComponent } from '../board/component/board.component';
import { ArticleFormComponent } from '../board/component/article-form.component';
import { AuthorityGridComponent } from '../user/component/authority-grid.component';
import { AuthorityFormComponent } from '../user/component/authority-form.component';

const layoutroutes: Routes = [
  {
    path: 'home', component: CommonLayoutComponent,
    children: [
      {path: 'test',        component: TestComponent},
      {path: 'test2',       component: Test2Component},
      {path: 'regform',     component: UserFormComponent},
      {path: 'userList',    component: UserGridComponent},
      {path: 'authList',    component: AuthorityGridComponent},
      {path: 'authForm',    component: AuthorityFormComponent},
      {path: 'board',       component: BoardComponent},
      {path: 'boardForm',   component: BoardFormComponent},
      {path: 'boardTree',   component: BoardTreeComponent},
      {path: 'boardList',   component: BoardGridComponent},
      {path: 'articleList', component: ArticleGridComponent},
      {path: 'articleForm', component: ArticleFormComponent}
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(layoutroutes)],
  exports: [RouterModule]
})
export class CommonLayoutRoutingModule { }
