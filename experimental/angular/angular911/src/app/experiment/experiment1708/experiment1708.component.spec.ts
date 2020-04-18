import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Experiment1708Component } from './experiment1708.component';

describe('Experiment1708Component', () => {
  let component: Experiment1708Component;
  let fixture: ComponentFixture<Experiment1708Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Experiment1708Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Experiment1708Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
