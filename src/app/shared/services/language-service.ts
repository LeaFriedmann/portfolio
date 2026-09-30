import { Service, signal, WritableSignal } from '@angular/core';

@Service()
export class LanguageService {
  langSetting: WritableSignal<'de' | 'en'> = signal('de');
}
