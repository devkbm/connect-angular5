import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ClarityModule } from '@clr/angular';

import { CommonLayoutRoutingModule } from './common-layout-routing.module';
import { CommonLayoutComponent } from './common-layout.component';
import { HeaderComponent } from './header/header.component';
import { MainComponent } from './main/main.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { MenuService } from '../common-service/menu.service';
import { ProgramService } from '../common-service/program.service';
import { MenuTreeComponent } from './sidebar/menu-tree.component';
import { MenuTreeNodeComponent } from './sidebar/menu-tree-node.component';

@NgModule({
  imports: [
    CommonModule,
    CommonLayoutRoutingModule,
    ClarityModule
  ],
  declarations: [
    CommonLayoutComponent,
    HeaderComponent,
    MainComponent,
    SidebarComponent,
    MenuTreeComponent,
    MenuTreeNodeComponent
  ],
  providers: [
    MenuService,
    ProgramService
  ],
  exports: [CommonLayoutComponent]
})
export class CommonLayoutModule { }
