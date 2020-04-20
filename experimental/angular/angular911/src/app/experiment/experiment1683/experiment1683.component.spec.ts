import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Experiment1683Component } from './experiment1683.component';

describe('Experiment1683Component', () => {
  let component: Experiment1683Component;
  let fixture: ComponentFixture<Experiment1683Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Experiment1683Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Experiment1683Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
