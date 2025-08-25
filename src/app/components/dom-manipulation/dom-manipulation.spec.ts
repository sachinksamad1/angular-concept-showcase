import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DomManipulation } from './dom-manipulation';

describe('DomManipulation', () => {
  let component: DomManipulation;
  let fixture: ComponentFixture<DomManipulation>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DomManipulation]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DomManipulation);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
