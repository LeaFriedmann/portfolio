import { Component } from '@angular/core';

@Component({
  selector: 'references',
  imports: [],
  templateUrl: './references.html',
  styleUrl: './references.scss',
})
export class References {
  referenceList: { name: string; role: string; reference: string }[] = [
    { name: 'A. Renhard', role: 'Team Partner', reference: 'Michael really kept the team together with his great organization and clear communication. We wouldn`t have got this far without his commitment' },
    {
      name: 'B. Weiß',
      role: 'Frontend Engineer',
      reference:
        'Michi was a top team colleague at DA. His positive commitment and willingness to take on responsibility made a significant contribution to us achieving our goals.',
    },
    {
      name: 'H. Oldinger',
      role: 'Team Partner',
      reference:
        'It was a great pleasure to work with Michael. He knows how to push and encourage team members to present the best work possible, always adding something to brainstorm. Regarding the well-being of group members, he was always present and available to listen and help others, with a great sense of humor as well',
    },
  ];
}
