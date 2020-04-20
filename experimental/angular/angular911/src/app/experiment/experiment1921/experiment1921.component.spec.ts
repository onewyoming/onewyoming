import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Experiment1921Component } from './experiment1921.component';

describe('Experiment1921Component', () => {
  let component: Experiment1921Component;
  let fixture: ComponentFixture<Experiment1921Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Experiment1921Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Experiment1921Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
