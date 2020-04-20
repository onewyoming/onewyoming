import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Experiment1922Component } from './experiment1922.component';

describe('Experiment1922Component', () => {
  let component: Experiment1922Component;
  let fixture: ComponentFixture<Experiment1922Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Experiment1922Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Experiment1922Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
