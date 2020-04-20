import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Experiment1121Component } from './experiment1121.component';

describe('Experiment1121Component', () => {
  let component: Experiment1121Component;
  let fixture: ComponentFixture<Experiment1121Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Experiment1121Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Experiment1121Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
