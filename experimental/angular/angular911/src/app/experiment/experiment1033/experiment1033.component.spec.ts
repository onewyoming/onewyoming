import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Experiment1033Component } from './experiment1033.component';

describe('Experiment1033Component', () => {
  let component: Experiment1033Component;
  let fixture: ComponentFixture<Experiment1033Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Experiment1033Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Experiment1033Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
