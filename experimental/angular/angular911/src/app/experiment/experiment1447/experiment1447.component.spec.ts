import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Experiment1447Component } from './experiment1447.component';

describe('Experiment1447Component', () => {
  let component: Experiment1447Component;
  let fixture: ComponentFixture<Experiment1447Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Experiment1447Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Experiment1447Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
