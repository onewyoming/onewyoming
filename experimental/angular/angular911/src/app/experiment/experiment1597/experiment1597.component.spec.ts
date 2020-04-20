import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Experiment1597Component } from './experiment1597.component';

describe('Experiment1597Component', () => {
  let component: Experiment1597Component;
  let fixture: ComponentFixture<Experiment1597Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Experiment1597Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Experiment1597Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
