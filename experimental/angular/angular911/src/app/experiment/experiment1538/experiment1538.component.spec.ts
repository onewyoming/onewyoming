import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Experiment1538Component } from './experiment1538.component';

describe('Experiment1538Component', () => {
  let component: Experiment1538Component;
  let fixture: ComponentFixture<Experiment1538Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Experiment1538Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Experiment1538Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
