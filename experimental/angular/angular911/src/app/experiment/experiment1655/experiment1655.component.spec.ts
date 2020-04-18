import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Experiment1655Component } from './experiment1655.component';

describe('Experiment1655Component', () => {
  let component: Experiment1655Component;
  let fixture: ComponentFixture<Experiment1655Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Experiment1655Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Experiment1655Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
