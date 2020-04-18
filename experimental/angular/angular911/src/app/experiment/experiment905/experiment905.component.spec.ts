import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Experiment905Component } from './experiment905.component';

describe('Experiment905Component', () => {
  let component: Experiment905Component;
  let fixture: ComponentFixture<Experiment905Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Experiment905Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Experiment905Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
