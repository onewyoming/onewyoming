import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Experiment1053Component } from './experiment1053.component';

describe('Experiment1053Component', () => {
  let component: Experiment1053Component;
  let fixture: ComponentFixture<Experiment1053Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Experiment1053Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Experiment1053Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
