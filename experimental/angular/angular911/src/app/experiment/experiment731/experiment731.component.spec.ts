import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Experiment731Component } from './experiment731.component';

describe('Experiment731Component', () => {
  let component: Experiment731Component;
  let fixture: ComponentFixture<Experiment731Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Experiment731Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Experiment731Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
