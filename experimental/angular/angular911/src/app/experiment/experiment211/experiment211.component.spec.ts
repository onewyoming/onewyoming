import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Experiment211Component } from './experiment211.component';

describe('Experiment211Component', () => {
  let component: Experiment211Component;
  let fixture: ComponentFixture<Experiment211Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Experiment211Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Experiment211Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
