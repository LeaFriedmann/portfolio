import { Service, signal, WritableSignal } from '@angular/core';

@Service()
export class LanguageService {
  language: WritableSignal<'de' | 'en'> = signal('en');
}
