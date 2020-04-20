import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Experiment1228Component } from './experiment1228.component';

describe('Experiment1228Component', () => {
  let component: Experiment1228Component;
  let fixture: ComponentFixture<Experiment1228Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Experiment1228Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Experiment1228Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
