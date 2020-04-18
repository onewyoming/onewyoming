import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Experiment461Component } from './experiment461.component';

describe('Experiment461Component', () => {
  let component: Experiment461Component;
  let fixture: ComponentFixture<Experiment461Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Experiment461Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Experiment461Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
