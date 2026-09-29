import { Component } from '@angular/core';
import { Hero } from '../../layout/hero/hero';
import { AboutMe } from '../../layout/about-me/about-me';
import { AnimatedArrow } from '../../shared/components/arrow/arrow';
import { MySkills } from '../../layout/my-skills/my-skills';
import { Projects } from '../../layout/projects/projects';
import { References } from '../../layout/references/references';
import { ContactSection } from '../../layout/contact-section/contact-section';

@Component({
  selector: 'main-page',
  imports: [Hero, AboutMe, AnimatedArrow, MySkills, Projects, References, ContactSection],
  templateUrl: './main-page.html',
  styleUrl: './main-page.scss',
})
export class MainPage {}
