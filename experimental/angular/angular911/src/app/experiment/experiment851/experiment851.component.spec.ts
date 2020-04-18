import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Experiment851Component } from './experiment851.component';

describe('Experiment851Component', () => {
  let component: Experiment851Component;
  let fixture: ComponentFixture<Experiment851Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Experiment851Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Experiment851Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
