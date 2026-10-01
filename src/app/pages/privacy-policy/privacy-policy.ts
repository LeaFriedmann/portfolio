import { Component, inject } from '@angular/core';
import { LanguageService } from '../../shared/services/language-service';

@Component({
  selector: 'privacy-policy',
  imports: [],
  templateUrl: './privacy-policy.html',
  styleUrl: './privacy-policy.scss',
})
export class PrivacyPolicy {
  language = inject(LanguageService);
}
