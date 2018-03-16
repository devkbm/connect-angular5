import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ClarityModule } from '@clr/angular';
import { NgSelectModule } from '@ng-select/ng-select';

import { CfInputComponent } from './fields/cf-input.component';
import { CfInputPasswordComponent } from './fields/cf-input-password.component';

import { MenuGroupFormComponent } from './component/menu-group-form.component';
import { MenuFormComponent } from './component/menu-form.component';
import { ProgramFormComponent } from './component/program-form.component';
import { ProgramSelectboxesComponent } from './component/program-selectboxes.component';
import { ProgramGridComponent } from './component/program-grid.component';
import { MenuGroupGridComponent } from './component/menu-group-grid.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    NgSelectModule,
    ClarityModule
  ],
  declarations: [
    CfInputComponent,
    CfInputPasswordComponent,
    MenuGroupFormComponent,
    MenuGroupGridComponent,
    MenuFormComponent,
    ProgramFormComponent,
    ProgramSelectboxesComponent,
    ProgramGridComponent
],
  exports: [
    CfInputComponent,
    CfInputPasswordComponent
  ]
})
export class CommonFormsModule { }
