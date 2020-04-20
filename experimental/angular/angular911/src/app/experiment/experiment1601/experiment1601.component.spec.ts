import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Experiment1601Component } from './experiment1601.component';

describe('Experiment1601Component', () => {
  let component: Experiment1601Component;
  let fixture: ComponentFixture<Experiment1601Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Experiment1601Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Experiment1601Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
