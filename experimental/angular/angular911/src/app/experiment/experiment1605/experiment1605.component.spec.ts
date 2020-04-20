import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Experiment1605Component } from './experiment1605.component';

describe('Experiment1605Component', () => {
  let component: Experiment1605Component;
  let fixture: ComponentFixture<Experiment1605Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Experiment1605Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Experiment1605Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
