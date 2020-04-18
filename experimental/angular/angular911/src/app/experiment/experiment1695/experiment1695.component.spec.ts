import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Experiment1695Component } from './experiment1695.component';

describe('Experiment1695Component', () => {
  let component: Experiment1695Component;
  let fixture: ComponentFixture<Experiment1695Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Experiment1695Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Experiment1695Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
