import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Experiment1592Component } from './experiment1592.component';

describe('Experiment1592Component', () => {
  let component: Experiment1592Component;
  let fixture: ComponentFixture<Experiment1592Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Experiment1592Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Experiment1592Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
