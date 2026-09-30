import { Component, ElementRef, inject, signal, viewChildren, WritableSignal } from '@angular/core';
import { LanguageService } from '../../shared/services/language-service';

@Component({
  selector: 'projects',
  imports: [],
  templateUrl: './projects.html',
  styleUrl: './projects.scss',
})
export class Projects {
  language = inject(LanguageService);

  myProjects: {
    name: string;
    skills: string;
    descriptionEn: string;
    descriptionDe: string;
    imgUrl: string;
    gitHubUrl: string;
    liveUrl: string;
  }[] = [
    {
      name: 'Join',
      skills: 'Angular | Typescript | HTML | CSS | Supabase',
      descriptionEn:
        'Task manager inspired by the Kanban System. Create and organize tasks using drag and drop functions, assign users and categories. ',
      descriptionDe:
        'Task-Manager nach dem Kanban-Prinzip. Aufgaben lassen sich per Drag-and-Drop erstellen und organisieren sowie Benutzern und Kategorien zuweisen.',
      imgUrl: './assets/images/join-preview.png',
      gitHubUrl: 'https://github.com/LeaFriedmann/join.git',
      liveUrl: '/angular-projects/join',
    },
    {
      name: 'El Pollo loco',
      skills: 'JavaScript | HTML | CSS',
      descriptionEn:
        'A simple Jump-and-Run game based on an object-oriented approach. Help Pepe to find coins and salsa bottles to fight against the chicken.',
      descriptionDe:
        'Ein kleines Jump-and-Run-Spiel auf Basis objektorientierter Programmierung. Hilf Pepe, Münzen und Salsa-Flaschen zu sammeln und sich gegen das Huhn zu behaupten.',
      imgUrl: './assets/images/el-pollo-loco-privew.png',
      gitHubUrl: 'https://github.com/LeaFriedmann/El-pollo-loco.git',
      liveUrl: '/El pollo loco/',
    },
    {
      name: 'Pokedex',
      skills: 'JavaScript | HTML | CSS | Api',
      descriptionEn: 'Based on the PokéAPI a simple library that provides and catalogues pokemon information.',
      descriptionDe: 'Eine Pokémon-Bibliothek auf Basis der PokéAPI zum Abrufen und Katalogisieren von Pokémon-Informationen.',
      imgUrl: './assets/images/pokedex-preview.png',
      gitHubUrl: 'https://github.com/LeaFriedmann/Pokedex.git',
      liveUrl: '/Pokedex/',
    },
  ];

  prevRatio: number = 0;
  animate: WritableSignal<boolean[]> = signal<boolean[]>(this.myProjects.map(() => false));
  projects = viewChildren<ElementRef<HTMLDivElement>>('project');

  ngAfterViewInit() {
    this.projects().forEach((project, index) => {
      const observer = new IntersectionObserver(
        ([entry]) => {
          if (entry.intersectionRatio >= 0.9) {
            this.slideIn(index);
          } else if (entry.intersectionRatio <= 0.65) {
            this.slideOut(index);
          }
        },
        { threshold: [0.65, 0.9] },
      );
      observer.observe(project.nativeElement);
    });
  }

  slideIn(index: number) {
    this.animate.update((values) => {
      const newValues = [...values];
      newValues[index] = true;
      return newValues;
    });
  }

  slideOut(index: number) {
    this.animate.update((values) => {
      const newValues = [...values];
      newValues[index] = false;
      return newValues;
    });
  }
}
