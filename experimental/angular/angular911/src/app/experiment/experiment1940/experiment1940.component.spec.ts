import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Experiment1940Component } from './experiment1940.component';

describe('Experiment1940Component', () => {
  let component: Experiment1940Component;
  let fixture: ComponentFixture<Experiment1940Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Experiment1940Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Experiment1940Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
