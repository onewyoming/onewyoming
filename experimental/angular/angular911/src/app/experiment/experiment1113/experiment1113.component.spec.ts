import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Experiment1113Component } from './experiment1113.component';

describe('Experiment1113Component', () => {
  let component: Experiment1113Component;
  let fixture: ComponentFixture<Experiment1113Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Experiment1113Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Experiment1113Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
