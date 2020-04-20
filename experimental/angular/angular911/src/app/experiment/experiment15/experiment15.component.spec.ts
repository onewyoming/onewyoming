import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Experiment15Component } from './experiment15.component';

describe('Experiment15Component', () => {
  let component: Experiment15Component;
  let fixture: ComponentFixture<Experiment15Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Experiment15Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Experiment15Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
