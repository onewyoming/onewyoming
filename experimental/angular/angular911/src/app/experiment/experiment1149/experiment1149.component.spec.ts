import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Experiment1149Component } from './experiment1149.component';

describe('Experiment1149Component', () => {
  let component: Experiment1149Component;
  let fixture: ComponentFixture<Experiment1149Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Experiment1149Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Experiment1149Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
