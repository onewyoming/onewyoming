import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Experiment1225Component } from './experiment1225.component';

describe('Experiment1225Component', () => {
  let component: Experiment1225Component;
  let fixture: ComponentFixture<Experiment1225Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Experiment1225Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Experiment1225Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
