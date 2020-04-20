import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Experiment1141Component } from './experiment1141.component';

describe('Experiment1141Component', () => {
  let component: Experiment1141Component;
  let fixture: ComponentFixture<Experiment1141Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Experiment1141Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Experiment1141Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
