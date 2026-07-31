import { Component } from '@angular/core';
import { SkillIcons } from './skill-icons/skill-icons';

@Component({
  selector: 'my-skills',
  imports: [SkillIcons],
  templateUrl: './my-skills.html',
  styleUrl: './my-skills.scss',
})
export class MySkills {}
