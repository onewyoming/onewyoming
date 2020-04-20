import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Experiment1252Component } from './experiment1252.component';

describe('Experiment1252Component', () => {
  let component: Experiment1252Component;
  let fixture: ComponentFixture<Experiment1252Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Experiment1252Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Experiment1252Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
