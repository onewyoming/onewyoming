import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Experiment1508Component } from './experiment1508.component';

describe('Experiment1508Component', () => {
  let component: Experiment1508Component;
  let fixture: ComponentFixture<Experiment1508Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Experiment1508Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Experiment1508Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
