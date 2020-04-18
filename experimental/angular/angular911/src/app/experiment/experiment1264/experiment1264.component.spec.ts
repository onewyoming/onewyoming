import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Experiment1264Component } from './experiment1264.component';

describe('Experiment1264Component', () => {
  let component: Experiment1264Component;
  let fixture: ComponentFixture<Experiment1264Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Experiment1264Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Experiment1264Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
