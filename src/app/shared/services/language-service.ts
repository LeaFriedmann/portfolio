import { Service, signal, WritableSignal } from '@angular/core';

export type Language = 'de' | 'en';

@Service()
export class LanguageService {
  langSetting: WritableSignal<Language> = signal('en');

  constructor() {
    this.getLocalLang();
  }

  setLanguage(language: Language) {
    this.langSetting.set(language);
    document.documentElement.lang = language;
    this.setLocalLang(language);
  }

  setLocalLang(language: Language) {
    localStorage.setItem('language', language);
  }

  getLocalLang() {
    const localLang = localStorage.getItem('language');
    if (localLang === 'de' || localLang === 'en') {
      this.langSetting.set(localLang);
    }
  }
}
