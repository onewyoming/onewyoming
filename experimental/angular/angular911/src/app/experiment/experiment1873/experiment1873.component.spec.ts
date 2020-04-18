import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Experiment1873Component } from './experiment1873.component';

describe('Experiment1873Component', () => {
  let component: Experiment1873Component;
  let fixture: ComponentFixture<Experiment1873Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Experiment1873Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Experiment1873Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
