import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Experiment534Component } from './experiment534.component';

describe('Experiment534Component', () => {
  let component: Experiment534Component;
  let fixture: ComponentFixture<Experiment534Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Experiment534Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Experiment534Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
