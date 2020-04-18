import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Experiment1064Component } from './experiment1064.component';

describe('Experiment1064Component', () => {
  let component: Experiment1064Component;
  let fixture: ComponentFixture<Experiment1064Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Experiment1064Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Experiment1064Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
