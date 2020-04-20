import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Experiment1992Component } from './experiment1992.component';

describe('Experiment1992Component', () => {
  let component: Experiment1992Component;
  let fixture: ComponentFixture<Experiment1992Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Experiment1992Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Experiment1992Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
