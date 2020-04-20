import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Experiment1534Component } from './experiment1534.component';

describe('Experiment1534Component', () => {
  let component: Experiment1534Component;
  let fixture: ComponentFixture<Experiment1534Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Experiment1534Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Experiment1534Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
