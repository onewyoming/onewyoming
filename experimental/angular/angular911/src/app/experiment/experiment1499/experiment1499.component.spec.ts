import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Experiment1499Component } from './experiment1499.component';

describe('Experiment1499Component', () => {
  let component: Experiment1499Component;
  let fixture: ComponentFixture<Experiment1499Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Experiment1499Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Experiment1499Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
