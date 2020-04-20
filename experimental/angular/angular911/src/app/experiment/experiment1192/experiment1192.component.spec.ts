import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Experiment1192Component } from './experiment1192.component';

describe('Experiment1192Component', () => {
  let component: Experiment1192Component;
  let fixture: ComponentFixture<Experiment1192Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Experiment1192Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Experiment1192Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
