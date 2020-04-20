import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Experiment1898Component } from './experiment1898.component';

describe('Experiment1898Component', () => {
  let component: Experiment1898Component;
  let fixture: ComponentFixture<Experiment1898Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Experiment1898Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Experiment1898Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
