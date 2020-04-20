import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Experiment1462Component } from './experiment1462.component';

describe('Experiment1462Component', () => {
  let component: Experiment1462Component;
  let fixture: ComponentFixture<Experiment1462Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Experiment1462Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Experiment1462Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
