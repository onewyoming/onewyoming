import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Experiment1768Component } from './experiment1768.component';

describe('Experiment1768Component', () => {
  let component: Experiment1768Component;
  let fixture: ComponentFixture<Experiment1768Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Experiment1768Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Experiment1768Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
