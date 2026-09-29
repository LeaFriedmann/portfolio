import { Component, ElementRef, signal, viewChildren, WritableSignal } from '@angular/core';

@Component({
  selector: 'projects',
  imports: [],
  templateUrl: './projects.html',
  styleUrl: './projects.scss',
})
export class Projects {
  myProjects: { name: string; skills: string; description: string; imgUrl: string; gitHubUrl: string; liveUrl: string }[] = [
    {
      name: 'Join',
      skills: 'Angular | Typescript | HTML | CSS | Supabase',
      description:
        'Task manager inspired by the Kanban System. Create and organize tasks using drag and drop functions, assign users and categories. ',
      imgUrl: './assets/images/join-img.png',
      gitHubUrl: 'https://github.com/LeaFriedmann/join.git',
      liveUrl: '/angular-projects/join',
    },
    {
      name: 'El Pollo loco',
      skills: 'JavaScript | HTML | CSS',
      description:
        'A simple Jump-and-Run game based on an object-oriented approach. Help Pepe to find coins and salsa bottles to fight against the chicken.',
      imgUrl: './assets/images/pollo-loco-img.png',
      gitHubUrl: 'https://github.com/LeaFriedmann/El-pollo-loco.git',
      liveUrl: '/El pollo loco/',
    },
    {
      name: 'Pokedex',
      skills: 'JavaScript | HTML | CSS | Api',
      description: 'Based on the PokéAPI a simple library that provides and catalogues pokemon information.',
      imgUrl: './assets/images/pokedex-img.png',
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
