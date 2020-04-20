import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Experiment250Component } from './experiment250.component';

describe('Experiment250Component', () => {
  let component: Experiment250Component;
  let fixture: ComponentFixture<Experiment250Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Experiment250Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Experiment250Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
