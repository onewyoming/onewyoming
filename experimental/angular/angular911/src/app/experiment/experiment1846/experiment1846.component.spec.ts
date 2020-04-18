import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Experiment1846Component } from './experiment1846.component';

describe('Experiment1846Component', () => {
  let component: Experiment1846Component;
  let fixture: ComponentFixture<Experiment1846Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Experiment1846Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Experiment1846Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
