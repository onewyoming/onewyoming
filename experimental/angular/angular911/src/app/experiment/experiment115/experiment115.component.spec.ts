import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Experiment115Component } from './experiment115.component';

describe('Experiment115Component', () => {
  let component: Experiment115Component;
  let fixture: ComponentFixture<Experiment115Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Experiment115Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Experiment115Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
