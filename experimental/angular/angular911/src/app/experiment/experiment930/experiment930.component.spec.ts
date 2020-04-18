import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Experiment930Component } from './experiment930.component';

describe('Experiment930Component', () => {
  let component: Experiment930Component;
  let fixture: ComponentFixture<Experiment930Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Experiment930Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Experiment930Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
