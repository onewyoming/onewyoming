import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Experiment1449Component } from './experiment1449.component';

describe('Experiment1449Component', () => {
  let component: Experiment1449Component;
  let fixture: ComponentFixture<Experiment1449Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Experiment1449Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Experiment1449Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
