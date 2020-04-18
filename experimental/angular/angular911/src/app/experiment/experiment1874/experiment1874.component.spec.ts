import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Experiment1874Component } from './experiment1874.component';

describe('Experiment1874Component', () => {
  let component: Experiment1874Component;
  let fixture: ComponentFixture<Experiment1874Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Experiment1874Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Experiment1874Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
