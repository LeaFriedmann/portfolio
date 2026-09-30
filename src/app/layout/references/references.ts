import { Component } from '@angular/core';

@Component({
  selector: 'references',
  imports: [],
  templateUrl: './references.html',
  styleUrl: './references.scss',
})
export class References {
  referenceList: { name: string; role: string; reference: string }[] = [
    {
      name: 'J. Nell',
      role: 'Team Partner',
      reference:
        'It was a pleasure working with Lea. She was always a reliable and supportive team member who brought a positive attitude to our projects. Her clear communication, willingness to help others, and structured approach made collaboration easy and enjoyable. She was always open to new ideas and contributed valuable input during discussions and brainstorming sessions.',
    },
    {
      name: 'D. Gengel',
      role: 'Team Partner',
      reference:
        'Lea was a great colleague to work with. She consistently showed commitment and took responsibility for her tasks, while also being willing to support the team whenever needed. I especially appreciated her curiosity and motivation to learn new things and improve her skills. Her positive attitude and friendly personality made her a valuable part of our team.',
    },
  ];
}
