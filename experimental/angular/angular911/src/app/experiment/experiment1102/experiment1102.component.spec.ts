import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Experiment1102Component } from './experiment1102.component';

describe('Experiment1102Component', () => {
  let component: Experiment1102Component;
  let fixture: ComponentFixture<Experiment1102Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Experiment1102Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Experiment1102Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
