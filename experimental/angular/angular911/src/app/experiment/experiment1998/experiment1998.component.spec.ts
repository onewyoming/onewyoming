import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Experiment1998Component } from './experiment1998.component';

describe('Experiment1998Component', () => {
  let component: Experiment1998Component;
  let fixture: ComponentFixture<Experiment1998Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Experiment1998Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Experiment1998Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
