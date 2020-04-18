import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Experiment1952Component } from './experiment1952.component';

describe('Experiment1952Component', () => {
  let component: Experiment1952Component;
  let fixture: ComponentFixture<Experiment1952Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Experiment1952Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Experiment1952Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
