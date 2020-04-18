import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Experiment1204Component } from './experiment1204.component';

describe('Experiment1204Component', () => {
  let component: Experiment1204Component;
  let fixture: ComponentFixture<Experiment1204Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Experiment1204Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Experiment1204Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
