import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Experiment1581Component } from './experiment1581.component';

describe('Experiment1581Component', () => {
  let component: Experiment1581Component;
  let fixture: ComponentFixture<Experiment1581Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Experiment1581Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Experiment1581Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
