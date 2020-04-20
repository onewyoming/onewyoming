import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Experiment429Component } from './experiment429.component';

describe('Experiment429Component', () => {
  let component: Experiment429Component;
  let fixture: ComponentFixture<Experiment429Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Experiment429Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Experiment429Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
