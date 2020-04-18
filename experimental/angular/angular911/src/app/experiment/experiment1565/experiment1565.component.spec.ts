import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Experiment1565Component } from './experiment1565.component';

describe('Experiment1565Component', () => {
  let component: Experiment1565Component;
  let fixture: ComponentFixture<Experiment1565Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Experiment1565Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Experiment1565Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
