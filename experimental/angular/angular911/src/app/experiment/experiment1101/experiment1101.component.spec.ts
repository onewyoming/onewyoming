import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Experiment1101Component } from './experiment1101.component';

describe('Experiment1101Component', () => {
  let component: Experiment1101Component;
  let fixture: ComponentFixture<Experiment1101Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Experiment1101Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Experiment1101Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
