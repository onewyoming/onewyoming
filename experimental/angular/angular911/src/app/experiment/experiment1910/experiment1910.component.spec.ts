import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Experiment1910Component } from './experiment1910.component';

describe('Experiment1910Component', () => {
  let component: Experiment1910Component;
  let fixture: ComponentFixture<Experiment1910Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Experiment1910Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Experiment1910Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
