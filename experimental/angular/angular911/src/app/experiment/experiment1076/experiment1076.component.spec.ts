import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Experiment1076Component } from './experiment1076.component';

describe('Experiment1076Component', () => {
  let component: Experiment1076Component;
  let fixture: ComponentFixture<Experiment1076Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Experiment1076Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Experiment1076Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
