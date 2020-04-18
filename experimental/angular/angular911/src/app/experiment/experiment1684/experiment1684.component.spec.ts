import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Experiment1684Component } from './experiment1684.component';

describe('Experiment1684Component', () => {
  let component: Experiment1684Component;
  let fixture: ComponentFixture<Experiment1684Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Experiment1684Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Experiment1684Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
