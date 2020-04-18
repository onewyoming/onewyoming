import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Experiment509Component } from './experiment509.component';

describe('Experiment509Component', () => {
  let component: Experiment509Component;
  let fixture: ComponentFixture<Experiment509Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Experiment509Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Experiment509Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
