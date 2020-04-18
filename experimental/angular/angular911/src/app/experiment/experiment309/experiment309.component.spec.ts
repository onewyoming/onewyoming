import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Experiment309Component } from './experiment309.component';

describe('Experiment309Component', () => {
  let component: Experiment309Component;
  let fixture: ComponentFixture<Experiment309Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Experiment309Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Experiment309Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
