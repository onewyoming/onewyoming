import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Experiment1170Component } from './experiment1170.component';

describe('Experiment1170Component', () => {
  let component: Experiment1170Component;
  let fixture: ComponentFixture<Experiment1170Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Experiment1170Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Experiment1170Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
