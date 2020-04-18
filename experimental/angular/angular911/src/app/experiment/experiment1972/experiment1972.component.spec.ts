import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Experiment1972Component } from './experiment1972.component';

describe('Experiment1972Component', () => {
  let component: Experiment1972Component;
  let fixture: ComponentFixture<Experiment1972Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Experiment1972Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Experiment1972Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
