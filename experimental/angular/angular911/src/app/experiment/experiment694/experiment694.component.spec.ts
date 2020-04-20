import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Experiment694Component } from './experiment694.component';

describe('Experiment694Component', () => {
  let component: Experiment694Component;
  let fixture: ComponentFixture<Experiment694Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Experiment694Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Experiment694Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
