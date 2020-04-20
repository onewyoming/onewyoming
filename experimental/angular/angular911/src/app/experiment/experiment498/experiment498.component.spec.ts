import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Experiment498Component } from './experiment498.component';

describe('Experiment498Component', () => {
  let component: Experiment498Component;
  let fixture: ComponentFixture<Experiment498Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Experiment498Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Experiment498Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
