import { Component, inject } from '@angular/core';
import { LanguageService } from '../../../shared/services/language-service';

@Component({
  selector: 'arrow-down',
  imports: [],
  templateUrl: './arrow-down.html',
  styleUrl: './arrow-down.scss',
})
export class ArrowDown {
  language = inject(LanguageService);
}
