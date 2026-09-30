import { Component, inject } from '@angular/core';
import { LanguageService } from '../../shared/services/language-service';

@Component({
  selector: 'references',
  imports: [],
  templateUrl: './references.html',
  styleUrl: './references.scss',
})
export class References {
  language = inject(LanguageService);

  referenceList: { name: string; role: string; referenceEn: string; referenceDe: string }[] = [
    {
      name: 'J. Nell',
      role: 'Team Partner',
      referenceEn:
        'It was a pleasure working with Lea. She was always a reliable and supportive team member who brought a positive attitude to our projects. Her clear communication, willingness to help others, and structured approach made collaboration easy and enjoyable. She was always open to new ideas and contributed valuable input during discussions and brainstorming sessions.',
      referenceDe:
        '„Die Zusammenarbeit mit Lea war eine große Freude. Sie war stets ein zuverlässiges und unterstützendes Teammitglied und hat eine positive Einstellung in unsere Projekte eingebracht. Durch ihre klare Kommunikation, ihre Hilfsbereitschaft und ihre strukturierte Arbeitsweise war die Zusammenarbeit unkompliziert und angenehm. Sie war immer offen für neue Ideen und hat sich mit wertvollen Beiträgen aktiv in Diskussionen und Brainstorming-Sessions eingebracht.“',
    },
    {
      name: 'D. Gengel',
      role: 'Team Partner',
      referenceEn:
        'Lea was a great colleague to work with. She consistently showed commitment and took responsibility for her tasks, while also being willing to support the team whenever needed. I especially appreciated her curiosity and motivation to learn new things and improve her skills. Her positive attitude and friendly personality made her a valuable part of our team.',
      referenceDe:
        '„Lea war eine großartige Kollegin, mit der die Zusammenarbeit viel Freude gemacht hat. Sie zeigte stets Engagement und übernahm Verantwortung für ihre Aufgaben, war aber gleichzeitig immer bereit, das Team zu unterstützen, wenn Hilfe gebraucht wurde. Besonders geschätzt habe ich ihre Neugier und ihre Motivation, Neues zu lernen und ihre Fähigkeiten kontinuierlich weiterzuentwickeln. Ihre positive Einstellung und ihre freundliche Art machten sie zu einem wertvollen Teil unseres Teams.“',
    },
  ];
}
