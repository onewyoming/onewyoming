import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Experiment147Component } from './experiment147.component';

describe('Experiment147Component', () => {
  let component: Experiment147Component;
  let fixture: ComponentFixture<Experiment147Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Experiment147Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Experiment147Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
