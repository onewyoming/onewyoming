import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Experiment1066Component } from './experiment1066.component';

describe('Experiment1066Component', () => {
  let component: Experiment1066Component;
  let fixture: ComponentFixture<Experiment1066Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Experiment1066Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Experiment1066Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
