import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Experiment818Component } from './experiment818.component';

describe('Experiment818Component', () => {
  let component: Experiment818Component;
  let fixture: ComponentFixture<Experiment818Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Experiment818Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Experiment818Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
