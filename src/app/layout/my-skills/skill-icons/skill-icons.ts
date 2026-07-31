import { Component } from '@angular/core';

@Component({
  selector: 'skill-icons',
  imports: [],
  templateUrl: './skill-icons.html',
  styleUrl: './skill-icons.scss',
})
export class SkillIcons {
  skills: { name: string; icon: string }[] = [
    { name: 'Angular', icon: './assets/images/angular-icon.png' },
    { name: 'TypeScript', icon: './assets/images/ts-icon.png' },
    { name: 'JavaScript', icon: './assets/images/js-icon.png' },
    { name: 'CSS', icon: './assets/images/css-icon.png' },
    { name: 'HTML', icon: './assets/images/html-icon.png' },
    { name: 'Git', icon: './assets/images/git-icon.png' },
    { name: 'Material Design', icon: './assets/images/material-design-icon.png' },
    { name: 'REST-API', icon: './assets/images/rest-api-icon.png' },
    { name: 'Scrum', icon: './assets/images/scrum-icon.png' },
    { name: 'Supabase', icon: './assets/images/supabase-icon.png' },
  ];
}
