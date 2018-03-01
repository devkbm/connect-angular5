import { Component, OnInit, Input, Output, forwardRef, EventEmitter } from '@angular/core';
import { NG_VALUE_ACCESSOR, NG_VALIDATORS,  ControlValueAccessor, AbstractControl, Validator } from '@angular/forms';

const noop = () => {
};

@Component({
  selector: 'cf-input-password',
  templateUrl: './cf-input-password.component.html',
  styles: [''],
  providers: [{
    provide: NG_VALUE_ACCESSOR,
    useExisting: forwardRef(() => CfInputPasswordComponent),
    multi: true
  }]
})
export class CfInputPasswordComponent implements OnInit {

  private innerValue: any = '';

  @Input() uniqueId: String;
  @Input() isRequired = false;
  @Input() inputType: String = 'text';
  @Input() placeholderText: String = 'PLACEHOLDER';
  @Input() tooltipText: String;

  @Output() valueChanged: EventEmitter<string> = new EventEmitter();

  // Placeholders for the callbacks which are later provided
  // by the Control Value Accessor
  private onTouchedCallback: () => void = noop;
  private onChangeCallback: (_: any) => void = noop;

  constructor() { }

  ngOnInit() { }

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

  onBlur() {
    this.onTouchedCallback();
  }

  writeValue(value: any): void {
    if (value !== this.innerValue) {
      this.innerValue = value;
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

  onChange(event: any)  {
    this.valueChanged.emit(event.target.value);
  }

}
