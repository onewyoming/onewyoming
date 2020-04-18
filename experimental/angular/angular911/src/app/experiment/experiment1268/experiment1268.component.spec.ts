import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Experiment1268Component } from './experiment1268.component';

describe('Experiment1268Component', () => {
  let component: Experiment1268Component;
  let fixture: ComponentFixture<Experiment1268Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Experiment1268Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Experiment1268Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
