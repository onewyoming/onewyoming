import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Experiment1868Component } from './experiment1868.component';

describe('Experiment1868Component', () => {
  let component: Experiment1868Component;
  let fixture: ComponentFixture<Experiment1868Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Experiment1868Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Experiment1868Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
