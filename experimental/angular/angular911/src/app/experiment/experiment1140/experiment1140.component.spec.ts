import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Experiment1140Component } from './experiment1140.component';

describe('Experiment1140Component', () => {
  let component: Experiment1140Component;
  let fixture: ComponentFixture<Experiment1140Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Experiment1140Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Experiment1140Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
