import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Experiment1295Component } from './experiment1295.component';

describe('Experiment1295Component', () => {
  let component: Experiment1295Component;
  let fixture: ComponentFixture<Experiment1295Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Experiment1295Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Experiment1295Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
