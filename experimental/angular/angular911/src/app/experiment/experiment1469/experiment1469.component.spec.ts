import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Experiment1469Component } from './experiment1469.component';

describe('Experiment1469Component', () => {
  let component: Experiment1469Component;
  let fixture: ComponentFixture<Experiment1469Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Experiment1469Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Experiment1469Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
