import { Component } from '@angular/core';
import { LetsTalkBtn } from './lets-talk-btn/lets-talk-btn';

@Component({
  selector: 'about-me',
  imports: [LetsTalkBtn],
  templateUrl: './about-me.html',
  styleUrl: './about-me.scss',
})
export class AboutMe {}
