import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Experiment1371Component } from './experiment1371.component';

describe('Experiment1371Component', () => {
  let component: Experiment1371Component;
  let fixture: ComponentFixture<Experiment1371Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Experiment1371Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Experiment1371Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
