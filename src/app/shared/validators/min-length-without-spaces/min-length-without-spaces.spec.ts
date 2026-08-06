import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MinLengthWithoutSpaces } from './min-length-without-spaces';

describe('MinLengthWithoutSpaces', () => {
  let component: MinLengthWithoutSpaces;
  let fixture: ComponentFixture<MinLengthWithoutSpaces>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MinLengthWithoutSpaces],
    }).compileComponents();

    fixture = TestBed.createComponent(MinLengthWithoutSpaces);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
