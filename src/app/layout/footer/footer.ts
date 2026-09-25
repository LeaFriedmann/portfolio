import { Component } from '@angular/core';
import { SocialLinks } from '../../shared/components/social-links/social-links';

@Component({
  selector: 'app-footer',
  imports: [SocialLinks],
  templateUrl: './footer.html',
  styleUrl: './footer.scss',
})
export class Footer {}
