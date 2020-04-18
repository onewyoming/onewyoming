import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Experiment1540Component } from './experiment1540.component';

describe('Experiment1540Component', () => {
  let component: Experiment1540Component;
  let fixture: ComponentFixture<Experiment1540Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Experiment1540Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Experiment1540Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
