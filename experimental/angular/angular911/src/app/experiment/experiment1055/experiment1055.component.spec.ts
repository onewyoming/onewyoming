import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Experiment1055Component } from './experiment1055.component';

describe('Experiment1055Component', () => {
  let component: Experiment1055Component;
  let fixture: ComponentFixture<Experiment1055Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Experiment1055Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Experiment1055Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
