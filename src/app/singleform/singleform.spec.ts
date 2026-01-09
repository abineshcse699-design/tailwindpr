import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Singleform } from './singleform';

describe('Singleform', () => {
  let component: Singleform;
  let fixture: ComponentFixture<Singleform>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Singleform]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Singleform);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
