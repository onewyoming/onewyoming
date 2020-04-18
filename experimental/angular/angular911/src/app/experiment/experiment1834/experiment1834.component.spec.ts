import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Experiment1834Component } from './experiment1834.component';

describe('Experiment1834Component', () => {
  let component: Experiment1834Component;
  let fixture: ComponentFixture<Experiment1834Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Experiment1834Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Experiment1834Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
