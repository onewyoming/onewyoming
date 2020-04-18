import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Experiment1266Component } from './experiment1266.component';

describe('Experiment1266Component', () => {
  let component: Experiment1266Component;
  let fixture: ComponentFixture<Experiment1266Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Experiment1266Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Experiment1266Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
