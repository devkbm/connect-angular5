import { Component, OnInit, Input, Output, EventEmitter, forwardRef } from '@angular/core';
import { NG_VALUE_ACCESSOR, NG_VALIDATORS,  ControlValueAccessor, AbstractControl } from '@angular/forms';
import { Authority } from '../model/authority-info';
import { UserService } from '../service/user.service';
import { ResponseList } from '../../common/common-service/model/response-list';

const noop = () => {
};

@Component({
  selector: 'app-authority-selectboxes',
  templateUrl: './authority-selectboxes.component.html',
  styles: [''],
  providers: [{
    provide: NG_VALUE_ACCESSOR,
    useExisting: forwardRef(() => AuthoritySelectboxesComponent),
    multi: true
  }]
})
export class AuthoritySelectboxesComponent implements OnInit, ControlValueAccessor  {
  
  authList: Authority[];  
  
  private innerValue: any[];

  @Output()
  authChanged = new EventEmitter();

  // Placeholders for the callbacks which are later provided
  // by the Control Value Accessor
  private onTouchedCallback: () => void = noop;
  private onChangeCallback: (_: any) => void = noop;

  constructor(private userService: UserService) { }

  ngOnInit() {
    this.getAuthorityList();
  }    

  @Input()
  get value(): any {
    return this.innerValue;
  }

  set value(v: any) {
    console.log('set value'+v);
    if (v !== this.innerValue) {
      this.innerValue = v;
      this.onChangeCallback(v);
    }

  }

  private getAuthorityList() {
    this.userService
      .getAuthorityList()
      .subscribe(
        (model: ResponseList<Authority>) => {
          if (model.total > 0) {
            this.authList = model.data;
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
    //console.log(this.authorities);
    //console.log(item);
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
    //throw new Error("Method not implemented.");
  }

}
