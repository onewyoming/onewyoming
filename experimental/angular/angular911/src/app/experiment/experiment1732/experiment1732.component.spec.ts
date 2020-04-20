import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Experiment1732Component } from './experiment1732.component';

describe('Experiment1732Component', () => {
  let component: Experiment1732Component;
  let fixture: ComponentFixture<Experiment1732Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Experiment1732Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Experiment1732Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
