import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Experiment1104Component } from './experiment1104.component';

describe('Experiment1104Component', () => {
  let component: Experiment1104Component;
  let fixture: ComponentFixture<Experiment1104Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Experiment1104Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Experiment1104Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
