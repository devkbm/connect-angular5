import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { CfInputComponent } from './fields/cf-input.component';
import { CfInputPasswordComponent } from './fields/cf-input-password.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule
  ],
  declarations: [
    CfInputComponent,
    CfInputPasswordComponent
  ],
  exports: [
    CfInputComponent,
    CfInputPasswordComponent
  ]
})
export class CommonFormsModule { }