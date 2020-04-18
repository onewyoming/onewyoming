import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Experiment1235Component } from './experiment1235.component';

describe('Experiment1235Component', () => {
  let component: Experiment1235Component;
  let fixture: ComponentFixture<Experiment1235Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Experiment1235Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Experiment1235Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
