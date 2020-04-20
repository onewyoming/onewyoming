import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Experiment985Component } from './experiment985.component';

describe('Experiment985Component', () => {
  let component: Experiment985Component;
  let fixture: ComponentFixture<Experiment985Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Experiment985Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Experiment985Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
