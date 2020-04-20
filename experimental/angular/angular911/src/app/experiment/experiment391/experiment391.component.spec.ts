import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Experiment391Component } from './experiment391.component';

describe('Experiment391Component', () => {
  let component: Experiment391Component;
  let fixture: ComponentFixture<Experiment391Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Experiment391Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Experiment391Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
