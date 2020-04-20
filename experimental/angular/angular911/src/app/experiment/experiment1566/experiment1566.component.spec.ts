import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Experiment1566Component } from './experiment1566.component';

describe('Experiment1566Component', () => {
  let component: Experiment1566Component;
  let fixture: ComponentFixture<Experiment1566Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Experiment1566Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Experiment1566Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
