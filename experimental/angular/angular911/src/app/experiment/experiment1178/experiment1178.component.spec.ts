import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Experiment1178Component } from './experiment1178.component';

describe('Experiment1178Component', () => {
  let component: Experiment1178Component;
  let fixture: ComponentFixture<Experiment1178Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Experiment1178Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Experiment1178Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
