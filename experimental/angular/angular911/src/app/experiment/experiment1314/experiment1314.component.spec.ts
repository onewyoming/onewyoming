import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Experiment1314Component } from './experiment1314.component';

describe('Experiment1314Component', () => {
  let component: Experiment1314Component;
  let fixture: ComponentFixture<Experiment1314Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Experiment1314Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Experiment1314Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
