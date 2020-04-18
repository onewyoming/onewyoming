import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Experiment602Component } from './experiment602.component';

describe('Experiment602Component', () => {
  let component: Experiment602Component;
  let fixture: ComponentFixture<Experiment602Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Experiment602Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Experiment602Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
