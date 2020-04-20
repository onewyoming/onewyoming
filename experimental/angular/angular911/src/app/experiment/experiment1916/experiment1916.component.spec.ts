import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Experiment1916Component } from './experiment1916.component';

describe('Experiment1916Component', () => {
  let component: Experiment1916Component;
  let fixture: ComponentFixture<Experiment1916Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Experiment1916Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Experiment1916Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
