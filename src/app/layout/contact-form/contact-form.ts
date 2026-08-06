import { Component, inject } from '@angular/core';
import { FormBuilder, Validators, ReactiveFormsModule } from '@angular/forms';
import { minLengthWithoutSpaces } from '../../shared/validators/min-length-without-spaces/min-length-without-spaces';

@Component({
  selector: 'contact-form',
  imports: [ReactiveFormsModule],
  templateUrl: './contact-form.html',
  styleUrl: './contact-form.scss',
})
export class ContactForm {
  //#region properties
  fb = inject(FormBuilder);

  nameFocused: boolean = false;
  mailFocused: boolean = false;
  messageFocused: boolean = false;

  contactForm = this.fb.group({
    name: ['', [Validators.required, minLengthWithoutSpaces(3)]],
    email: ['', [Validators.required, Validators.email]],
    message: ['', [Validators.required, minLengthWithoutSpaces(10)]],
    checkbox: ['', Validators.requiredTrue],
  });

  //#endregion

  //#region methods

  //#region methods getter
  get name() {
    return this.contactForm.get('name');
  }

  get email() {
    return this.contactForm.get('email');
  }

  get message() {
    return this.contactForm.get('message');
  }

  get checkbox() {
    return this.contactForm.get('checkbox');
  }
  //#endregion

  formSubmit() {
    if (this.contactForm.valid) {
      console.log(this.contactForm.value);
      this.contactForm.reset();
    } else {
      this.contactForm.markAllAsTouched();
    }
  }

  //#endregion
}
