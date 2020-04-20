import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Experiment364Component } from './experiment364.component';

describe('Experiment364Component', () => {
  let component: Experiment364Component;
  let fixture: ComponentFixture<Experiment364Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Experiment364Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Experiment364Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
