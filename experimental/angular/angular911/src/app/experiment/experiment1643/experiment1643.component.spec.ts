import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Experiment1643Component } from './experiment1643.component';

describe('Experiment1643Component', () => {
  let component: Experiment1643Component;
  let fixture: ComponentFixture<Experiment1643Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Experiment1643Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Experiment1643Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
