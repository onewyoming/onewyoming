import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Experiment307Component } from './experiment307.component';

describe('Experiment307Component', () => {
  let component: Experiment307Component;
  let fixture: ComponentFixture<Experiment307Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Experiment307Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Experiment307Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
