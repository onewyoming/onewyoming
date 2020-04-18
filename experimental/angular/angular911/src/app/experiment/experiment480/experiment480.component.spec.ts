import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Experiment480Component } from './experiment480.component';

describe('Experiment480Component', () => {
  let component: Experiment480Component;
  let fixture: ComponentFixture<Experiment480Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Experiment480Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Experiment480Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
