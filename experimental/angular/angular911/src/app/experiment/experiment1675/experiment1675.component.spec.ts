import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Experiment1675Component } from './experiment1675.component';

describe('Experiment1675Component', () => {
  let component: Experiment1675Component;
  let fixture: ComponentFixture<Experiment1675Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Experiment1675Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Experiment1675Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
