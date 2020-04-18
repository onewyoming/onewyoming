import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Experiment1517Component } from './experiment1517.component';

describe('Experiment1517Component', () => {
  let component: Experiment1517Component;
  let fixture: ComponentFixture<Experiment1517Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Experiment1517Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Experiment1517Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
