import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Experiment1645Component } from './experiment1645.component';

describe('Experiment1645Component', () => {
  let component: Experiment1645Component;
  let fixture: ComponentFixture<Experiment1645Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Experiment1645Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Experiment1645Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
