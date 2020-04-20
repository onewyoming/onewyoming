import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Experiment671Component } from './experiment671.component';

describe('Experiment671Component', () => {
  let component: Experiment671Component;
  let fixture: ComponentFixture<Experiment671Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Experiment671Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Experiment671Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
