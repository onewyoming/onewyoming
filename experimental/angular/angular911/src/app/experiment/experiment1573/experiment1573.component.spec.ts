import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Experiment1573Component } from './experiment1573.component';

describe('Experiment1573Component', () => {
  let component: Experiment1573Component;
  let fixture: ComponentFixture<Experiment1573Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Experiment1573Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Experiment1573Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
