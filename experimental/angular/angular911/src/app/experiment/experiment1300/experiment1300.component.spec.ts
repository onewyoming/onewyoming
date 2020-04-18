import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Experiment1300Component } from './experiment1300.component';

describe('Experiment1300Component', () => {
  let component: Experiment1300Component;
  let fixture: ComponentFixture<Experiment1300Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Experiment1300Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Experiment1300Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
