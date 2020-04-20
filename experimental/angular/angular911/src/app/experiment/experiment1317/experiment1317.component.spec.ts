import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Experiment1317Component } from './experiment1317.component';

describe('Experiment1317Component', () => {
  let component: Experiment1317Component;
  let fixture: ComponentFixture<Experiment1317Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Experiment1317Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Experiment1317Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
