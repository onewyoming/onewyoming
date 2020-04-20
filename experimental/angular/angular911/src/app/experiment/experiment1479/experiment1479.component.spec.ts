import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Experiment1479Component } from './experiment1479.component';

describe('Experiment1479Component', () => {
  let component: Experiment1479Component;
  let fixture: ComponentFixture<Experiment1479Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Experiment1479Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Experiment1479Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
