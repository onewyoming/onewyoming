import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Experiment1358Component } from './experiment1358.component';

describe('Experiment1358Component', () => {
  let component: Experiment1358Component;
  let fixture: ComponentFixture<Experiment1358Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Experiment1358Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Experiment1358Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
