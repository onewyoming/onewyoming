import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Experiment380Component } from './experiment380.component';

describe('Experiment380Component', () => {
  let component: Experiment380Component;
  let fixture: ComponentFixture<Experiment380Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Experiment380Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Experiment380Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
