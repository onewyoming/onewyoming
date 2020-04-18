import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Experiment1574Component } from './experiment1574.component';

describe('Experiment1574Component', () => {
  let component: Experiment1574Component;
  let fixture: ComponentFixture<Experiment1574Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Experiment1574Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Experiment1574Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
