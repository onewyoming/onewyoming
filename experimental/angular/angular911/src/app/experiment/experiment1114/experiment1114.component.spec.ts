import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Experiment1114Component } from './experiment1114.component';

describe('Experiment1114Component', () => {
  let component: Experiment1114Component;
  let fixture: ComponentFixture<Experiment1114Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Experiment1114Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Experiment1114Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
