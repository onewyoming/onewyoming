import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Experiment1903Component } from './experiment1903.component';

describe('Experiment1903Component', () => {
  let component: Experiment1903Component;
  let fixture: ComponentFixture<Experiment1903Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Experiment1903Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Experiment1903Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
