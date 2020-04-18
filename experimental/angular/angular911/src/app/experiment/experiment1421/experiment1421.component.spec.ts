import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Experiment1421Component } from './experiment1421.component';

describe('Experiment1421Component', () => {
  let component: Experiment1421Component;
  let fixture: ComponentFixture<Experiment1421Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Experiment1421Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Experiment1421Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
