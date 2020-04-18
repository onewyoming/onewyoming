import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Experiment1568Component } from './experiment1568.component';

describe('Experiment1568Component', () => {
  let component: Experiment1568Component;
  let fixture: ComponentFixture<Experiment1568Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Experiment1568Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Experiment1568Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
