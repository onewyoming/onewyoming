import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Experiment285Component } from './experiment285.component';

describe('Experiment285Component', () => {
  let component: Experiment285Component;
  let fixture: ComponentFixture<Experiment285Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Experiment285Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Experiment285Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
