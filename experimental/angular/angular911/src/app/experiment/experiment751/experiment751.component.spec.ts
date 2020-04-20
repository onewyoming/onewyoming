import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Experiment751Component } from './experiment751.component';

describe('Experiment751Component', () => {
  let component: Experiment751Component;
  let fixture: ComponentFixture<Experiment751Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Experiment751Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Experiment751Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
