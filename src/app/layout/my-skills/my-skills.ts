import { Component, inject } from '@angular/core';
import { SkillIcons } from './skill-icons/skill-icons';
import { LanguageService } from '../../shared/services/language-service';

@Component({
  selector: 'my-skills',
  imports: [SkillIcons],
  templateUrl: './my-skills.html',
  styleUrl: './my-skills.scss',
})
export class MySkills {
  language = inject(LanguageService);
}
