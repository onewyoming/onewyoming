import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Experiment1043Component } from './experiment1043.component';

describe('Experiment1043Component', () => {
  let component: Experiment1043Component;
  let fixture: ComponentFixture<Experiment1043Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Experiment1043Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Experiment1043Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
