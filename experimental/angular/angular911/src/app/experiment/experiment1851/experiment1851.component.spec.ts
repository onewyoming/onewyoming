import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Experiment1851Component } from './experiment1851.component';

describe('Experiment1851Component', () => {
  let component: Experiment1851Component;
  let fixture: ComponentFixture<Experiment1851Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Experiment1851Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Experiment1851Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
