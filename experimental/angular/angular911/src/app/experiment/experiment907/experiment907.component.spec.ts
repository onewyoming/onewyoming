import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Experiment907Component } from './experiment907.component';

describe('Experiment907Component', () => {
  let component: Experiment907Component;
  let fixture: ComponentFixture<Experiment907Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Experiment907Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Experiment907Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
