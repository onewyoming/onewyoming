import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Experiment1261Component } from './experiment1261.component';

describe('Experiment1261Component', () => {
  let component: Experiment1261Component;
  let fixture: ComponentFixture<Experiment1261Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Experiment1261Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Experiment1261Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
