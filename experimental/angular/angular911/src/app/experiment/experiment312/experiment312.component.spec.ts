import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Experiment312Component } from './experiment312.component';

describe('Experiment312Component', () => {
  let component: Experiment312Component;
  let fixture: ComponentFixture<Experiment312Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Experiment312Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Experiment312Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
