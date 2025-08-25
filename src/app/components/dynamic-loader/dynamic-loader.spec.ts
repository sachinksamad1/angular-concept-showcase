import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DynamicLoader } from './dynamic-loader';

describe('DynamicLoader', () => {
  let component: DynamicLoader;
  let fixture: ComponentFixture<DynamicLoader>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DynamicLoader]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DynamicLoader);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
