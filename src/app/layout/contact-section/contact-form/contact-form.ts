import { Component, computed, inject, signal, WritableSignal } from '@angular/core';
import { FormBuilder, Validators, ReactiveFormsModule } from '@angular/forms';
import { minLengthWithoutSpaces } from '../../../shared/validators/min-length-without-spaces/min-length-without-spaces';
import { advancedEmailValidator } from '../../../shared/validators/email-validator';
import { RouterLink } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { LanguageService } from '../../../shared/services/language-service';

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
  language = inject(LanguageService);

  nameFocused: WritableSignal<boolean> = signal(false);
  mailFocused: WritableSignal<boolean> = signal(false);
  messageFocused: WritableSignal<boolean> = signal(false);

  // placeholder empty on focus
  placeHolderName = computed(() => (this.nameFocused() ? '' : this.language.langSetting() == 'en' ? 'Your Name' : 'Dein Name'));
  placeHolderEmail = computed(() =>
    this.mailFocused() ? '' : this.language.langSetting() == 'en' ? 'Your email' : 'Deine E-Mail-Adresse',
  );
  placeHolderMessage = computed(() =>
    this.messageFocused() ? '' : this.language.langSetting() == 'en' ? 'Your message' : 'Deine Nachricht',
  );

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

    this.http.post('/mail-service.php', formData).subscribe({
      next: (response) => {
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
