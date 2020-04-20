import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Experiment1212Component } from './experiment1212.component';

describe('Experiment1212Component', () => {
  let component: Experiment1212Component;
  let fixture: ComponentFixture<Experiment1212Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Experiment1212Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Experiment1212Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
