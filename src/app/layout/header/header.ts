import { Component } from '@angular/core';
import { MenuHeader } from './menu-header/menu-header';
import { LanguageBtns } from './language-btns/language-btns';

@Component({
  selector: 'app-header',
  imports: [MenuHeader, LanguageBtns],
  templateUrl: './header.html',
  styleUrl: './header.scss',
})
export class Header {}
