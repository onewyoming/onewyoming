import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Experiment1904Component } from './experiment1904.component';

describe('Experiment1904Component', () => {
  let component: Experiment1904Component;
  let fixture: ComponentFixture<Experiment1904Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Experiment1904Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Experiment1904Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
