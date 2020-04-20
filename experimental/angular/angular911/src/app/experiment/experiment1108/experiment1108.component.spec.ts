import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Experiment1108Component } from './experiment1108.component';

describe('Experiment1108Component', () => {
  let component: Experiment1108Component;
  let fixture: ComponentFixture<Experiment1108Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Experiment1108Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Experiment1108Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
