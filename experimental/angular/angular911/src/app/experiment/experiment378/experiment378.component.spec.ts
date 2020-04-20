import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Experiment378Component } from './experiment378.component';

describe('Experiment378Component', () => {
  let component: Experiment378Component;
  let fixture: ComponentFixture<Experiment378Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Experiment378Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Experiment378Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
