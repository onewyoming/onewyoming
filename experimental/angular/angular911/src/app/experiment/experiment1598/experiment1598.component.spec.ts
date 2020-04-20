import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Experiment1598Component } from './experiment1598.component';

describe('Experiment1598Component', () => {
  let component: Experiment1598Component;
  let fixture: ComponentFixture<Experiment1598Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Experiment1598Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Experiment1598Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
