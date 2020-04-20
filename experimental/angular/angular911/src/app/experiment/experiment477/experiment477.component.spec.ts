import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Experiment477Component } from './experiment477.component';

describe('Experiment477Component', () => {
  let component: Experiment477Component;
  let fixture: ComponentFixture<Experiment477Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Experiment477Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Experiment477Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
