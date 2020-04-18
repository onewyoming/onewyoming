import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Experiment1357Component } from './experiment1357.component';

describe('Experiment1357Component', () => {
  let component: Experiment1357Component;
  let fixture: ComponentFixture<Experiment1357Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Experiment1357Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Experiment1357Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
