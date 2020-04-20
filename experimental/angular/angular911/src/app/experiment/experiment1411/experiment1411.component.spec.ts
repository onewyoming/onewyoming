import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Experiment1411Component } from './experiment1411.component';

describe('Experiment1411Component', () => {
  let component: Experiment1411Component;
  let fixture: ComponentFixture<Experiment1411Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Experiment1411Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Experiment1411Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
