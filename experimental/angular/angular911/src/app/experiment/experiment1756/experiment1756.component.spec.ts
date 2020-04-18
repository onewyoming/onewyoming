import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Experiment1756Component } from './experiment1756.component';

describe('Experiment1756Component', () => {
  let component: Experiment1756Component;
  let fixture: ComponentFixture<Experiment1756Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Experiment1756Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Experiment1756Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
