import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Experiment1180Component } from './experiment1180.component';

describe('Experiment1180Component', () => {
  let component: Experiment1180Component;
  let fixture: ComponentFixture<Experiment1180Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Experiment1180Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Experiment1180Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
