import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Experiment49Component } from './experiment49.component';

describe('Experiment49Component', () => {
  let component: Experiment49Component;
  let fixture: ComponentFixture<Experiment49Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Experiment49Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Experiment49Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
