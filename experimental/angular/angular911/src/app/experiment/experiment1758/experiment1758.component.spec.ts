import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Experiment1758Component } from './experiment1758.component';

describe('Experiment1758Component', () => {
  let component: Experiment1758Component;
  let fixture: ComponentFixture<Experiment1758Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Experiment1758Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Experiment1758Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
