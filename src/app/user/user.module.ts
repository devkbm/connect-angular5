import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ClarityModule } from '@clr/angular';
import { CommonFormsModule } from '../common/common-forms/common-forms.module';
import { BrowserAnimationsModule} from '@angular/platform-browser/animations'

import { LoginComponent } from './login/login.component';
import { UserFormComponent } from './component/user-form.component';
import { UserGridComponent } from './component/user-grid.component';

import { LoginService } from './service/login.service';
import { AuthcheckRoutingService } from './login/authcheck-routing.service';
import { UserService } from './service/user.service';
import { AppAlarmService } from '../common/common-service/app-alarm.service';
import { AuthorityGridComponent } from './component/authority-grid.component';
import { AuthorityFormComponent } from './component/authority-form.component';
import { AuthoritySelectboxesComponent } from './component/authority-selectboxes.component';

import { NgSelectModule } from '@ng-select/ng-select';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ClarityModule,
    CommonFormsModule,
    BrowserAnimationsModule,
    NgSelectModule
  ],
  declarations: [
    LoginComponent,
    UserFormComponent,
    UserGridComponent,
    AuthorityGridComponent,
    AuthorityFormComponent,
    AuthoritySelectboxesComponent
  ],
  providers: [
    LoginService,
    UserService,
    AuthcheckRoutingService,
    AppAlarmService
  ]
})
export class UserModule { }
