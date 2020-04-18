import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Experiment832Component } from './experiment832.component';

describe('Experiment832Component', () => {
  let component: Experiment832Component;
  let fixture: ComponentFixture<Experiment832Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Experiment832Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Experiment832Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
