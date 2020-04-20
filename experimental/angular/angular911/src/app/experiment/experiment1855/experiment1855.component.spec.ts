import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Experiment1855Component } from './experiment1855.component';

describe('Experiment1855Component', () => {
  let component: Experiment1855Component;
  let fixture: ComponentFixture<Experiment1855Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Experiment1855Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Experiment1855Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
