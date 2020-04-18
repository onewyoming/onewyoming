import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Experiment879Component } from './experiment879.component';

describe('Experiment879Component', () => {
  let component: Experiment879Component;
  let fixture: ComponentFixture<Experiment879Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Experiment879Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Experiment879Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
