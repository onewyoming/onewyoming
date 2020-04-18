import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Experiment1561Component } from './experiment1561.component';

describe('Experiment1561Component', () => {
  let component: Experiment1561Component;
  let fixture: ComponentFixture<Experiment1561Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Experiment1561Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Experiment1561Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
