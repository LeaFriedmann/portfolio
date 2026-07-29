import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LetsTalkBtn } from './lets-talk-btn';

describe('LetsTalkBtn', () => {
  let component: LetsTalkBtn;
  let fixture: ComponentFixture<LetsTalkBtn>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [LetsTalkBtn],
    }).compileComponents();

    fixture = TestBed.createComponent(LetsTalkBtn);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
