import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Experiment1680Component } from './experiment1680.component';

describe('Experiment1680Component', () => {
  let component: Experiment1680Component;
  let fixture: ComponentFixture<Experiment1680Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Experiment1680Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Experiment1680Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
