import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { CommonLayoutModule } from './common//common-layout/common-layout.module';
import { TestModule } from './test/test.module';
import { UserModule } from './user/user.module';
import { BoardModule } from './board/board.module';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AgGridModule } from 'ag-grid-angular';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    CommonLayoutModule,
    TestModule,
    UserModule,
    BoardModule,
    HttpClientModule,
    AgGridModule.withComponents([])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
