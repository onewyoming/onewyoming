import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Experiment1446Component } from './experiment1446.component';

describe('Experiment1446Component', () => {
  let component: Experiment1446Component;
  let fixture: ComponentFixture<Experiment1446Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Experiment1446Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Experiment1446Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
