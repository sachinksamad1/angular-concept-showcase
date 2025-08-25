import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TemplateProjection } from './template-projection';

describe('TemplateProjection', () => {
  let component: TemplateProjection;
  let fixture: ComponentFixture<TemplateProjection>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TemplateProjection]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TemplateProjection);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
