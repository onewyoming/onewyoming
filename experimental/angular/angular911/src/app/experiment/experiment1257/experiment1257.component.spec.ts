import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Experiment1257Component } from './experiment1257.component';

describe('Experiment1257Component', () => {
  let component: Experiment1257Component;
  let fixture: ComponentFixture<Experiment1257Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Experiment1257Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Experiment1257Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
