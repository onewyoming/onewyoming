import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Experiment1556Component } from './experiment1556.component';

describe('Experiment1556Component', () => {
  let component: Experiment1556Component;
  let fixture: ComponentFixture<Experiment1556Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Experiment1556Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Experiment1556Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
