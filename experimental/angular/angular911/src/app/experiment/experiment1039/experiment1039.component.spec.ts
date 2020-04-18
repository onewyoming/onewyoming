import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Experiment1039Component } from './experiment1039.component';

describe('Experiment1039Component', () => {
  let component: Experiment1039Component;
  let fixture: ComponentFixture<Experiment1039Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Experiment1039Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Experiment1039Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
