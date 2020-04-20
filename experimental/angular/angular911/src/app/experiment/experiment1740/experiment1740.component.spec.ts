import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Experiment1740Component } from './experiment1740.component';

describe('Experiment1740Component', () => {
  let component: Experiment1740Component;
  let fixture: ComponentFixture<Experiment1740Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Experiment1740Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Experiment1740Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
