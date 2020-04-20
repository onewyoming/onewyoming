import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Experiment1480Component } from './experiment1480.component';

describe('Experiment1480Component', () => {
  let component: Experiment1480Component;
  let fixture: ComponentFixture<Experiment1480Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Experiment1480Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Experiment1480Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
