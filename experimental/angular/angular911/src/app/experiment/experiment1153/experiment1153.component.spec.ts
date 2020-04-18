import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Experiment1153Component } from './experiment1153.component';

describe('Experiment1153Component', () => {
  let component: Experiment1153Component;
  let fixture: ComponentFixture<Experiment1153Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Experiment1153Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Experiment1153Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
