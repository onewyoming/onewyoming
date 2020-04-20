import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Experiment1720Component } from './experiment1720.component';

describe('Experiment1720Component', () => {
  let component: Experiment1720Component;
  let fixture: ComponentFixture<Experiment1720Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Experiment1720Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Experiment1720Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
