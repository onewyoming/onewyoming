import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Experiment1696Component } from './experiment1696.component';

describe('Experiment1696Component', () => {
  let component: Experiment1696Component;
  let fixture: ComponentFixture<Experiment1696Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Experiment1696Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Experiment1696Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
