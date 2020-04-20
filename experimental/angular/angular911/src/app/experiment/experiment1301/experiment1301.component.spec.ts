import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Experiment1301Component } from './experiment1301.component';

describe('Experiment1301Component', () => {
  let component: Experiment1301Component;
  let fixture: ComponentFixture<Experiment1301Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Experiment1301Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Experiment1301Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
