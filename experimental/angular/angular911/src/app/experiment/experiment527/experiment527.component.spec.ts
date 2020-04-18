import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Experiment527Component } from './experiment527.component';

describe('Experiment527Component', () => {
  let component: Experiment527Component;
  let fixture: ComponentFixture<Experiment527Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Experiment527Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Experiment527Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
