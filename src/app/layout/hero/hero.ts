import { Component, inject } from '@angular/core';
import { ArrowDown } from './arrow-down/arrow-down';
import { MailLink } from './mail-link/mail-link';
import { LanguageService } from '../../shared/services/language-service';

@Component({
  selector: 'hero',
  imports: [ArrowDown, MailLink],
  templateUrl: './hero.html',
  styleUrl: './hero.scss',
})
export class Hero {
  language = inject(LanguageService);
}
