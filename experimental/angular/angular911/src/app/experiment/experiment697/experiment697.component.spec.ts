import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Experiment697Component } from './experiment697.component';

describe('Experiment697Component', () => {
  let component: Experiment697Component;
  let fixture: ComponentFixture<Experiment697Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Experiment697Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Experiment697Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
