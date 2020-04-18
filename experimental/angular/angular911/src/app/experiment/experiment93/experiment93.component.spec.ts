import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Experiment93Component } from './experiment93.component';

describe('Experiment93Component', () => {
  let component: Experiment93Component;
  let fixture: ComponentFixture<Experiment93Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Experiment93Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Experiment93Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
