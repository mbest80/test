import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TemplateRechnerComponent } from './template-rechner.component';

describe('TemplateRechnerComponent', () => {
  let component: TemplateRechnerComponent;
  let fixture: ComponentFixture<TemplateRechnerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TemplateRechnerComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TemplateRechnerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
