import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Experiment1010Component } from './experiment1010.component';

describe('Experiment1010Component', () => {
  let component: Experiment1010Component;
  let fixture: ComponentFixture<Experiment1010Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Experiment1010Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Experiment1010Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
