import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Experiment1133Component } from './experiment1133.component';

describe('Experiment1133Component', () => {
  let component: Experiment1133Component;
  let fixture: ComponentFixture<Experiment1133Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Experiment1133Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Experiment1133Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
