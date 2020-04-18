import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Experiment677Component } from './experiment677.component';

describe('Experiment677Component', () => {
  let component: Experiment677Component;
  let fixture: ComponentFixture<Experiment677Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Experiment677Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Experiment677Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
