import { Component, signal, computed, WritableSignal, Inject, inject } from '@angular/core';
import { LanguageService } from '../../../shared/services/language-service';

@Component({
  selector: 'language-btns',
  imports: [],
  templateUrl: './language-btns.html',
  styleUrl: './language-btns.scss',
})
export class LanguageBtns {
  language = inject(LanguageService);
}
