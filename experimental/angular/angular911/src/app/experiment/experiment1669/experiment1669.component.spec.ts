import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Experiment1669Component } from './experiment1669.component';

describe('Experiment1669Component', () => {
  let component: Experiment1669Component;
  let fixture: ComponentFixture<Experiment1669Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Experiment1669Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Experiment1669Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
