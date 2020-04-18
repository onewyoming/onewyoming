import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Experiment1896Component } from './experiment1896.component';

describe('Experiment1896Component', () => {
  let component: Experiment1896Component;
  let fixture: ComponentFixture<Experiment1896Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Experiment1896Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Experiment1896Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
