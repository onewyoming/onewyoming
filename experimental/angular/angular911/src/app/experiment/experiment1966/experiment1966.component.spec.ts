import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Experiment1966Component } from './experiment1966.component';

describe('Experiment1966Component', () => {
  let component: Experiment1966Component;
  let fixture: ComponentFixture<Experiment1966Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Experiment1966Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Experiment1966Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
