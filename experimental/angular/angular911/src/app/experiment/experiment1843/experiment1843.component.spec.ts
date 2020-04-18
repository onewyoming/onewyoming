import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Experiment1843Component } from './experiment1843.component';

describe('Experiment1843Component', () => {
  let component: Experiment1843Component;
  let fixture: ComponentFixture<Experiment1843Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Experiment1843Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Experiment1843Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
