import { Component, inject } from '@angular/core';
import { ContactForm } from './contact-form/contact-form';
import { ScrollUpArrow } from './scroll-up-arrow/scroll-up-arrow';
import { LanguageService } from '../../shared/services/language-service';

@Component({
  selector: 'contact-section',
  imports: [ContactForm, ScrollUpArrow],
  templateUrl: './contact-section.html',
  styleUrl: './contact-section.scss',
})
export class ContactSection {
  language = inject(LanguageService);
}
