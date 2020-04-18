import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Experiment1772Component } from './experiment1772.component';

describe('Experiment1772Component', () => {
  let component: Experiment1772Component;
  let fixture: ComponentFixture<Experiment1772Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Experiment1772Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Experiment1772Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
