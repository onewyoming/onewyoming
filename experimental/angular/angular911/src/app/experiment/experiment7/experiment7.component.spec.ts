import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Experiment7Component } from './experiment7.component';

describe('Experiment7Component', () => {
  let component: Experiment7Component;
  let fixture: ComponentFixture<Experiment7Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Experiment7Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Experiment7Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
