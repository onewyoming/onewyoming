import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Experiment1281Component } from './experiment1281.component';

describe('Experiment1281Component', () => {
  let component: Experiment1281Component;
  let fixture: ComponentFixture<Experiment1281Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Experiment1281Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Experiment1281Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
