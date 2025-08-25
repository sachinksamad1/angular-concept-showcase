import { ComponentFixture, TestBed } from '@angular/core/testing';

import { QueriesDemo } from './queries-demo';

describe('QueriesDemo', () => {
  let component: QueriesDemo;
  let fixture: ComponentFixture<QueriesDemo>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [QueriesDemo]
    })
    .compileComponents();

    fixture = TestBed.createComponent(QueriesDemo);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
