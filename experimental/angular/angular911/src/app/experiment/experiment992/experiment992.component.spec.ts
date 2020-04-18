import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Experiment992Component } from './experiment992.component';

describe('Experiment992Component', () => {
  let component: Experiment992Component;
  let fixture: ComponentFixture<Experiment992Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Experiment992Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Experiment992Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
