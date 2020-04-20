import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Experiment911Component } from './experiment911.component';

describe('Experiment911Component', () => {
  let component: Experiment911Component;
  let fixture: ComponentFixture<Experiment911Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Experiment911Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Experiment911Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
