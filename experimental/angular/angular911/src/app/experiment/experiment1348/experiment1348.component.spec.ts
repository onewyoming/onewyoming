import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Experiment1348Component } from './experiment1348.component';

describe('Experiment1348Component', () => {
  let component: Experiment1348Component;
  let fixture: ComponentFixture<Experiment1348Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Experiment1348Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Experiment1348Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
