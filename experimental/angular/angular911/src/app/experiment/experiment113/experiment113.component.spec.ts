import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Experiment113Component } from './experiment113.component';

describe('Experiment113Component', () => {
  let component: Experiment113Component;
  let fixture: ComponentFixture<Experiment113Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Experiment113Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Experiment113Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
