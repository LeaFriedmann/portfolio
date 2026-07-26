import { Component } from '@angular/core';
import { MenuHeader } from './menu-header/menu-header';

@Component({
  selector: 'app-header',
  imports: [MenuHeader],
  templateUrl: './header.html',
  styleUrl: './header.scss',
})
export class Header {}
