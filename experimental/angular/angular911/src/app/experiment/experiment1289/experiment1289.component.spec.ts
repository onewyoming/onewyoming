import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Experiment1289Component } from './experiment1289.component';

describe('Experiment1289Component', () => {
  let component: Experiment1289Component;
  let fixture: ComponentFixture<Experiment1289Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Experiment1289Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Experiment1289Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
