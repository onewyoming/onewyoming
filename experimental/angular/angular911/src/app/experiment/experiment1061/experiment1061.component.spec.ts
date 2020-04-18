import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Experiment1061Component } from './experiment1061.component';

describe('Experiment1061Component', () => {
  let component: Experiment1061Component;
  let fixture: ComponentFixture<Experiment1061Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Experiment1061Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Experiment1061Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
