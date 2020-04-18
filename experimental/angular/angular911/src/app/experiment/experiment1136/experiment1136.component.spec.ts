import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Experiment1136Component } from './experiment1136.component';

describe('Experiment1136Component', () => {
  let component: Experiment1136Component;
  let fixture: ComponentFixture<Experiment1136Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Experiment1136Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Experiment1136Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
