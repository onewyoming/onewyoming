import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Experiment1978Component } from './experiment1978.component';

describe('Experiment1978Component', () => {
  let component: Experiment1978Component;
  let fixture: ComponentFixture<Experiment1978Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Experiment1978Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Experiment1978Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
