import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Experiment999Component } from './experiment999.component';

describe('Experiment999Component', () => {
  let component: Experiment999Component;
  let fixture: ComponentFixture<Experiment999Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Experiment999Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Experiment999Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
