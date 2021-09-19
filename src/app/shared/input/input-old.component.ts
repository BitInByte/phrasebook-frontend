import { Component, forwardRef, Input, OnInit } from '@angular/core';
import {
  AbstractControl,
  ControlValueAccessor,
  NG_VALIDATORS,
  NG_VALUE_ACCESSOR,
  ValidationErrors,
  Validator,
} from '@angular/forms';

@Component({
  selector: 'app-input',
  templateUrl: './input.component.html',
  styleUrls: ['./input.component.scss'],
  providers: [
    // {
    // provide: NG_VALUE_ACCESSOR,
    // useExisting: forwardRef(() => InputComponent),
    // multi: true,
    // },
    // {
    // provide: NG_VALIDATORS,
    // useExisting: forwardRef(() => InputComponent),
    // multi: true,
    // },
  ],
})
export class InputOldComponent implements OnInit {
  @Input() type!: string;
  @Input() label!: string;
  @Input() errorMsg?: string;
  @Input() public value = '';
  // public propagateChange = (_: string) => {};
  // public onTouched = () => {};
  // public onValidatorChange = () => {};

  // @Input() public isDisabled = false;
  // @Input() public name!: string;

  constructor() {}
  // registerOnValidatorChange(onValidatorChange: () => void): void {
  // this.onValidatorChange = onValidatorChange;
  // }
  // validate(control: AbstractControl): ValidationErrors | null {
  // throw new Error('Method not implemented.');
  // }
  ngOnInit(): void {}

  // Will be called if we set the value from the outside,
  // when we initializate the form.
  // writeValue(value: string): void {
  // console.log('Value: ', value);
  // if (value !== undefined) {
  // this.value = value;
  // }
  // }

  // Let register a method which will be triggered from
  // Angular via FormsModule logic
  // registerOnChange(onChange: () => void): void {
  // this.propagateChange = onChange;
  // }

  // registerOnTouched(onTouched: () => void): void {
  // this.onTouched = onTouched;
  // }

  // setDisabledState(isDisabled: boolean): void {
  // this.isDisabled = isDisabled;
  // }

  // onChange(): void {
  // this.propagateChange(this.value);
  // // this.onTouched();
  // // this.onValidatorChange();
  // }
}
