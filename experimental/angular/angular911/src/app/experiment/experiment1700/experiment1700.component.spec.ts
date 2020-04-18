import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Experiment1700Component } from './experiment1700.component';

describe('Experiment1700Component', () => {
  let component: Experiment1700Component;
  let fixture: ComponentFixture<Experiment1700Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Experiment1700Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Experiment1700Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
