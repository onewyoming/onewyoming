import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Experiment1990Component } from './experiment1990.component';

describe('Experiment1990Component', () => {
  let component: Experiment1990Component;
  let fixture: ComponentFixture<Experiment1990Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Experiment1990Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Experiment1990Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
