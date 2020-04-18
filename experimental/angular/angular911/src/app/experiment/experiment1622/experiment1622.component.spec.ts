import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Experiment1622Component } from './experiment1622.component';

describe('Experiment1622Component', () => {
  let component: Experiment1622Component;
  let fixture: ComponentFixture<Experiment1622Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Experiment1622Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Experiment1622Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
