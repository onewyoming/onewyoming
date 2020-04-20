import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Experiment836Component } from './experiment836.component';

describe('Experiment836Component', () => {
  let component: Experiment836Component;
  let fixture: ComponentFixture<Experiment836Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Experiment836Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Experiment836Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
