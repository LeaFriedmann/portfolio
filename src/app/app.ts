import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Header } from './layout/header/header';
import { Hero } from './layout/hero/hero';
import { AboutMe } from './layout/about-me/about-me';
import { MySkills } from './layout/my-skills/my-skills';
import { Projects } from './layout/projects/projects';
import { References } from './layout/references/references';
import { AnimatedArrow } from './shared/components/arrow/arrow';
import { ContactForm } from './layout/contact-form/contact-form';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, Header, Hero, AboutMe, MySkills, Projects, References, AnimatedArrow, ContactForm],
  templateUrl: './app.html',
  styleUrl: './app.scss',
})
export class App {
  protected readonly title = signal('portfolio');
}
