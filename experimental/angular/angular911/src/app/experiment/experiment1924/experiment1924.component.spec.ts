import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Experiment1924Component } from './experiment1924.component';

describe('Experiment1924Component', () => {
  let component: Experiment1924Component;
  let fixture: ComponentFixture<Experiment1924Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Experiment1924Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Experiment1924Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
