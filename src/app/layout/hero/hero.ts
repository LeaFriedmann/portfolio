import { Component } from '@angular/core';
import { ArrowDown } from './arrow-down/arrow-down';
import { MailLink } from './mail-link/mail-link';

@Component({
  selector: 'hero',
  imports: [ArrowDown, MailLink],
  templateUrl: './hero.html',
  styleUrl: './hero.scss',
})
export class Hero {}
