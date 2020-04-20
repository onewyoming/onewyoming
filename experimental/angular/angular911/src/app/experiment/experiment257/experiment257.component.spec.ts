import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Experiment257Component } from './experiment257.component';

describe('Experiment257Component', () => {
  let component: Experiment257Component;
  let fixture: ComponentFixture<Experiment257Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Experiment257Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Experiment257Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
