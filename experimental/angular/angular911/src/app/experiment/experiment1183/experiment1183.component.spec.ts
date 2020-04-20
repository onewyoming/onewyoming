import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Experiment1183Component } from './experiment1183.component';

describe('Experiment1183Component', () => {
  let component: Experiment1183Component;
  let fixture: ComponentFixture<Experiment1183Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Experiment1183Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Experiment1183Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
