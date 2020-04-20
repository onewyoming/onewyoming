import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Experiment1144Component } from './experiment1144.component';

describe('Experiment1144Component', () => {
  let component: Experiment1144Component;
  let fixture: ComponentFixture<Experiment1144Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Experiment1144Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Experiment1144Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
