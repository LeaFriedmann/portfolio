import { Component, input, InputSignal } from '@angular/core';

@Component({
  selector: 'my-logo',
  imports: [],
  templateUrl: './my-logo.html',
  styleUrl: './my-logo.scss',
})
export class MyLogo {
  logoColor: InputSignal<'white' | 'black'> = input.required<'white' | 'black'>();
}
