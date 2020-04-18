import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Experiment987Component } from './experiment987.component';

describe('Experiment987Component', () => {
  let component: Experiment987Component;
  let fixture: ComponentFixture<Experiment987Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Experiment987Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Experiment987Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
