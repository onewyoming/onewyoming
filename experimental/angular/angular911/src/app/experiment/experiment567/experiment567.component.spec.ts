import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Experiment567Component } from './experiment567.component';

describe('Experiment567Component', () => {
  let component: Experiment567Component;
  let fixture: ComponentFixture<Experiment567Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Experiment567Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Experiment567Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
