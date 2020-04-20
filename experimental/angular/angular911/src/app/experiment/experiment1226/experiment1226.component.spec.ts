import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Experiment1226Component } from './experiment1226.component';

describe('Experiment1226Component', () => {
  let component: Experiment1226Component;
  let fixture: ComponentFixture<Experiment1226Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Experiment1226Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Experiment1226Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
