import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Experiment109Component } from './experiment109.component';

describe('Experiment109Component', () => {
  let component: Experiment109Component;
  let fixture: ComponentFixture<Experiment109Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Experiment109Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Experiment109Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
