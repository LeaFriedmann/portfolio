import { Component } from '@angular/core';
import { ContactForm } from './contact-form/contact-form';
import { ScrollUpArrow } from './scroll-up-arrow/scroll-up-arrow';

@Component({
  selector: 'contact-section',
  imports: [ContactForm, ScrollUpArrow],
  templateUrl: './contact-section.html',
  styleUrl: './contact-section.scss',
})
export class ContactSection {}
