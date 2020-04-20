import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Experiment1373Component } from './experiment1373.component';

describe('Experiment1373Component', () => {
  let component: Experiment1373Component;
  let fixture: ComponentFixture<Experiment1373Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Experiment1373Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Experiment1373Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
