import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SkillIcons } from './skill-icons';

describe('SkillIcons', () => {
  let component: SkillIcons;
  let fixture: ComponentFixture<SkillIcons>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SkillIcons],
    }).compileComponents();

    fixture = TestBed.createComponent(SkillIcons);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
