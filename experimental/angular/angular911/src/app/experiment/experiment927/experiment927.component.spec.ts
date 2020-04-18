import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Experiment927Component } from './experiment927.component';

describe('Experiment927Component', () => {
  let component: Experiment927Component;
  let fixture: ComponentFixture<Experiment927Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Experiment927Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Experiment927Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
