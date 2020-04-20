import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Experiment483Component } from './experiment483.component';

describe('Experiment483Component', () => {
  let component: Experiment483Component;
  let fixture: ComponentFixture<Experiment483Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Experiment483Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Experiment483Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
