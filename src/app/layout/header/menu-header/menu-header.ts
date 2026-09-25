import { Component } from '@angular/core';
import { SocialLinks } from '../../../shared/components/social-links/social-links';

@Component({
  selector: 'app-menu-header',
  imports: [SocialLinks],
  templateUrl: './menu-header.html',
  styleUrl: './menu-header.scss',
})
export class MenuHeader {

  menuClosed: boolean = true;

  toggleMenu(){
    this.menuClosed = !this.menuClosed;
  }
}
