import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ScrollUpArrow } from './scroll-up-arrow';

describe('ScrollUpArrow', () => {
  let component: ScrollUpArrow;
  let fixture: ComponentFixture<ScrollUpArrow>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ScrollUpArrow],
    }).compileComponents();

    fixture = TestBed.createComponent(ScrollUpArrow);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
