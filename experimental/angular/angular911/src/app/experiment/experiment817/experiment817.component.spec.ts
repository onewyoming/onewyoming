import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Experiment817Component } from './experiment817.component';

describe('Experiment817Component', () => {
  let component: Experiment817Component;
  let fixture: ComponentFixture<Experiment817Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Experiment817Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Experiment817Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
