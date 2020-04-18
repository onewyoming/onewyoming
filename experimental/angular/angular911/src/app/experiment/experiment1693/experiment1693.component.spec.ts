import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Experiment1693Component } from './experiment1693.component';

describe('Experiment1693Component', () => {
  let component: Experiment1693Component;
  let fixture: ComponentFixture<Experiment1693Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Experiment1693Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Experiment1693Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
