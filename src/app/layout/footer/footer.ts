import { Component, inject } from '@angular/core';
import { SocialLinks } from '../../shared/components/social-links/social-links';
import { MyLogo } from '../../shared/components/my-logo/my-logo';
import { RouterLink } from '@angular/router';
import { LanguageService } from '../../shared/services/language-service';

@Component({
  selector: 'app-footer',
  imports: [SocialLinks, MyLogo, RouterLink],
  templateUrl: './footer.html',
  styleUrl: './footer.scss',
})
export class Footer {
  language = inject(LanguageService);
}
