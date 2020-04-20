import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Experiment933Component } from './experiment933.component';

describe('Experiment933Component', () => {
  let component: Experiment933Component;
  let fixture: ComponentFixture<Experiment933Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Experiment933Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Experiment933Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
