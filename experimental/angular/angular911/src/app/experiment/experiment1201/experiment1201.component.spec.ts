import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Experiment1201Component } from './experiment1201.component';

describe('Experiment1201Component', () => {
  let component: Experiment1201Component;
  let fixture: ComponentFixture<Experiment1201Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Experiment1201Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Experiment1201Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
