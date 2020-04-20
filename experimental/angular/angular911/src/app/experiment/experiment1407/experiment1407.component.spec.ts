import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Experiment1407Component } from './experiment1407.component';

describe('Experiment1407Component', () => {
  let component: Experiment1407Component;
  let fixture: ComponentFixture<Experiment1407Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Experiment1407Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Experiment1407Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
