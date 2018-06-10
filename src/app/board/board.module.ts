import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ClarityModule } from '@clr/angular';
import { AgGridModule } from 'ag-grid-angular';

import { BoardService } from './service/board.service';

import { BoardFormComponent } from './component/board-form.component';
import { BoardGridComponent } from './component/board-grid.component';

import { ArticleGridComponent } from './component/article-grid.component';
import { ArticleFormComponent } from './component/article-form.component';
import { BoardComponent } from './component/board.component';
import { BoardTreeComponent } from './component/board-tree.component';
import { BoardNodeComponent } from './component/board-node.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ClarityModule,
    AgGridModule.withComponents([])
  ],
  declarations: [
    BoardTreeComponent,
    BoardNodeComponent,
    BoardFormComponent,
    BoardGridComponent,
    ArticleGridComponent,
    ArticleFormComponent,
    BoardComponent
  ],
  providers: [
    BoardService
  ],
  exports: [
    BoardFormComponent
  ]
})
export class BoardModule { }
