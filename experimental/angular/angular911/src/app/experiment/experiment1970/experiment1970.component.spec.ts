import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Experiment1970Component } from './experiment1970.component';

describe('Experiment1970Component', () => {
  let component: Experiment1970Component;
  let fixture: ComponentFixture<Experiment1970Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Experiment1970Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Experiment1970Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
