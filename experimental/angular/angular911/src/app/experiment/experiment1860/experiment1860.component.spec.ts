import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Experiment1860Component } from './experiment1860.component';

describe('Experiment1860Component', () => {
  let component: Experiment1860Component;
  let fixture: ComponentFixture<Experiment1860Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Experiment1860Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Experiment1860Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
