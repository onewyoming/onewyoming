import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Experiment382Component } from './experiment382.component';

describe('Experiment382Component', () => {
  let component: Experiment382Component;
  let fixture: ComponentFixture<Experiment382Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Experiment382Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Experiment382Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
