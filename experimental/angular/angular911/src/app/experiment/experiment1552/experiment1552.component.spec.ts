import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Experiment1552Component } from './experiment1552.component';

describe('Experiment1552Component', () => {
  let component: Experiment1552Component;
  let fixture: ComponentFixture<Experiment1552Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Experiment1552Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Experiment1552Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
