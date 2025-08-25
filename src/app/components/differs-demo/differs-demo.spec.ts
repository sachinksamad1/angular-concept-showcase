import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DiffersDemo } from './differs-demo';

describe('DiffersDemo', () => {
  let component: DiffersDemo;
  let fixture: ComponentFixture<DiffersDemo>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DiffersDemo]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DiffersDemo);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
