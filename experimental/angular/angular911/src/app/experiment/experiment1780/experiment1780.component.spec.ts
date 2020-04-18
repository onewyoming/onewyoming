import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Experiment1780Component } from './experiment1780.component';

describe('Experiment1780Component', () => {
  let component: Experiment1780Component;
  let fixture: ComponentFixture<Experiment1780Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Experiment1780Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Experiment1780Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
