import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Experiment1038Component } from './experiment1038.component';

describe('Experiment1038Component', () => {
  let component: Experiment1038Component;
  let fixture: ComponentFixture<Experiment1038Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Experiment1038Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Experiment1038Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
