import { Component } from '@angular/core';
import { MenuHeader } from './menu-header/menu-header';
import { LanguageBtns } from './language-btns/language-btns';
import { MyLogo } from '../../shared/components/my-logo/my-logo';

@Component({
  selector: 'app-header',
  imports: [MenuHeader, LanguageBtns, MyLogo],
  templateUrl: './header.html',
  styleUrl: './header.scss',
})
export class Header {}
