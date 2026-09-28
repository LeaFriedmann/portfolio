import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'social-links',
  imports: [],
  templateUrl: './social-links.html',
  styleUrl: './social-links.scss',
})
export class SocialLinks {
  @Output() contactClicked = new EventEmitter<void>();
}
