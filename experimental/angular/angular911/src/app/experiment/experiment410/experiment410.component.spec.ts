import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Experiment410Component } from './experiment410.component';

describe('Experiment410Component', () => {
  let component: Experiment410Component;
  let fixture: ComponentFixture<Experiment410Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Experiment410Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Experiment410Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
