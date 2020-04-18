import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Experiment1099Component } from './experiment1099.component';

describe('Experiment1099Component', () => {
  let component: Experiment1099Component;
  let fixture: ComponentFixture<Experiment1099Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Experiment1099Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Experiment1099Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
