import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Experiment801Component } from './experiment801.component';

describe('Experiment801Component', () => {
  let component: Experiment801Component;
  let fixture: ComponentFixture<Experiment801Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Experiment801Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Experiment801Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
