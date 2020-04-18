import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Experiment1194Component } from './experiment1194.component';

describe('Experiment1194Component', () => {
  let component: Experiment1194Component;
  let fixture: ComponentFixture<Experiment1194Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Experiment1194Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Experiment1194Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
