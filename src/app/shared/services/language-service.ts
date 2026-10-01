import { Service, signal, WritableSignal } from '@angular/core';

@Service()
export class LanguageService {
  langSetting: WritableSignal<'de' | 'en'> = signal('en');

  setLanguage(language: 'de' | 'en') {
    this.langSetting.set(language);
    document.documentElement.lang = language;
  }
}
