import { Component, computed, inject, signal, WritableSignal } from '@angular/core';
import { FormBuilder, Validators, ReactiveFormsModule } from '@angular/forms';
import { minLengthWithoutSpaces } from '../../../shared/validators/min-length-without-spaces/min-length-without-spaces';
import { advancedEmailValidator } from '../../../shared/validators/email-validator';
import { RouterLink } from '@angular/router';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'contact-form',
  imports: [ReactiveFormsModule, RouterLink],
  templateUrl: './contact-form.html',
  styleUrl: './contact-form.scss',
})
export class ContactForm {
  //#region properties
  fb = inject(FormBuilder);
  http = inject(HttpClient);

  nameFocused: WritableSignal<boolean> = signal(false);
  mailFocused: WritableSignal<boolean> = signal(false);
  messageFocused: WritableSignal<boolean> = signal(false);

  // placeholder empty on focus
  placeHolderName = computed(() => (this.nameFocused() ? '' : 'Your Name'));
  placeHolderEmail = computed(() => (this.mailFocused() ? '' : 'Your email'));
  placeHolderMessage = computed(() => (this.messageFocused() ? '' : 'Your message'));

  contactForm = this.fb.group({
    name: ['', [Validators.required, minLengthWithoutSpaces(3), Validators.pattern(/^[\p{L}\p{M}]+(?:[ '’-][\p{L}\p{M}]+)*$/u)]],
    email: ['', [Validators.required, Validators.email, Validators.pattern(/\.[a-zA-Z]{2,}$/), advancedEmailValidator()]],
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

  mailStatus = signal<'idle' | 'sending' | 'success' | 'error'>('idle');

  formSubmit() {
    if (!this.contactForm.valid) {
      this.contactForm.markAllAsTouched();
      return;
    }

    this.mailStatus.set('sending');

    const formData = {
      name: this.name?.value,
      email: this.email?.value,
      message: this.message?.value,
    };

    console.log(formData);    

    this.http.post('/angular-projects/portfolio/mail-service.php', formData).subscribe({
      next: (response) => {
        console.log('message sent successfully:', response);
        this.mailStatus.set('success');
        this.contactForm.reset();
      },

      error: (error) => {
        console.error('message could not be sent, error while sending:', error);
        this.mailStatus.set('error');
      },
    });
  }

  //#endregion
}
