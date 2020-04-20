import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Experiment304Component } from './experiment304.component';

describe('Experiment304Component', () => {
  let component: Experiment304Component;
  let fixture: ComponentFixture<Experiment304Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Experiment304Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Experiment304Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
