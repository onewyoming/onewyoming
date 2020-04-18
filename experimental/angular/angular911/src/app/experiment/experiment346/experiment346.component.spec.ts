import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Experiment346Component } from './experiment346.component';

describe('Experiment346Component', () => {
  let component: Experiment346Component;
  let fixture: ComponentFixture<Experiment346Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Experiment346Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Experiment346Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
