import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Experiment465Component } from './experiment465.component';

describe('Experiment465Component', () => {
  let component: Experiment465Component;
  let fixture: ComponentFixture<Experiment465Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Experiment465Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Experiment465Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
