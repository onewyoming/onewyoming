import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Experiment1132Component } from './experiment1132.component';

describe('Experiment1132Component', () => {
  let component: Experiment1132Component;
  let fixture: ComponentFixture<Experiment1132Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Experiment1132Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Experiment1132Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
