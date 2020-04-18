import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Experiment1824Component } from './experiment1824.component';

describe('Experiment1824Component', () => {
  let component: Experiment1824Component;
  let fixture: ComponentFixture<Experiment1824Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Experiment1824Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Experiment1824Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
