import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Experiment707Component } from './experiment707.component';

describe('Experiment707Component', () => {
  let component: Experiment707Component;
  let fixture: ComponentFixture<Experiment707Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Experiment707Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Experiment707Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
