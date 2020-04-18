import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Experiment1198Component } from './experiment1198.component';

describe('Experiment1198Component', () => {
  let component: Experiment1198Component;
  let fixture: ComponentFixture<Experiment1198Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Experiment1198Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Experiment1198Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
