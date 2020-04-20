import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Experiment1367Component } from './experiment1367.component';

describe('Experiment1367Component', () => {
  let component: Experiment1367Component;
  let fixture: ComponentFixture<Experiment1367Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Experiment1367Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Experiment1367Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
