import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Experiment1641Component } from './experiment1641.component';

describe('Experiment1641Component', () => {
  let component: Experiment1641Component;
  let fixture: ComponentFixture<Experiment1641Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Experiment1641Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Experiment1641Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
