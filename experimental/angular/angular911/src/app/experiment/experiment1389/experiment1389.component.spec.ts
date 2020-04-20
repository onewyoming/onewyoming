import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Experiment1389Component } from './experiment1389.component';

describe('Experiment1389Component', () => {
  let component: Experiment1389Component;
  let fixture: ComponentFixture<Experiment1389Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Experiment1389Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Experiment1389Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
