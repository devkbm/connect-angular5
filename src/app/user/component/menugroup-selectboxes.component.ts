import { Component, OnInit, Input, Output, EventEmitter, forwardRef } from '@angular/core';
import { NG_VALUE_ACCESSOR, NG_VALIDATORS,  ControlValueAccessor, AbstractControl } from '@angular/forms';

import { UserService } from '../service/user.service';
import { ResponseList } from '../../common/common-service/model/response-list';
import { MenuGroup } from '../../common/common-service/menu-group';

const noop = () => {
};

@Component({
  selector: 'app-menugroup-selectboxes',
  templateUrl: './menugroup-selectboxes.component.html',
  styles: [''],
  providers: [{
    provide: NG_VALUE_ACCESSOR,
    useExisting: forwardRef(() => MenuGroupSelectboxesComponent),
    multi: true
  }]
})
export class MenuGroupSelectboxesComponent implements OnInit, ControlValueAccessor  {

  menuGroupList: MenuGroup[];

  private innerValue: any[];

  @Output()
  authChanged = new EventEmitter();

  // Placeholders for the callbacks which are later provided
  // by the Control Value Accessor
  private onTouchedCallback: () => void = noop;
  private onChangeCallback: (_: any) => void = noop;

  constructor(private userService: UserService) { }

  ngOnInit() {
    this.getMenuGroupList();
  }

  @Input()
  get value(): any {
    return this.innerValue;
  }

  set value(v: any) {
    if (v !== this.innerValue) {
      this.innerValue = v;
      this.onChangeCallback(v);
    }

  }

  private getMenuGroupList() {
    this.userService
      .getMenuGroupList()
      .subscribe(
        (model: ResponseList<MenuGroup>) => {
          if (model.total > 0) {
            this.menuGroupList = model.data;
          }
        },
        (err) => {
          console.log(err);
        },
        () => {
          console.log('완료');
        }
      );
  }

  selectItem(item) {
    // console.log(this.authorities);
    // console.log(item);
  }

  onBlur() {
    this.onTouchedCallback();
  }

  writeValue(obj: any): void {
    if (obj !== this.innerValue) {
      this.innerValue = obj;
    }
  }
  registerOnChange(fn: any): void {
    this.onChangeCallback = fn;
  }
  registerOnTouched(fn: any): void {
    this.onTouchedCallback = fn;
  }
  setDisabledState?(isDisabled: boolean): void {
    // throw new Error("Method not implemented.");
  }

}
