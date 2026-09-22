import { Component, signal, computed, WritableSignal } from '@angular/core';

@Component({
  selector: 'language-btns',
  imports: [],
  templateUrl: './language-btns.html',
  styleUrl: './language-btns.scss',
})
export class LanguageBtns {
  language: WritableSignal<'de' | 'en'> = signal('de');
}
