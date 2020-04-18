import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Experiment1973Component } from './experiment1973.component';

describe('Experiment1973Component', () => {
  let component: Experiment1973Component;
  let fixture: ComponentFixture<Experiment1973Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Experiment1973Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Experiment1973Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
