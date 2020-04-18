import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Experiment421Component } from './experiment421.component';

describe('Experiment421Component', () => {
  let component: Experiment421Component;
  let fixture: ComponentFixture<Experiment421Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Experiment421Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Experiment421Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
