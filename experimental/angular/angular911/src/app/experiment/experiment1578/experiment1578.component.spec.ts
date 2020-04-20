import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Experiment1578Component } from './experiment1578.component';

describe('Experiment1578Component', () => {
  let component: Experiment1578Component;
  let fixture: ComponentFixture<Experiment1578Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Experiment1578Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Experiment1578Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
