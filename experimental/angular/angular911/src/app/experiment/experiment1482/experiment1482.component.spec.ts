import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Experiment1482Component } from './experiment1482.component';

describe('Experiment1482Component', () => {
  let component: Experiment1482Component;
  let fixture: ComponentFixture<Experiment1482Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Experiment1482Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Experiment1482Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
