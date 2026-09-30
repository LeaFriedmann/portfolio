import { Component, inject } from '@angular/core';
import { LanguageService } from '../../shared/services/language-service';

@Component({
  selector: 'about-me',
  imports: [],
  templateUrl: './about-me.html',
  styleUrl: './about-me.scss',
})
export class AboutMe {
  language = inject(LanguageService);
}
