import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Header } from './layout/header/header';
import { Hero } from './layout/hero/hero';
import { AboutMe } from './layout/about-me/about-me';
import { MySkills } from './layout/my-skills/my-skills';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, Header, Hero, AboutMe, MySkills],
  templateUrl: './app.html',
  styleUrl: './app.scss'
})
export class App {
  protected readonly title = signal('portfolio');
}
