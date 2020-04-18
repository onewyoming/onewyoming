import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Experiment1535Component } from './experiment1535.component';

describe('Experiment1535Component', () => {
  let component: Experiment1535Component;
  let fixture: ComponentFixture<Experiment1535Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Experiment1535Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Experiment1535Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
