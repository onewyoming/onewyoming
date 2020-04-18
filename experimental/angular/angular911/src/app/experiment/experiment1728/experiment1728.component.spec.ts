import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Experiment1728Component } from './experiment1728.component';

describe('Experiment1728Component', () => {
  let component: Experiment1728Component;
  let fixture: ComponentFixture<Experiment1728Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Experiment1728Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Experiment1728Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
