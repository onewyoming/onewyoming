import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Experiment951Component } from './experiment951.component';

describe('Experiment951Component', () => {
  let component: Experiment951Component;
  let fixture: ComponentFixture<Experiment951Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Experiment951Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Experiment951Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
