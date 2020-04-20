import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Experiment1442Component } from './experiment1442.component';

describe('Experiment1442Component', () => {
  let component: Experiment1442Component;
  let fixture: ComponentFixture<Experiment1442Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Experiment1442Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Experiment1442Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
