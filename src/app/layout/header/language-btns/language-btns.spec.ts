import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LanguageBtns } from './language-btns';

describe('LanguageBtns', () => {
  let component: LanguageBtns;
  let fixture: ComponentFixture<LanguageBtns>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [LanguageBtns],
    }).compileComponents();

    fixture = TestBed.createComponent(LanguageBtns);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
