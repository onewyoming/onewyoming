import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Experiment1619Component } from './experiment1619.component';

describe('Experiment1619Component', () => {
  let component: Experiment1619Component;
  let fixture: ComponentFixture<Experiment1619Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Experiment1619Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Experiment1619Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
