import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Experiment1902Component } from './experiment1902.component';

describe('Experiment1902Component', () => {
  let component: Experiment1902Component;
  let fixture: ComponentFixture<Experiment1902Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Experiment1902Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Experiment1902Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
