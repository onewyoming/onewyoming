import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Experiment1187Component } from './experiment1187.component';

describe('Experiment1187Component', () => {
  let component: Experiment1187Component;
  let fixture: ComponentFixture<Experiment1187Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Experiment1187Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Experiment1187Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
