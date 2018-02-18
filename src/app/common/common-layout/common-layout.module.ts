import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ClarityModule } from '@clr/angular';

import { CommonLayoutRoutingModule } from './common-layout-routing.module';
import { CommonLayoutComponent } from './common-layout.component';
import { HeaderComponent } from './header/header.component';
import { MainComponent } from './main/main.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { MenuService } from '../common-service/menu.service';


@NgModule({
  imports: [
    CommonModule,
    CommonLayoutRoutingModule,
    ClarityModule
  ],
  declarations: [CommonLayoutComponent, HeaderComponent, MainComponent, SidebarComponent],
  providers: [ MenuService ],
  exports: [CommonLayoutComponent]
})
export class CommonLayoutModule { }
