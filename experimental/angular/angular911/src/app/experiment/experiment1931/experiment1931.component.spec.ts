import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Experiment1931Component } from './experiment1931.component';

describe('Experiment1931Component', () => {
  let component: Experiment1931Component;
  let fixture: ComponentFixture<Experiment1931Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Experiment1931Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Experiment1931Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
