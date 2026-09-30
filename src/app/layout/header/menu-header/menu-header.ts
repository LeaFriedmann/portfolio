import { Component, inject } from '@angular/core';
import { SocialLinks } from '../../../shared/components/social-links/social-links';
import { LanguageService } from '../../../shared/services/language-service';

@Component({
  selector: 'app-menu-header',
  imports: [SocialLinks],
  templateUrl: './menu-header.html',
  styleUrl: './menu-header.scss',
})
export class MenuHeader {
  language = inject(LanguageService);
  
  menuClosed: boolean = true;

  toggleMenu() {
    this.menuClosed = !this.menuClosed;
  }
}
