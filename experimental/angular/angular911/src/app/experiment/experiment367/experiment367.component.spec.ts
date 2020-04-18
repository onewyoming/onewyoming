import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Experiment367Component } from './experiment367.component';

describe('Experiment367Component', () => {
  let component: Experiment367Component;
  let fixture: ComponentFixture<Experiment367Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Experiment367Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Experiment367Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
