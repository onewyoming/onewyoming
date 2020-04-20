import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Experiment1293Component } from './experiment1293.component';

describe('Experiment1293Component', () => {
  let component: Experiment1293Component;
  let fixture: ComponentFixture<Experiment1293Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Experiment1293Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Experiment1293Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
