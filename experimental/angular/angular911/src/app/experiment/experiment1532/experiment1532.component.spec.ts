import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Experiment1532Component } from './experiment1532.component';

describe('Experiment1532Component', () => {
  let component: Experiment1532Component;
  let fixture: ComponentFixture<Experiment1532Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Experiment1532Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Experiment1532Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
