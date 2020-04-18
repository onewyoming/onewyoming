import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Experiment1722Component } from './experiment1722.component';

describe('Experiment1722Component', () => {
  let component: Experiment1722Component;
  let fixture: ComponentFixture<Experiment1722Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Experiment1722Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Experiment1722Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
