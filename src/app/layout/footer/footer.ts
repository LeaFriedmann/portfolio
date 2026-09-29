import { Component } from '@angular/core';
import { SocialLinks } from '../../shared/components/social-links/social-links';
import { MyLogo } from '../../shared/components/my-logo/my-logo';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-footer',
  imports: [SocialLinks, MyLogo, RouterLink],
  templateUrl: './footer.html',
  styleUrl: './footer.scss',
})
export class Footer {}
