import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Experiment1628Component } from './experiment1628.component';

describe('Experiment1628Component', () => {
  let component: Experiment1628Component;
  let fixture: ComponentFixture<Experiment1628Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Experiment1628Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Experiment1628Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
