import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Experiment298Component } from './experiment298.component';

describe('Experiment298Component', () => {
  let component: Experiment298Component;
  let fixture: ComponentFixture<Experiment298Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Experiment298Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Experiment298Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
