import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Experiment1005Component } from './experiment1005.component';

describe('Experiment1005Component', () => {
  let component: Experiment1005Component;
  let fixture: ComponentFixture<Experiment1005Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Experiment1005Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Experiment1005Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
