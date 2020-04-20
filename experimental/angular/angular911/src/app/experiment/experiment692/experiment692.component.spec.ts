import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Experiment692Component } from './experiment692.component';

describe('Experiment692Component', () => {
  let component: Experiment692Component;
  let fixture: ComponentFixture<Experiment692Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Experiment692Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Experiment692Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
