import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Experiment1999Component } from './experiment1999.component';

describe('Experiment1999Component', () => {
  let component: Experiment1999Component;
  let fixture: ComponentFixture<Experiment1999Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Experiment1999Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Experiment1999Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
