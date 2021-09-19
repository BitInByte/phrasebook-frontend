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
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => InputComponent),
      multi: true,
    },
  ],
})
export class InputComponent implements OnInit, ControlValueAccessor {
  @Input() type!: string;
  @Input() label!: string;
  @Input() errorMsg?: string;
  value = '';
  public propagateChange = (_: string) => {};
  public onTouched = () => {};

  constructor() {}
  ngOnInit(): void {}

  // Will be called if we set the value from the outside,
  // when we initializate the form.
  writeValue(value: string): void {
    // console.log('Value: ', value);
    // if (value !== undefined) {
    // this.value = value;
    // }
  }

  // Let register the method which we need to call
  // when the value changes. This let Angular Forms
  // know that the value changed and let it check
  // for validation
  registerOnChange(onChange: () => void): void {
    this.propagateChange = onChange;
  }

  // Let register the method which we need to call
  // when the control is touched for the first time
  registerOnTouched(onTouched: () => void): void {
    this.onTouched = onTouched;
  }

  // Register the value
  onChange(event: any): void {
    const value = event['target']['value'] as string;
    // console.log(test.target.value);
    this.value = value;
    this.propagateChange(this.value);
    this.onTouched();
  }
}
