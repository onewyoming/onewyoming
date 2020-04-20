import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Experiment1188Component } from './experiment1188.component';

describe('Experiment1188Component', () => {
  let component: Experiment1188Component;
  let fixture: ComponentFixture<Experiment1188Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Experiment1188Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Experiment1188Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
