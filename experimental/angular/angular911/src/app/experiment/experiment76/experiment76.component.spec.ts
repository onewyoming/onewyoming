import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Experiment76Component } from './experiment76.component';

describe('Experiment76Component', () => {
  let component: Experiment76Component;
  let fixture: ComponentFixture<Experiment76Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Experiment76Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Experiment76Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
