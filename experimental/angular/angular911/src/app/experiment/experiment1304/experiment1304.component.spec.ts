import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Experiment1304Component } from './experiment1304.component';

describe('Experiment1304Component', () => {
  let component: Experiment1304Component;
  let fixture: ComponentFixture<Experiment1304Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Experiment1304Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Experiment1304Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
