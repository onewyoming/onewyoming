import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Experiment1142Component } from './experiment1142.component';

describe('Experiment1142Component', () => {
  let component: Experiment1142Component;
  let fixture: ComponentFixture<Experiment1142Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Experiment1142Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Experiment1142Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
