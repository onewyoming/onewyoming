import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Experiment1415Component } from './experiment1415.component';

describe('Experiment1415Component', () => {
  let component: Experiment1415Component;
  let fixture: ComponentFixture<Experiment1415Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Experiment1415Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Experiment1415Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
