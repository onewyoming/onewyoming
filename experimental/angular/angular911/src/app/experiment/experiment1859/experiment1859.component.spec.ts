import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Experiment1859Component } from './experiment1859.component';

describe('Experiment1859Component', () => {
  let component: Experiment1859Component;
  let fixture: ComponentFixture<Experiment1859Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Experiment1859Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Experiment1859Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
