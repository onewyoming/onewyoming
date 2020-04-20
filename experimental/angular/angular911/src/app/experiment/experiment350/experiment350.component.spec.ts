import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Experiment350Component } from './experiment350.component';

describe('Experiment350Component', () => {
  let component: Experiment350Component;
  let fixture: ComponentFixture<Experiment350Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Experiment350Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Experiment350Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
