import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Experiment1035Component } from './experiment1035.component';

describe('Experiment1035Component', () => {
  let component: Experiment1035Component;
  let fixture: ComponentFixture<Experiment1035Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Experiment1035Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Experiment1035Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
