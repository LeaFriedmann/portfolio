import { Component } from '@angular/core';

@Component({
  selector: 'projects',
  imports: [],
  templateUrl: './projects.html',
  styleUrl: './projects.scss',
})
export class Projects {
  myProjects: { name: string; skills: string; description: string; imgUrl: string}[] = [
    {
      name: 'Join',
      skills: 'Angular | Typescript | HTML | CSS | Firebase',
      description:
        'Task manager inspired by the Kanban System. Create and organize tasks using drag and drop functions, assign users and categories. ',
        imgUrl: './assets/images/join-img.png', 
    },
    {
      name: 'Sharkie',
      skills: 'JavaScript | HTML | CSS',
      description:
        'A simple Jump-and-Run game based on an object-oriented approach. Help sharkie to find coins and poison bottles to fight against the killer whale.',
      imgUrl: './assets/images/pollo-loco-img.png'
    },
    {name: 'Pokedex',
      skills: 'JavaScript | HTML | CSS | Api',
      description: 'Based on the PokéAPI a simple library that provides and catalogues pokemon information.',
      imgUrl: './assets/images/pokedex-img.png'
    }
  ];

  highlitedProject: number | "" = "";

  highlightProject(project: number | ""){
    this.highlitedProject = project;
  }
}
