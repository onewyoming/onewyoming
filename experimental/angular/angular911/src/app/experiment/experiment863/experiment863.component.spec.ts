import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Experiment863Component } from './experiment863.component';

describe('Experiment863Component', () => {
  let component: Experiment863Component;
  let fixture: ComponentFixture<Experiment863Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Experiment863Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Experiment863Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
