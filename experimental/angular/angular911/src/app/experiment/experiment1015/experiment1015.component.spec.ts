import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Experiment1015Component } from './experiment1015.component';

describe('Experiment1015Component', () => {
  let component: Experiment1015Component;
  let fixture: ComponentFixture<Experiment1015Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Experiment1015Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Experiment1015Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
