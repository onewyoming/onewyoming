import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Experiment687Component } from './experiment687.component';

describe('Experiment687Component', () => {
  let component: Experiment687Component;
  let fixture: ComponentFixture<Experiment687Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Experiment687Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Experiment687Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
