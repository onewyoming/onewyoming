import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Experiment1245Component } from './experiment1245.component';

describe('Experiment1245Component', () => {
  let component: Experiment1245Component;
  let fixture: ComponentFixture<Experiment1245Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Experiment1245Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Experiment1245Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
