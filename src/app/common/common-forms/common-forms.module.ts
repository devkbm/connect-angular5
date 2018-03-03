import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ClarityModule } from '@clr/angular';
import { NgSelectModule } from '@ng-select/ng-select';

import { CfInputComponent } from './fields/cf-input.component';
import { CfInputPasswordComponent } from './fields/cf-input-password.component';
import { MenuGroupFormComponent } from './menu-group-form.component';
import { MenuFormComponent } from './menu-form.component';
import { ProgramFormComponent } from './program-form.component';
import { ProgramSelectboxesComponent } from './program-selectboxes.component';
import { ProgramGridComponent } from './program-grid.component';


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
