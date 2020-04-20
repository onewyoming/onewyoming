import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Experiment85Component } from './experiment85.component';

describe('Experiment85Component', () => {
  let component: Experiment85Component;
  let fixture: ComponentFixture<Experiment85Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Experiment85Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Experiment85Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
