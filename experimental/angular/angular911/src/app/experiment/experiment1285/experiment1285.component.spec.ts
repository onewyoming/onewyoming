import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Experiment1285Component } from './experiment1285.component';

describe('Experiment1285Component', () => {
  let component: Experiment1285Component;
  let fixture: ComponentFixture<Experiment1285Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Experiment1285Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Experiment1285Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
