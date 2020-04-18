import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Experiment1466Component } from './experiment1466.component';

describe('Experiment1466Component', () => {
  let component: Experiment1466Component;
  let fixture: ComponentFixture<Experiment1466Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Experiment1466Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Experiment1466Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
