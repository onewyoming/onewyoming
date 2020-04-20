import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Experiment1899Component } from './experiment1899.component';

describe('Experiment1899Component', () => {
  let component: Experiment1899Component;
  let fixture: ComponentFixture<Experiment1899Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Experiment1899Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Experiment1899Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
