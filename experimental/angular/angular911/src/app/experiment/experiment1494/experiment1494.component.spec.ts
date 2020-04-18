import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Experiment1494Component } from './experiment1494.component';

describe('Experiment1494Component', () => {
  let component: Experiment1494Component;
  let fixture: ComponentFixture<Experiment1494Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Experiment1494Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Experiment1494Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
