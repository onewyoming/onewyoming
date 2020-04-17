import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Experiment9Component } from './experiment9.component';

describe('Experiment9Component', () => {
  let component: Experiment9Component;
  let fixture: ComponentFixture<Experiment9Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Experiment9Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Experiment9Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
