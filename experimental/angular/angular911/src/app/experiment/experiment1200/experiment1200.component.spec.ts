import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Experiment1200Component } from './experiment1200.component';

describe('Experiment1200Component', () => {
  let component: Experiment1200Component;
  let fixture: ComponentFixture<Experiment1200Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Experiment1200Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Experiment1200Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
