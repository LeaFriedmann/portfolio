import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ArrowDown } from './arrow-down';

describe('ArrowDown', () => {
  let component: ArrowDown;
  let fixture: ComponentFixture<ArrowDown>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ArrowDown],
    }).compileComponents();

    fixture = TestBed.createComponent(ArrowDown);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
