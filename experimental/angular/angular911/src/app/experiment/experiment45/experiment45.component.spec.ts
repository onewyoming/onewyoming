import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Experiment45Component } from './experiment45.component';

describe('Experiment45Component', () => {
  let component: Experiment45Component;
  let fixture: ComponentFixture<Experiment45Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Experiment45Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Experiment45Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
