import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Experiment1036Component } from './experiment1036.component';

describe('Experiment1036Component', () => {
  let component: Experiment1036Component;
  let fixture: ComponentFixture<Experiment1036Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Experiment1036Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Experiment1036Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
