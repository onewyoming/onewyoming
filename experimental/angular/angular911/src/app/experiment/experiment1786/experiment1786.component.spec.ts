import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Experiment1786Component } from './experiment1786.component';

describe('Experiment1786Component', () => {
  let component: Experiment1786Component;
  let fixture: ComponentFixture<Experiment1786Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Experiment1786Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Experiment1786Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
