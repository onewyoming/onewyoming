import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Experiment782Component } from './experiment782.component';

describe('Experiment782Component', () => {
  let component: Experiment782Component;
  let fixture: ComponentFixture<Experiment782Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Experiment782Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Experiment782Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
