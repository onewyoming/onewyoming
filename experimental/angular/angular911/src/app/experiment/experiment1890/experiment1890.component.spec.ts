import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Experiment1890Component } from './experiment1890.component';

describe('Experiment1890Component', () => {
  let component: Experiment1890Component;
  let fixture: ComponentFixture<Experiment1890Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Experiment1890Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Experiment1890Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
