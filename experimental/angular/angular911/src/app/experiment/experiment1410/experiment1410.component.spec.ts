import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Experiment1410Component } from './experiment1410.component';

describe('Experiment1410Component', () => {
  let component: Experiment1410Component;
  let fixture: ComponentFixture<Experiment1410Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Experiment1410Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Experiment1410Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
