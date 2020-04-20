import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Experiment1067Component } from './experiment1067.component';

describe('Experiment1067Component', () => {
  let component: Experiment1067Component;
  let fixture: ComponentFixture<Experiment1067Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Experiment1067Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Experiment1067Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
