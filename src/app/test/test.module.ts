import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TestComponent } from './test/test.component';
import { Test2Component } from './test2/test2.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [TestComponent, Test2Component],
  exports: [TestComponent]
})
export class TestModule { }
