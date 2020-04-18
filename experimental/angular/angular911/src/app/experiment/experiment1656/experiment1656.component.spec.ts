import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Experiment1656Component } from './experiment1656.component';

describe('Experiment1656Component', () => {
  let component: Experiment1656Component;
  let fixture: ComponentFixture<Experiment1656Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Experiment1656Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Experiment1656Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
