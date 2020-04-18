import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Experiment854Component } from './experiment854.component';

describe('Experiment854Component', () => {
  let component: Experiment854Component;
  let fixture: ComponentFixture<Experiment854Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Experiment854Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Experiment854Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
