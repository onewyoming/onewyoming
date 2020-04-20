import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Experiment1294Component } from './experiment1294.component';

describe('Experiment1294Component', () => {
  let component: Experiment1294Component;
  let fixture: ComponentFixture<Experiment1294Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Experiment1294Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Experiment1294Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
