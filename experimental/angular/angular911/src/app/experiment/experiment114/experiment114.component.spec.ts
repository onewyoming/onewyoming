import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Experiment114Component } from './experiment114.component';

describe('Experiment114Component', () => {
  let component: Experiment114Component;
  let fixture: ComponentFixture<Experiment114Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Experiment114Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Experiment114Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
