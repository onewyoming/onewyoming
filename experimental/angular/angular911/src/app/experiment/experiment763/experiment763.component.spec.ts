import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Experiment763Component } from './experiment763.component';

describe('Experiment763Component', () => {
  let component: Experiment763Component;
  let fixture: ComponentFixture<Experiment763Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Experiment763Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Experiment763Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
