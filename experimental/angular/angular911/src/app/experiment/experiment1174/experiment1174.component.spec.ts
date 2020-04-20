import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Experiment1174Component } from './experiment1174.component';

describe('Experiment1174Component', () => {
  let component: Experiment1174Component;
  let fixture: ComponentFixture<Experiment1174Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Experiment1174Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Experiment1174Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
