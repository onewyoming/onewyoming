import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Experiment1771Component } from './experiment1771.component';

describe('Experiment1771Component', () => {
  let component: Experiment1771Component;
  let fixture: ComponentFixture<Experiment1771Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Experiment1771Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Experiment1771Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
