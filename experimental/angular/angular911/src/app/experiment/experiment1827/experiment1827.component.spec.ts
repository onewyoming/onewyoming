import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Experiment1827Component } from './experiment1827.component';

describe('Experiment1827Component', () => {
  let component: Experiment1827Component;
  let fixture: ComponentFixture<Experiment1827Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Experiment1827Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Experiment1827Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
