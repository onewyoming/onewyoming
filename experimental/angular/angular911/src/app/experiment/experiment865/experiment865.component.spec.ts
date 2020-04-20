import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Experiment865Component } from './experiment865.component';

describe('Experiment865Component', () => {
  let component: Experiment865Component;
  let fixture: ComponentFixture<Experiment865Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Experiment865Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Experiment865Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
