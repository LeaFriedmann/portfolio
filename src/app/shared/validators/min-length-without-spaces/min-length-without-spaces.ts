import { Component } from '@angular/core';
import {
  AbstractControl,
  ReactiveFormsModule,
  ValidationErrors,
  ValidatorFn,
} from '@angular/forms';

export function minLengthWithoutSpaces(minLength: number): ValidatorFn {
  return (control: AbstractControl): ValidationErrors | null => {
    let trimmedLength;
    if (control.value) {
      const trimmed = control.value.trim();
      trimmedLength = trimmed.length;
    }
    return trimmedLength < minLength ? { stringTooShort: { value: control.value } } : null;
  };
}

@Component({
  selector: 'app-min-length-without-spaces',
  imports: [ReactiveFormsModule],
  templateUrl: './min-length-without-spaces.html',
  styleUrl: './min-length-without-spaces.scss',
})
export class MinLengthWithoutSpaces {}
