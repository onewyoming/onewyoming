import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Experiment1359Component } from './experiment1359.component';

describe('Experiment1359Component', () => {
  let component: Experiment1359Component;
  let fixture: ComponentFixture<Experiment1359Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Experiment1359Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Experiment1359Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
