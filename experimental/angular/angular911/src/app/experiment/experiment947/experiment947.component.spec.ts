import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Experiment947Component } from './experiment947.component';

describe('Experiment947Component', () => {
  let component: Experiment947Component;
  let fixture: ComponentFixture<Experiment947Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Experiment947Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Experiment947Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
