import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Experiment1932Component } from './experiment1932.component';

describe('Experiment1932Component', () => {
  let component: Experiment1932Component;
  let fixture: ComponentFixture<Experiment1932Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Experiment1932Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Experiment1932Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
