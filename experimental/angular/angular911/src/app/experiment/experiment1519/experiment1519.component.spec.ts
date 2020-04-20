import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Experiment1519Component } from './experiment1519.component';

describe('Experiment1519Component', () => {
  let component: Experiment1519Component;
  let fixture: ComponentFixture<Experiment1519Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Experiment1519Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Experiment1519Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
