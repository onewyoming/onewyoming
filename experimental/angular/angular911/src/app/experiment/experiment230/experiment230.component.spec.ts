import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Experiment230Component } from './experiment230.component';

describe('Experiment230Component', () => {
  let component: Experiment230Component;
  let fixture: ComponentFixture<Experiment230Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Experiment230Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Experiment230Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
