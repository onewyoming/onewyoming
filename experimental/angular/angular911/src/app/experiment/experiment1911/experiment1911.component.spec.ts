import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Experiment1911Component } from './experiment1911.component';

describe('Experiment1911Component', () => {
  let component: Experiment1911Component;
  let fixture: ComponentFixture<Experiment1911Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Experiment1911Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Experiment1911Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
